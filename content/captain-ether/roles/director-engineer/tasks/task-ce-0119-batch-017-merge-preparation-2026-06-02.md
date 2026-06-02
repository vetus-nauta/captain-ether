# TASK-CE-0119 Batch 017 Merge Preparation

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether Batch 017 local merge only
Status: DONE

## Activation Condition

Started after:

```text
TASK-CE-0118 Batch 017 Acceptance QA: DONE / PASS_FOR_MERGE
Batch status: linguist_reviewed
```

## Goal

Merge Batch 017 into local playable M4 baseline.

## Required Merge Scope

```text
content/captain-ether/batches/batch-017-marina-service-logistics-basics.json
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
```

Expected local counts after merge:

```text
starter_items=625
grammar_patterns=214
qa_items=625
dangerous_pairs=146
batch_017_status=merged
```

## Required Checks

```text
Validator: PASS
Batch 017 items present in starter: 25/25
Batch 017 QA entries present in registry: 25/25
Batch 017 dangerous pairs present in registry: 6/6
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
