# CE-SPRINT-0098 Batch 014 Merge Preparation

Date: 2026-06-02
Owner: Director-Engineer
Scope: Captain Ether only
Status: MERGED LOCALLY / PASS

## Merge Notes

- Added `25` Batch 014 items to playable `starter.json`.
- Added `25` regression entries to `accept-reject-qa-pairs.json`.
- Added `6` dangerous-pair groups.
- Added `11` grammar patterns.
- Marked Batch 014 status as `merged`.
- Preserved the QA-accepted engineering de-dup item:
  `Engine restarted, temporary repair holding.`

## Final Local State

```text
starter_items=550
grammar_patterns=184
qa_items=550
should_accept=1312
should_reject=1670
dangerous_pairs=128
danger_must_accept=388
danger_must_reject=913
urgency_panpan_items=80
```

Type count:

```text
word=110
short_expression=176
phrase=264
```

Level count:

```text
beginner=194
intermediate=251
advanced=105
```

## Batch 014 Post-Merge Integrity

```text
Batch status: merged
Batch items present in starter: 25/25
Batch item ids unique in starter: PASS
Batch target_text unique in starter for Batch 014: PASS
qa_notes_in_starter=0
```

The wider starter corpus still has historical duplicate target texts from earlier
content. Batch 014 did not introduce duplicate ids or duplicate target texts for
its own items.

## Checks

```text
Validator: PASS with known starter WARN (9)
API smoke: PASS captain-ether-api-smoke checks=334
JS syntax guard: PASS
Post-merge targeted matcher: PASS post_merge_batch014_targeted cases=14
Secret scan on changed files: PASS
```

## Preserved Boundaries

```text
Engine restarted, temporary repair holding. -> accept
Engine restarted, temporary repair is holding. -> accept
Engine restarted assistance no longer required -> reject for Batch 014 item
bilge pump running -> accept
fire pump running -> reject for flooding-control item
Medical evacuation not required, advice needed. -> accept
Medical evacuation required advice needed -> reject
Medical situation, no immediate danger. -> accept
Mayday medical situation -> reject
```

## Scope Preserved

No matcher, API/runtime, UI/assets, Atlas, auth, router, registry, Watch Officer,
Nav Desk, production config, deploy/FTP state, secrets, sessions, cookies, CSRF,
SMTP, player email, player identity data, WebStorm DB console, or WebStorm
datasource was changed.

## Next Gate

Open `TASK-CE-0099` post-merge QA before production deploy.
