# TASK-CE-0026 Atlas Live-Read Cutover Contract

Date: 2026-05-31

## Result

PASS.

The Captain Ether live-read cutover contract is defined and sufficiently
bounded for QA contract review.

This is a contract-only result. No runtime implementation is approved yet.

## Recommended First Cutover Target

First live-read target:

- `captain_answer_logs` via `public/api/captain-ether/answer-log.php`

Do not start with:

- `watch_sessions`
- `progress`
- `weak_points`

## Why This Target Comes First

`answer-log.php` is the narrowest and lowest-risk read path in the current
Captain Ether runtime because:

1. it is admin-only;
2. it is read-only;
3. it is not in the player gameplay loop;
4. it already works on one store with one response surface;
5. stale or missing data is easier to detect without breaking active gameplay;
6. rollback is immediate: restore JSON read path in one endpoint.

By contrast:

- `progress` is player-visible and used in stream-scoped flow decisions;
- `weak_points` directly affects Lost Oars state;
- `watch_sessions` is active gameplay-critical state and is the most dangerous
  first cutover candidate.

## Recommended Cutover Order

1. `captain_answer_logs` read path first
2. `progress` read path second
3. `weak_points` read path third
4. `watch_sessions` read path last

## Store-by-Store Rationale

### 1. `captain_answer_logs`

Best first candidate.

- admin-only;
- read-only;
- no player-facing impact;
- parity can be checked by count, filters, grouping, and latest timestamps;
- fallback to JSON is trivial.

### 2. `progress`

Possible second candidate only after answer-log success.

Pros:

- one user document per player in the RU baseline;
- clear payload shape in `progress.php`.

Risks:

- stream-scoped complexity already exists in `_learner-streams.php`;
- stale progress can affect visible completed counts and cleanup state.

### 3. `weak_points`

Third candidate.

Risks are higher than `progress` because Lost Oars content is directly tied to
item-level unresolved state and stream scoping.

### 4. `watch_sessions`

Last candidate.

Highest risk because:

- it carries active watch state;
- it affects current question flow;
- stale or partial reads would break live gameplay fastest.

## Fallback Contract

### Global Rule

For the first implementation slice, live-read cutover must fail back to JSON,
not fail closed.

Reason:

- Slice B is still a safety-first migration stage;
- current JSON runtime remains trusted and available;
- fail-closed behavior is not justified before Mongo read parity is proven.

### Per-Store Fallback

#### `captain_answer_logs`

If Mongo read fails, is empty unexpectedly, or parity checks fail:

- serve JSON-backed `captain_answer_logs` read;
- do not expose Mongo failure detail to admin payload;
- internal log only.

#### `progress`

If opened later:

- fallback to JSON `progress` or `captain_ether_stream_progress` by stream;
- do not mix streams silently.

#### `weak_points`

If opened later:

- fallback to JSON `weak_points` or `captain_ether_stream_weak_points` by
  stream;
- no partial merge of Mongo and JSON item sets in one response.

#### `watch_sessions`

If opened later:

- fallback must be whole-read fallback per watch;
- never mix question state from Mongo with result state from JSON in one active
  session response.

## Freshness And Parity Contract

### For First Cutover Target: `captain_answer_logs`

Before any live-read implementation is accepted, parity checks must cover:

1. same `stored_entries` count;
2. same `total_logged`;
3. same filter behavior for:
   - `item_id`
   - `kind`
   - `learner_stream`
4. same ordering of latest entries;
5. same grouping behavior in `review_groups`;
6. same privacy boundary in returned `entries`.

### Freshness Signal

Mongo read path is considered fresh enough only if:

- mirrored data contains the latest known `updated_at` or latest entry
  timestamps expected from the JSON baseline;
- parity checks do not show missing trailing entries;
- no drift is seen across repeated read checks after a controlled smoke action.

## Failure Classification

### 1. Stale Mongo Read

Definition:

- Mongo endpoint returns older answer-log state than JSON after a known write.

Owner route:

- Director-Engineer

Immediate handling:

- revert endpoint to JSON read path

### 2. Missing Mirrored Document

Definition:

- Mongo read path returns missing expected entries or empty groups while JSON has
  data.

Owner route:

- Director-Engineer

Immediate handling:

- fail back to JSON

### 3. Partial Collection Drift

Definition:

- count or grouping differs between JSON and Mongo without an accepted reason.

Owner route:

- Director-Engineer

Immediate handling:

- fail back to JSON

### 4. Privacy Regression

Definition:

- Mongo-only internals, backend errors, or mirror metadata leak into the
  response.

Owner route:

- Director-Engineer

Immediate handling:

- block acceptance immediately

### 5. Latency Regression

Definition:

- read path becomes meaningfully slower or unstable after switching to Mongo.

Owner route:

- Director-Engineer

Immediate handling:

- measure against JSON baseline and fail back if necessary

## Rollback Contract

Rollback for the first live-read slice must be one-switch endpoint rollback:

- disable Mongo read for `answer-log.php`;
- keep Atlas mirror writes unchanged;
- keep JSON read path intact;
- no data conversion or backfill required during rollback.

Rollback must not depend on:

- production-only tooling;
- manual document repair before the endpoint works again;
- auth/platform changes.

## No-Go Rules

The first live-read implementation must not:

- widen auth behavior;
- touch `users`, `sessions`, or `login_codes`;
- introduce player-facing copy changes;
- change game hub/router/registry behavior;
- mix JSON and Mongo fragments in one logical response;
- cut over more than one store in the same first implementation slice.

## QA Matrix Required Before Implementation Acceptance

### For `answer-log.php`

QA must verify:

1. admin access still required;
2. same filter behavior for:
   - `item_id`
   - `kind`
   - `learner_stream`
3. same summary counts as JSON baseline;
4. same grouping behavior for `review_groups`;
5. same ordering of latest entries;
6. no Mongo/internal field leaks;
7. forced Mongo read failure falls back cleanly to JSON;
8. no auth or player route side effects.

## Implementation Readiness Decision

Ready for implementation only for this narrow first target:

- `captain_answer_logs` read path

Not ready for first implementation slice:

- `progress`
- `weak_points`
- `watch_sessions`

These require a later contract expansion after the first live-read slice is
proven.
