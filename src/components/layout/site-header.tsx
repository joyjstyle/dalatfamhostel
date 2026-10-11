import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MobileNavigation } from "./mobile-navigation";
import { LanguageSelector } from "./language-selector";
import { BookingButton } from "@/components/booking/booking-provider";
import { site } from "@/content/site";
import { siteNavigation } from "@/content/navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link href="/" aria-label={`${site.name} — home`} className="wordmark">
          <Image
            src="/dalatfamilyhostel.png"
            alt="dalatfamilyhostellogo"
            width={1308}
            height={1203}
            className="wordmark-logo"
          />
        </Link>
        <nav aria-label="Main navigation" className="desktop-navigation">
          <ul>
            {siteNavigation.map((item) => (
              <li key={item.href} className="desktop-navigation-item">
                <Link
                  href={item.href}
                  className={item.children ? "has-submenu" : undefined}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="desktop-navigation-submenu">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <LanguageSelector />
          <BookingButton className="header-booking">
            Plan your stay
          </BookingButton>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
