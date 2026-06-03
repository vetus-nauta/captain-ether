# Batch 027 SAR Casualty-Transfer Reinforcement Risk Review

Date: 2026-06-03
Task: `TASK-CE-0177`
Owner: Sea Speak Linguist / Director-Engineer
Scope: Captain Ether Batch 027 draft review only
Status: PASS / READY_FOR_ACCEPTANCE_QA

## Reviewed File

```text
content/captain-ether/batches/batch-027-sar-casualty-transfer-reinforcement.json
```

## Review Summary

```text
items=35
word=1
short_expression=8
phrase=26
beginner=3
intermediate=13
advanced=19
grammar_patterns=35
dangerous_minimal_pairs=11
validator=PASS
validator_warnings=0
starter_merge=false
production_deploy=false
```

## Correction Applied

The draft contained one technical slug typo in the medical evacuation item id and
pattern id. CE-0177 corrected the slug only; target text, accepted answers, and
QA meaning boundaries stayed unchanged.

```text
old_slug=request_medical_evacuaton
new_slug=request_medical_evacuation
reason=keep draft ids and grammar pattern ids production-grade before acceptance QA
```

## Approved Meaning Boundaries

```text
casualty / survivor / crew / body identity stays strict
casualty count and casualty number wording stays strict
medical evacuation / medical advice / crew evacuation stay separate
casualty transfer / treatment / rescue unit takeover stay separate
helicopter winching / rescue boat / hoist / basket / stretcher terms stay separate
on-scene coordinator assignment / relief / report interval stay separate
OSC role must not become coast station, medical coordinator, or helicopter
relay update / final relay / cancelled relay / completed relay stay separate
ETA, persons count, and position details stay strict
bleeding / conscious / not conscious / do-not-move timing stays strict
```

## Matcher Risk Review

The current matcher accepted all target text and should-accept examples, and
rejected all should-reject and dangerous-pair must-reject examples.

No matcher implementation change is requested by this gate.

## Engineering Gate Checks

```text
batch_validator=PASS
runs=60
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
duplicate_batch_ids=0
duplicate_batch_targets=0
duplicate_batch_pattern_ids=0
```

## Result

```text
PASS / READY_FOR_ACCEPTANCE_QA
next_task=CE-0178 Batch 027 Acceptance QA / Merge Decision
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, WebStorm datasource, or
foreign database was changed.
