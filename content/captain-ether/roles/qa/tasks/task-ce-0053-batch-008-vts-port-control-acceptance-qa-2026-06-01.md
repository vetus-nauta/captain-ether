# TASK-CE-0053 Batch 008 VTS / Port Control Acceptance QA

Date: 2026-06-01
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: DONE

## Target

```text
content/captain-ether/batches/batch-008-vts-port-control-basics.json
```

## Source Gate

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0052-batch-008-engineering-gate-2026-06-01.md
```

## Required Focus

- Batch status and count.
- `target_text` acceptance.
- `should_accept` examples.
- `should_reject` examples.
- Dangerous-pair coverage.
- VTS / Port Control station identity.
- `instruction / advice / information`.
- `request / report`.
- `pilot / tug / tow`.
- `enter port / leave port`.
- `permitted / not permitted`.
- Exact channel numbers.
- `reporting point / anchorage / berth / fairway`.
- `proceed / hold / wait`.
- `inbound / outbound`.
- Scope preservation.

## Forbidden

- Production deploy
- Atlas config or data writes
- Auth/platform
- Router/registry
- Watch Officer
- Nav Desk
- Matcher/API/UI changes
- Secrets, sessions, cookies, CSRF, SMTP, player email, player identity data
