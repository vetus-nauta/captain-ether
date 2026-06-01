# Sea Speak Linguist Handoff

## Activation

Use only after Director-Engineer names a batch, item list, or answer-log set.

## Current State

Batch 001 has already received a risk review. The known `advice` / `advise`
runtime leak was accepted by engineering and fixed in matcher.

## Closed Assignment

```text
content/captain-ether/roles/sea-speak-linguist/tasks/batch-002-marina-harbour-risk-review-2026-05-27.md
```

Target batch:

```text
content/captain-ether/batches/batch-002-marina-harbour-basics.json
```

Report:

```text
content/captain-ether/roles/sea-speak-linguist/reports/batch-002-marina-harbour-risk-review-2026-05-27.md
```

Mode:

```text
linguistic review with content-side patch allowed for assigned batch only
```

Result:

```text
PASS; matcher risks accepted and fixed by Director-Engineer
```

## Previous Closed Assignment

```text
content/captain-ether/roles/sea-speak-linguist/tasks/batch-003-navigation-reports-risk-review-2026-05-27.md
```

Target batch:

```text
content/captain-ether/batches/batch-003-navigation-reports-basics.json
```

Report:

```text
content/captain-ether/roles/sea-speak-linguist/reports/batch-003-navigation-reports-risk-review-2026-05-27.md
```

Mode:

```text
linguistic review with content-side patch allowed for assigned batch only
```

Focus:

- navigation term boundaries: `heading / course / bearing`;
- report-object boundaries: `position / destination / waypoint / reporting point`;
- numeric boundaries: `090 / 90`, ETA times, spoken-digit forms;
- unit boundaries: `knots / nautical miles / cables`;
- decimal wording: `decimal / point / dot`;
- radio workflow boundary: `say again / read back`.

Result:

```text
PASS; no matcher/API change requested; routed to QA acceptance by Director-Engineer
```

## Last Closed Assignment

```text
content/captain-ether/roles/sea-speak-linguist/tasks/batch-004-safety-securite-risk-review-2026-05-27.md
```

Target batch:

```text
content/captain-ether/batches/batch-004-safety-securite-warnings.json
```

Report:

```text
content/captain-ether/roles/sea-speak-linguist/reports/batch-004-safety-securite-risk-review-2026-05-27.md
```

Mode:

```text
linguistic review with content-side patch allowed for assigned batch only
```

Focus:

- safety signal boundary: `Securite / Sécurité / security`;
- signal family boundary: `Securite / Pan-Pan / Mayday`;
- branch boundary: `safety / urgency / distress`;
- message boundary: `warning / advice / information`;
- visibility boundary: `restricted visibility / poor visibility / visibility good`;
- hazard boundary: `hazard / obstruction / danger`;
- workflow boundary: `read back / say again`;
- exact channels, times, bearings, distances, directions, and units.

Result:

```text
PASS; no matcher/API/policy change requested; routed to QA acceptance by Director-Engineer
```

## Current Assignment

TASK-CE-0057 Batch 009 Onboard Operations Risk Review:

- target batch:
  `content/captain-ether/batches/batch-009-onboard-operations-basics.json`
- source sprint:
  `content/captain-ether/roles/director-engineer/reports/sprint-ce-0056-batch-009-onboard-operations-draft-2026-06-01.md`
- content report:
  `content/captain-ether/roles/content-producer/reports/batch-009-onboard-operations-basics-card-2026-06-01.md`
- mode:
  linguistic review with content-side patch allowed for assigned batch only
- required focus:
  `hand over watch / take over watch`, `helm order / action completed`,
  `port helm / starboard helm`, `anchor / moor / berth`,
  `let go anchor / heave up anchor`, `make fast / let go lines`,
  `bow station / stern station / port station / starboard station`,
  `stand by / standing by`, `safety check / emergency action`, and
  `fire / flooding / man overboard`.

Do not edit matcher/API/UI/runtime, playable `starter.json`, accept/reject
regression, Atlas, auth, router, registry, Watch Officer, Nav Desk, production
config, deploy state, or secrets.

## Next Valid Work

Latest closed assignment:

```text
TASK-CE-0051 Batch 008 VTS / Port Control Risk Review
content/captain-ether/batches/batch-008-vts-port-control-basics.json
content/captain-ether/roles/sea-speak-linguist/reports/batch-008-vts-port-control-risk-review-2026-06-01.md
```

Next gate:

```text
Director-Engineer engineering gate before QA or starter.json merge.
```

Previous closed assignment:

```text
TASK-CE-0045 Batch 007 Traffic / Collision Risk Review
content/captain-ether/batches/batch-007-traffic-collision-basics.json
content/captain-ether/roles/sea-speak-linguist/reports/batch-007-traffic-collision-risk-review-2026-06-01.md
```

Previous gate:

```text
Director-Engineer engineering gate before QA or starter.json merge.
```

Do not broaden synonyms globally unless Director-Engineer asks for a policy
proposal.

## Report Shape

Return one copy-ready technical card:

- approved accepted answers;
- must-stay-wrong answers;
- dangerous minimal pairs;
- matcher risks;
- engineer handoff.
