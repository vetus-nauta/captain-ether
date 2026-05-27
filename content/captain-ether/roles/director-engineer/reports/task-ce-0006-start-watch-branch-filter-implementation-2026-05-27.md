# TASK-CE-0006 Start-Watch Branch Filter Implementation

Date: 2026-05-27
Role: Director Ether / Captain Ether
Mode: local hidden/internal implementation

## Status

Implemented with verification blocker.

The additive hidden/internal branch-filter contract was implemented in
`start-watch.php`, but PHP is not available in this local shell, so PHP syntax
and runtime validation could not be executed here.

## Files Changed

- `public/api/captain-ether/start-watch.php`

## Implemented Behavior

Default mixed behavior:

- no `mode` keeps current mixed behavior;
- no `mode` with stray `branch` or `module` keeps current mixed behavior;
- `mode: mixed` ignores `branch` and `module`;
- watch lengths remain `12/16/20`;
- final order still uses `word -> short_expression -> phrase`;
- question/session records do not include `branch` or `module`.

Focused branch behavior:

- `mode: focused_branch` requires a valid branch;
- invalid or missing branch returns a controlled error before session/progress
  mutation;
- first hidden/internal success fixtures:
  - `core_radio`: beginner/intermediate/advanced;
  - `marina_harbour`: beginner/intermediate/advanced;
  - `navigation_reports`: beginner/intermediate/advanced;
  - `safety_securite`: intermediate/advanced only;
- unavailable or underfilled focused requests return
  `branch_watch_unavailable` before session/progress mutation.

Focused module behavior:

- `mode: focused_module` returns `focused_module_unavailable`;
- no session/progress mutation is performed.

Safety behavior:

- invalid `mode` returns `invalid_watch_mode`;
- error responses use controlled error keys and do not echo raw input;
- hard reject paths run before `watch_sessions` or `progress` storage writes;
- branch/module data remains out of player-facing question payloads.

## Checks Performed

PASS:

- Node static symbol check confirmed required branch-filter symbols and error
  keys are present.
- Node data fixture check confirmed current hidden/internal success/reject
  expectations are satisfiable from `starter.json`.
- Node static payload check confirmed `branch` and `module` are not added to
  the question records created by `start-watch.php`.
- Manual code review confirmed `storage_mutate('watch_sessions', ...)` and
  `storage_mutate('progress', ...)` occur after invalid/unavailable filter
  checks.

Blocked:

```text
php -l public/api/captain-ether/start-watch.php
```

Output:

```text
/bin/sh: line 1: php: command not found
```

Not run for the same reason:

```text
php content/captain-ether/tools/validate-captain-ether.php
```

## Required Next Gate

QA must run the accepted 32-case local smoke matrix in an environment with PHP
available before Director Ether accepts this as implementation PASS.

At minimum, QA should verify:

- mixed baseline remains unchanged for all three levels;
- invalid focused requests do not create sessions or mutate progress;
- focused branch success/reject fixtures match the contract;
- `focused_module` is unavailable and mutation-free;
- player-facing payload privacy is preserved;
- `submit-answer`, `finish-watch`, `progress`, Lost Oars, and answer-log remain
  compatible;
- matcher regression and dangerous minimal pairs remain clean.

## Scope Preserved

- UI not changed.
- `starter.json` not changed.
- batch JSON not changed.
- matcher not changed.
- router/registry not changed.
- auth/platform not changed.
- Watch Officer not changed.
- Nav Desk not changed.
- Game Director docs not changed.
- production config and deploy/FTP state not touched.
- secrets and private config not touched.
