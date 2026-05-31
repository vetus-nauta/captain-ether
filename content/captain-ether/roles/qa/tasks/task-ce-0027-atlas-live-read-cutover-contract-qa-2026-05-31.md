# QA Task: TASK-CE-0027 Atlas Live-Read Cutover Contract QA

Date: 2026-05-31

## Role

QA / Captain Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Activation Condition

Start only after these reports exist:

```text
content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-live-read-cutover-slice-b-2026-05-31.md
content/captain-ether/roles/director-engineer/reports/task-ce-0026-atlas-live-read-cutover-contract-2026-05-31.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/captain-ether-handoff-2026-05-26.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/qa/rules.md
content/captain-ether/roles/qa/handoff.md
content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-live-read-cutover-slice-b-2026-05-31.md
content/captain-ether/roles/director-engineer/reports/task-ce-0026-atlas-live-read-cutover-contract-2026-05-31.md
```

## Functional Duty

Review the Captain Ether live-read cutover contract for testability and risk
clarity before any implementation starts.

## Mode

Report-only.

## Allowed Files

You may create or update only:

```text
content/captain-ether/roles/qa/reports/task-ce-0027-atlas-live-read-cutover-contract-qa-2026-05-31.md
```

## Forbidden Scope

Do not edit runtime/API/UI/tool code, content JSON, matcher, auth/platform,
router, registry, Watch Officer, Nav Desk, production config, deploy state,
private config, storage data, sessions, cookies, CSRF, email, secrets, or
Atlas credentials.

## Exact Task

Review whether the live-read cutover contract is testable and sufficiently
bounded.

Must verify:

1. first cutover target is narrow enough;
2. fallback behavior is testable;
3. stale-read and drift scenarios are explicitly testable;
4. rollback can be verified without production-only steps;
5. no auth or player-facing copy widening is hidden in the contract;
6. QA matrix is concrete enough for future implementation review.

## Required Output

Write one technical card with:

- PASS, FAIL, or NEEDS DIRECTOR DECISION;
- PASS/FAIL by contract block;
- missing test cases;
- missing rollback evidence, if any;
- owner route for blockers;
- implementation-readiness decision.

## Next Expected Gate

Director accepts or revises the contract. QA PASS does not approve
implementation or deploy.
