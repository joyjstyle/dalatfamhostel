import Link from "next/link";
import { Container } from "@/components/ui/container";
import { HouseMark } from "@/components/home/house-mark";
import { site } from "@/content/site";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div>
            <HouseMark className="footer-house" />
            <p className="footer-brand">Dalat Family Hostel</p>
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
          <span>Design preview · not accepting reservations</span>
          <Link href="#main-content">Back to top ↑</Link>
        </div>
      </Container>
    </footer>
  );
}
