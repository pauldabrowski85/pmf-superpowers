---
name: archetype-detection
description: Use when a founder describes their startup, problem space, or market without having declared an archetype. Refuses to advance to Q1-Q4 skills until archetype is determined and recorded with reasoning.
---

# Archetype Detection

## Overview

Sequoia's PMF framework names three startup archetypes — Hair on Fire, Hard Fact, Future Vision. The archetype determines:

- Which Q-skill content applies (operating priorities differ per archetype).
- What refusal thresholds operate (Hair on Fire founders move faster; Future Vision founders need endurance evidence over conversation-count evidence).
- What rationalizations are most common at each stage.

The archetype is not a property of the company. It's a property of the **buyer-cohort × pain × moment**. A startup can be Hard Fact at the platform level and Hair on Fire inside one vertical. Pick the dominant one for the wedge ICP at hand.

## The Iron Rule

```
NO Q-SKILL ADVANCES WITHOUT ARCHETYPE + REASONING ON RECORD
```

If the founder hasn't declared an archetype, this skill is the only one the agent runs. Q1-Q4 are blocked until archetype is on record.

## The three archetypes (Sequoia, verbatim where quoted)

### Hair on Fire

> "You solve a problem that's a clear, urgent need for customers. The demand is obvious."

**Examples (illustrative, not Sequoia-named):** Wiz (CISOs needing vuln remediation this quarter), Rippling (HR teams needing consolidation today).

**Operating priority (Sequoia, verbatim fragment):** "...both a great product and a great go-to-market effort — in quick succession." (The Hair on Fire path requires both, per Sequoia article 1.)

**Signal:** Prospects ask "when can I have it" inside the first conversation. Demos convert to paid pilots in days, not months. Customers walk through walls to find you.

**Anti-signal:** "Interesting, tell me more" is the opposite of Hair on Fire. If you have to explain why this matters, you're not in this category.

### Hard Fact

> "You take a pain point universally accepted as a hard fact of life, and see that it's merely a hard problem that your product solves for the customer."

**Examples (Square and HubSpot named by Sequoia; Uber illustrative):** Square/Block (small merchants accepting they couldn't take cards), HubSpot (small businesses accepting they couldn't afford enterprise marketing), Uber (everyone accepting taxis were broken).

**Operating priority (Sequoia, verbatim fragment):** "...first educating the market, and then capturing the opportunity." (The Hard Fact path requires this, per Sequoia article 1.)

**Signal:** Prospects say "huh, I'd never thought of that as a solvable problem" or "I'd accepted that as the cost of doing business." Long sales cycles with category-education first.

**Anti-signal:** If prospects already know they want a solution and are evaluating vendors, you're competing in an established category — that's not Hard Fact.

### Future Vision

> "You enable a new reality through visionary innovation. It sounds like science fiction to customers."

**Examples:** Nvidia, OpenAI, Apple (iPhone, Vision Pro).

**Operating priority (Sequoia, verbatim fragment):** "...endurance and the ability to attract and retain top talent for the long haul." (Taking the Future Vision path requires this, per Sequoia article 1.)

**Signal:** Prospects say "wait, you do *what*?" or "this would be amazing if it actually worked." Multi-year time-to-PMF normal.

**Anti-signal:** Reality already permits what you're building. If the product is technically possible today with off-the-shelf parts, it's not visionary — it's an execution play.

**Failure mode (Sequoia, named):** "Too early." Google Glass spent 11 years without mainstream adoption.

## Determination rubric

Ask the founder these in order. The pattern of answers determines archetype.

1. **What's the prospect's first reaction when you describe the problem you solve?**
   - "When can I have it?" → Hair on Fire candidate.
   - "Huh, I'd never thought of that as solvable" → Hard Fact candidate.
   - "Wait, you do *what*?" → Future Vision candidate.

2. **What's the alternative the prospect uses today?**
   - Inferior tool, expensive consultant, or workaround they hate → Hair on Fire (if actively shopping) or Hard Fact (if they've stopped looking).
   - Nothing — the problem is currently impossible → Future Vision.

3. **What's the sales cycle length you've observed (or estimate)?**
   - Days to weeks → Hair on Fire.
   - Months to a year → Hard Fact (educating first).
   - Multi-year → Future Vision.

4. **What's the category status?**
   - Established competitive category → revisit. Better-mousetrap plays are not Hair on Fire. They might be Hard Fact if you're reframing what "solving X" means.
   - No category exists → Future Vision or Hard Fact, depending on whether the underlying technology is mature.

## Output to record

Write the archetype determination to the session as:

```
Archetype: <Hair on Fire | Hard Fact | Future Vision>
Reasoning:
  - Prospect-reaction evidence: <quote one verbatim>
  - Alternative-they-use: <name>
  - Cycle-length evidence: <observed range>
  - Category status: <established | reframe | new>
Operating priority: <Sequoia's verbatim priority for this archetype>
Determined: <date>
Wedge ICP: <one sentence — the specific buyer-cohort × pain × moment this applies to>
```

Without this on record, no Q-skill advances.

## Common mistakes

| Mistake | Reality |
|---|---|
| "We're all three depending on the customer" | Pick the dominant one for the wedge ICP. Multi-archetype = no archetype = no clarity. Run the rubric again with one specific buyer-cohort in mind. |
| "Skip ahead, archetype doesn't matter for Q1" | Q1's resolution criterion ("marry the idea for a decade-plus") tunes differently per archetype. Future Vision Q1 takes longer than Hair on Fire Q1. It matters. |
| "I'll determine archetype later after I think about it" | Determination IS the thinking. Walk through the rubric. |
| "Future Vision feels best — it's the most ambitious" | Visionary self-positioning kills more startups than it builds. Pick what the prospect data supports, not what you wish were true. |
| "We're between Hard Fact and Hair on Fire" | If you have to pick, pick Hard Fact and treat it as the conservative default. The Sequoia operating priority for Hard Fact (educate-then-capture) is the safer playbook. Re-test in 90 days. |

## When to re-run

Re-run archetype-detection when:

- You pivot to a new buyer-cohort.
- Prospect reactions change materially over 10+ conversations.
- You enter a new vertical (verticals can have different archetypes than the platform-level company).
- The cycle-length you've observed diverges from your initial archetype assignment.

## Cross-references

- After determination, route to `arc-q1-right-to-exist` if Q1 is unresolved, or `arc-q2-do-people-care` if Q1 is resolved.
- If the founder is rationalizing about archetype ("we're all three"), invoke `founder-rationalization-defense`.
- If the founder claims an archetype without the rubric evidence, invoke `refuse-below-threshold`.
