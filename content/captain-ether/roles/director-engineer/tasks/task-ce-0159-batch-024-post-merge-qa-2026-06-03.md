# TASK-CE-0159 Batch 024 Post-Merge QA

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether local/GitHub post-merge QA only
Status: PLANNED

## Activation Condition

Started after:

```text
TASK-CE-0158 Batch 024 Staged Merge Preparation: MERGED_LOCALLY / PASS
```

## Target

Run post-merge QA for the 865-item local/GitHub baseline before any production
sync decision.

Expected local/GitHub baseline:

```text
starter_items=865
grammar_patterns=446
qa_items=865
dangerous_pairs=201
validator_warn_count=0
```

## Required Checks

```text
full validator with runs >=100
Batch 024 validator after merged status
API smoke
Batch 024 targeted matcher sample
local/prod drift statement
secret scan
diff whitespace check
```

No production deploy is authorized by this task.
