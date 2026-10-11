import Image from "next/image";
import Link from "next/link";
import { Music2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
import { siteNavigation } from "@/content/navigation";

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.2v3h2.8v8z"
        />
      </svg>
    );
  }

  return <Music2 aria-hidden="true" size={22} strokeWidth={2} />;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" aria-label={`${site.name} — home`}>
              <Image
                src="/dalatfamilyhostel.png"
                alt=""
                width={1308}
                height={1203}
                className="footer-logo"
              />
            </Link>
            <p>{site.tagline}</p>
            <nav aria-label="Social media">
              <p className="eyebrow">Follow along</p>
              <ul className="footer-social-links">
                {site.socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <SocialIcon label={social.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <nav aria-label="Footer navigation">
            <p className="eyebrow">Around the house</p>
            <ul>
              {siteNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-location">
            <p className="eyebrow">A little hello from</p>
            <p className="footer-city">
              Da Lat,
              <br />
              Vietnam.
            </p>
            <address className="footer-contact">
              <a
                href={site.contact.addressUrl}
                target="_blank"
                rel="noreferrer"
              >
                {site.contact.address}
              </a>
              <a href={site.contact.telephoneUrl}>
                {site.contact.telephone}
              </a>
              <a href={site.contact.emailUrl}>{site.contact.email}</a>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>A family house. A travellers’ journal.</span>
          <span>Dalat Family Hostel | All Rights Reserved © {new Date().getFullYear()}</span>
          <Link href="#main-content">Back to top ↑</Link>
        </div>
      </Container>
    </footer>
  );
}
