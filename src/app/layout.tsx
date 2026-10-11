import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource/be-vietnam-pro/400.css";
import "@fontsource/be-vietnam-pro/600.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BookingProvider } from "@/components/booking/booking-provider";
import { bookingDestinations, site } from "@/content/site";
import { validateBookingUrl } from "@/lib/booking";
import "./globals.css";

const heading = localFont({
  src: "../../fonts/story-script.ttf",
  variable: "--font-heading",
  display: "swap",
  weight: "400",
});
export const metadata: Metadata = {
  title: {
    default: "Dalat Family Hostel | Come as a Traveller. Leave as Family.",
    template: "%s | Dalat Family Hostel",
  },
  description:
    "Dalat Family Hostel is a social backpacker hostel in Da Lat, Vietnam. Come as a Traveller. Leave as Family.",
  icons: {
    icon: "/dalatfamilyhostel.png",
  },
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
    locale: "en_US",
  },
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={heading.variable}>
        <BookingProvider
          hostelworldUrl={validateBookingUrl(
            bookingDestinations.hostelworld,
            "hostelworld",
          )}
          bookingUrl={validateBookingUrl(
            bookingDestinations.booking,
            "booking",
          )}
          agodaUrl={validateBookingUrl(bookingDestinations.agoda, "agoda")}
          messageUrl={bookingDestinations.message}
        >
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <SiteHeader />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </BookingProvider>
      </body>
    </html>
  );
}
