# TASK-CE-0087 Batch 013 Restricted Manoeuvrability Draft

Date: 2026-06-02
Owner: Director-Engineer
Execution role: Content Producer
Scope: Captain Ether M4 content only
Status: DONE

## Goal

Start M4 after production parity by drafting the first post-M3 content batch.

Create a `25` item batch covering traffic/legal-status language around vessels
not under command, restricted in ability to manoeuvre, constrained by draught,
towing, fishing, dredging, and diving operations.

## Target

```text
content/captain-ether/batches/batch-013-restricted-manoeuvrability-basics.json
```

## Boundaries

Do not edit:

```text
content/captain-ether/starter.json
content/captain-ether/accept-reject-qa-pairs.json
public/**
private/**
tools/captain-ether-production-deploy.sh
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
branch=traffic_collision
validator --batch PASS
next_gate=Sea Speak Linguist review
```

## Next Expected Gate

`TASK-CE-0088` Sea Speak Linguist review before engineering gate, QA acceptance,
merge, or production deploy.
