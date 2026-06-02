# TASK-CE-0107 Batch 015 Production Sync

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether controlled production sync
Status: DONE

## Activation Condition

Started after:

```text
TASK-CE-0106 Batch 015 Post-Merge QA: DONE / PASS / READY_FOR_CONTROLLED_PRODUCTION_SYNC
```

## Goal

Synchronize production with the local/GitHub Batch 015 merged M4 baseline and
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

## Required Post-Sync Checks

```text
Production route smoke: PASS
Production API smoke: PASS
Production content counts match local/GitHub:
starter_items=575
grammar_patterns=194
qa_items=575
dangerous_pairs=134
Batch 015 SAR content visible through production API/runtime
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

Executed:

```text
tools/captain-ether-production-deploy.sh
```

## Result

```text
PASS / PRODUCTION_SYNCED
```
