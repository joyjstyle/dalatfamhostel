# Dalat Family Hostel — Design System

> Current implementation: the user-approved Family House brief supersedes the historic pine palette, fonts, homepage sequence, and foundation-only scope below. Use cream/blue/red, Fraunces/DM Sans, and the complete homepage with a provider handoff dialog. See `DESIGN_REVIEW.md` for the current increment. Other architecture, truthfulness, accessibility and incremental-development requirements remain applicable.

Status: proposed design foundation, 10 October 2026. Extends `PROJECT_PLAN.md`; companion to `UX_ARCHITECTURE.md`. No UI has been built. Tokens and behaviours below are specifications to validate in a visual prototype, not claims of implemented accessibility or performance.

## 1. Creative direction: shared journeys

Make the site feel like an invitation into a real travelling community: youthful through expressive typography and candid photography, adventurous through landscape and editorial pacing, welcoming through plain language and predictable controls. Show the experience before asking people to choose accommodation, while keeping room details and the booking path immediately accessible.

The visual signature is oversized pine typography on warm paper, documentary photographs with purposeful crops, coral actions, and occasional small caption or route-marker details. Contrast expansive social images with practical, calm information panels. Use an editorial travel-journal rhythm rather than a uniform collection of cards.

This is a proposed brand direction, not an existing identity. Any logo treatment requires owner approval. Avoid simulated handwriting, passport stamps implying credentials, stereotyped Vietnamese motifs, artificial grunge, and stock travel imagery presented as hostel photography. A site full of party images can exclude quieter or solo travellers: balance sociability with clear, verified information about rest and participation.

## 2. Colour and semantic roles

| Token | Proposed value | Usage |
| --- | --- | --- |
| `background` | `#F7F2E8` | Main warm-paper canvas |
| `surface` | `#FFFFFF` | Forms and occasional practical panels |
| `text` | `#202824` | Body text |
| `brand` | `#193D32` | Headings, dark sections, secondary actions |
| `on-brand` | `#F7F2E8` | Text on pine |
| `accent` | `#B84332` | Primary action fill and restrained emphasis |
| `on-accent` | `#FFFFFF` | Primary action text |
| `muted-text` | `#58635B` | Captions and supporting text |
| `border-subtle` | `#D7D2C7` | Decorative separators only |
| `border-control` | `#68746B` | Essential field boundaries |
| `focus-light` | `#193D32` | Focus on light surfaces |
| `focus-dark` | `#F7F2E8` | Focus on dark surfaces |
| `error` | `#A52D25` | Error text and icon, with explicit message |
| `success` | `#245C40` | Confirmed success message and icon |

Limit coral to actions and small emphasis so it remains recognisable. Use pine sections to mark a change in story, not alternating colours mechanically. Never use decorative pale separators as the only boundary of an interactive control. Do not place text directly over busy photographs: use a solid adjacent panel by default, or a measured overlay that passes contrast across every responsive crop.

Before implementation acceptance, measure all actual colour pairs and states: normal text >=4.5:1, large text >=3:1, essential control boundaries and indicators >=3:1 against adjacent colours. These are intended pairings, not verified component results. Focus uses a 2px outline with 3px offset; choose the contextual light/dark token and a contrasting separation layer where needed. Links within prose are underlined.

## 3. Typography

Proposed candidates: **Bricolage Grotesque** for display headings and **Be Vietnam Pro** for body and UI. The pairing aims for expressive, human headlines and highly legible practical information. Verify exact font files, licensing, Vietnamese glyph coverage, rendering, and download cost before adoption. Use a system sans-serif fallback; choose a single family if two fonts exceed the performance budget.

| Role | Small viewport | Wide viewport | Guidance |
| --- | --- | --- | --- |
| Hero heading | 44–56px | 80–104px | Short sentence, 1.0–1.08 line height |
| Section heading | 32–40px | 48–64px | 1.1 line height |
| Subheading | 22–26px | 26–32px | 1.2 line height |
| Body | 16–18px | 18px | 1.5–1.65 line height |
| UI and captions | 14–16px | 14–16px | Never make essential terms tiny |

Use fluid rem-based sizes with bounds, so zoom remains effective. Keep long prose to roughly 60–70 characters per line. Use sentence case. Uppercase is reserved for brief editorial labels; do not use it for paragraphs or navigation. Avoid forced heading line breaks that fail on phones or translations. Decorative giant words must not create duplicate screen-reader content.

## 4. Layout and responsive rhythm

Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px, expressed in rem. Mobile gutters start at 20px, reducing to 16px on very narrow screens; wider layouts use 32–48px. Bound the main container around 1280px. Section padding varies from 48–64px on phones to 80–120px on desktop according to importance.

Design on a four-column mobile and twelve-column desktop grid, but keep DOM reading order natural. Desktop asymmetry can use a five/seven split for text and photography. Mobile places the headline and key action before supporting photography and long copy. Breakpoints respond to real content: start around 640, 960, and 1280px as testing points, not fixed device categories. Collapse navigation as soon as labels no longer fit.

Use varied, purposeful compositions:

- Hero: large headline and one authentic social photograph; clear action beside the message.
- Social story: one wide scene and two smaller documentary details, with captions.
- Rooms: horizontal editorial comparison rows on desktop, stacked image/detail pairs on mobile.
- Experiences: one featured story followed by compact text/image rows; no endless equal-card grid.
- Arrival: calm factual panel with directions, clearly separated from the story.

Use 8px image/panel radii and 4px control radii as starting tokens. Avoid pill-shaped everything. Reserve shadows for an elevated menu or overlay. No glassmorphism, angled body text, or overlapping content that becomes unreadable at zoom.

## 5. Photography and storytelling

Authentic hostel images are the principal brand asset. Do not substitute AI-generated people or stock accommodation as evidence of the property. Development placeholders must be visibly identified and replaced before launch.

The photo brief should cover: an inclusive communal scene; natural conversation or shared moments; accurate room and bathroom views; staff welcome if approved; building exterior/arrival landmarks; and verified activities or tours. These are requested subjects, not confirmed services. Capture both landscape and portrait compositions with space for crops. Show accommodation honestly, including bed layout and scale, without edits that misrepresent facilities.

For every asset record source, usage permission, subject consent where appropriate, caption context, alt text, focal point, dimensions, and intended placement. Avoid identifiable guests without appropriate permission; remove location/device metadata that is unnecessary to publish. Do not label a general Da Lat landscape as a hostel-run tour.

Use a roughly 4:5 crop for mobile people stories, 3:2 for room documentation, and 16:9 or 3:2 for wide scenes. Choose crops per asset rather than enforcing these ratios blindly. Preserve faces and essential room details. Captions provide real context; alt text describes useful visual information without repeating adjacent copy. Decorative images use empty alternatives.

Optimise responsive variants with declared sizes and dimensions. Prioritise only the main visible image, load lower images lazily, and avoid an autoplay video hero. Start with a visible image sequence rather than a carousel. An expanded viewer is a later enhancement only if useful; it must work by keyboard, show captions, and restore focus on close.

## 6. UI vocabulary and component states

| Element | Visual and behaviour contract |
| --- | --- |
| Primary action | Solid coral, clear verb, minimum 44px target; link for navigation |
| Secondary action | Pine text/border on paper; less prominent than the primary action |
| Text link | Underline in prose; descriptive destination; visible focus |
| Navigation | Text-first, clear current page, no icon-only essential items |
| Room summary | Photo, verified room name and comparable facts, honest next step |
| Experience row | Contextual photo, type, approved logistics, clear details action |
| Practical panel | Structured labels and values, readable policies, minimal ornament |
| Form field | Persistent label, help text, visible boundary, associated errors |
| Feedback | Text plus appropriate icon, announced when dynamic; success only after real confirmation |

Specify default, hover, focus-visible, active, pending, error, and disabled states where applicable. Hover may darken the action without reducing contrast; no content depends on hover. Disabled controls need an adjacent explanation and must not be the only way users learn what is missing. Pending submissions prevent duplicates, preserve entered data, and report progress. External links name the provider; same-tab navigation is the default unless there is a clear reason to open a new tab and announce it.

## 7. Purposeful motion

Use CSS first. Feedback transitions: 120–180ms for colour/border; mobile disclosure: 180–220ms with subtle opacity/translation only if this does not delay access. A later image viewer may use a short fade. Ease out for entrances, ease in for exits. Do not use `transition: all`.

No scroll hijacking, parallax, automatic carousels, looping decorative movement, bouncing booking actions, or text revealed word by word. Storytelling comes from sequence and photography. Avoid hiding editorial content until a scroll observer fires. Motion for React is justified only after a prototype demonstrates a benefit that CSS cannot adequately provide.

With `prefers-reduced-motion`, remove spatial motion and smooth scrolling; state changes remain immediate and understandable. Any optional anchor scrolling respects user preferences and sticky-header offsets. Essential content and links work without animation and, wherever possible, without client JavaScript.

## 8. Voice and quality gate

Voice: friendly, direct, inclusive, and lightly playful. Prefer specific verified descriptions over superlatives. Do not assume guests drink alcohol, want to party, speak fluent English, or arrive in groups. Tagline candidates are creative copy for owner review, never guarantees about organised activities or making friends.

Before expanding the UI beyond the first visual slice, review narrow phone, tablet, and wide desktop compositions; actual photo crops; long headings; keyboard focus; 200% zoom and 320px reflow; reduced motion; and primary booking visibility. Validate contrast in rendered states, font rights/glyphs, and image/bundle cost. Keep tokens centralised in semantic CSS variables mapped through Tailwind, with feature components composing a small shared primitive set. Do not introduce a component framework solely to implement this specification.
