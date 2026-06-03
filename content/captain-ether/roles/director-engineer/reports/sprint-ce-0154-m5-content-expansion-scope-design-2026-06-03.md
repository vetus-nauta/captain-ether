# CE-SPRINT-0154 M5 Content Expansion Scope Design

Date: 2026-06-03
Owner: Director-Engineer / Content Producer / Sea Speak Linguist
Scope: Captain Ether M5 planning only
Status: DONE / M5_SCOPE_LOCKED

## Baseline

```text
git_status=clean
github_sync=0 0
production=https://game.brkovic.ltd/games/captain-ether
starter_items=830
grammar_patterns=411
qa_items=830
dangerous_pairs=193
validator_warn_count=0
production_runtime_smoke=PASS / RUNTIME_UX_SMOKE_CLEAN
production_deploy=false
```

## Current Distribution

```text
levels:
  beginner=235
  intermediate=384
  advanced=211

types:
  word=180
  short_expression=263
  phrase=387

notable branch counts:
  urgency_panpan=84
  distress_mayday=80
  marina_harbour=80
  traffic_collision=79
  safety_securite=69
  vts_port_control=53
  core_radio=50
  navigation_reports=50
  onboard_operations=50
  review_minimal_pairs=15
```

## Design Decision

M5 should be a `+170` expansion wave from `830` to `1000` playable items.

The old roadmap target for words is already reached (`word=180`), so M5 must not
be a generic vocabulary dump. It should be phrase/scenario-heavy and should
increase intermediate/advanced operational coverage while keeping QA small enough
to debug after each batch.

## M5 Batch Plan

```text
Batch 024: engine-room and damage-control communications
  items=35
  target_levels=beginner 5 / intermediate 15 / advanced 15
  target_types=word 5 / short_expression 8 / phrase 22
  primary_branches=onboard_operations, urgency_panpan, distress_mayday
  modules=machinery_status, flooding_control, fire_response, damage_report_readback
  dangerous_pairs=8-10
  qa_focus=engine/steering/flooding/fire must not collapse into each other

Batch 025: port-services and clearance communications
  items=35
  target_levels=beginner 8 / intermediate 22 / advanced 5
  target_types=word 2 / short_expression 10 / phrase 23
  primary_branches=marina_harbour, vts_port_control
  modules=clearance_request, port_entry_limits, customs_immigration, pilot_boarding
  dangerous_pairs=6-8
  qa_focus=clearance/pilot/tug/berth/fuel/water/shore-power stay item-specific

Batch 026: weather-routing and navigation-warning reinforcement
  items=35
  target_levels=beginner 5 / intermediate 17 / advanced 13
  target_types=word 2 / short_expression 10 / phrase 23
  primary_branches=safety_securite, navigation_reports
  modules=route_warning, wind_shift, swell_visibility, waypoint_avoidance
  dangerous_pairs=8-10
  qa_focus=warning/advice/instruction and heading/bearing/distance numbers stay strict

Batch 027: SAR coordination and casualty-transfer reinforcement
  items=35
  target_levels=beginner 3 / intermediate 13 / advanced 19
  target_types=word 1 / short_expression 8 / phrase 26
  primary_branches=distress_mayday, urgency_panpan, emergency_medical_response
  modules=casualty_transfer, helicopter_winching, on-scene_coordinator, relay_update
  dangerous_pairs=10-12
  qa_focus=distress/urgency/medical/SAR roles and casualty counts stay precise

Batch 028: exam-style mixed review and minimal-pair reinforcement
  items=30
  target_levels=beginner 9 / intermediate 10 / advanced 11
  target_types=word 0 / short_expression 12 / phrase 18
  primary_branches=review_minimal_pairs, core_radio, traffic_collision
  modules=numbers_channels_headings, over_out, roger_affirmative, port_starboard, say_again_repeat
  dangerous_pairs=15-20
  qa_focus=must-stay-wrong regression coverage, no fuzzy numeric/channel leaks
```

## Expected Post-M5 Count

```text
starter_items=1000
new_items=170
word_delta=10
short_expression_delta=48
phrase_delta=112
beginner_delta=30
intermediate_delta=77
advanced_delta=63
```

Expected type distribution after M5:

```text
word=190
short_expression=311
phrase=499
```

Expected level distribution after M5:

```text
beginner=265
intermediate=461
advanced=274
```

This intentionally favors phrase/scenario-like practice over new standalone
words because word coverage is already mature enough for the first 1000-item
corpus.

## Batch 024 Locked Scope

The next production cycle is Batch 024 only.

```text
file=content/captain-ether/batches/batch-024-engine-room-damage-control-communications.json
items=35
grammar_patterns=25-35
dangerous_pairs=8-10
status=draft_only
merge_authorized=false
production_deploy_authorized=false
```

Required Batch 024 content lanes:

```text
1. machinery status and engine-room reporting
2. steering/propulsion/power failure differentiation
3. flooding and bilge-pump response
4. fire/smoke/overheating response
5. damage-control readback and action confirmation
```

## QA Gate For Each M5 Batch

```text
1. isolated batch JSON validation
2. accepted answer and must-stay-wrong review
3. dangerous minimal-pair scan
4. local matcher regression
5. starter merge decision only after acceptance QA
6. post-merge local QA
7. production sync only as a separate explicit task
```

## Not Authorized

```text
no content draft beyond scope design in CE-0154
no starter merge
no production deploy
no auth/platform changes
no database changes
no WebStorm datasource or console changes
```

## Result

```text
DONE / M5_SCOPE_LOCKED
next_task=CE-0155 Batch 024 Draft Gate
```
