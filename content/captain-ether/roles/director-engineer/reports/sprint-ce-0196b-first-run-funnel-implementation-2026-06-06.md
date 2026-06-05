# CE-SPRINT-0196B First-Run Funnel Implementation

Date: 2026-06-06
Owner: Director-Engineer
Scope: Captain Ether first-run funnel cleanup
Status: IMPLEMENTED_LOCAL / QA_PASS / READY_FOR_CE_0196C

## Decision

CE-0196B is implemented locally.

Result:

```text
IMPLEMENTED_LOCAL
QA_PASS
READY_FOR_CE_0196C_ACTIVE_WATCH_HUD
PRODUCTION_UNCHANGED
```

## Scope Verification

Changed files:

```text
public/assets/app.js
public/assets/app.css
```

Unchanged by this slice:

```text
public/api/captain-ether/*
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
public/api/games/registry.php
public/api/auth/*
production config
SMTP/DNS/secrets
other games
```

Production deploy:

```text
production_deploy=false
```

## Implementation Summary

Implemented a dedicated Captain Ether first-run route state.

Before:

```text
Captain Ether route -> login if anonymous -> equal Beginner / Intermediate / Advanced cards if logged in
```

After:

```text
Captain Ether route -> guided first-watch screen
anonymous primary CTA -> login with first-watch intent -> successful code starts beginner watch
logged-in primary CTA -> starts beginner watch
intermediate/advanced -> hidden secondary disclosure, not first decision
```

## Specific Changes

### First-Run Screen

Added `renderCaptainFirstRun()` in `public/assets/app.js`.

Behavior:

```text
single primary first-watch CTA
Beginner short watch is the recommended first action
Other watches are secondary behind Show other levels
desktop layout uses hero + explanation panel
mobile layout collapses to one column
```

### Auth Intent Preservation

Updated `renderLogin(options = {})`.

Behavior:

```text
login can receive title/copy/afterLogin
first-watch login uses Captain Ether-specific copy
after successful email-code verification, pending action runs instead of dumping user into generic route
```

For the main first-watch CTA:

```text
afterLogin -> startWatch('beginner', { mode: 'mixed' })
```

### Accessibility/Status Improvements

Added:

```text
auth status line role="status" aria-live="polite"
first-run status line role="status" aria-live="polite"
OTP/code input autocomplete="one-time-code"
secondary level toggle aria-expanded
```

### CSS Layout

Added first-run styles in `public/assets/app.css`:

```text
.captain-first-run
.captain-first-run__hero
.captain-first-run__side
.first-watch-card
.first-run-steps
.first-run-secondary
.captain-levels--secondary
```

Responsive behavior:

```text
<=780px first-run becomes one column
<=560px secondary level grid becomes one column
```

## QA Performed

### JS Parse

Command:

```sh
node --check public/assets/app.js
```

Result:

```text
PASS
```

### Diff Check

Command:

```sh
git diff --check
```

Result:

```text
PASS
```

### Validator

Command:

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --runs=30
```

Result:

```text
PASS
starter_items=1000
grammar_patterns=581
qa_items=1000
dangerous_pairs=243
watch_selection_bad_runs=0
```

### API Smoke

Command:

```sh
CAPTAIN_ETHER_PHP=$HOME/.local/php-codex/bin/php \
  $HOME/.local/php-codex/bin/php content/captain-ether/tools/smoke-start-watch-api.php
```

Result:

```text
PASS captain-ether-api-smoke checks=334
```

## Known Remaining Work

Not in CE-0196B by design:

```text
active watch submit state machine
unified question/answer/feedback card
final answer hold before summary
Stage 0 content routing
semantic soft acceptance
progression evidence rules
summary/debrief simplification
production deploy
```

Next slice:

```text
CE-0196C Active Watch HUD Implementation
```

## Final Status

```text
CE_0196B=IMPLEMENTED_LOCAL_QA_PASS
NEXT=CE_0196C_ACTIVE_WATCH_HUD_IMPLEMENTATION
PRODUCTION_SYNC=SEPARATE_TASK_ONLY
```
