## TASK-CE-0042

Date: 2026-06-01
Owner: Director-Engineer
Scope: Captain Ether only
Status: Open

### Goal

Implement adaptive result messaging so recovery / steady / push are reflected not only in scoring and control rules, but also in how the watch talks to the player.

### Required outcome

1. Summary and in-watch feedback copy respects pacing profile.
2. Recovery mode uses calmer guidance and lower pressure wording.
3. Push mode uses tighter and shorter guidance with less cushioning.
4. No auth, Atlas, router, or cross-game scope.
5. Existing gameplay and smoke coverage stay green.

### Target files

- `public/assets/app.js`
- `public/api/captain-ether/finish-watch.php`
- `public/api/captain-ether/submit-answer.php`
- `public/api/captain-ether/_learner-streams.php`
- `content/captain-ether/tools/smoke-start-watch-api.php`

### Acceptance

- player-visible messages differ by pacing profile
- feedback remains coherent with hint/skip pressure
- no regression in watch flow
- smoke passes
