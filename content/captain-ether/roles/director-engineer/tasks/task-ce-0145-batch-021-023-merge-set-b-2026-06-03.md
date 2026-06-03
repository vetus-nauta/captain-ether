# TASK-CE-0145 Batch 021-023 Merge Set B

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether local merge preparation only
Status: OPEN

## Activation Condition

Started after:

```text
TASK-CE-0144 Batch 019-020 Production Sync Decision: CLOSED / PASS / PRODUCTION_SYNCED
```

## Target

Merge Set B only:

```text
content/captain-ether/batches/batch-021-vhf-procedure-message-markers-vocabulary.json
content/captain-ether/batches/batch-022-navigation-hazards-buoyage-visibility-vocabulary.json
content/captain-ether/batches/batch-023-emergency-medical-response-vocabulary.json
```

## Expected Local Increase

```text
starter_items: 730 -> 830
grammar_patterns: 311 -> 411
qa_items: 730 -> 830
dangerous_pairs: 173 -> 193
```

## Required Checks

```text
merge only Batch 021+022+023
remove qa_notes from playable starter items
batch statuses -> merged
post-merge validator PASS
API smoke PASS
post-merge targeted matcher PASS
no production deploy
```

No production deploy is authorized by this merge task.
