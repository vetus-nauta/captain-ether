# TASK-CE-0167 Batch 025 Production Sync Decision

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether Batch 025 controlled production sync
Status: PLANNED

## Activation Condition

Start only after:

```text
TASK-CE-0166 Batch 025 Post-Merge QA: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
```

## Target

Decide and, if gates remain green, sync the Batch 025 local/GitHub baseline to
production.

Expected source baseline:

```text
local_github_starter_items=900
local_github_grammar_patterns=481
local_github_qa_items=900
local_github_dangerous_pairs=208
batch_025_status=merged
validator_warn_count=0
```

Expected production pre-sync baseline:

```text
production_starter_items=865
production_grammar_patterns=446
production_qa_items=865
production_dangerous_pairs=201
production_delta_items=-35
```

## Required Pre-Deploy Gates

```text
git status clean
github_sync=0 0
full validator with runs >=100
API smoke
Atlas ping
production route/API read-only smoke
production FTP content read-back counts
secret scan
```

## Deploy Command If Approved By Gates

```sh
tools/captain-ether-production-deploy.sh
```

## Required Post-Deploy Gates

```text
FTP round-trip/hash parity
production starter/QA counts equal local/GitHub 900 baseline
production route/assets/API smoke
Atlas ping
public payload privacy scan
handoff/start package update
commit and push final report
```

## Boundaries

Do not touch Watch Officer, Nav Desk, shared registry, production config, Atlas
secret file, Atlas driver, SMTP, sessions/cookies/CSRF behavior, player email,
player identity data, WebStorm DB console, WebStorm datasource, or foreign
database.
