# TASK-CE-0187 Batch 028 Post-Merge QA

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether Batch 028 post-merge QA, local/GitHub only
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0186 Batch 028 Staged Merge Preparation: MERGED_LOCALLY / PASS
```

## Input

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/batches/batch-028-exam-style-minimal-pair-reinforcement.json
content/captain-ether/roles/director-engineer/reports/sprint-ce-0186-batch-028-staged-merge-preparation-2026-06-03.md
```

## Required Work

```text
confirm Batch 028 is merged into starter and QA registry
run full validator with warnings=0
run Batch 028 validator after merged status
run local API smoke
run duplicate/collision checks for Batch 028 after merge
confirm production remains untouched and intentionally behind by 30 items
```

## Hard Boundaries

```text
no production deploy
no production config changes
no Atlas/auth/session/router/registry changes
no Watch Officer or Nav Desk changes
no matcher/API/runtime/UI changes unless a blocker is found and separately assigned
```

Expected output:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0187-batch-028-post-merge-qa-2026-06-03.md
status PASS / READY_FOR_PRODUCTION_SYNC_DECISION or CHANGES_REQUIRED
```
