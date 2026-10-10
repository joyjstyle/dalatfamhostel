export type BookingProvider = "hostelworld" | "booking";
const hosts: Record<BookingProvider, readonly string[]> = {
  hostelworld: ["hostelworld.com", "www.hostelworld.com"],
  booking: ["booking.com", "www.booking.com"],
};
/** Structural guard only. Owner approval and live property checks are also required. */
export function validateBookingUrl(
  value: string | null,
  provider: BookingProvider,
): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      url.port ||
      !hosts[provider].includes(url.hostname) ||
      url.pathname === "/"
    )
      return null;
    return url.href;
  } catch {
    return null;
  }
}
