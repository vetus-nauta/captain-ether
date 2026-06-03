# CE-SPRINT-0169 Batch 026 Weather-Routing / Navigation-Warning Draft Gate

Date: 2026-06-03
Owner: Director-Engineer / Content Producer
Scope: Captain Ether M5 Batch 026 isolated draft gate
Status: DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE

## Baseline

```text
local_github_production_starter_items=900
local_github_production_grammar_patterns=481
local_github_production_qa_items=900
local_github_production_dangerous_pairs=208
production_delta_items=0
validator_warn_count=0
production_deploy=false
merge_to_starter=false
```

## Draft Created

```text
batch_file=content/captain-ether/batches/batch-026-weather-routing-navigation-warning-reinforcement.json
batch_id=batch-026-weather-routing-navigation-warning-reinforcement
status=draft
items=35
grammar_patterns=35
dangerous_minimal_pairs=8
```

Mix:

```text
word=2
short_expression=10
phrase=23
beginner=5
intermediate=17
advanced=13
primary_branches=safety_securite,navigation_reports
modules=route_warning,wind_shift,swell_visibility,waypoint_avoidance
```

## Validation

```text
command=$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-026-weather-routing-navigation-warning-reinforcement.json --runs=40
result=PASS
warnings=0
batch_target_text=35
batch_should_accept=35
batch_should_reject=105
batch_danger_must_accept=35
batch_danger_must_reject=70
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
qa_notes_items=35
```

## Decision

```text
DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE
```

Next gate: CE-0170 Batch 026 Linguist / Engineering Gate.

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, WebStorm datasource, or
foreign database was changed.
