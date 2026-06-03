# TASK-CE-0180 Batch 027 Post-Merge QA

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether Batch 027 post-merge QA, local/GitHub only
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0179 Batch 027 Staged Merge Preparation: MERGED_LOCALLY / PASS
```

## Input

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/batches/batch-027-sar-casualty-transfer-reinforcement.json
content/captain-ether/roles/director-engineer/reports/sprint-ce-0179-batch-027-staged-merge-preparation-2026-06-03.md
```

## Required QA Checks

```text
full validator PASS with warnings=0
Batch 027 validator PASS after merge
local API smoke PASS
Batch 027 reachability in starter and QA registry remains 35/35
Batch 027 grammar patterns remain 35/35
Batch 027 dangerous-pair groups remain 11/11
qa_notes_in_starter=0
production read-only drift remains intentional at -35 items
no production deploy
```

Expected output:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0180-batch-027-post-merge-qa-2026-06-03.md
next task for Batch 027 production sync decision if QA passes
```
