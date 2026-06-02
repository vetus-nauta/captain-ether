# TASK-CE-0102 Batch 015 Sea Speak Linguist Risk Review

Date: 2026-06-02
Owner: Sea Speak Linguist
Assigned by: Director-Engineer
Scope: Captain Ether M4 Batch 015 only
Status: DONE

## Input

Review:

```text
content/captain-ether/batches/batch-015-sar-relay-coordination-basics.json
content/captain-ether/roles/director-engineer/reports/sprint-ce-0101-batch-015-sar-relay-draft-2026-06-02.md
```

## Review Focus

Check whether the batch safely teaches:

```text
coastguard / search and rescue / SAR traffic
Mayday relay received / unable to assist
last known position / search area
visual contact / visual contact lost
survivors in sight / debris sighted
rescue boat / rescue helicopter / prepare for evacuation
listening watch for SAR traffic on channel one six
```

## Must-Stay-Separate Boundaries

Review especially:

```text
coastguard / VTS / port control / marina control
Mayday relay / own Mayday / Pan-Pan relay / readback
last known position / current position / destination / course
search area / traffic lane / anchorage / reporting point
visual contact / radio contact / radar contact / contact lost
survivors in sight / no survivors / person overboard / casualties / debris
rescue boat / rescue helicopter / liferaft / pilot boat / tug
evacuation required or prepared / evacuation not required / towage / berthing
SAR traffic channel one six / VTS traffic / channel seven two
```

## Required Output

Create a review report under:

```text
content/captain-ether/roles/sea-speak-linguist/reports/batch-015-sar-relay-coordination-risk-review-2026-06-02.md
```

The report must state one of:

```text
ACCEPTED_FOR_ENGINEERING_GATE
ACCEPTED_WITH_PATCHES
BLOCKED_FOR_CONTENT_FIX
```

If patches are needed, list exact item ids and replacement text.

## Boundaries

Do not edit runtime, matcher, API, UI, production, database, Atlas secrets,
Watch Officer, Nav Desk, hub/router, platform auth, WebStorm DB console, or
WebStorm datasource.
