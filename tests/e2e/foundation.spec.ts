import { test, expect } from "@playwright/test";
import { validateBookingUrl } from "../../src/lib/booking";

test("home renders without browser errors and supports section navigation", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
    "href",
    "/dalatfamilyhostel.png",
  );
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
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(
    page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "The house" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await trigger.click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Your stay", exact: true })
    .click();
  await expect(page).toHaveURL(/#rooms$/);
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
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
  const socialNavigation = page.getByRole("navigation", {
    name: "Social media",
  });
  await expect(
    socialNavigation.getByRole("link", { name: /Instagram/ }),
  ).toHaveAttribute(
    "href",
    "https://www.instagram.com/dalatfamilyhostel_official/",
  );
  await expect(
    socialNavigation.getByRole("link", { name: /Facebook/ }),
  ).toHaveAttribute("href", "https://www.facebook.com/dalatfamilyhostel/");
  await expect(
    socialNavigation.getByRole("link", { name: /TikTok/ }),
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
    .getByRole("link", { name: /Instagram/ });
  await socialLink.hover();
  await expect(socialLink).toHaveCSS("color", "rgb(167, 53, 50)");
  await expect(socialLink).toHaveCSS("font-style", "italic");

  await page.getByRole("button", { name: "Plan your stay" }).first().click();
  const agodaLink = page.getByRole("link", { name: "Book on Agoda" });
  await agodaLink.hover();
  await expect(agodaLink).toHaveCSS("background-color", "rgb(167, 53, 50)");
  await expect(agodaLink).toHaveCSS("color", "rgb(255, 253, 248)");
  await expect(agodaLink).toHaveCSS("font-style", "italic");
});
