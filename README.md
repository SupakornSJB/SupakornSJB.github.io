# Portfolio — Supakorn Senlamai

Personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev       # start dev server at http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Structure

- `src/data/content.ts` — all editable content: profile info, bio, education,
  skills, projects, and certifications. Edit this file to update the site's
  content without touching any component code.
- `src/components/` — one component per section (Nav, Hero, About, Projects,
  Skills, Contact, Footer).
- `src/index.css` — Tailwind import and the dark theme's design tokens
  (colors, fonts) defined via `@theme`.

## To do before publishing

- [ ] Add a real resume PDF at `public/resume.pdf` (the Resume button already
      links to `/resume.pdf`; it 404s until the file exists).
- [ ] Double check the project links in `src/data/content.ts` — a couple of
      the AIT master's-project component repos (`ATITProject`, `ATITInfraNode`,
      `atit_micropython`) are private, so those cards currently link to the
      public `ATITFinalProject` architecture-docs repo instead.
- [ ] Pick a hosting target (GitHub Pages, Vercel, Netlify) and wire up deploy.
