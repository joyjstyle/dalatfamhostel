import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/booking/booking-provider";
import { RoomLookbook } from "@/components/home/room-lookbook";
import { roomPhotos } from "@/components/home/photo-assets";
import { Container } from "@/components/ui/container";

export const stayMetadata: Metadata = {
  title: { absolute: "Stay at Dalat Family Hostel | Rooms & Dorms" },
  description:
    "Explore the room photographs at Dalat Family Hostel in Da Lat. Check confirmed room details and availability with the booking providers.",
};

export function StayPage() {
  return (
    <main className="stay-page section-space">
      <Container>
        <nav className="page-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Stay</span>
        </nav>

        <header className="site-page-header">
          <p className="eyebrow">Rooms, dorms & shared spaces</p>
          <h1>Stay</h1>
          <p className="lead">
            Find your place in the house. Browse the room photographs, then
            check current details with the booking providers.
          </p>
        </header>

        <section
          className="stay-room-showcase"
          id="rooms"
          aria-labelledby="stay-rooms-heading"
        >
          <div className="stay-room-showcase-heading">
            <p className="eyebrow">02 / A place to land</p>
            <h2 id="stay-rooms-heading">
              Put down your bag. <br />
              Stay a little.
            </h2>
            <p>
              Take a closer look through the room photos. Select an image to
              expand it, or scroll to explore all 13.
            </p>
          </div>
          <div className="room-lookbook-heading">
            <p className="eyebrow">The room lookbook</p>
            <span>13 photographs · scroll to explore</span>
          </div>
          <RoomLookbook photos={roomPhotos} />

          <div className="stay-room-actions">
            <BookingButton variant="secondary">
              Explore booking options <ArrowRight aria-hidden="true" size={18} />
            </BookingButton>
            <Link href="/stay/facilities">
              See facilities <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <aside className="site-page-note">
            <h2>Room details are being confirmed</h2>
            <p>
              Room labels follow the supplied image filenames only. These
              photographs have not been verified as depicting this property.
              Room counts, layouts, bathroom arrangements, inclusions, rates and
              availability need owner confirmation.
            </p>
          </aside>
        </section>
      </Container>
    </main>
  );
}
