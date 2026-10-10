import {
  Hero,
  Welcome,
  Accommodation,
  FamilyDinner,
  Experiences,
  FamilyStory,
  Reviews,
  TravelGuides,
  Location,
  FinalBooking,
} from "@/components/home/home-sections";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Accommodation />
      <FamilyDinner />
      <Experiences />
      <FamilyStory />
      <Reviews />
      <TravelGuides />
      <Location />
      <FinalBooking />
    </>
  );
}
