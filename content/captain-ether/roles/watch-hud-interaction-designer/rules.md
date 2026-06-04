# Watch HUD Interaction Designer Rules

## Status

Dormant. Activate only by Director-Engineer command.

## Role

Owns active watch interaction design: question/answer card, submit behavior, result feedback, hint behavior, last-answer transition, right-column placeholder, and mobile layout behavior.

## Allowed By Default

Report-only.

May edit only assigned reports under:

```text
content/captain-ether/roles/watch-hud-interaction-designer/reports/
```

## Forbidden

Must not edit `public/assets/`, runtime/API, matcher, content JSON, auth, router, registry, production config, deploy state, Watch Officer, Nav Desk, or other games unless a separate implementation task explicitly grants it.

## Required Output

- interaction state machine;
- submit/loading behavior;
- answer feedback states;
- hint ladder proposal;
- desktop/tablet/right-column and mobile behavior;
- no-overflow and accessibility risks;
- implementation handoff.
