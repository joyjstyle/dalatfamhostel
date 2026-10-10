# Dalat Family Hostel — UX Architecture

> Current implementation: the user-approved Family House brief supersedes the historic pine palette, fonts, homepage sequence, and foundation-only scope below. Use cream/blue/red, Fraunces/DM Sans, and the complete homepage with a provider handoff dialog. See `DESIGN_REVIEW.md` for the current increment. Other architecture, truthfulness, accessibility and incremental-development requirements remain applicable.

Status: proposed experience foundation, 10 October 2026. Follows the approved project architecture in `PROJECT_PLAN.md` and the visual specification in `DESIGN_SYSTEM.md`. This phase documents decisions only; no booking flow, tours, forms, or UI have been implemented or tested.

## 1. Experience goal and audience

Help international backpackers, solo travellers, and groups of friends picture a stay, judge whether the hostel suits them, and take a clear, honest booking next step. Sell the social experience through authentic evidence while answering practical accommodation questions early enough to support a confident decision.

| Audience | Primary question | UX response |
| --- | --- | --- |
| Solo traveller | Will I feel comfortable arriving on my own? | Real communal scenes, welcoming tone, verified ways to participate, clear arrival/contact guidance |
| Backpacker comparing stops | Does this fit my budget, route, and travel style? | Comparable room details, transparent approved pricing, location and booking path |
| Friends travelling together | Can we stay together and organise experiences? | Verified occupancy/group conditions and a clear group enquiry route if available |

These are design hypotheses, not research findings. Validate with representative travellers before launch where possible. Do not assume a party-only identity or invent quiet-hour guarantees. Explain the actual balance of sociability and rest once policies are supplied.

## 2. Homepage hierarchy

The narrative moves from belonging, to evidence, to accommodation, to exploration, to logistics. Repeat a consistent booking action at decision points rather than turning every section into a sales panel.

| Order | Section and traveller question | Content and composition | Action |
| --- | --- | --- | --- |
| 0 | Header: where can I go? | Identity, Rooms, Experiences, Location, Contact, one primary booking destination | Booking action and mobile menu |
| 1 | Hero: what kind of stay is this? | Short approved positioning, Da Lat context, one authentic social photo; readable headline outside busy imagery | Primary booking action; secondary “Explore hostel life” anchor |
| 2 | Social introduction: why stay here? | Brief specific story, candid scene and detail captions; verified ways guests interact | “Explore experiences” |
| 3 | Accommodation: where will I sleep? | A concise comparison of confirmed room options, useful photos, inclusions and conditions | “View rooms”; contextual booking/enquiry action |
| 4 | Experiences: what can I do? | One verified activity or tour story plus a small supporting list; distinguish hostel life from third-party excursions | “Explore experiences” or specific detail link |
| 5 | Guest perspective: is the story credible? | Optional attributed reviews with permission/source and real dates/context | Source link where useful |
| 6 | Arrival and practical essentials: how do I get there? | Verified address, arrival guidance, check-in information and priority policy answers | “Get directions” and “View location” |
| 7 | Closing invitation: what happens next? | Short message and the same booking path; alternate verified contact help | Primary action |
| 8 | Footer | Contact, useful routes, legal links and approved social channels | Direct utility links |

If verified reviews are unavailable, omit section 5 rather than invent testimonials. If tours are unconfirmed, describe only approved hostel-life content or omit the experience preview; no “coming soon” service promises. Merge thin sections to maintain a concise page. Never delay rooms behind multiple screenfuls of decorative storytelling on mobile. Hero actions let a traveller skip the narrative immediately.

A text wireframe for the first review: header → headline + brief positioning + primary/secondary links → authentic scene → short social story → room comparison → featured experience → arrival essentials → final action → footer. On desktop, combine hero image and text into an asymmetric composition; preserve the same logical reading sequence.

## 3. Navigation and page responsibilities

Use the planned routes `/`, `/rooms`, `/experience`, `/location`, `/contact`, and `/privacy`. Display the human-readable label “Experiences” for `/experience`. Start with homepage anchors if distinct route content is insufficient. Do not add empty pages to satisfy a sitemap.

Rooms owns comparison and accommodation policies; Experiences owns verified activity/tour discovery; Location owns arrival; Contact owns approved assistance channels. Keep practical answers near relevant decisions, with a concise homepage summary and deeper detail on the appropriate page. Add `/booking` only if there is a useful booking flow or handoff explanation; do not add an unnecessary intermediate screen before a trusted provider. Room or activity detail routes are conditional on substantive content.

Mobile header: identity, one compact primary action, and a labelled menu button. The open disclosure presents navigation in a clear vertical list, indicates the current page, and does not trap focus unless intentionally implemented as a modal. Menu buttons expose expanded state and control relationships; Escape closes and restores focus. Selecting a route closes the menu. Never hide the sole booking action inside navigation.

Start with a compact sticky header rather than both a sticky header and bottom booking bar. If testing later justifies a bottom action, show it only after the hero action leaves view, remove the duplicate header CTA, reserve content space, account for safe-area insets, and hide it during text entry/overlays. Ensure it never obscures focused controls, policies, or the footer.

## 4. Accommodation and booking journeys

Use one centrally configured booking mode and destination so all actions promise the same thing. No selection UI or availability claim is justified until the provider and inventory source are confirmed.

| Mode | Primary label | Journey | Success boundary |
| --- | --- | --- | --- |
| Verified external provider | “Book your stay” | Any entry point → named provider → provider's date/guest/room flow | Only provider confirmation establishes a reservation |
| Approved availability integration | “Check availability” | Dates and guests → actual availability/rates → room selection → provider checkout | A tested confirmation from the responsible system |
| Enquiry only | “Enquire about a stay” | Room/booking entry → approved contact or minimal enquiry → real delivery feedback | Enquiry delivery is not a confirmed reservation |
| No approved destination | No live booking control | Development annotation only; public launch blocked until a valid path exists | No simulated result |

Recommended first launch: a direct external booking handoff if the owner supplies a working provider URL; otherwise a verified enquiry channel. This reduces friction without building speculative inventory or payment infrastructure. Use “Continue on [provider]” near the handoff when context is needed. Do not collect dates on this website if the provider cannot receive them accurately.

The room-led path is homepage → Rooms → compare confirmed options → contextual booking/enquiry. The fast path is header/hero → approved provider or enquiry. The social path is story → Experiences → relevant accommodation action. For groups, offer an approved group enquiry option only if there is a responsible contact and actual group policy; do not promise adjacent beds or private occupancy.

Room comparison must use the same fields in the same order: approved name, bed/occupancy arrangement, bathroom arrangement, relevant inclusions, accessibility information when verified, price basis if displayed, and next step. Use stacked rows on phones; do not force a wide comparison table. When rooms have no verified prices, say so through the actual provider/enquiry path rather than inventing “from” rates.

If integration is approved later, date controls need persistent labels, keyboard support, locale-safe formatting, checkout-after-checkin validation, and documented property-timezone handling. Guest limits and room availability come from confirmed data. State the currency, taxes/fees, price basis, and cancellation conditions before commitment. Never use synthetic scarcity or fake countdowns.

Enquiries collect only what delivery requires, provisionally name, reply email, travel dates if known, party size, and optional message. Allow an unknown-date enquiry when operationally supported. Explain data use beside submission and link privacy information. Server-side validation, abuse controls, pending/error/retry states, and accessible error associations are required. Preserve entries on failure; announce success only after a real delivery result. Do not promise response times without owner approval.

## 5. Activities and tour discovery

The experience page should answer “what is this, who is it for, and how do I join?” before asking for a booking. Separate **hostel life**, **hostel-organised activities**, and **third-party tours** only when those categories reflect real offerings. A Da Lat attraction is not automatically an activity sold by the hostel.

Use a featured editorial story followed by a compact list of verified experiences. Avoid filters until the inventory is large enough that browsing becomes difficult. If filters are justified later, use labelled controls, show result counts, preserve selection in the URL when useful, and provide an empty state with a reset action.

Each available experience needs: approved title and operator relationship; authentic photo; description; duration/schedule or a clear statement that details vary; meeting/transport information; inclusions/exclusions; physical demands and eligibility; safety information supplied by the responsible operator; price/currency if shown; cancellation terms where applicable; and the actual join/enquiry destination. Do not manufacture tour safety assurances, schedules, or daily availability.

Discover → read relevant facts → choose a real join/enquiry action → receive the appropriate operator/contact outcome. Keep accommodation booking available but secondary on a tour detail view, so users are not surprised by an unrelated CTA. Date-dependent experiences require maintained availability; otherwise use evergreen descriptions with honest enquiry wording rather than an abandoned calendar.

## 6. Storytelling and accessible interaction

Photographs demonstrate atmosphere; captions explain the real context. Pair communal images with practical room/arrival evidence so the site is emotional and useful. Never use an unverified guest quote as a decorative headline. Editorial copy must distinguish invitation from guaranteed experiences.

Use one H1 per page, logical headings, semantic landmarks, a skip link, meaningful alt text, labelled controls, and descriptive links. The story remains understandable without images. Accordions are appropriate for secondary policy questions, not the only place to discover essential prices or conditions. They need independent buttons, expanded state, and fully accessible content. No horizontal-only mobile content discovery, hover-only information, or automatic moving media.

Motion provides state feedback as defined in `DESIGN_SYSTEM.md`; it is not a prerequisite to seeing content. Navigation and booking stay predictable, with browser back navigation intact. Optional galleries or modal dialogs require keyboard operation, Escape handling, appropriate announcements, and focus restoration. No modal or gallery is required for the initial slice.

## 7. Content and operational ownership

Maintain typed content with explicit approval status during development. Unknown facts stay absent from production; do not derive approval from plausible placeholder copy. The owner approves identity, photos, room details, policies, contacts, booking URLs, and experience/operator facts. A named staff contact should own time-sensitive prices, schedules, and destination checks before launch.

Required next inputs: licensed social and accommodation photography; real room inventory; booking provider/contact choice; activity and tour descriptions with operator relationships; address/arrival information; approved contact channels and policies. English is the proposed initial language, pending confirmation. Design for longer translated strings and Vietnamese names without claiming multilingual functionality.

## 8. Validation and measurement plan

Before full implementation, review a homepage wireframe and one mobile/desktop visual slice. Later run representative usability tasks: find a suitable room; explain what the booking action does; decide whether an experience is hostel-run or third-party; find arrival information; and navigate/complete the applicable action by keyboard. Include solo travellers and friends, varied English confidence, and slower mobile connections. These tests are planned, not completed.

Acceptance criteria for the future prototype:

- The traveller can identify the hostel's social positioning and Da Lat location without searching.
- Rooms and a truthful booking next step are reachable from the header and hero.
- Mobile navigation, keyboard focus, 200% zoom, 320px reflow, and reduced motion are usable.
- Essential accommodation and experience facts are legible and comparable, with no unsupported claims.
- Every booking/enquiry destination is tested; failure recovery is understandable; no submission is falsely confirmed.
- Actual photographs, captions, contrast, and loading behaviour pass the visual/accessibility review.

If analytics is approved, measure booking CTA clicks by placement, room-detail visits, experience enquiries, and genuine delivery outcomes without sending names, email, messages, or personal travel details as analytics properties. An outbound provider click is a handoff metric, not a reservation. Completed bookings require a reliable, privacy-reviewed provider signal. Establish a baseline before setting improvement targets; no conversion claims exist yet.

## 9. Next increment

Review this experience and visual direction, then produce a low-fidelity homepage composition and a focused visual slice when UI work is authorised. Confirm photography and the booking mode before treating the slice as production content. Implement navigation and the central action first, validate their behaviour, and then expand room and experience content. This design phase changes only documentation; it does not initialise the app, install dependencies, or deploy anything.
