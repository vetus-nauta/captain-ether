# TASK-CE-0178 Batch 027 Acceptance QA / Merge Decision

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether Batch 027 isolated draft acceptance QA
Status: DONE / PASS_FOR_STAGED_MERGE

## Activation Condition

Start after:

```text
TASK-CE-0177 Batch 027 Linguist / Engineering Gate: PASS / READY_FOR_ACCEPTANCE_QA
```

## Input

```text
content/captain-ether/batches/batch-027-sar-casualty-transfer-reinforcement.json
content/captain-ether/roles/content-producer/reports/batch-027-sar-casualty-transfer-reinforcement-card-2026-06-03.md
content/captain-ether/roles/sea-speak-linguist/reports/batch-027-sar-casualty-transfer-reinforcement-risk-review-2026-06-03.md
```

## Required QA Checks

```text
batch validator PASS with warnings=0
full validator PASS with warnings=0
collision/id/pattern scan remains 0
SAR/casualty-transfer targeted sample checks pass
production read-only parity remains 935 and no deploy occurs
no merge into starter.json during this task
```

## Acceptance Focus

```text
casualty counts and casualty numbers
casualty / crew / survivor / body identity
medical evacuation / medical advice / crew evacuation
casualty transfer / treatment / rescue unit takeover
helicopter winching / rescue boat / hoist / basket / stretcher
on-scene coordinator assignment / relief / report interval
relay update content, ETA, final/completed/cancelled status
bleeding / consciousness / do-not-move timing
```

Expected output:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0178-batch-027-acceptance-qa-merge-decision-2026-06-03.md
next task for staged merge preparation if QA passes
```

## Result

```text
PASS_FOR_STAGED_MERGE
batch_validator=PASS
batch_validator_runs=80
full_validator=PASS
full_validator_runs=80
api_smoke=PASS captain-ether-api-smoke checks=334
collision_scan=PASS
sample_missing_targets=0
production_read_only_counts=PASS
production_delta_items=0
starter_merge=false
production_deploy=false
next_task=CE-0179 Batch 027 Staged Merge Preparation
```
