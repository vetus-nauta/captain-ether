# TASK-CE-0160 Batch 024 Production Sync Decision

Date: 2026-06-03
Owner: Director-Engineer / QA
Scope: Captain Ether production sync decision only
Status: DONE / CLOSED / PASS / PRODUCTION_SYNCED

## Activation Condition

Started after:

```text
TASK-CE-0159 Batch 024 Post-Merge QA: PASS / READY_FOR_PRODUCTION_SYNC_DECISION
```

## Target

Decide and prepare whether to sync the 865-item local/GitHub Batch 024 baseline
to production.

Current drift:

```text
local_github_starter_items=865
production_starter_items=830
production_delta=-35 items
```

## Required Checks Before Any Deploy

```text
git clean and GitHub sync
full validator
API smoke
production route/API read-only smoke
production deploy scope review
secret scan
diff whitespace check
```

A production deploy must stay inside this task or a direct follow-up production
sync task, and must be followed by production smoke.

## Result

```text
decision=SYNC_TO_PRODUCTION
deploy=PASS
backup_root=/game.brkovic.ltd/_deploy-backups/captain-ether/20260603T082346Z
prod_starter_items=865
prod_grammar_patterns=446
prod_qa_items=865
prod_dangerous_pairs=201
starter_hash_match=PASS
qa_hash_match=PASS
production_http_smoke=PASS
atlas_ping=PASS
production_delta_items=0
next_task=CE-0161 Batch 024 Production Release Readiness QA
```
