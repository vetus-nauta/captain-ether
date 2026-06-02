# CE-SPRINT-0122 Batch 018 Scenario Chain Draft

Date: 2026-06-02
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether content batch draft only
Status: DRAFTED / READY_FOR_LINGUIST_REVIEW

## Context

Batch 017 was synced to production and local/GitHub/production were aligned before
this sprint. The next roadmap lane selected is M4 scenario chains: making the
corpus feel like connected radio situations without changing runtime item types.

## Draft Output

```text
content/captain-ether/batches/batch-018-scenario-chain-readbacks-basics.json
```

## Draft Shape

```text
batch_id=batch-018-scenario-chain-readbacks-basics
status=drafted
branch=mixed_scenario_chains
items=25
grammar_patterns=23
dangerous_pairs=6
target_text=25
should_accept=47
should_reject=75
danger_must_accept=24
danger_must_reject=24
```

Type count:

```text
phrase=23
short_expression=2
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

## Content Focus

```text
marina arrival and berth readback chain
traffic crossing clarification chain
VTS reporting point and channel-switch readback chain
restricted-visibility/Securite chain
Pan-Pan equipment failure and tow-request chain
Mayday taking-water position and rescue-unit readback chain
```

## Checks

```text
Validator with batch: PASS with known starter WARN (9)
Batch-specific warnings: 0
Draft item id collisions with starter: none
Draft target_text collisions with starter: none
Draft grammar_pattern collisions with starter: none
Targeted matcher: PASS draft_batch018_targeted cases=28
API smoke: PASS captain-ether-api-smoke checks=334
Diff whitespace check: PASS
```

## Important Draft Constraints

No new runtime item type was introduced. Scenario-chain material is represented
as normal `phrase` and `short_expression` items with existing branch metadata,
so current matcher, watch selection, API smoke, and future merge mechanics remain
unchanged.

## Linguist Review Focus

Sea Speak Linguist must verify these boundaries before engineering gate:

```text
Marina Alpha / Bravo / Port Control
approaching / departing / alongside
berth Bravo two / Bravo three
starboard side to / port side to
read back / correction
crossing / overtaking
starboard bow / port bow / starboard quarter
alter course / maintain course
pass astern / pass ahead
report / request passing point
VTS instruction / advice
channel one two / channel one six
fog / smoke
reduce speed / increase speed
sound signal every two minutes / one minute
Securite / Pan-Pan
visibility less than one mile / more than one mile
area Charlie / Alpha
Pan-Pan / Mayday
engine failed / steering failed
buoy seven / eight
tow / pilot / cancel tow
steering limited / failed
Mayday taking water / fire
five miles east / west of Alpha
four persons on board / overboard / abandoning ship
emergency pump / emergency tow / bilge status
rescue unit / marina
position received / position corrected / position unknown
```

## Scope Preserved

No playable `starter.json`, accept/reject registry, matcher, API/runtime,
UI/assets, Atlas, auth, router, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, player identity data, WebStorm DB
console, or WebStorm datasource was changed.

## Next Gate

Open `TASK-CE-0123 Batch 018 Sea Speak Linguist Review`.
