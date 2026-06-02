# Batch 018 Scenario Chain Readbacks Linguist Risk Review

Date: 2026-06-02
Owner: Sea Speak Linguist
Scope: Captain Ether Batch 018 only
Result: ACCEPTED_WITH_PATCHES

## Target

```text
content/captain-ether/batches/batch-018-scenario-chain-readbacks-basics.json
```

## Decision

Batch 018 is accepted for engineering gate after targeted patches that convert
scenario descriptions into spoken radio turns and harden readback/correction
boundaries.

```text
status=linguist_reviewed
items=25
grammar_patterns=23
dangerous_pairs=6
should_accept=46
should_reject=79
danger_must_accept=24
danger_must_reject=28
```

## Patches Applied

1. Converted berth readback from command-like wording to spoken readback:

```text
old: Read back berth Bravo two, starboard side to.
new: Reading back berth Bravo two, starboard side to.
new rejects include: Read back berth Bravo two starboard side to
```

2. Converted reporting-point phrase from imperative to spoken report:

```text
old: Report passing point Delta.
new: Reporting passing point Delta.
new rejects include: Report passing point Delta
```

3. Converted VTS channel phrase from third-person description to spoken order:

```text
old: VTS instructs, switch to channel one two.
new: VTS, switch to channel one two.
new rejects include: VTS instructs switch to channel one two
```

4. Converted rescue-unit readback from third-person description to spoken readback:

```text
old: Rescue unit reads back five miles east of Alpha.
new: Rescue unit, reading back five miles east of Alpha.
new rejects include: Rescue unit reads back five miles east of Alpha
```

5. Updated the affected grammar-pattern examples and dangerous-pair groups.

6. Removed normalized duplicate `accepted_answers` variants while keeping the
variants in `qa_notes.should_accept`, so matcher coverage remains but the batch
has zero batch-specific warnings.

## Review Findings

Accepted boundaries:

```text
station identity: Marina Alpha / Bravo / Port Control / VTS / rescue unit
scenario state: approaching / departing / alongside / reading back / correction
traffic: crossing / overtaking, starboard / port, bow / quarter, astern / ahead
VTS: spoken order / advice / description, channel one two / one six
restricted visibility: fog / smoke, reduce / increase speed, Securite / Pan-Pan
urgency: Pan-Pan / Mayday, engine / steering, tow / pilot / cancel tow
distress: Mayday / Pan-Pan, taking water / fire, east / west, persons on board / overboard
position/readback: position received / corrected / unknown
```

## Checks

```text
Validator with batch: PASS with known starter WARN (9)
Batch-specific warnings: 0
Collision preflight: PASS
Targeted matcher: PASS linguist_batch018_targeted cases=18
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

Open `TASK-CE-0124 Batch 018 Engineering Gate`.
