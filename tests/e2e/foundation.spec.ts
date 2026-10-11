import { test, expect } from "@playwright/test";
import { validateBookingUrl } from "../../src/lib/booking";

test("home renders without browser errors and supports section navigation", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("html")).toHaveAttribute("translate", "yes");
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
    "href",
    "/dalatfamilyhostel.png",
  );
  await expect(
    page.getByRole("button", { name: "Plan your stay" }).first(),
  ).toBeVisible();
  await expect(
    page.locator(".language-selector > summary"),
  ).toBeVisible();
  const logo = page
    .getByRole("link", { name: "Dalat Family Hostel — home" })
    .locator("img");
  await expect(logo).toBeVisible();
  await expect(logo).toHaveAttribute("src", /dalatfamilyhostel\.png/);
  await expect(
    page.locator(".photo-placeholder img, .photo-gallery img"),
  ).toHaveCount(25);
  await expect(page.locator(".room-photo-gallery img")).toHaveCount(13);
  await expect(
    page.getByRole("region", {
      name: "Room photo lookbook. Scroll horizontally to browse all 13 room images.",
    }),
  ).toHaveAttribute("tabindex", "0");
  await expect(page.locator(".shared-photo-gallery img")).toHaveCount(5);
  await expect(page.locator(".shared-photo-gallery figure")).toHaveCount(5);
  await expect(page.locator(".shared-photo-gallery figcaption")).toHaveCount(0);
  await expect(page.locator(".room-image-references > .eyebrow")).toHaveCount(0);
  await expect(page.locator(".room-photo-gallery")).toContainText(
    "Deluxe double bed private ensuite",
  );
  await expect(page.locator(".room-photo-gallery")).toContainText("Dorm - 6 bed");
  await expect(page.locator(".room-photo-gallery")).toContainText(
    "Dorm - 12 bed",
  );
  await expect(page.locator(".room-photo-gallery")).toContainText(
    "Standard double bed private ensuite",
  );
  await expect(page.locator(".room-photo-gallery")).toContainText(
    "Standard twin room private",
  );
  await expect(page.locator(".room-photo-gallery")).toContainText(
    "Superior 4 bed apartment ensuite",
  );
  await expect(page.locator(".room-photo-gallery")).toContainText(
    "Superior double bed private",
  );
  await expect(page.locator(".room-photo-gallery .photo-gallery-item")).toHaveCount(
    13,
  );
  const lookbookOverflow = await page
    .locator(".room-photo-gallery")
    .evaluate((gallery) => gallery.scrollWidth > gallery.clientWidth);
  expect(lookbookOverflow).toBe(true);
  await expect(page.locator(".dinner-gallery img")).toHaveCount(1);
  await expect(page.locator(".experience-gallery img")).toHaveCount(4);
  await expect(page.locator(".hero-background")).toHaveAttribute("alt", "");
  await expect(page.locator(".hero-background")).toHaveAttribute(
    "src",
    /scenery\.JPG/,
  );
  await expect(page.locator(".guide-layout img")).toHaveAttribute(
    "alt",
    "City rooftops beneath green hills",
  );
  await expect(page.locator(".story-images img")).toHaveAttribute(
    "alt",
    "Travellers seated together at a dinner table",
  );
  await expect(page.locator(".location-map img")).toHaveAttribute(
    "src",
    /dalat-family-hostel-map\.png/,
  );
  await expect(page.locator(".location-map img")).toHaveAttribute(
    "alt",
    "Illustrated neighborhood map marking Dalat Family Hostel and nearby Da Lat landmarks.",
  );
  await expect(
    page.locator(".location-contact").getByRole("link", {
      name: "3/4 Ngô Quyền St, Ward 6, Dalat City, Vietnam",
    }),
  ).toHaveAttribute(
    "href",
    "https://www.google.com/maps/search/?api=1&query=3%2F4%20Ng%C3%B4%20Quy%E1%BB%81n%20St%2C%20Ward%206%2C%20Dalat%20City%2C%20Vietnam",
  );
  await expect(
    page.locator(".location-contact").getByRole("link", {
      name: "(+84) 263 3608086",
    }),
  ).toHaveAttribute("href", "tel:+842633608086");
  await expect(
    page.locator(".location-contact").getByRole("link", {
      name: "dalatfamilyhostel@gmail.com",
    }),
  ).toHaveAttribute("href", "mailto:dalatfamilyhostel@gmail.com");
  await expect(page.locator(".review-score > strong")).toHaveText("9.5");
  await expect(page.locator(".review-item")).toHaveCount(3);
  await expect(page.locator(".review-list")).toContainText(
    "Great energy kind staff good stay",
  );
  await expect(page.locator(".review-list")).toContainText(
    "It has a lovely atmosphere and a balcony area to make friends and have evening drinks.",
  );
  await expect(page.locator(".review-list")).toContainText(
    "Honestly one of the best hostel experiences I’ve had in Da Lat",
  );
  await expect(
    page.getByRole("link", { name: "Read all reviews on Hostelworld" }),
  ).toHaveAttribute(
    "href",
    "https://www.hostelworld.com/hostels/p/302311/dalat-family-hostel/#reviews",
  );
  await expect(
    page.getByRole("link", { name: "Read all reviews on Hostelworld" }),
  ).toHaveAttribute("rel", "noopener noreferrer");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Come as a Traveller. Leave as Family.",
  );
  await expect(page.locator(".hero-description")).toHaveJSProperty(
    "innerText",
    "A social backpacker hostel in Da Lat, Vietnam.\nYour next chapter starts with a hello.",
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
  await page.getByRole("link", { name: "Meet the family" }).click();
  await expect(page).toHaveURL(/#hostel-life$/);
  await expect(
    page.getByRole("heading", { name: "Different journeys. One family." }),
  ).toBeInViewport();
  const fonts = await page.evaluate(() => ({
    heading: getComputedStyle(document.querySelector('h1')!).fontFamily,
    body: getComputedStyle(document.body).fontFamily,
  }));
  expect(fonts.heading).toContain("heading");
  expect(fonts.heading).not.toContain("Georgia");
  expect(fonts.heading).not.toContain("Fraunces");
  expect(fonts.body).toContain("Be Vietnam Pro");
  const storyScriptLoaded = await page.evaluate(async () => {
    await document.fonts.load('400 48px heading', "Come as a Traveller");
    return [...document.fonts].some(
      (font) => font.family === "heading" && font.status === "loaded",
    );
  });
  expect(storyScriptLoaded).toBe(true);
  const paragraphsUseBodyFont = await page.locator("p").evaluateAll((paragraphs) =>
    paragraphs.every((paragraph) =>
      getComputedStyle(paragraph).fontFamily.includes("Be Vietnam Pro"),
    ),
  );
  expect(paragraphsUseBodyFont).toBe(true);
  const vietnameseGlyphsLoaded = await page.evaluate(async () => {
    const loadedFonts = await document.fonts.load(
      '400 16px "Be Vietnam Pro"',
      "Đà Lạt",
    );
    return loadedFonts.length > 0;
  });
  expect(vietnameseGlyphsLoaded).toBe(true);
  expect(errors).toEqual([]);
});

test("header language selector opens Google Translate options", async ({
  page,
}) => {
  await page.goto("/");
  const summary = page.locator(".language-selector > summary");
  await summary.click();
  await expect(page.locator(".language-selector")).toHaveAttribute("open", "");
  await expect(
    page.getByText("Choose a language for an automatic translation by Google."),
  ).toBeVisible();
  await expect(
    page.locator("#google-translate-script"),
  ).toHaveAttribute(
    "src",
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
  );
});

test("hero fills the viewport with centered copy over the Da Lat skyline", async ({
  page,
}) => {
  await page.goto("/");
  const header = page.locator(".site-header");
  const hero = page.locator(".hero");
  const copy = page.locator(".hero-copy");
  const location = page.locator(".hero-location");
  const eyebrow = page.locator(".hero-copy .eyebrow");
  const headerBox = await header.boundingBox();
  const heroBox = await hero.boundingBox();
  const copyBox = await copy.boundingBox();
  const locationBox = await location.boundingBox();
  const eyebrowBox = await eyebrow.boundingBox();
  const viewport = page.viewportSize();

  expect(headerBox?.y).toBe(0);
  expect(heroBox?.y).toBe(headerBox!.height);
  expect(headerBox!.height + heroBox!.height).toBe(viewport?.height);
  expect(
    Math.abs(copyBox!.x + copyBox!.width / 2 - viewport!.width / 2),
  ).toBeLessThan(2);
  expect(
    Math.abs(
      copyBox!.y +
        copyBox!.height / 2 -
        heroBox!.y -
        heroBox!.height / 2,
    ),
  ).toBeLessThan(2);
  expect(eyebrowBox!.y - locationBox!.y - locationBox!.height).toBeLessThan(16);
  const headlineLineHeight = await page
    .getByRole("heading", { level: 1 })
    .evaluate((heading) => Number.parseFloat(getComputedStyle(heading).lineHeight));
  const headlineFontSize = await page
    .getByRole("heading", { level: 1 })
    .evaluate((heading) => Number.parseFloat(getComputedStyle(heading).fontSize));
  expect(headlineLineHeight).toBeLessThan(headlineFontSize * 0.9);
  await expect(
    page.getByRole("heading", {
      name: "Come as a Traveller. Leave as Family.",
    }),
  ).toBeVisible();
  await expect(page.locator(".hero-background")).toBeVisible();

  await page.setViewportSize({ width: 320, height: 720 });
  const narrowHeading = await page.getByRole("heading", { level: 1 }).boundingBox();
  expect(narrowHeading!.x).toBeGreaterThanOrEqual(0);
  expect(narrowHeading!.x + narrowHeading!.width).toBeLessThanOrEqual(320);
});

test("keyboard skip link reaches main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});

test("narrow layout has no horizontal overflow and menu supports Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  const trigger = page.getByRole("button", { name: "Menu", exact: true });
  await trigger.click();
  const menu = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(menu).toBeVisible();
  await expect(
    menu.getByRole("link", { name: "Home", exact: true }),
  ).toHaveCount(0);
  await page.keyboard.press("Tab");
  await expect(menu.getByText("Stay", { exact: true })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await trigger.click();
  await menu.getByText("Plan Your Stay", { exact: true }).click();
  await menu.getByRole("link", { name: "Contact", exact: true }).click();
  await expect(page).toHaveURL(/\/plan-your-stay\/contact$/);
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
});

test("mobile Rooms & Dorms navigation opens the Stay room gallery", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Menu", exact: true }).click();

  const menu = page.getByRole("navigation", { name: "Mobile navigation" });
  await menu.getByText("Stay", { exact: true }).click();
  const roomsLink = menu.getByRole("link", { name: "Rooms & Dorms" });
  await expect(roomsLink).toHaveAttribute("href", "/stay#rooms");
  await roomsLink.click();
  await expect(page).toHaveURL(/\/stay#rooms$/);
  await expect(
    page.getByRole("heading", { name: "Put down your bag. Stay a little." }),
  ).toBeVisible();
});

test("FAQ page provides the supplied answers, metadata, and contact route", async ({
  page,
  request,
}) => {
  const response = await page.goto("/faq");
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(
    "Dalat Family Hostel FAQ | Stay, Activities & Da Lat Travel Tips",
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Find answers about staying at Dalat Family Hostel, check-in, activities, transport, getting around Da Lat and planning your visit.",
  );
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Frequently Asked Questions",
    }),
  ).toBeVisible();
  for (const heading of [
    "Staying at Dalat Family Hostel",
    "Experiences & Social Nights",
    "Getting Here & Getting Around",
    "Planning Your Da Lat Trip",
  ]) {
    await expect(page.getByRole("heading", { level: 2, name: heading })).toBeVisible();
  }
  const questions = page.locator(".faq-item");
  await expect(questions).toHaveCount(18);
  const checkIn = questions.filter({
    has: page.getByText("What time is check-in and check-out?", {
      exact: true,
    }),
  });
  await checkIn.locator("summary").click();
  await expect(checkIn).toHaveAttribute("open", "");
  await expect(checkIn).toContainText(
    "Check-in begins from 2:00 PM, and check-out is before 12:00 PM.",
  );
  await expect(
    page.getByRole("link", { name: "Contact Dalat Family Hostel" }),
  ).toHaveAttribute("href", "/plan-your-stay/contact");
  await expect(page.locator(".faq-image-credit")).toContainText("CC BY-SA 4.0");
  const imageResponse = await request.get(
    "/images/explore-da-lat/dalat-city-panorama.jpg",
  );
  expect(imageResponse.status()).toBe(200);
  const legacyRedirect = await request.get("/plan-your-stay/faqs", {
    maxRedirects: 0,
  });
  expect(legacyRedirect.status()).toBe(308);
  expect(legacyRedirect.headers().location).toBe("/faq");
});

test("all sitemap routes render with page headings and breadcrumbs", async ({
  page,
}) => {
  const routes = [
    "/stay",
    "/stay/facilities",
    "/experiences",
    "/experiences/family-dinner",
    "/experiences/nightlife",
    "/experiences/canyoning",
    "/experiences/waterfalls-culture-tour",
    "/experiences/mario-kart-mongoland",
    "/experiences/cloud-hunting",
    "/experiences/day-tours",
    "/our-family",
    "/explore-da-lat",
    "/explore-da-lat/things-to-do",
    "/explore-da-lat/getting-around",
    "/plan-your-stay",
    "/plan-your-stay/how-to-get-here",
    "/plan-your-stay/contact",
    "/faq",
  ];

  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page.getByRole("navigation", { name: "Breadcrumb" }),
    ).toBeVisible();
    if (
      [
        "/stay",
        "/faq",
        "/explore-da-lat",
        "/explore-da-lat/things-to-do",
        "/explore-da-lat/getting-around",
        "/plan-your-stay",
        "/plan-your-stay/how-to-get-here",
        "/experiences",
        "/experiences/family-dinner",
        "/experiences/nightlife",
        "/experiences/canyoning",
        "/experiences/waterfalls-culture-tour",
        "/experiences/mario-kart-mongoland",
        "/experiences/cloud-hunting",
        "/experiences/day-tours",
      ].includes(route)
    ) {
      const pageTemplate = [
        "/stay",
        "/explore-da-lat/things-to-do",
        "/explore-da-lat/getting-around",
      ].includes(route)
        ? route === "/stay"
          ? ".stay-page"
          : ".explore-guide-page"
        : route === "/faq"
          ? ".faq-page"
        : ".editorial-page";
      await expect(page.locator(pageTemplate)).toBeVisible();
    } else {
      await expect(
        page.getByRole("heading", { name: "Information being confirmed" }),
      ).toBeVisible();
    }
  }
});

test("travel guide pages show supplied SEO, editorial copy, CTAs and valid links", async ({
  page,
}) => {
  const cases = [
    {
      route: "/explore-da-lat",
      title: "Explore Da Lat",
      seoTitle: "Explore Da Lat, Vietnam | Nature, Coffee, Culture & Adventure",
      metaDescription:
        "Explore Da Lat’s pine forests, waterfalls, flower gardens, coffee culture and highland adventures. Discover the best things to do in Da Lat, Vietnam.",
      sections: [
        "Nature, views and fresh air",
        "Coffee, food and local flavours",
        "Culture with character",
        "Adventure in the highlands",
      ],
      cta: "Plan your Da Lat itinerary",
    },
    {
      route: "/plan-your-stay",
      title: "Plan Your Stay",
      seoTitle:
        "Plan Your Da Lat Trip | Best Time to Visit, Where to Stay & Travel Tips",
      metaDescription:
        "Plan your Da Lat trip with practical advice on the best time to visit, where to stay, what to pack and how long to spend in Vietnam’s highland city.",
      sections: [
        "When to visit Da Lat",
        "How many days do you need?",
        "Where to stay in Da Lat",
        "What to pack",
        "Travel well in Da Lat",
      ],
      cta: "Build your Da Lat itinerary",
    },
    {
      route: "/plan-your-stay/how-to-get-here",
      title: "How to Get Here",
      seoTitle: "How to Get to Da Lat | Flights, Buses & Travel Tips",
      metaDescription:
        "Learn how to get to Da Lat, Vietnam by flight, sleeper bus, private car or transfer. Find practical arrival and transport tips for your trip.",
      sections: [
        "Fly to Da Lat",
        "Travel to Da Lat by bus",
        "Private car or transfer",
        "Arriving from abroad",
        "Getting around once you arrive",
        "Before you leave",
      ],
      cta: "Plan your stay in Da Lat",
    },
  ];

  for (const item of cases) {
    await page.goto(item.route);
    await expect(
      page.getByRole("heading", { level: 1, name: item.title }),
    ).toBeVisible();
    await expect(page).toHaveTitle(item.seoTitle);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      item.metaDescription,
    );
    for (const section of item.sections) {
      await expect(
        page.getByRole("heading", { level: 2, name: section }),
      ).toBeVisible();
    }
    await expect(
      page.getByRole("link", { name: item.cta }),
    ).toBeVisible();
    const hrefs = await page
      .locator(".editorial-related a")
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
    const staticRoutes = [
      "/guides",
      "/guides/da-lat-travel-guide",
      "/guides/things-to-do-in-da-lat",
      "/guides/da-lat-3-day-itinerary",
      "/guides/ho-chi-minh-to-da-lat",
      "/guides/da-lat-backpacking-guide",
      "/guides/best-cafes-in-da-lat",
      "/guides/best-waterfalls-in-da-lat",
      "/guides/da-lat-on-a-budget",
      "/guides/where-to-stay-in-da-lat",
      "/guides/best-time-to-visit-da-lat",
      "/guides/da-lat-weather",
      "/guides/da-lat-sleeper-bus-guide",
      "/guides/getting-around-da-lat",
      "/stay",
      "/stay/facilities",
      "/experiences",
      "/experiences/family-dinner",
      "/experiences/nightlife",
      "/experiences/canyoning",
      "/experiences/waterfalls-culture-tour",
      "/experiences/mario-kart-mongoland",
      "/experiences/cloud-hunting",
      "/experiences/day-tours",
      "/our-family",
      "/explore-da-lat",
      "/explore-da-lat/things-to-do",
      "/explore-da-lat/getting-around",
      "/plan-your-stay",
      "/plan-your-stay/how-to-get-here",
      "/faq",
      "/plan-your-stay/contact",
    ];
    for (const href of hrefs) {
      if (href.startsWith("#")) {
        await expect(page.locator(href)).toHaveCount(1);
      } else if (href.startsWith("/")) {
        expect(staticRoutes).toContain(href.split("#")[0]);
      }
    }
  }

  await page.goto("/plan-your-stay/how-to-get-here");
  await expect(page.locator(".site-page-map img")).toBeVisible();
  await expect(
    page
      .locator(".editorial-sources")
      .getByRole("link", { name: "Vietnam National Electronic Visa system" }),
  ).toHaveAttribute("href", "https://evisa.gov.vn/");
});

test("legacy Travel Guides URL redirects permanently to the Guides hub", async ({
  request,
}) => {
  const redirect = await request.get("/explore-da-lat/travel-guides", {
    maxRedirects: 0,
  });
  expect(redirect.status()).toBe(308);
  expect(redirect.headers().location).toBe("/guides");
});

test("Da Lat Guides hub renders metadata, topics, featured and popular guides", async ({
  page,
}) => {
  const response = await page.goto("/guides");
  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", { level: 1, name: "Da Lat Travel Guides" }),
  ).toBeVisible();
  await expect(page).toHaveTitle(
    "Da Lat Travel Guides | Plan Your Vietnam Highland Adventure",
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Practical Da Lat travel guides for backpackers: things to do, cafés, nightlife, waterfalls, budgets, itineraries, weather and getting here.",
  );
  await expect(
    page.getByText("Travel smarter. Experience more.", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Explore all guides/ }),
  ).toHaveAttribute("href", "#all-guides");
  await expect(
    page.getByRole("link", { name: /Plan your stay/ }).first(),
  ).toHaveAttribute("href", "/plan-your-stay");
  await expect(
    page.getByRole("searchbox", { name: "Search Da Lat guides" }),
  ).toHaveAttribute("placeholder", "Search Da Lat guides");

  for (const title of [
    "Plan Your Trip",
    "Things to Do",
    "Food & Nightlife",
    "Itineraries",
    "Getting Here",
    "Getting Around",
  ]) {
    await expect(
      page.locator(".guide-topic-card").filter({ hasText: title }),
    ).toHaveAttribute("href", /\/guides\?topic=/);
  }

  const featuredRoutes = [
    "/guides/da-lat-travel-guide",
    "/guides/things-to-do-in-da-lat",
    "/guides/da-lat-3-day-itinerary",
    "/guides/ho-chi-minh-to-da-lat",
  ];
  for (const href of featuredRoutes) {
    await expect(page.locator(`a[href="${href}"]`).first()).toBeVisible();
  }

  for (const title of [
    "Da Lat Backpacking Guide",
    "Best Cafés in Da Lat",
    "Best Waterfalls in Da Lat",
    "Da Lat on a Budget",
    "Where to Stay in Da Lat",
    "Best Time to Visit Da Lat",
    "Da Lat Weather",
    "Da Lat Sleeper Bus Guide",
  ]) {
    await expect(page.getByRole("heading", { name: title })).toBeVisible();
  }

  await expect(
    page.getByRole("heading", {
      name: "Your Da Lat adventure starts here.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Stay at Dalat Family Hostel/ }),
  ).toHaveAttribute("href", "/stay");

  const jsonLd = await page
    .locator('script[type="application/ld+json"]')
    .textContent();
  const collection = JSON.parse(jsonLd ?? "{}");
  expect(collection["@type"]).toBe("CollectionPage");
  expect(collection.mainEntity["@type"]).toBe("ItemList");
  expect(collection.mainEntity.itemListElement).toHaveLength(21);
  expect(
    collection.mainEntity.itemListElement.map(
      (item: { item: { name: string; url: string } }) => item.item.url,
    ),
  ).toContain("/guides/da-lat-travel-guide");
  await expect(
    page
      .locator("#all-guides")
      .getByRole("link", { name: "Da Lat Nightlife Guide", exact: true }),
  ).toHaveAttribute("href", "/guides/da-lat-nightlife");
  await expect(
    page
      .locator("#all-guides")
      .getByRole("link", { name: "Hanoi to Da Lat", exact: true }),
  ).toHaveAttribute("href", "/guides/hanoi-to-da-lat");
});

test("Da Lat Guides hub reflows without horizontal overflow on narrow screens", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/guides");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  const heading = await page.getByRole("heading", { level: 1 }).boundingBox();
  expect(heading).not.toBeNull();
  expect(heading!.x).toBeGreaterThanOrEqual(0);
  expect(heading!.x + heading!.width).toBeLessThanOrEqual(320);
});

test("filtered guide cards leave enough width for readable text", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/guides?topic=plan-your-trip#guide-results");

  const resultCopy = page.locator(".guide-results-grid .guide-list-copy").first();
  await expect(resultCopy).toBeVisible();
  const box = await resultCopy.boundingBox();
  expect(box).not.toBeNull();
  expect(box!.width).toBeGreaterThan(300);
});

test("guide search and topic links filter to real guide pages", async ({
  page,
}) => {
  await page.goto("/guides");
  await page
    .locator(".guide-topic-card")
    .filter({ hasText: "Getting Here" })
    .click();
  await page.waitForURL(/\/guides\?topic=getting-here/);
  await expect(
    page.getByRole("heading", { level: 2, name: "Getting Here" }),
  ).toBeVisible();
  await expect(
    page.locator("#guide-results").getByRole("link", {
      name: "Ho Chi Minh City to Da Lat",
      exact: true,
    }),
  ).toHaveAttribute("href", "/guides/ho-chi-minh-to-da-lat");
  await expect(
    page.locator("#guide-results").getByRole("link", {
      name: "Da Lat Sleeper Bus Guide",
      exact: true,
    }),
  ).toHaveAttribute("href", "/guides/da-lat-sleeper-bus-guide");

  await page.goto("/guides");
  await page
    .getByRole("searchbox", { name: "Search Da Lat guides" })
    .fill("waterfall");
  await page.getByRole("button", { name: "Search", exact: true }).click();
  await page.waitForURL(/\/guides\?q=waterfall/);
  await expect(
    page.getByRole("heading", { name: "Guides for “waterfall”" }),
  ).toBeVisible();
  await expect(
    page.locator("#guide-results").getByRole("link", {
      name: "Best Waterfalls in Da Lat",
      exact: true,
    }),
  ).toHaveAttribute("href", "/guides/best-waterfalls-in-da-lat");
});

test("all linked Da Lat guide articles render with real editorial content", async ({
  page,
}) => {
  const slugs = [
    "da-lat-travel-guide",
    "things-to-do-in-da-lat",
    "da-lat-3-day-itinerary",
    "ho-chi-minh-to-da-lat",
    "da-lat-backpacking-guide",
    "best-cafes-in-da-lat",
    "best-waterfalls-in-da-lat",
    "da-lat-on-a-budget",
    "where-to-stay-in-da-lat",
    "best-time-to-visit-da-lat",
    "da-lat-weather",
    "da-lat-sleeper-bus-guide",
    "getting-around-da-lat",
    "da-lat-nightlife",
    "da-lat-5-day-itinerary",
    "ho-chi-minh-to-da-lat-sleeper-bus",
    "hanoi-to-da-lat",
    "nha-trang-to-da-lat",
    "mui-ne-to-da-lat",
    "da-lat-airport-to-city-centre",
    "da-lat-bus-station-to-city-centre",
  ];

  for (const slug of slugs) {
    const response = await page.goto(`/guides/${slug}`);
    expect(response?.status(), slug).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator(".guide-article-body > p").first()).toBeVisible();
    await expect(
      page.locator('meta[name="description"]'),
    ).toHaveAttribute("content", /.+/);
    await expect(
      page.getByRole("link", { name: "Back to all Da Lat guides" }),
    ).toHaveAttribute("href", "/guides");
  }

  await page.goto("/guides/ho-chi-minh-to-da-lat-sleeper-bus");
  await expect(page).toHaveTitle(
    "Ho Chi Minh City to Da Lat Sleeper Bus | Booking & Travel Tips",
  );
  await expect(
    page.locator(".guide-article-read-next").getByRole("link", {
      name: "Ho Chi Minh City to Da Lat",
    }),
  ).toHaveAttribute("href", "/guides/ho-chi-minh-to-da-lat");

  await page.goto("/guides/da-lat-weather");
  await expect(page.locator(".guide-article-updated")).toHaveText(
    "Updated 11 Oct 2026",
  );
});

test("legacy pub crawl URL permanently redirects to the nightlife page", async ({
  request,
  page,
}) => {
  const redirect = await request.get("/experiences/pub-crawl", {
    maxRedirects: 0,
  });
  expect(redirect.status()).toBe(308);
  expect(redirect.headers().location).toBe("/experiences/nightlife");

  const destination = await page.goto("/experiences/nightlife");
  expect(destination?.status()).toBe(200);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Happy Hour & Nightlife",
    }),
  ).toBeVisible();
  await expect(page).toHaveTitle(
    "Da Lat Hostel Nightlife, Happy Hour & Pub Crawls | Dalat Family Hostel",
  );
});

test("legacy family dinner URL permanently redirects to Family Dinner", async ({
  request,
  page,
}) => {
  const redirect = await request.get(
    "/experiences/family-dinner-nightlife",
    { maxRedirects: 0 },
  );
  expect(redirect.status()).toBe(308);
  expect(redirect.headers().location).toBe("/experiences/family-dinner");

  const destination = await page.goto("/experiences/family-dinner");
  expect(destination?.status()).toBe(200);
  await expect(
    page.getByRole("heading", { level: 1, name: "Family Dinner" }),
  ).toBeVisible();
});

test("contact page exposes the supplied address, telephone, and email", async ({
  page,
}) => {
  await page.goto("/plan-your-stay/contact");
  const contactDetails = page.getByRole("region", {
    name: "Contact details",
  });
  await expect(
    contactDetails.getByRole("link", {
      name: "3/4 Ngô Quyền St, Ward 6, Dalat City, Vietnam",
    }),
  ).toHaveAttribute(
    "href",
    "https://www.google.com/maps/search/?api=1&query=3%2F4%20Ng%C3%B4%20Quy%E1%BB%81n%20St%2C%20Ward%206%2C%20Dalat%20City%2C%20Vietnam",
  );
  await expect(
    contactDetails.getByRole("link", { name: "(+84) 263 3608086" }),
  ).toHaveAttribute("href", "tel:+842633608086");
  await expect(
    contactDetails.getByRole("link", {
      name: "dalatfamilyhostel@gmail.com",
    }),
  ).toHaveAttribute("href", "mailto:dalatfamilyhostel@gmail.com");

  await page.goto("/plan-your-stay/how-to-get-here");
  await expect(
    page.getByRole("link", { name: "Open Dalat Family Hostel in Google Maps" }),
  ).toHaveAttribute(
    "href",
    "https://www.google.com/maps/search/?api=1&query=3%2F4%20Ng%C3%B4%20Quy%E1%BB%81n%20St%2C%20Ward%206%2C%20Dalat%20City%2C%20Vietnam",
  );
});

test("Explore Da Lat Things to Do page includes its guide content and metadata", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  const response = await page.goto("/explore-da-lat/things-to-do");
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(
    "Best Things to Do in Da Lat | Waterfalls, Coffee & Adventure",
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Discover the best things to do in Da Lat, Vietnam—from waterfalls and canyoning to coffee farms, historic sights, cloud hunting and local food.",
  );
  await expect(
    page.getByRole("heading", { level: 1, name: "Things to Do in Da Lat" }),
  ).toHaveCSS("color", "rgb(255, 253, 248)");
  await expect(
    page.getByRole("navigation", { name: "Breadcrumb" }),
  ).toContainText(/Home\s*\/\s*Explore Da Lat\s*\/\s*Things to Do in Da Lat/);
  await expect(
    page.getByRole("link", { name: /Explore Experiences/ }),
  ).toHaveAttribute("href", "/experiences");
  await expect(
    page.getByRole("heading", { name: "Find your kind of Da Lat day" }),
  ).toBeVisible();
  for (const title of [
    "Follow the water",
    "Look closer at the city",
    "Take the scenic coffee break",
    "Meet the morning mist",
    "Do Da Lat with the family",
    "You do not need to do everything.",
  ]) {
    await expect(page.getByRole("heading", { name: title })).toBeVisible();
  }
  for (const destination of [
    "/experiences/family-dinner",
    "/experiences/canyoning",
    "/experiences/waterfalls-culture-tour",
    "/experiences/cloud-hunting",
    "/experiences/day-tours",
    "/explore-da-lat/getting-around",
  ]) {
    await expect(
      page.locator(`a[href="${destination}"]:visible`).first(),
    ).toBeVisible();
  }
  for (const image of [
    "/images/explore-da-lat/dalat-city-panorama.jpg",
    "/images/explore-da-lat/datanla-waterfall.jpg",
    "/images/explore-da-lat/train-station.jpg",
    "/images/explore-da-lat/coffee-farm.jpg",
    "/images/explore-da-lat/dalat-market.jpg",
  ]) {
    const imageResponse = await page.request.get(image);
    expect(imageResponse.status(), image).toBe(200);
    expect(imageResponse.headers()["content-type"]).toContain("image/jpeg");
  }
  const photoCredits = page.locator(".explore-photo-credits");
  await photoCredits.locator("summary").click();
  await expect(
    photoCredits.getByRole("link", { name: "Datanla Waterfall 1" }),
  ).toHaveAttribute(
    "href",
    "https://commons.wikimedia.org/wiki/File:Datanla_Waterfall_1.jpg",
  );
  await expect(
    photoCredits.getByRole("link", { name: "CC BY 2.0" }).first(),
  ).toHaveAttribute("href", "https://creativecommons.org/licenses/by/2.0/");
  const breadcrumb = JSON.parse(
    (await page.locator('script[type="application/ld+json"]').textContent()) ??
      "{}",
  );
  expect(breadcrumb["@type"]).toBe("BreadcrumbList");
  expect(breadcrumb.itemListElement).toHaveLength(3);
  expect(breadcrumb.itemListElement[2].item).toBe(
    "/explore-da-lat/things-to-do",
  );
});

test("Explore Da Lat Getting Around page explains transport choices and links", async ({
  page,
}) => {
  const response = await page.goto("/explore-da-lat/getting-around");
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(
    "Getting Around Da Lat | Walking, Taxis, Scooters & Day Tours",
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Learn how to get around Da Lat by foot, taxi, ride-hailing, scooter, private car and organised tours—with practical travel and safety tips.",
  );
  await expect(
    page.getByRole("heading", { level: 1, name: "Getting Around Da Lat" }),
  ).toHaveCSS("color", "rgb(255, 253, 248)");
  await expect(
    page.getByRole("navigation", { name: "Breadcrumb" }),
  ).toContainText(/Home\s*\/\s*Explore Da Lat\s*\/\s*Getting Around Da Lat/);
  for (const title of [
    "Walk the centre",
    "Take a taxi or ride-hailing car",
    "Rent a scooter—only if you are confident",
    "Join a day tour or book a private car",
    "A few smart local tips",
    "Not sure how to get there? Ask the family.",
  ]) {
    await expect(page.getByRole("heading", { name: title })).toBeVisible();
  }
  for (const title of [
    "On foot",
    "Taxi or ride-hailing",
    "Scooter",
    "Tours & private cars",
  ]) {
    await expect(page.locator(".transport-quick-strip")).toContainText(title);
  }
  await expect(
    page.getByRole("link", { name: /Talk to the hostel team/ }),
  ).toHaveAttribute("href", "mailto:dalatfamilyhostel@gmail.com");
  const photoCredits = page.locator(".explore-photo-credits");
  await photoCredits.locator("summary").click();
  await expect(
    photoCredits.getByRole("link", { name: "Road sign, Tran Hung Dao & Ho Tung Mau & 3 Thang 4 Street, Da Lat" }),
  ).toHaveAttribute(
    "href",
    "https://commons.wikimedia.org/wiki/File:Road_sign,_Tran_Hung_Dao_%26_Ho_Tung_Mau_%26_3_Thang_4_Street,_Da_Lat.JPG",
  );
  const breadcrumb = JSON.parse(
    (await page.locator('script[type="application/ld+json"]').textContent()) ??
      "{}",
  );
  expect(breadcrumb["@type"]).toBe("BreadcrumbList");
  expect(breadcrumb.itemListElement[2].item).toBe(
    "/explore-da-lat/getting-around",
  );
});

test("legacy Getting Around Da Lat route redirects to the new guide", async ({
  request,
}) => {
  const redirect = await request.get(
    "/explore-da-lat/getting-around-da-lat",
    { maxRedirects: 0 },
  );
  expect(redirect.status()).toBe(308);
  expect(redirect.headers().location).toBe("/explore-da-lat/getting-around");
});

test("Da Lat Explore pages reflow at narrow mobile width", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });

  for (const route of [
    "/explore-da-lat/things-to-do",
    "/explore-da-lat/getting-around",
  ]) {
    await page.goto(route);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      route,
    ).toBe(true);
  }
});

test("experience pages include supplied SEO, copy, links, and current-detail notes", async ({
  page,
}) => {
  const cases = [
    {
      route: "/experiences",
      title: "Experiences & Activities",
      seoTitle: "Da Lat Hostel Experiences & Activities | Dalat Family Hostel",
      metaDescription:
        "Join the Dalat Family Hostel community for family dinners, canyoning, nightlife, waterfall tours, cloud hunting and unforgettable Da Lat day trips.",
      sections: ["Find your next story"],
      links: [],
      cta: "Ask the hostel team what’s on today",
    },
    {
      route: "/experiences/family-dinner",
      title: "Family Dinner",
      seoTitle:
        "Family Dinner in Da Lat | Meet Travellers at Dalat Family Hostel",
      metaDescription:
        "Join a family dinner at Dalat Family Hostel: a shared Vietnamese meal, friendly faces and one of the easiest ways to meet travellers in Da Lat.",
      sections: ["Family Dinner at Dalat Family Hostel"],
      links: ["/experiences/nightlife", "/experiences/canyoning", "/stay"],
      cta: "Ask reception about tonight’s Family Dinner",
    },
    {
      route: "/experiences/nightlife",
      title: "Happy Hour & Nightlife",
      seoTitle:
        "Da Lat Hostel Nightlife, Happy Hour & Pub Crawls | Dalat Family Hostel",
      metaDescription:
        "Start with happy hour and meet fellow travellers at Dalat Family Hostel. Join social nights, karaoke, beer pong and pub crawls in Da Lat when scheduled.",
      sections: ["Happy Hour & Nightlife in Da Lat", "What might be on"],
      links: [
        "/experiences/family-dinner",
        "/stay",
        "/experiences",
      ],
      cta: "Check tonight’s social schedule",
    },
    {
      route: "/experiences/canyoning",
      title: "Extreme Canyoning",
      seoTitle:
        "Canyoning in Da Lat | Waterfall Adventure with Dalat Family Hostel",
      metaDescription:
        "Take on Da Lat canyoning: rappelling, swimming, sliding and waterfall adventure in Vietnam’s Central Highlands. Ask Dalat Family Hostel about upcoming tours.",
      sections: ["Extreme Canyoning in Da Lat", "Before you go"],
      links: [
        "/experiences/waterfalls-culture-tour",
        "/experiences/day-tours",
        "/stay",
        "/experiences",
      ],
      cta: "Ask us about upcoming canyoning tours",
    },
    {
      route: "/experiences/waterfalls-culture-tour",
      title: "Waterfalls & Culture Tour",
      seoTitle: "Da Lat Waterfalls & Culture Tour | Explore Beyond the City",
      metaDescription:
        "Discover Da Lat beyond the city on a waterfalls and culture tour, with highland scenery, local stories and unforgettable stops along the way.",
      sections: ["Waterfalls & Culture Tour in Da Lat"],
      links: [
        "/experiences/canyoning",
        "/experiences/day-tours",
        "/experiences/cloud-hunting",
        "/experiences",
      ],
      cta: "Plan a waterfall day with us",
    },
    {
      route: "/experiences/mario-kart-mongoland",
      title: "Mario Kart & Mongoland",
      seoTitle: "Mario Kart & Mongoland Da Lat | Countryside Day Out",
      metaDescription:
        "Add some play to your Da Lat trip with a Mario Kart and Mongoland adventure—big views, countryside fun and a brilliant day with new hostel friends.",
      sections: ["Mario Kart & Mongoland: A Playful Da Lat Day Out"],
      links: [
        "/experiences/day-tours",
        "/experiences/waterfalls-culture-tour",
        "/stay",
        "/experiences",
      ],
      cta: "Ask about Mario Kart & Mongoland",
    },
    {
      route: "/experiences/cloud-hunting",
      title: "Cloud Hunting",
      seoTitle: "Cloud Hunting in Da Lat | Sunrise Views & Highland Mornings",
      metaDescription:
        "Go cloud hunting in Da Lat for sunrise, cool mountain air and unforgettable highland views. Ask Dalat Family Hostel about current early-morning trips.",
      sections: ["Cloud Hunting in Da Lat"],
      links: [
        "/experiences/waterfalls-culture-tour",
        "/experiences/day-tours",
        "/plan-your-stay",
        "/experiences",
      ],
      cta: "Ask about the next cloud-hunting trip",
    },
    {
      route: "/experiences/day-tours",
      title: "Da Lat Day Tours",
      seoTitle: "Da Lat Day Tours | Hostel Adventures Beyond the City",
      metaDescription:
        "Discover the best Da Lat day tours with Dalat Family Hostel, from waterfalls and culture to cloud hunting, canyoning and countryside adventures.",
      sections: ["Choose your kind of day"],
      links: [
        "/experiences/canyoning",
        "/experiences/waterfalls-culture-tour",
        "/experiences/cloud-hunting",
        "/experiences/mario-kart-mongoland",
      ],
      cta: "Talk to the team about your ideal Da Lat day",
    },
  ];

  const staticRoutes = cases.map((item) => item.route).concat([
    "/stay",
    "/stay/facilities",
    "/our-family",
    "/explore-da-lat",
    "/guides",
    "/explore-da-lat/things-to-do",
    "/explore-da-lat/getting-around",
    "/plan-your-stay",
    "/plan-your-stay/how-to-get-here",
    "/plan-your-stay/contact",
    "/faq",
  ]);

  for (const item of cases) {
    const response = await page.goto(item.route);
    expect(response?.status(), item.route).toBe(200);
    await expect(
      page.getByRole("heading", { level: 1, name: item.title }),
    ).toBeVisible();
    await expect(page).toHaveTitle(item.seoTitle);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      item.metaDescription,
    );
    for (const section of item.sections) {
      await expect(
        page.getByRole("heading", { level: 2, name: section }),
      ).toBeVisible();
    }
    await expect(page.locator(".site-page-note")).toBeVisible();
    await expect(
      page.getByRole("link", { name: item.cta }),
    ).toBeVisible();

    const hrefs = await page
      .locator(".editorial-related a")
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
    for (const href of item.links) {
      expect(hrefs).toContain(href);
    }
    for (const href of hrefs) {
      if (href.startsWith("#")) {
        await expect(page.locator(href)).toHaveCount(1);
      } else if (href.startsWith("/")) {
        expect(staticRoutes).toContain(href.split("#")[0]);
      }
    }
  }

  await page.goto("/experiences");
  const experienceLinks = await page
    .locator(".editorial-list dt a")
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  expect(experienceLinks).toEqual([
    "/experiences/family-dinner",
    "/experiences/nightlife",
    "/experiences/canyoning",
    "/experiences/waterfalls-culture-tour",
    "/experiences/mario-kart-mongoland",
    "/experiences/cloud-hunting",
    "/experiences/day-tours",
  ]);
});

test("desktop navigation exposes the requested page hierarchy", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");
  const navigation = page.getByRole("navigation", { name: "Main navigation" });
  await expect(
    page.getByRole("banner").getByRole("link", {
      name: "Dalat Family Hostel — home",
    }),
  ).toHaveAttribute("href", "/");
  await expect(
    navigation.getByRole("link", { name: "Home", exact: true }),
  ).toHaveCount(0);
  for (const link of await navigation.getByRole("link").all()) {
    await expect(link).toHaveCSS("text-decoration-line", "none");
  }
  await expect(
    navigation.getByRole("link", { name: "Experiences", exact: true }),
  ).toHaveAttribute(
    "href",
    "/experiences",
  );
  const navigationLinks = await navigation
    .locator("a")
    .evaluateAll((links) => links.map((link) => link.textContent?.trim()));
  expect(navigationLinks).toEqual([
    "Stay",
    "Rooms & Dorms",
    "Facilities",
    "Experiences",
    "Family Dinner",
    "Happy Hour & Nightlife",
    "Extreme Canyoning",
    "Waterfalls & Culture Tour",
    "Mario Kart & Mongoland",
    "Cloud Hunting",
    "Da Lat Day Tours",
    "Our Family",
    "Explore Da Lat",
    "Travel Guides",
    "Things to Do",
    "Getting Around Da Lat",
    "Plan Your Stay",
    "How to Get Here",
    "FAQs",
    "Contact",
  ]);
  await expect(navigation.locator('a[href="/stay#rooms"]')).toHaveAttribute(
    "href",
    "/stay#rooms",
  );
  await expect(navigation.locator('a[href="/faq"]')).toHaveAttribute(
    "href",
    "/faq",
  );
  const experiences = navigation
    .getByRole("link", { name: "Experiences", exact: true })
    .first();
  await experiences.hover();
  await expect(
    navigation.getByRole("link", { name: "Extreme Canyoning" }),
  ).toBeVisible();
  await navigation.getByRole("link", { name: "Explore Da Lat" }).hover();
  await expect(
    navigation.getByRole("link", { name: "Travel Guides" }),
  ).toHaveAttribute("href", "/guides");
  await experiences.hover();
  await navigation.getByRole("link", { name: "Extreme Canyoning" }).click();
  await expect(page).toHaveURL(/\/experiences\/canyoning$/);
  await expect(
    page.getByRole("heading", { name: "Extreme Canyoning", level: 1 }),
  ).toBeVisible();
});

test("room lookbook scrolls horizontally with keyboard access", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#rooms");
  const lookbook = page.getByRole("region", {
    name: "Room photo lookbook. Scroll horizontally to browse all 13 room images.",
  });
  await lookbook.focus();
  const initialScroll = await lookbook.evaluate((gallery) => gallery.scrollLeft);
  await page.keyboard.press("ArrowRight");
  await expect
    .poll(() => lookbook.evaluate((gallery) => gallery.scrollLeft))
    .toBeGreaterThan(initialScroll);
});

test("Stay combines the room lookbook with the former Rooms & Dorms page", async ({
  page,
  request,
}) => {
  const response = await page.goto("/stay");
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle("Stay at Dalat Family Hostel | Rooms & Dorms");
  await expect(
    page.getByRole("heading", { level: 1, name: "Stay" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Put down your bag. Stay a little.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("region", {
      name: "Room photo lookbook. Scroll horizontally to browse all 13 room images.",
    }).locator(".photo-gallery-item"),
  ).toHaveCount(13);
  await expect(
    page.getByRole("link", { name: "See facilities" }),
  ).toHaveAttribute("href", "/stay/facilities");
  await expect(
    page.getByRole("heading", { name: "Room details are being confirmed" }),
  ).toBeVisible();

  const redirect = await request.get("/stay/rooms-dorms", {
    maxRedirects: 0,
  });
  expect(redirect.status()).toBe(308);
  expect(redirect.headers().location).toBe("/stay#rooms");

  await page.goto("/stay/rooms-dorms");
  await expect(page).toHaveURL(/\/stay#rooms$/);
  await expect(page.locator("#rooms")).toBeVisible();
});

test("shared-space photos stay in one row and reveal on hover", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#rooms");
  const gallery = page.locator(".shared-photo-gallery");
  const figures = gallery.locator("figure");
  const boxes = await figures.evaluateAll((items) =>
    items.map((item) => {
      const { top, height } = item.getBoundingClientRect();
      return { top, height };
    }),
  );
  expect(new Set(boxes.map((box) => box.top)).size).toBe(1);
  expect(boxes[0].height).toBeGreaterThan(0);

  const image = gallery.locator("img").first();
  const supportsHover = await page.evaluate(() =>
    matchMedia("(hover: hover) and (pointer: fine)").matches,
  );
  if (supportsHover) {
    await expect(image).toHaveCSS("filter", "brightness(0.72) saturate(0.84)");
    await gallery.getByRole("button").first().hover();
    await expect(image).toHaveCSS("filter", "none");
  } else {
    await expect(image).toHaveCSS("filter", "brightness(0.72) saturate(0.84)");
  }
  await expect(gallery.getByRole("button")).toHaveCount(5);
});

test("shared-space photos expand in a modal and restore focus on close", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#rooms");
  const trigger = page
    .getByRole("button", {
      name: "Expand shared-space photo: Warmly lit communal lounge with tables and seating",
    })
    .first();
  await trigger.click();
  const dialog = page.getByRole("dialog", {
    name: "Expanded photo: Warmly lit communal lounge with tables and seating",
  });
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("img", {
      name: "Warmly lit communal lounge with tables and seating",
    }),
  ).toBeVisible();
  const close = dialog.getByRole("button", {
    name: "Close expanded shared-space photo",
  });
  await expect(close).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test("room lookbook images expand in a modal and restore focus on close", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#rooms");
  const trigger = page.getByRole("button", {
    name: "Expand Deluxe double bed private ensuite",
  }).first();
  await trigger.click();
  const dialog = page.getByRole("dialog", {
    name: "Deluxe double bed private ensuite",
  });
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("img", {
      name: "Deluxe double bed private ensuite room",
    }),
  ).toBeVisible();
  const close = dialog.getByRole("button", {
    name: "Close expanded room photo",
  });
  await expect(close).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test("booking dialog traps focus, exposes clean property links and restores focus", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Plan your stay" }).first();
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  const close = dialog.getByRole("button", { name: "Close booking options" });
  await expect(close).toBeFocused();
  await expect(
    dialog.getByRole("link", { name: "Book on Hostelworld" }),
  ).toHaveAttribute(
    "href",
    "https://www.hostelworld.com/hostels/p/302311/dalat-family-hostel/",
  );
  await expect(
    dialog.getByRole("link", { name: "Book on Booking.com" }),
  ).toHaveAttribute(
    "href",
    "https://www.booking.com/hotel/vn/dalat-family-hostel-thanh-pho-da-lat.en-gb.html",
  );
  await expect(
    dialog.getByRole("link", { name: "Book on Agoda" }),
  ).toHaveAttribute(
    "href",
    "https://www.agoda.com/dalat-family-hostel-h16373235/hotel/dalat-vn.html",
  );
  await expect(
    dialog.getByRole("link", { name: "Message the Hostel" }),
  ).toHaveCount(0);
  await page.keyboard.press("Shift+Tab");
  expect(
    await page.evaluate(() => !!document.activeElement?.closest("dialog")),
  ).toBe(true);
  await page.keyboard.press("Tab");
  await expect(close).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe(
    "hidden",
  );
  const box = await dialog.boundingBox();
  if (testInfo.project.name === "mobile") {
    expect(
      Math.abs(box!.y + box!.height - page.viewportSize()!.height),
    ).toBeLessThan(2);
  }
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await expect
    .poll(() => page.evaluate(() => document.body.style.overflow))
    .not.toBe("hidden");
  await trigger.click();
  await close.click();
  await expect(trigger).toBeFocused();
});

test("provider handoff navigates to the supplied property, not a fabricated booking flow", async ({
  page,
}) => {
  await page.route("https://www.hostelworld.com/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "text/html",
      body: "<h1>Intercepted provider handoff</h1>",
    }),
  );
  await page.goto("/");
  await page.getByRole("button", { name: "Plan your stay" }).first().click();
  await page.getByRole("link", { name: "Book on Hostelworld" }).click();
  await expect(page).toHaveURL(
    "https://www.hostelworld.com/hostels/p/302311/dalat-family-hostel/",
  );
  // Interception validates navigation wiring, not provider uptime or reservation functionality.
});

test("all sections remain readable with reduced motion and larger text", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 640, height: 900 });
  await page.goto("/");
  await page.addStyleTag({ content: "html { font-size: 200%; }" });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await expect(page.locator("main section")).toHaveCount(10);
  await expect(page.locator("main h1")).toHaveCount(1);
});

test("booking URL guard rejects unsafe or unrelated destinations", () => {
  expect(validateBookingUrl("javascript:alert(1)", "booking")).toBeNull();
  expect(
    validateBookingUrl("https://www.booking.com.evil.test/hotel", "booking"),
  ).toBeNull();
  expect(
    validateBookingUrl(
      "https://user:pass@www.booking.com/hotel/vn/test.html",
      "booking",
    ),
  ).toBeNull();
  expect(validateBookingUrl("https://www.booking.com/", "booking")).toBeNull();
  expect(validateBookingUrl(null, "hostelworld")).toBeNull();
  expect(
    validateBookingUrl(
      "https://www.agoda.com/dalat-family-hostel-h16373235/hotel/dalat-vn.html",
      "agoda",
    ),
  ).toBe("https://www.agoda.com/dalat-family-hostel-h16373235/hotel/dalat-vn.html");
  expect(
    validateBookingUrl("https://www.agoda.com.evil.test/hotel", "agoda"),
  ).toBeNull();
  expect(validateBookingUrl("https://www.agoda.com/", "agoda")).toBeNull();
});

test("footer links to the supplied social profiles", async ({ page }) => {
  await page.goto("/");
  const footerBrand = page.locator(".footer-brand");
  await expect(
    footerBrand.getByRole("link", { name: "Dalat Family Hostel — home" }),
  ).toHaveAttribute("href", "/");
  await expect(footerBrand).toContainText(
    "Come as a Traveller. Leave as Family.",
  );
  const socialNavigation = page.getByRole("navigation", {
    name: "Social media",
  });
  await expect(footerBrand.locator("p").first()).toHaveText(
    "Come as a Traveller. Leave as Family.",
  );
  await expect(
    socialNavigation.getByRole("link", { name: "Instagram" }).locator("svg"),
  ).toHaveCount(1);
  await expect(
    socialNavigation.getByRole("link", { name: "Facebook" }).locator("svg"),
  ).toHaveCount(1);
  await expect(
    socialNavigation.getByRole("link", { name: "TikTok" }).locator("svg"),
  ).toHaveCount(1);
  const footerNavigation = page.getByRole("navigation", {
    name: "Footer navigation",
  });
  await expect(
    footerNavigation.getByRole("link", { name: "Home", exact: true }),
  ).toHaveCount(0);
  await expect(footerNavigation.locator("ul ul")).toHaveCount(0);
  await expect(
    footerNavigation.getByRole("link", { name: "Stay", exact: true }),
  ).toBeVisible();
  await expect(
    footerNavigation.getByRole("link", { name: "Experiences", exact: true }),
  ).toBeVisible();
  await expect(
    footerNavigation.getByRole("link", { name: "Explore Da Lat", exact: true }),
  ).toBeVisible();
  for (const link of await page.locator("nav a").all()) {
    await expect(link).toHaveCSS("text-decoration-line", "none");
  }
  const footerContact = page.locator(".footer-contact");
  await expect(
    footerContact.getByRole("link", {
      name: "3/4 Ngô Quyền St, Ward 6, Dalat City, Vietnam",
    }),
  ).toBeVisible();
  await expect(
    footerContact.getByRole("link", { name: "(+84) 263 3608086" }),
  ).toHaveAttribute("href", "tel:+842633608086");
  await expect(
    footerContact.getByRole("link", {
      name: "dalatfamilyhostel@gmail.com",
    }),
  ).toHaveAttribute("href", "mailto:dalatfamilyhostel@gmail.com");
  await expect(
    socialNavigation.getByRole("link", { name: "Instagram" }),
  ).toHaveAttribute(
    "href",
    "https://www.instagram.com/dalatfamilyhostel_official/",
  );
  await expect(
    socialNavigation.getByRole("link", { name: "Facebook" }),
  ).toHaveAttribute("href", "https://www.facebook.com/dalatfamilyhostel/");
  await expect(
    socialNavigation.getByRole("link", { name: "TikTok" }),
  ).toHaveAttribute(
    "href",
    "https://www.tiktok.com/@dalat.family.host",
  );
  await expect(socialNavigation.getByRole("link").first()).toHaveAttribute(
    "target",
    "_blank",
  );
  await expect(socialNavigation.getByRole("link").first()).toHaveAttribute(
    "rel",
    "noreferrer",
  );
});

test("text links and booking options use the brand-red italic hover style", async ({
  page,
}) => {
  await page.goto("/");
  const socialLink = page
    .getByRole("navigation", { name: "Social media" })
    .getByRole("link", { name: "Instagram" });
  await socialLink.hover();
  await expect(socialLink).toHaveCSS("color", "rgb(167, 53, 50)");
  await expect(socialLink).toHaveCSS("font-style", "italic");
  await expect(socialLink).toHaveCSS("text-decoration-line", "none");

  await page.getByRole("button", { name: "Plan your stay" }).first().click();
  const agodaLink = page.getByRole("link", { name: "Book on Agoda" });
  await agodaLink.hover();
  await expect(agodaLink).toHaveCSS("background-color", "rgb(167, 53, 50)");
  await expect(agodaLink).toHaveCSS("color", "rgb(255, 253, 248)");
  await expect(agodaLink).toHaveCSS("font-style", "italic");
});
