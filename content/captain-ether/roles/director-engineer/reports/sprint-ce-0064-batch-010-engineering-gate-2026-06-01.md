# CE-SPRINT-0064 Batch 010 Engineering Gate

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: PASS FOR QA ACCEPTANCE

## Sprint Purpose

Run the Director-Engineer gate for Batch 010 Distress / Mayday after Sea Speak
Linguist review.

## Target

```text
content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

## Inputs Accepted

- Content Producer draft:
  `content/captain-ether/roles/content-producer/reports/batch-010-distress-mayday-basics-card-2026-06-01.md`
- Sea Speak Linguist review:
  `content/captain-ether/roles/sea-speak-linguist/reports/batch-010-distress-mayday-risk-review-2026-06-01.md`

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
beginner=24
intermediate=21
advanced=5
```

Module count:

```text
distress_signal=6
distress_relay=3
identity_position=8
nature_of_distress=14
assistance_required=7
persons_abandoning=7
distress_readback=5
```

## Structural Preflight

```text
PASS batch010 engineering structural preflight
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
missingDangerRefs=[]
accept=100
reject=150
dangerAccept=33
dangerReject=99
```

Dangerous-pair labels verified:

- `Mayday / Pan-Pan / Securite`
- `distress / urgency / safety`
- `Mayday / Mayday relay / Pan-Pan relay`
- `position / course / bearing / destination`
- `vessel name / call sign / MMSI`
- `fire / flooding / sinking / listing / aground`
- `rescue / towage / pilot / berth`
- `persons on board / persons overboard / abandoning vessel`
- `read back / relay / say again / cancel`
- `distress traffic / safety watch / routine traffic`

## Validator

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

Result:

```text
PASS
Batch status: linguist_reviewed
Batch items: 50
Batch target_text: 50
Batch should_accept: 100
Batch should_reject: 150
Batch danger_must_accept: 33
Batch danger_must_reject: 99
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

Batch 010 passes engineering gate and may move to QA acceptance.

This does not approve merge into `starter.json` and does not approve production
deploy. Merge requires QA acceptance first.

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.

## Next Gate

Open `TASK-CE-0065` QA acceptance:

```text
Owner: QA
Goal: independently verify Batch 010 target_text, should_accept,
should_reject, dangerous-pair coverage, Mayday/Pan-Pan/Securite boundaries, and
scope preservation before merge.
Forbidden: production deploy, Atlas config/data writes, auth/platform,
router/registry, Watch Officer, Nav Desk, matcher/API/UI changes, secrets.
```
