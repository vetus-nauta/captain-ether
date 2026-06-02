# CE-SPRINT-0110 Batch 016 Engineering Gate

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether Batch 016 engineering gate only
Status: PASS FOR QA ACCEPTANCE

## Batch State

```text
batch_id=batch-016-weather-sea-state-warnings-basics
status=linguist_reviewed
items=25
grammar_patterns=10
dangerous_pairs=6
target_text=25
should_accept=37
should_reject=76
danger_must_accept=16
danger_must_reject=32
```

Type count:

```text
word=5
short_expression=10
phrase=10
```

Level count:

```text
beginner=2
intermediate=15
advanced=8
```

Module count:

```text
weather_sea_state=14
restricted_visibility=6
navigation_warning=2
safety_readback=2
hazard_reporting=1
```

## Structural Checks

```text
Duplicate batch item ids: none
Duplicate batch target_text: none
Duplicate batch grammar pattern ids: none
Starter item id collisions: none
Starter target_text collisions: none
Starter grammar_pattern collisions: none
Item grammar_pattern references: PASS
qa_notes completeness: PASS
JSON parse: PASS
```

## Runtime Checks

```text
Validator with batch: PASS with known starter WARN (9)
Targeted matcher: PASS engineering_batch016_targeted cases=25
API smoke: PASS captain-ether-api-smoke checks=334
PHP syntax guard: PASS
JS syntax guard: PASS
Secret scan on checked files: PASS
Diff whitespace check: PASS
```

## Engineering Decision

Batch 016 passes engineering gate and may move to QA acceptance.

This does not approve merge into `starter.json` and does not approve production
deploy. Merge requires QA acceptance first.

## QA Focus For Next Sprint

QA must explicitly verify these high-risk boundaries:

```text
gale -> accept
squall -> reject for gale item
Securite, gale warning in area Alpha. -> accept
sécurité gale warning in area Alpha -> accept
Pan Pan gale warning in area Alpha -> reject
Mayday gale warning in area Alpha -> reject
Securite gale cancelled in area Alpha -> reject
floating debris -> accept
debris on deck -> reject
traffic information -> reject
Visibility less than one mile, navigate with caution. -> accept
Visibility less than 1 mile, navigate with caution -> accept
Visibility more than one mile navigate with caution -> reject
Visibility less than one mile proceed at full speed -> reject
Dense fog, sound signal required. -> accept
Dense fog sound signal not required -> reject
Squall warning, reduce speed. -> accept
Squall warning increase speed -> reject
Heavy swell, small craft keep clear. -> accept
Heavy swell small craft proceed -> reject
Navigational warning, debris in fairway. -> accept
Navigational warning clear fairway -> reject
Thunderstorm in area Bravo, avoid the area. -> accept
Thunderstorm in area Bravo enter the area -> reject
Thunderstorm in area Alpha avoid the area -> reject
```

## Scope Preserved

No playable `starter.json`, accept/reject registry, matcher, API/runtime,
UI/assets, Atlas, auth, router, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, player identity data, WebStorm DB
console, or WebStorm datasource was changed.
