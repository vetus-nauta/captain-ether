# TASK-CE-0186 Batch 028 Staged Merge Preparation

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether Batch 028 staged local/GitHub merge preparation
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0185 Batch 028 Acceptance QA / Merge Decision: PASS_FOR_STAGED_MERGE
```

## Input

```text
content/captain-ether/batches/batch-028-exam-style-minimal-pair-reinforcement.json
content/captain-ether/roles/qa/reports/sprint-ce-0185-batch-028-acceptance-qa-merge-decision-2026-06-03.md
```

## Required Work

```text
merge Batch 028 into starter.json and accept-reject-qa-pairs.json locally/GitHub only
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
content/captain-ether/roles/director-engineer/reports/sprint-ce-0186-batch-028-staged-merge-preparation-2026-06-03.md
next task for Batch 028 post-merge QA if staged merge passes
```
