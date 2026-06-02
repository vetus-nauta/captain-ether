# CE-SPRINT-0117 Batch 017 Engineering Gate

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether Batch 017 engineering gate only
Status: PASS FOR QA ACCEPTANCE

## Batch State

```text
batch_id=batch-017-marina-service-logistics-basics
status=linguist_reviewed
items=25
grammar_patterns=10
dangerous_pairs=6
target_text=25
should_accept=42
should_reject=77
danger_must_accept=19
danger_must_reject=38
```

Type count:

```text
word=5
short_expression=10
phrase=10
```

Level count:

```text
beginner=3
intermediate=17
advanced=5
```

Module count:

```text
service_logistics=4
pump_out=3
payment_office=4
waiting_area=2
repair_berth=3
fuel_water_power=9
```

## Structural Checks

```text
Duplicate batch item ids: none
Duplicate batch target_text: none
Duplicate batch grammar pattern ids: none
Starter item id collisions: none
Starter target_text collisions: none
Starter grammar_pattern collisions: none
Item grammar_pattern references: PASS
qa_notes completeness: PASS
JSON parse: PASS
```

## Runtime Checks

```text
Validator with batch: PASS with known starter WARN (9)
Targeted matcher: PASS engineering_batch017_targeted cases=33
API smoke: PASS captain-ether-api-smoke checks=334
PHP syntax guard: PASS
JS syntax guard: PASS
Secret scan on checked files: PASS
Diff whitespace check: PASS
```

## Engineering Decision

Batch 017 passes engineering gate and may move to QA acceptance.

This does not approve merge into `starter.json` and does not approve production
deploy. Merge requires QA acceptance first.

## QA Focus For Next Sprint

QA must explicitly verify these high-risk boundaries:

```text
service pontoon -> accept
waiting pontoon -> reject for service pontoon item
pump-out station / pump out station -> accept
fuel station -> reject for pump-out station item
payment office -> accept
port control -> reject for payment office item
repair berth -> accept
repair underway -> reject for repair berth item
fuel berth occupied -> accept
fuel berth clear -> reject for occupied fuel berth item
shore power available -> accept
no shore power available -> reject for available item
no shore power available -> accept for no-shore-power item
water hose ready -> accept
fuel hose ready -> reject for water hose item
marina service complete -> accept
service complete -> reject for marina service complete item
repair complete -> reject for marina service complete item
Pump-out station unavailable until one five zero zero UTC. -> accept
Pump-out station unavailable until one six zero zero UTC -> reject
Contact payment office on channel one two. -> accept
Contact payment office on channel one six -> reject
After payment, proceed to visitor berth. -> accept
Before payment proceed to visitor berth -> reject
Repair berth available after one six zero zero UTC. -> accept
Repair berth available after one five zero zero UTC -> reject
Water hose ready on starboard side. -> accept
Water hose ready on port side -> reject
Marina service complete, return to assigned berth. -> accept
Repair complete return to assigned berth -> reject
Waiting pontoon full, stand by outside harbour. -> accept
Waiting pontoon full proceed inside harbour -> reject
```

## Scope Preserved

No playable `starter.json`, accept/reject registry, matcher, API/runtime,
UI/assets, Atlas, auth, router, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, player identity data, WebStorm DB
console, or WebStorm datasource was changed.
