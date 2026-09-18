# Cursor Cloud / Online

## What travels vs what does not

**In git:** `AGENTS.md`, `CLAUDE.md`, `.cursor/rules/*.mdc`, `.cursor/skills/**`, `.cursor/environment.json`, this file.

**Does apply on the same Cursor account:** User Rules in Settings → Rules; Team Rules.

**Not in the Cloud VM unless configured:** `~/.cursor/rules`, unsynced personal skills, local MCP, sibling runtime checkout, `.env`.

`MONGODB_URI` is only needed for newsletter API routes. MDX/docs work does not need it.

## Multi-repo environment (recommended)

Attach `ecosystemai/ecosystem.ai` with `ecosystemai/ecosystem-runtime` when documenting algorithms or `/invocations` so IDs stay exact.

Personal skills: Settings → Agents → **Sync Skills for Cloud Agents**.

## Suggested verification

```bash
pnpm lint
pnpm build
```

Or `/add-docs-page` for new MDX. Dev server: `pnpm dev` on **3333**. No unit-test suite.
