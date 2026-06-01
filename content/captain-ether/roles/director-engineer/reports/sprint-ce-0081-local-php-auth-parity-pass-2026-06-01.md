# CE-SPRINT-0081 Local PHP Auth Parity Pass

Date: 2026-06-01
Owner: Director-Engineer
Execution role: Director-Engineer
Scope: Captain Ether local runtime only
Status: CLOSED / PASS

## Environment Fix

```text
PHP binary: /home/alexey/.local/php-codex/bin/php
PHP version: 8.5.6
Loaded configuration: /home/alexey/.local/php-codex/lib/php.ini
Installed extension: filter.so
filter_var(): available
```

The previous local blocker from `CE-SPRINT-0080` is cleared. The local PHP
runtime now loads the standard `filter` extension without requiring a manual
`-d extension=...` flag.

## Local Auth Parity

Checked through a clean local PHP dev server without manual extension flags:

```text
POST /api/auth/request-code.php: PASS
POST /api/auth/verify-code.php: PASS
GET /api/auth/me.php after login cookie: PASS
POST /api/captain-ether/start-watch.php with CSRF: PASS
Authenticated user role: player
Watch total: 12
First item: word_ahead_001
```

## Regression Checks

```text
PHP lint private/bootstrap.php: PASS
PHP lint public/api/**/*.php: PASS
JS syntax public/assets/app.js: PASS
Validator: PASS with known starter WARN (9)
API smoke: PASS captain-ether-api-smoke checks=334
```

## Current Local Corpus

```text
starter_items=500
grammar_patterns=163
qa_items=500
should_accept=1216
should_reject=1518
dangerous_pairs=116
```

## Director Decision

Captain Ether local runtime is now suitable for full local auth smoke testing
with the existing `$HOME/.local/php-codex/bin/php` binary.

This sprint changed only the local PHP runtime environment and project
documentation. It did not change Captain Ether code, playable content, Atlas,
production, auth/platform implementation, Watch Officer, Nav Desk, router, or
registry implementation.
