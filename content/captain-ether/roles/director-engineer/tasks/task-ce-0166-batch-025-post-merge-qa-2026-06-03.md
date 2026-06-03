# TASK-CE-0166 Batch 025 Post-Merge QA

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether local/GitHub post-merge QA only
Status: PLANNED

## Activation Condition

Started after:

```text
TASK-CE-0165 Batch 025 Staged Merge Preparation: MERGED_LOCALLY / PASS
```

## Target

Run post-merge QA for the 900-item local/GitHub baseline before any production
sync decision.

Expected local/GitHub baseline:

```text
starter_items=900
grammar_patterns=481
qa_items=900
dangerous_pairs=208
validator_warn_count=0
```

## Required Checks

```text
full validator with runs >=100
Batch 025 validator after merged status
API smoke
Batch 025 targeted matcher sample
local/prod drift statement
secret scan
diff whitespace check
```

No production deploy is authorized by this task.
