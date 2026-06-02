# TASK-CE-0093 Batch 013 Production Sync

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether production sync after local M4 Batch 013 merge
Status: DONE

## Activation Condition

Start only after:

```text
TASK-CE-0092 Batch 013 Post-Merge QA: DONE / PASS
GitHub sync: 0 0
production Atlas ping: PASS
```

## Goal

Synchronize production with the local/GitHub 525-item M4 baseline using the
safe narrow production deploy script.

## Allowed Command

```text
tools/captain-ether-production-deploy.sh
```

## Required Checks

```text
pre-deploy production Atlas ping PASS
deploy script FTP round-trip verification PASS
post-deploy route/assets/content/API smoke PASS
post-deploy production Atlas ping PASS
registry still preserves watch_officer
```

## Boundaries

Do not overwrite production `private/config.php`, `content/game-registry.json`,
Atlas driver, Watch Officer, Nav Desk, hub/router, or platform auth.
