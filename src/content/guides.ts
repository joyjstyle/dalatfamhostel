import guideCopy from "./guide-copy.json";

export type TravelGuideTopic =
  | "plan-your-trip"
  | "things-to-do"
  | "food-nightlife"
  | "itineraries"
  | "getting-here"
  | "getting-around";

type LegacyTravelGuide = {
  slug: string;
  title: string;
  category: string;
  topics: TravelGuideTopic[];
  description: string;
  readingTime: number;
  image: string;
  imageAlt: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
};

type GuideCopy = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  paragraphs: string[];
  readNext: string[];
};

export type TravelGuide = Omit<LegacyTravelGuide, "intro" | "sections"> & {
  seoTitle: string;
  paragraphs: string[];
  readNext: string[];
  lastUpdated?: string;
};

export const guideTopics: {
  slug: TravelGuideTopic;
  title: string;
  description: string;
  icon: "compass" | "map" | "coffee" | "calendar" | "bus" | "footprints";
}[] = [
  {
    slug: "plan-your-trip",
    title: "Plan Your Trip",
    description: "Weather, budgets, places to stay and the essentials.",
    icon: "compass",
  },
  {
    slug: "things-to-do",
    title: "Things to Do",
    description: "Waterfalls, highland views and memorable days out.",
    icon: "map",
  },
  {
    slug: "food-nightlife",
    title: "Food & Nightlife",
    description: "Find your own favourite cafés, flavours and evenings.",
    icon: "coffee",
  },
  {
    slug: "itineraries",
    title: "Itineraries",
    description: "Thoughtful ways to make the most of a few days.",
    icon: "calendar",
  },
  {
    slug: "getting-here",
    title: "Getting Here",
    description: "Plan the mountain journey by road or air.",
    icon: "bus",
  },
  {
    slug: "getting-around",
    title: "Getting Around",
    description: "Practical ideas for exploring the city and beyond.",
    icon: "footprints",
  },
];

const legacyTravelGuides: LegacyTravelGuide[] = [
  {
    slug: "da-lat-travel-guide",
    title: "Da Lat Travel Guide",
    category: "The essential guide",
    topics: ["plan-your-trip", "things-to-do", "getting-around"],
    description:
      "Get your bearings in Vietnam’s cool-climate highland city, from pine-covered scenery to coffee, culture and outdoor adventures.",
    readingTime: 8,
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops beneath green highland hills",
    intro:
      "Da Lat is a highland city for curious wanderers: misty mornings, pine-covered hills, café stops and scenic detours all fit into the same trip. This guide brings together the essentials to help you start exploring.",
    sections: [
      {
        title: "Get to know the city",
        paragraphs: [
          "Da Lat sits in Vietnam’s Central Highlands. Its cooler climate, flower-filled streets, local produce and French-influenced architecture give the city a different rhythm from the coast.",
          "Start gently: take a walk by Xuan Huong Lake, explore the central market area and leave time for an unplanned coffee stop.",
        ],
      },
      {
        title: "Choose your kind of day",
        paragraphs: [
          "For fresh air, look toward pine forests, waterfalls, gardens and viewpoints around the highlands. For a slower day, make room for cafés, local food and the city’s railway and architectural history.",
          "Outdoor trips can depend on weather and local conditions. Check current details and choose experienced providers for activities that require specialist equipment or guidance.",
        ],
      },
      {
        title: "Plan for Da Lat weather",
        paragraphs: [
          "Days can feel mild while evenings turn cool, and showers can affect plans. Pack layers and a light rain jacket, then keep your itinerary flexible.",
        ],
      },
    ],
  },
  {
    slug: "things-to-do-in-da-lat",
    title: "Things to Do in Da Lat",
    category: "Ideas for your stay",
    topics: ["things-to-do", "getting-around"],
    description:
      "Mix easy city exploring with waterfalls, flower gardens, coffee stops and highland adventures.",
    readingTime: 6,
    image: "/activity/canyoning-1.JPG",
    imageAlt: "Travellers taking part in an outdoor canyoning activity",
    intro:
      "Da Lat makes it easy to balance a slow café morning with an afternoon outdoors. Pick a few things that suit your pace instead of trying to fit every stop into one day.",
    sections: [
      {
        title: "Start close to the centre",
        paragraphs: [
          "Walk around Xuan Huong Lake, browse the central market and pause at cafés along the way. The city’s flower gardens and old railway character offer gentler ways to spend an afternoon.",
        ],
      },
      {
        title: "Head into the highlands",
        paragraphs: [
          "Waterfalls, pine forests, farms and open countryside make rewarding day trips. Datanla Waterfall and the Lang Biang area are well-known places to explore; check access and current conditions before setting out.",
        ],
      },
      {
        title: "Make adventure a considered choice",
        paragraphs: [
          "Canyoning, hiking and cycling can add a more active day. Use an experienced, properly equipped provider, follow local guidance and check what is included before booking.",
        ],
      },
    ],
  },
  {
    slug: "da-lat-3-day-itinerary",
    title: "Da Lat 3-Day Itinerary",
    category: "A first-time itinerary",
    topics: ["itineraries", "plan-your-trip"],
    description:
      "A flexible three-day outline with time for the city, a countryside day and a slower final morning.",
    readingTime: 5,
    image: "/activity/mario-kart-1.JPG",
    imageAlt: "Go-karts on an outdoor track near Da Lat",
    intro:
      "Three days gives you time to see a little of central Da Lat, spend a day beyond the city and still leave a few hours unplanned. Treat this as a flexible outline, not a timetable.",
    sections: [
      {
        title: "Day one: find your bearings",
        paragraphs: [
          "Explore the lake and central market area, settle into the city’s café scene and keep the evening relaxed. A walk is a good way to get your bearings before planning trips farther out.",
        ],
      },
      {
        title: "Day two: choose a countryside day",
        paragraphs: [
          "Pick one main focus: waterfalls and culture, an outdoor activity, or a scenic trip into the highlands. Confirm transport, duration, weather conditions and provider details before setting out.",
        ],
      },
      {
        title: "Day three: leave space",
        paragraphs: [
          "Choose a garden, railway or neighbourhood you did not get to on the first day. Keep some time for a long breakfast or coffee, and allow a buffer before onward travel.",
        ],
      },
    ],
  },
  {
    slug: "ho-chi-minh-to-da-lat",
    title: "Ho Chi Minh City to Da Lat",
    category: "Getting here",
    topics: ["getting-here", "plan-your-trip"],
    description:
      "Compare the main ways to travel from Ho Chi Minh City to Da Lat and plan for the mountain-road leg.",
    readingTime: 5,
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops beneath green highland hills",
    intro:
      "The journey from Ho Chi Minh City to Da Lat can be made by sleeper bus, private road transfer or a flight connection. The right option depends on your schedule, budget and comfort on winding roads.",
    sections: [
      {
        title: "Sleeper bus",
        paragraphs: [
          "Sleeper buses are a common overland option. Compare current operators, departure points, arrival stations and luggage rules directly before booking; schedules and journey times change.",
          "The final approach follows mountain roads. If you are prone to motion sickness, plan accordingly and keep essential items close at hand.",
        ],
      },
      {
        title: "Flight and onward transfer",
        paragraphs: [
          "Some travellers fly to the airport serving Da Lat and continue to the city by shuttle, taxi or pre-arranged transfer. Check current flight routes and ground transport before relying on a connection.",
        ],
      },
      {
        title: "Give the journey breathing room",
        paragraphs: [
          "Allow extra time for weather, traffic and connections. Save your accommodation address offline and confirm your arrival plan before departure.",
        ],
      },
    ],
  },
  {
    slug: "da-lat-backpacking-guide",
    title: "Da Lat Backpacking Guide",
    category: "Backpacker essentials",
    topics: ["plan-your-trip", "getting-around"],
    description:
      "Plan a flexible backpacker stay with practical packing, transport and responsible-travel tips.",
    readingTime: 5,
    image: "/common/common-1.png",
    imageAlt: "Shared lounge with tables and seating",
    intro:
      "Da Lat suits a backpacking itinerary that leaves room to change direction. A few practical choices—layers, flexible transport plans and time outdoors—can make a short stay feel less rushed.",
    sections: [
      {
        title: "Pack for cool evenings",
        paragraphs: [
          "Bring comfortable walking shoes, a light rain layer and something warmer for after sunset. Conditions can shift through the day, especially when you leave the city centre.",
        ],
      },
      {
        title: "Balance plans with free time",
        paragraphs: [
          "Choose one or two priorities each day, such as a waterfall, market, garden or countryside trip. Leave room for cafés, local food and rest between longer outings.",
        ],
      },
      {
        title: "Travel thoughtfully",
        paragraphs: [
          "Support local businesses, respect communities and natural areas, and use licensed, safety-conscious providers for activities that need specialist equipment or guides.",
        ],
      },
    ],
  },
  {
    slug: "best-cafes-in-da-lat",
    title: "Best Cafés in Da Lat",
    category: "Coffee & local flavours",
    topics: ["food-nightlife"],
    description:
      "Find a café that fits your day, from a quick Vietnamese coffee to a slow afternoon out of the rain.",
    readingTime: 4,
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops beneath green highland hills",
    intro:
      "Da Lat’s café culture is part of the pleasure of exploring. Rather than race between a checklist of addresses, use the neighbourhood, the weather and what you feel like drinking to guide your next stop.",
    sections: [
      {
        title: "Choose the mood",
        paragraphs: [
          "Look for a central spot between walks, or make a café part of a countryside outing. Hill views and quieter streets can reward a small detour, but check opening details before travelling specifically to a venue.",
        ],
      },
      {
        title: "Try local flavours",
        paragraphs: [
          "Vietnamese coffee is an easy place to start. Da Lat is also known for local produce, including artichoke tea and strawberries; menus and seasonal availability vary by café.",
        ],
      },
      {
        title: "Make your own shortlist",
        paragraphs: [
          "Check recent opening information and reviews, respect small businesses’ space, and keep a rain layer nearby for the walk between stops.",
        ],
      },
    ],
  },
  {
    slug: "best-waterfalls-in-da-lat",
    title: "Best Waterfalls in Da Lat",
    category: "Nature & outdoors",
    topics: ["things-to-do"],
    description:
      "Plan a waterfall day with practical reminders about access, weather, transport and safety.",
    readingTime: 4,
    image: "/activity/canyoning-2.JPG",
    imageAlt: "Waterfall and rocky canyon in a green landscape",
    intro:
      "Waterfalls are among Da Lat’s most memorable natural escapes. Conditions, access and facilities can change, so check current visitor information before committing to a route.",
    sections: [
      {
        title: "Choose one main stop",
        paragraphs: [
          "Datanla is a well-known waterfall near Da Lat. Other falls lie farther into the surrounding countryside. Compare current travel time and access information so the day remains comfortable.",
        ],
      },
      {
        title: "Check conditions before you go",
        paragraphs: [
          "Rain can change paths and water conditions. Wear shoes with a reliable grip, follow posted guidance and do not enter restricted areas or fast-moving water.",
        ],
      },
      {
        title: "Plan the return",
        paragraphs: [
          "Confirm transport both ways, carry water and allow time for the journey back. Use a qualified local guide for routes or activities that require specialist knowledge.",
        ],
      },
    ],
  },
  {
    slug: "da-lat-on-a-budget",
    title: "Da Lat on a Budget",
    category: "Plan your trip",
    topics: ["plan-your-trip"],
    description:
      "Keep costs in view with flexible days, local food and a clear plan for transport and activities.",
    readingTime: 4,
    image: "/common/common-2.png",
    imageAlt: "Communal lounge with a long table and seating",
    intro:
      "A memorable Da Lat trip does not need a packed paid-activity schedule. Plan around what matters most to you, then balance bigger outings with simple city walks and local meals.",
    sections: [
      {
        title: "Decide what is worth spending on",
        paragraphs: [
          "Set aside room in your budget for transport and one or two experiences you care about. Confirm what a tour includes and whether there are additional costs before you book.",
        ],
      },
      {
        title: "Keep everyday plans flexible",
        paragraphs: [
          "Walk where distances and weather make it comfortable, explore public city areas and look for local food. Prices, opening times and transport fares change, so check current information on the day.",
        ],
      },
      {
        title: "Compare the full cost",
        paragraphs: [
          "When choosing transport or accommodation, check what is included, where you will arrive and any extra fees. Do not rely on a headline price alone.",
        ],
      },
    ],
  },
  {
    slug: "where-to-stay-in-da-lat",
    title: "Where to Stay in Da Lat",
    category: "Plan your trip",
    topics: ["plan-your-trip"],
    description:
      "Choose a base around the pace you want, from central walks to quieter hills beyond town.",
    readingTime: 4,
    image: "/rooms/dorm-6 bed.png",
    imageAlt: "Six-bed dormitory room",
    intro:
      "The best place to stay in Da Lat depends on how you like to travel. Think about walking, evening plans, access to transport and how much time you want to spend beyond the centre.",
    sections: [
      {
        title: "Central Da Lat",
        paragraphs: [
          "A central base can suit first-time visitors who want to walk to cafés, restaurants, the market and Xuan Huong Lake. Check the exact location and recent transport information before booking.",
        ],
      },
      {
        title: "Lake, gardens and quieter areas",
        paragraphs: [
          "Staying near green space can offer a calmer feel, while hillside or countryside stays may mean more planning for transport. Compare the location with the places you expect to visit.",
        ],
      },
      {
        title: "Compare what matters to you",
        paragraphs: [
          "Check current room details, facilities, cancellation conditions and total cost directly with the property or booking provider. Do not assume an amenity is available unless it is confirmed in the listing.",
        ],
      },
    ],
  },
  {
    slug: "best-time-to-visit-da-lat",
    title: "Best Time to Visit Da Lat",
    category: "Plan your trip",
    topics: ["plan-your-trip"],
    description:
      "Understand the broad seasonal pattern and pack for a city where afternoons and evenings can feel different.",
    readingTime: 4,
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops and hills under a cloudy sky",
    intro:
      "Da Lat is cooler than many Vietnamese destinations throughout the year. Your ideal time depends on whether you prefer drier days for outdoor plans or greener scenery and the atmosphere of passing showers.",
    sections: [
      {
        title: "Drier months",
        paragraphs: [
          "December to March is generally a drier period and popular for outdoor exploring and clearer views. Weather still varies, so check a current forecast before a day trip.",
        ],
      },
      {
        title: "Wetter months",
        paragraphs: [
          "April to November generally brings more regular showers and greener landscapes. A waterproof layer and a flexible plan make it easier to enjoy the city between showers.",
        ],
      },
      {
        title: "Pack layers year-round",
        paragraphs: [
          "Days can be mild and evenings noticeably cooler. Bring comfortable shoes and an extra layer, whatever month you visit.",
        ],
      },
    ],
  },
  {
    slug: "da-lat-weather",
    title: "Da Lat Weather",
    category: "Plan your trip",
    topics: ["plan-your-trip"],
    description:
      "Know what to pack for mild days, cool evenings and rain that can change outdoor plans.",
    readingTime: 3,
    image: "/scenery.JPG",
    imageAlt: "Clouds gathering over Da Lat and the surrounding hills",
    intro:
      "Da Lat’s highland climate can feel fresh and changeable. A little preparation helps whether you are walking around town, heading to a waterfall or getting up early for a viewpoint.",
    sections: [
      {
        title: "Expect cooler evenings",
        paragraphs: [
          "Even after a comfortable day, temperatures can feel cooler at night. Pack a light warm layer for dinner and evening walks.",
        ],
      },
      {
        title: "Plan around showers",
        paragraphs: [
          "The wetter season generally runs from April to November, with greener scenery and regular showers. Keep outdoor plans flexible and check local conditions before travel.",
        ],
      },
      {
        title: "What to bring",
        paragraphs: [
          "Comfortable walking shoes, a light waterproof jacket, sunscreen and a warmer layer are useful basics. For adventure activities, follow the operator’s gear guidance.",
        ],
      },
    ],
  },
  {
    slug: "da-lat-sleeper-bus-guide",
    title: "Da Lat Sleeper Bus Guide",
    category: "Getting here",
    topics: ["getting-here", "plan-your-trip"],
    description:
      "Know what to check before booking an overnight bus and arriving on Da Lat’s mountain roads.",
    readingTime: 4,
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops beneath green highland hills",
    intro:
      "Sleeper buses connect Da Lat with several Vietnamese cities and can be a practical overnight option. Operators, schedules, pickup points and arrival stations vary, so check the details for your specific trip.",
    sections: [
      {
        title: "Before you book",
        paragraphs: [
          "Confirm your departure point, drop-off location, luggage allowance and change or cancellation conditions directly with the operator. Leave a buffer if you have a connecting journey.",
        ],
      },
      {
        title: "Prepare for the mountain approach",
        paragraphs: [
          "Roads into Da Lat wind through the highlands. If you are prone to motion sickness, consider your seat and usual precautions before travelling.",
        ],
      },
      {
        title: "Plan your arrival",
        paragraphs: [
          "Save your accommodation address offline and confirm how you will continue from the bus station. Recheck arrival details shortly before departure, especially around holidays or in wet weather.",
        ],
      },
    ],
  },
  {
    slug: "getting-around-da-lat",
    title: "Getting Around Da Lat",
    category: "Getting around",
    topics: ["getting-around", "plan-your-trip"],
    description:
      "Decide when to walk and when to arrange transport for Da Lat’s hills, countryside and out-of-centre sights.",
    readingTime: 4,
    image: "/common/common-1.png",
    imageAlt: "Shared lounge area with tables and seating",
    intro:
      "Central Da Lat is rewarding on foot, especially around the lake, market and café districts. Farther-out attractions take more planning, and the hills and weather can affect how you get there.",
    sections: [
      {
        title: "Explore the centre on foot",
        paragraphs: [
          "Walking works well for nearby city sights when the weather and route suit. Wear comfortable shoes and give yourself time on steep streets.",
        ],
      },
      {
        title: "Arrange longer trips in advance",
        paragraphs: [
          "For waterfalls and countryside, compare taxis, private cars and guided transport. Confirm pickup and return arrangements as well as the total cost before setting out.",
        ],
      },
      {
        title: "Ride safely",
        paragraphs: [
          "Only ride a motorbike if you are properly licensed, experienced and insured. Roads can be steep, winding or affected by fog and rain; use suitable safety gear and never rush.",
        ],
      },
    ],
  },
];

const legacyGuidesBySlug = new Map(
  legacyTravelGuides.map((guide) => [guide.slug, guide]),
);

const additionalGuidePresentation: Record<
  string,
  Pick<LegacyTravelGuide, "category" | "topics" | "image" | "imageAlt">
> = {
  "da-lat-nightlife": {
    category: "Food & nightlife",
    topics: ["food-nightlife", "getting-around"],
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops beneath the highland sky",
  },
  "da-lat-5-day-itinerary": {
    category: "A slower itinerary",
    topics: ["itineraries", "plan-your-trip"],
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops beneath the highland sky",
  },
  "ho-chi-minh-to-da-lat-sleeper-bus": {
    category: "Getting here",
    topics: ["getting-here", "plan-your-trip"],
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops beneath the highland sky",
  },
  "hanoi-to-da-lat": {
    category: "Getting here",
    topics: ["getting-here", "plan-your-trip"],
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops beneath the highland sky",
  },
  "nha-trang-to-da-lat": {
    category: "Getting here",
    topics: ["getting-here", "plan-your-trip"],
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops beneath the highland sky",
  },
  "mui-ne-to-da-lat": {
    category: "Getting here",
    topics: ["getting-here", "plan-your-trip"],
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops beneath the highland sky",
  },
  "da-lat-airport-to-city-centre": {
    category: "Arrival guide",
    topics: ["getting-here", "getting-around"],
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops beneath the highland sky",
  },
  "da-lat-bus-station-to-city-centre": {
    category: "Arrival guide",
    topics: ["getting-here", "getting-around"],
    image: "/scenery.JPG",
    imageAlt: "Da Lat rooftops beneath the highland sky",
  },
};

const recentlyUpdatedGuides = new Set([
  "best-time-to-visit-da-lat",
  "da-lat-weather",
  "ho-chi-minh-to-da-lat",
  "ho-chi-minh-to-da-lat-sleeper-bus",
  "hanoi-to-da-lat",
  "nha-trang-to-da-lat",
  "mui-ne-to-da-lat",
  "da-lat-airport-to-city-centre",
  "da-lat-bus-station-to-city-centre",
  "getting-around-da-lat",
  "da-lat-sleeper-bus-guide",
]);

function estimateReadingTime(paragraphs: string[]) {
  const wordCount = paragraphs.join(" ").match(/\S+/g)?.length ?? 0;
  return Math.max(1, Math.ceil(wordCount / 200));
}

export const travelGuides: TravelGuide[] = (guideCopy as GuideCopy[]).map(
  (copy) => {
    const legacy = legacyGuidesBySlug.get(copy.slug);
    const additional = additionalGuidePresentation[copy.slug];
    const presentation = legacy ?? additional;

    if (!presentation) {
      throw new Error(`Missing presentation details for guide "${copy.slug}".`);
    }

    return {
      category: presentation.category,
      topics: presentation.topics,
      image: presentation.image,
      imageAlt: presentation.imageAlt,
      slug: copy.slug,
      title: copy.title,
      description: copy.description,
      seoTitle: copy.seoTitle,
      paragraphs: copy.paragraphs,
      readNext: copy.readNext,
      readingTime: legacy?.readingTime ?? estimateReadingTime(copy.paragraphs),
      lastUpdated: recentlyUpdatedGuides.has(copy.slug)
        ? "2026-10-11"
        : undefined,
    };
  },
);

export const featuredGuideSlugs = [
  "da-lat-travel-guide",
  "things-to-do-in-da-lat",
  "da-lat-3-day-itinerary",
  "ho-chi-minh-to-da-lat",
] as const;

export const popularGuideSlugs = [
  "da-lat-backpacking-guide",
  "best-cafes-in-da-lat",
  "best-waterfalls-in-da-lat",
  "da-lat-on-a-budget",
  "where-to-stay-in-da-lat",
  "best-time-to-visit-da-lat",
  "da-lat-weather",
  "da-lat-sleeper-bus-guide",
] as const;

export function getTravelGuide(slug: string) {
  return travelGuides.find((guide) => guide.slug === slug);
}

export function getTravelGuidePath(guide: TravelGuide) {
  return `/guides/${guide.slug}`;
}
