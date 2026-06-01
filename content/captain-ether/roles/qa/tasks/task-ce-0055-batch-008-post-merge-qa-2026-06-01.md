# TASK-CE-0055 Batch 008 Post-Merge QA

Date: 2026-06-01
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: DONE

## Target

- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-008-vts-port-control-basics.json`

## Source Sprint

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0054-batch-008-merge-preparation-2026-06-01.md
```

## Required Focus

- Batch 008 status is `merged`.
- All `50` Batch 008 items exist in playable `starter.json`.
- All `50` Batch 008 items exist in accept/reject regression.
- Playable `starter.json` contains no Batch 008 `qa_notes`.
- VTS / port-control dangerous pairs are represented in batch and regression.
- Full Captain Ether validator passes with Batch 008 loaded as merged batch.
- API smoke passes.

## Forbidden

- Production deploy
- Atlas config or data writes
- Auth/platform
- Router/registry
- Watch Officer
- Nav Desk
- Matcher/API/UI changes
- Secrets, sessions, cookies, CSRF, SMTP, player email, player identity data
