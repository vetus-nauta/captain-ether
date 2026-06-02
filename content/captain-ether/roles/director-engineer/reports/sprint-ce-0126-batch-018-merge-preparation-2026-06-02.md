# CE-SPRINT-0126 Batch 018 Merge Preparation

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether Batch 018 local merge only
Status: MERGED LOCALLY / PASS

## Merge Notes

- Added `25` Batch 018 items to playable `starter.json`.
- Added `25` regression entries to `accept-reject-qa-pairs.json`.
- Added `6` dangerous-pair groups.
- Added `23` grammar patterns.
- Marked Batch 018 status as `merged`.
- Did not carry `qa_notes` into playable starter items.

## Final Local State

```text
starter_items=650
grammar_patterns=237
qa_items=650
should_accept=1481
should_reject=1981
dangerous_pairs=152
danger_must_accept=467
danger_must_reject=1053
```

Type count:

```text
word=125
short_expression=208
phrase=317
```

Level count:

```text
beginner=201
intermediate=305
advanced=144
```

Branch count update:

```text
marina_harbour=80
traffic_collision=79
vts_port_control=53
safety_securite=69
urgency_panpan=84
distress_mayday=80
```

## Batch 018 Post-Merge Integrity

```text
Batch status: merged
Batch items present in starter: 25/25
Batch QA items present in registry: 25/25
Batch dangerous pairs present in registry: 6/6
Batch grammar patterns present in starter: 23/23
Batch item ids unique in starter: PASS
qa_notes_in_starter=0
```

The wider starter corpus still has historical duplicate accepted-answer warnings
from earlier content. Batch 018 did not introduce duplicate ids, missing grammar
references, or playable `qa_notes` leakage.

## Checks

```text
Validator: PASS with known starter WARN (9)
API smoke: PASS captain-ether-api-smoke checks=334
JSON parse: PASS node
PHP syntax guard: PASS
JS syntax guard: PASS
Post-merge targeted matcher: PASS post_merge_batch018_targeted cases=50
Secret scan on changed files: PASS
Diff whitespace check: PASS
```

## Preserved Boundaries

```text
Marina Alpha, sailing yacht Aurora approaching from south. -> accept
Port Control sailing yacht Aurora approaching from south -> reject
Request visitor berth for one night. -> accept
Request fuel berth for one night -> reject
Proceed to berth Bravo two, starboard side to. -> accept
Proceed to berth Bravo two port side to -> reject
Reading back berth Bravo two, starboard side to. -> accept
Read back berth Bravo two starboard side to -> reject
Aurora alongside berth Bravo two. -> accept
Aurora approaching berth Bravo two -> reject
Crossing vessel on starboard bow. -> accept
Crossing vessel on port bow -> reject
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
Need emergency pump -> accept
Require emergency tow -> reject
Rescue unit, reading back five miles east of Alpha. -> accept
Rescue unit reads back five miles east of Alpha -> reject
position received -> accept
position corrected -> reject
correction area Charlie -> accept
read back area Charlie -> reject
```

## Scope Preserved

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.

## Next Gate

Open `TASK-CE-0127 Batch 018 Post-Merge QA` before production deploy.
