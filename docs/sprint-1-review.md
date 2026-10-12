# Sprint 1 Review

**Sprint goal:** A beginner can open the live site, see the 4-day plan with exercise details and tick off exercises, with CI and auto-deploy running.
**Goal met:** Partly. The plan and details are live with CI/CD; ticking off (FW-3) was carried over.
**Committed:** 8 points (FW-1, FW-2, FW-3) + 3 DevOps tasks
**Completed:** 5 points (FW-1, FW-2) + all 3 DevOps tasks
**Live demo:** https://fitweek.onrender.com

| Item | Status | Evidence |
| --- | --- | --- |
| FW-12 Repo and Node project | Done | npm start / npm test working |
| FW-13 CI pipeline | Done | GitHub Actions runs on every push, badge in README |
| FW-14 CD to Render | Done | Auto-deploys after CI passes |
| FW-1 View my weekly plan | Done | 4 workout cards, 3 rest days, today highlighted, 6 unit tests |
| FW-2 See exercise details | Done | Sets, reps, rest, tips shown; formatting unit tests |
| FW-3 Tick off exercises | Carried over | Moved to Sprint 2 |

## Demo
Screenshots: the weekly plan page, a green Actions run, the Render deploy log.

## Tests
11 unit/integration tests passing locally and in CI (Vitest + Supertest).

## Not completed
FW-3 was not started: setting up the repo, pipeline and deployment took longer than estimated.