# TASK-CE-0179 Batch 027 Staged Merge Preparation

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether Batch 027 staged local/GitHub merge preparation
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0178 Batch 027 Acceptance QA / Merge Decision: PASS_FOR_STAGED_MERGE
```

## Input

```text
content/captain-ether/batches/batch-027-sar-casualty-transfer-reinforcement.json
content/captain-ether/roles/qa/reports/sprint-ce-0178-batch-027-acceptance-qa-merge-decision-2026-06-03.md
```

## Required Work

```text
merge Batch 027 into starter.json and accept-reject-qa-pairs.json locally/GitHub only
preserve existing starter and QA data
run full validator with warnings=0
run local API smoke
run collision/duplicate checks after merge
update handoff and start package
commit and push if all checks pass
```

## Hard Boundaries

```text
no production deploy in this task
no production config changes
no Atlas/auth/session/router/registry changes
no Watch Officer or Nav Desk changes
```

Expected output:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0179-batch-027-staged-merge-preparation-2026-06-03.md
next task for Batch 027 post-merge QA if staged merge passes
```
