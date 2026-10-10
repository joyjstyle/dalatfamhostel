# Dalat Family Hostel

Foundation increment built with Next.js App Router, React, TypeScript, Tailwind CSS and Lucide. Editorial pages are Server Components; only the mobile disclosure navigation uses client state. This is a development preview, not a booking website. It intentionally uses visible content/photography placeholders and `noindex` metadata.

## Development

Use Node 24.19.0 (`.nvmrc`). From this checkout:

```sh
npm ci
npm run dev
```

The development server listens on port 3000. Use the existing isolated checkout in cloud tasks; do not create a worktree unless requested. `.npmrc` puts the npm cache under `/workspace` because the cloud machine's home directory is not writable. On a machine without `/workspace`, override with `npm ci --cache .npm-cache` and ignore that local cache.

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

## Architecture and decisions

- `src/app`: layout, metadata, global tokens/styles and the basic home page.
- `src/components/layout`: server-rendered header/footer, client mobile disclosure.
- `src/components/ui`: responsive container, native button and navigation-link variants.
- `src/content/site.ts`: confirmed identity and section navigation.
- `fonts`: local WOFF2 assets and their SIL Open Font License files. Sources: Fontsource Bricolage Grotesque and Be Vietnam Pro 5.3.0. This first English slice includes Latin subsets only; add Vietnamese coverage before publishing Vietnamese copy.
- `tests/e2e`: representative functional checks with Playwright.

Versions are pinned by package.json and package-lock.json. TypeScript 6.0.3 is used because current typescript-eslint rejects TypeScript 7; ESLint 9 is required by current React/accessibility plugin peer ranges, although npm marks that release line unsupported. Revisit the lint ecosystem when plugin support for ESLint 10 is available. Tailwind 4 uses its PostCSS plugin and semantic CSS variables rather than a legacy configuration file.

No Motion dependency, booking UI, enquiry form, speculative room inventory, stock photography, analytics or empty routes are included. Header links target real homepage sections. Main colours follow DESIGN_SYSTEM.md; reusable controls use semantic variants and visible focus. Fonts use next/font/local and do not require a Google Fonts connection at build time.

## Before the next increment

Review the mobile/desktop foundation; supply authentic licensed photography, verified rooms and policies, and a booking/contact destination. Expand one approved homepage visual slice next. Before launch, replace placeholders, validate full accessibility and performance, complete legal/contact information, test the actual booking journey, and remove noindex only as part of an approved launch. Nothing has been deployed or pushed.

## Foundation validation (10 October 2026)

Passed: frozen-lockfile `npm ci`, lint with zero warnings, TypeScript check, optimised production build, development HTTP/content/stylesheet smoke checks, and all six Playwright cases using system Chromium (desktop and phone contexts). npm production dependency audit reported zero vulnerabilities. A mobile screenshot was inspected. The managed browser download was blocked, but browser execution succeeded using `/usr/bin/chromium`.

Still unrun: full manual accessibility audit, Safari/Firefox validation, real-device testing, performance audit, booking/contact integration and deployment. The initial TypeScript 7 lint failure was resolved by pinning the supported 6.0.3 release. Cloud install and startup instructions were saved as a configuration draft; this is not publication or a new-task restoration test.
