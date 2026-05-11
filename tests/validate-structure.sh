#!/usr/bin/env bash
# Structural validation for pmf-superpowers v0.1.0.
# Checks every JSON manifest parses, every SKILL.md has valid frontmatter,
# every case file has valid frontmatter, and the session-start hook produces
# valid JSON output in each platform context (Claude Code, Cursor, Copilot CLI).

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PLUGIN_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
FAIL=0

pass() { echo "  ✓ $1"; }
fail() { echo "  ✗ $1"; FAIL=1; }

echo "=== validating JSON manifests ==="
for manifest in \
  "${PLUGIN_ROOT}/.claude-plugin/plugin.json" \
  "${PLUGIN_ROOT}/.claude-plugin/marketplace.json" \
  "${PLUGIN_ROOT}/.codex-plugin/plugin.json" \
  "${PLUGIN_ROOT}/.cursor-plugin/plugin.json" \
  "${PLUGIN_ROOT}/hooks/hooks.json" \
  "${PLUGIN_ROOT}/hooks/hooks-cursor.json" \
  "${PLUGIN_ROOT}/gemini-extension.json" \
  "${PLUGIN_ROOT}/package.json"
do
  if python3 -c "import json; json.load(open('${manifest}'))" 2>/dev/null; then
    pass "$(basename "$(dirname "$manifest")")/$(basename "$manifest")"
  else
    fail "$(basename "$(dirname "$manifest")")/$(basename "$manifest") — invalid JSON"
  fi
done

echo ""
echo "=== validating SKILL.md frontmatter ==="
for skill in "${PLUGIN_ROOT}"/skills/*/SKILL.md; do
  name=$(basename "$(dirname "$skill")")
  if head -1 "$skill" | grep -q '^---$'; then
    if grep -q '^name:' "$skill" && grep -q '^description:' "$skill"; then
      pass "$name — frontmatter has name + description"
    else
      fail "$name — frontmatter missing name or description"
    fi
  else
    fail "$name — no YAML frontmatter"
  fi
done

echo ""
echo "=== validating case files frontmatter ==="
for case in "${PLUGIN_ROOT}"/skills/corpus-retrieval/cases/*.md; do
  name=$(basename "$case" .md)
  if head -1 "$case" | grep -q '^---$'; then
    for field in case_id founder archetype question_resolved source confidence; do
      if ! grep -q "^${field}:" "$case"; then
        fail "$name — missing field: $field"
        continue 2
      fi
    done
    pass "$name — all required schema fields present"
  else
    fail "$name — no YAML frontmatter"
  fi
done

echo ""
echo "=== smoke-testing session-start hook ==="

# Claude Code context
if CLAUDE_PLUGIN_ROOT="${PLUGIN_ROOT}" bash "${PLUGIN_ROOT}/hooks/session-start" 2>/dev/null \
  | python3 -c "import json,sys; d=json.load(sys.stdin); assert 'hookSpecificOutput' in d; assert d['hookSpecificOutput']['hookEventName']=='SessionStart'; assert 'EXTREMELY_IMPORTANT' in d['hookSpecificOutput']['additionalContext']" 2>/dev/null; then
  pass "Claude Code context — valid hookSpecificOutput with EXTREMELY_IMPORTANT"
else
  fail "Claude Code context — invalid output"
fi

# Cursor context
if CURSOR_PLUGIN_ROOT="${PLUGIN_ROOT}" bash "${PLUGIN_ROOT}/hooks/session-start" 2>/dev/null \
  | python3 -c "import json,sys; d=json.load(sys.stdin); assert 'additional_context' in d; assert 'EXTREMELY_IMPORTANT' in d['additional_context']" 2>/dev/null; then
  pass "Cursor context — valid additional_context (snake_case)"
else
  fail "Cursor context — invalid output"
fi

# Copilot CLI context
if COPILOT_CLI=1 bash "${PLUGIN_ROOT}/hooks/session-start" 2>/dev/null \
  | python3 -c "import json,sys; d=json.load(sys.stdin); assert 'additionalContext' in d; assert 'EXTREMELY_IMPORTANT' in d['additionalContext']" 2>/dev/null; then
  pass "Copilot CLI context — valid additionalContext (top-level)"
else
  fail "Copilot CLI context — invalid output"
fi

echo ""
echo "=== file inventory ==="
SKILL_COUNT=$(find "${PLUGIN_ROOT}/skills" -name 'SKILL.md' | wc -l | tr -d ' ')
CASE_COUNT=$(find "${PLUGIN_ROOT}/skills/corpus-retrieval/cases" -name '*.md' 2>/dev/null | wc -l | tr -d ' ')
WORD_COUNT=$(find "${PLUGIN_ROOT}/skills" -name '*.md' -exec cat {} \; | wc -w | tr -d ' ')
echo "  skills: ${SKILL_COUNT}"
echo "  case files: ${CASE_COUNT}"
echo "  total skill content: ${WORD_COUNT} words"

echo ""
if [ $FAIL -eq 0 ]; then
  echo "=== ALL CHECKS PASSED ==="
  exit 0
else
  echo "=== ${FAIL} CHECK(S) FAILED ==="
  exit 1
fi
