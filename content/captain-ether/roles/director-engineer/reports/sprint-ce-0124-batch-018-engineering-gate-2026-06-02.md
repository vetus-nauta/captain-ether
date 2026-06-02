# CE-SPRINT-0124 Batch 018 Engineering Gate

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether Batch 018 engineering gate only
Status: PASS FOR QA ACCEPTANCE

## Batch State

```text
batch_id=batch-018-scenario-chain-readbacks-basics
status=linguist_reviewed
items=25
grammar_patterns=23
dangerous_pairs=6
target_text=25
should_accept=46
should_reject=79
danger_must_accept=24
danger_must_reject=28
```

Type count:

```text
phrase=23
short_expression=2
```

Level count:

```text
intermediate=9
advanced=16
```

Branch count:

```text
marina_harbour=5
traffic_collision=4
vts_port_control=3
safety_securite=4
urgency_panpan=4
distress_mayday=5
```

Module count:

```text
marina_arrival_readback=5
traffic_crossing_clarification=4
vts_reporting_point_chain=3
restricted_visibility_scenario=4
panpan_equipment_failure_scenario=4
mayday_position_readback_scenario=5
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
Targeted matcher: PASS engineering_batch018_targeted cases=50
API smoke: PASS captain-ether-api-smoke checks=334
PHP syntax guard: PASS
JS syntax guard: PASS
Secret scan on checked files: PASS
Diff whitespace check: PASS
```

## Engineering Decision

Batch 018 passes engineering gate and may move to QA acceptance.

This does not approve merge into `starter.json` and does not approve production
deploy. Merge requires QA acceptance first.

## QA Focus For Next Sprint

QA must explicitly verify these high-risk boundaries:

```text
Marina Alpha, sailing yacht Aurora approaching from south. -> accept
Marina Bravo sailing yacht Aurora approaching from south -> reject
Request visitor berth for one night. -> accept
Request fuel berth for one night -> reject
Proceed to berth Bravo two, starboard side to. -> accept
Proceed to berth Bravo two port side to -> reject
Reading back berth Bravo two, starboard side to. -> accept
Read back berth Bravo two starboard side to -> reject
Aurora alongside berth Bravo two. -> accept
Aurora approaching berth Bravo two -> reject
Crossing vessel on starboard bow. -> accept
Overtaking vessel on starboard bow -> reject
Request crossing vessel intentions. -> accept
Report crossing vessel intentions -> reject
Altering course to starboard to pass astern. -> accept
Altering course to starboard to pass ahead -> reject
Confirm clear, passing astern. -> accept
Confirm not clear passing astern -> reject
Reporting passing point Delta. -> accept
Report passing point Delta -> reject
VTS, switch to channel one two. -> accept
VTS instructs switch to channel one two -> reject
Read back, switch to channel one two. -> accept
Read back switch to channel one six -> reject
Fog bank ahead, reducing speed. -> accept
Fog bank ahead increasing speed -> reject
Sound signal every two minutes. -> accept
Sound signal every one minute -> reject
Sécurité visibility less than one mile in area Charlie -> accept
Pan Pan visibility less than one mile in area Charlie -> reject
Pan-Pan, engine failed, position near buoy seven. -> accept
Mayday engine failed position near buoy seven -> reject
Request tow to harbour. -> accept
Cancel tow to harbour -> reject
Steering limited, keeping starboard side of fairway. -> accept
Steering limited keeping port side of fairway -> reject
Read back Pan-Pan, request tow to harbour. -> accept
Read back Pan Pan cancel tow to harbour -> reject
Mayday, taking water, position five miles east of Alpha. -> accept
Pan Pan taking water position five miles east of Alpha -> reject
Four persons on board. -> accept
Four persons overboard -> reject
Require emergency pump. -> accept
Require emergency tow -> reject
Rescue unit, reading back five miles east of Alpha. -> accept
Rescue unit reads back five miles east of Alpha -> reject
position received -> accept
position corrected -> reject
correction area Charlie -> accept
read back area Charlie -> reject
```

## Scope Preserved

No playable `starter.json`, accept/reject registry, matcher, API/runtime,
UI/assets, Atlas, auth, router, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, player identity data, WebStorm DB
console, or WebStorm datasource was changed.
