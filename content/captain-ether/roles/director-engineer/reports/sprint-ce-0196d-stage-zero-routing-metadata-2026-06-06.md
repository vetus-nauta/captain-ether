# CE-SPRINT-0196D Stage 0 Beginner Routing And Metadata

Date: 2026-06-06
Owner: Director-Engineer
Scope: Captain Ether Stage 0 first-session metadata and runtime routing
Status: IMPLEMENTED_LOCAL / QA_PASS / READY_FOR_CE_0196E

## Decision

CE-0196D is implemented locally.

Result:

```text
IMPLEMENTED_LOCAL
QA_PASS
READY_FOR_CE_0196E_SEMANTIC_SOFT_ACCEPTANCE
PRODUCTION_UNCHANGED
```

## Scope Verification

Changed files:

```text
content/captain-ether/starter.json
content/captain-ether/tools/validate-captain-ether.php
content/captain-ether/tools/smoke-start-watch-api.php
public/api/captain-ether/start-watch.php
```

Unchanged by this slice:

```text
public/assets/app.js
public/assets/app.css
public/api/captain-ether/_answer-matching.php
public/api/captain-ether/submit-answer.php
public/api/captain-ether/finish-watch.php
public/api/games/registry.php
public/api/auth/*
production config
SMTP/DNS/secrets
other games
```

Production deploy:

```text
production_deploy=false
```

## Metadata Added

Every playable starter item now has explicit learning-routing metadata:

```text
voice_role=vessel_origin | shore_station_origin | onboard_internal | neutral_procedure | exam_meta
stage_min=0 | 1 | 2 | 3
first_session_allowed=true | false
strict_smcp_required=true | false
soft_accept_allowed=true | false
protected_family=<review-family-id>
```

## Stage 0 Rule

Stage 0 first-session pool is intentionally narrow.

Allowed:

```text
level=beginner
stage_min=0
first_session_allowed=true
voice_role=vessel_origin or neutral_procedure
core_radio branch
safe early unbranched routine/call/clarification/navigation/position/assistance/radio_procedure items
```

Blocked from Stage 0:

```text
shore_station_origin
onboard_internal
exam_meta
deck operations
medical / first-aid operations
engine / damage control
VTS / station-side permissions
clearance administration
traffic / collision
SAR / casualty transfer
review minimal pairs
grammar/exam-style contrast items
```

Stage 0 count:

```text
stage0_allowed=43
minimum_required=40
bad_metadata=0
```

The Stage 0 pool includes basic orientation words such as `port`, `starboard`, and `astern` as early vocabulary. Collision/passing-intent material is excluded.

## Runtime Routing

Implemented in `public/api/captain-ether/start-watch.php`.

First-session filter applies only when all conditions are true:

```text
learner_stream is not English-native hidden stream
level=beginner
mode=mixed
completed_watches=0
```

Runtime filter:

```text
first_session_allowed=true
stage_min=0
voice_role in vessel_origin, neutral_procedure
```

Focused watches, intermediate watches, advanced watches, English-native hidden stream, and post-first-watch beginner watches are not narrowed by this Stage 0 first-session filter.

API response now includes:

```text
watch.first_session=true | false
```

This does not expose answers, qa_notes, player identity, email, tokens, cookies, sessions, or CSRF values.

## Validator Gate

Added `validate_learning_metadata()` to `content/captain-ether/tools/validate-captain-ether.php`.

Validator now checks:

```text
all starter items have required learning metadata fields
voice_role is valid enum
stage_min is 0/1/2/3
boolean fields are true booleans
protected_family is non-empty
Stage 0 pool >= 40 items
Stage 0 items are beginner only
Stage 0 items have voice_role vessel_origin or neutral_procedure
Stage 0 items are not in blocked branches
repeated Stage 0 selection does not leak blocked items
```

Validator output includes:

```text
voice_role_counts={"exam_meta":26,"neutral_procedure":95,"onboard_internal":148,"shore_station_origin":96,"vessel_origin":635}
stage_min_counts=[43,160,614,183]
first_session_allowed={"stage0_allowed":43,"runs":30,"length":12,"bad_runs":0,"reached":43}
```

## API Smoke Gate

Added API smoke check:

```text
mixed beginner default stage0 selection
```

It verifies selected stored items for the first default beginner watch are all Stage 0 eligible.

## QA Performed

### PHP Lint / JSON Parse

Commands:

```sh
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/start-watch.php
$HOME/.local/php-codex/bin/php -l content/captain-ether/tools/validate-captain-ether.php
$HOME/.local/php-codex/bin/php -l content/captain-ether/tools/smoke-start-watch-api.php
$HOME/.local/php-codex/bin/php -r 'json_decode(file_get_contents("content/captain-ether/starter.json"), true, 512, JSON_THROW_ON_ERROR); echo "starter_json_ok\n";'
```

Result:

```text
PASS
starter_json_ok
```

### Validator

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
dangerous_pairs=243
stage0_allowed=43
stage0_bad_runs=0
stage0_reached=43
watch_selection_bad_runs=0
```

### API Smoke

Command:

```sh
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php \
  $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

```text
PASS captain-ether-api-smoke checks=336
```

## Known Remaining Work

Not in CE-0196D by design:

```text
semantic soft acceptance
understood_non_standard score factor
meaning_drift hard-reject class
progression evidence/unlock/review rules
summary/debrief simplification
production deploy
```

Next slice:

```text
CE-0196E Semantic Soft Acceptance Implementation
```

## Final Status

```text
CE_0196D=IMPLEMENTED_LOCAL_QA_PASS
NEXT=CE_0196E_SEMANTIC_SOFT_ACCEPTANCE
PRODUCTION_SYNC=SEPARATE_TASK_ONLY
```
