# TASK-CE-0188 Batch 028 Production Sync Decision

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether Batch 028 controlled production sync decision
Status: DONE / CLOSED / PASS / PRODUCTION_SYNCED

## Activation Condition

Start after:

```text
TASK-CE-0187 Batch 028 Post-Merge QA: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
```

## Input

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
content/captain-ether/batches/batch-028-exam-style-minimal-pair-reinforcement.json
content/captain-ether/roles/qa/reports/sprint-ce-0187-batch-028-post-merge-qa-2026-06-03.md
tools/captain-ether-production-deploy.sh
tools/captain-ether-production-atlas-ping.sh
```

## Required Pre-Deploy Gates

```text
full validator PASS with warnings=0
local API smoke PASS
Atlas ping PASS
GitHub sync 0 0
secret scan PASS
production FTP read-back confirms production is 30 items behind local/GitHub
```

## Controlled Sync Work

```text
run tools/captain-ether-production-deploy.sh only after pre-deploy gates pass
verify FTP round-trip hashes for uploaded Captain Ether content/API/assets
run post-deploy HTTP smoke
run post-deploy Atlas ping
confirm production counts equal local/GitHub 1000/581/1000/243
update handoff and start package
commit and push production sync report
```

## Hard Boundaries

```text
no production registry change
no production config change
no Atlas secret file change
no Atlas driver change
no Watch Officer or Nav Desk change
no WebStorm DB console or datasource change
```

Expected output:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0188-batch-028-production-sync-2026-06-03.md
next task for Batch 028 production release-readiness QA if sync passes
```

## Result

```text
CLOSED / PASS / PRODUCTION_SYNCED
full_validator=PASS
validator_runs=160
api_smoke=PASS captain-ether-api-smoke checks=334
atlas_ping=PASS
secret_literal_scan=PASS
deploy_backup_root=/game.brkovic.ltd/_deploy-backups/captain-ether/20260603T182651Z
post_deploy_counts=1000/581/1000/243
starter_hash_match=PASS
qa_hash_match=PASS
production_delta_items=0
next_task=CE-0189A Batch 028 Production Release-Readiness QA
```
