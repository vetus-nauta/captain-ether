# Batch 009 Post-Merge QA

Date: 2026-06-01
Task: `TASK-CE-0061`
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: PASS

## Target

- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-009-onboard-operations-basics.json`

## PASS / FAIL By Block

| Block | Result | Notes |
| --- | --- | --- |
| Batch status | PASS | Batch 009 status is `merged`. |
| Playable reachability | PASS | `50/50` Batch 009 items are present in `starter.json`. |
| Regression reachability | PASS | `50/50` Batch 009 items are present in accept/reject QA. |
| Playable hygiene | PASS | `starter.json` has `0` Batch 009 `qa_notes`. |
| Dangerous pairs | PASS | Required Onboard Operations dangerous pairs exist in batch and regression. |
| Validator | PASS | Full validator passes with Batch 009 loaded as merged batch. |
| API smoke | PASS | Start-watch API smoke passes. |
| Scope preservation | PASS | Report-only QA; no content/code/config changed by QA. |

## Checks Run

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

Result:

```text
PASS
Starter items: 405
Grammar patterns: 136
Regression QA items: 405
Should-accept: 1026
Should-reject: 1233
Dangerous pairs: 87
Batch status: merged
Batch target_text: 50
Batch should_accept: 100
Batch should_reject: 150
Batch danger_must_accept: 35
Batch danger_must_reject: 105
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
PASS post-merge-qa batch009 structural reachability
batch_status=merged
onboard_items=50
qa_batch_entries=50
missingFromStarter=[]
missingFromQa=[]
qaNotes=[]
mismatch=[]
missingPairs=[]
```

Required dangerous-pair labels verified:

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

## Failures

None found in the assigned post-merge QA scope.

## Scope Preserved

QA did not edit content JSON, matcher, API/runtime, UI, Atlas, auth, router,
registry, Watch Officer, Nav Desk, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, or player identity data.

## Next Expected

Director-Engineer acceptance of Batch 009 post-merge QA.

This QA pass does not approve production deploy.
