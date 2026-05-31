# Director Analysis: Atlas Live-Read Cutover Slice B

Date: 2026-05-31

## Decision

Captain Ether may open the next sprint only as a contract sprint for live
Mongo read cutover.

Do not start live-read implementation immediately.

The next safe step is:

- define the exact read-cutover contract;
- define rollback and observability;
- define acceptance boundaries before code changes.

## Why Slice B Is Separate

Slice A already proved:

- JSON canonical runtime remains stable;
- Atlas mirror writes can run without breaking gameplay;
- mirror failure can degrade safely.

That does not yet prove live-read safety.

Live-read cutover introduces a different risk class:

- request reads from Mongo instead of JSON;
- stale or partial mirror state becomes user-visible if the contract is weak;
- fallback rules must be explicit;
- read consistency boundaries must be known before code touches runtime flow.

## Slice B Goal

Write the contract for the first live-read cutover step for Captain Ether
runtime state, without implementing it.

## Slice B Candidate Scope

Contract scope may consider only these Captain Ether runtime collections:

- `watch_sessions`
- `progress`
- `weak_points`
- `answer_logs`

Auth remains closed:

- `users`
- `sessions`
- `login_codes`

## Required Contract Questions

The contract must answer:

1. Which store moves to live Mongo reads first:
   - all four together
   - or one narrow store first
2. What is the fallback rule if Mongo read fails:
   - fail closed
   - fail back to JSON
   - fail only for admin/reporting paths
3. What proves that mirrored Mongo state is fresh enough for live reads.
4. How stale-read risk is detected.
5. Whether write order or lock order must change before read cutover.
6. Which smoke and QA checks prove parity between JSON and Mongo reads.
7. How rollback works without data loss.

## Default Director Position

Default recommendation for Slice B:

- do not cut over all four stores at once;
- start with one narrow read target only after contract QA;
- prefer `progress` or admin-only `answer_logs` before `watch_sessions`;
- keep active gameplay-critical watch state as the most conservative cutover
  target.

## Explicitly Out Of Scope

Do not open in Slice B:

- player-facing UI changes;
- new auth behavior;
- game hub/router/registry work;
- production deploy;
- direct replacement of all JSON storage in one sprint.

## Localization Gate

Expected localization impact is `N/A` if the contract does not introduce new
player-visible strings.

## Next Gate

Open:

- `TASK-CE-0026` Director-Engineer Atlas live-read cutover contract
- `TASK-CE-0027` QA review of the cutover contract
