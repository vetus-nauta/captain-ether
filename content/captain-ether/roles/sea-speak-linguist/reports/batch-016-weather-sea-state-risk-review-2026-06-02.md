# Batch 016 Weather Sea-State Linguist Risk Review

Date: 2026-06-02
Owner: Sea Speak Linguist
Scope: Captain Ether Batch 016 only
Result: ACCEPTED_WITH_PATCHES

## Target

```text
content/captain-ether/batches/batch-016-weather-sea-state-warnings-basics.json
```

## Decision

Batch 016 is accepted for engineering gate after targeted terminology and
minimal-pair patches.

```text
status=linguist_reviewed
items=25
grammar_patterns=10
dangerous_pairs=6
should_accept=37
should_reject=76
danger_must_accept=16
danger_must_reject=32
```

## Patches Applied

1. Removed semantic duplicate of existing starter expression:

```text
removed: expr_safety_navigational_warning_001 / navigational warning
reason: existing starter already has expr_safety_navigation_warning_001 / navigation warning
```

2. Replaced it with a more specific navigational-hazard expression:

```text
added: expr_safety_floating_debris_001 / floating debris
rejects: debris on deck, clear fairway, traffic information
```

3. Expanded Securite weather-warning acceptance safely:

```text
phrase_safety_securite_gale_area_alpha_001
added accepted/should_accept: sécurité gale warning in area Alpha
added must-reject: Mayday gale warning in area Alpha
```

4. Updated the related dangerous-pair group to cover:

```text
floating debris / fairway debris / clear fairway / traffic information
thunderstorm avoid / enter
Securite / Pan-Pan / Mayday
active gale warning / cancelled warning / fog warning
```

## Review Findings

Accepted boundaries:

```text
Securite / Pan-Pan / Mayday
active warning / cancelled warning
gale / squall / fog / thunderstorm / swell
visibility less than one mile / more than one mile
visibility / distance / depth
caution / full speed
sound signal required / not required
heavy swell / heavy traffic / shallow water
keep clear / proceed / enter area
floating debris / debris on deck / clear fairway / traffic information
fairway debris / clear fairway / debris on deck
area Bravo / area Alpha
```

## Checks

```text
Validator with batch: PASS with known starter WARN (9)
Batch-specific warnings: 0
Collision preflight: PASS
Targeted matcher: PASS linguist_batch016_targeted cases=18
API smoke: PASS captain-ether-api-smoke checks=334
Secret scan on changed files: PASS
Diff whitespace check: PASS
```

## Scope Preserved

No playable `starter.json`, accept/reject registry, matcher, API/runtime,
UI/assets, Atlas, auth, router, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, player identity data, WebStorm DB
console, or WebStorm datasource was changed.

## Next Gate

Open `TASK-CE-0110 Batch 016 Engineering Gate`.
