# Security Policy

PMF Superpowers is an open-source, MIT-licensed Claude Code plugin maintained by EnactSkill LLC (single-member Florida LLC, formation in progress; EIN `42-2437834`).

## Reporting a vulnerability

Send reports to **security@enactskill.com**. Do not file public GitHub issues for security findings — use the email channel so disclosure can be coordinated before a fix lands publicly.

- **Acknowledgment SLA:** 48 hours from receipt.
- **Disclosure window:** 90 days from acknowledgment, or sooner by agreement once a fix has shipped.
- **PGP:** not required. If you prefer encrypted reporting, say so in the first message and we will exchange a key.

Include reproduction steps, affected version, the harness used (Claude Code, Codex, Cursor, Gemini, OpenCode, Copilot CLI), and any proof-of-concept SKILL.md fixture.

## Supported versions

| Version | Status |
| --- | --- |
| `0.1.x` | Supported — security fixes ship as patch releases |
| `< 0.1.0` | Not supported |

Pin to a release tag for production use. `main` carries unreviewed changes.

## Threat model

The plugin reads `skills/using-pmf-superpowers/SKILL.md` from disk, strips a specific wrapper tag, embeds the content inside an authority-tagged block, and emits a JSON payload via a `SessionStart` hook. Surfaces under review:

- **Authority-tag injection.** A malicious SKILL.md could try to close the `<EXTREMELY_IMPORTANT>` wrapper the hook adds and open its own. Mitigated in v0.1.1: the hook runs `sed -E 's|</?EXTREMELY_IMPORTANT>||g'` on skill content before wrapping. The hyphen variant `<EXTREMELY-IMPORTANT>` is legitimate skill content and is preserved.
- **JSON encoding.** Control characters (0x00–0x1F) and Unicode line separators (U+2028, U+2029) in skill content could break naive string-concatenation JSON. Mitigated in v0.1.1: encoding is delegated to `python3 json.dumps` for RFC-compliant output.
- **Cross-harness adapters.** `.codex-plugin/`, `.cursor-plugin/`, `.opencode/`, and `gemini-extension.json` reuse the same `hooks/session-start` script and inherit the same mitigations. The Windows dispatcher `hooks/run-hook.cmd` plus `.gitattributes` `eol=lf` enforcement guard against CRLF-induced silent breakage.
- **SKILL.md trust boundary.** Skill changes pass through PR review against the `CLAUDE.md` contributor rules — no fabricated content, no third-party dependencies, no domain-specific skills, no compliance rewrites without eval evidence. Assume malicious PRs will be attempted.

## What this plugin does not do

- No network requests at runtime.
- No credential storage or secret access.
- No filesystem writes outside the plugin directory.
- No execution of code embedded in SKILL.md content.
- No telemetry, analytics, or crash reporting from the plugin runtime.

## Known mitigations in current version

| Version | Mitigation |
| --- | --- |
| `0.1.1` | Tag-strip against authority-tag escape (strips `<EXTREMELY_IMPORTANT>` and `</EXTREMELY_IMPORTANT>` before wrapping; preserves the hyphen variant) |
| `0.1.1` | RFC-compliant JSON encoding via `python3 json.dumps` |
| `0.1.1` | Fail-loud (`set -euo pipefail`, stderr + non-zero exit) when SKILL.md is missing or unreadable |
| `0.1.1` | `.gitattributes` enforces LF on `hooks/session-start`, `hooks/run-hook.cmd`, and `*.sh` |

## For researchers

There is no monetary bug bounty at this stage. EnactSkill LLC is a single-member entity in early formation and does not yet have a funded security program. Reports that arrive with a working patch will be credited by name (or handle, on request) in the release notes for the version that ships the fix. Say so in the report if you would prefer not to be named.

## Out of scope

- Issues in dependencies — the plugin has no runtime third-party dependencies.
- Social engineering of maintainers or contributors.
- Physical access to a user's machine.
- Denial of service via very large SKILL.md files. The plugin intentionally has no rate limit or size cap on skill content.
- Issues in the host harness (Claude Code, Codex, Cursor, Gemini, OpenCode, Copilot CLI). Report those to the harness vendor.

---

Material changes to this policy ship in versioned releases.
