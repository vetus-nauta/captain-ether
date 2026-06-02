# CE-SPRINT-0125 Batch 018 Acceptance QA

Date: 2026-06-02
Task: `TASK-CE-0125`
Owner: QA
Scope: Captain Ether Batch 018 acceptance only
Mode: report-only
Status: PASS_FOR_MERGE

## Target

```text
content/captain-ether/batches/batch-018-scenario-chain-readbacks-basics.json
```

## Result

```text
PASS
Batch status: linguist_reviewed
Batch items: 25
Grammar patterns: 23
Dangerous-pair groups: 6
Target text: 25/25
Should-accept: 46/46
Should-reject: 79/79
Danger must-accept: 24/24
Danger must-reject: 28/28
Known starter warnings: WARN (9)
Batch-specific warnings: 0
```

## Targeted QA Cases

```text
PASS qa_batch018_targeted cases=51
```

Targeted cases covered:

```text
Marina Alpha, sailing yacht Aurora approaching from south. -> accept
Marina Bravo sailing yacht Aurora approaching from south -> reject
Port Control sailing yacht Aurora approaching from south -> reject
Request visitor berth for one night. -> accept
Request visitor berth for two nights -> reject
Proceed to berth Bravo two, starboard side to. -> accept
Wait outside berth Bravo two starboard side to -> reject
Reading back berth Bravo two, starboard side to. -> accept
Correction berth Bravo two starboard side to -> reject
Aurora alongside berth Bravo two. -> accept
Aurora departed berth Bravo two -> reject
Crossing vessel on starboard bow. -> accept
Crossing vessel on port bow -> reject
Request crossing vessel intentions. -> accept
Request crossing vessel position -> reject
Altering course to starboard to pass astern. -> accept
Maintaining course to starboard to pass astern -> reject
Confirm clear, passing astern. -> accept
Cancel clear passing astern -> reject
Reporting passing point Delta. -> accept
Reporting leaving point Delta -> reject
VTS, switch to channel one two. -> accept
Marina switch to channel one two -> reject
Read back, switch to channel one two. -> accept
Read back stand by on channel one two -> reject
Fog bank ahead, reducing speed. -> accept
Smoke bank ahead reducing speed -> reject
Sound signal every two minutes. -> accept
No sound signal every two minutes -> reject
Securite, visibility less than one mile in area Charlie. -> accept
Securite visibility more than one mile in area Charlie -> reject
Pan-Pan, engine failed, position near buoy seven. -> accept
Pan Pan steering failed position near buoy seven -> reject
Request tow to harbour. -> accept
Request pilot to harbour -> reject
Steering limited, keeping starboard side of fairway. -> accept
Steering failed keeping starboard side of fairway -> reject
Read back Pan-Pan, request tow to harbour. -> accept
Correction Pan Pan request tow to harbour -> reject
Mayday, taking water, position five miles east of Alpha. -> accept
Mayday fire position five miles east of Alpha -> reject
Four people on board -> accept
Four persons abandoning ship -> reject
Need emergency pump -> accept
Require bilge status -> reject
Rescue unit reading back five miles east of Alpha -> accept
Marina reading back five miles east of Alpha -> reject
position is received -> accept
position unknown -> reject
correction area Charlie -> accept
correction channel Charlie -> reject
```

## Boundary Checks Accepted

QA accepts the batch regression boundaries for:

```text
station identity: Marina Alpha / Bravo / Port Control / VTS / rescue unit
scenario state: approaching / departing / alongside / reading back / correction
traffic: crossing / overtaking, starboard / port, bow / quarter, astern / ahead
VTS: spoken order / advice / description, channel one two / one six
restricted visibility: fog / smoke, reduce / increase speed, Securite / Pan-Pan
urgency: Pan-Pan / Mayday, engine / steering, tow / pilot / cancel tow
distress: Mayday / Pan-Pan, taking water / fire, east / west, persons on board / overboard
position/readback: position received / corrected / unknown
```

## Runtime Checks

```text
Validator with batch: PASS
Collision preflight: PASS
Targeted matcher: PASS qa_batch018_targeted cases=51
API smoke: PASS captain-ether-api-smoke checks=334
JSON parse: PASS node
PHP syntax guard: PASS
JS syntax guard: PASS
Secret scan on changed inputs: PASS
Diff whitespace check: PASS
```

## QA Decision

Batch 018 may move to Director merge preparation.

This QA report does not approve production deploy. Production deploy requires a
separate post-merge production sync task after local validation passes.

## Scope Preserved

QA did not edit content JSON, `starter.json`, matcher, API/runtime, UI, Atlas,
auth, router, registry, Watch Officer, Nav Desk, production config, deploy/FTP
state, secrets, sessions, cookies, CSRF, SMTP, player email, player identity
data, WebStorm DB console, or WebStorm datasource.
