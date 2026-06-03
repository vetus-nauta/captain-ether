# TASK-CE-0182 Batch 027 Production Release-Readiness QA

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether Batch 027 production release-readiness QA
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0181 Batch 027 Production Sync Decision: CLOSED / PASS / PRODUCTION_SYNCED
```

## Input

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0181-batch-027-production-sync-2026-06-03.md
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
```

## Required Checks

```text
local full validator PASS with warnings=0
local API smoke PASS
production FTP read-back equals local/GitHub 970/551/970/227
production HTTP route/assets/API smoke PASS
production Atlas ping PASS
anonymous protected APIs remain 401
public/anonymous payload scan finds no secrets or identity data
GitHub sync 0 0
no production deploy in this task
```

Expected output:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0182-batch-027-production-release-readiness-qa-2026-06-03.md
next task for Batch 028 draft gate if release-readiness passes
```
