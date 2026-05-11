---
name: corpus-retrieval
description: Use when a founder asks for analogous iconic-startup cases, asks "how did <named startup> resolve this?", or needs precedent for a Q1/Q2/Q3/Q4 decision shape. Searches the case library indexed by archetype × question × decision shape. Returns the closest 1-3 cases with verbatim sourcing.
---

# Corpus Retrieval

## Overview

Iconic-startup PMF paths are the most credible counter to founder rationalization. When a founder claims "we don't need to refuse non-ICP revenue," surfacing DoorDash's refusal of non-restaurant merchants is more persuasive than abstract argument.

This skill indexes case files in `skills/corpus-retrieval/cases/` by:

- **Archetype** (Hair on Fire / Hard Fact / Future Vision)
- **Question resolved** (Q1 / Q2 / Q3 / Q4, with timing if re-asked)
- **Decision shape** (e.g., wedge-narrowing, ICP-refinement, pricing-pivot, archetype-re-evaluation)

When invoked, returns 1-3 closest matches with the founder's verbatim quote where available + a route back to the relevant Q-skill or `refuse-below-threshold` gate.

## The Iron Rule

```
NO FABRICATED CASES. NO PARAPHRASED-AS-VERBATIM QUOTES.
```

Every case in the corpus has a named source citation. If a case has no primary-source attribution (founder essay, Sequoia article, public interview, S-1 filing), it doesn't ship. Speculation about how Stripe found PMF is not evidence.

## Case file schema

Each case file in `cases/` follows this schema:

```yaml
---
case_id: <kebab-case-unique>
founder: <named, multiple if co-founders>
company: <company-name>
archetype: <hair-on-fire | hard-fact | future-vision>
question_resolved: Q<N>
year_resolved: <year or range>
wrong_initial_hypothesis: "<verbatim or paraphrased with attribution>"
cold_outreach_count: "<verbatim from source>"
discovery_moment: "<what changed>"
what_they_refused: "<the off-the-table decision>"
pmf_signal: "<the rabid-demand evidence>"
decision_shape: <wedge-narrowing | icp-refinement | pricing-pivot | archetype-re-evaluation | other>
source: "<primary-source citation>"
confidence: <high | medium | low>
---

# <Company> — <one-line summary>

<2-4 paragraph narrative connecting Q1/Q2/Q3/Q4 resolution to the founder's
specific moves. Cite primary source for every quote.>

## What the founder did
- <bulleted move 1>
- <bulleted move 2>

## What they refused
- <bulleted refusal 1>
- <bulleted refusal 2>

## How this applies to your situation
<1 paragraph mapping the case's lesson to the founder's current question.>
```

## v0.1.0 corpus inventory

5 cases shipped in v0.1.0, all sourced from Sequoia Arc framework article 2 (`https://sequoiacap.com/article/pmf-framework-2/`):

| case_id | Company | Founders | Archetype | Q resolved | Decision shape |
|---|---|---|---|---|---|
| `nubank-q1-q2-credit-cards` | Nubank | David Vélez | hard-fact | Q1 + Q2 | wedge-narrowing |
| `doordash-q2-restaurant-icp` | DoorDash | Tony Xu, Stanley Tang, Andy Fang, Evan Moore | hard-fact | Q2 | icp-refinement |
| `dropbox-q3-viral-onboarding` | Dropbox | Drew Houston | hard-fact | Q3 | retention-mechanism |
| `square-q4-transaction-fees` | Square/Block | Jack Dorsey | hard-fact | Q4 | pricing-pivot |
| `robinhood-q2-active-traders` | Robinhood | Vlad Tenev | hair-on-fire (after 2022) | Q2 (re-asked) | archetype-re-evaluation + icp-refinement |

v0.2.0 expansion target: 15-25 cases. Sources expand to First Round Review, NfX, founder retrospectives (Drew Houston's "The Dropbox Story", Patrick Collison's interviews), and primary-source S-1 filings.

## Retrieval logic

When invoked with a query, match in this priority:

1. **Exact decision-shape match** (e.g., founder is doing wedge-narrowing → return Nubank).
2. **Same archetype + same question** (e.g., founder is Hard Fact at Q2 → return DoorDash).
3. **Same question, different archetype** (e.g., founder is Hair on Fire at Q2 → return Robinhood's 2022 re-evaluation).
4. **Founder explicitly asks about a named company** — return that case if present, else acknowledge absence.

Return 1-3 cases. More than 3 dilutes the signal.

## Output format

```
Corpus matches (N=<count>):

1. <company> — <one-line summary>
   Archetype: <archetype> | Q resolved: Q<N> | Year: <year>
   Founder's verbatim move (where attributed): "<quote>"
   What they refused: <refusal>
   Why this applies to your situation: <one paragraph>
   Source: <citation>

2. <next case if applicable>

3. <next case if applicable>

Route back to: <arc-q<N>-<name> | refuse-below-threshold | founder-rationalization-defense>
```

## When NOT to surface corpus matches

Don't surface cases:

- When the founder hasn't yet resolved archetype (route to `archetype-detection` first — cases are calibrated by archetype).
- When the founder's question is too vague for shape-matching ("how did Stripe do it?" without specifying which question).
- When the closest case is below confidence threshold (e.g., a case with `confidence: low` and no primary-source quote).

Surfacing weak cases dilutes the high-confidence ones.

## Adding new cases

Per `CLAUDE.md` contributor guidelines:

1. Find a primary source (founder essay, named interview, Sequoia/First Round/NfX article, S-1 filing).
2. Extract the case using the schema. Quote verbatim where possible.
3. Set `confidence: high` only if all four schema fields (wrong_initial_hypothesis, cold_outreach_count, discovery_moment, what_they_refused) come from primary source.
4. Submit PR. The maintainer (Paul / EnactSkill) will pressure-test against the source.

No paraphrased-as-verbatim quotes. No "the founder probably did X" entries. Speculation is not the product.

## Cross-references

- `archetype-detection` (prerequisite for accurate matching).
- `arc-q1`, `arc-q2`, `arc-q3`, `arc-q4` (the questions the cases map to).
- `refuse-below-threshold` (corpus cases are evidence that thresholds matter).
- `founder-rationalization-defense` (corpus cases counter specific rationalizations).

---

*v0.1.0: 5 cases from Sequoia article 2. v0.2.0: 15-25 case target with EnactSkill-generated case files from founder retrospectives.*
