# QA Task: TASK-CE-0039 Atlas Production Soak / Parity Verification QA

Date: 2026-05-31

## Role

QA / Captain Ether.

## Working Directory

```text
/home/alexey/WebstormProjects/captain-ether
```

## Activation Condition

Start only after this report exists:

```text
content/captain-ether/roles/director-engineer/reports/task-ce-0038-atlas-production-soak-parity-verification-2026-05-31.md
```

## Mandatory First Read

```text
content/captain-ether/role-command-protocol.md
content/captain-ether/captain-ether-handoff-2026-05-26.md
content/captain-ether/roles/README.md
content/captain-ether/roles/office-manifest.md
content/captain-ether/roles/qa/rules.md
content/captain-ether/roles/qa/handoff.md
content/captain-ether/roles/director-engineer/reports/task-ce-0038-atlas-production-soak-parity-verification-2026-05-31.md
```

## Functional Duty

Review the live parity verification result and verify that the conclusion about
final migration readiness is technically fair.

## Mode

Report-only.

## Allowed Files

You may create or update only:

```text
content/captain-ether/roles/qa/reports/task-ce-0039-atlas-production-soak-parity-verification-qa-2026-05-31.md
```

## Exact Task

Verify:

1. parity result for `progress`, `weak_points`, and `watch_sessions` is
   evidenced;
2. `answer_logs` is correctly classified as not parity-confirmed through live
   JSON shadow;
3. the remaining closure condition is stated precisely;
4. no non-Captain-Ether scope is widened.

## Next Expected Gate

Director decision on the final JSON fallback freeze / migration dossier.
