# CE-SPRINT-0120 Batch 017 Post-Merge QA

Date: 2026-06-02
Owner: QA
Scope: Captain Ether local merged M4 baseline only
Status: PASS / READY_FOR_CONTROLLED_PRODUCTION_SYNC

## Result

```text
Post-merge QA: PASS
starter_items=625
grammar_patterns=214
qa_items=625
should_accept=1435
should_reject=1902
dangerous_pairs=146
danger_must_accept=443
danger_must_reject=1025
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
JSON parse: PASS node
PHP syntax guard: PASS
JS syntax guard: PASS
Collision/integrity preflight: PASS
Post-merge targeted matcher: PASS post_merge_qa_batch017_targeted cases=54
Secret scan on merged content inputs: PASS
Diff whitespace check: PASS
```

## Targeted Marina Service Boundaries

```text
service pontoon -> accept
waiting pontoon -> reject for service pontoon item
pump out station -> accept
fuel station -> reject for pump-out station item
payment office -> accept
port control -> reject for payment office item
waiting pontoon -> accept
service pontoon -> reject for waiting pontoon item
repair berth -> accept
repair underway -> reject for repair berth item
confirm fuel berth -> accept
cancel fuel berth -> reject
fuel berth occupied -> accept
fuel berth clear -> reject
water hose is ready -> accept
fuel hose ready -> reject
shore power available -> accept
no shore power available -> reject for shore-power-available item
pump out station unavailable -> accept
pump out station available -> reject
wait on service pontoon -> accept
proceed to service pontoon -> reject for wait item
proceed to payment office -> accept
depart payment office -> reject
repair berth requested -> accept
repair berth cancelled -> reject
no shore power available -> accept
shore power available -> reject for no-shore-power item
marina service complete -> accept
marina service is complete -> accept
service complete -> reject for marina service complete item
repair complete -> reject for marina service complete item
Fuel berth occupied, wait outside marina. -> accept
Fuel berth occupied proceed inside marina -> reject
Proceed to service pontoon for water. -> accept
Proceed to fuel berth for water -> reject
Shore power available on berth Bravo two. -> accept
Shore power available on berth Bravo three -> reject
Pump-out station unavailable until one five zero zero UTC. -> accept
Pump-out station unavailable until one six zero zero UTC -> reject
Contact payment office on channel one two. -> accept
Contact port control on channel one two -> reject
Contact payment office on channel one six -> reject
After payment, proceed to visitor berth. -> accept
Before payment proceed to visitor berth -> reject
Repair berth available after one six zero zero UTC. -> accept
Repair berth available after one five zero zero UTC -> reject
Water hose ready on starboard side. -> accept
Water hose ready on port side -> reject
Marina service complete, return to assigned berth. -> accept
Service complete return to assigned berth -> reject
Marina service complete proceed to fuel berth -> reject
Waiting pontoon full, stand by outside harbour. -> accept
Waiting pontoon full proceed inside harbour -> reject
```

## Decision

Local/GitHub M4 baseline is ready for a controlled production sync task.

Production deploy is not performed by this sprint. Open `TASK-CE-0121 Batch 017
Production Sync` to update production and run production smoke/parity checks.

## Scope Preserved

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.
