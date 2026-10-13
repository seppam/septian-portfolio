# Portfolio v2: Muhamad Septian Pamungkas

Bilingual (EN/ID) portfolio site, statically rendered. Next.js (App Router), TypeScript, Tailwind CSS v4, Geist fonts via `next/font`, light/dark follows the system. A small proxy only serves the localized 404 status; no cookies; the only third-party script is Vercel Web Analytics.

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
BASE=http://localhost:3100 node scripts/a11y.mjs     # axe-core, home, case studies and 404 in English and Indonesian, light/dark, 390/1440 px
BASE=http://localhost:3100 node scripts/screens.mjs  # screenshots into docs/preview/ (both languages), overflow, above-the-fold, lang and no-CV/no-WhatsApp checks
npx lighthouse http://localhost:3100 --form-factor=mobile
```

The scripts drive installed Google Chrome (`CHROME_CHANNEL` overrides the channel).

## Languages (EN / ID)

English is served at `/` and `/work/<slug>`, Indonesian at `/id` and `/id/work/<slug>`. A visible EN | ID toggle in the nav is a plain link to the same page in the other language (works without JavaScript). Each page has `<html lang>`, a per-language canonical URL, `hreflang` alternates (including `x-default`), and both languages are in `sitemap.xml`.

How it is built (Next.js 16, App Router): all routes live under `src/app/[lang]`. `next.config.ts` rewrites `/` and `/work/:slug` to `/en/...` and redirects `/en/...` back, so English has no prefix. `src/proxy.ts` sends every unknown URL to the 404 page of the right language with a real 404 status (`/nope` in English, `/id/nope` in Indonesian); it also needs the list of case-study slugs, which it reads from `src/data/projects.ts`.

## Edit content

Every user-visible text is `{ en, id }`. Write the English and the Indonesian together; the page for each language reads its own side.

- `src/data/projects.ts`: every project (`meta`, `oneLiner`, `bullets`, image `alt` and `caption` are `{ en, id }`). Add an object and the card, case-study route (if `caseStudy: true` and a matching entry in `src/data/case-studies.ts`), sitemap and link checker pick it up. Tier 1 = large cards (exactly 3 bullets), tier 2 = engineering rows, tier 3 = collapsed "Earlier experiments". Only tier 1 projects can show a "Live" badge (URSSET and GameForge AI today); tier 3 links are plain "Open demo" buttons.
- `src/data/profile.ts`: hero text, the one "open to hybrid and remote roles" line, proof strip, About, credentials (and the Google Drive certificates folder link), timeline, contact.
- `src/data/case-studies.ts`: case-study text per slug, `{ en: ..., id: ... }`.
- `src/data/i18n.ts`: labels and buttons (`ui`), the `langHref` helper.
- `src/data/site.ts`: `SITE_URL` (`https://septian-pamungkas.vercel.app`, or set `NEXT_PUBLIC_SITE_URL`), titles and descriptions per language.
- Photo: replace `public/images/profile.webp` (hero) and `public/images/profile-og.jpg` (share image and JSON-LD). Keep a 4:5 crop.
- There is deliberately no CV download and no phone number on the site. Contact is email, LinkedIn and GitHub.

### Live badges and the link checker

`scripts/check-links.mjs` requests every `live:` URL in `projects.ts` before each build and writes `src/data/link-status.json`. A "Live" badge appears only for tier 1 URLs that returned 200; anything else shows "Demo offline" (or nothing) and the build log prints a loud warning. It also warns about repo, YouTube and certificate-folder links that are not 200. Use `npm run check-links -- --strict` to fail instead. Commit the updated JSON.

### Add screenshots and a clip (for example GameForge AI)

Images: WebP, at most 120 KB, 1440 wide (desktop) or 780x1688 (phone). Put them in `public/work/<slug>/` and list them in the project's `images` array:

```ts
images: [
  { src: "/work/gameforge/studio-start.webp", kind: "desktop", width: 1440, height: 738,
    alt: { en: "What the screen shows", id: "Apa yang tampak di layar" },
    caption: { en: "Visible caption", id: "Keterangan yang terlihat" } },
],
```

The card and case study show the screenshots (the pipeline diagram stays in the case-study Approach section). Review every frame for secrets, emails, tokens and other people's data before it goes in the repo, and crop browser chrome, the menu bar and the dock. Never commit the original screen recordings.

A short clip: silent H.264 mp4, at most 5 MB, plus a WebP poster, set as `clip: { src, poster, width, height, label: { en, id } }` on the project. It is shown on the first desktop screenshot's frame (same aspect ratio) behind a play button, and the video is requested only after a click. Example: `ffmpeg -ss 158 -t 9 -i recording.mov -an -vf "crop=W:H:X:Y,fps=24,scale=1280:-2" -c:v libx264 -crf 30 -pix_fmt yuv420p -movflags +faststart demo.mp4`.

## Deploy (Vercel CLI)

The repository is `seppam/septian-portfolio` and the Vercel project is `septian-pamungkas` (the production URL is `https://septian-pamungkas.vercel.app`).

```bash
vercel whoami
vercel link --yes --project septian-pamungkas   # once per clone
vercel deploy --prod --yes
vercel inspect <deployment-url>
```

There are no environment variables. Web Analytics (`@vercel/analytics`) only reports after you enable it in the Vercel dashboard: project, Analytics tab, Enable.

## Licence

MIT, see `LICENSE`. Project screenshots are of the owner's own live apps; the profile photo is the owner's.
