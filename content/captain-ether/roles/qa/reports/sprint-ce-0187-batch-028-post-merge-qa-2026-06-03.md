# CE-SPRINT-0187 Batch 028 Post-Merge QA

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether Batch 028 post-merge QA, local/GitHub only
Status: PASS / READY_FOR_PRODUCTION_SYNC_DECISION

## Baseline

```text
batch_028_status=merged
local_github_starter_items=1000
local_github_grammar_patterns=581
local_github_qa_items=1000
local_github_dangerous_pairs=243
production_starter_items_expected=970
production_grammar_patterns_expected=551
production_qa_items_expected=970
production_dangerous_pairs_expected=227
production_delta_items_expected=-30
production_deploy=false
```

## Validator Gates

```text
full_validator=PASS
full_validator_runs=140
full_validator_warnings=0
batch_028_validator_after_merged=PASS
batch_validator_runs=100
batch_validator_warnings=0
api_smoke=PASS captain-ether-api-smoke checks=334
```

## Post-Merge Integrity

```text
batch28_items_present_in_starter=30/30
batch28_items_present_in_qa=30/30
batch28_patterns_present_in_starter=30/30
batch28_dangerous_pairs_present_in_qa=16/16
qa_notes_in_starter=0
duplicate_batch_targets=0
duplicate_item_ids=0
duplicate_qa_ids=0
duplicate_pattern_ids=0
duplicate_pair_name_groups_global=8
duplicate_pair_name_groups_touching_batch028=0
collision_check=PASS
```

The global QA registry still contains 8 historical duplicate dangerous-pair
display names. None touch Batch 028 and no Batch 028 collision or target
duplicate was found.

## Production Read-Only Checks

```text
production_route=HTTP 200
production_route_bytes=2443
anonymous_start_watch=HTTP 401 Login required
production_deploy=false
production_delta_items_expected=-30
```

Production was not deployed by this task. The expected 30-item drift is
intentional after the local/GitHub staged merge and should be resolved only by a
separate controlled production sync decision task.

## Decision

```text
PASS / READY_FOR_PRODUCTION_SYNC_DECISION
```

Batch 028 local/GitHub 1000-item baseline is ready for a controlled production
sync decision.

## Scope Preserved

No production deploy, matcher, API/runtime, UI/assets, Atlas, auth, router,
registry, Watch Officer, Nav Desk, production config, secrets, sessions, cookies,
CSRF, SMTP, player email, player identity data, WebStorm DB console, WebStorm
datasource, or foreign database was changed by CE-0187.
