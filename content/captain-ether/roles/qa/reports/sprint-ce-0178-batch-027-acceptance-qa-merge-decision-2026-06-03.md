# CE-SPRINT-0178 Batch 027 Acceptance QA / Merge Decision

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether Batch 027 draft acceptance QA only
Status: PASS_FOR_STAGED_MERGE

## Reviewed File

```text
content/captain-ether/batches/batch-027-sar-casualty-transfer-reinforcement.json
```

## Baseline

```text
git_status=clean
github_sync=0 0
starter_items=935
grammar_patterns=516
qa_items=935
dangerous_pairs=216
production_starter_items=935
production_grammar_patterns=516
production_qa_items=935
production_dangerous_pairs=216
production_delta_items=0
batch_027_status=draft_linguist_engineering_passed
production_deploy=false
starter_merge=false
```

## Batch 027 Counts

```text
items=35
word=1
short_expression=8
phrase=26
beginner=3
intermediate=13
advanced=19
grammar_patterns=35
dangerous_minimal_pairs=11
```

## Validator Gates

```text
batch_validator=PASS
batch_validator_runs=80
batch_validator_warnings=0
batch_target_text=35
batch_should_accept=35
batch_should_reject=105
batch_danger_must_accept=46
batch_danger_must_reject=92
full_validator=PASS
full_validator_runs=80
full_validator_warnings=0
api_smoke=PASS captain-ether-api-smoke checks=334
```

## Engineering QA

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

## Targeted Acceptance Samples

```text
casualty_count_samples=PASS
identity_samples=PASS
evacuation_transfer_samples=PASS
helicopter_rescue_samples=PASS
osc_samples=PASS
relay_samples=PASS
medical_samples=PASS
sample_categories=7
sample_required=31
sample_missing_targets=0
```

Covered critical examples:

```text
casualty count three
Two casualties on board.
Three casualties require transfer.
Survivor in water.
Casualty one is unconscious.
Casualty two is conscious.
request medical evacuation
prepare stretcher transfer
Medical team ready for transfer.
Transfer casualty to rescue boat.
helicopter winching
winchman ready
Prepare winch transfer of stretcher.
Stretcher lowered to deck.
Basket lift started.
Casualty packaged for hoist.
on-scene coordinator
on-scene coordinator assigned
On-scene coordinator assumes coordination.
On-scene coordinator relieved by rescue unit.
Report to on-scene coordinator every ten minutes.
relay casualty update
Relay update: casualty count three.
Relay update: helicopter ETA one five minutes.
Relay update: transfer completed.
Final relay: casualty ashore.
Casualty has head injury.
Casualty bleeding controlled.
Do not move casualty before medic arrives.
```

## Safety / Scope Checks

```text
production_read_only_counts=PASS
production_ftp_readback=PASS
production_route_probe=HTTP 200
production_delta_items=0
starter_merge=false
production_deploy=false
```

## Merge Decision

```text
PASS_FOR_STAGED_MERGE
```

Batch 027 is ready for a separate staged merge preparation task. This QA task did
not merge the batch into `starter.json` and did not authorize or perform any
production deploy.

Recommended next task:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0179-batch-027-staged-merge-preparation-2026-06-03.md
```

## Staged Merge Guardrails

```text
1. Merge Batch 027 only.
2. Keep production untouched until a later explicit production-sync task.
3. After merge, run full validator and API smoke.
4. Preserve SAR/casualty-transfer dangerous-pair boundaries exactly.
5. Open a separate production-sync decision only after post-merge QA passes.
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, WebStorm datasource, or
foreign database was changed by CE-0178.
