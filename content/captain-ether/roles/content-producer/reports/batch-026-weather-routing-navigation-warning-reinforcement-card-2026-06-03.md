# Batch 026 Weather-Routing Navigation-Warning Reinforcement Card

Date: 2026-06-03
Task: `TASK-CE-0169`
Owner: Content Producer / Director-Engineer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST / ENGINEERING GATE

## Batch File

```text
content/captain-ether/batches/batch-026-weather-routing-navigation-warning-reinforcement.json
```

## Content Summary

```text
batch_id=batch-026-weather-routing-navigation-warning-reinforcement
status=draft
branch=safety_securite
items=35
word=2
short_expression=10
phrase=23
beginner=5
intermediate=17
advanced=13
grammar_patterns=35
dangerous_minimal_pairs=8
should_accept=35
should_reject=105
danger_must_accept=35
danger_must_reject=70
```

## Draft Scope

```text
M5 Batch 026: weather-routing and navigation-warning reinforcement
modules=route_warning, wind_shift, swell_visibility, waypoint_avoidance
primary_branches=safety_securite, navigation_reports
qa_focus=warning/advice/instruction and heading/bearing/distance numbers stay strict
```

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-026-weather-routing-navigation-warning-reinforcement.json --runs=40
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
batch_danger_must_accept=35
batch_danger_must_reject=70
id_collisions_with_starter=0
id_collisions_with_qa=0
target_collisions_with_starter=0
pattern_id_collisions_with_starter=0
pattern_text_collisions_with_starter=0
batch_duplicate_ids=0
batch_duplicate_targets=0
batch_duplicate_pattern_ids=0
accepted_answer_duplicates=0
```

## Next Gate Focus

```text
1. Verify warning/advice/cancelled/in-force status is not collapsed.
2. Verify route alteration side, route/course wording, and heading numbers stay strict.
3. Verify waypoint Alpha/Bravo and avoid/proceed polarity stay exact.
4. Verify wind shift/backing/squall timing and direction are operationally safe.
5. Verify visibility mile values and swell metre/direction values stay exact.
6. Verify lee-shore, shallow-water, deep-water, and alternate-route boundaries stay precise.
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, or WebStorm datasource
was changed.
