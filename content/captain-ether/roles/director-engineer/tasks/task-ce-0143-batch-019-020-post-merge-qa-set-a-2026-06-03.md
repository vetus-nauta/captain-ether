# TASK-CE-0143 Batch 019-020 Post-Merge QA Set A

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether local/GitHub post-merge QA only
Status: OPEN

## Activation Condition

Started after:

```text
TASK-CE-0142 Batch 019-020 Merge Set A: MERGED LOCALLY / PASS
```

## Target

Post-merge QA for Set A after Batch 019+020 have been merged into playable local
content:

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/batches/batch-019-practical-seamanship-vocabulary.json
content/captain-ether/batches/batch-020-safety-equipment-deck-operations-vocabulary.json
```

## Expected Baseline

```text
starter_items=730
grammar_patterns=311
qa_items=730
dangerous_pairs=173
batch_019_status=merged
batch_020_status=merged
```

## Required Checks

```text
full validator PASS
batch 019 validator PASS
batch 020 validator PASS
API smoke PASS
post-merge targeted matcher PASS
route/API read-only smoke if needed
no production deploy
```

No production deploy is authorized by this QA task.
