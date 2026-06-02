# CE-SPRINT-0104 Batch 015 Acceptance QA

Date: 2026-06-02
Task: `TASK-CE-0104`
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: PASS_FOR_MERGE

## Target

```text
content/captain-ether/batches/batch-015-sar-relay-coordination-basics.json
```

## Result

```text
PASS
Batch status: linguist_reviewed
Batch items: 25
Target text: 25/25
Should-accept: 44/44
Should-reject: 79/79
Dangerous-pair groups: 6/6
Danger must-accept: 20/20
Danger must-reject: 42/42
Known starter warnings: WARN (9)
Batch-specific warnings: 0
```

## Targeted QA Cases

```text
PASS qa_batch015_targeted cases=20
```

Targeted cases covered:

```text
last known position -> accept
last reported position -> reject
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
coast guard -> accept
VTS -> reject for coastguard item
Rescue boat approaching from starboard side. -> accept
Rescue boat approaching from port side -> reject
Keep listening watch for SAR traffic on channel one six. -> accept
Keep listening watch for SAR traffic on channel seven two -> reject
Rescue helicopter overhead, prepare for evacuation. -> accept
Rescue helicopter overhead evacuation not required -> reject
```

## Boundary Checks Accepted

QA accepts the batch regression boundaries for:

```text
coastguard / VTS / port control / marina control
Mayday relay / own Mayday / Pan-Pan relay / readback
unable to assist / able to assist
last known position / last reported position / current position / destination / course
search area / traffic lane / anchorage / reporting point
visual contact / visual contact lost / radio contact / radar contact
survivors in sight / no survivors / person overboard / casualties / debris
rescue boat / rescue helicopter / liferaft / pilot boat / tug
evacuation preparation / evacuation not required / towage / berthing
SAR traffic channel one six / VTS traffic / channel seven two
starboard side / port side rescue approach
```

## Runtime Checks

```text
Validator: PASS
Targeted matcher: PASS qa_batch015_targeted cases=20
API smoke: PASS captain-ether-api-smoke checks=334
JS syntax guard: PASS
Starter duplicate id/target preflight: PASS
Starter grammar-pattern collision preflight: PASS
Secret scan on changed inputs: PASS
```

## QA Decision

Batch 015 may move to Director merge preparation.

This QA report does not approve production deploy. Production deploy requires a
separate post-merge production task after local validation passes.

## Scope Preserved

QA did not edit content JSON, `starter.json`, matcher, API/runtime, UI, Atlas,
auth, router, registry, Watch Officer, Nav Desk, production config, deploy/FTP
state, secrets, sessions, cookies, CSRF, SMTP, player email, player identity
data, WebStorm DB console, or WebStorm datasource.
