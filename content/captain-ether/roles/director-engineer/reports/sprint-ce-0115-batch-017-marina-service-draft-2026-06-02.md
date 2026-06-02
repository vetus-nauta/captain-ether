# CE-SPRINT-0115 Batch 017 Marina Service Draft

Date: 2026-06-02
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether content batch draft only
Status: DRAFTED / READY_FOR_LINGUIST_REVIEW

## Context

Batch 016 was synced to production and local/GitHub/production were aligned before
this sprint. The next roadmap lane selected is `marina_harbour`, specifically
service logistics beyond the existing basic berth/fuel/water/shore-power request
phrases.

## Draft Output

```text
content/captain-ether/batches/batch-017-marina-service-logistics-basics.json
```

## Draft Shape

```text
batch_id=batch-017-marina-service-logistics-basics
status=drafted
branch=marina_harbour
items=25
grammar_patterns=10
dangerous_pairs=6
target_text=25
should_accept=41
should_reject=75
danger_must_accept=19
danger_must_reject=38
```

Type count:

```text
word=5
short_expression=10
phrase=10
```

## Content Focus

```text
service pontoon
pump-out station
payment office
waiting pontoon
repair berth
fuel berth occupied
shore power available / not available
water hose ready
pump-out unavailable until time
payment office contact channel
repair berth availability
service complete and return to berth
waiting pontoon full / stand by outside
```

## Checks

```text
Validator with batch: PASS with known starter WARN (9)
Batch-specific warnings: 0
Draft item id collisions with starter: none
Draft target_text collisions with starter: none
Draft grammar_pattern collisions with starter: none
Targeted matcher: PASS draft_batch017_final_targeted cases=14
API smoke: PASS captain-ether-api-smoke checks=334
Secret scan on new files: PASS
Diff whitespace check: PASS
```

## Important Patch During Draft

Initial draft had normalized duplicate accepted-answer variants for pump-out and
after-payment phrases. The duplicate `accepted_answers` variants were removed
while keeping the variants in `qa_notes.should_accept`, so matcher behavior is
still covered without batch-specific warnings.

## Linguist Review Focus

Sea Speak Linguist must verify these boundaries before engineering gate:

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
service complete / service required / service cancelled / repair complete
```

## Scope Preserved

No playable `starter.json`, accept/reject registry, matcher, API/runtime,
UI/assets, Atlas, auth, router, production config, deploy/FTP state, secrets,
sessions, cookies, CSRF, SMTP, player email, player identity data, WebStorm DB
console, or WebStorm datasource was changed.

## Next Gate

Open `TASK-CE-0116 Batch 017 Sea Speak Linguist Review`.
