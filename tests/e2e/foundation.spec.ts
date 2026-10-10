import { test, expect } from "@playwright/test";
import { validateBookingUrl } from "../../src/lib/booking";

test("home renders without browser errors and supports section navigation", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Come as a Traveller. Leave as Family.",
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
  expect(fonts.heading).toContain('Georgia');
  expect(fonts.heading).not.toBe(fonts.body);
  expect(errors).toEqual([]);
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
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    "hidden",
  );
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
});
