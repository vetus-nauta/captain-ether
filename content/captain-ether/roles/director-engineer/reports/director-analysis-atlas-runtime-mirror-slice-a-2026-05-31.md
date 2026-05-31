# Director Analysis: Atlas Runtime Mirror Slice A

Date: 2026-05-31

## Decision

Captain Ether should not jump directly from JSON runtime storage to MongoDB
Atlas as the live read/write source.

The safe next step is a narrow mirror slice:

- JSON remains the live canonical runtime store;
- MongoDB Atlas receives mirrored Captain Ether runtime writes;
- no player-facing route, UI, auth, or payload contract changes are introduced;
- no auth/session/login-code cutover is included in this slice.

## Why This Slice Comes Next

Atlas bootstrap and baseline import are already complete, but the current live
runtime still depends on JSON storage inside the existing PHP flow.

A direct cutover would combine too many risk surfaces at once:

- shared bootstrap behavior;
- active watch state;
- weak-point mutation;
- answer-log mutation;
- progress mutation;
- future auth coupling if scope widens by accident.

Mirror mode reduces that risk. It lets Captain Ether keep current gameplay
behavior while Atlas is kept warm with current data.

## Slice A Scope

Included in this slice:

- `watch_sessions`
- `progress`
- `weak_points`
- `answer_logs`

Atlas collections already prepared for this:

- `captain_ether.watch_sessions`
- `captain_ether.progress`
- `captain_ether.weak_points`
- `captain_ether.answer_logs`

## Explicitly Out Of Scope

Do not include in Slice A:

- `users`
- `sessions`
- `login_codes`
- auth endpoints
- ecosystem login
- game hub / router / registry
- player-facing UI copy changes
- production deploy

These stay closed unless a separate explicit task opens them.

## Required Runtime Behavior

Slice A must preserve these rules:

1. JSON remains the source of truth for live Captain Ether reads.
2. Successful Captain Ether runtime writes continue to succeed even if Atlas is
   unavailable.
3. Atlas mirror failures must not leak player-facing errors or internal
   storage details.
4. Atlas mirror failures must be internally observable for later triage.
5. API response shapes, error strings, localization behavior, and privacy
   boundaries must remain unchanged.
6. No Mongo document id or storage-internal field may appear in player-facing
   payloads.

## Rollback Boundary

Rollback for Slice A is simple:

- disable or bypass Atlas mirror writes;
- keep JSON runtime as-is;
- do not require data backfill to keep gameplay alive.

This is the main reason to take mirror mode before any live Mongo read cutover.

## Gate Order

Next work should move in this order:

1. Validation Steward prepares the reproducible local validation gate.
2. Director-Engineer implements Atlas mirror writes for Captain Ether runtime
   state only.
3. QA verifies no gameplay regression and confirms mirror observability.
4. Only after that may Director Ether open a separate live-read cutover slice.

## Localization Gate

Expected localization impact for Slice A is `N/A` if implementation adds no new
player-facing messages.

If new player-visible error copy appears, that is a contract violation for this
slice and must be reported back before acceptance.

## Next Gate

Open:

- `TASK-CE-0023` Validation Steward Atlas mirror validation gate
- `TASK-CE-0024` Director-Engineer Atlas mirror implementation
- `TASK-CE-0025` QA Atlas mirror review
