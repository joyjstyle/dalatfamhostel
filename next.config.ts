import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      {
        source: "/explore-da-lat/travel-guides",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/explore-da-lat/getting-around-da-lat",
        destination: "/explore-da-lat/getting-around",
        permanent: true,
      },
      {
        source: "/stay/rooms-dorms",
        destination: "/stay#rooms",
        permanent: true,
      },
      {
        source: "/plan-your-stay/faqs",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/experiences/family-dinner-nightlife",
        destination: "/experiences/family-dinner",
        permanent: true,
      },
      {
        source: "/experiences/pub-crawl",
        destination: "/experiences/nightlife",
        permanent: true,
      },
    ];
  },
};
export default config;
