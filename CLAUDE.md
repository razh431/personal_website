# Portfolio Website

## Project Overview
Personal portfolio website for Rachel Zhou. Built with React + TypeScript + Vite + Tailwind CSS.

## Repository
- GitHub: `razh431/razh431.github.io` (GitHub Pages user site)
- Remote: `git@github.com:razh431/razh431.github.io.git`
- Source code lives on `main` branch
- Deployed site lives on `gh-pages` branch

## Custom Domain
- Domain: `razhou.com` / `www.razhou.com` (registered at Squarespace)
- CNAME file in `public/CNAME` contains `www.razhou.com`
- Squarespace DNS configured with:
  - CNAME `www` → `razh431.github.io`
  - A records `@` → GitHub Pages IPs (185.199.108-111.153)
  - TXT `_github-pages-challenge-razh431` for domain verification

## Development
- `npm run dev` — local dev server
- `npm run build` — TypeScript check + Vite build (output to `dist/`)
- `npm run preview` — preview built site locally
- `npm run deploy` — builds and deploys `dist/` to `gh-pages` branch via `gh-pages` package

## Project Structure
- `src/` — React source code
  - `src/components/` — Page sections (Hero, About, Experience, Projects, etc.)
  - `src/hooks/` — Custom hooks (useReveal)
  - `src/App.tsx` — Main app component
  - `src/main.tsx` — Entry point
- `public/` — Static files copied to dist (CNAME lives here)
- `dist/` — Build output (gitignored)
- `assets/` — Static assets (images, etc.)

## Important Notes
- **NEVER deploy with `gh-pages -d dist -b main`** — this force-pushes built files to `main` and destroys source code. Always deploy to `gh-pages` branch (the default).
- CNAME must be in `public/` so Vite copies it to `dist/` during builds.
- GitHub Pages is configured to serve from the `gh-pages` branch.
- Enforce HTTPS should be enabled in GitHub Pages settings once SSL certificate is provisioned.
