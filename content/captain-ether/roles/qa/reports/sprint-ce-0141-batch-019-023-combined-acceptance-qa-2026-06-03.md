# CE-SPRINT-0141 Batch 019-023 Combined Acceptance QA

Date: 2026-06-03
Owner: QA
Scope: Captain Ether Batch 019-023 acceptance only
Status: PASS_FOR_MERGE

## Decision

```text
PASS_FOR_MERGE
```

Batch 019-023 are accepted for merge planning. This QA task does not merge into
`starter.json` and does not authorize production deploy.

## Batch State

```text
Batch 019: status=linguist_reviewed, items=30, grammar_patterns=27, dangerous_pairs=8, should_accept=55, should_reject=90
Batch 020: status=linguist_reviewed, items=50, grammar_patterns=47, dangerous_pairs=13, should_accept=98, should_reject=150
Batch 021: status=linguist_reviewed, items=35, grammar_patterns=35, dangerous_pairs=7, should_accept=50, should_reject=105
Batch 022: status=linguist_reviewed, items=35, grammar_patterns=35, dangerous_pairs=7, should_accept=49, should_reject=105
Batch 023: status=linguist_reviewed, items=30, grammar_patterns=30, dangerous_pairs=6, should_accept=40, should_reject=90
```

Combined acceptance scope:

```text
items=180
grammar_patterns=174
dangerous_pairs=41
should_accept=292
should_reject=540
```

## QA Collision Patch

QA collision preflight found existing playable target_text collisions in Batch
019, 020, 021, and 023. These were resolved before acceptance by making the
draft targets more specific while keeping the item count and topic coverage.

Examples:

```text
fairway -> narrow fairway
keep clear -> keep well clear
lifebuoy -> lifebuoy ring
call sign -> vessel call sign
read back -> read back instruction
hypothermia -> suspected hypothermia
```

After patch:

```text
starter target collisions=0
draft target duplicates=0
starter id collisions=0
draft id duplicates=0
grammar id collisions=0
missing batch grammar references=0
```

## Checks

```text
Batch 019 validator: PASS with known starter WARN (9)
Batch 020 validator: PASS with known starter WARN (9)
Batch 021 validator: PASS with known starter WARN (9)
Batch 022 validator: PASS with known starter WARN (9)
Batch 023 validator: PASS with known starter WARN (9)
Batch-specific warnings: 0
Collision preflight: PASS
Targeted matcher spot-check by topic: PASS via validator accept/reject sweep
API smoke: PASS captain-ether-api-smoke checks=334
Syntax guards: PASS
Secret scan: PASS
Diff whitespace check: PASS
```

## Merge Recommendation

Merge in two chunks:

```text
Set A: Batch 019+020, 80 items
Set B: Batch 021+022+023, 100 items
```

Open a dedicated merge task before changing playable `starter.json`.

## Scope Preserved

No playable `starter.json`, accept/reject regression registry, matcher,
API/runtime, UI/assets, Atlas, auth, router, production config, deploy/FTP state,
secrets, sessions, cookies, CSRF, SMTP, player email, player identity data,
WebStorm DB console, or WebStorm datasource was changed.
