# Batch 024 Engine-Room Damage-Control Communications Risk Review

Date: 2026-06-03
Task: `TASK-CE-0156`
Owner: Sea Speak Linguist / Director-Engineer
Scope: Captain Ether Batch 024 draft review only
Status: PASS / READY_FOR_ACCEPTANCE_QA

## Reviewed File

```text
content/captain-ether/batches/batch-024-engine-room-damage-control-communications.json
```

## Review Summary

```text
items=35
word=5
short_expression=8
phrase=22
beginner=5
intermediate=15
advanced=15
grammar_patterns=35
dangerous_minimal_pairs=8
validator=PASS
validator_warnings=0
target_collisions_with_starter=0
accepted_answer_collisions_with_starter_targets=0
starter_merge=false
production_deploy=false
```

## Corrections Applied During Gate

Three Batch 024 short-expression targets initially duplicated existing playable
starter targets. They were made more specific before acceptance QA.

```text
expr_b024_steering_failure_001:
  old_target=steering failure
  new_target=steering gear failure reported
  reason=avoid collision with existing starter target expr_urgency_steering_failure_002

expr_b024_bilge_pump_running_001:
  old_target=bilge pump running
  new_target=engine-room bilge pump running
  reason=avoid collision with existing starter target expr_repair_pump_running_001

expr_b024_isolate_fuel_supply_001:
  old_target=isolate fuel supply
  new_target=isolate engine-room fuel supply
  reason=avoid collision with existing starter target expr_b020_isolate_fuel_supply_001
```

Associated accepted answers, should-accept examples, should-reject examples,
grammar pattern examples, and dangerous-pair must-accept/must-reject entries were
updated with the same specificity.

## Approved Meaning Boundaries

```text
engine room / bridge / deck / radio room stay separate
bilge pump / fuel pump / fire pump stay separate
steering gear failure / engine failure / radio failure stay separate
fire pump readiness / fuel isolation / bilge pumping stay separate
close/open watertight-door polarity stays strict
compartment two / compartment three stays strict
port side / starboard side stays strict
Pan-Pan / Mayday / Securite markers stay strict
under-control / not-under-control fire status stays strict
five minutes / ten minutes reporting interval stays strict
```

## Matcher Risk Review

The current matcher accepted all target text and should-accept examples, and
rejected all should-reject and dangerous-pair must-reject examples.

No matcher implementation change is requested by this gate.

## Engineering Gate Checks

```text
jq=PASS
batch_validator=PASS
runs=60
batch_target_text=35
batch_should_accept=35
batch_should_reject=105
batch_danger_must_accept=38
batch_danger_must_reject=76
batch_duplicate_targets=0
batch_duplicate_accepted=0
target_collisions_with_starter=0
accepted_answer_collisions_with_starter_targets=0
```

## Result

```text
PASS / READY_FOR_ACCEPTANCE_QA
next_task=CE-0157 Batch 024 Acceptance QA / Merge Decision
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, or WebStorm datasource
was changed.
