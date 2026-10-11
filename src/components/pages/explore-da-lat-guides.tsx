import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  CarTaxiFront,
  Coffee,
  Compass,
  Footprints,
  Landmark,
  MapPinned,
  Sunrise,
  Trees,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export const thingsToDoMetadata: Metadata = {
  title: {
    absolute: "Best Things to Do in Da Lat | Waterfalls, Coffee & Adventure",
  },
  description:
    "Discover the best things to do in Da Lat, Vietnam—from waterfalls and canyoning to coffee farms, historic sights, cloud hunting and local food.",
};

export const gettingAroundMetadata: Metadata = {
  title: {
    absolute: "Getting Around Da Lat | Walking, Taxis, Scooters & Day Tours",
  },
  description:
    "Learn how to get around Da Lat by foot, taxi, ride-hailing, scooter, private car and organised tours—with practical travel and safety tips.",
};

const breadcrumbJsonLd = (title: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Explore Da Lat",
      item: "/explore-da-lat",
    },
    { "@type": "ListItem", position: 3, name: title, item: path },
  ],
});

function Breadcrumbs({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(title, path)).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <nav className="page-breadcrumbs explore-guide-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/explore-da-lat">Explore Da Lat</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{title}</span>
      </nav>
    </>
  );
}

const exploreImages = {
  city: "/images/explore-da-lat/dalat-city-panorama.jpg",
  falls: "/images/explore-da-lat/datanla-waterfall.jpg",
  lake: "/images/explore-da-lat/xuan-huong-lake.jpg",
  station: "/images/explore-da-lat/train-station.jpg",
  coffee: "/images/explore-da-lat/coffee-farm.jpg",
  road: "/images/explore-da-lat/dalat-road-sign.jpg",
  market: "/images/explore-da-lat/dalat-market.jpg",
} as const;

const photoCredits = {
  city: {
    title: "Da Lat - Viet Nam",
    author: "Tuong Lam Photos",
    source: "https://commons.wikimedia.org/wiki/File:Da_Lat_-_Viet_Nam.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  falls: {
    title: "Datanla Waterfall 1",
    author: "Du Tran",
    source: "https://commons.wikimedia.org/wiki/File:Datanla_Waterfall_1.jpg",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  lake: {
    title: "Da Lat - Xuan Huong Lake",
    author: "P. Hughes",
    source:
      "https://commons.wikimedia.org/wiki/File:Da_Lat_-_Xuan_Huong_Lake.jpg",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  },
  station: {
    title: "Da Lat - Train Station",
    author: "P. Hughes",
    source:
      "https://commons.wikimedia.org/wiki/File:Da_Lat_-_Train_Station.jpg",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  },
  coffee: {
    title: "Min Mountain Coffee farm",
    author: "Thichcoffee",
    source:
      "https://commons.wikimedia.org/wiki/File:Min_Mountain_Coffee_farm.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  road: {
    title:
      "Road sign, Tran Hung Dao & Ho Tung Mau & 3 Thang 4 Street, Da Lat",
    author: "Diane Selwyn",
    source:
      "https://commons.wikimedia.org/wiki/File:Road_sign,_Tran_Hung_Dao_%26_Ho_Tung_Mau_%26_3_Thang_4_Street,_Da_Lat.JPG",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  market: {
    title: "Dalat market, Vietnam",
    author: "Roy Kim",
    source: "https://commons.wikimedia.org/wiki/File:Dalat_market,_Vietnam.jpg",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
} as const;

type ExploreImageId = keyof typeof photoCredits;

function PhotoCredits({ images }: { images: readonly ExploreImageId[] }) {
  const uniqueImages = [...new Set(images)];

  return (
    <details className="explore-photo-credits">
      <summary>Image credits and licences</summary>
      <ul>
        {uniqueImages.map((id) => {
          const credit = photoCredits[id];
          return (
            <li key={id}>
              <a href={credit.source} target="_blank" rel="noreferrer">
                {credit.title}
              </a>{" "}
              by {credit.author} ·{" "}
              <a href={credit.licenseUrl} target="_blank" rel="noreferrer">
                {credit.license}
              </a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}

const experienceCategories = [
  {
    label: "Waterfalls & adventure",
    title: "Follow the water",
    description:
      "Find forest waterfalls and choose a guided canyoning trip if you want a more hands-on day outdoors.",
    href: "/experiences/waterfalls-culture-tour",
    image: exploreImages.falls,
    imageAlt: "Water flowing over the rocks at Datanla Falls in Da Lat",
    Icon: Trees,
  },
  {
    label: "Culture & creative corners",
    title: "Look closer at the city",
    description:
      "Pair a walk through Da Lat with its distinctive architecture, railway history and colourful places of worship.",
    href: "/explore-da-lat",
    image: exploreImages.station,
    imageAlt: "The historic railway station in Da Lat",
    Icon: Landmark,
  },
  {
    label: "Coffee & local flavours",
    title: "Take the scenic coffee break",
    description:
      "Settle into a local café, look out for highland-grown coffee and make time for the flavours of the market.",
    href: "/guides?topic=food-nightlife#guide-results",
    image: exploreImages.coffee,
    imageAlt: "Coffee cherries growing at a highland coffee farm in Da Lat",
    Icon: Coffee,
  },
  {
    label: "Sunrise & cloud hunting",
    title: "Meet the morning mist",
    description:
      "Set off early for the hills, take a warm layer and enjoy the sunrise without treating the forecast as a promise.",
    href: "/experiences/cloud-hunting",
    image: exploreImages.city,
    imageAlt: "Da Lat rooftops spread along a pine-covered ridge at dusk",
    Icon: Sunrise,
  },
] as const;

const hostelExperiences = [
  {
    title: "Family Dinner",
    href: "/experiences/family-dinner",
    image: exploreImages.market,
    imageAlt: "Visitors moving through Da Lat's central market in the evening",
  },
  {
    title: "Extreme Canyoning",
    href: "/experiences/canyoning",
    image: exploreImages.falls,
    imageAlt: "Water cascading down the rock face at Datanla Falls",
  },
  {
    title: "Waterfalls & Culture Tour",
    href: "/experiences/waterfalls-culture-tour",
    image: exploreImages.station,
    imageAlt: "The distinctive yellow-roofed Da Lat railway station",
  },
  {
    title: "Cloud Hunting",
    href: "/experiences/cloud-hunting",
    image: exploreImages.city,
    imageAlt: "Da Lat rooftops and pine-covered hills at dusk",
  },
] as const;

export function ThingsToDoPage() {
  return (
    <article className="explore-guide-page things-to-do-page">
      <section className="explore-guide-hero" aria-labelledby="things-to-do-title">
        <Image
          src={exploreImages.falls}
          alt="Water flowing down the rock face at Datanla Falls near Da Lat"
          fill
          priority
          sizes="100vw"
          className="explore-guide-hero-image"
        />
        <Container className="explore-guide-hero-content">
          <Breadcrumbs
            title="Things to Do in Da Lat"
            path="/explore-da-lat/things-to-do"
          />
          <p className="eyebrow">Explore Da Lat</p>
          <h1 id="things-to-do-title">Things to Do in Da Lat</h1>
          <p className="explore-guide-hero-intro">
            From misty mornings and mountain views to waterfall adventures,
            local coffee and unforgettable hostel stories, Da Lat is made for
            days that do not feel planned to perfection.
          </p>
          <div className="explore-guide-actions">
            <Link className="button button-primary" href="/experiences">
              Explore Experiences <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button explore-guide-hero-secondary" href="/plan-your-stay">
              Plan Your Stay <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </Container>
      </section>

      <Container className="explore-guide-main">
        <section className="explore-editorial-intro" aria-labelledby="find-your-day">
          <div className="explore-editorial-copy">
            <p className="eyebrow">A little of everything</p>
            <h2 id="find-your-day">Find your kind of Da Lat day</h2>
            <p>
              Da Lat is made for travellers who like a little variety. One day
              you can be sipping coffee above the pine trees; the next, you can
              be rappelling beside a waterfall, riding a heritage train or
              waking up before sunrise to watch clouds roll across the valleys.
            </p>
            <p>
              Start in the city with a walk around Xuan Huong Lake, a visit to
              the historic Da Lat Railway Station and a wander through the local
              market. Then head further out for waterfalls, flower farms,
              mountain views, pagodas and countryside cafés.
            </p>
          </div>
          <figure className="explore-editorial-image">
            <Image
              src={exploreImages.city}
              alt="Da Lat rooftops spread along a pine-covered ridge at dusk"
              fill
              sizes="(max-width: 767px) 100vw, 48vw"
            />
            <figcaption>One day outside can change the pace of your trip.</figcaption>
          </figure>
        </section>

        <section className="explore-category-section" aria-labelledby="day-categories">
          <div className="explore-section-heading">
            <div>
              <p className="eyebrow">Follow what feels right</p>
              <h2 id="day-categories">Choose a thread to follow</h2>
            </div>
            <p>
              Pick a mood for the day. You can always leave the rest open.
            </p>
          </div>
          <ul className="explore-category-grid">
            {experienceCategories.map(({ Icon, ...category }) => (
              <li key={category.label}>
                <Link className="explore-category-card" href={category.href}>
                  <div className="explore-category-image">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                    />
                  </div>
                  <div className="explore-category-copy">
                    <span className="explore-category-label">
                      <Icon aria-hidden="true" size={17} />
                      {category.label}
                    </span>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    <span className="explore-category-link">
                      Explore this idea <ArrowRight aria-hidden="true" size={17} />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <section className="family-experiences" aria-labelledby="family-experiences-title">
        <Container>
          <div className="explore-section-heading explore-section-heading-inverse">
            <div>
              <p className="eyebrow">Good days are better shared</p>
              <h2 id="family-experiences-title">Do Da Lat with the family</h2>
            </div>
            <Link className="family-experiences-all" href="/experiences">
              See all experiences <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <ul className="family-experiences-grid">
            {hostelExperiences.map((experience) => (
              <li key={experience.href}>
                <Link href={experience.href} className="family-experience-card">
                  <span className="family-experience-image">
                    <Image
                      src={experience.image}
                      alt={experience.imageAlt}
                      fill
                      sizes="(max-width: 767px) 82vw, 25vw"
                    />
                  </span>
                  <span className="family-experience-title">
                    {experience.title}
                    <ArrowRight aria-hidden="true" size={18} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="explore-flexible-cta" aria-labelledby="flexible-cta-title">
        <Image
          src={exploreImages.market}
          alt="Visitors exploring Da Lat's central market in the evening"
          fill
          sizes="100vw"
          className="explore-flexible-image"
        />
        <Container className="explore-flexible-content">
          <p className="eyebrow">Leave room for the unexpected</p>
          <h2 id="flexible-cta-title">You do not need to do everything.</h2>
          <p>
            Pick one big adventure, follow your curiosity and leave room for the
            coffee stop or viewpoint you did not plan for.
          </p>
          <Link className="button button-primary" href="/plan-your-stay">
            Plan your Da Lat stay <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </Container>
      </section>

      <Container className="explore-guide-internal-links">
        <p className="eyebrow">Keep following your curiosity</p>
        <nav aria-label="Related Da Lat experiences">
          <Link href="/experiences/family-dinner">
            Family Dinner <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link href="/experiences/canyoning">
            Extreme Canyoning <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link href="/experiences/waterfalls-culture-tour">
            Waterfalls & Culture Tour <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link href="/experiences/cloud-hunting">
            Cloud Hunting <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link href="/experiences/day-tours">
            Da Lat Day Tours <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link href="/explore-da-lat/getting-around">
            Getting Around Da Lat <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </nav>
      </Container>
      <Container>
        <PhotoCredits
          images={["city", "falls", "station", "coffee", "market"]}
        />
      </Container>
    </article>
  );
}

const transportModes = [
  {
    title: "On foot",
    description: "Best for the lake, cafés and central streets",
    Icon: Footprints,
  },
  {
    title: "Taxi or ride-hailing",
    description: "Easiest for short trips and evenings",
    Icon: CarTaxiFront,
  },
  {
    title: "Scooter",
    description: "Best for confident, licensed riders",
    Icon: Bike,
  },
  {
    title: "Tours & private cars",
    description: "Best for waterfalls and the countryside",
    Icon: MapPinned,
  },
] as const;

const gettingAroundOptions = [
  {
    title: "Walk the centre",
    description:
      "Central Da Lat is best explored slowly. Xuan Huong Lake, the market, cafés and many restaurants are within reach on foot. Bring comfortable shoes: the city is scenic, but not flat.",
    note: "Good to know: Give yourself time for hills and uneven streets.",
    image: exploreImages.lake,
    imageAlt: "A motorbike passes Xuan Huong Lake in central Da Lat",
    Icon: Footprints,
  },
  {
    title: "Take a taxi or ride-hailing car",
    description:
      "Taxis and ride-hailing services are the easiest choice for short journeys, evenings and travellers who do not want to drive. They are also a sensible option when the weather turns wet.",
    note: "Good to know: Check your drop-off point before you set off.",
    image: exploreImages.city,
    imageAlt: "Da Lat buildings spread across the highland city",
    Icon: CarTaxiFront,
  },
  {
    title: "Rent a scooter—only if you are confident",
    description:
      "A scooter gives you flexibility for cafés, viewpoints and countryside stops. But Da Lat’s steep roads, fog and rain can make riding challenging. Only ride if you are properly licensed, experienced and insured, and always wear a helmet.",
    note: "Good to know: Do not use a scooter to learn on unfamiliar mountain roads.",
    image: exploreImages.road,
    imageAlt: "A road sign at a Da Lat intersection points toward local destinations",
    Icon: Bike,
  },
  {
    title: "Join a day tour or book a private car",
    description:
      "For waterfalls, culture, cloud hunting and longer countryside routes, a guided tour or private car lets you enjoy the view without worrying about directions, weather or parking. It is also an easy way to meet fellow travellers.",
    note: "Good to know: Confirm the route, pickup and total cost before booking.",
    image: exploreImages.falls,
    imageAlt: "Water cascading through the forest at Datanla Falls near Da Lat",
    Icon: Compass,
  },
] as const;

const localTips = [
  "Save your accommodation address in Vietnamese and English.",
  "Build extra time into journeys after dark or in wet weather.",
  "Agree transport details before longer trips.",
  "Never rush a mountain road to make the next stop.",
  "Ask the hostel team for current transport advice and trusted local options.",
];

export function GettingAroundPage() {
  return (
    <article className="explore-guide-page getting-around-page">
      <section className="explore-guide-hero explore-guide-hero-practical" aria-labelledby="getting-around-title">
        <Image
          src={exploreImages.road}
          alt="A road sign at an intersection in Da Lat"
          fill
          priority
          sizes="100vw"
          className="explore-guide-hero-image"
        />
        <Container className="explore-guide-hero-content">
          <Breadcrumbs
            title="Getting Around Da Lat"
            path="/explore-da-lat/getting-around"
          />
          <p className="eyebrow">Explore Da Lat</p>
          <h1 id="getting-around-title">Getting Around Da Lat</h1>
          <p className="explore-guide-hero-intro">
            Walk the centre, take a local ride, book a day tour or head into the
            hills. Here is how to move around Da Lat with confidence.
          </p>
          <div className="explore-guide-actions">
            <Link className="button button-primary" href="/plan-your-stay">
              Plan Your Stay <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link className="button explore-guide-hero-secondary" href="/experiences/day-tours">
              Explore Day Tours <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </Container>
      </section>

      <section className="transport-quick-strip" aria-label="Quick transport guide">
        <Container>
          <ul>
            {transportModes.map(({ Icon, ...mode }) => (
              <li key={mode.title}>
                <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
                <span>
                  <strong>{mode.title}</strong>
                  <span>{mode.description}</span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="explore-guide-main getting-around-main">
        <section className="getting-around-intro">
          <p className="eyebrow">Choose the pace that suits you</p>
          <h2>Your options for getting around</h2>
          <p>
            Da Lat is easy to explore once you choose the right way to move. The
            central area is great for wandering on foot, while waterfalls,
            farms, viewpoints and mountain roads are best reached by taxi,
            private car, scooter or an organised day tour.
          </p>
          <p>
            The key is not trying to fit too much into one day. Da Lat’s roads
            are beautiful, but they are also hilly, winding and sometimes
            misty—especially after rain or later in the day.
          </p>
        </section>

        <div className="transport-option-list">
          {gettingAroundOptions.map(({ Icon, ...option }, index) => (
            <section className="transport-option" key={option.title}>
              <div className="transport-option-image">
                <Image
                  src={option.image}
                  alt={option.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 46vw"
                />
              </div>
              <div className="transport-option-copy">
                <p className="eyebrow">
                  <Icon aria-hidden="true" size={17} />
                  Option 0{index + 1}
                </p>
                <h2>{option.title}</h2>
                <p>{option.description}</p>
                <p className="transport-good-to-know">
                  <strong>Good to know</strong>
                  {option.note.replace("Good to know: ", "")}
                </p>
              </div>
            </section>
          ))}
        </div>

        <section className="local-tips-card" aria-labelledby="local-tips-title">
          <div className="local-tips-icon">
            <MapPinned aria-hidden="true" size={30} strokeWidth={1.6} />
          </div>
          <div>
            <p className="eyebrow">A note from the family</p>
            <h2 id="local-tips-title">A few smart local tips</h2>
            <ul>
              {localTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>
      </Container>

      <section className="getting-around-cta" aria-labelledby="getting-around-cta-title">
        <Container className="getting-around-cta-inner">
          <div>
            <p className="eyebrow">We are happy to help</p>
            <h2 id="getting-around-cta-title">
              Not sure how to get there? Ask the family.
            </h2>
            <p>
              Our team can help you choose the easiest way to reach your next
              waterfall, café, day tour or onward bus.
            </p>
          </div>
          <Link className="button button-primary" href={site.contact.emailUrl}>
            Talk to the hostel team <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </Container>
      </section>

      <Container className="explore-guide-internal-links">
        <p className="eyebrow">Keep exploring</p>
        <nav aria-label="Related Da Lat planning pages">
          <Link href="/plan-your-stay/how-to-get-here">
            How to Get Here <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link href="/experiences/day-tours">
            Da Lat Day Tours <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link href="/experiences/waterfalls-culture-tour">
            Waterfalls & Culture Tour <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link href="/plan-your-stay">
            Plan Your Stay <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </nav>
      </Container>
      <Container>
        <PhotoCredits images={["road", "lake", "city", "falls"]} />
      </Container>
    </article>
  );
}
