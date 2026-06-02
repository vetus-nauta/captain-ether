# TASK-CE-0127 Batch 018 Post-Merge QA

Date: 2026-06-02
Owner: QA
Assigned by: Director-Engineer
Scope: Captain Ether local merged M4 baseline only
Status: OPEN

## Input

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/batches/batch-018-scenario-chain-readbacks-basics.json
content/captain-ether/roles/director-engineer/reports/sprint-ce-0126-batch-018-merge-preparation-2026-06-02.md
```

## Required Checks

```text
validator PASS
API smoke PASS
JS syntax guard PASS
qa_notes_in_starter=0
corpus counts match merge report
Batch 018 items present in starter=25/25
Batch 018 QA entries present=25/25
Batch 018 dangerous pairs present=6/6
Batch 018 grammar patterns present=23/23
post-merge targeted matcher PASS
```

## Expected Local Counts

```text
starter_items=650
grammar_patterns=237
qa_items=650
dangerous_pairs=152
batch_018_status=merged
```

## Output

Create:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0127-batch-018-post-merge-qa-2026-06-02.md
```

No production deploy is authorized by this QA task.
