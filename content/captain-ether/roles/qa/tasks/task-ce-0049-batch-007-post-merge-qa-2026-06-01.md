# TASK-CE-0049 Batch 007 Post-Merge QA

Date: 2026-06-01
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: DONE

## Target

- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-007-traffic-collision-basics.json`

## Source Sprint

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0048-batch-007-merge-preparation-2026-06-01.md
```

## Required Focus

- Batch 007 status is `merged`.
- All `50` Batch 007 items exist in playable `starter.json`.
- All `50` Batch 007 items exist in accept/reject regression.
- Playable `starter.json` contains no `qa_notes`.
- Traffic/collision dangerous pairs are represented in batch and regression.
- Full Captain Ether validator passes with Batch 007 loaded as merged batch.
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
