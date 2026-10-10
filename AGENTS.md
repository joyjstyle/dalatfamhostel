# Development instructions — Dalat Family Hostel

## Current phase and authority

Read `PROJECT_PLAN.md` before work. The repository began empty; the user has authorised the Family House homepage redesign and an external-provider booking dialog. Do not implement inventory, payment, additional pages, or unapproved business content during this increment. Follow later explicit user instructions when the phase changes. Build incrementally and report each increment's actual validation.

The cloud task is already isolated. Use the existing checkout at `/workspace/dalatfamhostel`; do not create a Git worktree unless the user explicitly requests one. Inspect Git status and preserve existing user changes. Do not commit, push, publish, or deploy without authorisation.

During environment onboarding, keep tracked application source, tests, manifests, and lockfiles unchanged unless a separate coding task explicitly authorises changes. Save necessary reusable setup/startup instructions through the onboarding configuration tools when available, after executing and validating them; do not claim a saved draft is published.

## Product truth and content

Confirmed facts: Dalat Family Hostel is a social backpacker hostel in Da Lat, Vietnam; the approved brand message is “Come as a Traveller. Leave as Family.”; reservations are handled through Hostelworld, Booking.com, direct messages and walk-ins. Owner-supplied property URLs are in src/content/site.ts; no verified messaging URL is available. Never invent prices, room inventory, amenities, address, policies, contact details, reviews, availability, awards, or activities. Keep incomplete development content explicitly marked and exclude it from public launch. Use only assets with known rights and record their source/licence where needed.

Do not imply an enquiry, reservation, payment, or availability check succeeded without testing the corresponding integration. Do not introduce simulated successes into production flows. Use approved destinations and clear labels for external booking links.

## Architecture and code

Use Next.js App Router, React, strict TypeScript, and Tailwind CSS when implementation is approved. Verify current stable releases, Node requirements, peer dependencies, official tooling guidance, and successful builds before claiming compatibility. Choose supported versions and preserve reproducibility with a runtime pin and npm lockfile; use `npm ci` for subsequent setup.

Default to Server Components and statically rendered editorial pages. Keep Client Component boundaries small and driven by interaction needs. Organise shared primitives in `src/components/ui`, layout in `src/components/layout`, domain components by feature, approved typed content in `src/content`, and helpers/integration adapters in `src/lib`. Create abstractions and directories only when useful.

Avoid unnecessary dependencies. Use named Lucide icon imports. Add Motion only when animation contributes to usability; respect reduced motion. Keep credentials and provider delivery logic server-side. Never expose secrets through public-prefixed variables, source files, logs, documentation, or tool output. Inspect binding names/presence only and use secure settings for required values.

## UX and visual quality

The user’s Family House brief supersedes the older pine direction: cream #F7F0E3, warm white #FFFDF8, family blue #244A68, soft blue #91B4C8, deep red #A73532, warm red #C65A4B, ink #292D32; Fraunces headings and DM Sans body. Read DESIGN_REVIEW.md for implementation status and content blockers. Aim for distinctive, authentic photography and readable editorial layouts. Avoid generic card-heavy layouts, decorative motion that delays content, and misleading urgency.

Build mobile-first and test phone, tablet, and desktop layouts. Use semantic HTML, correct heading order, links for navigation, buttons for actions, labelled forms, visible focus, a skip link, and appropriate alternative text. Target WCAG 2.2 AA; validate contrast, keyboard access, reduced motion, zoom, and narrow reflow. Use text alongside status colour and sufficiently large touch targets.

Optimise images with dimensions and responsive sizes; prioritise only the main visible image. Prevent layout shifts and minimise browser JavaScript. Keep fonts licensed and support required language glyphs. Make pricing and booking conditions explicit only after verification.

## Validation and delivery

Before implementing, inspect available scripts and instructions; do not invent commands or report unrun checks as passed. Once the app exists, keep README setup commands accurate and ensure scripts provide lint, TypeScript, development startup, and production build checks appropriate to the chosen Next.js version.

For each increment, run relevant checks. Before launch, validate a production build, real navigation and primary actions, mobile menu keyboard behaviour, content and links, accessibility, and representative mobile performance. Test integration failures as well as success. Add meaningful end-to-end tests when interactive journeys exist; avoid tests that merely mirror implementation.

Distinguish environment failures, application defects, missing content, and external integration blockers. Report passed, failed, skipped, and unrun checks separately. A listening port or a successful dependency installation alone does not establish readiness; make representative functional requests. Do not claim production readiness, live deployment, published environment configuration, or fresh-task restoration without evidence.

Explain important technical decisions briefly, document tested setup steps, and leave each increment reviewable. Deployment preparation can be reversible work; production publication requires explicit user authorisation. No sub-agent delegation is required by this project.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
