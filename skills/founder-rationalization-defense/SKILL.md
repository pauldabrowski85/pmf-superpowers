---
name: founder-rationalization-defense
description: Use when a founder uses a known rationalization to skip customer development, evidence gathering, refusal-below-threshold checks, archetype determination, or stage-gate resolution criteria. Returns the matched counter, the named source, the specific evidence requirement, and the Q-skill the rationalization is trying to evade.
---

# Founder Rationalization Defense

## Overview

Every founder framework — Sequoia, The Mom Test (Rob Fitzpatrick), Customer Development (Steve Blank), Obviously Awesome (April Dunford) — has survived in the literature because founders read them and still skip the prescribed work. The skipping happens through a finite set of rationalizations.

This skill enumerates them with counters and specific evidence requirements. When the founder uses one of these patterns, the agent invokes this skill, returns the matched counter, and routes back to the appropriate Q-skill or refusal gate.

## The Iron Rule

```
EVERY RATIONALIZATION HAS A NAMED COUNTER AND A NAMED EVIDENCE REQUIREMENT
```

If a rationalization isn't in this table yet, capture it (verbatim from the session), draft the counter, name the evidence requirement, and submit a PR per `CLAUDE.md` contributor guidelines.

## The table (v0.1.0 — expansion target: 30 entries)

### Sequoia Arc anti-patterns (verbatim quotes from sequoiacap.com/article/pmf-framework-2)

| # | Rationalization | Counter | Evidence requirement | Route to |
|---|---|---|---|---|
| 1 | "It can be easy to talk yourself into believing that customers are more excited about your idea than they are." (Sequoia, verbatim) | Confirmation bias. Score every conversation on a fixed rubric *before* the call ends. Refuse to revise scores upward post-hoc. | Pre-call rubric + locked post-call scores for 10+ conversations. | `arc-q2-do-people-care` |
| 2 | "Most of them seemed to like it" but the lean-in rate is low. | "If only one in 10 customer conversations lean in, the problem may not matter as much as you thought" (Sequoia, verbatim). Weak signal. Below 30% lean-in → refuse Q2 resolution, return to Q1. | Lean-in rate computed across 50+ conversations. | `refuse-below-threshold` |
| 3 | "Warm leads are easier and they're enthusiastic." | Warm leads are "predisposed to 'be nice'" (Sequoia, verbatim). Refuse Q2 resolution if >30% warm-intro'd. | Cold-outreach conversation count + warm/cold ratio. | `arc-q2-do-people-care` |
| 4 | "Practice is messier than theory, so the linear progression doesn't apply to us." (Sequoia article 2 verbatim: "Practice is always messier than theory") | Sequoia agrees practice is messy AND says founders should "move fluidly between" the four questions. Both regression and re-resolution are expected. What's not allowed is *pretending* the regression isn't happening. | Re-resolved Q1 with the new hypothesis recorded. | `arc-q1-right-to-exist` |

### The Mom Test (Rob Fitzpatrick) — paraphrased principles

| # | Rationalization | Counter | Evidence requirement | Route to |
|---|---|---|---|---|
| 5 | "I'll ask my friends if they like the idea." | Friends and family lie politely. Ask about past behavior, not opinions of your idea. | 5 customer conversations focused on past behavior + spend + workarounds. | `arc-q2-do-people-care` |
| 6 | "They said they'd pay for it." | Anything customers say about future behavior is overly optimistic. Get a real commitment. | Pre-payment, LOI, or paid pilot from at least one. | `refuse-below-threshold` |
| 7 | "The interview went great — they loved everything." | Compliments are a warning sign in the Mom Test framework. Press on specifics. | Three named past attempts the prospect has made to solve this problem, with money or time spent. | `arc-q2-do-people-care` |
| 8 | "I pitched the idea and they got excited." | Stop pitching. Listen. You're there to learn, not to convince. | Interview transcripts with founder-talk-time <30%. | `arc-q2-do-people-care` |
| 9 | "We don't need to dig for specific past behavior — they said the problem is real." | Stated problems and revealed problems diverge. The customer who pays for the existing inferior solution is the customer whose problem is real. | Named past spend (money, time, or tool) on the problem area. | `arc-q2-do-people-care` |

### Customer Development (Steve Blank, Four Steps to the Epiphany)

| # | Rationalization | Counter | Evidence requirement | Route to |
|---|---|---|---|---|
| 10 | "We can launch and iterate, learning is faster in market." | Customer Discovery happens *before* launch. Launching with the wrong customer set wastes the launch. | Customer Discovery hypothesis validated by 10+ prospect interviews before public launch. | `arc-q1-right-to-exist` |
| 11 | "Product Management can decide the ICP." | ICP determination is a founder task in early-stage. Delegating it = abdicating Q1+Q2. | Founder-led ICP doc, not PM-delegated. Signed by founder. | `archetype-detection` |
| 12 | "Sales will figure out who buys." | Hiring sales before Customer Validation is a leading reason early-stage companies burn through Series A (Blank's Customer Development model). | Founder-led sales until 10 paying customers in the named ICP. | `refuse-below-threshold` (v0.1: Q4 logic; v2+: `arc-q4-pay-enough`) |

### Positioning anti-patterns (April Dunford, Obviously Awesome)

| # | Rationalization | Counter | Evidence requirement | Route to |
|---|---|---|---|---|
| 13 | "Our positioning is 'for everyone who wants X'." | Positioning that includes everyone positions you for no one. Pick the wedge segment. | Wedge segment named with explicit disqualifiers ("not for X, not for Y, not for Z"). | `arc-q1-right-to-exist` |
| 14 | "We compete with no one — we're a new category." | Categories are how buyers shop. If there's no category, you're invisible. Even "new categories" compete with the status quo. | Named competitive alternative (could be a spreadsheet, a manual process, or a do-nothing). | `arc-q1-right-to-exist` |
| 15 | "We'll position based on features." | Features are how you build. Positioning is how the buyer compares you to alternatives. | Positioning statement: "for <segment> who <pain>, our product is a <category> that <unique value>." | `arc-q1-right-to-exist` |

### Founder-pattern rationalizations (EnactSkill pain-data + observed)

| # | Rationalization | Counter | Evidence requirement | Route to |
|---|---|---|---|---|
| 16 | "Building is faster than talking." | Building the wrong thing is slowest. Time-to-deletion is the real metric. | Cold-conversation count >= cumulative dev hours / 10. | `arc-q2-do-people-care` |
| 17 | "We can't refuse this enterprise lead, they'd pay $X." | If they're not the ICP, the revenue is poison. DoorDash refused non-restaurant merchants. | ICP-fit assessment of the lead before contract signing. | `refuse-below-threshold` (v0.1: Q4 logic; v2+: `arc-q4-pay-enough`) |
| 18 | "Our beta users love it." | Selection bias. What do non-users say? Did they choose not to use it, or do they not know it exists? | Non-user research: 10 prospect interviews of people who haven't used the product, with reasoning captured. | `arc-q2-do-people-care` |
| 19 | "We pivoted, so Q1 doesn't apply anymore." | Pivots mean regression to Q1. Re-resolve Q1 with the new hypothesis on record. | Q1 re-resolution doc dated post-pivot. | `arc-q1-right-to-exist` |
| 20 | "Sequoia's framework is for VC-track companies, not bootstrappers." | The framework is for companies that want to know if they have a business. Bootstrappers benefit more, not less. | (No evidence needed. Don't accept the exemption.) | `using-pmf-superpowers` |
| 21 | "Customer interviews aren't possible in our regulated industry." | Regulated industries do customer development too. Different methods (advisory boards, partner discovery), same evidence requirement. | 10+ structured advisor/partner conversations, scored on rubric. | `arc-q2-do-people-care` |
| 22 | "We're too early to talk to customers." | Too-early-to-talk is too-early-to-build. If you can't describe the buyer, you can't build the product. | One prospect conversation before any line of code. | `arc-q1-right-to-exist` |
| 23 | "Our problem is obvious." | The problem is never obvious. If it were, someone solved it already and won. | Named competitor + named reason they failed to solve it. | `arc-q1-right-to-exist` |
| 24 | "Founder-led sales doesn't count toward the 50." | Counts. Founder calls are the highest-fidelity Q2 signal. | All founder-led calls logged with rubric scores. | `arc-q2-do-people-care` |
| 25 | "We'll do customer interviews after we ship v2." | Q2 is upstream of v2. Without Q2 resolved, v2 is hypothesis maintenance. | Q2 evidence on record before the v2 sprint starts. | `arc-q2-do-people-care` |
| 26 | "Our market is small so 50 conversations is overkill." | The 50 is calibrated for signal, not market size. Small markets still need signal. | Hit the 50. | `refuse-below-threshold` |
| 27 | "We have product-market fit because revenue is growing." | Revenue growth without retention is unsustainable. Q3 is upstream of "PMF" in any honest framework. | Cohort retention data, not aggregate revenue. | `refuse-below-threshold` (v0.1: Q3 logic; v2+: `arc-q3-change-behavior`) |
| 28 | "We're a platform, so we don't need a wedge ICP." | Platforms find PMF in a wedge ICP first, then expand. Stripe started with developers, Shopify with single-product Shopify owners. | Named wedge ICP + explicit "platform expansion plan after PMF in wedge." | `arc-q1-right-to-exist` |

## Output format

When invoked with a detected rationalization:

```
Pattern matched: #<N> from rationalization table
Source: <Sequoia / Mom Test / Customer Development / Positioning / observed>
Source citation: <quote or attribution>
Counter:
  <one-paragraph rebuttal>
Evidence requirement:
  <specific verifiable thing>
Route back to: <archetype-detection / arc-q1-right-to-exist / arc-q2-do-people-care / refuse-below-threshold>
```

## Detection heuristics

Match against the founder's exact phrasing OR the underlying logical structure. Examples:

- Founder says "honestly, the warm intros are way easier" → match #3 (warm-lead bias).
- Founder says "I don't think 50 conversations applies to us, we're niche" → match #26 (market-size exemption).
- Founder says "we'll know our customer when sales gets going" → match #12 (sales-will-figure-it-out).

When in doubt, surface multiple matches and let the agent choose the most operationally specific one.

## Adding new rationalizations

Per `CLAUDE.md` contributor guidelines, new entries require:

1. A real session where a real founder used the rationalization (verbatim or paraphrased with attribution).
2. A counter derived from Sequoia, Mom Test, Blank, Dunford, or an additional named source.
3. A specific verifiable evidence requirement (not "do more customer dev" — say what would close the gap).
4. The Q-skill or gate this rationalization tries to evade.

No speculative entries. No "this could theoretically happen." If it hasn't happened to a founder, it doesn't ship.

## Cross-references

- `refuse-below-threshold` — most rationalizations are invoked when a founder claims resolution. The gate then refuses.
- `archetype-detection` — some rationalizations re-route to archetype re-determination (the "we're all three" pattern).
- `arc-q1`, `arc-q2`, `arc-q3`, `arc-q4` — the Q-skills the rationalizations try to evade.
- `corpus-retrieval` — surface analogous cases where iconic founders fell into the same pattern and what happened.
