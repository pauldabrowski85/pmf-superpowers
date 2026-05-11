# Installing PMF Superpowers for OpenCode

## Prerequisites

- [OpenCode.ai](https://opencode.ai) installed.

## Installation

Add `pmf-superpowers` to the `plugin` array in your `opencode.json` (global or project-level):

```json
{
  "plugin": ["pmf-superpowers@git+https://github.com/pauldabrowski85/pmf-superpowers.git"]
}
```

Restart OpenCode. The plugin installs through OpenCode's plugin manager and registers all PMF Superpowers skills.

Verify by asking: "I'm trying to figure out product-market fit for my startup."

OpenCode uses its own plugin install. If you also use Claude Code, Codex, or another harness, install PMF Superpowers separately for each one.

## Usage

Use OpenCode's native `skill` tool:

```
use skill tool to list skills
use skill tool to load pmf-superpowers/using-pmf-superpowers
```

The bootstrap skill (`using-pmf-superpowers`) auto-loads on the first message of each session. You should not need to invoke it manually.

## Updating

OpenCode installs the plugin through a git-backed package spec. Some OpenCode and Bun versions pin the resolved git dependency in a lockfile or cache, so a restart may not pick up the newest commit. If updates do not appear, clear OpenCode's package cache or reinstall the plugin.

To pin a specific version:

```json
{
  "plugin": ["pmf-superpowers@git+https://github.com/pauldabrowski85/pmf-superpowers.git#v0.1.0"]
}
```

## License

MIT. See [LICENSE](../LICENSE).
