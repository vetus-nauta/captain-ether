# CE-SPRINT-0164 Batch 025 Acceptance QA / Merge Decision

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether Batch 025 draft acceptance QA only
Status: PASS_FOR_STAGED_MERGE

## Reviewed File

```text
content/captain-ether/batches/batch-025-port-services-clearance-communications.json
```

## Baseline

```text
git_status=clean
github_sync=0 0
starter_items=865
grammar_patterns=446
qa_items=865
dangerous_pairs=201
batch_025_status=draft
production_deploy=false
```

## Batch 025 Counts

```text
items=35
word=2
short_expression=10
phrase=23
beginner=8
intermediate=22
advanced=5
grammar_patterns=35
dangerous_minimal_pairs=7
```

## Acceptance QA Checks

```text
jq_batch_json=PASS
all_batch_json_parse=PASS
batch_validator=PASS
validator_runs=100
validator_warnings=0
batch_target_text=35
batch_should_accept=35
batch_should_reject=105
batch_danger_must_accept=33
batch_danger_must_reject=66
target_collisions_with_starter=0
accepted_answer_collisions_with_starter_targets=0
batch_duplicate_targets=0
batch_duplicate_accepted=0
duplicate_item_ids_across_batches=0
duplicate_pattern_ids_across_batches=0
```

All existing starter regression and watch-selection checks stayed green during
batch validation.

## Merge Decision

```text
PASS_FOR_STAGED_MERGE
```

Batch 025 is ready for a separate staged merge-preparation task. This QA task did
not merge the batch into `starter.json` and did not authorize or perform any
production deploy.

Recommended next task:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0165-batch-025-staged-merge-preparation-2026-06-03.md
```

## Staged Merge Guardrails

```text
1. Merge Batch 025 only.
2. Keep production untouched until a later explicit production-sync task.
3. After merge, run full validator and API smoke.
4. If merge raises duplicate accepted-answer warnings, clean before push.
5. Open a separate production-sync decision only after post-merge QA passes.
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, or WebStorm datasource
was changed by CE-0164.
