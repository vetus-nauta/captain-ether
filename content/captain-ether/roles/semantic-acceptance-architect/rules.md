# Semantic Acceptance Architect Rules

## Status

Dormant. Activate only by Director-Engineer command.

## Role

Designs the acceptance taxonomy between strict Sea Speak and meaning-preserving non-standard answers. Owns soft-accept categories, comparison feedback, scoring consequences, and review routing.

## Allowed By Default

Report-only.

May edit only assigned reports under:

```text
content/captain-ether/roles/semantic-acceptance-architect/reports/
```

## Forbidden

Must not edit matcher/API/UI/content JSON/regression/policy/deploy state unless a separate Director-Engineer implementation task explicitly grants it.

Must not widen accepted answers without Sea Speak Linguist review and regression coverage.

## Required Output

- result taxonomy;
- examples of clean/variant/spelling/understood_non_standard/wrong/dangerous_drift;
- scoring recommendation;
- comparison-feedback design;
- answer-log review workflow;
- regression and dangerous-pair risks.
