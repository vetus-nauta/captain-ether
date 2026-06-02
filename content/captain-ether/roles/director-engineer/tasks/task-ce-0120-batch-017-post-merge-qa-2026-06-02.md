# TASK-CE-0120 Batch 017 Post-Merge QA

Date: 2026-06-02
Owner: QA
Assigned by: Director-Engineer
Scope: Captain Ether local merged M4 baseline only
Status: DONE

## Input

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/batches/batch-017-marina-service-logistics-basics.json
content/captain-ether/roles/director-engineer/reports/sprint-ce-0119-batch-017-merge-preparation-2026-06-02.md
```

## Required Checks

```text
validator PASS
API smoke PASS
JS syntax guard PASS
qa_notes_in_starter=0
corpus counts match merge report
Batch 017 items present in starter=25/25
Batch 017 QA entries present=25/25
Batch 017 dangerous pairs present=6/6
Batch 017 grammar patterns present=10/10
post-merge targeted matcher PASS
```

## Expected Local Counts

```text
starter_items=625
grammar_patterns=214
qa_items=625
dangerous_pairs=146
batch_017_status=merged
```

## Output

Create:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0120-batch-017-post-merge-qa-2026-06-02.md
```

No production deploy is authorized by this QA task.

## Result

```text
PASS / READY_FOR_CONTROLLED_PRODUCTION_SYNC
```
