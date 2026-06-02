# TASK-CE-0090 Batch 013 Acceptance QA

Date: 2026-06-02
Owner: QA
Assigned by: Director-Engineer
Scope: Captain Ether Batch 013 only
Status: DONE

## Input

```text
content/captain-ether/batches/batch-013-restricted-manoeuvrability-basics.json
content/captain-ether/roles/sea-speak-linguist/reports/batch-013-restricted-manoeuvrability-risk-review-2026-06-02.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0089-batch-013-engineering-gate-2026-06-02.md
```

## Required Checks

Verify:

```text
validator --batch PASS
all should_accept examples pass
all should_reject examples fail
dangerous minimal-pair groups are executable
no NUC/RAM/CBD boundary collapse
no towing/tug/towage boundary collapse
no diving/dredging/fishing/drifting boundary collapse
no opposite navigation instruction accepted
```

## Output

Create:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0090-batch-013-acceptance-qa-2026-06-02.md
```

The result must be one of:

```text
PASS_FOR_MERGE
PASS_WITH_NON_BLOCKING_NOTES
BLOCKED
```

No merge or production deploy is authorized by this QA task.
