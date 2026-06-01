## TASK-CE-0047

Date: 2026-06-01
Owner: QA
Scope: Captain Ether only
Status: Closed

### Source Documents

- `content/captain-ether/role-command-protocol.md`
- `content/captain-ether/roles/README.md`
- `content/captain-ether/roles/office-manifest.md`
- `content/captain-ether/roles/qa/rules.md`
- `content/captain-ether/roles/qa/handoff.md`
- `content/captain-ether/answer-policy.md`
- `content/captain-ether/accept-reject-qa-pairs.json`
- `content/captain-ether/batches/batch-007-traffic-collision-basics.json`
- `content/captain-ether/roles/content-producer/reports/batch-007-traffic-collision-basics-card-2026-06-01.md`
- `content/captain-ether/roles/sea-speak-linguist/reports/batch-007-traffic-collision-risk-review-2026-06-01.md`
- `content/captain-ether/roles/director-engineer/reports/sprint-ce-0046-batch-007-engineering-gate-2026-06-01.md`

### Exact Task

Run report-only QA acceptance review for Batch 007 Traffic / Collision.

### Allowed Files

- `content/captain-ether/roles/qa/reports/batch-007-traffic-collision-acceptance-qa-2026-06-01.md`

### Forbidden Scope

Do not edit content JSON, `starter.json`, matcher, API/runtime, UI, Atlas, auth,
router, registry, Watch Officer, Nav Desk, production config, deploy/FTP state,
secrets, sessions, cookies, CSRF, SMTP, player email, or player identity data.

### Required Output

- PASS/FAIL by block.
- Exact command/check summary.
- Dangerous-pair coverage notes.
- Scope-preserved statement.
- Next expected gate.

### Closure

Status: PASS.
