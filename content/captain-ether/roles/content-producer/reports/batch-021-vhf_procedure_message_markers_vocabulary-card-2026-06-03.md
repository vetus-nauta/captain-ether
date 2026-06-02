# Batch 021 VHF Procedure Message Markers Vocabulary Card

Date: 2026-06-03
Task: `TASK-CE-0133`
Owner: Content Producer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST REVIEW

## Batch File

```text
content/captain-ether/batches/batch-021-vhf-procedure-message-markers-vocabulary.json
```

## Content Summary

```text
batch_id=batch-021-vhf-procedure-message-markers-vocabulary
status=draft
branch=vhf_procedure_message_markers
items=35
word=10
short_expression=10
phrase=15
grammar_patterns=35
dangerous_minimal_pairs=7
should_accept=50
should_reject=105
```

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-021-vhf-procedure-message-markers-vocabulary.json
```

Result: PASS with known starter WARN (9), no new batch warnings.

## Scope Preserved

No playable starter.json, accept/reject regression registry, matcher, API/runtime, UI, Atlas, auth, router, registry, Watch Officer, Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, or player identity data was changed.
