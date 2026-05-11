# Acceptance Test — PMF Superpowers v0.1.0

This document is the manual acceptance test for the plugin. Per `obra/superpowers'` contributor guidelines: *"A real integration loads the bootstrap at session start. The bootstrap is what causes skills to auto-trigger at the right moments. Without it, the skills are dead weight — present on disk but never invoked."*

Run the relevant harness section after installing the plugin. The test passes when the plugin auto-triggers the `using-pmf-superpowers` bootstrap and refuses to proceed without archetype determination.

## Pre-test: structural validation

Before running any harness test:

```bash
./tests/validate-structure.sh
```

Expected: `=== ALL CHECKS PASSED ===`. If structural validation fails, the harness tests will also fail.

## Test 1: Claude Code

### Install

```bash
# From a fresh Claude Code session
/plugin marketplace add pauldabrowski85/pmf-superpowers
/plugin install pmf-superpowers@pmf-superpowers-dev
```

Then restart Claude Code (close the session, open a new one).

### Execute

In the **fresh** session, send exactly this message:

> I want to find product-market fit for my startup.

### Pass criteria

The agent's first response must:

1. **Reference the using-pmf-superpowers bootstrap.** (You'll see it in the system reminder content auto-injected at session start.)
2. **Refuse to advance to PMF advice without archetype determination.** Specifically, the agent should route to `archetype-detection` first.
3. **Quote or reference Sequoia's three archetypes** (Hair on Fire / Hard Fact / Future Vision).

### Failure modes

- Agent gives generic PMF advice without invoking the skill → plugin not auto-loading. Check hook configuration.
- Agent proceeds past archetype without asking → gating language not enforcing. Check `using-pmf-superpowers/SKILL.md`.
- Agent says "I don't have skills for that" → plugin not installed correctly.

## Test 2: Codex CLI

### Install

```bash
/plugins
# search "pmf-superpowers"
# select Install Plugin
```

### Execute

Same trigger message as Test 1.

### Pass criteria

Same as Test 1. The Codex marketplace surfaces the `interface` block from `.codex-plugin/plugin.json` for discovery; the actual runtime behavior is identical to Claude Code.

## Test 3: Cursor

### Install

In Cursor Agent chat:

```
/add-plugin pmf-superpowers
```

Or search for "pmf-superpowers" in the plugin marketplace.

### Execute

Same trigger message as Test 1.

### Pass criteria

Same as Test 1. Cursor uses `hooks/hooks-cursor.json` for the SessionStart hook; the output schema is `additional_context` (snake_case) rather than `hookSpecificOutput.additionalContext` (nested).

## Test 4: Gemini CLI

### Install

```bash
gemini extensions install https://github.com/pauldabrowski85/pmf-superpowers
```

### Execute

Same trigger message as Test 1.

### Pass criteria

Gemini CLI auto-loads `GEMINI.md` at session start (per `gemini-extension.json`'s `contextFileName` field). The agent should reference the PMF Superpowers framework and refuse to proceed without archetype.

## Test 5: OpenCode

### Install

Add to `opencode.json`:

```json
{
  "plugin": ["pmf-superpowers@git+https://github.com/pauldabrowski85/pmf-superpowers.git"]
}
```

Restart OpenCode.

### Execute

Same trigger message as Test 1.

### Pass criteria

OpenCode loads the plugin via the `experimental.chat.messages.transform` hook in `.opencode/plugins/pmf-superpowers.js`, which injects the bootstrap into the first user message. The agent should reference the PMF Superpowers framework and refuse to proceed without archetype.

## Test 6: GitHub Copilot CLI

### Install

```bash
copilot plugin marketplace add pauldabrowski85/pmf-superpowers
copilot plugin install pmf-superpowers@pmf-superpowers-dev
```

### Execute

Same trigger message as Test 1.

### Pass criteria

Copilot CLI uses the top-level `additionalContext` field from the SessionStart hook output. The agent should reference the PMF Superpowers framework and refuse to proceed without archetype.

## Test 7: Refusal stress test

After the plugin is installed in any harness, run this adversarial test in a fresh session:

> We have 8 cold-outreach conversations with prospects and most of them seemed interested. I think we have product-market fit. Can you help me draft the press release?

### Pass criteria

The agent must:

1. **Refuse to draft the press release.**
2. **Quote the Q2 threshold** — 50+ cold-outreach conversations (Sequoia, verbatim) — and note the 8 is below.
3. **Route to `refuse-below-threshold`** and return a REFUSED verdict with the gap (42 more conversations + lean-in metric + warm/cold ratio + secured design partner).
4. **Reference one of the `founder-rationalization-defense` entries** that matches "most of them seemed interested" (likely entry #1 — confirmation bias, or entry #7 — Mom Test compliments warning).

If the agent drafts the press release, the gating layer is broken.

## Reporting results

When the plugin auto-triggers correctly in a harness, paste the session transcript into the corresponding GitHub issue or PR. For new harness support PRs, the transcript is required per the contributor guidelines (`CLAUDE.md`).
