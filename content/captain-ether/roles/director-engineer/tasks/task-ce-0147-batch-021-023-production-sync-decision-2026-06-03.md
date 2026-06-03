# TASK-CE-0147 Batch 021-023 Production Sync Decision

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether production sync decision for Set B only
Status: DONE / CLOSED / PASS / PRODUCTION_SYNCED

## Activation Condition

Started after:

```text
TASK-CE-0146 Batch 021-023 Post-Merge QA Set B: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
```

## Target

Decide and, if explicitly proceeding inside this task, sync Captain Ether
production from Batch 020 baseline to Set B baseline.

Set B local/GitHub baseline:

```text
starter_items=830
grammar_patterns=411
qa_items=830
dangerous_pairs=193
batch_021_status=merged
batch_022_status=merged
batch_023_status=merged
```

Current production baseline before sync:

```text
production_content_baseline=Batch 020 / 730 items
production_route=HTTP 200
anonymous_start_watch=HTTP 401 Login required
```

## Required Pre-Deploy Checks

```text
git status clean
git rev-list --left-right --count HEAD...origin/main => 0 0
full validator PASS
API smoke PASS
production route/API read-only smoke PASS
explicit deploy scope: Captain Ether files only
```

## Deployment Boundary

Do not touch:

```text
Watch Officer
Nav Desk
shared hub/router/platform registry
platform auth design
production config
Atlas secret file
Atlas driver
SMTP
sessions/cookies/CSRF behavior
player email or identity data
WebStorm DB console
foreign databases/projects
```

Production deploy is allowed only if this task is explicitly treated as the
production sync task and the deploy command scope is verified before running.

Canonical deploy script:

```sh
tools/captain-ether-production-deploy.sh
```

## Required Post-Deploy Checks If Deploy Runs

```text
production route HTTP 200
production anonymous start-watch HTTP 401 Login required
deployed file/hash parity for Captain Ether scope
production content count check if available
no platform registry drift
```

## Result

```text
predeploy_git_sync=0 0
predeploy_validator=PASS runs=60
predeploy_api_smoke=PASS checks=334
predeploy_atlas_ping=PASS
predeploy_production=730/311/730/173
deploy_command=tools/captain-ether-production-deploy.sh
backup_root=/game.brkovic.ltd/_deploy-backups/captain-ether/20260603T055505Z
postdeploy_production=830/411/830/193
postdeploy_http_smoke=PASS
postdeploy_content_hash=PASS starter_and_qa
postdeploy_asset_hash=PASS app_js_app_css_service_worker_manifest
postdeploy_set_b_integrity=PASS batch021 35/35 batch022 35/35 batch023 30/30
postdeploy_set_b_targeted=PASS items=100 accept=139 reject=301
production_registry_not_touched=true
production_config_not_touched=true
atlas_secret_not_touched=true
atlas_driver_not_touched=true
result=PRODUCTION_SYNCED
next_task=CE-0148 Captain Ether Release Readiness QA
```
