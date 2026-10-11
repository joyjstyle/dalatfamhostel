export const site = {
  name: "Dalat Family Hostel",
  location: "Da Lat, Vietnam",
  tagline: "Come as a Traveller. Leave as Family.",
  contact: {
    address: "3/4 Ngô Quyền St, Ward 6, Dalat City, Vietnam",
    addressUrl:
      "https://www.google.com/maps/search/?api=1&query=3%2F4%20Ng%C3%B4%20Quy%E1%BB%81n%20St%2C%20Ward%206%2C%20Dalat%20City%2C%20Vietnam",
    telephone: "(+84) 263 3608086",
    telephoneUrl: "tel:+842633608086",
    email: "dalatfamilyhostel@gmail.com",
    emailUrl: "mailto:dalatfamilyhostel@gmail.com",
  },
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
