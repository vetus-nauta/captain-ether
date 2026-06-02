# TASK-CE-0094 Batch 014 Medical Assistance / Emergency Repair Draft

Date: 2026-06-02
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether M4 content only
Status: DONE

## Goal

Continue M4 with a draft-only batch focused on medical details and temporary
repair/status reporting without duplicating existing generic medical assistance,
medical advice, low battery, or bilge-pump failure items.

## Target

```text
content/captain-ether/batches/batch-014-medical-repair-basics.json
```

## Content Focus

Draft `25` items covering:

```text
injury / illness / first aid / hypothermia / seasickness
conscious / unconscious
bleeding / fracture / burn
temporary repair / engine restarted / steering restored
leak controlled / pump running / water ingress reduced
assistance required / advice required / evacuation required boundaries
```

## Boundaries

Do not edit:

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
public/**
private/**
production files
Atlas secrets
WebStorm DB console or datasource
Watch Officer
Nav Desk
hub/router
platform auth
```

## Required Result

Produce a draft batch and a sprint report with:

```text
items=25
status=draft
validator --batch PASS
next_gate=Sea Speak Linguist review
```

## Next Expected Gate

`TASK-CE-0095` Sea Speak Linguist review before engineering gate, QA acceptance,
merge, or production deploy.
