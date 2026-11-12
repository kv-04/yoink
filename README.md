# Yoink
> Built by Me. 

> Grab it before it's gone.

Yoink is a full-stack e-commerce storefront built as a portfolio project. It started as a static HTML/CSS university assignment and is being rebuilt, phase by phase, into a production-style application.

**Status:** Phase 1 complete (design system and responsive storefront shell). Catalogue, auth, cart, checkout and an admin dashboard are next.

## Tech stack

| Area | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router) + React 19 | Routing, server rendering and API routes in one codebase |
| Language | TypeScript | Catches bugs at compile time |
| Styling | Tailwind CSS v4 with design tokens | Consistent, responsive, easy to retheme |
| Planned | PostgreSQL + Prisma, Auth.js, Stripe (test mode), Recharts, Vitest + Playwright | See roadmap |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

Optional environment variable (see `.env.example` once added in Phase 2):

- `NEXT_PUBLIC_SITE_URL`: public URL used for metadata (defaults to `http://localhost:3000`)

## Project structure

```
src/
  app/            Routes (file-based): /, /search, /shop/[slug], not-found
  components/     Reusable UI: Header, Hero, CategoryCard, Footer, ...
  config/         Brand-level settings (site name, tagline)
  lib/            Data and helpers (categories)
  fonts/          Self-hosted font files
docs/
  PHASE-1-WALKTHROUGH.md   What, why and how for each change, plus interview questions
```

## What Phase 1 includes

- Responsive homepage: promo bar, sticky header with search, category nav, hero, category grid, footer
- Server Components by default; one small Client Component for the mobile menu
- Accessibility: semantic landmarks, skip link, labelled controls, visible focus, reduced-motion support
- Dynamic category routes (`/shop/[slug]`) with static generation, metadata and an empty state
- Search page that safely handles user input, with a Suspense loading state
- Custom 404 page

## Roadmap

1. ✅ Scaffold, design system, responsive homepage
2. Database, seed data, product API, catalogue with search, filters, sorting and pagination
3. Authentication, cart and checkout (Stripe test mode)
4. Admin dashboard with sales and inventory charts
5. Tests, security pass, API docs, deployment

## Notes

- Demo store: no real products or payments.
- Category images are placeholders; replace with images you have the rights to use before publishing.

## Image credits
Photos from [Unsplash](https://unsplash.com): Photographer One, Photographer Two, ...

## License

© 2026 Karanveer Singh. Source available for viewing only.
