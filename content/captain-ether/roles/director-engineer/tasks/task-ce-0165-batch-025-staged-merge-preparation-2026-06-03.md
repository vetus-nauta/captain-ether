# TASK-CE-0165 Batch 025 Staged Merge Preparation

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether local/GitHub staged merge only
Status: PLANNED

## Activation Condition

Started after:

```text
TASK-CE-0164 Batch 025 Acceptance QA / Merge Decision: PASS_FOR_STAGED_MERGE
```

## Target

Merge Batch 025 into playable local/GitHub content and run post-merge validation.

Expected local/GitHub post-merge baseline:

```text
starter_items=900
grammar_patterns=481
qa_items=900
dangerous_pairs=208
```

## Required Checks

```text
merge Batch 025 only
full Captain Ether validator
Batch 025 validator after status update
API smoke
accepted-answer duplicate warning check
secret scan
diff whitespace check
```

No production deploy is authorized by this task.
