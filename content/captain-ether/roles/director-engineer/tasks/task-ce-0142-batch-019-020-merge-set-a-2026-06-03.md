# TASK-CE-0142 Batch 019-020 Merge Set A

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether local merge preparation only
Status: OPEN

## Activation Condition

Started after:

```text
TASK-CE-0141 Batch 019-023 Combined Acceptance QA: PASS_FOR_MERGE
```

## Target

Merge Set A only:

```text
content/captain-ether/batches/batch-019-practical-seamanship-vocabulary.json
content/captain-ether/batches/batch-020-safety-equipment-deck-operations-vocabulary.json
```

## Expected Local Increase

```text
starter_items: 650 -> 730
grammar_patterns: 237 -> 311
qa_items: 650 -> 730
dangerous_pairs: 152 -> 173
```

## Required Checks

```text
merge only Batch 019+020
remove qa_notes from playable starter items
batch statuses -> merged
post-merge validator PASS
API smoke PASS
post-merge targeted matcher PASS
no production deploy
```

No production deploy is authorized by this merge task.
