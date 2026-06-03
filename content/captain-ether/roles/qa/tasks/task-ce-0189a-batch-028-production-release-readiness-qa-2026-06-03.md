# TASK-CE-0189A Batch 028 Production Release-Readiness QA

Date: 2026-06-03
Owner: QA / Director-Engineer
Scope: Captain Ether Batch 028 production release-readiness QA, read-only production checks
Status: PLANNED

## Activation Condition

Start after:

```text
TASK-CE-0188 Batch 028 Production Sync Decision: CLOSED / PASS / PRODUCTION_SYNCED
```

## Input

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/roles/director-engineer/reports/sprint-ce-0188-batch-028-production-sync-2026-06-03.md
tools/captain-ether-production-atlas-ping.sh
```

## Required Work

```text
verify production route HTTP 200
verify production static shell/assets/service-worker/manifest reachable
verify production content counts match local/GitHub 1000/581/1000/243
verify production content hashes match local/GitHub
verify protected Captain Ether APIs keep anonymous 401 guards
verify production Atlas ping remains healthy
verify no public payload leaks secrets or player identity
```

## Hard Boundaries

```text
read-only production checks only
no production deploy
no production config changes
no Atlas/auth/session/router/registry changes
no Watch Officer or Nav Desk changes
no player email or identity data in reports
```

Expected output:

```text
content/captain-ether/roles/qa/reports/sprint-ce-0189a-batch-028-production-release-readiness-qa-2026-06-03.md
status PASS / RELEASE_READY_FOR_1000_ITEM_SCOPE or CHANGES_REQUIRED
```
