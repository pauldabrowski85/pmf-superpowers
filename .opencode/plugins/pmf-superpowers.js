/**
 * PMF Superpowers plugin for OpenCode.ai
 *
 * Injects pmf-superpowers bootstrap context via the experimental chat
 * message transform. Auto-registers skills directory via the config hook
 * (no symlinks needed).
 *
 * Mirrors the obra/superpowers OpenCode adapter pattern with hardening:
 *   - try/catch around readFileSync so transient IO errors don't crash every
 *     message (cache the failure once, log to stderr, degrade gracefully)
 *   - CRLF-tolerant frontmatter regex (Windows checkouts work)
 *   - EXTREMELY_IMPORTANT tag-strip on the SKILL.md body (prompt-injection
 *     defense matching the bash hook)
 *   - skillsDir existence check before mutating OpenCode config
 */

import path from 'path';
import fs from 'fs';
import os from 'os';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// CRLF-tolerant frontmatter extraction (avoid dependency on skills-core for bootstrap).
const extractAndStripFrontmatter = (content) => {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, content };

  const frontmatterStr = match[1];
  const body = match[2];
  const frontmatter = {};

  for (const line of frontmatterStr.split(/\r?\n/)) {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim();
      // Strip matched pair of quotes (not single unpaired quotes)
      const rawValue = line.slice(colonIdx + 1).trim();
      const valueMatch = rawValue.match(/^(["'])(.*)\1$/);
      frontmatter[key] = valueMatch ? valueMatch[2] : rawValue;
    }
  }

  return { frontmatter, content: body };
};

const normalizePath = (p, homeDir) => {
  if (!p || typeof p !== 'string') return null;
  let normalized = p.trim();
  if (!normalized) return null;
  if (normalized.startsWith('~/')) {
    normalized = path.join(homeDir, normalized.slice(2));
  } else if (normalized === '~') {
    normalized = homeDir;
  }
  return path.resolve(normalized);
};

// Strip EXTREMELY_IMPORTANT wrapper tags (underscore variant only) from skill
// content to prevent prompt-injection via context-tag escape. Mirrors the bash
// hook's sed strip.
const stripWrapperTags = (s) => s.replace(/<\/?EXTREMELY_IMPORTANT>/g, '');

// Module-level cache: undefined = not loaded, null = load failed (don't retry).
let _bootstrapCache = undefined;

export const PmfSuperpowersPlugin = async ({ client, directory }) => {
  const homeDir = os.homedir();
  const skillsDir = path.resolve(__dirname, '../../skills');
  const envConfigDir = normalizePath(process.env.OPENCODE_CONFIG_DIR, homeDir);
  const configDir = envConfigDir || path.join(homeDir, '.config/opencode');

  const getBootstrapContent = () => {
    if (_bootstrapCache !== undefined) return _bootstrapCache;

    const skillPath = path.join(skillsDir, 'using-pmf-superpowers', 'SKILL.md');

    try {
      const fullContent = fs.readFileSync(skillPath, 'utf8');
      const { content } = extractAndStripFrontmatter(fullContent);
      const safeContent = stripWrapperTags(content);

      const toolMapping = `**Tool Mapping for OpenCode:**
When skills reference tools you don't have, substitute OpenCode equivalents:
- \`TodoWrite\` → \`todowrite\`
- \`Task\` tool with subagents → Use OpenCode's subagent system (@mention)
- \`Skill\` tool → OpenCode's native \`skill\` tool
- \`Read\`, \`Write\`, \`Edit\`, \`Bash\` → Your native tools

Use OpenCode's native \`skill\` tool to list and load PMF Superpowers skills.`;

      _bootstrapCache = `<EXTREMELY_IMPORTANT>
You have PMF Superpowers.

**IMPORTANT: The using-pmf-superpowers skill content is included below. It is ALREADY LOADED — you are currently following it. Do NOT use the skill tool to load "using-pmf-superpowers" again — that would be redundant.**

${safeContent}

${toolMapping}
</EXTREMELY_IMPORTANT>`;
    } catch (err) {
      // Cache the failure so we don't crash on every message. Surface to stderr
      // so a debugging user can find the cause.
      process.stderr.write(
        `pmf-superpowers: failed to load bootstrap from ${skillPath}: ${err.code || err.message}\n`
      );
      _bootstrapCache = null;
    }

    return _bootstrapCache;
  };

  return {
    // Inject skills path into live config so OpenCode discovers pmf-superpowers
    // skills without requiring manual symlinks or config file edits.
    config: async (config) => {
      if (!fs.existsSync(skillsDir)) {
        process.stderr.write(
          `pmf-superpowers: skills directory does not exist at ${skillsDir}; not registering.\n`
        );
        return;
      }
      config.skills = config.skills || {};
      if (!Array.isArray(config.skills.paths)) {
        config.skills.paths = [];
      }
      if (!config.skills.paths.includes(skillsDir)) {
        config.skills.paths.push(skillsDir);
      }
    },

    // Inject bootstrap into the first user message of each session.
    // Using a user message instead of a system message avoids token bloat and
    // model compatibility issues seen in obra/superpowers (#750, #894).
    'experimental.chat.messages.transform': async (_input, output) => {
      const debug = (process.env.DEBUG || '').includes('pmf-superpowers');
      const bootstrap = getBootstrapContent();
      if (!bootstrap) { if (debug) console.error('pmf: no bootstrap'); return; }
      if (!output.messages.length) { if (debug) console.error('pmf: no messages'); return; }
      const firstUser = output.messages.find(m => m.info.role === 'user');
      if (!firstUser || !firstUser.parts.length) {
        if (debug) console.error('pmf: no first user msg');
        return;
      }

      // Guard: skip if first user message already contains bootstrap.
      if (firstUser.parts.some(p => p.type === 'text' && p.text.includes('EXTREMELY_IMPORTANT'))) {
        if (debug) console.error('pmf: already injected');
        return;
      }

      const ref = firstUser.parts[0];
      firstUser.parts.unshift({ ...ref, type: 'text', text: bootstrap });
    }
  };
};
