# TASK-CE-0175 Batch 026 Production Release Readiness QA

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether 935-item production baseline QA
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0174 Batch 026 Production Sync Decision: CLOSED / PASS / PRODUCTION_SYNCED
```

## Target

Run release-readiness QA for the current 935-item production baseline.

Expected baseline:

```text
local_github_production_starter_items=935
local_github_production_grammar_patterns=516
local_github_production_qa_items=935
local_github_production_dangerous_pairs=216
production_delta_items=0
validator_warn_count=0
```

## Required Checks

```text
git status clean
github_sync=0 0
full validator with runs >=100
API smoke
FTP hash/count parity
production route/assets/API smoke
Atlas ping
public payload privacy scan
release-readiness decision
```

No production deploy is authorized by this task.
