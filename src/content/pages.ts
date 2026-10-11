import { experiencePages } from "./experience-pages";
import { travelGuidePages } from "./travel-guides";

export type EditorialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type EditorialSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: { label: string; text: string; href?: string }[];
  afterItems?: string[];
  links?: EditorialLink[];
};

export type EditorialPage = {
  seoTitle: string;
  metaDescription: string;
  intro: string;
  secondaryIntro?: string;
  sections: EditorialSection[];
  cta: EditorialLink;
  internalLinks: EditorialLink[];
  sources?: EditorialLink[];
};

export type SitePageContent = {
  title: string;
  eyebrow: string;
  intro: string;
  note?: string;
  seoTitle?: string;
  metaDescription?: string;
  editorial?: EditorialPage;
  mapImage?: boolean;
  contactOptions?: boolean;
};

export const sitePages: Record<string, SitePageContent> = {
  "/stay/facilities": {
    title: "Facilities",
    eyebrow: "Stay / Around the house",
    intro:
      "Practical information about facilities helps travellers choose a place that suits their needs.",
    note: "Facilities shown in supplied images have not been verified as belonging to this property. Please confirm amenities and accessibility details before publication.",
  },
  "/experiences": {
    title: "Experiences & Activities",
    eyebrow: "Beyond the doorstep",
    intro: experiencePages["/experiences"].intro,
    editorial: experiencePages["/experiences"],
    note: "Experience copy was supplied for the site, but current schedules, operators, inclusions, costs, safety requirements and hostel arrangements still need confirmation.",
  },
  "/experiences/family-dinner": {
    title: "Family Dinner",
    eyebrow: "Experiences / Around the table",
    intro: experiencePages["/experiences/family-dinner"].intro,
    editorial: experiencePages["/experiences/family-dinner"],
    note: "Confirm whether dinner is currently hosted, along with dates, times, menu, cost and participation details.",
  },
  "/experiences/nightlife": {
    title: "Happy Hour & Nightlife",
    eyebrow: "Experiences / After dark",
    intro: experiencePages["/experiences/nightlife"].intro,
    editorial: experiencePages["/experiences/nightlife"],
    note: "Events, venues and timings vary by date. Confirm the current schedule with the team and please enjoy responsibly.",
  },
  "/experiences/canyoning": {
    title: "Extreme Canyoning",
    eyebrow: "Experiences / Adventure",
    intro: experiencePages["/experiences/canyoning"].intro,
    editorial: experiencePages["/experiences/canyoning"],
    note: "Confirm the operator, route, eligibility, safety standards, schedule, price and availability before booking.",
  },
  "/experiences/waterfalls-culture-tour": {
    title: "Waterfalls & Culture Tour",
    eyebrow: "Experiences / Around Da Lat",
    intro: experiencePages["/experiences/waterfalls-culture-tour"].intro,
    editorial: experiencePages["/experiences/waterfalls-culture-tour"],
    note: "Confirm the current route, stops, duration, provider, price and availability before booking.",
  },
  "/experiences/mario-kart-mongoland": {
    title: "Mario Kart & Mongoland",
    eyebrow: "Experiences / A playful day out",
    intro: experiencePages["/experiences/mario-kart-mongoland"].intro,
    editorial: experiencePages["/experiences/mario-kart-mongoland"],
    note: "Confirm attraction details, trip inclusions, timings, costs and availability with the team before booking.",
  },
  "/experiences/cloud-hunting": {
    title: "Cloud Hunting",
    eyebrow: "Experiences / Early mornings",
    intro: experiencePages["/experiences/cloud-hunting"].intro,
    editorial: experiencePages["/experiences/cloud-hunting"],
    note: "Visibility depends on weather. Confirm departure details, operator, cost and availability before booking.",
  },
  "/experiences/day-tours": {
    title: "Da Lat Day Tours",
    eyebrow: "Experiences / Around Da Lat",
    intro: experiencePages["/experiences/day-tours"].intro,
    editorial: experiencePages["/experiences/day-tours"],
    note: "Confirm tour choices, operators, routes, prices and availability with the team before booking.",
  },
  "/our-family": {
    title: "Our Family",
    eyebrow: "Come as a Traveller. Leave as Family.",
    intro:
      "Dalat Family Hostel is a social backpacker hostel in Da Lat, Vietnam.",
    note: "The hostel story and team biographies need owner-approved details. This page avoids inventing its history or introducing team members without confirmation.",
  },
  "/explore-da-lat": {
    title: "Explore Da Lat",
    eyebrow: "A traveller's guide",
    intro: travelGuidePages["/explore-da-lat"].intro,
    editorial: travelGuidePages["/explore-da-lat"],
  },
  "/plan-your-stay": {
    title: "Plan Your Stay",
    eyebrow: "Before you travel",
    intro: travelGuidePages["/plan-your-stay"].intro,
    editorial: travelGuidePages["/plan-your-stay"],
  },
  "/plan-your-stay/how-to-get-here": {
    title: "How to Get Here",
    eyebrow: "Plan Your Stay / Location",
    intro: travelGuidePages["/plan-your-stay/how-to-get-here"].intro,
    editorial: travelGuidePages["/plan-your-stay/how-to-get-here"],
    mapImage: true,
  },
  "/plan-your-stay/contact": {
    title: "Contact",
    eyebrow: "Plan Your Stay / Say hello",
    intro:
      "Get in touch with Dalat Family Hostel by phone or email, or find the hostel at its Da Lat address.",
    note: "Booking-platform links do not show live availability. Confirm booking details directly before travelling.",
    contactOptions: true,
  },
};

export function getPageByPath(path: string): SitePageContent | undefined {
  return sitePages[path];
}

export function getAllPageRoutes() {
  return Object.keys(sitePages);
}
