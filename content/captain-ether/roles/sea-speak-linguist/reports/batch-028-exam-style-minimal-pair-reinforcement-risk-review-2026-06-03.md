# Batch 028 Exam-Style Minimal-Pair Reinforcement Risk Review

Date: 2026-06-03
Task: `TASK-CE-0184`
Owner: Sea Speak Linguist / Director-Engineer
Scope: Captain Ether Batch 028 draft review only
Status: PASS / READY_FOR_ACCEPTANCE_QA

## Reviewed File

```text
content/captain-ether/batches/batch-028-exam-style-minimal-pair-reinforcement.json
```

## Review Summary

```text
items=30
word=0
short_expression=12
phrase=18
beginner=9
intermediate=10
advanced=11
grammar_patterns=30
dangerous_minimal_pairs=16
validator=PASS
validator_warnings=0
starter_merge=false
production_deploy=false
```

## Approved Meaning Boundaries

```text
channel one six / channel one three / channel one two / channel one four stay exact
heading zero nine zero / heading two seven zero / course one eight zero stay exact
heading / bearing / course / speed labels stay separate
port / starboard stay separate
bow / quarter / side stay separate
risk of collision / no risk of collision / grounding stay separate
roger / affirmative / negative stay separate
say again / read back / repeat stay separate
over / out message endings stay separate
received / complete / incomplete message status stays strict
cross ahead / pass astern / clear of traffic stay action-specific
```

## Linguist Notes

Batch 028 intentionally uses some exam-style reinforcement phrases that are more
controlled than free conversation, for example:

```text
roger received
affirmative confirmed
message complete out
say again very slowly
```

These are acceptable for this batch because the purpose is minimal-pair and
must-stay-wrong regression practice. The phrases should not be treated as a new
conversational style guide; they are scoped to review drills.

## Matcher Risk Review

The current matcher accepted all target text and should-accept examples, and
rejected all should-reject and dangerous-pair must-reject examples.

No matcher implementation change is requested by this gate.

## Engineering Gate Checks

```text
batch_validator=PASS
runs=120
batch_target_text=30
batch_should_accept=30
batch_should_reject=90
batch_danger_must_accept=27
batch_danger_must_reject=81
id_collisions_with_starter=0
id_collisions_with_qa=0
target_collisions_with_starter=0
pattern_id_collisions_with_starter=0
pattern_text_collisions_with_starter=0
dangerous_pair_name_collisions_with_qa=0
duplicate_batch_ids=0
duplicate_batch_targets=0
duplicate_batch_pattern_ids=0
duplicate_batch_pair_names=0
accepted_answer_duplicates=0
own_reject_risks=0
```

## Result

```text
PASS / READY_FOR_ACCEPTANCE_QA
next_task=CE-0185 Batch 028 Acceptance QA / Merge Decision
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, WebStorm datasource, or
foreign database was changed.
