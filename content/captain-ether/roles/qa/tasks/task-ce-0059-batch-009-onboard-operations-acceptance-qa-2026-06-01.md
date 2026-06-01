# TASK-CE-0059 Batch 009 Onboard Operations Acceptance QA

Date: 2026-06-01
Owner: QA
Scope: Captain Ether only
Mode: report-only
Status: DONE

## Target

```text
content/captain-ether/batches/batch-009-onboard-operations-basics.json
```

## Source Gate

```text
content/captain-ether/roles/director-engineer/reports/sprint-ce-0058-batch-009-engineering-gate-2026-06-01.md
```

## Required Focus

- Batch status and count.
- `target_text` acceptance.
- `should_accept` examples.
- `should_reject` examples.
- Dangerous-pair coverage.
- Watch handover/takeover.
- Helm order/action-completed.
- Port/starboard helm.
- Anchor/moor/berth.
- Let-go/heave-up anchor.
- Make-fast/let-go lines.
- Station positions.
- Stand-by/standing-by.
- Safety-check/emergency-action.
- Fire/flooding/man-overboard.
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
