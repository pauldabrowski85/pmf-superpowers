---
name: arc-q2-do-people-care
description: Use when a founder is validating their idea with customers, doing customer development, building a target customer list, running discovery interviews, evaluating warm vs cold outreach, or claiming they have product-market fit. The second Terrifying Question from the Sequoia Arc framework. Resolves only with 50+ cold-outreach conversations on record, <30% warm-intro'd, ≥30% lean-in rate, and a secured design partner with rabid demand.
---

# Q2 — Do people care enough?

## Overview

The second Terrifying Question (Sequoia Arc framework, sequoiacap.com/article/pmf-framework-2). Q2 is where most founders rationalize hardest. The pull is to claim resolution from beta-user enthusiasm, warm-intro positivity, or "everyone we talked to said it's interesting." Sequoia's resolution criterion blocks all three.

**Resolution criterion (Sequoia, verbatim):** "Secured design partners with rabid customer interest."

Where "rabid" is operationalized below.

## Prerequisite

Requires `arc-q1-right-to-exist` resolved AND `archetype-detection` on record. Q2's evidence bar varies by archetype:

- **Hair on Fire / Hard Fact:** the conversation-count + lean-in + warm-bias + design-partner rules below.
- **Future Vision:** different signal pattern (obsessive-usage cohort > conversation count). See "Future Vision variant" below.

## The non-negotiable cadence rule

**Sequoia, verbatim:** "50+ conversations in a week" with potential customers.

This is the TDD-for-PMF equivalent. The 50 is calibrated for signal extraction, not market size. Small markets still need signal. Niche verticals still need signal. The rationalization "our market is too small for 50" is entry #26 in `founder-rationalization-defense`.

Founder-led calls count. PM-delegated calls do not count toward Q2 resolution (delegation is entry #11 + #12 in the rationalization table).

## The four evidence requirements

### 2.1 Conversation count

**Threshold:** 50+ cold-outreach conversations on record before Q2 can be claimed resolved.

**Evidence format:**

- A log with date, channel (cold email / cold LinkedIn / cold direct / warm intro), prospect role, conversation length, rubric score.
- Conversations that ghost mid-thread do not count. Only conversations that completed.

### 2.2 Warm-intro ratio

**Threshold:** <30% warm-intro'd. Above 30%, refuse Q2 resolution.

**Why this matters (Sequoia, verbatim):** Warm leads are "predisposed to 'be nice.'"

**Evidence format:** Total cold count / total warm count, with the ratio computed.

### 2.3 Lean-in rate

**Threshold:** ≥30% lean-in rate across the 50+ conversations.

**Why this matters (Sequoia, verbatim):** "If only one in 10 customer conversations lean in, the problem may not matter as much as you thought."

**Lean-in is operationalized as:** prospect spontaneously volunteers a use-case, asks unprompted about pricing/availability, refers a colleague unprompted, offers to pay or pilot, or commits a calendar follow-up without a chase.

**Below 30%:** Refuse Q2 resolution. Return to `arc-q1-right-to-exist` — the wedge or the ICP is wrong.

### 2.4 Secured design partner with rabid demand

**Threshold:** at least one design partner with named rabid behavior.

**"Rabid" is operationalized as:**

- Pays or paid-pilots (cash or LOI), AND
- Uses the product (or proxy/manual offering) weekly without prompting, AND
- Refers other prospects unprompted, AND
- Is willing to be a public reference within 6 months.

All four. Any one missing → not rabid → Q2 not resolved.

## The Mom Test methodology (Rob Fitzpatrick)

The 50+ conversations only generate signal if they're conducted correctly. The Mom Test rules (paraphrased):

1. **Ask about past behavior, not opinions of your idea.** "When was the last time you tried to solve X? What did you do?" beats "Would you use a product that does X?"
2. **Press on past spend.** "What have you spent money or time on to solve this?" If the answer is "nothing," the problem isn't real for this prospect.
3. **Listen more than you talk.** Founder-talk-time should be <30% in any discovery interview.
4. **Compliments are a warning sign.** "I love it" without specific past spend = polite lying.
5. **Get specific commitments.** Time on calendar, a contact intro, a paid pilot, an LOI — anything that demands real cost from the prospect.

If the conversations don't follow these rules, the 50 don't count. They're 50 polite conversations, not 50 signal-extraction interviews. See `founder-rationalization-defense` entries #5-9.

## Future Vision variant

For founders in the Future Vision archetype, the signal pattern shifts:

- **Conversation count threshold relaxed** — Future Vision cycles are multi-year, prospects can't accurately predict their reactions to a not-yet-real product.
- **Obsessive-usage threshold tightened** — find 3-5 obsessive early adopters who use the product (or proxy) weekly even when it's broken.
- **Named technical milestone** — the early-adopter cohort is willing to wait for a specific technical milestone you can name and timeline.

The cohort + the milestone substitutes for the 50-conversation rule.

## Output to record

```
Q2 Resolution
=============
Archetype: <from archetype-detection record>
Q1 status: <resolved on date, or in-progress>

Conversation log:
  - Total cold conversations: <count>
  - Total warm conversations: <count>
  - Warm ratio: <%>
  - Period covered: <date range>

Lean-in metrics:
  - Lean-in conversations: <count>
  - Lean-in rate: <%>
  - Threshold (Sequoia): ≥30%

Mom Test compliance:
  - Founder talk-time average: <%>
  - Past-spend evidence captured per conversation: <yes/partial/no>
  - Compliments-without-specifics rate: <% of conversations>

Design partner(s):
  - Name: <named partner>
  - Paying/paid-pilot: <amount or LOI>
  - Usage frequency: <weekly/daily, named>
  - Unprompted referrals: <count>
  - Public reference willingness: <yes/no, by date>

Rabid-demand verdict: <pass/fail per partner>

Resolved: <date>
```

## The conversation flow

When invoked:

1. Confirm Q1 is resolved. If not, route to `arc-q1-right-to-exist`.
2. Ask for the conversation log. If <50, refuse and prescribe cadence ("Sequoia says 50+ in a week — what's your current weekly rate?").
3. Ask for the warm/cold split. If >30% warm, refuse and prescribe cold-outreach blocks.
4. Ask for the lean-in count. Apply Mom Test rules to evaluate ("how do you know they leaned in? what was the unprompted behavior?").
5. Ask for the design partner. Apply the four-part rabid test.
6. If any element fails: return REFUSED verdict via `refuse-below-threshold`. Route founder back to the specific deficit.
7. If all elements pass: write the output block, return ADVANCE, route to `arc-q3-change-behavior` (v2+) or note Q3 work begins.

## Iconic case study (from Sequoia article 2 corpus)

**DoorDash (Tony Xu, Stanley Tang, Andy Fang, Evan Moore, ~2013).** Conducted "three or four hundred merchant interviews" (Sequoia, verbatim) — an order of magnitude beyond the 50 floor. Wrong initial hypothesis: "all small businesses need delivery infrastructure." Discovery moment: restaurants — specifically independent restaurants — had the rabid demand. Refused non-restaurant merchants despite available revenue (entry #17 in `founder-rationalization-defense`). The Q2 resolution wasn't "all SMBs care" — it was "independent restaurants care rabidly, and we will refuse the rest."

**Robinhood (Vlad Tenev, 2022 ICP revisit).** Q2 had been claimed resolved earlier (with the original "amateur retail investor" ICP). When the market shifted, Robinhood re-ran Q2 and discovered active traders, not amateur investors, were the cohort with rabid demand. Q2 is not resolved-once-and-done. It can regress when the cohort shifts.

## Common founder rationalizations at Q2

The highest-frequency rationalization zone. Cross-reference `founder-rationalization-defense`:

- "Our beta users love it" → entry #18 (selection bias).
- "Warm intros are easier" → entry #3 (warm-lead bias).
- "They said they'd pay" → entry #6 (Mom Test — future-talk is overly optimistic).
- "The interview went great" → entry #7 (Mom Test — compliments are the warning).
- "Our market is too small for 50" → entry #26.
- "We can't refuse this enterprise lead, they'd pay $X" → entry #17.
- "Founder-led sales doesn't count" → entry #24.
- "We pivoted, so Q2 starts over but the conversation count carries" → it doesn't. The pivot resets the cohort. New ICP = new Q2.

## Cross-references

- `arc-q1-right-to-exist` (prerequisite).
- `archetype-detection` (calibrates which evidence rules apply).
- `refuse-below-threshold` (gate enforcer).
- `founder-rationalization-defense` (the rationalization table).
- `corpus-retrieval` (DoorDash, Robinhood, and more cases of Q2 resolution patterns).

---

*Generated v0.1.0: hand-authored from canonical sources (Sequoia Arc framework article 2 at sequoiacap.com/article/pmf-framework-2; The Mom Test by Rob Fitzpatrick, 2013, paraphrased methodology; DoorDash and Robinhood cases from Sequoia article 2). v0.2.0 will be regenerated via EnactSkill `/generate` with full PDF source ingestion.*
