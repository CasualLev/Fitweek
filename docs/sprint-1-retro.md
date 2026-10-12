# Sprint 1 Retrospective

## What went well
- CI and auto-deploy were working before any feature code, so every feature was tested and deployed automatically
- Small commits, each tagged with its Jira key, kept progress traceable
- Keeping logic in src/ separate from the page made it easy to unit test

## What didn't go well
- I underestimated the setup work (Jira, repo, CI, Render), so the sprint ran late and FW-3 was carried over
- The first CI run failed because of a YAML indentation error that I only found after pushing
- Committing straight to main meant broken code could reach main before CI checked it

## Improvements for Sprint 2
| Improvement | Why | How I'll know it worked |
| --- | --- | --- |
| Commit to only 2 stories and estimate setup work honestly | Avoid carrying work over again | Both Sprint 2 stories finish inside the sprint |
| Use a feature branch and pull request per story | CI checks code before it reaches main | Every Sprint 2 story merged through a PR with a green check |
| Install the VS Code YAML extension and run tests before every push | Catch config errors before they reach CI | No red CI runs in Sprint 2 |