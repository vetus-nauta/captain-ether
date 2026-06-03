# Batch 027 SAR Casualty-Transfer Reinforcement Card

Date: 2026-06-03
Task: `TASK-CE-0176`
Owner: Content Producer / Director-Engineer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST / ENGINEERING GATE

## Batch File

```text
content/captain-ether/batches/batch-027-sar-casualty-transfer-reinforcement.json
```

## Content Summary

```text
batch_id=batch-027-sar-casualty-transfer-reinforcement
status=draft
branch=distress_mayday
items=35
word=1
short_expression=8
phrase=26
beginner=3
intermediate=13
advanced=19
grammar_patterns=35
dangerous_minimal_pairs=11
should_accept=35
should_reject=105
danger_must_accept=46
danger_must_reject=92
```

## Draft Scope

```text
M5 Batch 027: SAR coordination and casualty-transfer reinforcement
modules=casualty_transfer, helicopter_winching, on-scene_coordinator, relay_update
primary_branches=distress_mayday, urgency_panpan, emergency_medical_response
qa_focus=distress/urgency/medical/SAR roles and casualty counts stay precise
```

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-027-sar-casualty-transfer-reinforcement.json --runs=40
```

Result:

```text
PASS
warnings=0
batch_items=35
batch_grammar_patterns=35
batch_dangerous_pairs=11
batch_target_text=35
batch_should_accept=35
batch_should_reject=105
batch_danger_must_accept=46
batch_danger_must_reject=92
id_collisions_with_starter=0
id_collisions_with_qa=0
target_collisions_with_starter=0
pattern_id_collisions_with_starter=0
pattern_text_collisions_with_starter=0
batch_duplicate_ids=0
batch_duplicate_targets=0
batch_duplicate_pattern_ids=0
```

## Next Gate Focus

```text
1. Verify casualty counts, casualty numbers, and crew/casualty identity stay exact.
2. Verify transfer/treatment/evacuation wording is not collapsed.
3. Verify helicopter winching, rescue boat transfer, hoist, basket, and stretcher terms stay separate.
4. Verify on-scene coordinator assignment/relief/assumes coordination roles are safe.
5. Verify relay update content, ETA, final/initial status, and completion/cancellation status are strict.
6. Verify medical injury/bleeding/consciousness details are precise.
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, or WebStorm datasource
was changed.
