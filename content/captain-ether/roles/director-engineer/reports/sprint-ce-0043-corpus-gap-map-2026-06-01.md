## CE-SPRINT-0043 Corpus Gap Map

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: PASS

### Sprint Purpose

Start the next large Captain Ether program:

```text
CE-BETA-1.1-M3-500-CORPUS
```

The goal is to move from the current `255` playable items to the M3 milestone:
`500` playable Sea Speak items without losing matcher trust.

This sprint is report-only. It does not edit playable content, matcher,
runtime/API, Atlas, router, registry, production config, deploy state, Watch
Officer, Nav Desk, auth, or secrets.

### Source Documents

- `content/captain-ether/content-growth-roadmap-1000.md`
- `content/captain-ether/branch-taxonomy.md`
- `content/captain-ether/answer-policy.md`
- `content/captain-ether/roles/office-manifest.md`
- `content/captain-ether/roles/director-engineer/handoff.md`
- `content/captain-ether/starter.json`
- `content/captain-ether/batches/*.json`

### Current Playable Corpus

```text
Playable items: 255
Grammar patterns: 112
Scenarios: 2
Regression QA item entries: 255
Should-accept examples: 711
Should-reject examples: 783
Dangerous minimal-pair groups: 57
```

By type:

```text
phrase: 136
short_expression: 69
word: 50
```

By level:

```text
beginner: 88
intermediate: 118
advanced: 49
```

By branch:

```text
(missing legacy starter): 40
core_radio: 50
marina_harbour: 50
navigation_reports: 50
safety_securite: 40
urgency_panpan: 25
traffic_collision: 0
distress_mayday: 0
onboard_operations: 0
vts_port_control: 0
review_minimal_pairs: 0
```

### Batch State

```text
Batch 001 core_radio: 50 merged
Batch 002 marina_harbour: 50 merged
Batch 003 navigation_reports: 50 merged
Batch 004 safety_securite: 40 merged
Batch 005 urgency_panpan: 25 merged
Batch 006 English-native pilot: 35 draft_internal, not public starter
```

### Gap Finding

M2 is numerically complete because the playable corpus is already above `250`
items. M3 is not complete because the branch map is incomplete.

The biggest product gap is not another adaptive mechanic. It is corpus breadth:
the game needs enough branch coverage that short watches feel like real maritime
training rather than repeated beta drills.

The empty branches are the next priority:

```text
traffic_collision
vts_port_control
onboard_operations
distress_mayday
review_minimal_pairs
```

The scenario system is also underbuilt: only `2` scenarios exist, while the
roadmap target expects scenario turns to become a meaningful part of the first
`1000` items.

### M3 Target Shape

Target playable corpus after M3 integration:

```text
Current playable: 255
New public items target: 240-260
M3 playable target: approximately 500
```

Recommended M3 additions:

```text
Batch 007 traffic_collision: 50 items
Batch 008 vts_port_control: 50 items
Batch 009 onboard_operations: 50 items
Batch 010 distress_mayday: 25 items
Batch 011 review_minimal_pairs: 15-25 items
Batch 012 scenario_turns: 50 items
```

This gives `240-250` new items and brings the corpus to about `495-505` items.

### Sprint Chain

#### CE-SPRINT-0044 Batch 007 Traffic / Collision

Goal: create the first playable collision-avoidance branch batch.

Target file:

```text
content/captain-ether/batches/batch-007-traffic-collision-basics.json
```

Target count: `50` items.

Required modules:

```text
passing_arrangements
overtaking_crossing
course_speed_action
risk_of_collision
cpa_tcpa
```

Risk focus:

```text
port/starboard
ahead/astern
alter course/change channel
reduce speed/stop engine
risk of collision/collision occurred
```

#### CE-SPRINT-0045 Batch 008 VTS / Port Control

Goal: add authority/traffic-control communication without merging it into
routine marina language.

Target file:

```text
content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

Target count: `50` items.

Required modules:

```text
reporting_points
vts_instructions
traffic_information
pilot_request
port_entry_departure
tug_assistance
```

Risk focus:

```text
request/report
instruction/advice/information
pilot/tug/VTS/port control station identity
channel/time/position exactness
```

#### CE-SPRINT-0046 Batch 009 Onboard Operations

Goal: add bridge-team and onboard operational language while keeping it separate
from radio-to-shore Sea Speak.

Target file:

```text
content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

Target count: `50` items.

Required modules:

```text
watch_handover
helm_orders
anchor_handling
mooring_stations
safety_checks
emergency_actions_aboard
```

Risk focus:

```text
helm order/action completed
anchor/moor/berth
bow/stern/port/starboard station
stand by/standing by
```

#### CE-SPRINT-0047 Batch 010 Distress / Mayday

Goal: add a small, strict distress branch without weakening emergency signal
matching.

Target file:

```text
content/captain-ether/batches/batch-010-distress-mayday-basics.json
```

Target count: `25` items.

Required modules:

```text
distress_signal
fire_flooding_grounding
collision_distress
man_overboard
abandon_ship
sar_relay
```

Risk focus:

```text
Mayday/Pan-Pan/Securite
distress/urgency/safety
fire/smoke/engine failure
flooding/taking water/sinking
Mayday relay/Mayday
```

#### CE-SPRINT-0048 Batch 011 Review Minimal Pairs

Goal: harden the checker and training loop around high-risk contrasts.

Target file:

```text
content/captain-ether/batches/batch-011-review-minimal-pairs.json
```

Target count: `15-25` items.

Required pairs:

```text
port/starboard
stern/astern
over/out
roger/affirmative
channel 72/channel 71
090/90
1400/1500
Securite/security
Mayday/Pan-Pan/Securite
```

Risk focus:

```text
These items must add should_reject cases before playable merge.
```

#### CE-SPRINT-0049 Batch 012 Scenario Turns

Goal: add enough scenario-turn material that the corpus starts to feel like
radio situations, not only isolated flashcards.

Target file:

```text
content/captain-ether/batches/batch-012-scenario-turns-m3.json
```

Target count: `50` items.

Required scenario families:

```text
marina_arrival_readback
traffic_crossing_clarification
vts_reporting_point
restricted_visibility_warning
panpan_equipment_failure
mayday_distress_position
```

Risk focus:

```text
Every scenario turn must preserve branch/module ownership and must not require
free-form dialogue matching before the matcher has a contract for it.
```

#### CE-SPRINT-0050 M3 Integration Gate

Goal: merge approved batches into playable content and verify the whole training
loop.

Required checks:

```text
content/captain-ether/tools/validate-captain-ether.php
content/captain-ether/tools/smoke-start-watch-api.php
node --check public/assets/app.js
PHP lint for changed Captain Ether API/tools
JSON parse for starter and batch files
```

Acceptance:

```text
Playable items near 500
branch watches still short
progressive order preserved
matcher regression expanded
dangerous pairs protected
Lost Oars still resolves by item
adaptive pacing still works
answer log privacy unchanged
```

Production deploy is not included in this sprint. It requires a separate
Game Director deployment task and QA smoke gate.

### Next Immediate Task

Open `CE-SPRINT-0044 Batch 007 Traffic / Collision`.

Recommended first task:

```text
TASK-CE-0044
Owner: Content Producer
Mode: create assigned batch draft only
Allowed file: content/captain-ether/batches/batch-007-traffic-collision-basics.json
Forbidden: starter.json, matcher, API/runtime, UI, Atlas, auth, router, registry,
Watch Officer, Nav Desk, production config, deploy/FTP, secrets.
Next gate: Sea Speak Linguist risk review.
```

### Checks Performed

- `git status --short --branch`: clean before sprint work.
- `git rev-list --left-right --count HEAD...origin/main`: `0 0` before sprint work.
- Node corpus count over `content/captain-ether/starter.json`: PASS.
- Node batch count over `content/captain-ether/batches/*.json`: PASS.

### Localization Impact

N/A for this report-only sprint. Future batch content must state learner source
language and Sea Speak target language explicitly. No UI copy was introduced.

### Scope Preserved

No playable content, matcher, API/runtime, Atlas, router, registry, production
config, deploy/FTP state, Watch Officer, Nav Desk, auth, secrets, sessions,
cookies, CSRF, SMTP, player email, or player identity data were changed.

### Director Decision

Proceed to `CE-SPRINT-0044 Batch 007 Traffic / Collision`.
