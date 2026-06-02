# CE-SPRINT-0112 Batch 016 Merge Preparation

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether Batch 016 local merge only
Status: MERGED LOCALLY / PASS

## Merge Notes

- Added `25` Batch 016 items to playable `starter.json`.
- Added `25` regression entries to `accept-reject-qa-pairs.json`.
- Added `6` dangerous-pair groups.
- Added `10` grammar patterns.
- Marked Batch 016 status as `merged`.
- Did not carry `qa_notes` into playable starter items.

## Final Local State

```text
starter_items=600
grammar_patterns=204
qa_items=600
should_accept=1393
should_reject=1825
dangerous_pairs=140
danger_must_accept=424
danger_must_reject=987
```

Type count:

```text
word=120
short_expression=196
phrase=284
```

Level count:

```text
beginner=198
intermediate=279
advanced=123
```

Branch count update:

```text
safety_securite=65
```

## Batch 016 Post-Merge Integrity

```text
Batch status: merged
Batch items present in starter: 25/25
Batch QA items present in registry: 25/25
Batch dangerous pairs present in registry: 6/6
Batch grammar patterns present in starter: 10/10
Batch item ids unique in starter: PASS
qa_notes_in_starter=0
```

The wider starter corpus still has historical duplicate accepted-answer warnings
from earlier content. Batch 016 did not introduce duplicate ids, missing grammar
references, or playable `qa_notes` leakage.

## Checks

```text
Validator: PASS with known starter WARN (9)
API smoke: PASS captain-ether-api-smoke checks=334
JSON parse: PASS jq
PHP syntax guard: PASS
JS syntax guard: PASS
Post-merge targeted matcher: PASS post_merge_batch016_targeted cases=32
Secret scan on changed files: PASS
Diff whitespace check: PASS
```

## Preserved Boundaries

```text
fog -> accept
smoke -> reject for fog
gale -> accept
squall -> reject for gale
swell -> accept
shallow water -> reject for swell
poor visibility -> accept
good visibility -> reject
visibility less than one mile -> accept
visibility more than one mile -> reject
floating debris -> accept
debris on deck -> reject
Securite, gale warning in area Alpha. -> accept
sécurité gale warning in area Alpha -> accept
Pan Pan gale warning in area Alpha -> reject
Mayday gale warning in area Alpha -> reject
Securite gale cancelled in area Alpha -> reject
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

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.

## Next Gate

Open `TASK-CE-0113 Batch 016 Post-Merge QA` before production deploy.
