export const site = {
  name: "Dalat Family Hostel",
  location: "Da Lat, Vietnam",
  tagline: "Come as a Traveller. Leave as Family.",
  navigation: [
    { label: "The house", href: "/#hostel-life" },
    { label: "Your stay", href: "/#rooms" },
    { label: "Experiences", href: "/#experiences" },
    { label: "Our story", href: "/#our-story" },
    { label: "Find us", href: "/#location" },
  ],
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/dalatfamilyhostel_official/",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/dalatfamilyhostel/",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@dalat.family.host",
    },
  ],
} as const;

// Property-specific destinations must be supplied by the owner and checked
// against the live listing before these controls are enabled. Never substitute
// a provider homepage or a guessed listing URL.
export const bookingDestinations: {
  hostelworld: string | null;
  booking: string | null;
  agoda: string | null;
  message: string | null;
} = {
  hostelworld:
    "https://www.hostelworld.com/hostels/p/302311/dalat-family-hostel/",
  booking:
    "https://www.booking.com/hotel/vn/dalat-family-hostel-thanh-pho-da-lat.en-gb.html",
  agoda: "https://www.agoda.com/dalat-family-hostel-h16373235/hotel/dalat-vn.html",
  message: null,
};
