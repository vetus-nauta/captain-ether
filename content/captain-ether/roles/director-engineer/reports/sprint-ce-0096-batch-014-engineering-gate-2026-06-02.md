# CE-SPRINT-0096 Batch 014 Engineering Gate

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether only
Status: PASS FOR QA ACCEPTANCE WITH ENGINEERING DE-DUP PATCH

## Batch State

```text
status=linguist_reviewed
items=25
grammar_patterns=11
dangerous_pairs=6
should_accept=45
should_reject=77
danger_must_accept=22
danger_must_reject=44
```

Type count:

```text
word=5
short_expression=9
phrase=11
```

Level count:

```text
beginner=7
intermediate=10
advanced=8
```

Module count:

```text
medical_condition=10
medical_response=3
temporary_repair=11
medical_advice=1
```

## Engineering De-Dup Patch

Preflight found one exact `target_text` collision with already-playable starter
content:

```text
Batch 014 item: phrase_repair_engine_restarted_no_assistance_001
Batch 014 target: Engine restarted, assistance no longer required.
Existing starter item: phrase_urgency_engine_restarted_001
```

The duplicate was replaced with a distinct temporary-repair status:

```text
new item id: phrase_repair_engine_restarted_temporary_holding_001
new grammar pattern: repair_engine_restarted_temporary_holding
new source_text: Двигатель снова запущен, временный ремонт держится.
new target_text: Engine restarted, temporary repair holding.
accepted variant: Engine restarted, temporary repair is holding.
explicit reject: Engine restarted assistance no longer required
```

Reason: Batch 014 should add new medical/repair coverage, not duplicate Batch 012
playable content already present in `starter.json`.

## Checks

```text
Structural preflight: PASS
Duplicate batch item ids: none
Duplicate batch target_text: none
Starter item id collisions: none
Starter target_text collisions: none
Item grammar_pattern references: PASS
Validator: PASS with known starter WARN (9)
API smoke: PASS captain-ether-api-smoke checks=334
JS syntax guard: PASS
Secret scan on changed batch/report files: PASS
```

## Director Decision

Batch 014 passes engineering gate and may move to QA acceptance.

This does not approve merge into `starter.json` and does not approve production
deploy. Merge requires QA acceptance first.

## QA Focus For Next Sprint

QA must explicitly verify the engineering de-dup patch boundaries:

```text
Engine restarted, temporary repair holding. -> accept
Engine restarted, temporary repair is holding. -> accept
Engine restarted assistance no longer required -> reject for patched item
Engine failed assistance required -> reject
Engine restarted rescue required -> reject
```

QA must also preserve the linguist-reviewed boundaries:

```text
bilge pump running / fire pump running
medical advice / medical assistance / medical evacuation / rescue
person conscious / person unconscious / person overboard / person missing
hypothermia / hyperthermia / seasickness / shock
water ingress reduced / water tank reduced / flooding uncontrolled
no immediate danger / immediate danger / Mayday medical situation
```

## Scope Preserved

No playable `starter.json`, accept/reject regression outside the batch, matcher,
API/runtime, UI, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, or WebStorm datasource
was changed.
