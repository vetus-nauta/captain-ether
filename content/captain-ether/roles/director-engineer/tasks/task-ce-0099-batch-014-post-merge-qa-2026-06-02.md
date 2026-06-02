# TASK-CE-0099 Batch 014 Post-Merge QA

Date: 2026-06-02
Owner: QA
Assigned by: Director-Engineer
Scope: Captain Ether local merged M4 baseline only
Status: DONE

## Input

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/batches/batch-014-medical-repair-basics.json
content/captain-ether/roles/director-engineer/reports/sprint-ce-0098-batch-014-merge-preparation-2026-06-02.md
```

## Required Checks

```text
validator PASS
API smoke PASS
JS syntax guard PASS
qa_notes_in_starter=0
corpus counts match merge report
Batch 014 items present in starter=25/25
Batch 014 QA entries present=25/25
post-merge targeted matcher PASS
```

## Output

Create:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0099-batch-014-post-merge-qa-2026-06-02.md
```

No production deploy is authorized by this QA task.
