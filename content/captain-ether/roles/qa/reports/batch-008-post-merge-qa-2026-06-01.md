# Batch 008 Post-Merge QA

Date: 2026-06-01
Task: `TASK-CE-0055`
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: PASS

## Target

- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-008-vts-port-control-basics.json`

## PASS / FAIL By Block

| Block | Result | Notes |
| --- | --- | --- |
| Batch status | PASS | Batch 008 status is `merged`. |
| Playable reachability | PASS | `50/50` Batch 008 items are present in `starter.json`. |
| Regression reachability | PASS | `50/50` Batch 008 items are present in accept/reject QA. |
| Playable hygiene | PASS | `starter.json` has `0` Batch 008 `qa_notes`. |
| Dangerous pairs | PASS | Required VTS / port-control dangerous pairs exist in batch and regression. |
| Validator | PASS | Full validator passes with Batch 008 loaded as merged batch. |
| API smoke | PASS | Start-watch API smoke passes. |
| Scope preservation | PASS | Report-only QA; no content/code/config changed by QA. |

## Checks Run

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

Result:

```text
PASS
Starter items: 355
Grammar patterns: 124
Regression QA items: 355
Should-accept: 926
Should-reject: 1083
Dangerous pairs: 77
Batch status: merged
Batch target_text: 50
Batch should_accept: 109
Batch should_reject: 150
Batch danger_must_accept: 39
Batch danger_must_reject: 117
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
PASS post-merge-qa batch008 structural reachability
batch_status=merged
vts_items=50
qa_batch_entries=50
missingFromStarter=[]
missingFromQa=[]
qaNotes=[]
mismatch=[]
missingPairs=[]
```

Required dangerous-pair labels verified:

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

## Failures

None found in the assigned post-merge QA scope.

## Scope Preserved

QA did not edit content JSON, matcher, API/runtime, UI, Atlas, auth, router,
registry, Watch Officer, Nav Desk, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, or player identity data.

## Next Expected

Director-Engineer acceptance of Batch 008 post-merge QA.

This QA pass does not approve production deploy.
