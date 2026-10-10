# Dalat Family Hostel — Project Plan

> Current implementation: the user-approved Family House brief supersedes the historic pine palette, fonts, homepage sequence, and foundation-only scope below. Use cream/blue/red, Fraunces/DM Sans, and the complete homepage with a provider handoff dialog. See `DESIGN_REVIEW.md` for the current increment. Other architecture, truthfulness, accessibility and incremental-development requirements remain applicable.

Status: Phase 1 proposal for review. No application initialisation or dependency installation is authorised in this phase.

## 1. Repository and scope

Inspected on 10 October 2026. `/workspace/dalatfamhostel` contains only Git metadata, has no commits, and is on the unborn local branch `work`. There are no application files, manifests, lockfiles, CI workflows, or existing project instructions. Earlier read-only remote checks returned no branches or tags; `main` was absent. This plan does not create a branch, commit, or push.

Confirmed business facts: the name is Dalat Family Hostel; it is a social backpacker hostel in Da Lat, Vietnam. Room types, prices, address, amenities, events, policies, ratings, contact details, and booking availability remain unverified. Do not publish invented business facts.

Objective: help travellers understand the hostel's atmosphere, assess accommodation and practical details, and take a trustworthy next step toward booking. Production readiness is a later milestone, contingent on verified content, integrations, functional tests, and deployment validation.

## 2. Technical decisions

- Next.js App Router, React, and strict TypeScript. Default to Server Components; use small Client Components only for interaction such as navigation, filters if needed, and an approved enquiry form.
- Tailwind CSS with semantic CSS custom properties and reusable component variants. Avoid an additional UI framework at launch.
- Lucide React for a small selection of named icon imports. Icons supplement text; decorative icons are hidden from assistive technology.
- Motion for React is optional. Begin with CSS transitions; add Motion only for an interaction whose usability benefits justify the bundle cost.
- npm and a committed lockfile; use `npm ci` for repeatable setup after initialisation. No database, authentication, CMS, payment handling, or global state library unless a confirmed requirement warrants it.
- Vercel is the intended deployment target. Keep business logic and content portable; treat preview and production secrets separately.
- Store initially approved editorial content in typed local modules. Introduce a CMS adapter only if staff editing needs are confirmed.
- Use Next.js image optimisation, dimensions, responsive sizes, and local or explicitly allowed remote assets. Use licensed, self-hosted fonts through `next/font` where practical. Prefer static rendering for editorial pages; personalise or fetch dynamically only when required.

### Version verification

Read npm registry `latest` metadata on 10 October 2026 without installing packages:

| Package | Reported stable version | Relevant compatibility |
| --- | --- | --- |
| next | 16.4.0 | Node >=20.9; supports React 19 |
| react / react-dom | 19.3.0 / 19.3.0 | Matching versions; React DOM requires React ^19.3.0 |
| typescript | 7.0.2 | Node >=16.20; Next tooling compatibility still requires validation |
| tailwindcss / @tailwindcss/postcss | 4.3.3 / 4.3.3 | Matching release line; verify generated PostCSS setup |
| lucide-react | 1.54.0 | React 19 accepted by peer range |
| motion | 14.1.0 | React and React DOM 19 accepted; optional |

The cloud machine currently has Node 24.19.0. This meets the reported engine requirements. Registry metadata establishes declared compatibility, not successful builds. At initialisation, recheck release metadata and official Next.js guidance, choose the supported Node LTS line, and validate the exact TypeScript and lint configuration. If the latest TypeScript is not supported, choose and document the latest supported stable release. Pin the chosen Node runtime for local development and Vercel; record actual resolved dependencies in the lockfile. No packages were installed during planning.

## 3. Proposed sitemap

| Route | Purpose | Launch condition |
| --- | --- | --- |
| `/` | Atmosphere, accommodation overview, practical orientation, booking next step | Approved core content and photographs |
| `/rooms` | Compare confirmed room options, inclusions, occupancy, and policies | Verified room inventory; show rates only with currency and conditions |
| `/experience` | Explain verified social activities and hostel life | Approved activities; distinguish regular offerings from scheduled events |
| `/location` | Address, travel directions, accessible text alternative to maps | Verified address, coordinates, and arrival guidance |
| `/contact` | Confirmed contact channels and booking guidance | Valid destinations; form only with approved delivery integration |
| `/privacy` | Data handling and provider disclosures | Reviewed against actual integrations and applicable obligations |
| `/booking` | Optional provider handoff or integrated flow | Provider, destination, tracking, and failure states confirmed |
| `/terms` | Optional booking/cancellation terms | Required only for the actual booking model and approved policies |

Use section links on the homepage during the first increment. Add separate routes only when there is enough distinct content; do not ship empty pages. Room detail routes (`/rooms/[slug]`), multilingual routes, a travel journal, and an event calendar are later options, not launch assumptions. Start with English provisionally; confirm language needs before freezing route and content models. Keep the primary booking action consistent across navigation and room sections. Before an approved booking destination exists, use a clearly labelled verified contact action or omit the action in production.

## 4. Proposed folder structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    not-found.tsx
    rooms/page.tsx
    experience/page.tsx
    location/page.tsx
    contact/page.tsx
    privacy/page.tsx
    sitemap.ts
    robots.ts
  components/
    ui/                 # Button/link, Container, SectionHeading, Badge
    layout/             # SiteHeader, MobileNavigation, SiteFooter
    home/               # Hero, HostelIntroduction, RoomOverview, ExperiencePreview
    rooms/              # RoomCard, RoomAmenities, RoomComparison
    contact/            # ContactChannels; EnquiryForm only if approved
  content/
    site.ts             # Approved identity, navigation, contact and SEO content
    rooms.ts            # Typed, verified room information
    experiences.ts      # Typed, verified activities
  lib/
    content-types.ts
    metadata.ts
    integrations/       # Add only when a provider is selected
public/
  images/               # Licensed hostel photography and optimised assets
  icons/
tests/
  e2e/                  # Representative navigation and booking/enquiry journeys
AGENTS.md
PROJECT_PLAN.md
README.md               # Added during implementation with tested setup commands
```

Create directories as features need them. Keep feature-specific components beside their domain rather than building a speculative abstraction layer. Add a server endpoint or server action only if the selected integration needs it; keep credentials and delivery logic server-side.

## 5. Component architecture

The root layout owns fonts, metadata defaults, the skip link, navigation, and footer. Page components compose independent sections from typed content. Shared UI components handle consistent focus states, spacing, variants, and semantic elements; keep the initial set small.

Use links for navigation and buttons for actions. A booking link component centralises the approved destination and labelling, without implying on-site inventory or payment. Room cards share the same comparable fields and have a clear details or enquiry action. Photos use an image component with deliberate crop and alternative text. Avoid generic schema-driven page builders at launch.

Mobile navigation is a small client boundary with keyboard support, Escape handling, and correct focus behaviour. Prefer a simple disclosure; if presented as a modal, implement modal semantics and focus management. An enquiry form, if authorised, needs accessible field errors, pending/success/failure states, server validation, rate limiting, and tested delivery. Never show a success state merely because a button was clicked.

## 6. Visual direction and design system

Proposed direction: an inviting editorial travel site built around real people, shared moments, and Da Lat's landscape. Use generous typography, asymmetric but readable photo compositions, and small locally grounded graphic details approved by the owner. Avoid generic dashboard cards, excessive gradients, autoplay media, and animations that delay access to content.

- Colour candidates: warm cream `#F7F2E8`, pine `#193D32`, charcoal `#202824`, and coral `#B84332`. Treat these as draft palette values; validate every actual foreground/background pairing to WCAG AA before approval.
- Semantic tokens: `background`, `surface`, `text`, `muted-text`, `accent`, `border`, `focus`, `error`, and `success`. Do not use colour alone to express state.
- Typography: one expressive display face and one readable body face, or a single variable family if that preserves the intended character. Confirm Vietnamese glyph coverage, licensing, and font budget. Use fluid headings and comfortable body line height, with text width around 60–70 characters.
- Spacing: a small consistent scale based on 4px, fluid section padding, and a bounded content container. Begin with a single column, expanding to two or three columns when content comfortably fits.
- Surfaces: restrained borders, modest radii, and minimal shadows. Photography does the visual work; cards exist where comparison benefits.
- Interaction: visible hover, active, disabled, and keyboard focus states. Aim for 44px touch targets. Reserve 150–250ms transitions for feedback, respect reduced motion, and avoid scroll hijacking.
- Breakpoints: choose from content behaviour, test narrow phones through wide desktops, and avoid device-specific assumptions. Navigation, room comparisons, and booking actions must work without hover.

Review one homepage visual increment before spreading the design system across all pages.

## 7. UX, accessibility, and performance

Target WCAG 2.2 AA. Use semantic landmarks, logical headings, a skip link, useful image alternatives, labelled controls, and visible focus. Validate keyboard navigation, screen-reader announcements for interactive states, contrast, 200% zoom, and reflow at 320 CSS pixels. Sticky booking controls must not obscure content or focused elements.

Travellers should quickly find room options, what is included, location, arrival/check-in requirements, and the real booking path. Display pricing only when verified, including currency, tax/fee treatment, per-person/per-room basis, and availability caveats. Keep contact channel names and external-provider transitions explicit. Do not fabricate ratings, testimonials, occupancy, availability, scarcity, or badges.

Use optimised responsive photos, load only the principal above-the-fold image eagerly, lazy-load other media, and avoid a heavy gallery viewer unless needed. A map can begin as an approved directions link and textual address; load embeds only when privacy and performance implications are understood. Avoid analytics by default until the owner chooses a provider and data policy.

Performance targets after deployment: LCP <=2.5s, INP <=200ms, CLS <=0.1 at the 75th percentile when real-user data exists. Initially use mobile lab measurements, image/bundle inspection, and representative throttled journeys; lab results do not prove field performance. SEO includes accurate per-page metadata, canonical domain once confirmed, sitemap, robots rules, and structured data containing verified facts only. Keep previews out of search indexing using deployment controls and verified responses.

## 8. Incremental implementation roadmap

1. **Plan review:** confirm architecture and visual direction; identify core content owners and booking model. This document is the current deliverable.
2. **Foundation:** after approval, initialise App Router with the chosen supported versions, strict TypeScript, Tailwind, minimal linting, runtime pin, lockfile, and setup documentation. Validate development startup and a production build before feature work.
3. **Visual slice:** build accessible layout, navigation, and a focused homepage slice with explicitly marked development content. Review phone and desktop layouts before building the full site. Use authentic assets when supplied; any temporary image must have a known licence and be clearly treated as temporary.
4. **Content and routes:** build approved room, experience, location, and contact views using reusable components. Validate content completeness, navigation, responsive layouts, and keyboard use.
5. **Booking/contact integration:** implement the confirmed provider handoff or enquiry delivery. Test real responses in the appropriate sandbox, including failures; add no payment or inventory functionality without an approved requirement.
6. **Launch validation:** run lint, TypeScript checks, production build, representative end-to-end journeys, accessibility checks, metadata/link review, and mobile performance measurements. Report each passed, failed, skipped, or blocked check accurately.
7. **Deployment and handover:** prepare Vercel settings, secure runtime bindings, domain instructions, asset licences, and staff documentation. Validate a preview before requesting production deployment approval. Publishing/deploying requires explicit authorisation; planning does not supply it.

Meaningful tests focus on mobile menu use, reachable primary actions, room comparison, and actual enquiry/provider behaviour. Use Playwright as a development dependency when the interactive journeys exist; add unit tests for meaningful validation/business logic rather than mirroring markup. Automated accessibility checks supplement manual keyboard and screen-reader checks. Do not install testing tools during this planning phase.

## 9. Missing inputs and requirements

Needed before public launch:

- Official name styling, logo assets, colour preferences, and examples of desired or undesired visual direction.
- Licensed photographs of rooms, communal areas, staff/guest atmosphere, exterior, and surroundings, with permission for identifiable people where appropriate.
- Verified room names, bed counts, capacities, bathrooms, inclusions, accessibility information, prices if displayed, and cancellation/payment rules.
- Verified street address, coordinates, transport guidance, check-in/out times, reception availability, and luggage/late-arrival policies.
- Approved descriptions of amenities, activities, meals, tours, and any eligibility or additional charges.
- Valid public email, phone/contact channels, social links, and who answers enquiries.
- Booking provider and intended flow: external link, enquiry, or integrated availability; provider documentation and sandbox access if applicable.
- Language requirements, domain ownership, Vercel project/team access, legal/privacy content, and any analytics or consent requirements.

Do not collect secret values in chat or source control. Inspect existing binding names and presence before requesting credentials; supply missing secrets through secure environment/deployment settings. Inspect the public integration destination and redirect behaviour before implementation. Avoid adding a contact form without a responsible inbox, provider, data-retention approach, and abuse controls.

For the next increment, the highest-value decisions are visual direction, available authentic photography, and whether booking is an external-provider link or an enquiry. Foundation work can proceed after plan approval while other content is gathered; public launch cannot.

## 10. Review and acceptance

Review this architecture, proposed sitemap, visual direction, and roadmap before application work begins. This phase creates only `PROJECT_PLAN.md` and `AGENTS.md`. No dependencies, application code, configuration draft, commit, deployment, or push is included.
