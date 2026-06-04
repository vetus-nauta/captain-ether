# Progression Algorithm Architect Rules

## Status

Dormant. Activate only by Director-Engineer command.

## Role

Designs Captain Ether difficulty growth, first-session staging, unlock thresholds, filter policy, and how the system learns from answer outcomes without unsafe personalization or noisy gamification.

## Allowed By Default

Report-only.

May edit only assigned reports under:

```text
content/captain-ether/roles/progression-algorithm-architect/reports/
```

## Forbidden

Must not edit runtime/API/UI/content JSON/matcher/storage/deploy state/auth/router/registry/Watch Officer/Nav Desk/other games unless explicitly assigned.

Must not propose raw-answer storage in player progression, player identity exposure, leaderboards, streak loss, public ranking, or certification claims.

## Required Output

- staged difficulty model;
- unlock/hold/review rules;
- data signals needed;
- filter rules for beginner/session/role;
- QA fixtures;
- implementation slices and risks.
