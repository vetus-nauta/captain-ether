# TASK-CE-0097 Batch 014 Acceptance QA

Date: 2026-06-02
Owner: QA
Assigned by: Director-Engineer
Scope: Captain Ether Batch 014 only
Status: DONE

## Input

```text
content/captain-ether/batches/batch-014-medical-repair-basics.json
content/captain-ether/roles/sea-speak-linguist/reports/batch-014-medical-repair-risk-review-2026-06-02.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0096-batch-014-engineering-gate-2026-06-02.md
```

## Required Checks

Verify:

```text
validator --batch PASS
all should_accept examples pass
all should_reject examples fail
dangerous minimal-pair groups are executable
engineering de-dup item accepts temporary repair holding
engineering de-dup item rejects existing starter assistance-cancel phrase
bilge pump / fire pump boundary is preserved
medical advice / assistance / evacuation / rescue boundary is preserved
conscious / unconscious / overboard / missing boundary is preserved
hypothermia / hyperthermia / seasickness boundary is preserved
water ingress / water tank boundary is preserved
no immediate danger / immediate danger / Mayday boundary is preserved
```

## Output

Create:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0097-batch-014-acceptance-qa-2026-06-02.md
```

The result must be one of:

```text
PASS_FOR_MERGE
PASS_WITH_NON_BLOCKING_NOTES
BLOCKED
```

No merge or production deploy is authorized by this QA task.
