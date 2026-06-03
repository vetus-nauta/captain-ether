# Captain Ether New Chat Start Package

Date: 2026-06-03
Role: Director Ether / Captain Ether Director
Repository: `/home/alexey/WebstormProjects/captain-ether`
GitHub: `git@github.com:vetus-nauta/captain-ether.git`
Production: `https://game.brkovic.ltd/games/captain-ether`
Canonical status: Batch 019-023 fully merged, production-synced, release-readiness QA passed, and duplicate-answer WARN cleaned

## 1. Read This First

This file is the canonical start point for the next chat.

It supersedes older start handoff files that mention only Batch 018 production
sync, pre-production parity, `500` local items, or full local/production parity.
Those files are historical context only.

The attached WebStorm DB console path, if present, is IDE context only:

```text
/home/alexey/.var/app/com.jetbrains.WebStorm/config/JetBrains/WebStorm2026.1/consoles/db/5ab18e59-79c1-4271-8a91-1c33f72072f1/console.js
```

Do not treat that `console.js` file as Captain Ether source code or product
state.

## 2. Current Playable State

Local/GitHub/production playable baseline is now Batch 023 after Set B production sync:

```text
starter_items=830
grammar_patterns=411
qa_items=830
dangerous_pairs=193
batch_019_status=merged
batch_020_status=merged
batch_021_status=merged
batch_022_status=merged
batch_023_status=merged
production_route=HTTP 200
anonymous_start_watch=HTTP 401 Login required
```

## 3. Current Draft Backlog

Batch 019-023 are all merged locally/GitHub. There is no remaining Batch 019-023
draft backlog.

```text
draft_backlog_items=0
draft_backlog_grammar_patterns=0
draft_backlog_qa_items=0
draft_backlog_dangerous_pairs=0
```

## 4. Latest Closed Gates

```text
CE-0128 Batch 018 Production Sync: PASS / PRODUCTION_SYNCED
CE-0129 Batch 019 Draft: DONE
CE-0131 Batch 020 Draft: DONE
CE-0133 Batch 021 Draft: DONE
CE-0135 Batch 022 Draft: DONE
CE-0137 Batch 023 Draft: DONE
CE-0140 Batch 019-023 Combined Engineering Gate: PASS FOR QA ACCEPTANCE
CE-0141 Batch 019-023 Combined Acceptance QA: PASS_FOR_MERGE
CE-0142 Batch 019-020 Merge Set A: MERGED LOCALLY / PASS
CE-0143 Batch 019-020 Post-Merge QA Set A: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
CE-0144 Batch 019-020 Production Sync: CLOSED / PASS / PRODUCTION_SYNCED
CE-0145 Batch 021-023 Merge Set B: MERGED LOCALLY / PASS
CE-0146 Batch 021-023 Post-Merge QA Set B: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
CE-0147 Batch 021-023 Production Sync: CLOSED / PASS / PRODUCTION_SYNCED
CE-0148 Captain Ether Release Readiness QA: PASS / RELEASE_READY_FOR_CURRENT_SCOPE
CE-0149 Starter Duplicate Accepted Answers Cleanup: PASS / READY_FOR_PRODUCTION_SYNC
CE-0150 Starter Duplicate Accepted Answers Production Sync: CLOSED / PASS / PRODUCTION_SYNCED
CE-0151 Big Sprint Production Hardening And Expansion Plan: ORGANIZED / READY_TO_EXECUTE
CE-0152 Authenticated Browser / Manual Playthrough Smoke: AUTH_BLOCKED_WITH_NEXT_STEPS
CE-0153 Production Runtime And UX Edge Smoke: PASS / RUNTIME_UX_SMOKE_CLEAN
CE-0154 M5 Content Expansion Scope Design: DONE / M5_SCOPE_LOCKED
CE-0155 Batch 024 Draft Gate: DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE
CE-0156 Batch 024 Linguist / Engineering Gate: PASS / READY_FOR_ACCEPTANCE_QA
CE-0157 Batch 024 Acceptance QA / Merge Decision: PASS_FOR_STAGED_MERGE
CE-0158 Batch 024 Staged Merge Preparation: MERGED_LOCALLY / PASS
CE-0159 Batch 024 Post-Merge QA: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
CE-0160 Batch 024 Production Sync Decision: CLOSED / PASS / PRODUCTION_SYNCED
CE-0161 Batch 024 Production Release Readiness QA: PASS / RELEASE_READY_FOR_CURRENT_SCOPE
CE-0162 Batch 025 Draft Gate: DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE
CE-0163 Batch 025 Linguist / Engineering Gate: PASS / READY_FOR_ACCEPTANCE_QA
```

Important reports:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0140-batch-019-023-combined-engineering-gate-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0139-batches-021-023-vocabulary-expansion-summary-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0141-batch-019-023-combined-acceptance-qa-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0142-batch-019-020-merge-set-a-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0143-batch-019-020-post-merge-qa-set-a-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0144-batch-019-020-production-sync-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0145-batch-021-023-merge-set-b-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0146-batch-021-023-post-merge-qa-set-b-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0147-batch-021-023-production-sync-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0148-captain-ether-release-readiness-qa-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0149-starter-duplicate-accepted-answers-cleanup-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0150-starter-duplicate-accepted-answers-production-sync-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0151-big-sprint-production-hardening-and-expansion-plan-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0152-authenticated-browser-playthrough-smoke-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0153-production-runtime-ux-edge-smoke-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0154-m5-content-expansion-scope-design-2026-06-03.md
content/captain-ether/roles/content-producer/reports/batch-024-engine-room-damage-control-communications-card-2026-06-03.md
content/captain-ether/roles/sea-speak-linguist/reports/batch-024-engine-room-damage-control-communications-risk-review-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0157-batch-024-acceptance-qa-merge-decision-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0158-batch-024-staged-merge-preparation-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0159-batch-024-post-merge-qa-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0160-batch-024-production-sync-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0161-batch-024-production-release-readiness-qa-2026-06-03.md
content/captain-ether/roles/content-producer/reports/batch-025-port-services-clearance-communications-card-2026-06-03.md
content/captain-ether/roles/sea-speak-linguist/reports/batch-025-port-services-clearance-communications-risk-review-2026-06-03.md
```

## 5. Current Next Task

Next task to run:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0164-batch-025-acceptance-qa-merge-decision-2026-06-03.md
```

Goal:

```text
Run Batch 025 acceptance QA and decide whether it is ready for staged merge.
```

Expected Set B local/GitHub baseline:

```text
local_github_production_starter_items=865
local_github_production_grammar_patterns=446
local_github_production_qa_items=865
local_github_production_dangerous_pairs=201
production_delta_items=0
draft_backlog_items=35
draft_backlog_grammar_patterns=35
draft_backlog_dangerous_pairs=7
```

Do not deploy again unless a new explicit production-sync task is opened.

## 6. Recommended Merge Plan After QA

Run post-merge QA Set B, then open a separate Set B production sync task only if
QA passes.

Recommended sequence:

```text
1. CE-0164 Batch 025 Acceptance QA / Merge Decision.
```

This keeps production parity checkpoints small enough to debug.

## 7. Standard Checks

Local validation:

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php
for b in 019 020 021 022 023; do
  f=$(ls content/captain-ether/batches/batch-${b}-*.json)
  $HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch="$f"
done
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php \
  $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Expected:

```text
validator PASS
batch validators PASS
API smoke PASS captain-ether-api-smoke checks=334
validator_warn_count=0
```

Git sync check:

```sh
git status --short --branch
git rev-list --left-right --count HEAD...origin/main
```

Expected:

```text
working tree clean
0 0
```

## 8. Hard Boundaries

Do not touch without explicit task:

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

Production deploy script is allowed only in an explicit production sync task:

```sh
tools/captain-ether-production-deploy.sh
```
