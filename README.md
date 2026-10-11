# Dalat Family Hostel

Current review increment: Family House homepage. See `DESIGN_REVIEW.md`; the original foundation notes below are historical where superseded.

Foundation increment built with Next.js App Router, React, TypeScript, Tailwind CSS and Lucide. Editorial pages are Server Components; only the mobile disclosure navigation uses client state. This is a development preview, not a booking website. It intentionally uses visible content and image-verification notes, and `noindex` metadata.

## Development

Use Node 24.19.0 (`.nvmrc`). From this checkout:

```sh
npm ci
npm run dev
```

The development server listens on port 3000. Use the existing isolated checkout in cloud tasks; do not create a worktree unless requested. `.npmrc` uses the ignored project-relative `.npm-cache` directory, so installation works without relying on writable home directories or a cloud-specific absolute path.

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

Start requires a successful build. Stop a running server before the browser suite starts its own production server:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:e2e
```

The cloud machine provides Chromium. On other machines, run `npx playwright install chromium` and omit the executable-path override. The managed browser download was denied by the cloud network proxy; no network policy change is required when using the installed system browser. Browser tests cover rendered page navigation, keyboard skip-link behaviour, narrow-screen overflow, and mobile menu keyboard/close behaviour on desktop and phone contexts. They are not a full accessibility audit.
If port 3000 is already in use, set `PLAYWRIGHT_PORT` to a free port (for example, `PLAYWRIGHT_PORT=3001`) rather than stopping an unrelated server.

## Architecture and decisions

- `src/app`: homepage, static sitemap topic routes, layout, metadata and global styles.
- `src/components/layout`: shared header/footer, desktop sitemap dropdowns and mobile disclosure.
- `src/components/pages`: reusable server-rendered topic page layout, editorial guide hubs, and the Things to Do and Getting Around Da Lat pages.
- `src/components/ui`: responsive container, native button and navigation-link variants.
- `src/content/site.ts`: confirmed identity, booking destinations and social links.
- `src/content/navigation.ts`, `src/content/pages.ts`, `src/content/experience-pages.ts`, `src/content/travel-guides.ts`, `src/content/guides.ts`, and `src/content/guide-copy.json`: sitemap, static page content, experience copy, and the searchable guide collection with its supplied article copy and SEO metadata. The editorial `/guides` hub and its static `/guides/[slug]` pages share that collection.
- `fonts`: local font assets and their SIL Open Font License files. Be Vietnam Pro 5.3.0 is self-hosted from Fontsource with Latin, Latin Extended and Vietnamese subsets; Story Script headings use the Google Fonts asset bundled through `next/font/local`.
- `tests/e2e`: representative functional checks with Playwright.

Versions are pinned by package.json and package-lock.json. TypeScript 6.0.3 is used because current typescript-eslint rejects TypeScript 7; ESLint 9 is required by current React/accessibility plugin peer ranges, although npm marks that release line unsupported. Revisit the lint ecosystem when plugin support for ESLint 10 is available. Tailwind 4 uses its PostCSS plugin and semantic CSS variables rather than a legacy configuration file.

No Motion dependency, enquiry form, speculative room inventory, stock photography or analytics are included. Sitemap topic pages identify unverified property details as development blockers rather than filling them with invented information. Experience pages contain supplied draft copy and clearly flag schedules, providers, costs, inclusions and safety details that need confirmation. Main colours follow DESIGN_SYSTEM.md; reusable controls use semantic variants and visible focus. Story Script is self-hosted with `next/font/local`, and Be Vietnam Pro is self-hosted through Fontsource CSS; neither font requires a Google Fonts connection at runtime.

## Before the next increment

Before launch, verify the supplied image assets’ licensing and property match; confirm rooms and policies; and provide a verified booking/contact destination. Validate full accessibility and performance, complete legal/contact information, test the actual booking journey, and remove noindex only as part of an approved launch. Nothing has been deployed or pushed.

## Foundation validation (10 October 2026)

Passed: frozen-lockfile `npm ci`, lint with zero warnings, TypeScript check, optimised production build, development HTTP/content/stylesheet smoke checks, and all six Playwright cases using system Chromium (desktop and phone contexts). npm production dependency audit reported zero vulnerabilities. A mobile screenshot was inspected. The managed browser download was blocked, but browser execution succeeded using `/usr/bin/chromium`.

Still unrun: full manual accessibility audit, Safari/Firefox validation, real-device testing, performance audit, booking/contact integration and deployment. The initial TypeScript 7 lint failure was resolved by pinning the supported 6.0.3 release. Cloud install and startup instructions were saved as a configuration draft; this is not publication or a new-task restoration test.

## Current Family House redesign

The later homepage increment supersedes the foundation's pine colours and Bricolage/Be Vietnam typography with the approved cream/blue/red palette, Story Script headings, and Be Vietnam Pro body copy. See DESIGN_REVIEW.md for current scope, component behaviour and content/asset requirements. The homepage remains noindex, with clearly identified development placeholders. Owner-supplied Hostelworld, Booking.com and Agoda property links are cleaned and guarded; live reachability is not fully verified. Owner-supplied Instagram, Facebook and TikTok profiles, address, telephone and email are linked on relevant pages and in the footer. No separate message link is published without verification.
