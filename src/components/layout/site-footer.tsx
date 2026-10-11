import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div>
            <Image
              src="/dalatfamilyhostel.png"
              alt="Dalat Family Hostel logo"
              width={1308}
              height={1203}
              className="footer-logo"
            />
            <p>Come as a Traveller. Leave as Family.</p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="eyebrow">Around the house</p>
            <ul>
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Social media">
            <p className="eyebrow">Follow along</p>
            <ul>
              {site.socialLinks.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                    <span className="visually-hidden">
                      {" "}
                      (opens in a new tab)
                    </span>
                  </a>
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
            <p>Contact details awaiting verification.</p>
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
