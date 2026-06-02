# CE-SPRINT-0106 Batch 015 Post-Merge QA

Date: 2026-06-02
Owner: QA
Scope: Captain Ether local merged M4 baseline only
Status: PASS / READY_FOR_CONTROLLED_PRODUCTION_SYNC

## Result

```text
Post-merge QA: PASS
starter_items=575
grammar_patterns=194
qa_items=575
should_accept=1356
should_reject=1749
dangerous_pairs=134
danger_must_accept=408
danger_must_reject=955
batch_status=merged
batch_items_in_starter=25/25
batch_qa_items=25/25
batch_dangerous_pairs_in_registry=6/6
batch_grammar_present=10/10
qa_notes_in_starter=0
```

## Runtime Checks

```text
Validator: PASS with known starter WARN (9)
API smoke: PASS captain-ether-api-smoke checks=334
JSON parse: PASS jq
PHP syntax guard: PASS
JS syntax guard: PASS
Collision/integrity preflight: PASS
Post-merge targeted matcher: PASS post_merge_qa_batch015_targeted cases=22
Secret scan on merged content inputs: PASS
```

## Targeted SAR Boundaries

```text
coastguard -> accept
VTS -> reject
port control -> reject
last known position -> accept
last reported position -> reject
current position -> reject
Report last known position of vessel in distress. -> accept
Report last reported position of vessel in distress -> reject
Search area north of last known position. -> accept
Search area north of last reported position -> reject
Debris sighted near last known position. -> accept
Debris sighted near last reported position -> reject
Mayday relay received -> accept
Pan-Pan relay received -> reject
Mayday relay received, unable to assist. -> accept
Mayday relay received able to assist -> reject
Rescue boat approaching from starboard side. -> accept
Rescue boat approaching from port side -> reject
Keep listening watch for SAR traffic on channel one six. -> accept
Keep listening watch for SAR traffic on channel seven two -> reject
Rescue helicopter overhead, prepare for evacuation. -> accept
Rescue helicopter overhead evacuation not required -> reject
```

## Decision

Local/GitHub M4 baseline is ready for a controlled production sync task.

Production deploy is not performed by this sprint. Open `TASK-CE-0107 Batch 015
Production Sync` to update production and run production smoke/parity checks.

## Scope Preserved

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.
