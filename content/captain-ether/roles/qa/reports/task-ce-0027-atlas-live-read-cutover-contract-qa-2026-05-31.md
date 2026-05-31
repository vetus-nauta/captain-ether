# TASK-CE-0027 Atlas Live-Read Cutover Contract QA

Date: 2026-05-31
Role: QA
Mode: report-only

## Result

PASS.

The Captain Ether live-read cutover contract is testable and sufficiently
bounded for the first implementation slice.

This QA PASS approves only the contract quality, not implementation and not
deploy.

## Scope

Report-only output created:

- `content/captain-ether/roles/qa/reports/task-ce-0027-atlas-live-read-cutover-contract-qa-2026-05-31.md`

Preserved scope:

- runtime/API/UI/tool code not edited;
- content JSON not edited;
- matcher not edited;
- auth/platform, router, registry, Watch Officer, Nav Desk not touched;
- no secrets, private config, Atlas credentials, sessions, cookies, CSRF,
  login codes, player email, or player identity pasted into the report.

## Sources Reviewed

- `content/captain-ether/role-command-protocol.md`
- `content/captain-ether/captain-ether-handoff-2026-05-26.md`
- `content/captain-ether/roles/README.md`
- `content/captain-ether/roles/office-manifest.md`
- `content/captain-ether/roles/qa/rules.md`
- `content/captain-ether/roles/qa/handoff.md`
- `content/captain-ether/roles/director-engineer/reports/director-analysis-atlas-live-read-cutover-slice-b-2026-05-31.md`
- `content/captain-ether/roles/director-engineer/reports/task-ce-0026-atlas-live-read-cutover-contract-2026-05-31.md`

## PASS / FAIL By Contract Block

### 1. First cutover target narrowness

PASS.

Expected:

- first target should be narrow and low-risk.

Actual:

- contract selects admin-only `captain_answer_logs` read path first;
- gameplay-critical stores are explicitly deferred.

### 2. Fallback behavior testability

PASS.

Expected:

- fallback must be reproducible and bounded.

Actual:

- contract defines JSON fallback for the first read target;
- rollback is endpoint-local and does not require cross-system repair.

### 3. Stale-read and drift scenario testability

PASS.

Expected:

- stale/missing/drift conditions should be explicit and testable.

Actual:

- contract defines:
  - stale Mongo read
  - missing mirrored document
  - partial collection drift
  - privacy regression
  - latency regression
- owner routes are named.

### 4. Rollback evidence

PASS.

Expected:

- rollback should be verifiable without production-only steps.

Actual:

- contract requires one-switch endpoint rollback to JSON read path;
- no production-only dependency is hidden inside rollback.

### 5. Hidden auth or player-copy widening

PASS.

Expected:

- first contract should not hide auth changes or player-visible copy changes.

Actual:

- contract keeps `users`, `sessions`, and `login_codes` closed;
- no player-facing copy expansion is opened.

### 6. QA matrix concreteness

PASS.

Expected:

- future QA matrix must be concrete enough to execute.

Actual:

- matrix names access control, filters, counts, grouping, ordering, privacy,
  forced failure fallback, and no side effects.

## Missing Test Cases

No blocker-level missing case found for the first implementation slice.

Minor future expansion note:

- when `progress` or `weak_points` are opened later, stream-scoped parity must
  become its own dedicated QA matrix and should not be assumed from the
  `answer_logs` cutover.

## Missing Rollback Evidence

None for the chosen first target.

The rollback path is narrow enough for contract acceptance.

## Owner Route For Future Blockers

If implementation later reveals drift, stale-read, or privacy issues:

- owner route: Director-Engineer

## Implementation Readiness Decision

Ready for implementation only for:

- first live-read cutover of `captain_answer_logs`

Not implementation-ready as first slice for:

- `progress`
- `weak_points`
- `watch_sessions`

Those remain correctly deferred by the contract.
