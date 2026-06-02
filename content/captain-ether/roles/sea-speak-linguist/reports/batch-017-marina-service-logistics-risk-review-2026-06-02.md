# Batch 017 Marina Service Logistics Linguist Risk Review

Date: 2026-06-02
Owner: Sea Speak Linguist
Scope: Captain Ether Batch 017 only
Result: ACCEPTED_WITH_PATCHES

## Target

```text
content/captain-ether/batches/batch-017-marina-service-logistics-basics.json
```

## Decision

Batch 017 is accepted for engineering gate after a targeted terminology patch
that keeps marina-service completion distinct from generic service, repair, and
cancellation states.

```text
status=linguist_reviewed
items=25
grammar_patterns=10
dangerous_pairs=6
should_accept=42
should_reject=77
danger_must_accept=19
danger_must_reject=38
```

## Patches Applied

1. Narrowed the ambiguous completion expression:

```text
expr_marina_service_complete_001
old target_text: service complete
new target_text: marina service complete
new rejects include: service complete, repair complete, service required, service cancelled
```

2. Narrowed the related return-to-berth phrase:

```text
phrase_marina_service_complete_return_berth_001
old target_text: Service complete, return to assigned berth.
new target_text: Marina service complete, return to assigned berth.
new rejects include: Service complete return to assigned berth, Repair complete return to assigned berth
```

3. Updated the grammar-pattern identifier and references:

```text
old grammar id: service_complete_return_assigned_berth
new grammar id: marina_service_complete_return_assigned_berth
```

4. Expanded the dangerous-pair group to preserve boundaries between:

```text
marina service complete / service required / service cancelled / generic service complete / repair complete
assigned berth / fuel berth
```

## Review Findings

Accepted boundaries:

```text
service pontoon / waiting pontoon / fuel berth / visitor berth
pump-out station / fuel station / bilge pump / water station
payment office / marina control / port control / customs office
repair berth / visitor berth / fuel berth / onboard repair underway
fuel berth occupied / available / clear
shore power available / unavailable / no shore power / power failure
water hose / fuel hose / shore power
wait / proceed / depart
stand by outside / proceed inside
payment sequence: after payment / before payment
channel one two / channel one six
repair berth time 1600 / 1500
pump-out time 1500 / 1600
starboard side / port side
marina service complete / generic service complete / service required / service cancelled / repair complete
```

## Checks

```text
Validator with batch: PASS with known starter WARN (9)
Batch-specific warnings: 0
Collision preflight: PASS
Targeted matcher: PASS linguist_batch017_targeted cases=16
API smoke: PASS captain-ether-api-smoke checks=334
Secret scan on changed files: PASS
Diff whitespace check: PASS
```

## Scope Preserved

No playable `starter.json`, accept/reject registry, matcher, API/runtime,
UI/assets, Atlas, auth, router, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, player identity data, WebStorm DB
console, or WebStorm datasource was changed.

## Next Gate

Open `TASK-CE-0117 Batch 017 Engineering Gate`.
