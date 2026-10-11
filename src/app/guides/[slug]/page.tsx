import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getTravelGuide, travelGuides } from "@/content/guides";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return travelGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getTravelGuide(slug);
  if (!guide) return {};

  return {
    title: { absolute: guide.seoTitle },
    description: guide.description,
    openGraph: {
      title: guide.seoTitle,
      description: guide.description,
      images: [guide.image],
    },
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getTravelGuide(slug);
  if (!guide) notFound();

  const relatedGuides = travelGuides
    .filter(
      (candidate) =>
        candidate.slug !== guide.slug &&
        candidate.topics.some((topic) => guide.topics.includes(topic)),
    )
    .slice(0, 3);
  const readNextLinks = guide.readNext.map((title) => ({
    title,
    href: getReadNextHref(title),
  }));

  return (
    <article className="guide-article">
      <header className="guide-article-hero">
        <Image
          src={guide.image}
          alt={guide.imageAlt}
          fill
          priority
          sizes="100vw"
          className="guide-article-hero-image"
        />
        <Container className="guide-article-hero-content">
          <nav aria-label="Breadcrumb" className="page-breadcrumbs">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/guides">Da Lat Travel Guides</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{guide.title}</span>
          </nav>
          <p className="eyebrow">{guide.category}</p>
          <h1>{guide.title}</h1>
          <p className="guide-article-intro">{guide.paragraphs[0]}</p>
          <span className="guide-article-reading">
            <Clock3 aria-hidden="true" size={15} />
            {guide.readingTime} min read
          </span>
          {guide.lastUpdated && (
            <time className="guide-article-updated" dateTime={guide.lastUpdated}>
              Updated{" "}
              {new Date(`${guide.lastUpdated}T00:00:00`).toLocaleDateString(
                "en-GB",
                { day: "numeric", month: "short", year: "numeric" },
              )}
            </time>
          )}
        </Container>
      </header>

      <Container className="guide-article-layout">
        <div className="guide-article-body">
          {guide.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph}>{renderGuideParagraph(paragraph)}</p>
          ))}
          <nav className="guide-article-read-next" aria-label="Read next">
            <strong>Read next</strong>
            <ul>
              {readNextLinks.map(({ title, href }) => (
                <li key={title}>
                  {href ? <Link href={href}>{title}</Link> : <span>{title}</span>}
                </li>
              ))}
            </ul>
          </nav>
          <p className="guide-article-note">
            Local conditions, opening information and transport details can
            change. Check current information before travelling.
          </p>
          <Link className="guide-article-back" href="/guides">
            <ArrowLeft aria-hidden="true" size={17} />
            Back to all Da Lat guides
          </Link>
        </div>

        <aside className="guide-article-related">
          <p className="eyebrow">Keep exploring</p>
          <h2>More field notes</h2>
          <ul>
            {relatedGuides.map((related) => (
              <li key={related.slug}>
                <Link href={`/guides/${related.slug}`}>
                  <span>{related.category}</span>
                  <strong>{related.title}</strong>
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </li>
            ))}
          </ul>
          <Link className="button button-secondary" href="/plan-your-stay">
            Plan your stay <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </aside>
      </Container>
    </article>
  );
}

function getReadNextHref(title: string) {
  const guide = travelGuides.find(
    (candidate) =>
      candidate.title.toLocaleLowerCase() === title.toLocaleLowerCase(),
  );
  if (guide) return `/guides/${guide.slug}`;

  const aliases: Record<string, string> = {
    "Best Time to Visit": "/guides/best-time-to-visit-da-lat",
    "Best Cafés": "/guides/best-cafes-in-da-lat",
    "Things to Do in Da Lat": "/guides/things-to-do-in-da-lat",
    "Where to Stay": "/guides/where-to-stay-in-da-lat",
    "Da Lat Nightlife": "/guides/da-lat-nightlife",
    "How to Get to Da Lat": "/plan-your-stay/how-to-get-here",
    "Extreme Canyoning": "/experiences/canyoning",
    "Waterfalls & Culture Tour": "/experiences/waterfalls-culture-tour",
    "Cloud Hunting": "/experiences/cloud-hunting",
    "Da Lat Day Tours": "/experiences/day-tours",
  };

  return aliases[title];
}

function renderGuideParagraph(paragraph: string) {
  return paragraph.split("\n").flatMap((line, lineIndex) => [
    ...(lineIndex ? [<br key={`break-${lineIndex}`} />] : []),
    ...line.split(/(\*\*.*?\*\*)/g).map((part, partIndex) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={`${lineIndex}-${partIndex}`}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    ),
  ]);
}
