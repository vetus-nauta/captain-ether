# TASK-CE-0095 Batch 014 Sea Speak Linguist Risk Review

Date: 2026-06-02
Owner: Sea Speak Linguist
Assigned by: Director-Engineer
Scope: Captain Ether M4 Batch 014 only
Status: OPEN

## Input

Review:

```text
content/captain-ether/batches/batch-014-medical-repair-basics.json
content/captain-ether/roles/director-engineer/reports/sprint-ce-0094-batch-014-medical-repair-draft-2026-06-02.md
```

## Review Focus

Check whether the batch safely teaches:

```text
injury / illness / bleeding / fracture / hypothermia
first aid / medical advice / medical assistance / evacuation
temporary repair / engine restarted / steering restored
leak controlled / water ingress reduced / pump running
no immediate danger / immediate danger / Mayday / rescue
```

## Must-Stay-Separate Boundaries

Review especially:

```text
injury / illness / vessel damage / generic emergency
medical advice / medical assistance / medical evacuation / rescue
conscious / unconscious / overboard / missing
hypothermia / hyperthermia / seasickness / shock
engine restarted / engine failed / steering restored
leak controlled / leak increasing / flooding uncontrolled / pump failed
water ingress / water tank
assistance not required / assistance required / rescue required
```

## Required Output

Create a review report under:

```text
content/captain-ether/roles/sea-speak-linguist/reports/batch-014-medical-repair-risk-review-2026-06-02.md
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
