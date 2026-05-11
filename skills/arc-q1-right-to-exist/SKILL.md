---
name: arc-q1-right-to-exist
description: Use when a founder is articulating why their company should exist, defining their unfair advantage, evaluating category fit, mapping competition, or deciding what to refuse to build. The first Terrifying Question from the Sequoia Arc framework. Resolves only when the founder is "ready to marry the idea for the next decade-plus."
---

# Q1 — What is my company's right to exist?

## Overview

The first Terrifying Question (Sequoia Arc framework, sequoiacap.com/article/pmf-framework-2). Q1 is the bedrock — without a resolved Q1, every downstream question is built on sand. Pivots, even significant ones, mean regression to Q1.

**Resolution criterion (Sequoia, verbatim):** "Ready to marry the idea for the next decade-plus."

This is not a vibes test. It's a written articulation the founder is willing to defend in any room for ten years.

## Prerequisite

Requires `archetype-detection` resolved. The Q1 evidence bar tunes per archetype:

- **Hair on Fire** — Q1 can resolve quickly once the demand is empirically obvious; the unfair advantage is about being first or fastest to capture obvious demand.
- **Hard Fact** — Q1 takes longer; the unfair advantage is about reframing what was accepted-as-life into something solvable, plus the conviction to educate the market.
- **Future Vision** — Q1 takes longest (often years); the unfair advantage is about the technical wedge plus the founder's ability to endure multi-year non-validation.

## The four sub-questions (Sequoia, paraphrased structure)

A Q1-resolved founder can answer all four in writing, without hedging:

### 1.1 Founder-market fit

**Question:** Why are *you* the right founder for this problem, in this moment?

**Resolution evidence:**

- Decade(s) of immersion in the problem space, OR
- Personal/professional experience that gives non-obvious insight, OR
- A technical/distribution wedge the founder personally controls.

**Refusal triggers:**

- "Anyone could build this" — refuse. If anyone could, someone already has, or will, and you have no advantage.
- "We have a strong team" — refuse. Team is necessary, not sufficient. Founder-market fit asks about the founder, not the team.
- Founder cannot articulate their unique vantage in 2-3 sentences — refuse.

### 1.2 Category dynamics

**Question:** What category are you in (from the buyer's perspective), and what are the dynamics of that category right now?

**Resolution evidence:**

- Named category (the buyer would put you in it when shopping).
- Named market shift creating opportunity now vs. 5 years ago (regulation, technology, behavior, capital).
- Named exit-paths or precedent companies (gives the founder calibration; doesn't have to be the plan).

**Refusal triggers:**

- "We're a new category" — refuse unless the founder can also name the closest existing category. Buyers don't shop in your imagined category.
- "The category is huge and growing" — refuse. Macro size is not strategy. Name the wedge dynamics.

### 1.3 Competition

**Question:** Who is the competition, named?

**Resolution evidence:**

- Named direct competitors (companies, not "no one's doing this").
- Named indirect competitors (the spreadsheet, the consultant, the workaround, the do-nothing).
- Specific reason you win against each (a wedge, not a feature list).

**Refusal triggers:**

- "We have no competition" — refuse. Either you haven't looked, or you're Future Vision archetype (`archetype-detection` should have caught this) and the competition is the existing inferior reality.
- "We're better than them on features" — refuse. Features don't win. Wedges do (April Dunford, see `founder-rationalization-defense` entry #15).

### 1.4 Unfair advantage

**Question:** What's the asymmetric thing you have that competitors can't easily replicate?

**Resolution evidence:**

- Pick exactly one (founder-market fit / technical wedge / distribution wedge) and substantiate it with named evidence.
- Stack-rank if you have more than one, but commit to *one* as primary.

**Refusal triggers:**

- "We have great execution" — refuse. Execution is the baseline, not the wedge.
- "We'll figure it out" — refuse. The wedge is the reason the company exists.
- Founder claims all three (founder-market fit + technical + distribution) — refuse. That's not focus, that's marketing copy.

## The anti-roadmap

Q1 resolution requires the founder name **what they refuse to build**. Specifically:

- Three named adjacent problems they will NOT solve in the next 5 years.
- Three named buyer-cohorts they will NOT sell to in the next 5 years.
- The named end-state that would cause them to shut down (not "we'd raise less" — the actual failure condition).

Without the anti-roadmap, Q1 is not resolved. The anti-roadmap is what makes "marry the idea for a decade-plus" testable.

## Output to record

```
Q1 Resolution
=============
Founder-market fit: <2-3 sentence claim + named evidence>
Category: <named category + named dynamic shift>
Competition: <3-5 named competitors, direct and indirect>
Unfair advantage: <pick one, substantiate>
Anti-roadmap:
  - Won't build: <3 named adjacent problems>
  - Won't sell to: <3 named buyer-cohorts>
  - Shutdown condition: <the named failure>
Marry-the-idea statement: <one paragraph, defendable for 10 years>
Resolved: <date>
```

This goes in the session record. `refuse-below-threshold` reads it whenever Q1-related claims arrive.

## The conversation flow

When invoked:

1. Confirm archetype is on record. If not, route to `archetype-detection`.
2. Walk through the four sub-questions in order. Do not let the founder skip ahead.
3. Capture verbatim answers. Pressure-test each (the refusal triggers above).
4. Require the anti-roadmap.
5. Read the marry-the-idea statement out loud (metaphorically — present it to the founder for review).
6. If the founder hedges on any element, route to `founder-rationalization-defense` to find the matching pattern.
7. When all elements pass: write the output block to record, return ADVANCE verdict, route to `arc-q2-do-people-care`.

## Iconic case study (from Sequoia article 2 corpus)

**Nubank (David Vélez, Brazil, ~2013).** Pressure-tested Brazilian banking disruption broadly, then identified credit cards specifically as the wedge. Founder-market fit: Vélez had personal Brazilian banking pain + Sequoia background. Category: financial services / consumer credit (named category, not "fintech"). Competition: incumbent Brazilian banks (named: Itaú, Bradesco, Santander). Unfair advantage: regulatory-arbitrage timing window + customer-experience wedge. Anti-roadmap: refused to be a full retail bank in v1; refused to expand outside Brazil in the first 3 years.

The wedge — credit cards specifically, not "banking" generally — is what made Q1 resolvable. "Disrupt Brazilian banking" is not a marry-the-idea statement; "give Brazilians credit cards that don't suck" is.

## Common founder rationalizations at Q1

Cross-reference `founder-rationalization-defense` for the full table. High-frequency at Q1:

- "We're solving everything in this space" → entry #13 (positioning anti-pattern).
- "We have no competition" → entry #14.
- "We pivoted, Q1 doesn't apply" → entry #19.
- "We're too early for an anti-roadmap" → entry #22.
- "Our problem is obvious" → entry #23.

## Cross-references

- `archetype-detection` (prerequisite).
- `refuse-below-threshold` (gate enforcer).
- `founder-rationalization-defense` (the rationalization table).
- `arc-q2-do-people-care` (the next stage gate).
- `corpus-retrieval` (more iconic cases).

---

*Generated v0.1.0: hand-authored from canonical sources (Sequoia Arc framework article 2 at sequoiacap.com/article/pmf-framework-2; Nubank case from same article). v0.2.0 will be regenerated via EnactSkill `/generate` with full PDF source ingestion.*
