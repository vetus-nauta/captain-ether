# TASK-CE-0126 Batch 018 Merge Preparation

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether Batch 018 local merge only
Status: DONE

## Activation Condition

Started after:

```text
TASK-CE-0125 Batch 018 Acceptance QA: DONE / PASS_FOR_MERGE
Batch status: linguist_reviewed
```

## Goal

Merge Batch 018 scenario-chain/readback basics into local playable M4 baseline.

## Required Merge Scope

```text
content/captain-ether/batches/batch-018-scenario-chain-readbacks-basics.json
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
```

Expected local counts after merge:

```text
starter_items=650
grammar_patterns=237
qa_items=650
dangerous_pairs=152
batch_018_status=merged
```

## Required Checks

```text
Validator: PASS
Batch 018 items present in starter: 25/25
Batch 018 QA entries present in registry: 25/25
Batch 018 dangerous pairs present in registry: 6/6
Batch 018 grammar patterns present in starter: 23/23
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
