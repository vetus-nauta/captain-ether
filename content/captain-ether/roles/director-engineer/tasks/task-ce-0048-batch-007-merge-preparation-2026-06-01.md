# TASK-CE-0048 Batch 007 Merge Preparation

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: DONE

## Goal

Merge Batch 007 Traffic / Collision into local playable Captain Ether content
after linguist review, engineering gate, and QA acceptance.

## Inputs

- Batch:
  `content/captain-ether/batches/batch-007-traffic-collision-basics.json`
- Engineering gate:
  `content/captain-ether/roles/director-engineer/reports/sprint-ce-0046-batch-007-engineering-gate-2026-06-01.md`
- QA acceptance:
  `content/captain-ether/roles/qa/reports/batch-007-traffic-collision-acceptance-qa-2026-06-01.md`

## Allowed Files

- `content/captain-ether/starter.json`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-007-traffic-collision-basics.json`
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

- Batch 007 playable items merged into `starter.json` without `qa_notes`.
- Batch 007 QA notes converted into `accept-reject-qa-pairs.json`.
- Batch dangerous-pair coverage represented as executable regression groups.
- Batch status changed to `merged`.
- Full validator and API smoke pass locally.
- Sprint report written before commit.
