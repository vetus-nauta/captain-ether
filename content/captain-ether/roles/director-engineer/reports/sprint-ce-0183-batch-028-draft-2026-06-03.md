# CE-SPRINT-0183 Batch 028 Draft Gate

Date: 2026-06-03
Owner: Director-Engineer / Content Producer
Scope: Captain Ether M5 Batch 028 isolated draft gate
Status: DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE

## Baseline

```text
local_github_production_starter_items=970
local_github_production_grammar_patterns=551
local_github_production_qa_items=970
local_github_production_dangerous_pairs=227
production_delta_items=0
validator_warn_count=0
production_deploy=false
merge_to_starter=false
```

## Draft Created

```text
batch_file=content/captain-ether/batches/batch-028-exam-style-minimal-pair-reinforcement.json
batch_id=batch-028-exam-style-minimal-pair-reinforcement
status=draft
items=30
grammar_patterns=30
dangerous_minimal_pairs=16
```

Mix:

```text
word=0
short_expression=12
phrase=18
beginner=9
intermediate=10
advanced=11
primary_branches=review_minimal_pairs,core_radio,traffic_collision
modules=numbers_channels_headings,port_starboard,roger_affirmative,say_again_repeat,over_out,traffic_contrasts
```

## Validation

```text
command=$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-028-exam-style-minimal-pair-reinforcement.json --runs=100
result=PASS
warnings=0
batch_target_text=30
batch_should_accept=30
batch_should_reject=90
batch_danger_must_accept=27
batch_danger_must_reject=81
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
accepted_answer_duplicates=0
qa_notes_items=30
```

## Draft Corrections Applied

```text
initial_level_mix=beginner 9 / intermediate 11 / advanced 10
final_level_mix=beginner 9 / intermediate 10 / advanced 11
initial_target_collisions_with_starter=8
final_target_collisions_with_starter=0
initial_pattern_text_collisions_with_starter=1
final_pattern_text_collisions_with_starter=0
dangerous_pair_own_accepted_rejects_fixed=true
pattern_id_prefix_fixed=b028
```

## Decision

```text
DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE
```

Next gate: CE-0184 Batch 028 Linguist / Engineering Gate.

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, WebStorm datasource, or
foreign database was changed.
