# TASK-CE-0054 Batch 008 Merge Preparation

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: DONE

## Goal

Merge Batch 008 VTS / Port Control into local playable Captain Ether content
after linguist review, engineering gate, and QA acceptance.

## Inputs

- Batch:
  `content/captain-ether/batches/batch-008-vts-port-control-basics.json`
- Engineering gate:
  `content/captain-ether/roles/director-engineer/reports/sprint-ce-0052-batch-008-engineering-gate-2026-06-01.md`
- QA acceptance:
  `content/captain-ether/roles/qa/reports/batch-008-vts-port-control-acceptance-qa-2026-06-01.md`

## Allowed Files

- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-008-vts-port-control-basics.json`
- Director-Engineer task/report/handoff files
- QA handoff only for next post-merge QA dispatch

## Forbidden

- Production deploy
- Atlas config or data writes
- Auth/platform changes
- Router/registry changes
- Watch Officer
- Nav Desk
- Runtime API, matcher, or UI code changes
- Secrets, sessions, cookies, CSRF, SMTP, player email, player identity data

## Required Output

- Batch 008 playable items merged into `starter.json` without `qa_notes`.
- Batch 008 QA notes converted into `accept-reject-qa-pairs.json`.
- Batch dangerous-pair coverage represented as executable regression groups.
- Batch status changed to `merged`.
- Full validator and API smoke pass locally.
- Sprint report written before commit.
