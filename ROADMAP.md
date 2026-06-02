# StreetBiz Foundation - Static Site Roadmap

This document outlines the transition to a modern static-first architecture for the StreetBiz Foundation website.

## Strategic Goals
- **Simplicity:** No databases or authentication systems.
- **Security:** Static site generation (SSG) eliminates common web vulnerabilities.
- **Speed:** Pre-rendered pages served from a CDN provide instant load times.
- **Maintainability:** Content managed directly in the codebase using TypeScript and Markdown.
- **Low Cost:** Can be hosted on any static hosting provider (Vercel, Netlify, GitHub Pages).

## Architecture
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Content:** Local files in `src/content/`
- **Deployment:** Static Site Generation (SSG) via `next build`

## Content Management
Content is managed in the `src/content/` directory:
- `/nelsons/`: Individual `.ts` files for each Nelson profile.
- `/stories/`: Individual `.ts` files for each impact story.
- `/events/`: Event details.
- `/projects/`: Project descriptions.

Developers and administrators can update content by adding or editing these files. The site is automatically rebuilt and deployed upon code changes.

## Current Progress
- [x] Remove Supabase/Auth/Admin dependencies.
- [x] Design local content models (TypeScript interfaces).
- [x] Migrate existing static data to `src/content/`.
- [x] Update dynamic routes to use `generateStaticParams` for full SSG.
- [x] Update UI components to handle flat content structure.

## Future Steps
- [ ] Add more Nelsons and Stories to the content directory.
- [ ] Implement Markdown/MDX support for longer story content if backticks become cumbersome.
- [ ] Set up automated deployment (CI/CD) to a static host.
- [ ] Implement a simple search functionality (client-side only).
