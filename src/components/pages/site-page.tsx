import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BookingButton } from "@/components/booking/booking-provider";
import { Container } from "@/components/ui/container";
import { bookingDestinations, site } from "@/content/site";
import type { SitePageContent } from "@/content/pages";
import { siteNavigation } from "@/content/navigation";
import { validateBookingUrl } from "@/lib/booking";

function labelForPath(path: string): string {
  for (const item of siteNavigation) {
    if (item.href === path) return item.label;
    const child = item.children?.find((entry) => entry.href === path);
    if (child) return child.label;
  }

  return path;
}

export function SitePage({
  page,
  path,
}: {
  page: SitePageContent;
  path: string;
}) {
  const parentPath = path.split("/").slice(0, -1).join("/") || "/";

  return (
    <div className="site-page section-space">
      <Container>
        <nav className="page-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {path !== "/" && (
            <>
              <span aria-hidden="true">/</span>
              {parentPath === "/" ? (
                <span aria-current="page">{page.title}</span>
              ) : (
                <>
                  <Link href={parentPath}>{labelForPath(parentPath)}</Link>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page">{page.title}</span>
                </>
              )}
            </>
          )}
        </nav>
        <header className="site-page-header">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="lead">{page.intro}</p>
          {page.editorial?.secondaryIntro && (
            <p className="body-copy">{page.editorial.secondaryIntro}</p>
          )}
        </header>

        {page.editorial && (
          <article className="editorial-page">
            {page.editorial.sections.map((section) => (
              <section
                aria-labelledby={`${section.id}-heading`}
                className="editorial-section"
                id={section.id}
                key={section.id}
              >
                <h2 id={`${section.id}-heading`}>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items && (
                  <dl className="editorial-list">
                    {section.items.map((item) => (
                      <div key={item.label}>
                        <dt>
                          {item.href ? (
                            <Link href={item.href}>{item.label}</Link>
                          ) : (
                            item.label
                          )}
                        </dt>
                        <dd>{item.text}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {section.afterItems?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.links && (
                  <ul className="editorial-source-links">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noreferrer" : undefined}
                        >
                          {link.label}
                          {link.external && (
                            <span className="visually-hidden">
                              {" "}
                              (opens in a new tab)
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <div className="editorial-cta">
              <Link
                className="button button-primary"
                href={page.editorial.cta.href}
              >
                {page.editorial.cta.label}
                <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </div>
            <nav
              aria-label={`${page.title} related pages`}
              className="editorial-related"
            >
              <p className="eyebrow">Continue planning</p>
              <ul>
                {page.editorial.internalLinks.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                    >
                      {link.label}
                      {link.external && (
                        <span className="visually-hidden">
                          {" "}
                          (opens in a new tab)
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {page.editorial.sources && (
              <div className="editorial-sources">
                <p className="eyebrow">Further information</p>
                <ul>
                  {page.editorial.sources.map((source) => (
                    <li key={source.href}>
                      <a href={source.href} target="_blank" rel="noreferrer">
                        {source.label}
                        <span className="visually-hidden">
                          {" "}
                          (opens in a new tab)
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        )}

        {page.mapImage && (
          <figure className="site-page-map">
            <Image
              src="/dalat-family-hostel-map.png"
              alt="Illustrated neighborhood map marking Dalat Family Hostel and nearby Da Lat landmarks."
              width={1600}
              height={1200}
              sizes="(max-width: 767px) 100vw, 80vw"
            />
            <figcaption>
              Illustrative map supplied for Dalat Family Hostel. Use the
              linked address for directions.
            </figcaption>
          </figure>
        )}

        {page.contactOptions && (
          <div className="contact-options">
            <section aria-labelledby="contact-details-heading">
              <h2 id="contact-details-heading">Contact details</h2>
              <address className="contact-details">
                <p>
                  <strong>Address</strong>
                  <a
                    href={site.contact.addressUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {site.contact.address}
                    <span className="visually-hidden">
                      {" "}
                      (opens in a new tab)
                    </span>
                  </a>
                </p>
                <p>
                  <strong>Tel</strong>
                  <a href={site.contact.telephoneUrl}>
                    {site.contact.telephone}
                  </a>
                </p>
                <p>
                  <strong>Email</strong>
                  <a href={site.contact.emailUrl}>{site.contact.email}</a>
                </p>
              </address>
            </section>
            <section aria-labelledby="booking-options-heading">
              <h2 id="booking-options-heading">Booking platforms</h2>
              <ul>
                {(
                  [
                    ["Hostelworld", "hostelworld"],
                    ["Booking.com", "booking"],
                    ["Agoda", "agoda"],
                  ] as const
                ).map(([label, provider]) => {
                  const href = validateBookingUrl(
                    bookingDestinations[provider],
                    provider,
                  );
                  return (
                    href && (
                      <li key={provider}>
                        <a href={href} target="_blank" rel="noreferrer">
                          {label}
                          <span className="visually-hidden">
                            {" "}
                            (opens in a new tab)
                          </span>
                        </a>
                      </li>
                    )
                  );
                })}
              </ul>
              <BookingButton>Open booking options</BookingButton>
            </section>
            <section aria-labelledby="social-options-heading">
              <h2 id="social-options-heading">Social profiles</h2>
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
            </section>
          </div>
        )}

        {page.note && (
          <aside className="site-page-note">
            <h2>Information being confirmed</h2>
            <p>{page.note}</p>
          </aside>
        )}
      </Container>
    </div>
  );
}
