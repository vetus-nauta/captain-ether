# Batch 024 Engine-Room Damage-Control Communications Card

Date: 2026-06-03
Task: `TASK-CE-0155`
Owner: Content Producer / Director-Engineer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST / ENGINEERING GATE

## Batch File

```text
content/captain-ether/batches/batch-024-engine-room-damage-control-communications.json
```

## Content Summary

```text
batch_id=batch-024-engine-room-damage-control-communications
status=draft
branch=onboard_operations
items=35
word=5
short_expression=8
phrase=22
beginner=5
intermediate=15
advanced=15
grammar_patterns=35
dangerous_minimal_pairs=8
should_accept=35
should_reject=105
danger_must_accept=38
danger_must_reject=76
```

## Draft Scope

```text
M5 Batch 024: engine-room and damage-control communications
modules=machinery_status, flooding_control, fire_response, steering_failure, power_failure, damage_report_readback
primary_branches=onboard_operations, urgency_panpan, distress_mayday
```

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-024-engine-room-damage-control-communications.json --runs=30
```

Result:

```text
PASS
warnings=0
batch_items=35
batch_grammar_patterns=35
batch_dangerous_pairs=8
batch_target_text=35
batch_should_accept=35
batch_should_reject=105
batch_danger_must_accept=38
batch_danger_must_reject=76
```

## Next Gate Focus

```text
1. Verify engine-room vs bridge/deck/radio-room boundaries.
2. Verify steering/propulsion/engine/radio failures stay separate.
3. Verify bilge/fuel/fire pump terms do not collapse.
4. Verify Pan-Pan vs Mayday escalation is justified per item.
5. Verify flooding/fire/fuel-leak status polarity is not over-permissive.
6. Decide whether branch/module values are acceptable before acceptance QA.
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, or WebStorm datasource
was changed.
