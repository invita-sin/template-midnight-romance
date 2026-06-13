# AGENTS.md — template-midnight-romance

Single-page Next.js static export for GitHub Pages. See `.agents/prd.md` for full spec.

## Stack & config

- Next.js 15 App Router + TypeScript + Tailwind CSS 4 + PostCSS
- `framer-motion` for animations, `lucide-react` for icons (devDep)
- Package manager: **npm** (root hub uses pnpm — do not mix)
- `next.config.ts` must keep: `output: "export"`, `basePath: "/template-midnight-romance"`, `trailingSlash: true`, `images: { unoptimized: true }`
- `tsconfig.json`: `@/*` path alias, `strict: true`, `moduleResolution: "bundler"`
- Zero runtime API calls — fully static. No `fetch`/`axios`.

## Dev commands

```bash
npm run dev      # local dev server
npm run build    # static export to out/
```

No test, lint, or typecheck scripts defined (add when introduced).

## Critical paths

- `config.json` at repo root — all wedding content. Edit this file, not code.
- `shared/components/TemplateRenderer.tsx` — orchestrator that composes all sections.
- `shared/utils/paths.ts` — `assetPath()` must prepend `basePath` for all image/audio URLs (prevents 404 on GH Pages subpath).
- Public assets: `public/templates/modern/midnight-romance/` (images, audio) and `public/decorations/modern/midnight-romance/` (SVGs).
- `theme-presets.css` — CSS variables for midnight theme (`--midnight-bg`, `--gold`, `--burgundy`).
- Tailwind custom colors: `midnight` (dark blues), `gold` (amber/yellow), `burgundy` (reds).
- Fonts: Playfair Display (`font-serif`), Inter (`font-sans`).
- `<body>` has `overflow-hidden` (cover animation constraint).

## Architecture

- **Entry**: `app/page.tsx` — imports `config.json` + `TemplateRenderer`
- **Sections** (in `shared/components/`): Cover, Couple, Event, Countdown, LoveStory, Gallery, Maps, RSVP, Gift, MusicPlayer, ThemeToggle
- **Hooks** (in `shared/hooks/`): `useCountdown`, `useMusicPlayer`, `useScrollAnimation`, `useTemplateConfig`
- **No routing** — single page only (`/`)
- **Music**: auto-play with mute toggle; on mobile require user tap (browser autoplay policy)

## Sync with root repo

This repo is a **git submodule** of `invita-sin/invita-sin.github.io` at `apps/template-midnight-romance/`.

- Source of truth for shared code (`shared/`, assets): root repo
- To sync: run `npm run sync:template` in root repo (copies `shared/`, public assets, auto-commits & pushes)
- Template-specific changes (`page.tsx`, `config.json`, `next.config.ts`, `theme-presets.css`): edit directly in this repo

## CI/CD

- `.github/workflows/deploy.yml` — push to `main` → build + deploy to GitHub Pages
- GH Pages source must be "GitHub Actions" (not `gh-pages` branch)
- Build output dir: `out/`
- Node 20, `npm ci`

## Conventions

- **WhatsApp number** (centralized): `6289697751622` — do not vary per template
- **No dark mode** — template has its own theme colors
- **SEO**: JSON-LD schema.org/Event in `layout.tsx`
- **Responsive**: test 360px–1440px
- **Custom scrollbar** defined in `globals.css`
- **Lighthouse targets**: Performance ≥ 80, Accessibility ≥ 90 (WCAG AA)
