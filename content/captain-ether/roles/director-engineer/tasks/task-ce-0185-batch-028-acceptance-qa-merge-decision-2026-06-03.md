# TASK-CE-0185 Batch 028 Acceptance QA / Merge Decision

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether Batch 028 isolated draft acceptance QA
Status: DONE / PASS_FOR_STAGED_MERGE

## Activation Condition

Start after:

```text
TASK-CE-0184 Batch 028 Linguist / Engineering Gate: PASS / READY_FOR_ACCEPTANCE_QA
```

## Input

```text
content/captain-ether/batches/batch-028-exam-style-minimal-pair-reinforcement.json
content/captain-ether/roles/content-producer/reports/batch-028-exam-style-minimal-pair-reinforcement-card-2026-06-03.md
content/captain-ether/roles/sea-speak-linguist/reports/batch-028-exam-style-minimal-pair-reinforcement-risk-review-2026-06-03.md
```

## Required QA Checks

```text
batch validator PASS with warnings=0
full validator PASS with warnings=0
collision/id/pattern scan remains 0
minimal-pair targeted sample checks pass
production read-only parity remains 970 and no deploy occurs
no merge into starter.json during this task
```

## Acceptance Focus

```text
channel numbers and heading/course numbers
port/starboard and bow/quarter/side contrasts
roger/affirmative/negative
say again/read back/repeat
over/out endings
traffic crossing / passing astern / clear-of-traffic status
```

Expected output:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0185-batch-028-acceptance-qa-merge-decision-2026-06-03.md
next task for staged merge preparation if QA passes
```

## Result

```text
PASS_FOR_STAGED_MERGE
batch_validator=PASS
batch_validator_runs=120
full_validator=PASS
full_validator_runs=120
api_smoke=PASS captain-ether-api-smoke checks=334
collision_scan=PASS
sample_missing_targets=0
production_read_only_counts=PASS
production_delta_items=0
starter_merge=false
production_deploy=false
next_task=CE-0186 Batch 028 Staged Merge Preparation
```
