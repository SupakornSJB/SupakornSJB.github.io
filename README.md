# Portfolio — Supakorn Senlamai (SupakornSJB)

Personal portfolio site built with React 19, TypeScript, Vite, and Tailwind CSS 4.
Live at [supakornsjb.github.io](https://supakornsjb.github.io).

## Getting started

```bash
npm install
npm run dev       # start dev server at http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Structure

- `src/data/content.ts` — single source of truth for all editable content:
  profile info, bio, education, the `TAGS` registry (canonical tag ids/labels
  shared by skills and project tech lists), skill groups, experience,
  projects, and live-site entries. Edit this file to update the site's
  content without touching component code.
- `src/components/` — one component per page section: `Hero`, `Profile`,
  `Experience`, `Projects`, `Skills`, `LiveSites`, `Blog`, `Contact`,
  `Footer`, plus `Nav` (mobile menu + theme toggle) and `TableOfContents`
  (desktop side nav / scroll indicator). `Slide` wraps each section into a
  fullscreen scroll-snap slide on desktop.
- `src/useTheme.ts` — dark/light theme hook (persisted to `localStorage`,
  toggled via `ThemeToggle`).
- `src/index.css` — Tailwind import, theme tokens for dark/light (`@theme`
  + `[data-theme="light"]`), and the decorative ambient background pattern.
- `.github/workflows/deploy.yml` — builds the site and deploys `dist/` to
  GitHub Pages on every push to `main`.

## To do

- [ ] Add a real resume PDF at `public/resume.pdf` and wire it up in
      `ResumeButton` — it currently renders as a disabled button with a
      "coming soon" tooltip.
- [ ] A couple of the AIT master's-project component repos (`ATITProject`,
      `ATITInfraNode`, `atit_micropython`) are private, so those project
      cards in `src/data/content.ts` currently link to the public
      `ATITFinalProject` architecture-docs repo instead. Point them at the
      real repos if/when they're made public.
