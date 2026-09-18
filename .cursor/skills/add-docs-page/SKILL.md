---
name: add-docs-page
description: Adds or updates an MDX page on the ecosystem.ai Nextra docs site. Invoke with /add-docs-page.
disable-model-invocation: true
---

# Add a docs page

1. Create MDX under `content/docs/` (or blog/changelog as appropriate).
2. Update the nearest `_meta.ts` so the page appears in nav.
3. Runtime API: `/invocations` and `/response` (singular). `params` is a JSON string.
4. Algorithm IDs must match `ecosystem-runtime` / `ECOSYSTEM_ALGORITHMS.md` if that repo is attached. Do not invent `approach` names.
5. Preview with `pnpm dev` (port 3333). Verify with `pnpm lint` (and `pnpm build` for app-code changes).
