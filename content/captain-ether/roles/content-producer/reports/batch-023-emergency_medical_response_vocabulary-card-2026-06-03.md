# Batch 023 Emergency Medical Response Vocabulary Card

Date: 2026-06-03
Task: `TASK-CE-0137`
Owner: Content Producer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST REVIEW

## Batch File

```text
content/captain-ether/batches/batch-023-emergency-medical-response-vocabulary.json
```

## Content Summary

```text
batch_id=batch-023-emergency-medical-response-vocabulary
status=draft
branch=emergency_medical_response
items=30
word=10
short_expression=10
phrase=10
grammar_patterns=30
dangerous_minimal_pairs=6
should_accept=40
should_reject=90
```

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-023-emergency-medical-response-vocabulary.json
```

Result: PASS with known starter WARN (9), no new batch warnings.

## Scope Preserved

No playable starter.json, accept/reject regression registry, matcher, API/runtime, UI, Atlas, auth, router, registry, Watch Officer, Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or player identity data was changed.
