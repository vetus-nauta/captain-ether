# CE-SPRINT-0058 Batch 009 Engineering Gate

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: PASS FOR QA ACCEPTANCE

## Sprint Purpose

Run the Director-Engineer gate for Batch 009 Onboard Operations after Sea Speak
Linguist review.

## Target

```text
content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

## Inputs Accepted

- Content Producer draft:
  `content/captain-ether/roles/content-producer/reports/batch-009-onboard-operations-basics-card-2026-06-01.md`
- Sea Speak Linguist review:
  `content/captain-ether/roles/sea-speak-linguist/reports/batch-009-onboard-operations-risk-review-2026-06-01.md`

## Batch State

```text
status=linguist_reviewed
items=50
grammar_patterns=12
dangerous_pairs=10
should_accept=100
should_reject=150
```

Type count:

```text
word=10
short_expression=17
phrase=23
```

Level count:

```text
beginner=25
intermediate=24
advanced=1
```

Module count:

```text
watch_handover=9
helm_orders=11
anchor_handling=9
mooring_stations=10
safety_checks=5
emergency_actions_aboard=6
```

## Structural Preflight

```text
PASS batch009 engineering structural preflight
status=linguist_reviewed
items=50
duplicateBatchIds=[]
overlapStarter=[]
overlapQa=[]
duplicatePatternIds=[]
overlapStarterPatterns=[]
missingRequired=[]
qaNotesCount=50
dangerousPairs=10
accept=100
reject=150
```

Dangerous-pair labels verified:

- `hand over watch / take over watch`
- `helm order / action completed`
- `port helm / starboard helm`
- `anchor / moor / berth`
- `let go anchor / heave up anchor`
- `make fast / let go lines`
- `bow station / stern station / port station / starboard station`
- `stand by / standing by`
- `safety check / emergency action`
- `fire / flooding / man overboard`

## Validator

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

Result:

```text
PASS
Batch status: linguist_reviewed
Batch items: 50
Batch target_text: 50
Batch should_accept: 100
Batch should_reject: 150
Batch danger_must_accept: 35
Batch danger_must_reject: 105
Known starter warnings: WARN (9)
```

## API Smoke

```sh
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

```text
PASS captain-ether-api-smoke checks=334
```

## JS Syntax Guard

```sh
node --check public/assets/app.js
```

Result: PASS.

## Director Decision

Batch 009 passes engineering gate and may move to QA acceptance.

This does not approve merge into `starter.json` and does not approve production
deploy. Merge requires QA acceptance first.

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.

## Next Gate

Open `TASK-CE-0059` QA acceptance:

```text
Owner: QA
Goal: independently verify Batch 009 target_text, should_accept,
should_reject, dangerous-pair coverage, and scope preservation before merge.
Forbidden: production deploy, Atlas config/data writes, auth/platform,
router/registry, Watch Officer, Nav Desk, matcher/API/UI changes, secrets.
```
