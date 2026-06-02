# CE-SPRINT-0118 Batch 017 Acceptance QA

Date: 2026-06-02
Task: `TASK-CE-0118`
Owner: QA
Scope: Captain Ether Batch 017 acceptance only
Mode: report-only
Status: PASS_FOR_MERGE

## Target

```text
content/captain-ether/batches/batch-017-marina-service-logistics-basics.json
```

## Result

```text
PASS
Batch status: linguist_reviewed
Batch items: 25
Grammar patterns: 10
Dangerous-pair groups: 6
Target text: 25/25
Should-accept: 42/42
Should-reject: 77/77
Danger must-accept: 19/19
Danger must-reject: 38/38
Known starter warnings: WARN (9)
Batch-specific warnings: 0
```

## Targeted QA Cases

```text
PASS qa_batch017_targeted cases=56
```

Targeted cases covered:

```text
service pontoon -> accept
waiting pontoon -> reject for service pontoon item
pump-out station -> accept
pump out station -> accept
bilge pump running -> reject for pump-out station item
payment office -> accept
marina control -> reject for payment office item
waiting pontoon -> accept
service pontoon -> reject for waiting pontoon item
repair berth -> accept
visitor berth -> reject for repair berth item
confirm fuel berth -> accept
request fuel berth -> reject
fuel berth is occupied -> accept
fuel berth available -> reject
water hose is ready -> accept
shore power ready -> reject for water hose item
shore power available -> accept
shore power failure -> reject
pump out station unavailable -> accept
pump-out station available -> reject
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
service cancelled -> reject for marina service complete item
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

## Boundary Checks Accepted

QA accepts the batch regression boundaries for:

```text
service pontoon / waiting pontoon / fuel berth / visitor berth
pump-out station / fuel station / bilge pump / water station
payment office / marina control / port control / customs office
repair berth / visitor berth / fuel berth / repair underway
confirm / request / cancel; fuel berth / visitor berth
fuel berth occupied / available / clear
water hose / fuel hose / shore power
shore power available / unavailable / no shore power / power failure
wait / proceed / depart
repair berth requested / cancelled / visitor berth requested
marina service complete / service complete / repair complete / service cancelled
wait outside / proceed inside
berth Bravo two / Bravo three
channel one two / channel one six
payment sequence: after payment / before payment
repair berth time 1600 / 1500
pump-out time 1500 / 1600
starboard side / port side
assigned berth / fuel berth
```

## Runtime Checks

```text
Validator with batch: PASS
Collision preflight: PASS
Targeted matcher: PASS qa_batch017_targeted cases=56
API smoke: PASS captain-ether-api-smoke checks=334
JSON parse: PASS node
PHP syntax guard: PASS
JS syntax guard: PASS
Secret scan on changed inputs: PASS
Diff whitespace check: PASS
```

## QA Decision

Batch 017 may move to Director merge preparation.

This QA report does not approve production deploy. Production deploy requires a
separate post-merge production sync task after local validation passes.

## Scope Preserved

QA did not edit content JSON, `starter.json`, matcher, API/runtime, UI, Atlas,
auth, router, registry, Watch Officer, Nav Desk, production config, deploy/FTP
state, secrets, sessions, cookies, CSRF, SMTP, player email, player identity
data, WebStorm DB console, or WebStorm datasource.
