export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};

export const siteNavigation: NavigationItem[] = [
  {
    label: "Stay",
    href: "/stay",
    children: [
      { label: "Rooms & Dorms", href: "/stay#rooms" },
      { label: "Facilities", href: "/stay/facilities" },
    ],
  },
  {
    label: "Experiences",
    href: "/experiences",
    children: [
      { label: "Family Dinner", href: "/experiences/family-dinner" },
      { label: "Happy Hour & Nightlife", href: "/experiences/nightlife" },
      { label: "Extreme Canyoning", href: "/experiences/canyoning" },
      {
        label: "Waterfalls & Culture Tour",
        href: "/experiences/waterfalls-culture-tour",
      },
      {
        label: "Mario Kart & Mongoland",
        href: "/experiences/mario-kart-mongoland",
      },
      { label: "Cloud Hunting", href: "/experiences/cloud-hunting" },
      { label: "Da Lat Day Tours", href: "/experiences/day-tours" },
    ],
  },
  { label: "Our Family", href: "/our-family" },
  {
    label: "Explore Da Lat",
    href: "/explore-da-lat",
    children: [
      { label: "Travel Guides", href: "/guides" },
      { label: "Things to Do", href: "/explore-da-lat/things-to-do" },
      {
        label: "Getting Around Da Lat",
        href: "/explore-da-lat/getting-around",
      },
    ],
  },
  {
    label: "Plan Your Stay",
    href: "/plan-your-stay",
    children: [
      { label: "How to Get Here", href: "/plan-your-stay/how-to-get-here" },
      { label: "FAQs", href: "/faq" },
      { label: "Contact", href: "/plan-your-stay/contact" },
    ],
  },
];
