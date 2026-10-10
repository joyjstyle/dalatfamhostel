import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BookingProvider } from "@/components/booking/booking-provider";
import { bookingDestinations, site } from "@/content/site";
import { validateBookingUrl } from "@/lib/booking";
import "./globals.css";

const heading = localFont({
  src: "../../fonts/fraunces-latin.woff2",
  variable: "--font-heading",
  display: "swap",
  weight: "100 900",
});
const body = localFont({
  src: "../../fonts/dm-sans-latin.woff2",
  variable: "--font-body",
  display: "swap",
  weight: "100 1000",
});
export const metadata: Metadata = {
  title: {
    default: "Dalat Family Hostel — Come as a Traveller. Leave as Family.",
    template: "%s | Dalat Family Hostel",
  },
  description:
    "Dalat Family Hostel is a social backpacker hostel in Da Lat, Vietnam. Come as a Traveller. Leave as Family.",
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
      <body className={`${heading.variable} ${body.variable}`}>
        <BookingProvider
          hostelworldUrl={validateBookingUrl(
            bookingDestinations.hostelworld,
            "hostelworld",
          )}
          bookingUrl={validateBookingUrl(
            bookingDestinations.booking,
            "booking",
          )}
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
