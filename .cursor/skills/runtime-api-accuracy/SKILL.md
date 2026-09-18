---
name: runtime-api-accuracy
description: Keeps public docs aligned with the runtime closed loop. Use when editing MDX about invocations, response, plugins, or algorithms.
paths: content/**/*.mdx,content/**/*.md
---

# Runtime API accuracy

- Feedback path is **`POST /response`**, never `/responses`.
- `/invocations` `params` is a JSON **string**.
- Do not invent `approach` / `sub_approach` IDs. Prefer `ECOSYSTEM_ALGORITHMS.md` from `ecosystem-runtime` when that checkout exists.
- Scoring implementation lives in `ecosystem-runtime`, not this repo.
