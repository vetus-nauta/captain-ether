# TASK-CE-0061 Batch 009 Post-Merge QA

Date: 2026-06-01
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: DONE

## Target

- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-009-onboard-operations-basics.json`

## Source Sprint

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0060-batch-009-merge-preparation-2026-06-01.md
```

## Required Focus

- Batch 009 status is `merged`.
- All `50` Batch 009 items exist in playable `starter.json`.
- All `50` Batch 009 items exist in accept/reject regression.
- Playable `starter.json` contains no Batch 009 `qa_notes`.
- Onboard Operations dangerous pairs are represented in batch and regression.
- Full Captain Ether validator passes with Batch 009 loaded as merged batch.
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
