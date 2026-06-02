# TASK-CE-0112 Batch 016 Merge Preparation

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether Batch 016 local merge only
Status: DONE

## Activation Condition

Started after:

```text
TASK-CE-0111 Batch 016 Acceptance QA: DONE / PASS_FOR_MERGE
Batch status: linguist_reviewed
```

## Goal

Merge Batch 016 into local playable M4 baseline.

## Required Merge Scope

```text
content/captain-ether/batches/batch-016-weather-sea-state-warnings-basics.json
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
```

Expected local counts after merge:

```text
starter_items=600
grammar_patterns=204
qa_items=600
dangerous_pairs=140
batch_016_status=merged
```

## Required Checks

```text
Validator: PASS
Batch 016 items present in starter: 25/25
Batch 016 QA entries present in registry: 25/25
Batch 016 dangerous pairs present in registry: 6/6
qa_notes_in_starter=0
Targeted post-merge matcher: PASS
API smoke: PASS
Secret scan: PASS
```

## Required Decision

Return one of:

```text
MERGED LOCALLY / PASS
FAIL / RETURN_TO_QA_OR_ENGINEERING
```

No production deploy is authorized by this merge task.

## Result

```text
MERGED LOCALLY / PASS
```
