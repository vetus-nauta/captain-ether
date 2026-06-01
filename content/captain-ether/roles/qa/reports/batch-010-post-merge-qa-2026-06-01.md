# Batch 010 Post-Merge QA

Date: 2026-06-01
Task: `TASK-CE-0067`
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: PASS

## Target

- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-010-distress-mayday-basics.json`

## PASS / FAIL By Block

| Block | Result | Notes |
| --- | --- | --- |
| Batch status | PASS | Batch 010 status is `merged`. |
| Playable reachability | PASS | `50/50` Batch 010 items are present in `starter.json`. |
| Regression reachability | PASS | `50/50` Batch 010 items are present in accept/reject QA. |
| Playable hygiene | PASS | `starter.json` has `0` Batch 010 `qa_notes`. |
| Dangerous pairs | PASS | Required Distress / Mayday dangerous pairs exist in batch and regression. |
| Validator | PASS | Full validator passes with Batch 010 loaded as merged batch. |
| API smoke | PASS | Start-watch API smoke passes. |
| Scope preservation | PASS | Report-only QA; no content/code/config changed by QA. |

## Checks Run

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

Result:

```text
PASS
Starter items: 455
Grammar patterns: 148
Regression QA items: 455
Should-accept: 1126
Should-reject: 1383
Dangerous pairs: 97
Batch status: merged
Batch target_text: 50
Batch should_accept: 100
Batch should_reject: 150
Batch danger_must_accept: 33
Batch danger_must_reject: 99
Known warnings: WARN (9)
```

```sh
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

```text
PASS captain-ether-api-smoke checks=334
```

Structural reachability check:

```text
PASS post-merge-qa batch010 structural reachability
batch_status=merged
distress_mayday_items=50
qa_batch_entries=50
missingFromStarter=[]
missingFromQa=[]
qaNotes=[]
mismatch=[]
missingPairs=[]
```

Required dangerous-pair labels verified:

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

## Failures

None found in the assigned post-merge QA scope.

## Scope Preserved

QA did not edit content JSON, matcher, API/runtime, UI, Atlas, auth, router,
registry, Watch Officer, Nav Desk, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, or player identity data.

## Next Expected

Director-Engineer acceptance of Batch 010 post-merge QA.

This QA pass does not approve production deploy.
