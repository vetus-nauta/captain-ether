# Batch 028 Exam-Style Minimal-Pair Reinforcement Card

Date: 2026-06-03
Task: `TASK-CE-0183`
Owner: Content Producer / Director-Engineer
Scope: Captain Ether only
Status: DRAFT READY FOR LINGUIST / ENGINEERING GATE

## Batch File

```text
content/captain-ether/batches/batch-028-exam-style-minimal-pair-reinforcement.json
```

## Content Summary

```text
batch_id=batch-028-exam-style-minimal-pair-reinforcement
status=draft
branch=review_minimal_pairs
items=30
word=0
short_expression=12
phrase=18
beginner=9
intermediate=10
advanced=11
grammar_patterns=30
dangerous_minimal_pairs=16
should_accept=30
should_reject=90
danger_must_accept=27
danger_must_reject=81
```

## Draft Scope

```text
M5 Batch 028: exam-style mixed review and minimal-pair reinforcement
modules=numbers_channels_headings, over_out, roger_affirmative, port_starboard, say_again_repeat, traffic_contrasts
primary_branches=review_minimal_pairs, core_radio, traffic_collision
qa_focus=must-stay-wrong regression coverage, no fuzzy numeric/channel leaks
```

## Draft Corrections Applied

```text
level_mix_guardrail=PASS after correction to beginner 9 / intermediate 10 / advanced 11
removed_target_collisions_with_970_baseline=8
fixed_dangerous_pair_reject_lists_so_own_accepted_answers_are_not_rejected=true
fixed_pattern_id_prefix=bb028_to_b028
```

## Draft Check

```sh
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-028-exam-style-minimal-pair-reinforcement.json --runs=100
```

Result:

```text
PASS
warnings=0
batch_items=30
batch_grammar_patterns=30
batch_dangerous_pairs=16
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
batch_duplicate_ids=0
batch_duplicate_targets=0
batch_duplicate_pattern_ids=0
```

## Next Gate Focus

```text
1. Verify channel numbers and heading/course numbers stay exact.
2. Verify port/starboard and bow/quarter/side contrasts stay strict.
3. Verify roger/affirmative remain separate.
4. Verify say again/read back/repeat remain separate.
5. Verify over/out message endings remain separate.
6. Verify traffic crossing, passing astern/ahead, and clear-of-traffic status stay strict.
```

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer, Nav Desk,
production config, deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP,
player email, player identity data, WebStorm DB console, or WebStorm datasource
was changed.
