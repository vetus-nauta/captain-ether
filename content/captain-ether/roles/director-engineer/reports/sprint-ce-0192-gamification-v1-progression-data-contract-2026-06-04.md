# CE-SPRINT-0192 Gamification v1 Progression Data Contract

Date: 2026-06-04
Owner: Director-Engineer / Validation Steward
Scope: Captain Ether gamification v1 progression data contract
Status: DATA_CONTRACT_READY_FOR_IMPLEMENTATION_PLANNING

## Baseline

Inputs:

```text
CE-0190 Gamification v1 Design Spec: DESIGN_SPEC_READY_FOR_DIRECTOR_REVIEW
CE-0191 Gamification v1 Copy And Placement Spec: UX_SPEC_READY_FOR_DATA_CONTRACT
main_course_internal_closure=100_PERCENT_INTERNAL_CLOSED
runtime_api_production_parity_internal_closure=100_PERCENT_INTERNAL_CLOSED
authenticated_watch_smoke_reattempt=AUTH_BLOCKED_RECONFIRMED
```

This is report-only. No runtime/API/UI/storage/content/production file was
changed by this contract.

## Existing Runtime Signals

Current APIs already expose useful non-sensitive signals:

```text
/progress.php -> progress summary
/finish-watch.php -> watch summary, recommended watch, next_step, debrief
/lost-oars.php -> unresolved Lost Oars by item/branch/reason
/resolve-lost-oar.php -> recovery result and remaining count
```

Existing progress fields:

```text
completed_watches
last_level
skip_cleanup_count
history[-20]
unresolved_lost_oars
recommended_level
recommended_branch
recommended_watch
next_step
recent_watch
weak_points_summary.by_type
weak_points_summary.by_reason
weak_points_summary.by_branch
weak_points_summary.top_topics
```

Existing finish-watch debrief fields:

```text
debrief.drivers
debrief.pressure_by_branch
debrief.pressure_by_type
debrief.pressure_by_reason
```

Limitation:

```text
existing persistent history does not store branch exposure or branch stability
```

Therefore full branch mastery cannot be honestly computed from current history
alone. It needs minimal per-branch evidence or must be reduced to a weak-points
only signal. V1 should add minimal evidence, not a scoreboard.

## Contract Shape

Implementation should add a single optional `gamification_v1` object to relevant
Captain Ether player-facing API responses.

Responses:

```text
GET /api/captain-ether/progress.php
POST /api/captain-ether/finish-watch.php
GET /api/captain-ether/lost-oars.php
POST /api/captain-ether/resolve-lost-oar.php
```

Top-level response addition:

```json
{
  "gamification_v1": {
    "watch_signal": {},
    "branch_signals": [],
    "lost_oars_signal": {},
    "meaning_drift": [],
    "next_quiet_step": {}
  }
}
```

The object must be optional for backward compatibility. UI implementation must
fall back to current summary/progress fields when `gamification_v1` is absent.

## Persisted Evidence

Minimum persistent addition should live inside the existing stream progress
record, not a new public/admin storage surface.

Internal progress extension:

```json
{
  "gamification_v1": {
    "schema_version": 1,
    "branch_evidence": {
      "core_radio": {
        "seen": 0,
        "clean": 0,
        "assisted": 0,
        "lost": 0,
        "recovered": 0,
        "meaning_drift": 0,
        "last_practiced_at": "ISO-8601 or empty",
        "last_recovered_at": "ISO-8601 or empty"
      }
    },
    "recent_drift_families": {
      "port_starboard": 0,
      "channel_number": 0,
      "heading_course": 0,
      "over_out": 0,
      "say_again_read_back": 0,
      "priority_mayday_panpan_securite": 0
    }
  }
}
```

Retention:

```text
keep aggregate counters only
no raw answers
no prompt text
no target text
no player email
no player identity
no login/session/cookie/CSRF/token values
```

Why aggregate counters are acceptable:

```text
they are non-sensitive learning telemetry tied to the authenticated user progress store
answer-log already handles disputed answer review separately and must remain admin-only
```

## Result Kind Mapping

Implementation should classify per-question results into this contract vocabulary:

```text
clean = exact canonical or clean accepted answer
accepted_variant = correct non-canonical accepted variant
spelling_reminder = correct spelling/typing slip
assisted = correct with hint or hint-loaded result
wrong = wrong answer
skipped = skipped item
```

Mapping from current fields:

```text
result.reason clean -> clean
result.reason spelling -> spelling_reminder
result.reason hint -> assisted
result.reason wrong -> wrong
result.reason skip -> skipped
match_type variant or accepted_variant -> accepted_variant when correct
```

Lost Oars creation rule:

```text
wrong or skipped creates/reinforces Lost Oars
accepted_variant does not create Lost Oars
spelling_reminder does not create Lost Oars
hint may create review pressure only if current runtime already marks it as weak
```

## Branch Signal State Machine

Allowed states:

```text
new_waters
getting_familiar
holding_watch
review_soon
```

Player labels from CE-0191:

```text
New Waters
Getting Familiar
Holding Watch
Review Soon
```

Computation contract:

```text
new_waters = seen < 3 and lost == 0 and recovered == 0
review_soon = unresolved Lost Oars exist in branch or recent meaning_drift > 0
holding_watch = seen >= 8 and clean + recovered >= lost + assisted and recent unresolved pressure is low
getting_familiar = all other non-empty branch evidence
```

Priority:

```text
review_soon beats holding_watch
holding_watch beats getting_familiar
getting_familiar beats new_waters
```

No exact percentages, bars, global rank, demotion, or certification language may
be derived from these states.

## Meaning-Drift Families

Contract families:

```text
port_starboard
channel_number
heading_course
over_out
say_again_read_back
priority_mayday_panpan_securite
```

V1 implementation may derive these families from item metadata and dangerous
minimal-pair registry. If a family cannot be detected confidently, omit it.

Player-facing response item:

```json
{
  "family": "channel_number",
  "tone": "meaning",
  "count": 1,
  "copy_key": "game.drift.meaning"
}
```

Tone mapping:

```text
port_starboard -> meaning
channel_number -> meaning
heading_course -> meaning
over_out -> procedure
say_again_read_back -> procedure
priority_mayday_panpan_securite -> priority
```

Display cap:

```text
maximum two drift pills in summary
maximum one generic drift line in active-watch feedback
```

## Lost Oars Recovery Signal

Response shape:

```json
{
  "lost_oars_signal": {
    "state": "none | pending | recovered_one | all_recovered",
    "remaining": 0,
    "recovered_in_session": 0,
    "recommended_branch": "core_radio",
    "copy_key": "game.lost.allRecovered"
  }
}
```

Update points:

```text
/lost-oars.php computes pending state
/resolve-lost-oar.php computes recovered_one or all_recovered
/finish-watch.php computes pending when wrong/skipped items remain
/progress.php computes none or pending
```

Persistence:

```text
increment branch_evidence[branch].recovered only after successful Lost Oar resolution
set last_recovered_at only on correct resolution
```

Do not erase historical lost counts when an oar is recovered. Recovery improves
the signal, it does not rewrite history.

## Next Quiet Step Contract

Response shape:

```json
{
  "next_quiet_step": {
    "kind": "clear_revision | build_rhythm | step_up | hold_course | stop_here",
    "primary_action": "lost_oars | recommended_watch | home",
    "recommended_watch": {},
    "copy_key": "game.nextQuiet.clearRevision"
  }
}
```

Mapping from existing `next_step`:

```text
clear_revision -> lost_oars
build_rhythm -> recommended_watch
step_up -> recommended_watch
hold_course -> recommended_watch
```

`stop_here` is allowed only if implementation adds a calm stop condition without
adding a streak-loss or retention-pressure mechanic.

UI rule:

```text
show exactly one primary next step
Lost Oars may be a secondary action only when primary is not Lost Oars
```

## API Response Contract

### progress.php

Should include:

```json
{
  "ok": true,
  "progress": {},
  "gamification_v1": {
    "watch_signal": { "state": "review_soon", "copy_key": "game.watchSignal.reviewSoon" },
    "branch_signals": [
      { "branch": "core_radio", "state": "holding_watch", "copy_key": "game.branchSignal.holdingWatch" }
    ],
    "lost_oars_signal": { "state": "pending", "remaining": 3 },
    "next_quiet_step": { "kind": "clear_revision", "primary_action": "lost_oars" }
  }
}
```

### finish-watch.php

Should include:

```json
{
  "ok": true,
  "summary": {},
  "gamification_v1": {
    "watch_signal": { "state": "holding_watch" },
    "branch_signals": [],
    "meaning_drift": [],
    "lost_oars_signal": {},
    "next_quiet_step": {}
  }
}
```

### lost-oars.php

Should include:

```json
{
  "ok": true,
  "lost_oars": [],
  "gamification_v1": {
    "lost_oars_signal": { "state": "pending", "remaining": 2 },
    "next_quiet_step": { "kind": "clear_revision", "primary_action": "lost_oars" }
  }
}
```

### resolve-lost-oar.php

Should include:

```json
{
  "ok": true,
  "correct": true,
  "remaining": 0,
  "gamification_v1": {
    "lost_oars_signal": { "state": "all_recovered", "remaining": 0, "recovered_in_session": 1 },
    "branch_signals": [],
    "next_quiet_step": { "kind": "hold_course", "primary_action": "recommended_watch" }
  }
}
```

## Privacy Boundary

Must not store, return, or display:

```text
player email
player identity
login code
session token
CSRF value
raw cookie
SMTP detail
Atlas URI
private config
raw answer in progression evidence
normalized answer in progression evidence
prompt text in progression evidence
target text in progression evidence
```

Allowed in player-facing response:

```text
branch ids and localized labels
state ids and localized labels
counts of unresolved Lost Oars
counts of aggregate evidence
recommended watch level/mode/length/branch
copy keys
```

Answer-log remains the only place for raw disputed answers and stays admin-only.
Gamification v1 must not read answer-log data for player-facing UI.

## Validation Gates Before Code Merge

Implementation PR must pass:

```text
php content/captain-ether/tools/validate-captain-ether.php
php content/captain-ether/tools/smoke-start-watch-api.php
node content/captain-ether/tools/check-pwa-i18n.mjs
protected API anonymous 401 smoke
public payload privacy scan
mobile 360px layout check
```

Additional implementation-specific checks:

```text
gamification_v1 object absent fallback works
gamification_v1 object present renders without overflow
no raw answers in progress storage extension
no email/player identity in API payload
accepted_variant and spelling_reminder do not create Lost Oars
resolved Lost Oars increment recovered evidence but do not erase history
branch_signal never renders percentages or ranks
```

## Implementation Slice Recommendation

Keep code work small:

```text
CE-0193A backend helper functions and API payload contract
CE-0193B UI rendering and i18n keys
CE-0193C local QA and production read-only smoke
```

Do not deploy until local validation and API smoke pass.

## Decision

```text
DATA_CONTRACT_READY_FOR_IMPLEMENTATION_PLANNING
```

Code may be planned after this contract, but implementation must stay within the
fields and privacy boundaries above.
