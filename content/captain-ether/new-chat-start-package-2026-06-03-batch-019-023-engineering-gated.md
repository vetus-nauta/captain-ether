# Captain Ether New Chat Start Package

Date: 2026-06-03
Role: Director Ether / Captain Ether Director
Repository: `/home/alexey/WebstormProjects/captain-ether`
GitHub: `git@github.com:vetus-nauta/captain-ether.git`
Production: `https://game.brkovic.ltd/games/captain-ether`
Canonical status: Captain Ether 1000-item main course content/runtime and runtime/API/production parity are internally closed to 100% for the current scope; authenticated watch smoke remains open because approved production QA access is blocked; Gamification v1 design spec is ready, with no implementation yet

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

Local/GitHub playable baseline is now Batch 028 after CE-0186 staged merge.
Production is now Batch 028 after CE-0188 production sync.

```text
local_github_starter_items=1000
local_github_grammar_patterns=581
local_github_qa_items=1000
local_github_dangerous_pairs=243
should_accept=1943
should_reject=3032
danger_must_accept=821
danger_must_reject=1789
batch_024_status=merged
batch_025_status=merged
batch_026_status=merged
batch_027_status=merged
batch_028_status=merged
production_starter_items=1000
production_grammar_patterns=581
production_qa_items=1000
production_dangerous_pairs=243
production_delta_items=0
post_merge_qa=PASS
production_sync=PASS
production_release_readiness_qa=PASS
authenticated_browser_watch_smoke=AUTH_BLOCKED_WITH_NEXT_STEPS
authenticated_watch_smoke_reattempt=AUTH_BLOCKED_RECONFIRMED
authenticated_user_session_log=SESSION_PREPARED_WAITING_FOR_USER_LOGIN
ready_for_main_course_technical_closure_audit=true
main_course_technical_closure_audit=AUTH_BLOCKED_BUT_CONTENT_RUNTIME_READY
answer_log_matcher_noise_review=MATCHER_NOISE_ACCEPTABLE
director_closure_decision=MAIN_COURSE_CONTENT_RUNTIME_CLOSED_AUTH_SMOKE_OPEN
gamification_v1_design_spec=DESIGN_SPEC_READY_FOR_DIRECTOR_REVIEW
gamification_implementation=false
gamification_v1_copy_placement_spec=UX_SPEC_READY_FOR_DATA_CONTRACT
gamification_v1_data_contract=DATA_CONTRACT_READY_FOR_IMPLEMENTATION_PLANNING
ceo_session_findings=CEO_FINDINGS_CAPTURED_AGENT_STARTERS_CREATED_NO_CODE
agent_wave_1=REPORTS_READY_NO_CODE
progression_algorithm_architect=REPORT_READY_ACCEPTED_FOR_BACKLOG_CONSOLIDATION_NO_CODE
agent_report_implementation_backlog=BACKLOG_READY_NO_CODE
big_implementation_sprint_plan=SPRINT_READY_NO_CODE
ce_0196a_pre_code_baseline=BASELINE_PASS_READY_FOR_CE_0196B_NO_CODE
ce_0196b_first_run_funnel=IMPLEMENTED_LOCAL_QA_PASS_PRODUCTION_UNCHANGED
ce_0196c_active_watch_hud=IMPLEMENTED_LOCAL_QA_PASS_PRODUCTION_UNCHANGED
main_course_finalization_reconfirmation=PASS_INTERNAL_100_AUTH_EXTERNAL_BLOCKER
runtime_api_production_parity_reconfirmation=PASS_INTERNAL_100_AUTH_EXTERNAL_BLOCKER
production_route=HTTP 200
anonymous_start_watch=HTTP 401 Login required
```

## 3. Current Draft Backlog

Batch 028 is merged locally/GitHub. There is no active isolated draft backlog after CE-0186.

```text
draft_backlog_items=0
draft_backlog_grammar_patterns=0
draft_backlog_qa_items=0
draft_backlog_dangerous_pairs=0
batch_027_status=merged
batch_028_status=merged
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
CE-0186 Batch 028 Staged Merge Preparation: MERGED_LOCALLY / PASS
CE-0187 Batch 028 Post-Merge QA: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
CE-0188 Batch 028 Production Sync Decision: CLOSED / PASS / PRODUCTION_SYNCED
CE-0189A Batch 028 Production Release-Readiness QA: PASS / RELEASE_READY_FOR_1000_ITEM_SCOPE
CE-0189B Authenticated Browser Watch Smoke: AUTH_BLOCKED_WITH_NEXT_STEPS
CE-0189C Main Course Technical Closure Audit: AUTH_BLOCKED_BUT_CONTENT_RUNTIME_READY
CE-0189D Answer-Log And Matcher Noise Review: MATCHER_NOISE_ACCEPTABLE
CE-0189E Director Closure Decision: MAIN_COURSE_CONTENT_RUNTIME_CLOSED_AUTH_SMOKE_OPEN
CE-0190 Gamification v1 Design Spec: DESIGN_SPEC_READY_FOR_DIRECTOR_REVIEW
CE-0191A Main Course And Runtime Finalization: PASS / INTERNAL_100_AUTH_EXTERNAL_BLOCKER
CE-0191B Authenticated Watch Smoke Reattempt: AUTH_BLOCKED_RECONFIRMED
CE-0191 Gamification v1 Copy And Placement Spec: UX_SPEC_READY_FOR_DATA_CONTRACT
CE-0192 Gamification v1 Progression Data Contract: DATA_CONTRACT_READY_FOR_IMPLEMENTATION_PLANNING
CE-0191C Authenticated User Session Log: SESSION_PREPARED / WAITING_FOR_USER_LOGIN
CE-0193 CEO Session Findings And Agent Roster: CEO_FINDINGS_CAPTURED / AGENT_STARTERS_CREATED / NO_CODE
CE-0194 Agent Wave 1 Launch And Acceptance: WAVE_1_REPORTS_READY / NO_CODE
CE-0194F Progression Algorithm Acceptance: WAVE_2_REPORT_READY / ACCEPTED_FOR_BACKLOG_CONSOLIDATION / NO_CODE
CE-0195 Implementation Backlog From Agent Reports: BACKLOG_READY / NO_CODE
CE-0196 Big Implementation Sprint Plan: SPRINT_READY / NO_CODE
CE-0196A Pre-Code Inspection And Baseline QA: BASELINE_PASS / READY_FOR_CE_0196B / NO_CODE
CE-0196B First-Run Funnel Cleanup: IMPLEMENTED_LOCAL / QA_PASS / PRODUCTION_UNCHANGED
CE-0196C Active Watch HUD: IMPLEMENTED_LOCAL / QA_PASS / PRODUCTION_UNCHANGED
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
content/captain-ether/roles/director-engineer/reports/sprint-ce-0186-batch-028-staged-merge-preparation-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0187-batch-028-post-merge-qa-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0188-batch-028-production-sync-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0189a-batch-028-production-release-readiness-qa-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0189b-authenticated-browser-watch-smoke-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0189c-main-course-technical-closure-audit-2026-06-03.md
content/captain-ether/roles/qa/reports/sprint-ce-0189d-answer-log-matcher-noise-review-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0189e-director-closure-decision-2026-06-03.md
content/captain-ether/roles/gamification-designer/reports/sprint-ce-0190-gamification-v1-design-spec-2026-06-03.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0191a-main-course-runtime-finalization-2026-06-04.md
content/captain-ether/roles/qa/reports/sprint-ce-0191b-authenticated-watch-smoke-reattempt-2026-06-04.md
content/captain-ether/roles/ux-hud-designer/reports/sprint-ce-0191-gamification-v1-copy-placement-spec-2026-06-04.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0192-gamification-v1-progression-data-contract-2026-06-04.md
content/captain-ether/roles/qa/reports/sprint-ce-0191c-authenticated-user-session-log-2026-06-04.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0193-ceo-session-findings-and-agent-roster-2026-06-04.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0194-agent-wave-1-launch-and-acceptance-2026-06-04.md
content/captain-ether/roles/progression-algorithm-architect/reports/sprint-ce-0194f-progression-growth-learning-filter-spec-2026-06-04.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0194f-progression-algorithm-acceptance-2026-06-04.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0195-implementation-backlog-from-agent-reports-2026-06-04.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0196-big-implementation-sprint-plan-2026-06-06.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0196a-pre-code-inspection-baseline-qa-2026-06-06.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0196b-first-run-funnel-implementation-2026-06-06.md
content/captain-ether/roles/director-engineer/reports/sprint-ce-0196c-active-watch-hud-implementation-2026-06-06.md
content/captain-ether/roles/onboarding-flow-architect/reports/sprint-ce-0194a-first-launch-funnel-spec-2026-06-04.md
content/captain-ether/roles/watch-hud-interaction-designer/reports/sprint-ce-0194b-watch-hud-interaction-spec-2026-06-04.md
content/captain-ether/roles/beginner-curriculum-curator/reports/sprint-ce-0194c-beginner-first-session-pool-audit-2026-06-04.md
content/captain-ether/roles/semantic-acceptance-architect/reports/sprint-ce-0194d-semantic-soft-acceptance-taxonomy-2026-06-04.md
content/captain-ether/roles/auth-email-deliverability-steward/reports/sprint-ce-0194e-auth-email-sender-deliverability-decision-2026-06-04.md
```

## 5. Current Next Task

Next task to run if approved production QA access becomes available:

```text
After Director completes production login in the opened browser, record non-secret authenticated smoke observations for Captain Ether.
```

Fallback next task if approved production QA access is still unavailable:

```text
Implement CE-0196D Stage 0 Beginner Routing And Metadata locally.
```

Goal:

```text
CE-0196C active watch HUD implemented locally with QA PASS. Next action is CE-0196D local Stage 0 beginner routing and metadata. Production sync remains a separate explicit task.
```

Expected current local/GitHub/production baseline:

```text
local_github_starter_items=1000
local_github_grammar_patterns=581
local_github_qa_items=1000
local_github_dangerous_pairs=243
production_starter_items=1000
production_grammar_patterns=581
production_qa_items=1000
production_dangerous_pairs=243
production_delta_items=0
draft_backlog_items=0
draft_backlog_grammar_patterns=0
draft_backlog_dangerous_pairs=0
```

Local/GitHub/production now match at 1000, CE-0189A release-readiness QA passed, CE-0189C confirms content/runtime readiness, CE-0189D found matcher noise acceptable, CE-0189E closed the main course content/runtime scope, and CE-0191A reconfirmed content/main-course plus runtime/API/production parity as internally closed to 100% for the current scope. CE-0191B reattempted authenticated watch smoke and reconfirmed the approved-QA-access blocker without finding a content/runtime/parity defect. CE-0190, CE-0191, and CE-0192 completed report-only Gamification v1 design/copy/data-contract work; implementation is not deployed yet. CE-0193 captured CEO play-session findings and created six narrow agent starter folders. CE-0194 launched Wave 1 report-only agents and produced five source-based reports. CE-0194F completed Wave 2 progression architecture. CE-0195 consolidated all agent outputs into a sequenced implementation backlog. CE-0196 prepared the big implementation sprint runbook. CE-0196A pre-code baseline passed. CE-0196B first-run funnel implemented locally and QA-passed. CE-0196C active watch HUD implemented locally and QA-passed. Production remains unchanged.

## 6. Recommended CE-0196 Sprint Execution Plan

CE-0196 is the current big implementation sprint runbook. It supersedes the
older CE-0193A-C gamification-only merge plan for the next engineering move.

Recommended sequence:

```text
1. CE-0196A pre-code inspection and baseline QA.
2. CE-0196B first-run funnel implementation.
3. CE-0196C active watch HUD implementation.
4. CE-0196D Stage 0 beginner routing and metadata.
5. CE-0196E semantic soft acceptance.
6. CE-0196F progression evidence and summary simplification.
7. CE-0196G release-candidate QA and production sync decision.
```

Production sync remains a separate explicit task after local/GitHub release-candidate QA.

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
