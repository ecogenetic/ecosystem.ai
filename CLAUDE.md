# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

Cursor / Cloud Agents should prefer **`AGENTS.md`** at the repo root (same guidance, kept current for Cursor Online).

## Project Overview

This is the `ecosystem.ai` documentation site - a Next.js application that serves as the documentation hub for the ecosystem.Ai platform (a real-time AI prediction platform). The site uses Nextra for documentation rendering and is deployed at https://ecosystem.ai.

## Development Commands

```bash
# Install dependencies
pnpm install

# Development server (runs on port 3333)
pnpm dev

# Production build
pnpm build

# Start production server (port 3333)
pnpm start

# Lint code
pnpm lint

# Format code with Prettier
pnpm prettier

# Bundle analysis
pnpm analyze
```

## Project Structure

```
ecosystem.ai/
├── app/                      # Next.js 13+ App Router
│   ├── [[...mdxPath]]/       # Catch-all route for MDX pages
│   ├── api/                  # API routes (subscribe, unsubscribe)
│   ├── layout.tsx           # Root layout with Nextra theme
│   └── globals.css
├── components/               # React components
│   ├── ui/                   # Shadcn UI components
│   ├── home/                 # Homepage components
│   ├── blog/                 # Blog components
│   ├── changelog/            # Changelog components
│   ├── tools/                # Tools (yamlChecker, credentialsGenerator)
│   ├── supportChat/          # Support chat integration
│   └── ...
├── content/                  # Documentation source (MDX files)
│   ├── _meta.ts             # Documentation navigation config
│   ├── docs/                 # Main documentation
│   │   ├── configuration/   # Project, deployment, dynamic config
│   │   ├── runtime/         # Runtime & deployment docs
│   │   ├── modules/         # Modules (spend_personality)
│   │   ├── user_guides/     # User guides
│   │   └── ...
│   ├── blog/                # Blog posts
│   ├── changelog/           # Changelog entries
│   └── ...
├── lib/                     # Utility functions
│   ├── authors.ts           # Author metadata
│   └── utils.ts            # cn() helper for Tailwind
├── public/                  # Static assets
├── scripts/                 # Build scripts
└── utils/                   # Legacy utilities (MongoDB connection)
```

## Key Architecture Notes

### Documentation Structure
- Documentation lives in `content/` as MDX files
- Navigation configured in `content/_meta.ts`
- Each section has its own `_meta.ts` for nested navigation
- Authors defined in `lib/authors.ts`

### Tech Stack
- **Framework**: Next.js 16.2.0 (App Router)
- **Documentation**: Nextra 4.6.1 with nextra-theme-docs
- **UI**: Tailwind CSS 4.2.2, Radix UI primitives, shadcn/ui
- **Font**: Geist (sans and mono)
- **Database**: MongoDB (for newsletter subscriptions)
- **AI/ML**: Integrated with ecosystem.Ai runtime platform

### Runtime Platform Context
The ecosystem.Ai platform is a real-time prediction engine that supports:
- **Dynamic Interactions**: Real-time ML convergence (Epsilon Greedy, Bayesian Probabilistic, Ecosystem Rewards, Q-learning)
- **Pre/Post Scoring Plugins**: Java-based plugins for data preprocessing and post-processing
- **Offer Matrix**: Configuration for recommendation systems
- **API Endpoints**: `/invocations` for scoring, `/response` for feedback (singular; not `/responses`)

See `content/docs/runtime/` for comprehensive runtime documentation.

### API Routes
- `/api/subscribe` - Newsletter subscription
- `/api/unsubscribe` - Newsletter unsubscription

### Key Dependencies
- `@supabase/supabase-js` - Database client
- `mongodb`, `mongoose` - MongoDB ODM
- `zod` - Schema validation
- `ai` - AI SDK for generative AI
- `langfuse` - AI observability
- `posthog-js` - Analytics

## Development Notes

### Adding Documentation
1. Create MDX file in `content/docs/` (or subdirectory)
2. Update relevant `_meta.ts` to include new page
3. Run `pnpm dev` to preview

### Component Development
- UI components follow shadcn/ui patterns
- Use `cn()` utility from `lib/utils.ts` for class merging
- Icons from `lucide-react` and custom SVG components in `components/svg/`

### Environment Variables
Required variables (check `.env.template` if exists):
- `MONGODB_URI` - MongoDB connection string

### Build Process
1. `next build` creates optimized production build
2. `pagefind` runs post-build for search functionality
3. `next-sitemap` generates sitemap (disabled in postbuild)

## Testing
No test framework is configured in this documentation site. Testing is primarily manual through the dev server.

## Related Resources
- [ecosystem.Ai Platform Docs](/docs)
- [GitHub Repository](https://github.com/ecogenetic/ecosystem.ai)
- [Discord Community](https://discord.com/channels/1465898795949756458/1468558966513598526)
