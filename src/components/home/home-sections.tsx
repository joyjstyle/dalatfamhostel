import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { BookingButton } from "@/components/booking/booking-provider";
import { PhotoPlaceholder } from "./photo-placeholder";
import { PhotoGallery } from "./photo-gallery";
import { RoomLookbook } from "./room-lookbook";
import { SharedSpaceGallery } from "./shared-space-gallery";
import {
  commonAreaPhotos,
  dinnerPhotos,
  experiencePhotos,
  roomPhotos,
  storyPhoto,
  travelPhoto,
} from "./photo-assets";
import { SectionHeading } from "./section-heading";
import { HouseMark } from "./house-mark";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Image
        src="/scenery.JPG"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-background"
      />
      <Container className="hero-content">
        <div className="hero-copy">
          <p className="hero-location">
            <MapPin size={16} aria-hidden="true" />
            DA LAT, VIETNAM
          </p>
          <p className="eyebrow">A little further from ordinary.</p>
          <h1 id="hero-heading">
            Come as a Traveller.
            <br />{" "}
            <span>Leave as Family.</span>
          </h1>
          <p className="hero-description">
            A social backpacker hostel in Da Lat, Vietnam.
            <br />
            Your next chapter starts with a hello.
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
            Room labels follow the supplied image names; details will be
            shared once verified.
          </p>
        </div>
        <div className="room-composition">
          <div className="room-image-references">
            <div className="room-lookbook-heading">
              <p className="eyebrow">The room lookbook</p>
              <span>13 photographs · scroll to explore</span>
            </div>
            <RoomLookbook photos={roomPhotos} />
            <SharedSpaceGallery photos={commonAreaPhotos} />
          </div>
          <div className="room-details">
            <span className="eyebrow">Accommodation preview</span>
            <h3>
              A space for <br />
              your next chapter.
            </h3>
            <p>
              Verified room names, property-matched photographs, bed
              arrangements and inclusions are needed before we can introduce
              the accommodation.
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
          <Link href="#our-story" className="text-link">
            Get to know the family <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="dinner-image">
          <PhotoGallery photos={dinnerPhotos} className="dinner-gallery" />
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
          <div className="experience-images">
            <p className="eyebrow">Activity image references</p>
            <PhotoGallery
              photos={experiencePhotos}
              className="experience-gallery"
            />
            <p className="development-note">
              Images are references only; whether these experiences are
              connected to the hostel or currently available is unverified.
            </p>
          </div>
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
            subject="A shared meal."
            number="05"
            tone="cream"
            imageSrc={storyPhoto.src}
            imageAlt={storyPhoto.alt}
            imageLabel={storyPhoto.caption}
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
            The exterior image is not a team portrait. Owner-approved history
            and team photographs are still needed; no founding story or dates
            have been invented.
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
          <div className="review-overview">
            <SectionHeading id="reviews-heading" eyebrow="06 / From our guests">
              Real people. <br />
              Their own words.
            </SectionHeading>
            <div
              className="review-score"
              aria-label="Hostelworld guest rating 9.5 out of 10 from 3,711 reviews, checked 11 October 2026"
            >
              <strong>9.5</strong>
              <span>
                <b>Hostelworld guest score</b>
                <small>3,711 reviews · checked 11 October 2026</small>
              </span>
            </div>
            <a
              className="text-link"
              href="https://www.hostelworld.com/hostels/p/302311/dalat-family-hostel/#reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read all reviews on Hostelworld
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="review-list" aria-label="Selected Hostelworld reviews">
            <figure className="review-item">
              <blockquote>
                “Great energy kind staff good stay”
              </blockquote>
              <figcaption>Grace <span>· Gibraltar</span></figcaption>
            </figure>
            <figure className="review-item">
              <blockquote>
                “It has a lovely atmosphere and a balcony area to make friends
                and have evening drinks.”
              </blockquote>
              <figcaption>Harry <span>· England</span></figcaption>
            </figure>
            <figure className="review-item">
              <blockquote>
                “Honestly one of the best hostel experiences I’ve had in Da
                Lat”
              </blockquote>
              <figcaption>Joy <span>· Singapore</span></figcaption>
            </figure>
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
            subject="A view from Da Lat."
            number="06"
            tone="red"
            imageSrc={travelPhoto.src}
            imageAlt={travelPhoto.alt}
            imageLabel={travelPhoto.caption}
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
            Next stop: <em>Da Lat.</em>
          </SectionHeading>
          <p className="lead">
            Dalat Family Hostel <br />
            Da Lat, Vietnam
          </p>
          <p className="body-copy">
            3/4 Ngo Quyen Street, Ward 1, Dalat City
          </p>
          <BookingButton variant="secondary">
            Plan your stay <ArrowUpRight aria-hidden="true" size={18} />
          </BookingButton>
        </div>
        <figure className="location-map">
          <Image
            src="/dalat-family-hostel-map.png"
            alt="Illustrated neighborhood map marking Dalat Family Hostel and nearby Da Lat landmarks."
            width={1643}
            height={957}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </figure>
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
