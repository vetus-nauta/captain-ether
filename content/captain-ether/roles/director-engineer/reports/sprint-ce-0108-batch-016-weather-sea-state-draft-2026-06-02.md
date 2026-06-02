# CE-SPRINT-0108 Batch 016 Weather Sea-State Draft

Date: 2026-06-02
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether content batch draft only
Status: DRAFTED / READY_FOR_LINGUIST_REVIEW

## Context

Batch 015 was synced to production and local/GitHub/production were aligned before
this sprint. The next content lane selected from the roadmap is
`safety_securite`, specifically weather, restricted visibility, sea state, and
navigation-warning language.

## Draft Output

```text
content/captain-ether/batches/batch-016-weather-sea-state-warnings-basics.json
```

## Draft Shape

```text
batch_id=batch-016-weather-sea-state-warnings-basics
status=drafted
branch=safety_securite
items=25
grammar_patterns=10
dangerous_pairs=6
target_text=25
should_accept=37
should_reject=75
danger_must_accept=15
danger_must_reject=30
```

Type count:

```text
word=5
short_expression=10
phrase=10
```

## Content Focus

```text
fog
thunderstorm
squall
gale
swell
poor visibility
visibility less than one mile
dense fog
gale warning
squall warning
heavy swell
sea state rough
navigational warning
restricted visibility reporting
keep clear of hazard
Securite weather warnings
sound signal in fog
small craft keep-clear warnings
fairway debris warnings
avoid-area thunderstorm warnings
```

## Checks

```text
Validator with batch: PASS with known starter WARN (9)
Batch-specific warnings: 0
Draft item id collisions with starter: none
Draft target_text collisions with starter: none
Draft grammar_pattern collisions with starter: none
Targeted matcher: PASS draft_batch016_targeted cases=12
API smoke: PASS captain-ether-api-smoke checks=334
Secret scan on new files: PASS
Diff whitespace check: PASS
```

## Important Patch During Draft

Initial draft collided with existing starter item `word_safety_visibility_001 /
visibility`. That draft word item was replaced with
`word_safety_thunderstorm_001 / thunderstorm` before commit.

## Linguist Review Focus

Sea Speak Linguist must verify these boundaries before engineering gate:

```text
Securite / Pan-Pan
active warning / cancelled warning
gale / squall / fog / thunderstorm / swell
visibility less than one mile / more than one mile
visibility / distance / depth
caution / full speed
sound signal required / not required
heavy swell / heavy traffic / shallow water
keep clear / proceed / enter area
navigational warning / traffic information / weather forecast
fairway debris / clear fairway / debris on deck
area Bravo / area Alpha
```

## Scope Preserved

No playable `starter.json`, accept/reject registry, matcher, API/runtime,
UI/assets, Atlas, auth, router, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, player identity data, WebStorm DB
console, or WebStorm datasource was changed.

## Next Gate

Open `TASK-CE-0109 Batch 016 Sea Speak Linguist Review`.
