# Family House homepage — review increment

The latest user brief supersedes the historical pine direction. The homepage now uses cream, warm white, family blue, soft blue, deep red, warm red and ink; licensed self-hosted Fraunces and DM Sans. The implementation remains inside the existing App Router architecture. No commits, pushes or deployments are included in this increment.

## Review scope

Responsive navigation; the approved “Come as a Traveller. Leave as Family.” hero; welcome; accommodation preview; Family Dinner; experiences; story; guest review placeholder; travel journal outline; location/directions placeholder; final booking action; footer.

The layout uses asymmetric editorial sections, a photo/postcard composition, a blue dinner feature, stacked mobile accommodation, a restrained line-drawn house detail and reusable heading/media patterns. The line drawing is an original decorative mark, not the official logo or a representation of the actual building. The earlier generated logo edit was not used because it did not preserve the original artwork.

Native dialog semantics provide a desktop modal/mobile bottom sheet, with explicit tab wrapping, Escape/close handling, trigger-focus restoration and background scroll lock. Only navigation and booking are client components; page content remains server-rendered. No Motion package, autoplay, parallax, analytics, map embed or artificial booking engine is included.

## Booking destinations and verification limits

The owner supplied these property URLs, saved without tracking, session tokens, dates, occupancy or room selections:

- https://www.hostelworld.com/hostels/p/302311/dalat-family-hostel/
- https://www.booking.com/hotel/vn/dalat-family-hostel-thanh-pho-da-lat.en-gb.html

Both pass the application’s HTTPS/hostname/path/credential guard. Live requests to both were denied by the workspace egress proxy (403 tunnel error), so redirect destinations and provider uptime remain unverified. Browser interception tests check outbound navigation wiring, not provider functionality. Do not describe a handoff as a completed reservation. A verified messaging destination has not been supplied; the message action is omitted. Walk-ins are a stated reservation channel, not a guarantee of available beds.

## Content and assets still required

The repository did not contain the referenced approved homepage copy or SEO blueprint. Only the supplied brand message is treated as approved marketing copy; other editorial wording is review copy. Development notes identify incomplete details, and noindex remains enabled.

Needed before public approval:

1. Approved homepage copy and SEO blueprint, including final page titles, descriptions and canonical domain requirements.
2. Original approved logo with transparency; authentic licensed photography of people, property, accommodation, dinner and relevant experiences, with permissions and useful captions/alt descriptions.
3. Verified room names, inventory, bathroom arrangements, inclusions and policies. No room types, amenities or prices are invented.
4. Confirmed Family Dinner description, schedule, inclusions, costs and participation information. The section does not promise a scheduled service.
5. Verified activities/tours, operators, logistics, pricing if shown and safety/eligibility details. There are no invented tour offers.
6. Approved family history/team biography and authentic attributed reviews with reuse permission. No fake quotes, ratings or counts.
7. Researched travel guides, address/coordinates, arrival directions, check-in information and approved contact/message link.
8. Live browser checks of both property links by someone with access to the providers.

Image areas are explicitly labelled geometric development placeholders, not stock or AI photographs. Dimensions reserve their space without image network requests. Replace the placeholder component with optimised Next Image content once authentic assets are supplied; only the main visible image should be prioritised. Decorative shapes are hidden from assistive technology. Fonts are Latin subsets for this English review; add Vietnamese coverage before publishing Vietnamese content.

## Validation

The first browser run found focus escaping through the native browser tab order and a fixed-width postcard overflowing under text enlargement. Explicit focus wrapping and text-scalable decorative dimensions address those failures. See the final task report for completed results. Full manual screen-reader testing, real devices, Safari/Firefox and a performance audit remain outside these Chromium checks.

Final results: lint and strict TypeScript checks passed; the production build passed; all 14 Playwright checks passed across desktop and mobile Chromium projects. Checks cover navigation, skip-link focus, 320px overflow, dialog tab wrapping/Escape/focus restoration/scroll lock, bottom-sheet placement, cleaned provider handoff wiring, 200% text enlargement, reduced motion and URL safety guards. Primary text pairings measured 5.54:1–12.22:1 contrast. Desktop, tablet and mobile screenshots were inspected; the visual review corrected the font alias and photo-caption/postcard collision. No horizontal overflow was observed at 1440px, 820px or 390px. Existing local npm cache changes were preserved. The local production review server is started separately from deployment; the hosted Vercel site has not been changed.
