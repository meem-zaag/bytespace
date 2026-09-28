# ByteSpace

A static education website — landing page, course catalog, course details, creators and auth
screens — built pixel-perfect from the ByteSpace Figma design.

- **Fully static**: every page is prerendered; no backend, API routes or database.
- **Responsive** from 320px to 1920px+ (the design is a 1440px desktop frame; smaller layouts are
  derived from it).
- **Accessible** (axe-core: 0 violations) and **fast** (Lighthouse desktop 98–99, CLS 0).

## Tech stack

| Area           | Choice                                                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) App Router, **JavaScript** (`.js`/`.jsx`) with JSDoc props               |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com) — design tokens in the `@theme` block of `src/app/globals.css` |
| Forms & inputs | [Ant Design 6](https://ant.design) themed from one file (`src/lib/antd/theme.js`)                         |
| State          | [Zustand](https://zustand.docs.pmnd.rs) — small stores (mobile menu, catalog filters, creator search)     |
| Motion         | [Framer Motion](https://motion.dev) (`motion` package) for scroll reveals, CSS keyframes for loops        |
| Smooth scroll  | [Lenis](https://lenis.darkroom.engineering)                                                               |
| Tooling        | ESLint (zero warnings), Prettier + `prettier-plugin-tailwindcss`                                          |
| Hosting        | [Vercel](https://vercel.com)                                                                              |

## Getting started

Requirements: **Node.js 20.9+** (22 LTS recommended — see `.nvmrc`) and npm.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script                            | What it does                                                              |
| --------------------------------- | ------------------------------------------------------------------------- |
| `npm run dev`                     | Development server (fetches fonts first)                                  |
| `npm run build`                   | Production build — prerenders every page (fetches fonts first)            |
| `npm run start`                   | Serves the production build                                               |
| `npm run lint`                    | ESLint, fails on any warning                                              |
| `npm run format` / `format:check` | Prettier (with Tailwind class sorting)                                    |
| `npm run fonts`                   | Downloads the Satoshi web fonts (runs automatically before `dev`/`build`) |

> **Fonts:** Poppins comes from Google Fonts via `next/font`. Satoshi is licensed by Fontshare
> (free, but its license forbids redistributing the files in a public repository), so
> `scripts/fetch-fonts.mjs` downloads it into the git-ignored `src/fonts/` before `dev` and `build`.

## Routes

| Route                | Page                                                                      |
| -------------------- | ------------------------------------------------------------------------- |
| `/`                  | Landing                                                                   |
| `/courses`           | Catalog with search (`?q=`), filters, sort, category chips and pagination |
| `/courses/[slug]`    | Course details with About / Lessons / Reviews tabs (`?tab=lessons`)       |
| `/creators`          | Creators list with search (`?q=`)                                         |
| `/creators/[slug]`   | Creator profile with their courses                                        |
| `/signup`, `/signin` | Auth screens (validated forms, simulated submit)                          |
| any other path       | Custom 404                                                                |

Plus generated `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, favicon, Apple icon and Open
Graph image.

## Project structure

```
src/
  app/                  routes only — compose sections and read data through lib/api
    (site)/             pages with header + footer (landing, courses, creators)
    (auth)/             sign-up / sign-in (no site chrome)
    layout.js           html/body, fonts, providers, skip link, root metadata
    not-found.js  sitemap.js  robots.js  manifest.js  opengraph-image.js  apple-icon.js  icon.svg
  sections/             page sections (landing/, courses/, course-details/, creators/, …, common/)
  components/
    ui/                 primitives: AppButton, Chip, Pill, Tag, Heading, Container, Avatar, …
    ui/form/            antd wrappers: AppForm, FormInput, PasswordInput, SubmitButton, SearchInput, …
    common/             reusable composed components: CourseCard, CreatorCard, ReviewCard, …
    layout/             Header, MobileMenu, Footer, NewsletterForm
    motion/             FadeIn, Stagger, Float + shared variants
    icons/              SVG icon components (currentColor)
    auth/               pieces shared by the auth forms
  lib/
    data/               all content as plain JS (courses, creators, lessons, reviews, landing, …)
    api/                the ONLY way pages read data (async helpers)
    constants/          routes, site metadata, navigation, filters, validation rules, brand
    services/           simulated submits (auth, newsletter) — swap for real APIs later
    antd/theme.js       the single Ant Design theme
    utils/              cn(), formatters, filterCourses(), seo helpers
  store/                zustand stores
  providers/            Antd, Motion, Lenis providers
  hooks/
public/images/          courses/, people/, landing/, decor/ (3D shapes)
```

Rules of thumb: pages compose **sections**, sections compose **components**, anything used twice
lives in a `common` folder, and components never hardcode content. See [`CLAUDE.md`](CLAUDE.md) for
the full conventions.

## Working with content

All content lives in `src/lib/data/` and is read only through `src/lib/api/`, so the data source can
later be replaced by a real API without touching components.

**Add a course** — append an object to `courses` in `src/lib/data/courses.js`:

- reference an existing creator with `creatorId` + `creatorSlug`, a category with `categoryId`,
  and learners (card avatars) with `learnerIds`;
- put the thumbnail in `public/images/courses/` and reference it via `thumbnail`/`preview`/`gallery`;
- add its curriculum to `CURRICULA` in `lessons.js` and some reviews to `reviews.js` (both keyed by
  the course `id`).

The course page, catalog, creator page, sitemap and metadata pick it up automatically. Ratings and
review counts are **derived** from `ratingBreakdown`; a creator's course/student counts are derived
from the courses that reference them — never store them twice.

**Add a creator** — append to `creators.js` (photo in `public/images/people/`), then point courses at
it.

## Design system

- **Tokens** (colors, type scale, spacing, radii, shadows, animations) are defined once in
  `src/app/globals.css` → `@theme`, taken from the Figma Style Guide page. Use them as Tailwind
  classes (`bg-primary-800`, `text-heading-m`, `rounded-card`, …).
- **Ant Design** is themed in `src/lib/antd/theme.js` and its styles live in the `antd` CSS cascade
  layer, so Tailwind utilities override it without `!important`. Pages use the wrappers in
  `components/ui/form`, never raw antd styling.
- **3D shapes** in `public/images/decor/` and the photo shadows are pre-rendered from the Figma
  sources (see `CLAUDE.md`).

## Forms

Sign-up, sign-in and the newsletter are complete UI with client-side validation, loading states and
success feedback, but **no request leaves the browser and nothing is stored**. The submit logic is
isolated in `src/lib/services/` — replace those functions to connect a real backend.

## Deploying to Vercel

1. Import the GitHub repository in Vercel (framework preset: **Next.js**, default build command).
2. Set the environment variable **`NEXT_PUBLIC_SITE_URL`** to the production URL (for example
   `https://bytespace.vercel.app`). It's used for canonical URLs, Open Graph, the sitemap and robots.
3. Deploy. Every page is prerendered at build time; the build fetches the Satoshi fonts
   automatically.

No secrets are needed — the repository contains no `.env` files or tokens.

## Contributing

Every component/section is built on its own branch (`feat/…`, `fix/…`, `chore/…`), passes
`npm run lint`, `npm run build` and `npm run format:check`, is compared against Figma at desktop,
tablet and mobile widths, and lands through a squash-merged pull request with a Conventional Commit
title. Details in [`CLAUDE.md`](CLAUDE.md).
