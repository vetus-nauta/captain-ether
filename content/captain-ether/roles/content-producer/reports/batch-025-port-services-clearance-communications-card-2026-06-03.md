# Batch 025 Port-Services Clearance Communications Card

Date: 2026-06-03
Task: `TASK-CE-0162`
Owner: Content Producer / Director-Engineer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST / ENGINEERING GATE

## Batch File

```text
content/captain-ether/batches/batch-025-port-services-clearance-communications.json
```

## Content Summary

```text
batch_id=batch-025-port-services-clearance-communications
status=draft
branch=vts_port_control
items=35
word=2
short_expression=10
phrase=23
beginner=8
intermediate=22
advanced=5
grammar_patterns=35
dangerous_minimal_pairs=7
should_accept=35
should_reject=105
danger_must_accept=33
danger_must_reject=66
```

## Draft Scope

```text
M5 Batch 025: port-services and clearance communications
modules=clearance_request, customs_immigration, pilot_boarding, port_entry_limits, port_services_after_clearance
primary_branches=vts_port_control, marina_harbour
```

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-025-port-services-clearance-communications.json --runs=40
```

Result:

```text
PASS
warnings=0
batch_items=35
batch_grammar_patterns=35
batch_dangerous_pairs=7
batch_target_text=35
batch_should_accept=35
batch_should_reject=105
batch_danger_must_accept=33
batch_danger_must_reject=66
target_collisions=0
accepted_vs_starter_target_collisions=0
batch_duplicate_targets=0
batch_duplicate_accepted=0
```

## Next Gate Focus

```text
1. Verify inward/outward clearance boundaries.
2. Verify customs/immigration/free-pratique terms are not collapsed.
3. Verify pilot boarding station/time is separate from tug and pilot ladder terms.
4. Verify port-entry limits and quarantine/waiting-area instructions are exact.
5. Verify services after clearance do not override berth/fuel/water/shore-power specificity.
6. Verify channel/time numeric examples remain strict.
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, or WebStorm datasource
was changed.
