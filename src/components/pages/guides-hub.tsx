import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BusFront,
  CalendarDays,
  Compass,
  Coffee,
  Footprints,
  Map,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  featuredGuideSlugs,
  getTravelGuide,
  getTravelGuidePath,
  guideTopics,
  popularGuideSlugs,
  travelGuides,
  type TravelGuide,
  type TravelGuideTopic,
} from "@/content/guides";
import { GuideCard } from "./guide-card";

export const guidesMetadata: Metadata = {
  title: {
    absolute: "Da Lat Travel Guides | Plan Your Vietnam Highland Adventure",
  },
  description:
    "Practical Da Lat travel guides for backpackers: things to do, cafés, nightlife, waterfalls, budgets, itineraries, weather and getting here.",
};

const topicIcons = {
  compass: Compass,
  map: Map,
  coffee: Coffee,
  calendar: CalendarDays,
  bus: BusFront,
  footprints: Footprints,
} as const;

const featuredGuides = featuredGuideSlugs.map(
  (slug) => getTravelGuide(slug)!,
);
const popularGuides = popularGuideSlugs.map((slug) => getTravelGuide(slug)!);
const featuredAndPopularSlugs = new Set<string>([
  ...featuredGuideSlugs,
  ...popularGuideSlugs,
]);
const additionalGuides = travelGuides.filter(
  (guide) => !featuredAndPopularSlugs.has(guide.slug),
);

function jsonLdForGuides() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Da Lat Travel Guides",
    description: guidesMetadata.description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: travelGuides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "WebPage",
          name: guide.title,
          url: getTravelGuidePath(guide),
        },
      })),
    },
  };
}

function filterGuides(
  query: string,
  topic: TravelGuideTopic | undefined,
): TravelGuide[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  return travelGuides.filter((guide) => {
    const matchesTopic = !topic || guide.topics.includes(topic);
    const searchable = [
      guide.title,
      guide.category,
      guide.description,
      ...guide.topics,
    ]
      .join(" ")
      .toLocaleLowerCase();
    return (
      matchesTopic &&
      (!normalizedQuery || searchable.includes(normalizedQuery))
    );
  });
}

function topicFromQuery(topic: string | undefined) {
  return guideTopics.find((guideTopic) => guideTopic.slug === topic);
}

type GuidesHubProps = {
  searchParams: Promise<{ q?: string | string[]; topic?: string | string[] }>;
};

export async function GuidesHub({ searchParams }: GuidesHubProps) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";
  const requestedTopic =
    typeof params.topic === "string" ? params.topic : undefined;
  const selectedTopic = topicFromQuery(requestedTopic);
  const hasFilter = Boolean(query.trim() || selectedTopic);
  const filteredGuides = filterGuides(query, selectedTopic?.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdForGuides()).replace(/</g, "\\u003c"),
        }}
      />
      <section className="guides-hub-hero" aria-labelledby="guides-hub-title">
        <Image
          src="/scenery.JPG"
          alt=""
          fill
          priority
          sizes="100vw"
          className="guides-hub-hero-image"
        />
        <Container className="guides-hub-hero-inner">
          <div className="guides-hub-hero-copy">
            <p className="eyebrow">Travel smarter. Experience more.</p>
            <h1 id="guides-hub-title">Da Lat Travel Guides</h1>
            <p className="guides-hub-intro">
              Da Lat is the kind of place that rewards a little planning—and
              leaves plenty of room for the unexpected. Explore practical guides
              for things to do, food, nightlife, itineraries, weather, transport
              and travelling Da Lat on a budget.
            </p>
            <div className="guides-hub-actions">
              <Link className="button button-primary" href="#all-guides">
                Explore all guides{" "}
                <ArrowDownRight aria-hidden="true" size={18} />
              </Link>
              <Link className="guides-hub-secondary-link" href="/plan-your-stay">
                Plan your stay <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
            <form
              className="guide-search"
              action="/guides"
              method="get"
              role="search"
            >
              <label className="visually-hidden" htmlFor="guide-search-input">
                Search Da Lat guides
              </label>
              <input
                id="guide-search-input"
                name="q"
                type="search"
                placeholder="Search Da Lat guides"
                defaultValue={query}
              />
              {selectedTopic && (
                <input name="topic" type="hidden" value={selectedTopic.slug} />
              )}
              <button className="button button-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </Container>
      </section>

      <Container className="guides-hub-content">
        {hasFilter && (
          <section
            className="guide-search-results"
            id="guide-results"
            aria-labelledby="guide-results-title"
          >
            <div className="guide-results-heading">
              <div>
                <p className="eyebrow">
                  {selectedTopic?.title ?? "Search the journal"}
                </p>
                <h2 id="guide-results-title">
                  {query ? `Guides for “${query}”` : selectedTopic?.title}
                </h2>
              </div>
              <Link href="/guides#all-guides">View all guides</Link>
            </div>
            {filteredGuides.length ? (
              <div className="guide-results-grid">
                {filteredGuides.map((guide) => (
                  <GuideCard guide={guide} key={guide.slug} />
                ))}
              </div>
            ) : (
              <p className="guide-no-results" role="status">
                No guides match that search yet. Try “weather”, “waterfalls” or
                “bus”.
              </p>
            )}
          </section>
        )}

        <section
          className="featured-guides-section"
          id="featured-guides"
          aria-labelledby="featured-guides-title"
        >
          <div className="guides-section-heading">
            <div>
              <p className="eyebrow">A good place to begin</p>
              <h2 id="featured-guides-title">Field notes for Da Lat</h2>
            </div>
            <p>
              First visit or just passing through? Start with a few useful
              ideas, then leave a little room to wander.
            </p>
          </div>
          <div className="featured-guides-grid">
            <FeaturedGuideCard guide={featuredGuides[0]} lead />
            <div className="featured-guides-supporting">
              {featuredGuides.slice(1).map((guide) => (
                <FeaturedGuideCard guide={guide} key={guide.slug} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="guide-topics-section"
          aria-labelledby="guide-topics-title"
        >
          <div className="guides-section-heading">
            <div>
              <p className="eyebrow">Follow your curiosity</p>
              <h2 id="guide-topics-title">Browse by topic</h2>
            </div>
            <p>Pick a thread and follow it to the guides that fit your trip.</p>
          </div>
          <ul className="guide-topic-grid">
            {guideTopics.map((topic, index) => {
              const Icon = topicIcons[topic.icon];
              return (
                <li key={topic.slug}>
                  <Link
                    className="guide-topic-card"
                    href={`/guides?topic=${topic.slug}#guide-results`}
                  >
                    <span className="guide-topic-number">0{index + 1}</span>
                    <Icon aria-hidden="true" size={25} strokeWidth={1.6} />
                    <strong>{topic.title}</strong>
                    <span>{topic.description}</span>
                    <ArrowRight
                      className="guide-topic-arrow"
                      aria-hidden="true"
                      size={18}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          className="popular-guides-section"
          aria-labelledby="popular-guides-title"
        >
          <div className="guides-section-heading">
            <div>
              <p className="eyebrow">Bookmark for later</p>
              <h2 id="popular-guides-title">Popular Da Lat guides</h2>
            </div>
            <p>
              Practical notes for planning the days, getting around and
              deciding what matters most to you.
            </p>
          </div>
          <ul className="popular-guide-list">
            {popularGuides.map((guide, index) => (
              <li key={guide.slug}>
                <GuideCard guide={guide} index={index + 1} />
              </li>
            ))}
          </ul>
        </section>

        <section
          className="additional-guides-section"
          id="all-guides"
          aria-labelledby="additional-guides-title"
        >
          <div className="guides-section-heading">
            <div>
              <p className="eyebrow">Keep planning your route</p>
              <h2 id="additional-guides-title">More Da Lat field notes</h2>
            </div>
            <p>
              Practical reads for journeys to Da Lat, getting around and
              finding your own pace in the highlands.
            </p>
          </div>
          <ul className="popular-guide-list">
            {additionalGuides.map((guide, index) => (
              <li key={guide.slug}>
                <GuideCard guide={guide} index={index + 1} />
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <section className="guides-hostel-cta" aria-labelledby="guides-cta-title">
        <Image
          src="/activity/family-dinner-2.png"
          alt="Travellers gathered around a shared dinner table"
          fill
          sizes="(max-width: 767px) 100vw, 90vw"
          className="guides-hostel-cta-image"
        />
        <Container className="guides-hostel-cta-inner">
          <p className="eyebrow">A place to begin together</p>
          <h2 id="guides-cta-title">Your Da Lat adventure starts here.</h2>
          <p>
            Stay with the family, meet fellow travellers and let our team help
            you turn a good Da Lat trip into a great one.
          </p>
          <Link className="button button-primary" href="/stay">
            Stay at Dalat Family Hostel{" "}
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </Container>
      </section>
    </>
  );
}

function FeaturedGuideCard({
  guide,
  lead = false,
}: {
  guide: TravelGuide;
  lead?: boolean;
}) {
  return (
    <article
      className={`featured-guide-card${lead ? " featured-guide-card-lead" : ""}`}
    >
      <Link
        className="featured-guide-link"
        href={getTravelGuidePath(guide)}
        aria-label={`${guide.title}: ${guide.description}`}
      >
        <div className="featured-guide-image-wrap">
          <Image
            src={guide.image}
            alt={guide.imageAlt}
            fill
            sizes={
              lead
                ? "(max-width: 767px) 100vw, 60vw"
                : "(max-width: 767px) 100vw, 32vw"
            }
            className="featured-guide-image"
          />
          <span className="featured-guide-category">{guide.category}</span>
        </div>
        <div className="featured-guide-copy">
          <h3>{guide.title}</h3>
          <p>{guide.description}</p>
          <span className="featured-guide-meta">
            {guide.readingTime} min read <span aria-hidden="true">·</span>{" "}
            Read the guide <ArrowRight aria-hidden="true" size={16} />
          </span>
        </div>
      </Link>
    </article>
  );
}
