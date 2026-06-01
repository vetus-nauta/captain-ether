# TASK-CE-0081 Local PHP Filter Runtime Fix

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether local runtime only
Status: DONE

## Objective

Clear the local auth parity blocker found in `CE-SPRINT-0080` by making the
local PHP runtime load the standard `filter` extension required by
`filter_var()`.

## Work Performed

Built the PHP `8.5.6` `ext/filter` shared extension against the existing local
PHP binary at:

```text
/home/alexey/.local/php-codex/bin/php
```

Installed:

```text
/home/alexey/.local/php-codex/lib/php/extensions/no-debug-non-zts-20250925/filter.so
/home/alexey/.local/php-codex/lib/php.ini
```

The new `php.ini` contains only:

```text
extension=filter.so
```

## Boundaries

No Captain Ether code, playable content, Atlas configuration/data, production
deployment, auth/platform implementation, Watch Officer, Nav Desk, router, or
registry implementation was changed.
