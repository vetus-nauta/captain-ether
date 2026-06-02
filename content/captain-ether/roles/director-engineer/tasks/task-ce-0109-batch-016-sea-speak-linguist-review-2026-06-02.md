# TASK-CE-0109 Batch 016 Sea Speak Linguist Review

Date: 2026-06-02
Owner: Sea Speak Linguist
Scope: Captain Ether Batch 016 review only
Status: OPEN

## Activation Condition

Started after:

```text
TASK-CE-0108 Batch 016 Weather Sea-State Draft: DONE / DRAFTED / READY_FOR_LINGUIST_REVIEW
```

## Target

```text
content/captain-ether/batches/batch-016-weather-sea-state-warnings-basics.json
```

## Review Goal

Review Batch 016 for Sea Speak correctness, accepted-answer boundaries, and
must-stay-wrong safety contrasts before engineering gate.

## Required Review Focus

```text
Securite / Pan-Pan
active warning / cancelled warning
gale / squall / fog / thunderstorm / swell
visibility less than one mile / more than one mile
visibility / distance / depth
caution / full speed
sound signal required / not required
heavy swell / heavy traffic / shallow water
keep clear / proceed / enter area
navigational warning / traffic information / weather forecast
fairway debris / clear fairway / debris on deck
area Bravo / area Alpha
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
