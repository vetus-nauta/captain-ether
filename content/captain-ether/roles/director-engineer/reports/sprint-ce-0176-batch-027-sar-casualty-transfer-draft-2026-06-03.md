# CE-SPRINT-0176 Batch 027 SAR / Casualty-Transfer Draft Gate

Date: 2026-06-03
Owner: Director-Engineer / Content Producer
Scope: Captain Ether M5 Batch 027 isolated draft gate
Status: DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE

## Baseline

```text
local_github_production_starter_items=935
local_github_production_grammar_patterns=516
local_github_production_qa_items=935
local_github_production_dangerous_pairs=216
production_delta_items=0
validator_warn_count=0
production_deploy=false
merge_to_starter=false
```

## Draft Created

```text
batch_file=content/captain-ether/batches/batch-027-sar-casualty-transfer-reinforcement.json
batch_id=batch-027-sar-casualty-transfer-reinforcement
status=draft
items=35
grammar_patterns=35
dangerous_minimal_pairs=11
```

Mix:

```text
word=1
short_expression=8
phrase=26
beginner=3
intermediate=13
advanced=19
primary_branches=distress_mayday,urgency_panpan,emergency_medical_response
modules=casualty_transfer,helicopter_winching,on-scene_coordinator,relay_update
```

## Validation

```text
command=$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-027-sar-casualty-transfer-reinforcement.json --runs=40
result=PASS
warnings=0
batch_target_text=35
batch_should_accept=35
batch_should_reject=105
batch_danger_must_accept=46
batch_danger_must_reject=92
```

## Collision Checks

```text
id_collisions_with_starter=0
id_collisions_with_qa=0
target_collisions_with_starter=0
pattern_id_collisions_with_starter=0
pattern_text_collisions_with_starter=0
duplicate_batch_ids=0
duplicate_batch_targets=0
duplicate_batch_pattern_ids=0
qa_notes_items=35
```

## Decision

```text
DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE
```

Next gate: CE-0177 Batch 027 Linguist / Engineering Gate.

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, WebStorm datasource, or
foreign database was changed.
