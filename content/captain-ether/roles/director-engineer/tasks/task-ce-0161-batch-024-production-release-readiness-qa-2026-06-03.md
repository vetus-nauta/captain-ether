# TASK-CE-0161 Batch 024 Production Release Readiness QA

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether 865-item production baseline QA
Status: PLANNED

## Activation Condition

Started after:

```text
TASK-CE-0160 Batch 024 Production Sync Decision: PRODUCTION_SYNCED
```

## Target

Run final release-readiness QA for the current 865-item production baseline.

Expected local/GitHub/production baseline:

```text
starter_items=865
grammar_patterns=446
qa_items=865
dangerous_pairs=201
validator_warn_count=0
```

## Required Checks

```text
git clean and GitHub sync
full local validator
API smoke
production route/static/API smoke
FTP content hash/count parity
Atlas ping
runtime privacy check for anonymous protected endpoints
release-readiness decision
```

No production deploy is authorized by this QA task.
