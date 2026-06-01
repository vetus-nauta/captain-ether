# Batch 012 Urgency Equipment Status Card

Date: 2026-06-01
Task: `TASK-CE-0074`
Owner: Content Producer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST REVIEW

## Batch File

```text
content/captain-ether/batches/batch-012-urgency-equipment-status-reinforcement.json
```

## Content Summary

```text
batch_id=batch-012-urgency-equipment-status-reinforcement
status=draft
branch=urgency_panpan
items=30
grammar_patterns=12
dangerous_minimal_pairs=8
should_accept=60
should_reject=90
```

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-012-urgency-equipment-status-reinforcement.json
```

Result:

```text
PASS
Batch status: draft
Batch items: 30
Batch target_text: 30
Batch should_accept: 60
Batch should_reject: 90
Batch danger_must_accept: 22
Batch danger_must_reject: 66
Known starter warnings: WARN (9)
```

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or
player identity data was changed.
