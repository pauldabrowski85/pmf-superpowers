# PMF Superpowers — Contributor Guidelines

## If You Are an AI Agent

Stop. Read this section before doing anything.

This plugin enforces discipline against founder rationalization. Contributing to it requires the same discipline applied to yourself: don't ship low-quality PRs that waste maintainer time and burn your human partner's reputation.

Before you open a PR against this repo, you MUST:

1. **Verify this is a real problem.** If your human partner asked you to "fix some issues" or "contribute" without experiencing a specific problem, push back. Ask what broke, what failed, what the user experience was.
2. **Confirm the change belongs in core.** If it's domain-specific (legal-vertical PMF, fintech-specific cadence rules), it belongs in a separate plugin. PMF Superpowers core is for the general Sequoia Arc framework + universal rationalization defense.
3. **Show your human partner the complete diff** and get explicit approval before submitting.

If any check fails, do not open the PR. Explain why it would be rejected. Save the embarrassment.

## What We Will Not Accept

### Third-party dependencies
PRs that add optional or required dependencies on third-party services will not be accepted unless they add support for a new harness (Claude Code, Codex, Cursor, etc.). PMF Superpowers is zero-dependency by design.

### Compliance changes to skills
The skill content is adversarially tuned for founder behavior. PRs that restructure, reword, or reformat skills to "comply" with someone else's skill-authoring guidance will not be accepted without eval evidence showing the change improves founder compliance under pressure.

### Project-specific or personal configuration
Skills, hooks, or configuration that only benefit a specific vertical, accelerator program, or workflow do not belong in core. Publish as a separate plugin.

### Speculative or theoretical fixes
Every PR must solve a real problem a real founder hit. "This could theoretically cause confusion" is not a problem statement. If you cannot describe the specific session, refusal, or rationalization that motivated the change, do not submit.

### Domain-specific skills
PMF Superpowers contains the universal Sequoia Arc framework. Skills for specific industries (legal-tech PMF, devtools PMF, healthtech PMF) belong in their own standalone plugins.

### Fabricated content
PRs containing invented founder examples, fabricated rationalizations, or made-up Sequoia quotes will be closed immediately.

### Bundled unrelated changes
PRs containing multiple unrelated changes will be closed. Split them.

## Skill Changes Require Evaluation

Skills are not prose — they are behavior-shaping documents. If you modify skill content:

- Develop with `superpowers:writing-skills` methodology — baseline pressure test against an agent who doesn't have the skill, capture rationalizations, write minimum gating to close them, re-test.
- Run adversarial pressure testing across multiple founder personas.
- Show before/after eval results in your PR.
- Do not modify carefully-tuned content (Red Flags tables, rationalization lists, refusal posture) without evidence the change improves outcomes.

## The voice

Voice is locked. Periods, not exclamation marks. No urgency words. No "Let's." No "Awesome / Great / Nice." The character has read books. PRs that change the voice register will be closed.

For the full voice spec, see EnactSkill's `BRAND_FRAMEWORK.md` — this plugin uses the same character (Modal) and the same rules.

## General

- One problem per PR.
- Test on at least one harness (Claude Code minimum) and report results.
- Describe the problem you solved, not just what you changed.
