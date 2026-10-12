# Portfolio v2: Muhamad Septian Pamungkas

Static portfolio site. Next.js (App Router), TypeScript, Tailwind CSS v4, Geist fonts via `next/font`, light/dark follows the system. No server runtime, no cookies; the only third-party script is Vercel Web Analytics.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint && npm run typecheck
npm run build        # runs the link checker first (prebuild), then next build
npm start            # serve the production build
```

Checks (start `npm start -- -p 3100` first, then):

```bash
BASE=http://localhost:3100 node scripts/a11y.mjs     # axe-core, home + case studies, light/dark, 390/1440 px
BASE=http://localhost:3100 node scripts/screens.mjs  # screenshots into docs/preview/, overflow + above-the-fold check
npx lighthouse http://localhost:3100 --form-factor=mobile
```

The scripts drive installed Google Chrome (`CHROME_CHANNEL` overrides the channel).

## Edit content

- `src/data/projects.ts`: every project. Add an object and the card, case-study route (if `caseStudy: true` and a matching entry in `src/data/case-studies.ts`), sitemap and link checker pick it up. Tier 1 = large cards (exactly 3 bullets), tier 2 = engineering rows, tier 3 = collapsed "Earlier experiments".
- `src/data/profile.ts`: hero text, proof strip, About, credentials, timeline, contact.
- `src/data/case-studies.ts`: case-study text per slug (the brief suggested MDX; plain typed data avoids a dependency).
- `src/data/site.ts`: `SITE_URL` (single constant, or set `NEXT_PUBLIC_SITE_URL`). Replace the default once you have the real Vercel name or a custom domain.
- Photo: replace `public/images/profile.webp` (hero) and `public/images/profile-og.jpg` (share image and JSON-LD). Keep a 4:5 crop.
- CVs: `public/cv.pdf` (English), `public/cv-id.pdf` (Indonesian).

### Live badges and the link checker

`scripts/check-links.mjs` requests every `live:` URL in `projects.ts` before each build and writes `src/data/link-status.json`. A "Live" badge appears only for URLs that returned 200; anything else shows "Demo offline" (or nothing) and the build log prints a loud warning. Use `npm run check-links -- --strict` to fail instead. Commit the updated JSON.

### Add GameForge screenshots

Put images in `public/work/gameforge/` (WebP, at most 120 KB, 1440x900 for desktop or 780x1688 for mobile), then in the GameForge entry of `projects.ts` change `images: []` to:

```ts
images: [
  { src: "/work/gameforge/editor.webp", alt: "What the screen shows", kind: "desktop", width: 1440, height: 900, caption: "Visible caption" },
],
```

The card and case study switch from the pipeline diagram to the screenshots (the case study keeps the diagram in Approach and adds a Screens section). Same for any other project.

## Deploy to Vercel (dashboard import)

1. Push this folder to a GitHub repository you own (not done yet; this repo is local only).
2. In Vercel: Add New, Project, import the repository. Framework preset Next.js, defaults are fine.
3. Open the Analytics tab and enable Web Analytics.
4. After the first deploy, set `SITE_URL` in `src/data/site.ts` (or the `NEXT_PUBLIC_SITE_URL` environment variable) to the real address and redeploy so canonical URLs, sitemap and the share image use it.

## Licence

MIT, see `LICENSE`. Project screenshots are of the owner's own live apps; the profile photo is the owner's.
