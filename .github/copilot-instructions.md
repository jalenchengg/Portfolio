## Quick orientation for AI coding agents

This is a small Next.js (app-router) project. The goal of this file is to provide concise, actionable evidence-based guidance so an AI can be immediately productive when changing code here.

Key facts

- Framework: Next.js (app router) — source lives under `app/` (e.g. `app/layout.tsx`, `app/page.tsx`).
- Next version: listed in `package.json` as `next@15.5.4`.
- Scripts: `npm run dev` runs `next dev --turbopack`; `npm run build` runs `next build --turbopack`; `npm start` runs `next start`.
- Styling: Tailwind is enabled through PostCSS plugin `@tailwindcss/postcss` (`postcss.config.mjs`) and global styles are in `app/globals.css`.
- Fonts: app-level fonts are loaded with `next/font/google` in `app/layout.tsx` (Geist/Geist_Mono) and exposed as CSS variables like `--font-geist-sans`.
- TypeScript: `tsconfig.json` uses `strict: true` and a path alias `"@/*": ["./*"]`.

What to read first (order matters)

1. `package.json` — verify scripts and dependency versions (Turbopack is enabled in scripts).
2. `app/layout.tsx` — how fonts, theme variables and global layout are composed (font variables + `globals.css`).
3. `app/globals.css` — color variables and Tailwind import; dark-mode rules are defined here.
4. `app/page.tsx` — the app entry page; small and intentionally minimal here.
5. `public/` — static assets (SVGs) used by UI components.

Patterns & conventions found in this repo

- App-router only: expect page and layout components under `app/` (not `pages/`). Keep server/client concerns explicit. If a component uses browser APIs, mark it as a client component ("use client").
- Fonts as CSS variables: `app/layout.tsx` registers fonts and exposes them as `--font-geist-sans` and `--font-geist-mono` — prefer using these variables in component styles.
- Color theming: `app/globals.css` defines `--background` and `--foreground` and switches them in `prefers-color-scheme: dark`.
- Assets: prefer `next/image` when importing images (see `app/page.tsx` usage) and reference SVGs from `public/` when appropriate.

Build & developer workflow (explicit commands)

- Install: use the project's preferred package manager (not pinned here). Typical commands:
  - `npm install`
  - `npm run dev` — starts Next dev server with turbopack (`next dev --turbopack`).
  - `npm run build` — builds with turbopack (`next build --turbopack`).
  - `npm start` — runs production server (`next start`).

Notes & gotchas for code edits

- Turbopack flags are present in scripts; if you see unusual behavior when running `dev` or `build`, try removing the `--turbopack` flag locally to diagnose (but do not change scripts without the user's consent).
- There are no test scripts or test framework files in the repo — do not assume unit tests exist.
- `components/` folder currently empty: new React components should go under `components/` and be imported by pages in `app/`.
- TypeScript is strict: ensure new code satisfies `tsconfig.json` rules (noEmit, strict). Pay attention to JSX types and `React.ReactNode` shapes used in `layout.tsx`.

Where to make common changes

- Global styles or theme: `app/globals.css` and `app/layout.tsx`.
- Route-level UI: create files under `app/<route>/page.tsx` and optional `layout.tsx` per route.
- Images/assets: add to `public/` and reference via `/asset.svg` or `next/image` import.

When in doubt

- Read `package.json` and `app/layout.tsx` first — they encode runtime flags (Turbopack), fonts, and global CSS.
- If behavior differs between local dev and build, check the `--turbopack` flags and the Next.js version in `package.json`.

If you need more details

- Tell me which area you want deeper examples for (routing, global styles, adding a component, or debugging build issues) and I will expand this file with code samples and exact places to edit.

References (examples in repo): `app/layout.tsx`, `app/globals.css`, `package.json`, `postcss.config.mjs`, `app/page.tsx`, `public/`.
