# Sprint 2 Review

**Sprint goal:** The app reports its own health and logs errors, and users can tick off exercises as they finish them.
**Goal met:** Yes
**Committed:** 5 points (FW-6, FW-3)  **Completed:** 5 points
**Live demo:** https://fitweek.onrender.com

| Item | Status | Evidence |
| --- | --- | --- |
| FW-6 Health check and logging | Done | /health endpoint, request logs, 500 error handler, browser error logging, 3 integration tests, merged via PR #1 |
| FW-3 Tick off exercises | Done | Checkboxes, progress bars, "Day complete!", 5 unit tests, merged via PR #2 |

## Monitoring
- `GET /health` returns status, uptime and timestamp; Render uses it as its health check
- Every request is logged with method, path, status and duration (visible in Render logs)
- Unhandled server errors return a 500 JSON response and are logged
- Browser errors and promise rejections are logged to the console by monitor.js

## Tests
19 tests passing locally and in CI.

## Remaining backlog
FW-4 (save progress), FW-5 (mobile layout), FW-7 (reset week), FW-8 (choose days).