# TASK-CE-0144 Batch 019-020 Production Sync Decision

Date: 2026-06-03
Owner: Director-Engineer
Scope: Captain Ether production sync decision for Set A only
Status: DONE / CLOSED / PASS / PRODUCTION_SYNCED

## Activation Condition

Started after:

```text
TASK-CE-0143 Batch 019-020 Post-Merge QA Set A: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
```

## Target

Decide and, if explicitly proceeding inside this task, sync Captain Ether
production from Batch 018 baseline to Set A baseline.

Set A local/GitHub baseline:

```text
starter_items=730
grammar_patterns=311
qa_items=730
dangerous_pairs=173
batch_019_status=merged
batch_020_status=merged
```

Current production baseline before sync:

```text
production_content_baseline=Batch 018 / 650 items
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
predeploy_production=650/237/650/152
deploy_command=tools/captain-ether-production-deploy.sh
backup_root=/game.brkovic.ltd/_deploy-backups/captain-ether/20260603T054217Z
postdeploy_production=730/311/730/173
postdeploy_http_smoke=PASS
postdeploy_content_hash=PASS starter_and_qa
postdeploy_asset_hash=PASS app_js_app_css_service_worker_manifest
postdeploy_set_a_integrity=PASS batch019 30/30 batch020 50/50
postdeploy_set_a_targeted=PASS items=80 accept=153 reject=240
production_registry_not_touched=true
production_config_not_touched=true
atlas_secret_not_touched=true
atlas_driver_not_touched=true
result=PRODUCTION_SYNCED
next_task=CE-0145 Batch 021-023 Merge Set B
```
