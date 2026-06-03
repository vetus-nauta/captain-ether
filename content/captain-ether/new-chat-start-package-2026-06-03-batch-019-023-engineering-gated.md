# Captain Ether New Chat Start Package

Date: 2026-06-03
Role: Director Ether / Captain Ether Director
Repository: `/home/alexey/WebstormProjects/captain-ether`
GitHub: `git@github.com:vetus-nauta/captain-ether.git`
Production: `https://game.brkovic.ltd/games/captain-ether`
Canonical status: Batch 027 production release-ready at the 970-item baseline; Batch 028 acceptance QA passed and is ready for staged local/GitHub merge toward the 1000-item M5 baseline

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

Local/GitHub/production playable baseline is now Batch 027 after CE-0181 production sync.

```text
local_github_starter_items=970
local_github_grammar_patterns=551
local_github_qa_items=970
local_github_dangerous_pairs=227
batch_024_status=merged
batch_025_status=merged
batch_026_status=merged
production_starter_items=970
production_grammar_patterns=551
production_qa_items=970
production_dangerous_pairs=227
production_delta_items=0
post_merge_qa=PASS
production_sync=PASS
production_release_readiness_qa=PASS
ready_for_batch_028_staged_merge=true
production_route=HTTP 200
anonymous_start_watch=HTTP 401 Login required
```

## 3. Current Draft Backlog

Batch 028 exists as an isolated draft only. It is not merged into starter/QA registry and is not deployed.

```text
draft_backlog_items=30
draft_backlog_grammar_patterns=30
draft_backlog_qa_items=30
draft_backlog_dangerous_pairs=16
batch_027_status=merged
batch_028_status=draft_acceptance_qa_passed
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
CE-0164 Batch 025 Acceptance QA / Merge Decision: PASS_FOR_STAGED_MERGE
CE-0165 Batch 025 Staged Merge Preparation: MERGED_LOCALLY / PASS
CE-0166 Batch 025 Post-Merge QA: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
CE-0167 Batch 025 Production Sync Decision: CLOSED / PASS / PRODUCTION_SYNCED
CE-0168 Batch 025 Production Release Readiness QA: PASS / RELEASE_READY_FOR_CURRENT_SCOPE
CE-0169 Batch 026 Weather-Routing / Navigation-Warning Draft Gate: DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE
CE-0170 Batch 026 Linguist / Engineering Gate: PASS / READY_FOR_ACCEPTANCE_QA
CE-0171 Batch 026 Acceptance QA / Merge Decision: PASS_FOR_STAGED_MERGE
CE-0172 Batch 026 Staged Merge Preparation: MERGED_LOCALLY / PASS
CE-0173 Batch 026 Post-Merge QA: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
CE-0174 Batch 026 Production Sync Decision: CLOSED / PASS / PRODUCTION_SYNCED
CE-0175 Batch 026 Production Release Readiness QA: PASS / RELEASE_READY_FOR_CURRENT_SCOPE
CE-0176 Batch 027 SAR / Casualty-Transfer Draft Gate: DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE
CE-0177 Batch 027 Linguist / Engineering Gate: PASS / READY_FOR_ACCEPTANCE_QA
CE-0178 Batch 027 Acceptance QA / Merge Decision: PASS_FOR_STAGED_MERGE
CE-0179 Batch 027 Staged Merge Preparation: MERGED_LOCALLY / PASS
CE-0180 Batch 027 Post-Merge QA: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
CE-0181 Batch 027 Production Sync Decision: CLOSED / PASS / PRODUCTION_SYNCED
CE-0182 Batch 027 Production Release-Readiness QA: PASS / RELEASE_READY_FOR_CURRENT_SCOPE
CE-0183 Batch 028 Draft Gate: DONE / DRAFT_READY_FOR_LINGUIST_ENGINEERING_GATE
CE-0184 Batch 028 Linguist / Engineering Gate: PASS / READY_FOR_ACCEPTANCE_QA
CE-0185 Batch 028 Acceptance QA / Merge Decision: PASS_FOR_STAGED_MERGE
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
content/captain-ether/roles/qa/reports/sprint-ce-0164-batch-025-acceptance-qa-merge-decision-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0165-batch-025-staged-merge-preparation-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0166-batch-025-post-merge-qa-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0167-batch-025-production-sync-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0168-batch-025-production-release-readiness-qa-2026-06-03.md
content/captain-ether/roles/content-producer/reports/batch-026-weather-routing-navigation-warning-reinforcement-card-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0169-batch-026-weather-routing-navigation-warning-draft-2026-06-03.md
content/captain-ether/roles/sea-speak-linguist/reports/batch-026-weather-routing-navigation-warning-reinforcement-risk-review-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0171-batch-026-acceptance-qa-merge-decision-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0172-batch-026-staged-merge-preparation-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0173-batch-026-post-merge-qa-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0174-batch-026-production-sync-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0175-batch-026-production-release-readiness-qa-2026-06-03.md
content/captain-ether/roles/content-producer/reports/batch-027-sar-casualty-transfer-reinforcement-card-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0176-batch-027-sar-casualty-transfer-draft-2026-06-03.md
content/captain-ether/roles/sea-speak-linguist/reports/batch-027-sar-casualty-transfer-reinforcement-risk-review-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0178-batch-027-acceptance-qa-merge-decision-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0179-batch-027-staged-merge-preparation-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0180-batch-027-post-merge-qa-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0181-batch-027-production-sync-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0182-batch-027-production-release-readiness-qa-2026-06-03.md
content/captain-ether/roles/content-producer/reports/batch-028-exam-style-minimal-pair-reinforcement-card-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0183-batch-028-draft-2026-06-03.md
content/captain-ether/roles/sea-speak-linguist/reports/batch-028-exam-style-minimal-pair-reinforcement-risk-review-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0185-batch-028-acceptance-qa-merge-decision-2026-06-03.md
```

## 5. Current Next Task

Next task to run:

```text
content/captain-ether/roles/director-engineer/tasks/task-ce-0186-batch-028-staged-merge-preparation-2026-06-03.md
```

Goal:

```text
Run Batch 028 staged merge preparation. Merge Batch 028 locally/GitHub only, then validate; no production deploy.
```

Expected current local/GitHub/production baseline:

```text
local_github_starter_items=970
local_github_grammar_patterns=551
local_github_qa_items=970
local_github_dangerous_pairs=227
production_starter_items=970
production_grammar_patterns=551
production_qa_items=970
production_dangerous_pairs=227
production_delta_items=0
draft_backlog_items=30
draft_backlog_grammar_patterns=30
draft_backlog_dangerous_pairs=16
```

Local/GitHub/production now match at 970 and Batch 027 release-readiness QA passed. Batch 028 isolated draft passed acceptance QA and is ready for staged local/GitHub merge; no production deploy.

## 6. Recommended Merge Plan After QA

Run Batch 028 staged merge preparation, then post-merge QA if merge passes.

Recommended sequence:

```text
1. CE-0186 Batch 028 Staged Merge Preparation.
2. Then run Batch 028 post-merge QA.
```

This keeps production parity checkpoints small enough to debug.

## 7. Standard Checks

Local validation:

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php
for b in 025 026; do
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
