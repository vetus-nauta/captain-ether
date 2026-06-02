# CE-SPRINT-0103 Batch 015 Engineering Gate

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether only
Status: PASS FOR QA ACCEPTANCE

## Batch State

```text
status=linguist_reviewed
items=25
grammar_patterns=10
dangerous_pairs=6
should_accept=44
should_reject=79
danger_must_accept=20
danger_must_reject=42
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
intermediate=13
advanced=10
```

Module count:

```text
sar_authority=2
survivor_status=3
distress_signals=1
rescue_units=5
distress_relay=2
search_position=3
search_area=3
contact_status=3
evacuation_preparation=2
sar_watch=1
```

## Checks

```text
Structural preflight: PASS
Duplicate batch item ids: none
Duplicate batch target_text: none
Starter item id collisions: none
Starter target_text collisions: none
Starter grammar_pattern collisions: none
Item grammar_pattern references: PASS
Validator: PASS with known starter WARN (9)
API smoke: PASS captain-ether-api-smoke checks=334
JS syntax guard: PASS
Targeted matcher: PASS engineering_batch015_targeted cases=20
Secret scan on changed files: PASS
```

## Engineering Decision

Batch 015 passes engineering gate and may move to QA acceptance.

No additional engineering content patch was required after the Sea Speak Linguist
patch. The key `last known position / last reported position` strict boundary is
executable in matcher regression cases.

This does not approve merge into `starter.json` and does not approve production
deploy. Merge requires QA acceptance first.

## QA Focus For Next Sprint

QA must explicitly verify these high-risk boundaries:

```text
last known position -> accept
last reported position -> reject for last-known-position item
Report last known position of vessel in distress. -> accept
Report last reported position of vessel in distress -> reject
Search area north of last known position. -> accept
Search area north of last reported position -> reject
Debris sighted near last known position. -> accept
Debris sighted near last reported position -> reject
Mayday relay received -> accept
Pan-Pan relay received -> reject
Mayday relay received, unable to assist. -> accept
Mayday relay received able to assist -> reject
coastguard / VTS / port control boundary
rescue boat / rescue helicopter / liferaft / pilot boat / tug boundary
SAR traffic channel one six / channel seven two boundary
rescue boat starboard / port side boundary
```

## Scope Preserved

No playable `starter.json`, accept/reject regression outside the batch, matcher,
API/runtime, UI, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, or WebStorm datasource
was changed.
