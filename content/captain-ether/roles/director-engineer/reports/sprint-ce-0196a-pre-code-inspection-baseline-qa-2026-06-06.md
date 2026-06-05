# CE-SPRINT-0196A Pre-Code Inspection And Baseline QA

Date: 2026-06-06
Owner: Director-Engineer
Scope: Captain Ether pre-code inspection and local baseline QA before CE-0196 implementation
Status: BASELINE_PASS / READY_FOR_CE_0196B

## Decision

CE-0196A is complete.

Result:

```text
BASELINE_PASS
READY_FOR_CE_0196B_FIRST_RUN_FUNNEL_IMPLEMENTATION
PRODUCTION_UNCHANGED
CODE_UNCHANGED
```

This task performed read-only inspection and local QA. It did not change runtime code, UI, API, content JSON, matcher behavior, storage schema, auth config, production config, or deployment state.

```text
code_changed=false
runtime_changed=false
ui_changed=false
api_changed=false
content_json_changed=false
matcher_changed=false
storage_schema_changed=false
auth_config_changed=false
production_deploy=false
other_games_changed=false
```

## Git Baseline

Command:

```sh
git status --short --branch
git rev-list --left-right --count HEAD...origin/main
git show -s --format='HEAD=%H%nsubject=%s%niso_date=%cI' HEAD
```

Result:

```text
branch=main...origin/main
ahead_behind=0 0
HEAD=27a0d0193d685dea380b608d67a25ba656a799be
subject=captain-ether: prepare big implementation sprint
iso_date=2026-06-06T00:57:54+02:00
```

Conclusion:

```text
local WebStorm workspace and GitHub were synced before CE-0196A inspection
```

## PHP Runtime Baseline

System `php` is not available in shell PATH.

Project PHP used:

```sh
$HOME/.local/php-codex/bin/php
```

Version observed:

```text
PHP 8.5.6 cli
```

Engineering decision:

```text
use $HOME/.local/php-codex/bin/php for Captain Ether local validation/smoke unless PATH is updated later
```

## Validator QA

Command:

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --runs=30
```

Result:

```text
PASS
starter_items=1000
grammar_patterns=581
qa_items=1000
should_accept=1943
should_reject=3032
dangerous_pairs=243
danger_must_accept=821
danger_must_reject=1789
beginner_allowed=265
intermediate_allowed=726
advanced_allowed=1000
watch_selection_runs=30 per level
watch_selection_bad_runs=0
```

Important baseline observation:

```text
beginner level currently contains 265 allowed items, but this is broad level filtering, not Stage 0 first-session filtering
```

## API Smoke QA

Command:

```sh
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php \
  $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

```text
PASS captain-ether-api-smoke checks=334
```

Conclusion:

```text
current local runtime/API baseline is healthy before implementation
```

## Inspected Files

```text
public/assets/app.js
public/assets/app.css
public/api/captain-ether/start-watch.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/_answer-matching.php
public/api/captain-ether/finish-watch.php
public/api/captain-ether/_learner-streams.php
public/api/captain-ether/_answer-logging.php
private/bootstrap.php visible_question only
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/tools/validate-captain-ether.php
content/captain-ether/tools/smoke-start-watch-api.php
```

No production file, deploy script, SMTP secret, Atlas secret, shared game registry/router, Watch Officer, Nav Desk, or foreign game file was changed.

## Current Frontend Contract

### Route/Auth/First Launch

Observed in `public/assets/app.js`:

```text
renderHome -> openGame('captain_ether') -> renderGameRoute -> renderLogin or renderLevelSelect
renderLogin verifies email code and then calls renderCurrentRoute
renderLevelSelect shows Beginner / Intermediate / Advanced as equal cards
```

Baseline implication:

```text
CE-0196B has a clean insertion point in app.js for first-run funnel state, but current first launch is still mixed with generic login and equal level selection
```

Current gaps for CE-0196B:

```text
no dedicated first-run Captain Ether intro state
no explicit first-watch intent preserved through login beyond route re-render
Beginner/Intermediate/Advanced appear as equal-weight first decision
Lost Oars/progress/admin affordances can still compete after route entry depending user state
status line exists visually but not yet robustly role/status/aria-live across all states
OTP input uses numeric inputmode but not autocomplete="one-time-code"
```

### Active Watch HUD

Observed in `renderWatch()`:

```text
question prompt, previous result, answer form, tools, hint box, and right side are separate blocks inside watch layout
hint is single payload q.hint
submitAnswer is called directly from form/skip handlers
on final answer submitAnswer awaits finishWatch immediately when data.done is true
```

Current gaps for CE-0196C:

```text
no answer-button state machine
no submit in-flight guard
double submit can be attempted at UI level
input/hint/skip are not disabled while submit-answer request is pending
network/API error handling around submitAnswer is not local and does not explicitly preserve user input in a stable error state
final answer feedback is not held before summary
feedback does not show You wrote vs Standard comparison
question font remains large: desktop 2.35rem, mobile 1.56rem
right rail is watch metadata, not future partner placeholder
mobile still keeps watch-side in page flow rather than learning-first removal/deferral
```

### Styling Baseline

Observed in `public/assets/app.css`:

```text
watch-layout desktop is two columns: main question card plus 220-260px side rail
question-prompt uses brand color, accent left border, 2.35rem font
result-box has correct, soft-correct, wrong variants
mobile <=780px collapses watch layout to one column
mobile <=560px reduces prompt to 1.56rem and makes buttons wider
```

Implementation implication:

```text
CE-0196C can be implemented mostly in app.js/app.css without touching backend contracts except for later semantic display fields
```

## Current Backend Contracts

### start-watch.php

Observed contract:

```text
input: level, mode, branch, learner_stream
level normalization: beginner/intermediate/advanced
mode: mixed/focused_branch/focused_module, with focused_module disabled
content pool: items filtered by captain_allowed_levels(level)
selection: weak items, recommended branch, type floors, progressive sorting
output watch.current uses visible_question()
```

Current gap for CE-0196D:

```text
start-watch has no Stage 0, voice_role, first_session_allowed, strict_smcp_required, soft_accept_allowed, or protected_family filtering
```

### _answer-matching.php / submit-answer.php

Observed matcher classes:

```text
exact
variant
spelling
wrong
skip
```

Observed submit scoring:

```text
skipped -> skip reward
correct + hint -> hint reward
correct without hint -> 1.0
wrong -> 0.0
reason maps to skip/hint/spelling/clean/wrong
wrong/skip/hint create weak point
clean/spelling resolve weak point
```

Current gap for CE-0196E:

```text
understood_non_standard does not exist
score_factor does not exist
mastery_credit does not exist
meaning_drift does not exist
soft accept currently cannot avoid Lost Oar while also counting as partial mastery
```

### finish-watch.php / _learner-streams.php

Observed summary/progression contract:

```text
finish-watch counts clean, hint, spelling, lost, base_score
progress history stores watch summary
captain_progress_summary recommends level/branch/watch/next_step
captain_watch_debrief returns drivers, pressure_by_branch, pressure_by_type
frontend renders internal branch/type pressure into learner summary
```

Current gaps for CE-0196F:

```text
summary exposes technical branch/type pressure to user
branch keys can leak through debrief if labels are insufficient
summary has two main actions: Lost Oars and continue/recommended watch
progression does not distinguish understood_non_standard from clean mastery because the class does not exist yet
```

## Metadata Baseline

Searched in `starter.json`, QA pairs, Captain Ether API, and frontend:

```text
voice_role=0
stage_min=0
first_session_allowed=0
strict_smcp_required=0
soft_accept_allowed=0
protected_family=0
understood_non_standard=0
score_factor=0
mastery_credit=0
meaning_drift=0
```

Conclusion:

```text
CE-0196D/E/F require explicit contract additions; they cannot be implemented as a small copy-only fix
```

## Implementation Readiness

Ready next slice:

```text
CE-0196B First-Run Funnel Implementation
```

Reason:

```text
baseline validator/API smoke passed
frontend route/auth/watch entry points are identified
first-run funnel cleanup can be implemented before answer correctness semantics change
production sync is not required for local verification
```

Recommended first implementation scope:

```text
public/assets/app.js
public/assets/app.css
no backend changes in CE-0196B unless auth state requires a read-only route-intent hook
```

## Stop/Boundary Confirmation

```text
Watch Officer touched=false
Nav Desk touched=false
shared registry/router touched=false
platform auth endpoints changed=false
production config touched=false
SMTP touched=false
Atlas secrets touched=false
private auth/session secrets written=false
player email written=false
session/cookie/CSRF values written=false
production deploy=false
```

## Final Status

```text
CE_0196A=BASELINE_PASS
NEXT=CE_0196B_FIRST_RUN_FUNNEL_IMPLEMENTATION
PRODUCTION_SYNC=SEPARATE_TASK_ONLY
```
