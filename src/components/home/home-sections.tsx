import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Heart,
  MoveUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { BookingButton } from "@/components/booking/booking-provider";
import { PhotoPlaceholder } from "./photo-placeholder";
import { SectionHeading } from "./section-heading";
import { HouseMark } from "./house-mark";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Container>
        <div className="hero-meta">
          <span>
            <MapPin size={14} aria-hidden="true" /> DA LAT, VIETNAM
          </span>
          <span>A HOUSE FOR TRAVELLERS</span>
        </div>
        <div className="hero-composition">
          <div className="hero-copy">
            <p className="eyebrow">A little further from ordinary.</p>
            <h1 id="hero-heading">
              Come as a <br />
              Traveller. <br />
              <span>Leave as Family.</span>
            </h1>
            <p className="hero-description">
              A social backpacker hostel in Da Lat, Vietnam.{" "}
              <br className="desktop-break" /> Your next chapter starts with a
              hello.
            </p>
            <div className="hero-actions">
              <BookingButton>
                Plan your stay <ArrowUpRight size={18} aria-hidden="true" />
              </BookingButton>
              <Link href="#hostel-life" className="text-link">
                Meet the family <ArrowDown size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-note">
              a little hello <br />
              from Da Lat <Heart size={20} aria-hidden="true" />
            </div>
            <PhotoPlaceholder
              className="hero-photo"
              subject="The people who make a place."
              number="01"
            />
            <div className="hero-postcard">
              <HouseMark />
              <p>
                New place. <br />
                Familiar feeling.
              </p>
              <span>DALAT FAMILY HOSTEL</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>For the journey. For the people.</span>
          <Link href="#hostel-life" aria-label="Discover the house">
            <ArrowDown size={20} aria-hidden="true" />
          </Link>
          <span className="preview-tag">
            Design preview · copy & photography pending
          </span>
        </div>
      </Container>
    </section>
  );
}

export function Welcome() {
  return (
    <section
      id="hostel-life"
      aria-labelledby="welcome-heading"
      className="welcome section-space"
    >
      <Container className="welcome-grid">
        <div className="welcome-mark">
          <HouseMark />
          <span>
            MAKE YOURSELF <br />
            AT HOME
          </span>
        </div>
        <div>
          <SectionHeading
            id="welcome-heading"
            eyebrow="01 / Welcome to the house"
          >
            Different journeys. <br />
            One family.
          </SectionHeading>
          <p className="lead">
            Welcome to Dalat Family Hostel, a social backpacker hostel in Da
            Lat, Vietnam.
          </p>
          <p className="body-copy">
            Whether you’re travelling solo or sharing the road with friends,
            this is an invitation to be part of the story.
          </p>
          <Link href="#our-story" className="text-link">
            A little about us <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="welcome-aside">
          <span className="hand-note">
            It starts with <br />a simple hello.
          </span>
          <p className="development-note">
            Editorial preview copy. Full approved introduction still needed.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function Accommodation() {
  return (
    <section
      id="rooms"
      aria-labelledby="rooms-heading"
      className="rooms section-space"
    >
      <Container>
        <div className="section-top">
          <SectionHeading id="rooms-heading" eyebrow="02 / A place to land">
            Put down your bag. <br />
            Stay a little.
          </SectionHeading>
          <p className="body-copy">
            Find your place in the house. <br />
            Room details will be shared once verified.
          </p>
        </div>
        <div className="room-composition">
          <PhotoPlaceholder
            subject="An honest look at your stay."
            number="02"
            tone="cream"
            className="room-photo"
          />
          <div className="room-details">
            <span className="eyebrow">Accommodation preview</span>
            <h3>
              A space for <br />
              your next chapter.
            </h3>
            <p>
              Verified room names, photographs, bed arrangements and inclusions
              are needed before we can introduce the accommodation.
            </p>
            <div className="room-facts">
              <span>Room inventory</span>
              <span>Awaiting verification</span>
              <span>Rates & availability</span>
              <span>See booking provider</span>
            </div>
            <BookingButton variant="secondary">
              Explore booking options{" "}
              <ArrowUpRight size={17} aria-hidden="true" />
            </BookingButton>
            <p className="development-note">
              No room types or prices are represented by this preview.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FamilyDinner() {
  return (
    <section
      id="family-dinner"
      aria-labelledby="dinner-heading"
      className="dinner dark-surface section-space"
    >
      <Container className="dinner-grid">
        <div className="dinner-copy">
          <SectionHeading id="dinner-heading" eyebrow="03 / Around the table">
            A table. <br />A conversation. <br />
            <em>A family feeling.</em>
          </SectionHeading>
          <p className="lead">Family Dinner</p>
          <p>The place in our journal for food, faces and shared moments.</p>
          <p className="development-note">
            Dinner description, schedule, pricing and participation details need
            owner approval. This preview does not advertise a scheduled meal or
            included service.
          </p>
          <Link href="#our-story" className="text-link">
            Get to know the family <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="dinner-image">
          <PhotoPlaceholder
            subject="Around the family table."
            number="03"
            tone="red"
          />
          <span className="dinner-caption">
            The best stories have people in them.
          </span>
        </div>
      </Container>
    </section>
  );
}

export function Experiences() {
  return (
    <section
      id="experiences"
      aria-labelledby="experiences-heading"
      className="section-space"
    >
      <Container>
        <div className="section-top">
          <SectionHeading
            id="experiences-heading"
            eyebrow="04 / Beyond the doorstep"
          >
            A little curiosity. <br />A new perspective.
          </SectionHeading>
          <p className="body-copy">
            A space for experiences, shared adventures{" "}
            <br className="desktop-break" /> and the stories you bring back.
          </p>
        </div>
        <div className="experience-composition">
          <PhotoPlaceholder
            subject="A day beyond the house."
            number="04"
            className="experience-photo"
          />
          <div className="experience-list">
            {[
              [
                "01",
                "Hostel life",
                "Verified social activities and participation details are needed.",
              ],
              [
                "02",
                "Out in Da Lat",
                "Approved experiences and operator information are needed.",
              ],
              [
                "03",
                "Your kind of adventure",
                "Tour descriptions, inclusions and safety information are needed.",
              ],
            ].map(([number, title, text]) => (
              <div className="experience-row" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <MoveUpRight aria-hidden="true" size={22} />
              </div>
            ))}
            <p className="development-note">
              Content outline only. No tours, schedules or activities are
              available to book in this preview.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FamilyStory() {
  return (
    <section
      id="our-story"
      aria-labelledby="story-heading"
      className="story section-space"
    >
      <Container className="story-grid">
        <div className="story-images">
          <PhotoPlaceholder
            subject="The faces behind the welcome."
            number="05"
            tone="cream"
          />
          <span className="story-stamp">
            People make <br />
            the place.
          </span>
        </div>
        <div className="story-copy">
          <SectionHeading id="story-heading" eyebrow="05 / Our family story">
            More than a name. <br />
            <em>A feeling.</em>
          </SectionHeading>
          <p className="lead">
            Dalat Family Hostel. <br />
            Come as a Traveller. Leave as Family.
          </p>
          <p className="body-copy">
            This chapter belongs to the people behind the hostel: their voices,
            their story and what family means to them.
          </p>
          <p className="development-note">
            Owner-approved history and team photographs are needed. No founding
            story or dates have been invented.
          </p>
          <HouseMark className="story-house" />
        </div>
      </Container>
    </section>
  );
}

export function Reviews() {
  return (
    <section
      id="guest-reviews"
      aria-labelledby="reviews-heading"
      className="reviews section-space"
    >
      <Container>
        <div className="review-composition">
          <span className="review-quote" aria-hidden="true">
            “
          </span>
          <div>
            <SectionHeading id="reviews-heading" eyebrow="06 / From our guests">
              Real people. <br />
              Their own words.
            </SectionHeading>
            <p className="lead">The next page belongs to our guests.</p>
            <p className="body-copy">
              Authentic, attributed reviews will appear here after their source
              and permission to reuse them have been confirmed.
            </p>
            <p className="development-note">
              Review placeholder · no testimonial, star rating or review count
              is displayed.
            </p>
          </div>
          <div className="review-note">
            <Heart size={28} strokeWidth={1.3} aria-hidden="true" />
            <span>
              Stories worth <br />
              keeping.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function TravelGuides() {
  return (
    <section
      id="travel-guides"
      aria-labelledby="guides-heading"
      className="guides section-space"
    >
      <Container>
        <div className="section-top">
          <SectionHeading id="guides-heading" eyebrow="07 / The travel journal">
            Hello, Da Lat. <br />
            Let’s look around.
          </SectionHeading>
          <p className="body-copy">
            A journal for the next part of your journey.
          </p>
        </div>
        <div className="guide-layout">
          <PhotoPlaceholder
            subject="Postcards from Da Lat."
            number="06"
            tone="red"
          />
          <div className="guide-index">
            <span className="eyebrow">
              Editorial topics · not published guides
            </span>
            {[
              "Getting your bearings",
              "A slower kind of day",
              "Notes from the road",
            ].map((title, index) => (
              <div className="guide-row" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <span className="guide-status">Draft</span>
              </div>
            ))}
            <p className="development-note">
              Travel guides require researched, approved copy and authentic
              imagery. Draft titles are not links to empty pages.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Location() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="location section-space"
    >
      <Container className="location-grid">
        <div>
          <SectionHeading
            id="location-heading"
            eyebrow="08 / Find your way here"
          >
            Next stop: <br />
            <em>Da Lat.</em>
          </SectionHeading>
          <p className="lead">
            Dalat Family Hostel <br />
            Da Lat, Vietnam
          </p>
          <p className="body-copy">
            The exact address, arrival directions and check-in information will
            be added once confirmed.
          </p>
          <p className="development-note">
            No map pin or route is shown without a verified location.
          </p>
          <BookingButton variant="secondary">
            Plan your stay <ArrowUpRight aria-hidden="true" size={18} />
          </BookingButton>
        </div>
        <div className="location-map" role="note">
          <div className="map-lines" aria-hidden="true" />
          <HouseMark />
          <p>See you in Da Lat.</p>
          <span>
            Illustrative location placeholder <br />
            Not a map of the hostel
          </span>
        </div>
      </Container>
    </section>
  );
}

export function FinalBooking() {
  return (
    <section
      aria-labelledby="final-booking-heading"
      className="final-booking dark-surface"
    >
      <Container>
        <p className="eyebrow">The next chapter is yours.</p>
        <h2 id="final-booking-heading">
          A new place. <br />
          <em>A familiar feeling.</em>
        </h2>
        <p>Come as a Traveller. Leave as Family.</p>
        <BookingButton>
          Plan your stay <ArrowUpRight size={19} aria-hidden="true" />
        </BookingButton>
        <span className="booking-disclaimer">
          Choose a booking channel. No live availability is shown here.
        </span>
      </Container>
    </section>
  );
}
