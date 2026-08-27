# Portfolio (Next.js + Tailwind + Sanity, fully dynamic)

Every word, link, image and section on this site is data-driven from **Sanity**
(headless CMS) — nothing is hardcoded in the components. Empty a section's
`items` in Sanity and that section disappears from the page automatically.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

For production:

```bash
npm run build
npm run start
```

## 2. Where the content lives

All content lives in your **Sanity Studio project** (see `.env.local` for the
project ID / dataset). `lib/data.js` fetches the single `siteContent` document
at request time via `lib/sanity.js`. The schema matching every section
(profile, about, research interests, education, experience, publications,
skills, projects, previous projects, ongoing research, achievements, FAQ,
references, contact, footer) is in `/sanity-schema/siteContent.js` — import it
into your Sanity Studio so the field names line up exactly.

## 3. Images

Every image field (profile photos, experience/organization logos, project
images) is a native Sanity `image` type. Upload them directly in Sanity
Studio — `lib/sanity.js` exports an `imageSrc()` helper that every component
uses to turn the Sanity image reference into a real URL, so nothing needs to
be placed under `/public` anymore.

## 4. Profile photo slideshow

Add as many images as you want to `profile.photos` in Sanity Studio. They
auto-rotate every `profile.photoSlideIntervalMs` milliseconds (default
2000ms = 2s).

## 5. The CV / "Get CV" button

Two modes, controlled by `profile.cv.mode` in Sanity Studio:

- `"auto"` (default) — clicking **Get CV** generates a clean, ATS-friendly PDF
  on the fly from whatever is currently in Sanity (education, experience,
  skills, publications, achievements...). Nothing to upload.
- `"manual"` — upload a PDF to `profile.cv.manualPdfUrl` in Sanity Studio. The
  button will download that exact file instead of generating one.

## 6. Social / platform icons auto-detect

You never pick an icon manually. Anywhere a URL is stored (`profile.socialLinks`,
`footer.socialLinks`, project `github`/`live` links), `lib/iconDetect.js` reads
the domain and shows the matching brand icon (GitHub, LinkedIn, Kaggle,
Facebook, YouTube, etc.). Add a new platform by adding one line to the
`PLATFORM_MAP` array in that file.

## 7. Projects: images & detail view

- Each project image renders at the aspect ratio given in its `aspectRatio`
  field (e.g. `"4 / 3"`). If you don't set one, it falls back to a landscape
  `16 / 10` ratio.
- Clicking a project card (image or title) opens a full detail modal with the
  complete bullet list, tags, and buttons to the GitHub repo / live demo. The
  modal scrolls internally if the content is taller than the screen.

## 8. Theme

- Light/Dark toggle (moon/sun icon, top right) — persisted in `localStorage`.
- Three accent color dots (blue / purple / green) — also persisted, and drive
  every gradient/accent color across the site via CSS variables in
  `app/globals.css`.

## 9. Environment variables

Set these in `.env.local` (already present for this project):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 10. Tech stack

- Next.js 14 (App Router)
- Sanity (next-sanity + @sanity/image-url) as the content source
- Tailwind CSS (theming via CSS variables, dark mode via `class` strategy)
- react-icons (brand + UI icons)
- jsPDF (client-side auto CV generation)
- Canvas-based constellation background (`components/ParticleBackground.js`) —
  no external animation library needed
