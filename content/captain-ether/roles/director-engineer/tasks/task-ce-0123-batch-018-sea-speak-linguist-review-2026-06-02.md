# TASK-CE-0123 Batch 018 Sea Speak Linguist Review

Date: 2026-06-02
Owner: Sea Speak Linguist
Scope: Captain Ether Batch 018 review only
Status: DONE

## Activation Condition

Started after:

```text
TASK-CE-0122 Batch 018 Scenario Chain Draft: DONE / DRAFTED / READY_FOR_LINGUIST_REVIEW
```

## Target

```text
content/captain-ether/batches/batch-018-scenario-chain-readbacks-basics.json
```

## Review Goal

Review Batch 018 for Sea Speak correctness, scenario-chain boundaries,
accepted-answer boundaries, and must-stay-wrong contrasts before engineering
gate.

## Required Review Focus

```text
station identity: Marina Alpha / Bravo / Port Control / VTS / rescue unit
scenario state: approaching / departing / alongside / read back / correction
traffic: crossing / overtaking, starboard / port, bow / quarter, astern / ahead
VTS: instruction / advice / report / request, channel one two / one six
restricted visibility: fog / smoke, reduce / increase speed, Securite / Pan-Pan
urgency: Pan-Pan / Mayday, engine / steering, tow / pilot / cancel tow
distress: Mayday / Pan-Pan, taking water / fire, east / west, persons on board / overboard
position/readback: position received / corrected / unknown
```

## Required Output

Return one of:

```text
ACCEPTED
ACCEPTED_WITH_PATCHES
REJECTED_FOR_REWRITE
```

If accepted with patches, update the batch file and document exact changes.

No merge into `starter.json` and no production deploy are authorized by this task.

## Result

```text
ACCEPTED_WITH_PATCHES
Batch status: linguist_reviewed
```
