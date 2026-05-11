---
name: refuse-below-threshold
description: Use when a founder claims resolution of any Terrifying Question (Q1-Q4), claims they have PMF, claims they're ready to scale, or claims a stage gate has been crossed. Checks evidence on record against Sequoia's threshold criteria. Returns REFUSED with gap, REVISIT with resolving-data ask, or ADVANCE with recorded resolution.
---

# Refuse Below Threshold

## Overview

The Sequoia Arc framework names four Terrifying Questions, each a stage gate, not a checkbox. This skill is the gate enforcer. When a founder claims resolution, this skill checks evidence on record against the threshold and returns one of three verdicts:

- **REFUSED** — evidence below threshold. Returns the gap and the next move.
- **REVISIT** — evidence ambiguous. Returns what additional data would resolve.
- **ADVANCE** — threshold met. Records the resolution.

The refusal is the product. Without thresholds, founders claim PMF whenever they feel like it. Frameworks without enforcement are decoration.

## The Iron Rule

```
NO Q-RESOLUTION CLAIM SHIPS WITHOUT EVIDENCE-ON-RECORD MATCHING THRESHOLD
```

Claiming Q2 resolved with 8 cold conversations? Refused. With 50+ conversations but 60% warm-intro'd? Refused. The threshold doesn't negotiate.

## Thresholds per question

### Q1: Right to exist

**Resolution criterion (Sequoia, verbatim):** "Ready to marry the idea for the next decade-plus."

**Evidence requirements:**

- Founder articulates the company's right to exist in one paragraph the founder would defend in any room for ten years.
- Founder names the competition (named companies, not "no one's doing this").
- Founder names the unfair advantage (founder-market fit, technical wedge, distribution wedge — pick one and substantiate it).
- Founder names what they'd refuse to build (the anti-roadmap — what's NOT on the table for the next 5 years).
- Founder names the failure mode that would cause them to shut down (not "we'd raise less," the actual end-state).

**Refusal triggers:**

- "We're solving everything in this space" — refuse. Name the wedge.
- "No one else is doing this" — refuse. Either you haven't looked or you're in Future Vision archetype (re-run `archetype-detection`).
- Founder hedges the decade-plus commitment — refuse. Hedging means Q1 is unresolved.
- "We'll figure out the unfair advantage as we go" — refuse. The unfair advantage is the reason the company exists.

### Q2: Do people care enough?

**Resolution criterion (Sequoia, paraphrased):** rabid customer interest, plus secured design partners. (Sequoia article 2: "If you're seeing rabid customer interest and you've secured design partners...")

**Evidence requirements (Hard Fact + Hair on Fire archetypes):**

- 50+ cold-outreach conversations on record (Sequoia: "50+ conversations in a week" cadence).
- <30% warm-intro'd. Warm leads are "predisposed to 'be nice'" (Sequoia, verbatim).
- ≥30% lean-in rate. Below this, "the problem may not matter as much as you thought" (Sequoia, verbatim).
- At least one secured design partner with rabid demand — paying or paid-pilot, not just verbal enthusiasm.

**Evidence requirements (Future Vision archetype):**

- Different signal pattern. Look for: a small cohort of obsessive early adopters using the product weekly, even with significant friction.
- Conversation count threshold relaxed (Future Vision sales cycles are multi-year), but obsessive-usage threshold tightened.
- Named technical milestone the cohort is willing to wait for.

**Refusal triggers:**

- "Beta users love it" without conversation-count evidence — refuse. Selection bias.
- ≥30% warm-intro'd — refuse. Re-run with cold outreach.
- "We have a design partner" without "rabid demand" evidence — refuse. Define what rabid means in the case (frequency of unsolicited use, willingness to pay, willingness to refer).
- "Most people we talk to like the idea" — refuse. Liking is not leaning in. Pressure-test for behavioral commitment.

### Q3: Does product change behavior?

**Resolution criterion (Sequoia, verbatim):** "A growing set of retained users, and a low churn rate."

**Evidence requirements:**

- Cohort retention curve flattens (the "smile" or "L-curve" pattern, not the cliff).
- Active usage frequency defined per product category (weekly for tools, daily for habits, monthly for events).
- Churn rate below archetype-appropriate threshold.
- Behavior the product enables that the user couldn't accomplish before — named explicitly.
- Stated love correlates with revealed behavior (NPS promoters who also have high usage).

**Refusal triggers:**

- "Users say they love it" without retention data — refuse. Stated love ≠ revealed behavior.
- Retention curve hasn't been measured — refuse. Measure first, claim second.
- High activation but cliff at week 2 — refuse. Activation is not retention.
- "The retention dip is just our funnel issue" — refuse. The dip IS the signal.

### Q4: Will customers pay enough to build a business?

**Resolution criterion (Sequoia, verbatim):** "Paying customers who feel they get great value" — and you can "chart a path to $500M in revenue."

**Evidence requirements:**

- Paying customers (not free, not unpaid pilots) who score high on "great value" (NPS, Sean Ellis 40% test, or equivalent).
- Unit economics positive at scale (CAC < LTV with margin for ops cost).
- Path to $500M articulated (TAM × penetration × ACV math the founder defends in writing).
- Pricing power demonstrated — successful price increase or willingness-to-pay data from prospects.

**Refusal triggers:**

- "We can charge more later" — refuse. Pricing is a real signal; weak pricing = weak Q4.
- "$500M is too narrow, we'll be bigger" — refuse. $500M is the threshold, not the ceiling. Hit it first.
- Unit economics negative with hand-wave — refuse. Show the path to positive with named drivers.
- "We have signed contracts but haven't been paid" — refuse until cash hits the account.

## Output format

When invoked, return exactly one of these three blocks:

**REFUSED:**

```
Verdict: REFUSED
Question: Q<N>
Evidence on record:
  - <bullet list of what's there>
Threshold (Sequoia, verbatim):
  "<quote>"
Gap:
  - <what's missing per threshold, specific>
Next move:
  - <concrete action that closes the gap, with cadence>
Cross-reference:
  - <which founder-rationalization-defense entry, if any, was matched>
```

**REVISIT:**

```
Verdict: REVISIT
Question: Q<N>
Evidence on record:
  - <bullet list>
Ambiguity:
  - <what's unclear>
Resolving data:
  - <specific data that would resolve the ambiguity>
```

**ADVANCE:**

```
Verdict: ADVANCE
Question: Q<N>
Evidence on record:
  - <bullet list>
Threshold met:
  - <criterion + evidence mapping>
Recorded resolution:
  - <one-paragraph summary the founder is committed to>
Next question:
  - Q<N+1> (skill: arc-q<N+1>-<name>)
```

## Common founder rationalizations to refuse against

Selected high-frequency examples here. The full table is in `founder-rationalization-defense`. Cross-invoke that skill whenever a pattern matches.

- "We don't need to hit 50 conversations because our market is small" — refuse. The 50 is calibrated for signal, not market size.
- "Our enterprise lead is paying $50K, that's resolution" — refuse if they're not the ICP. ICP-fit > revenue.
- "Founder-led sales doesn't count toward the 50" — counts. Founder calls are the highest-fidelity Q2 signal.
- "We can advance past Q1 because we have customers" — refuse. Customers without Q1 articulation means you got lucky; lucky isn't durable.

## When NOT to refuse

This skill is the gate, not a wall. Don't refuse when:

- The founder is *asking* whether the threshold is met (that's the right question — answer with what's missing).
- The evidence is genuinely strong but the founder phrased it weakly (return ADVANCE with stronger language).
- The threshold doesn't apply because the founder is in a different archetype than assumed (route to `archetype-detection`).

## Cross-references

- `archetype-detection` — re-run if archetype assumption is wrong.
- `founder-rationalization-defense` — invoke when the resolution claim relies on a known rationalization.
- `arc-q1-right-to-exist`, `arc-q2-do-people-care` — the Q-skills this gate sits in front of.
- `corpus-retrieval` — surface analogous cases of founders who tried to claim resolution below threshold and what happened.
