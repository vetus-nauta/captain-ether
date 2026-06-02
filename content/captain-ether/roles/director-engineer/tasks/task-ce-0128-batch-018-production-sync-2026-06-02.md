# TASK-CE-0128 Batch 018 Production Sync

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether controlled production sync
Status: DONE / PASS / PRODUCTION_SYNCED

## Activation Condition

Started after:

```text
TASK-CE-0127 Batch 018 Post-Merge QA: DONE / QA PASS
```

## Goal

Synchronize production with the local/GitHub Batch 018 merged M4 baseline and
prove production parity.

## Required Preflight

```text
Local Git clean and GitHub sync: 0 0
Local validator: PASS
Local API smoke: PASS
Production backup created before writes
Production route/API read-only smoke recorded before sync
```

## Required Sync Scope

Expected production content/runtime files only. Do not change Atlas, auth,
secrets, sessions, cookies, CSRF, SMTP, player email, player identity data,
WebStorm DB console, or WebStorm datasource.

## Expected Post-Sync Counts

```text
starter_items=650
grammar_patterns=237
qa_items=650
dangerous_pairs=152
batch_018_status=merged
```

## Required Post-Sync Checks

```text
Production route smoke: PASS
Production API smoke: PASS
Production content counts match local/GitHub
Batch 018 scenario-chain/readback content visible through production content
Registry parity: PASS or documented preserved production-only entries
Atlas ping: PASS if applicable
```

## Required Decision

Return one of:

```text
PASS / PRODUCTION_SYNCED
FAIL / ROLLBACK_OR_FIX_REQUIRED
```

## Deploy Command

Use:

```text
tools/captain-ether-production-deploy.sh
```

Executed:

```text
tools/captain-ether-production-deploy.sh
```

## Result

```text
PASS / PRODUCTION_SYNCED
```

Report:

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0128-batch-018-production-sync-2026-06-02.md
```

Production backup root:

```text
/game.brkovic.ltd/_deploy-backups/captain-ether/20260602T212851Z
```

Final production counts:

```text
prod_starter_items=650
prod_grammar_patterns=237
prod_qa_items=650
prod_dangerous_pairs=152
prod_batch018_items_visible=25/25
prod_batch018_qa_visible=25/25
prod_batch018_grammar_visible=23/23
prod_batch018_dangerous_pairs_visible=6/6
```
