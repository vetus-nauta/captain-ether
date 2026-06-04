# Validation Steward Handoff

Date: 2026-05-27

## Current State

Captain Ether local validation was unblocked inside the current WebStorm/Flatpak
shell by building a user-local PHP CLI:

```text
$HOME/.local/php-codex/bin/php
```

Required modules confirmed:

- `json`
- `mbstring`
- `pcre`
- `standard`

Useful commands:

```text
$HOME/.local/php-codex/bin/php -l public/api/captain-ether/start-watch.php
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php
```

Latest known result:

- Captain Ether validator: PASS.
- Captain Ether API smoke: PASS.
- Current 1000-item content/runtime and runtime/API/production parity are
  internally closed.
- CE-0192 Gamification v1 Progression Data Contract is ready for implementation
  planning.

## Active Concerns

- Authenticated production watch smoke is still blocked by approved QA access,
  not by a content/runtime/parity defect.
- Gamification v1 implementation must not store raw answers, prompts, target
  text, player email, player identity, login code, cookie, session, CSRF, token,
  Atlas URI, or private config in progression evidence.
- Branch mastery must use qualitative states only: `new_waters`,
  `getting_familiar`, `holding_watch`, `review_soon`.
- No percentages, leaderboards, streak loss, ranks, demotion, speed bonuses, or
  certification claims are allowed in v1.

## First Useful Task

For CE-0193A implementation planning, prepare validation gates for the
Gamification v1 data contract:

- `validate-captain-ether.php`;
- `smoke-start-watch-api.php`;
- `check-pwa-i18n.mjs`;
- protected API anonymous `401` smoke;
- public payload privacy scan;
- storage evidence scan proving no raw answers/private identity values in
  `gamification_v1`;
- mobile 360px no-overflow check for the new HUD copy.
