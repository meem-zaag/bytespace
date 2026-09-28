# ByteSpace — Project Guide for Claude

Static education website built pixel-perfect from Figma. Read this fully before any work.

## Design source

- Figma (working copy, the one we have access to): file key `gYTIC9Gf1NO0oUJK0PrK2J`
  (“ByteSpace-New-Check-website (Copy)”). Original key `26TBgRjmpuxudcErJsHUfy` is not accessible.
- Single page `Design` (0:1). All frames are **desktop 1440px only** — no tablet/mobile frames.

| Page                         | Node      | Route                             |
| ---------------------------- | --------- | --------------------------------- |
| Landing (Home)               | `1:1067`  | `/`                               |
| Signup (Register)            | `47:351`  | `/signup`                         |
| Signin (Login)               | `49:195`  | `/signin`                         |
| Courses list (Search Page)   | `55:117`  | `/courses`                        |
| Course Details — About tab   | `55:4066` | `/courses/[slug]` (tab `about`)   |
| Course Details — Lessons tab | `60:102`  | `/courses/[slug]` (tab `lessons`) |
| Course Details — Reviews tab | `60:681`  | `/courses/[slug]` (tab `reviews`) |
| Creator Profile              | `60:1878` | `/creators/[slug]`                |
| 404                          | `63:252`  | `not-found.js`                    |

| Style Guide page | `63:645` (Colors `73:753`, Layout Grid `73:1014`, Typography `73:1039`) | — |

- Never guess values: read them from Figma. The Figma MCP quota (Starter plan) is exhausted, so use the
  **Figma REST API** with the read-only personal access token stored at `~/.config/figma/token`
  (outside the repo, mode 600). Example:
  `curl -s -H "X-Figma-Token: $(tr -d '[:space:]' < ~/.config/figma/token)" "https://api.figma.com/v1/files/gYTIC9Gf1NO0oUJK0PrK2J/nodes?ids=<id>"`
  and `GET /v1/images/<fileKey>?ids=<id>&format=svg|png&scale=2` for asset exports. Keep raw API dumps in
  the session scratchpad, never in the repo.
- Never print, echo, commit or paste the token anywhere.

## Design tokens (from the Style Guide page — canonical when frames disagree)

Colors (Tailwind names → hex):

- `neutral` (Figma “Shuttle Gray”): 50 `#F5F5F6`, 100 `#E5E6E8`, 200 `#CED0D3`, 300 `#ABAEB5`,
  400 `#82868E`, 500 `#666973`, 600 `#585A62`, 700 `#4B4C53`, 800 `#424348`, 900 `#3A3B3F`, 950 `#242528`
- `primary` (Figma “Persian Blue”): 50 `#E7F6FF`, 100 `#D3EEFF`, 200 `#B0DDFF`, 300 `#81C5FF`,
  400 `#4F9DFF`, 500 `#2872FF`, 600 `#0445FF`, 700 `#0043FF`, 800 `#003BE2` (brand), 900 `#0B36A4`,
  950 `#071E5F`
- `lime` (Figma “Electric Lime”): 50 `#FDFFE4`, 100 `#FAFFC5`, 200 `#F2FF92`, 300 `#E4FF54`,
  400 `#D4FB20` (brand), 500 `#CBFC01`, 600 `#8CB400`, 700 `#6A8902`, 800 `#546B09`, 900 `#465A0D`,
  950 `#243300`
- Extras used in frames: violet 50 `#F5F2FF`, 600 `#7F30F7`, 950 `#300B6A`; ink 200 `#D1D1D1`,
  700 `#4F4F4F`; black, white.

Typography (all headings letter-spacing −1% = `-0.01em`; body/labels 0):

- Poppins SemiBold: Heading L 72/120%, Heading M 44/120%, Heading S 36/120%, Heading XS 20/120%
- Poppins Medium (used in frames, not in guide): Display S 44/52px, Display XS 36/44px
- Satoshi Regular: Body L 18, Body M 16, Body S 14, Body XS 12 — all 160%
- Satoshi Medium: Label XL 20, Label L 18, Label M 16, Label S 14, Label XS 12 — all 120%
- Clash Display Bold 24: logo wordmark only (logo shipped as SVG)

Layout grid: 12 columns, 120px margin, 40px gutter, 1200px content at 1440. Header height 120px.
Radii: 24 cards/buttons/chips, 12 card media, full for search/email inputs.
Shadow “A”: 8-layer soft drop shadow (floating stat cards). Borders: 1px `neutral-200`.

## Decorative 3D shapes

`public/images/decor/{spring,coil,torus,cylinder,pyramid,cone}-{lime,white}.webp` are rebuilt from the
Figma source renders (image fills) exactly like Figma composites them: the grey render with a solid
`#D4FB20` / `#F5F5F6` layer in HARD_LIGHT blend, masked by the render's alpha. Place them with
`components/ui/DecorShape` at the Figma coordinates (size via `--decor-size`, so responsive
`size-*` classes can override it without `!important`).

## Design corrections (approved by the user — apply instead of copying the frame)

- Course tab label: “Lessons” everywhere. Lesson modules numbered sequentially (Figma skips Module 3).
- “Sneak Peak” → “Sneak Peek”. Creator bio: real creator name instead of “[Creator's Name]”,
  “ive into” → “Dive into”.
- Footer newsletter button: “Subscribe” (not “Search”). Copyright year: current year.
- Share button aligned inside the 1200px container.
- Rating breakdown rows show 5, 4, 3, 2, 1 stars (not 5 stars on every row).
- Header nav highlights the current route (not always “Home”).
- Footer column titles (“Browse”, “Platform”) are transparent in Figma: render them visually hidden
  (screen-reader only).
- Ignore hidden/off-canvas layers.
- Accessibility over exact grey: muted text uses `neutral-500` (`#666973`, 5.6:1) instead of Figma's
  `#82868E`/`#888888` (3.65:1 fails WCAG AA); links inside sentences are underlined.

## Product decisions

- A Creators list page (`/creators`) is built even though Figma has no frame: new `CreatorCard` in the
  CourseCard visual language.
- Signup has only Full Name, Email, Password (no confirm-password field — not in the design).
- States missing from the design (hover/focus/active/disabled/error/loading/empty/dropdowns/mobile menu)
  are derived from the design language: lime-300 hover / lime-500 pressed on lime buttons, blue focus ring, antd error styles themed
  with our tokens.

## Stack

- Next.js (latest stable, App Router), **JavaScript only** (`.js`/`.jsx`, no TypeScript). `src/` dir.
  `jsconfig.json` with `@/*` → `src/*`. Document component props with JSDoc (`@param {object} props`, typedefs).
- Node 22 LTS (via nvm), npm.
- Tailwind CSS v4 (CSS-first). All design tokens live in the `@theme` block in `src/app/globals.css`.
  No scattered hex values; arbitrary values only for one-off pixel-exact needs.
- Ant Design for ALL forms/inputs (Form, Input, Input.Password, Select, Checkbox, Rate, Tabs, Pagination,
  form Buttons, message/notification).
- Zustand (small, purpose-specific stores only), Lenis (smooth scroll), Framer Motion (animations).
- ESLint + Prettier (`prettier-plugin-tailwindcss`). Scripts: `dev`, `build`, `lint`, `format`.
- Deployed on Vercel, fully static: no API routes, no backend, no DB. `generateStaticParams` for dynamic
  routes, static metadata.

## Folder structure

```
src/
  app/                 # routes only: compose sections, fetch via lib/api
    layout.js  not-found.js  globals.css  sitemap.js  robots.js   # root: html/body/providers
    (site)/layout.js     # Header (+ Footer) chrome, header overlays the blue hero
    (site)/page.js  (site)/courses/...  (site)/creators/...
    (auth)/layout.js  (auth)/signup/page.js  (auth)/signin/page.js   # no site chrome
  components/
    icons/     # one SVG React component per icon (Material Symbols + brand marks), currentColor
    ui/        # primitives: Logo, AppButton, Container, Heading, Chip, Badge, Avatar, AvatarGroup,
               # Rating, ProgressBar, FormInput, PasswordInput, SelectField, SearchInput, Pagination, GridBackdrop
    common/    # composed & reused: CourseCard, CourseGrid, CategoryChips, CourseToolbar, SectionHeader,
               # FloatingStatCard(s), TestimonialCard, ReviewCard, LessonItem, CreatorSummary, CheckList
    layout/    # Header, MobileMenu, Footer, NewsletterForm
    motion/    # FadeIn, Reveal, Stagger + variants.js
  sections/
    common/    # CtaBanner, BlueHero shell, etc. (used on >1 page)
    landing/  courses/  course-details/  creator-details/  auth/  not-found/
  lib/
    data/      # plain JS content: courses, creators, lessons, reviews, categories, landing, testimonials,
               # navigation, footer
    api/       # the ONLY data access layer: courses.js, creators.js, reviews.js, lessons.js
    constants/ # routes.js, site.js (metadata), navigation.js, social.js
    services/  # auth.js (simulated submit handlers)
    antd/      # theme.js (ONE file: design tokens + component tokens)
    utils/     # cn.js, formatters.js
  store/       # zustand stores
  hooks/
  providers/   # AntdProvider, LenisProvider, Providers (composition)
public/
  images/{courses,people,<page-or-section>}/...   (fonts are fetched at build, not committed)
```

## Architecture rules

- Page = composition of sections. Section = composition of components. Page files only compose sections
  and call `lib/api` helpers.
- Anything used on more than one page is a props-driven component/section in a `common` folder.
- One component per file, PascalCase filenames, **default export** for components; named exports for
  helpers/hooks/stores/constants.
- Server Components by default. `"use client"` only for animation, Lenis, Zustand, antd forms,
  interactivity (tabs, menus, filters).
- `next/font` (Poppins via Google; Satoshi via `next/font/local`). Satoshi files are NOT committed
  (Fontshare FFL forbids public redistribution): `scripts/fetch-fonts.mjs` downloads them into the
  git-ignored `src/fonts/` before `dev`/`build`. Clash Display is only in the logo, shipped as SVG.
  `next/image` for raster images (always width/height or `fill` + sizes), `next/link`, semantic HTML,
  per-page metadata (title, description, Open Graph), accessible markup (alt, aria, focus-visible,
  keyboard nav).
- Icons: SVG React components (Material Symbols Outlined/Filled as used in Figma), exported from Figma.
- Animations: shared variants in `components/motion`, respect `prefers-reduced-motion`, purposeful only.

## Data layer rules

- All content in `src/lib/data/*.js`. Components never hardcode content.
- Relations: a creator has many courses; each course has `creatorId` + `creatorSlug`. Reviews and lessons
  reference `courseId`. No duplicated data across files — derive via helpers.
- Access ONLY through `src/lib/api/*`: `getAllCourses`, `getCourseBySlug`, `getCoursesByCreator`,
  `getAllCreators`, `getCreatorBySlug`, `getLessonsByCourse`, `getReviewsByCourse`,
  `getReviewSummary`, `getCategories`, etc. Helpers are async so an API can replace them later.
- Derived, never stored twice: course `rating`/`reviewCount` come from `ratingBreakdown`; a creator's
  `courseCount`/`studentCount` and course list come from courses that reference the creator.
- Model: `creators` ← `courses` (`creatorId`, `creatorSlug`, `categoryId`, `learnerIds`) → `lessons`
  (modules with lessons, by `courseId`) and `reviews` (by `courseId` + `learnerId`); `learners` are
  review authors and card avatar stacks. Images live in `public/images/{courses,people}`.
- Use Figma copy verbatim where it exists; generate consistent dummy data for extra items.
- Forms have no backend: submit handlers live in `src/lib/services/auth.js`, simulate latency, return a
  success result; UI shows antd `message`. Never store credentials.

## Ant Design customization rules

- Official App Router setup: `@ant-design/nextjs-registry` (`AntdRegistry`) in the root layout; follow
  the current antd docs for React 19 compatibility.
- One theme file `src/lib/antd/theme.js` (global tokens + component tokens) mapped from the same design
  tokens as Tailwind. Consumed by a single `ConfigProvider` in `providers/AntdProvider.jsx`.
- Tailwind ↔ antd conflicts solved with CSS cascade layers (antd `StyleProvider layer` +
  `@layer theme, base, antd, components, utilities;`). **No `!important`.**
- Pages never import raw antd controls for styling decisions — use wrappers in `components/ui`
  (`FormInput`, `PasswordInput`, `SelectField`, `AppButton`, …). Use `classNames`/`styles` props or
  Tailwind for what tokens can't cover.

## Responsiveness

- Pixel-perfect at 1440. Mobile-first Tailwind, works 320 → 1920+. Verify at 320, 375, 425, 768, 1024,
  1280, 1440, 1920: no horizontal scroll, overlaps or clipping. Header collapses to a mobile menu.
- Content container: 1200px max, 120px side gutters at 1440.

## Git & GitHub workflow (strict)

Repo is PUBLIC: never commit secrets, tokens, `.env*` files or Figma tokens.

1. After the initial commit on `main`, **never push to `main` directly.**
2. Every component/section gets its OWN branch, one at a time:
   - `git checkout main && git pull`
   - `git checkout -b feat/<name>` (or `chore/`, `fix/`, `docs/`)
   - implement ONLY that component/section (+ data/lib files it strictly needs)
   - `npm run lint` and `npm run build` — zero errors AND zero warnings
   - compare against Figma at desktop, tablet, mobile widths; fix differences
   - Conventional Commit, e.g. `feat(header): add responsive header with mobile menu`
   - push, open a PR with `gh pr create` (title, description, what was built, checklist)
   - **STOP and wait for the user's approval.** After approval: `gh pr merge <n> --squash`
     (do NOT delete branches), then `git checkout main && git pull`.
3. Never bundle multiple components/sections in one branch.

## Quality bar

- No unused code, console logs, dead files, TODOs, or commented-out code.
- Lint + build pass with zero warnings before every PR.
- No layout shift (image dimensions), proper font loading, minimal client components, dynamic import for
  heavy client-only pieces.
