# Batch 013 Restricted Manoeuvrability Risk Review

Date: 2026-06-02
Task: `TASK-CE-0088`
Owner: Sea Speak Linguist
Scope: Captain Ether only
Status: ACCEPTED_WITH_PATCHES

## Target

```text
content/captain-ether/batches/batch-013-restricted-manoeuvrability-basics.json
```

## Reference Basis

The review checked the batch against COLREG-style legal-status wording for:

```text
vessel not under command
vessel restricted in her ability to manoeuvre
vessel constrained by her draught
vessel engaged in fishing
dredging or underwater operations
towing operations that severely restrict course deviation
avoid impeding safe passage of a vessel constrained by her draught
```

## Content Patches Applied

The draft was accepted with these patches:

- canonicalized `restricted in ability to manoeuvre` to `restricted in her ability to manoeuvre`;
- canonicalized `constrained by draught` to `constrained by her draught`;
- kept shorter training forms item-locally accepted where safe;
- added exact patched `target_text` values to `accepted_answers` and `should_accept` for affected phrase items.

Affected item ids:

```text
expr_status_restricted_ability_001
expr_status_constrained_by_draught_001
phrase_status_ram_dredging_001
phrase_status_cbd_deep_channel_001
phrase_status_cbd_do_not_impede_001
```

## Approved Decisions

- Keep `not under command` as a separate legal-status category, not a generic steering or engine failure phrase.
- Keep `restricted in her ability to manoeuvre` as the canonical restricted-work status.
- Keep `constrained by her draught` as the canonical draught/channel limitation status.
- Keep `draught` and `draft` as item-local spelling variants.
- Keep `manoeuvre` and `maneuver` as item-local spelling variants.
- Keep `towing`, `being towed`, `tug assistance`, and `towage` separate.
- Keep `trawling` separate from `trolling`, `towing`, and `drifting`.
- Keep `dredging`, `diving`, `drifting`, and `fishing operations` separate.
- Keep `do not cross ahead`, `cross ahead`, and `pass astern` as strict dangerous contrasts.
- Keep `do not impede passage` as a negative traffic warning, not a berth or proceed instruction.

## Must-Stay-Wrong Answers

These boundaries must remain wrong in QA/matcher gates:

```text
not under command -> restricted in her ability to manoeuvre
not under command -> constrained by her draught
restricted in her ability to manoeuvre -> not under command
constrained by her draught -> not under command
constrained by her draught -> restricted in her ability to manoeuvre
fishing gear deployed -> anchor deployed
fishing gear deployed -> gear recovered
dredging operations -> diving operations
diving operations -> dredging operations
do not cross ahead -> cross ahead
do not impede passage -> impede passage
long tow keep clear astern -> long tow keep clear ahead
```

## Matcher Risks

No matcher/API change is requested by this review.

Future risk areas:

- fuzzy matching that treats `her` as optional globally for legal-status phrases;
- broad synonym expansion that collapses NUC, RAM, and CBD status categories;
- accepting opposite navigation instructions because the rest of the phrase is similar;
- collapsing fishing/trawling/towing/trolling by spelling-near rules.

## Check Run

```text
$HOME/.local/php-codex/bin/php content/captain-ether/tools/validate-captain-ether.php --batch=content/captain-ether/batches/batch-013-restricted-manoeuvrability-basics.json
```

Result after patches:

```text
PASS
Batch status: draft before status update, then linguist_reviewed
Batch items: 25
Batch target_text: 25
Batch should_accept: 51
Batch should_reject: 75
Batch danger_must_accept: 21
Batch danger_must_reject: 44
Known starter warnings: WARN (9)
```

## Engineer Handoff

Batch 013 is approved for Director-Engineer engineering gate after the applied
patches.

Do not merge into `starter.json` before engineering gate and QA acceptance.
No production deploy is approved by this review.

## Scope Preserved

No playable `starter.json`, accept/reject regression, matcher, API/runtime, UI,
Atlas, auth, router, registry, Watch Officer, Nav Desk, production config,
deploy/FTP state, secrets, sessions, cookies, CSRF, SMTP, player email, player
identity data, or WebStorm datasource was changed.
