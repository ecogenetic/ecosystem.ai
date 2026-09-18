# ecosystem.ai — agent instructions

Public documentation site for the ecosystem.Ai platform. Next.js App Router + Nextra. Deployed at https://ecosystem.ai.

Cursor Online / Cloud Agents only see **this** git repo unless the Cloud environment is multi-repo.

## Commands

```bash
pnpm install
pnpm dev      # port 3333
pnpm build
pnpm lint
pnpm prettier
```

Docs live in `content/` as MDX. Navigation is `_meta.ts` in each section. After adding a page, update the nearest `_meta.ts`.

## Non-negotiable

1. Runtime feedback endpoint is **`POST /response`** (singular). Never document `/responses`.
2. `params` on `/invocations` is a **JSON string**.
3. Algorithm IDs, defaults, and selection rules must match `ecosystem-runtime` (`ECOSYSTEM_ALGORITHMS.md`). Do not invent approach names.
4. UI is thin: shadcn/ui + `cn()` from `lib/utils.ts`. No business logic in page components.

## Source of truth vs this repo

| Concern | Canonical repo |
| --- | --- |
| Scoring, plugins, `/invocations`, `/mcp` | `ecosystem-runtime` |
| Operator product UI | `ecosystem-workbench2` |
| Public docs (this site) | `ecosystem.ai` (`content/docs/`) |

When a user-visible runtime behavior changes, update `content/docs/` here **and** keep runtime knowledge files in sync if that repo is in the workspace.

## Skills

- `/add-docs-page` — new MDX + `_meta.ts`
- `runtime-api-accuracy` — `/response` singular, `params` string, no invented algorithm IDs

## Cursor Cloud specific instructions

See `.cursor/CLOUD.md`. Summary:

- Node + pnpm. No test runner; verify with `pnpm lint` and `pnpm build` when docs/app code changes.
- `MONGODB_URI` is only needed for newsletter API routes, not for editing MDX.

## Sibling repos (not cloned unless a Cloud multi-repo environment attaches them)

| Repo | Remote |
|---|---|
| `ecosystem-runtime` | `ecosystemai/ecosystem-runtime` |
| `ecosystem-workbench2` | `ecogenetic/ecosystem-workbench2` |
| `ecosystem-server` | `ecogenetic/ecosystem-server` |
