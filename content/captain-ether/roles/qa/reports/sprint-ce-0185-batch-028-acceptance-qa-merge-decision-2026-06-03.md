# CE-SPRINT-0185 Batch 028 Acceptance QA / Merge Decision

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether Batch 028 draft acceptance QA only
Status: PASS_FOR_STAGED_MERGE

## Reviewed File

```text
content/captain-ether/batches/batch-028-exam-style-minimal-pair-reinforcement.json
```

## Baseline

```text
git_status=clean
github_sync=0 0
starter_items=970
grammar_patterns=551
qa_items=970
dangerous_pairs=227
production_starter_items=970
production_grammar_patterns=551
production_qa_items=970
production_dangerous_pairs=227
production_delta_items=0
batch_028_status=draft_linguist_engineering_passed
production_deploy=false
starter_merge=false
```

## Batch 028 Counts

```text
items=30
word=0
short_expression=12
phrase=18
beginner=9
intermediate=10
advanced=11
grammar_patterns=30
dangerous_minimal_pairs=16
```

## Validator Gates

```text
batch_validator=PASS
batch_validator_runs=120
batch_validator_warnings=0
batch_target_text=30
batch_should_accept=30
batch_should_reject=90
batch_danger_must_accept=27
batch_danger_must_reject=81
full_validator=PASS
full_validator_runs=120
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
dangerous_pair_name_collisions_with_qa=0
duplicate_batch_ids=0
duplicate_batch_targets=0
duplicate_batch_pattern_ids=0
duplicate_batch_pair_names=0
accepted_answer_duplicates=0
qa_notes_items=30
```

## Targeted Acceptance Samples

```text
channel_samples=PASS
heading_course_samples=PASS
port_starboard_side_samples=PASS
roger_affirmative_samples=PASS
say_again_read_back_repeat_samples=PASS
over_out_samples=PASS
traffic_crossing_samples=PASS
sample_categories=7
sample_required=30
sample_missing_targets=0
```

Covered critical examples:

```text
working channel one six
channel one three
Change to channel one two.
Call on channel one four.
heading zero nine zero
heading two seven zero
Alter course to zero nine zero.
Alter course to one eight zero.
port side
starboard side
Vessel on port bow.
Vessel on starboard quarter.
Risk of collision on port side.
Risk of collision on starboard side.
roger received
affirmative confirmed
Roger, stand by on channel one six.
Affirmative, I will alter course.
say again very slowly
read back now
Say again your last position.
Read back my course.
Do not repeat the distress call.
over to you
message complete out
Message received, over.
Message complete, out.
Do not cross ahead.
Pass astern of my vessel.
Report when clear of traffic.
```

## Safety / Scope Checks

```text
production_read_only_counts=PASS
production_ftp_readback=PASS
production_delta_items=0
starter_merge=false
production_deploy=false
```

## Merge Decision

```text
PASS_FOR_STAGED_MERGE
```

Batch 028 is ready for a separate staged merge preparation task. This QA task did
not merge the batch into `starter.json` and did not authorize or perform any
production deploy.

Recommended next task:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0186-batch-028-staged-merge-preparation-2026-06-03.md
```

## Staged Merge Guardrails

```text
1. Merge Batch 028 only.
2. Keep production untouched until a later explicit production-sync task.
3. After merge, run full validator and API smoke.
4. Preserve minimal-pair dangerous boundaries exactly.
5. Open a separate production-sync decision only after post-merge QA passes.
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, WebStorm datasource, or
foreign database was changed by CE-0185.
