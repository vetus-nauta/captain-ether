# CE-SPRINT-0191 Gamification v1 Copy And Placement Spec

Date: 2026-06-04
Owner: UX/HUD Designer / Director-Engineer
Scope: Captain Ether gamification v1 UX/HUD copy and placement spec
Status: UX_SPEC_READY_FOR_DATA_CONTRACT

## Baseline

Input design:

```text
CE-0190 Gamification v1 Design Spec: DESIGN_SPEC_READY_FOR_DIRECTOR_REVIEW
main_course_internal_closure=100_PERCENT_INTERNAL_CLOSED
runtime_api_production_parity_internal_closure=100_PERCENT_INTERNAL_CLOSED
authenticated_watch_smoke_reattempt=AUTH_BLOCKED_RECONFIRMED
gamification_implementation=false
```

This is report-only. No UI, runtime, storage, content JSON, API, production,
auth, router, registry, Watch Officer, Nav Desk, or foreign game file was
changed.

## UX Direction

Gamification v1 should feel like a quiet maritime watch ritual, not a generic
scoreboard. It should reward steadiness, recovery, and meaning precision.

Primary UX rule:

```text
show one calm reason to continue, never a pressure loop
```

V1 must not introduce:

```text
streak counters
streak loss
leaderboards
speed bonuses
rank demotion
failure badges
red danger screens
certification language
completion percentage as the primary motivator
```

## Placement Map

### 1. Home / Progress Overview

Current surface:

```text
progressOverviewMarkup()
```

Add one compact `Watch Signal` block after existing recommended pace copy and
before action buttons.

Purpose:

```text
show the learner why the next watch is useful before they click
```

Content:

```text
state label: New Waters / Getting Familiar / Holding Watch / Review Soon
one sentence explanation
single primary action remains Start recommended watch
Lost Oars action remains secondary
```

Copy:

```text
Watch Signal
New Waters: Take one short watch and let the route appear.
Getting Familiar: This branch is becoming familiar. Keep it calm.
Holding Watch: Your recent calls are holding steady here.
Review Soon: A few phrases are asking for quiet revision.
```

Placement constraints:

```text
must not add a progress bar
must not show exact percentages
must not show global rank
must not crowd the existing stat cards on mobile
```

### 2. Level Select / Start Ritual

Current surface:

```text
renderLevelSelect()
startWatch()
```

Do not add a modal. Add a short ritual line under the level copy and above the
level cards.

Copy:

```text
Take the watch. Answer in standard radio English. Close it calmly.
```

Button labels remain mostly stable to avoid unnecessary retraining. If labels
change in implementation, prefer:

```text
levels.start -> Take the watch
status.loadingRadio -> Opening the watch...
```

Russian source copy:

```text
Прими вахту. Отвечай стандартной радио-фразой. Закрой спокойно.
```

Risk control:

```text
no role claim like certified watchkeeper
no operational-readiness claim
no exam-pass framing
```

### 3. Watch Header / Active Watch

Current surface:

```text
renderWatch()
watch-hud
watch-side
```

Do not add a new panel. Add only a small ritual label in the existing side panel
or under the current watch side eyebrow.

Copy:

```text
Holding watch
Keep the phrase exact; speed does not count.
```

When a high-risk wrong answer family is detected later, the active watch should
not flash warnings. Meaning-drift language belongs in previous-result feedback
or summary, not as a red active-watch alarm.

Active feedback copy families:

```text
Meaning changed: review this pair.
Procedure changed: repeat calmly.
Priority changed: keep this phrase exact.
```

Do not display:

```text
unsafe
dangerous captain
failed watch
legally wrong
```

### 4. Watch Summary / Close Ritual

Current surface:

```text
finishWatch()
watch-summary
summary.debrief
summary.nextTitle
```

This is the main gamification v1 surface.

Add a `Watch Closed` ritual block immediately under the summary title/guidance
and before stat cards.

Copy variants:

```text
Watch closed. The route is steadier.
Watch closed. Recovery is the next clean step.
Watch closed. Hold this branch one more time.
Watch closed. Stop here if the watch feels complete.
```

Branch mastery placement:

```text
inside watch-summary__next, before recommended level cards
```

Branch mastery copy:

```text
Branch Signal
New Waters: not enough evidence yet.
Getting Familiar: recent exposure is building.
Holding Watch: repeated calls are holding steady.
Review Soon: Lost Oars or older mistakes need calm attention.
```

Critical meaning-drift summary placement:

```text
inside watch-summary__debrief, after drivers and before pressure_by_branch
```

Critical meaning-drift copy:

```text
Meaning drift noticed: review this pair.
Procedure drift noticed: repeat calmly.
Priority drift noticed: keep this phrase exact.
```

If multiple drift families appear, show at most two compact pills and a generic
line:

```text
Two exact-meaning pairs need review.
```

Next quiet step placement:

```text
keep existing summary.nextTitle area
only one primary recommendation
secondary button may remain Lost Oars
```

Next quiet step copy mapping:

```text
clear_revision -> Review Lost Oars first.
build_rhythm -> Take one more short watch.
step_up -> Step up only if the radio still feels calm.
hold_course -> Hold course with one balanced watch.
stop_here -> Stop here; watch closed.
```

`stop_here` is optional for v1 implementation. If not implemented, do not add a
third action button.

### 5. Lost Oars / Recovery Signal

Current surface:

```text
renderLostOars()
resolve-lost-oar response
```

Rename tone, not mechanics. Keep Lost Oars as calm revision and make recovery
positive.

Top copy:

```text
Lost Oars are not penalties. They are phrases to recover.
```

On correct recovery:

```text
Phrase recovered.
Back under control.
Ready for another short watch.
```

On spelling recovery:

```text
Accepted. Check the standard form before you return.
```

On wrong recovery:

```text
Not yet. Repeat the standard form calmly.
```

When all Lost Oars are resolved:

```text
All recovered. Return to watch when ready.
```

Do not show:

```text
mistake debt
failure count
penalty
clean your errors
```

## I18n Keys Needed

Implementation should add new keys instead of overloading unrelated current
copy.

```text
game.watchSignal.title
game.watchSignal.newWaters
game.watchSignal.gettingFamiliar
game.watchSignal.holdingWatch
game.watchSignal.reviewSoon
game.ritual.startLine
game.ritual.holdingWatchTitle
game.ritual.holdingWatchCopy
game.ritual.closedDefault
game.ritual.closedRecovery
game.ritual.closedBranch
game.ritual.closedStop
game.branchSignal.title
game.branchSignal.newWaters
game.branchSignal.gettingFamiliar
game.branchSignal.holdingWatch
game.branchSignal.reviewSoon
game.drift.meaning
game.drift.procedure
game.drift.priority
game.drift.multiple
game.nextQuiet.clearRevision
game.nextQuiet.buildRhythm
game.nextQuiet.stepUp
game.nextQuiet.holdCourse
game.nextQuiet.stopHere
game.lost.recoveryIntro
game.lost.recovered
game.lost.backUnderControl
game.lost.readyForWatch
game.lost.acceptedSpelling
game.lost.notYet
game.lost.allRecovered
```

Minimum languages for first implementation:

```text
en
ru
```

Other existing locales may temporarily fall back only if the existing i18n helper
already supports fallback. If it does not, the implementation must include all
current locales or keep the feature hidden until translations exist.

## Mobile Layout Risks

```text
summary stat cards already compete for vertical space
watch side panel can become too tall on small screens
branch names can wrap badly in mini-pills
meaning-drift pills can create horizontal overflow
Lost Oars cards already carry prompt, target, hint, and controls
```

Mobile constraints:

```text
one-line headings where possible
no more than two new pills in summary
no additional fixed header
no modal overlay
no horizontally scrolling branch signal
primary and secondary buttons remain stacked-friendly
```

## Accessibility / Tone Checks

```text
state names must be text, not color-only
meaning drift must not rely on red/green only
Lost Oars recovery message must be announced in the existing status/message area
button labels must remain action-first
```

## Implementation Acceptance Criteria

Before code is accepted:

```text
no new streak/leaderboard/rank/certification copy
no exact percentage mastery display
no new runtime storage without CE-0192 contract
all new copy uses i18n keys
mobile width does not overflow at 360px
summary shows exactly one primary next step
Lost Oars recovery reads as positive recovery, not punishment
```

## Decision

```text
UX_SPEC_READY_FOR_DATA_CONTRACT
```

Proceed to CE-0192 Progression Data Contract before writing implementation code.
