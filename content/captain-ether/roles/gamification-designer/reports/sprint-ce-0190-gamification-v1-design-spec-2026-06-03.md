# CE-SPRINT-0190 Gamification v1 Design Spec

Date: 2026-06-03
Owner: Gamification Designer / Director-Engineer
Scope: Captain Ether gamification v1 report-only design spec
Status: DESIGN_SPEC_READY_FOR_DIRECTOR_REVIEW

## Baseline

```text
main_course_content_runtime=closed
local_github_production_items=1000
production_release_readiness=PASS
matcher_noise=MATCHER_NOISE_ACCEPTABLE
authenticated_browser_watch_smoke=AUTH_BLOCKED_WITH_NEXT_STEPS
gamification_implementation=false
production_deploy=false
```

## Design Goal

Gamification v1 should increase return motivation without turning Captain Ether
into a noisy quiz, a streak trap, or a punitive exam.

The core promise:

```text
short radio watches that make the learner feel steadier, safer, and more precise each time
```

The player should want to return because the game shows meaningful seamanship
progress: clearer procedure words, fewer dangerous meaning drifts, calmer Lost
Oars recovery, and visible branch confidence.

## V1 Product Shape

Gamification v1 is a light layer around the existing watch loop:

```text
start watch -> answer phrases -> receive calm feedback -> recover Lost Oars -> see branch signal -> choose next quiet step
```

It must not lengthen the watch, weaken matcher strictness, or reward speed over
meaning.

## Selected V1 Mechanics

### 1. Watch Ritual

Proposed mechanic:

```text
Rename the start/end framing into a radio-watch ritual without changing watch length.
```

Player-facing direction:

```text
Take the watch
Hold the watch
Close the watch
Return to Lost Oars
```

Learning purpose:

```text
make a 12/16/20-question session feel like a maritime role, not a generic quiz
```

Risks:

```text
overdramatic copy can imply certification or operational readiness
```

Controls:

```text
no official/certified wording
no navigation-instruction claims
no pass/fail watchkeeper status
```

### 2. Branch Mastery Signals

Proposed mechanic:

```text
Show qualitative branch states based on recent practice evidence.
```

V1 states:

```text
New Waters
Getting Familiar
Holding Watch
Review Soon
```

Learning purpose:

```text
make the 1000-item course navigable without percentage pressure
```

Meaning:

```text
New Waters = not enough evidence yet
Getting Familiar = branch has recent exposure and some correct answers
Holding Watch = repeated stable answers across item types
Review Soon = older mistakes, skipped items, or stale practice need calm review
```

V1 should not display exact percentages, completion bars, or global rank loss.

### 3. Lost Oars Recovery Signal

Proposed mechanic:

```text
Treat resolved Lost Oars as positive recovery evidence.
```

Player-facing direction:

```text
Phrase recovered
Back under control
Ready for another short watch
```

Learning purpose:

```text
make mistakes useful and reduce shame/fatigue
```

Rules:

```text
wrong answers can create review material
accepted variants do not become mistakes
accepted spelling slips do not become Lost Oars
resolved Lost Oars should improve Review Soon / Holding Watch signals, not erase history
```

### 4. Critical Meaning-Drift Events

Proposed mechanic:

```text
Classify high-risk wrong answers as meaning-drift events for summary/review tone.
```

V1 event families:

```text
port / starboard drift
channel / number drift
heading / course drift
over / out procedure drift
say again / read back procedure drift
Mayday / Pan-Pan / Securite priority drift
```

Learning purpose:

```text
make safety-critical precision visible without using fear or punishment
```

Player-facing wording direction:

```text
Meaning changed: review this pair.
Procedure changed: repeat calmly.
Priority changed: keep this phrase exact.
```

Forbidden wording:

```text
unsafe sailor
failed watch
dangerous captain
certified safe
legally wrong
```

### 5. Next Quiet Step

Proposed mechanic:

```text
After a watch, suggest exactly one calm next step.
```

Possible suggestions:

```text
Review Lost Oars
Take one more short watch in this branch
Take a mixed watch
Stop here; watch closed
```

Learning purpose:

```text
retain the learner without coercion
```

Rule:

```text
never show more than one primary recommendation at the end of a watch
```

## Explicitly Rejected For V1

Do not implement in v1:

```text
daily streak counters
streak loss
energy meters
leaderboards
speed bonuses
global rank demotion
failure badges
red danger screens
time pressure
public certificates
completion percentage as primary motivation
```

Reason:

```text
these mechanics reward pressure, speed, or shame; Captain Ether trains precise maritime phraseology
```

## Deferred Mechanics

Can be reconsidered after v1 QA:

```text
soft daily watch prompt without streak loss
exam mode
rank titles
branch map screen
saved mistakes collection
practice calendar
```

Deferred mechanics require separate UX/HUD, QA, and privacy review.

## Data Needed

V1 can be designed from non-sensitive learning signals:

```text
item_id
branch
module
level
item_type
result_kind exact / accepted_variant / spelling_reminder / wrong / skipped
minimal_pair_family if known
lost_oar_created true/false
lost_oar_resolved true/false
watch_completed_at
```

Do not store or display:

```text
player email
player identity
login code
session token
CSRF value
raw cookie
secret config
SMTP detail
```

If implementation needs persistent progression, Director-Engineer must create a
separate storage contract task before code is written.

## Implementation Slices After Approval

### CE-0191 UX/HUD Gamification Copy And Placement Spec

Owner:

```text
UX/HUD Designer
```

Output:

```text
copy and placement for watch ritual, branch signal, Lost Oars recovery, and next quiet step
```

No code.

### CE-0192 Progression Data Contract

Owner:

```text
Director-Engineer / Validation Steward
```

Output:

```text
non-sensitive event/state contract for branch signals and recovery evidence
```

No UI implementation until QA accepts the contract.

### CE-0193 Sea Speak Safety Language Review

Owner:

```text
Sea Speak Linguist
```

Output:

```text
approved wording for meaning-drift events and forbidden claims
```

### CE-0194 Gamification v1 Local Implementation

Owner:

```text
Director-Engineer
```

Allowed only after CE-0191, CE-0192, and CE-0193 pass.

### CE-0195 Gamification v1 QA

Owner:

```text
QA
```

Output:

```text
short-watch pacing, privacy, Lost Oars behavior, matcher safety, mobile layout, and no-punishment tone checks
```

## QA Checks Needed

QA must verify:

```text
watch lengths remain 12 / 16 / 20
no speed pressure is introduced
no streak loss or punishment copy exists
accepted variants do not become Lost Oars
accepted spelling reminders do not become Lost Oars
wrong dangerous minimal pairs remain rejected
meaning-drift summaries match matcher/QA data
Lost Oars recovery does not expose accepted answers incorrectly
branch states do not imply certification
no player email or identity appears in UI or reports
anonymous protected API guards remain 401
production deploy is separate and explicit
```

## Risks

```text
overpressure risk: mastery labels can feel like judgement
grind risk: branch maps can push completionism
false-confidence risk: Holding Watch can sound operational
privacy risk: progression can accidentally expose identity if tied to account UI
safety risk: meaning-drift labels can sound like navigation/legal advice
scope risk: gamification can drift into content expansion or auth work
```

Mitigations:

```text
qualitative states only
no failure states
no certification wording
non-sensitive data only
separate UX, data-contract, linguist, implementation, and QA gates
```

## Director Recommendation

Proceed to CE-0191 UX/HUD Gamification Copy And Placement Spec.

Do not implement gamification code yet. The current report is a design boundary
and sequencing document, not an implementation approval.

## Scope Preserved

No runtime/API/UI/content JSON, matcher, storage/schema, Atlas, auth, router,
registry, Watch Officer, Nav Desk, production config, deploy/FTP, secrets,
sessions, cookies, CSRF, SMTP, player email, player identity data, WebStorm DB
console, WebStorm datasource, foreign database, or production file was changed.
