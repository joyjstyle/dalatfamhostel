import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MobileNavigation } from "./mobile-navigation";
import { BookingButton } from "@/components/booking/booking-provider";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link href="/" aria-label={`${site.name} — home`} className="wordmark">
          <Image
            src="/dalatfamilyhostel.png"
            alt=""
            width={1308}
            height={1203}
            className="wordmark-logo"
          />
        </Link>
        <nav aria-label="Main navigation" className="desktop-navigation">
          <ul>
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <BookingButton className="header-booking">
            Plan your stay
          </BookingButton>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
