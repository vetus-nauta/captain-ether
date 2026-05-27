# Start-Watch Branch Filter Implementation

Date: 2026-05-27
Role: Director-Engineer / Captain Ether
Task: TASK-CE-IMPL-START-WATCH-BRANCH-FILTER-0001
Mode: implementation

## Result

PASS for the scoped hidden/internal Beta 1.1 `start-watch` branch-filter
implementation.

Changed file:

- `public/api/captain-ether/start-watch.php`

## Implemented Contract

`start-watch.php` now supports the additive hidden/internal request fields:

- `mode`
- `branch`
- `module`

Supported behavior:

- absent `mode`, `branch`, and `module` preserves the mixed Beta 1.0 watch path;
- absent `mode` with stray `branch` or `module` behaves as mixed and ignores
  those filters;
- `mode: "mixed"` ignores `branch` and `module`;
- invalid present `mode`, including empty or non-string mode values, returns
  `invalid_watch_mode` before session/progress mutation;
- `mode: "focused_branch"` requires a valid taxonomy branch;
- missing focused branch returns `missing_branch`;
- unknown or non-string focused branch returns `invalid_branch`;
- focused branch success/reject follows the accepted contract fixtures;
- underfilled or unavailable focused branch requests return
  `branch_watch_unavailable` with no mixed fallback;
- `mode: "focused_module"` returns `focused_module_unavailable` before
  session/progress mutation;
- successful question records store only `index`, `item_id`, and `level`;
- player-facing `current` question payload remains routed through
  `visible_question`, which does not expose `branch` or `module`.

## Fixture Behavior

Focused branch availability follows the accepted hidden/internal fixture table:

- `core_radio`: beginner/intermediate/advanced success;
- `marina_harbour`: beginner/intermediate/advanced success;
- `navigation_reports`: beginner/intermediate/advanced success;
- `safety_securite`: beginner reject, intermediate/advanced success;
- `traffic_collision`, `urgency_panpan`, `distress_mayday`,
  `onboard_operations`, `vts_port_control`, `review_minimal_pairs`: reject for
  all levels.

Focused branch selection keeps:

- existing watch lengths: beginner `12`, intermediate `16`, advanced `20`;
- selected-branch weak priority inside the current weak quota;
- selected-branch focus quota before review fill;
- cross-branch weak/review items only inside the review quota;
- final progressive order: `word -> short_expression -> phrase`.

## Mutation Safety

Controlled errors happen before `watch_sessions` or `progress` writes.

The underfilled focused-branch check reads content and weak-point state, then
returns before session/progress mutation if the selected branch cannot produce a
safe hidden/internal watch. The implementation does not write Lost Oars,
answer-log entries, player-visible review artifacts, cookies, sessions, CSRF
values, player email, or player identity data.

## Checks

- `php -l public/api/captain-ether/start-watch.php`: not run; `php` is not
  installed in this shell (`/bin/sh: line 1: php: command not found`).
- `jq empty content/captain-ether/starter.json`: PASS.
- Node read-only branch fixture count check against the accepted fixture table:
  PASS for all listed branch/level combinations.
- Static question payload check in `start-watch.php`: PASS; stored question
  records include only `index`, `item_id`, and `level`.

## Scope Preserved

- `starter.json` not changed.
- Batch JSON not changed.
- Matcher not changed.
- UI files not changed.
- Router/registry not changed.
- Auth/platform not changed.
- Watch Officer not changed.
- Nav Desk not changed.
- Game Director docs not changed.
- Production config not changed.
- Deploy/FTP state not touched.
- Secrets, cookies, sessions, CSRF values, player email, and player identity
  data not touched or printed.

## Next Expected

QA 32-case local smoke for the hidden/internal branch-filter contract.
