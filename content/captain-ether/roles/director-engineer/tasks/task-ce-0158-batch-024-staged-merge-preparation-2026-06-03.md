# TASK-CE-0158 Batch 024 Staged Merge Preparation

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether local/GitHub staged merge only
Status: PLANNED

## Activation Condition

Started after:

```text
TASK-CE-0157 Batch 024 Acceptance QA / Merge Decision: PASS_FOR_STAGED_MERGE
```

## Target

Merge Batch 024 into playable local/GitHub content and run post-merge validation.

Expected local/GitHub post-merge baseline:

```text
starter_items=865
grammar_patterns=446
qa_items=865
dangerous_pairs=201
```

## Required Checks

```text
merge Batch 024 only
full Captain Ether validator
Batch 024 validator after status update
API smoke
accepted-answer duplicate warning check
secret scan
diff whitespace check
```

No production deploy is authorized by this task.
