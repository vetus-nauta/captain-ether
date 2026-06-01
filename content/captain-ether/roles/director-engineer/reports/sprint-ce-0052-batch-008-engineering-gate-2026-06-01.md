# CE-SPRINT-0052 Batch 008 Engineering Gate

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: PASS FOR QA ACCEPTANCE

## Sprint Purpose

Run the Director-Engineer gate for Batch 008 VTS / Port Control after Sea Speak
Linguist review.

## Target

```text
content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

## Inputs Accepted

- Content Producer draft:
  `content/captain-ether/roles/content-producer/reports/batch-008-vts-port-control-basics-card-2026-06-01.md`
- Sea Speak Linguist review:
  `content/captain-ether/roles/sea-speak-linguist/reports/batch-008-vts-port-control-risk-review-2026-06-01.md`

## Batch State

```text
status=linguist_reviewed
items=50
grammar_patterns=9
dangerous_pairs=10
should_accept=109
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
beginner=19
intermediate=27
advanced=4
```

Module count:

```text
vts_instructions=14
port_entry_departure=13
pilot_request=8
reporting_points=6
traffic_information=5
tug_assistance=4
```

## Structural Preflight

```text
PASS batch008 engineering structural preflight
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
accept=109
reject=150
```

Dangerous-pair labels verified:

- `request / report`
- `instruction / advice / information`
- `VTS / port control / marina control / pilot station`
- `pilot / tug / tow`
- `enter port / leave port`
- `permitted / not permitted`
- `reporting point / anchorage / berth / fairway`
- `channel 12 / channel 13 / channel 16 / channel 72`
- `proceed / hold / wait`
- `inbound / outbound`

## Validator

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

Result:

```text
PASS
Batch status: linguist_reviewed
Batch items: 50
Batch target_text: 50
Batch should_accept: 109
Batch should_reject: 150
Batch danger_must_accept: 39
Batch danger_must_reject: 117
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

Batch 008 passes engineering gate and may move to QA acceptance.

This does not approve merge into `starter.json` and does not approve production
deploy. Merge requires QA acceptance first.

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.

## Next Gate

Open `TASK-CE-0053` QA acceptance:

```text
Owner: QA
Goal: independently verify Batch 008 target_text, should_accept,
should_reject, dangerous-pair coverage, and scope preservation before merge.
Forbidden: production deploy, Atlas config/data writes, auth/platform,
router/registry, Watch Officer, Nav Desk, matcher/API/UI changes, secrets.
```
