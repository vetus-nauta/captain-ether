# CE-SPRINT-0119 Batch 017 Merge Preparation

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether Batch 017 local merge only
Status: MERGED LOCALLY / PASS

## Merge Notes

- Added `25` Batch 017 items to playable `starter.json`.
- Added `25` regression entries to `accept-reject-qa-pairs.json`.
- Added `6` dangerous-pair groups.
- Added `10` grammar patterns.
- Marked Batch 017 status as `merged`.
- Did not carry `qa_notes` into playable starter items.

## Final Local State

```text
starter_items=625
grammar_patterns=214
qa_items=625
should_accept=1435
should_reject=1902
dangerous_pairs=146
danger_must_accept=443
danger_must_reject=1025
```

Type count:

```text
word=125
short_expression=206
phrase=294
```

Level count:

```text
beginner=201
intermediate=296
advanced=128
```

Branch count update:

```text
marina_harbour=75
```

## Batch 017 Post-Merge Integrity

```text
Batch status: merged
Batch items present in starter: 25/25
Batch QA items present in registry: 25/25
Batch dangerous pairs present in registry: 6/6
Batch grammar patterns present in starter: 10/10
Batch item ids unique in starter: PASS
qa_notes_in_starter=0
```

The wider starter corpus still has historical duplicate accepted-answer warnings
from earlier content. Batch 017 did not introduce duplicate ids, missing grammar
references, or playable `qa_notes` leakage.

## Checks

```text
Validator: PASS with known starter WARN (9)
API smoke: PASS captain-ether-api-smoke checks=334
JSON parse: PASS node
PHP syntax guard: PASS
JS syntax guard: PASS
Post-merge targeted matcher: PASS post_merge_batch017_targeted cases=52
Secret scan on changed files: PASS
Diff whitespace check: PASS
```

## Preserved Boundaries

```text
service pontoon -> accept
waiting pontoon -> reject for service pontoon item
pump out station -> accept
fuel station -> reject for pump-out station item
payment office -> accept
port control -> reject for payment office item
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

## Scope Preserved

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.

## Next Gate

Open `TASK-CE-0120 Batch 017 Post-Merge QA` before production deploy.
