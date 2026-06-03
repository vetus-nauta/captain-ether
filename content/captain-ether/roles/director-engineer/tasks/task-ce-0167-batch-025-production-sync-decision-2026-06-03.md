# TASK-CE-0167 Batch 025 Production Sync Decision

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether Batch 025 controlled production sync
Status: CLOSED / PASS / PRODUCTION_SYNCED

## Activation Condition

Started after:

```text
TASK-CE-0166 Batch 025 Post-Merge QA: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
```

## Target

Decide and, if gates remain green, sync the Batch 025 local/GitHub baseline to
production.

Final source baseline:

```text
local_github_starter_items=900
local_github_grammar_patterns=481
local_github_qa_items=900
local_github_dangerous_pairs=208
batch_025_status=merged
validator_warn_count=0
```

Production pre-sync baseline:

```text
production_starter_items=865
production_grammar_patterns=446
production_qa_items=865
production_dangerous_pairs=201
production_delta_items=-35
```

Production post-sync baseline:

```text
production_starter_items=900
production_grammar_patterns=481
production_qa_items=900
production_dangerous_pairs=208
production_delta_items=0
```

## Completed Gates

```text
git status clean: PASS
github_sync=0 0: PASS
full validator with runs >=100: PASS, runs=120
API smoke: PASS captain-ether-api-smoke checks=334
Atlas ping: PASS
production route/API read-only smoke: PASS
production FTP content read-back counts: PASS
secret scan: PASS
FTP round-trip/hash parity: PASS
production route/assets/API smoke: PASS
public payload privacy scan: PASS
```

## Deploy Command

Executed:

```sh
tools/captain-ether-production-deploy.sh
```

Deploy backup root:

```text
/game.brkovic.ltd/_deploy-backups/captain-ether/20260603T092630Z
```

## Result

```text
CLOSED / PASS / PRODUCTION_SYNCED
```

Report:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0167-batch-025-production-sync-2026-06-03.md
```
