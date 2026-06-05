# CE-SPRINT-0196C Active Watch HUD Implementation

Date: 2026-06-06
Owner: Director-Engineer
Scope: Captain Ether active watch HUD interaction cleanup
Status: IMPLEMENTED_LOCAL / QA_PASS / READY_FOR_CE_0196D

## Decision

CE-0196C is implemented locally.

Result:

```text
IMPLEMENTED_LOCAL
QA_PASS
READY_FOR_CE_0196D_STAGE_0_ROUTING
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

Implemented the active-watch HUD cleanup required before Stage 0 routing and semantic soft acceptance.

## Specific Changes

### Submit State Machine

Added frontend state:

```text
answerBusy
finishBusy
finalResult
```

Behavior:

```text
submit immediately disables answer input, hint, skip, and answer button
answer button shows Checking... while submit-answer is pending
network/API error preserves the typed answer in the input
controls are restored after error according to original hint/skip availability
double-submit is blocked by state guard
finish-watch has Closing watch... state and double-finish guard
```

### Final Answer Hold

Before:

```text
last answer -> submit-answer done=true -> finishWatch immediately -> summary replaces watch
```

After:

```text
last answer -> submit-answer done=true -> final result remains visible in watch card -> View summary button -> finishWatch
```

### Unified Feedback Card

Improved active watch card behavior:

```text
current/final feedback stays inside the same question card
feedback includes You wrote when frontend has submitted answer text
feedback always shows Standard form
final feedback uses Final call complete label
status line uses role="status" aria-live="polite"
watch section exposes aria-busy during submit/finish calls
```

### Visual/Tone Changes

Implemented in CSS:

```text
question prompt reduced from large 2.35rem scale to responsive 1.42-1.92rem range
question text uses readable warm orange token
clean correct feedback uses readable turquoise/teal treatment
wrong feedback uses softer non-alarming red treatment
result blocks support multiple comparison rows
```

### Right Rail / Mobile Policy

Implemented:

```text
desktop/tablet right rail includes neutral Reserved partner space placeholder
placeholder is visually separate from answer/result cards
mobile <=780px hides partner slot during active watch
```

### Hint Presentation

Current API still provides one hint payload. HUD now labels the button as:

```text
Hint 1 of 1
```

This is a UI-compatible first step toward a ladder. True multi-stage hint content remains a later API/content contract.

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

Not in CE-0196C by design:

```text
Stage 0 first-session content routing
voice_role/stage metadata
semantic soft acceptance
progression evidence rules
summary/debrief simplification
production deploy
```

Next slice:

```text
CE-0196D Stage 0 Beginner Routing And Metadata
```

## Final Status

```text
CE_0196C=IMPLEMENTED_LOCAL_QA_PASS
NEXT=CE_0196D_STAGE_0_ROUTING_AND_METADATA
PRODUCTION_SYNC=SEPARATE_TASK_ONLY
```
