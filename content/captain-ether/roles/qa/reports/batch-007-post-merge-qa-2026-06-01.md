# Batch 007 Post-Merge QA

Date: 2026-06-01
Task: `TASK-CE-0049`
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: PASS

## Target

- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-007-traffic-collision-basics.json`

## PASS / FAIL By Block

| Block | Result | Notes |
| --- | --- | --- |
| Batch status | PASS | Batch 007 status is `merged`. |
| Playable reachability | PASS | `50/50` Batch 007 items are present in `starter.json`. |
| Regression reachability | PASS | `50/50` Batch 007 items are present in accept/reject QA. |
| Playable hygiene | PASS | `starter.json` has `0` Batch 007 `qa_notes`. |
| Dangerous pairs | PASS | Required traffic/collision dangerous pairs exist in batch and regression. |
| Validator | PASS | Full validator passes with Batch 007 loaded as merged batch. |
| API smoke | PASS | Start-watch API smoke passes. |
| Scope preservation | PASS | Report-only QA; no content/code/config changed by QA. |

## Checks Run

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-007-traffic-collision-basics.json
```

Result:

```text
PASS
Starter items: 305
Grammar patterns: 115
Regression QA items: 305
Should-accept: 817
Should-reject: 933
Dangerous pairs: 67
Batch status: merged
Batch target_text: 50
Batch should_accept: 106
Batch should_reject: 150
Batch danger_must_accept: 44
Batch danger_must_reject: 132
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
PASS post-merge-qa structural reachability
batch_status=merged
traffic_items=50
qa_batch_entries=50
missingFromStarter=[]
missingFromQa=[]
qaNotes=[]
mismatch=[]
missingPairs=[]
```

Required dangerous-pair labels verified:

- `port / starboard`
- `ahead / astern`
- `stern / astern`
- `alter course / change channel`
- `reduce speed / stop engine`
- `risk of collision / collision`
- `CPA / TCPA / ETA`
- `give-way vessel / stand-on vessel`
- `crossing / overtaking / passing`
- `bearing / heading / course`

## Failures

None found in the assigned post-merge QA scope.

## Scope Preserved

QA did not edit content JSON, matcher, API/runtime, UI, Atlas, auth, router,
registry, Watch Officer, Nav Desk, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, or player identity data.

## Next Expected

Director-Engineer acceptance of Batch 007 post-merge QA.

This QA pass does not approve production deploy.
