# Batch 020 Safety Equipment Deck Operations Vocabulary Linguist Risk Review

Date: 2026-06-03
Owner: Sea Speak Linguist
Scope: Captain Ether Batch 020 only
Result: APPROVED_FOR_ENGINEERING_GATE

## Target

```text
content/captain-ether/batches/batch-020-safety-equipment-deck-operations-vocabulary.json
```

## Decision

Batch 020 is accepted for engineering gate.

```text
status=linguist_reviewed
items=50
grammar_patterns=47
dangerous_pairs=13
should_accept=98
should_reject=150
```

## Review Findings

Accepted boundaries:

```text
terminology identity preserved
command/action polarity preserved
side/channel/number/location boundaries preserved where present
negative safety and medical status boundaries preserved where present
reject examples align with current matcher behavior
```

No new text patch was required during this review. Earlier matcher-sensitive
reject examples in the draft backlog had already been adjusted before this
review gate so that validator behavior matches the documented dangerous pairs.

## Checks

```text
Validator with batch: PASS with known starter WARN (9)
Batch-specific warnings: 0
Collision preflight: PASS
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

Engineering gate for Batch 020 or combined Batch 019-023 gate.
