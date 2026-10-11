import type { EditorialPage } from "./pages";

export const travelGuidePages: Record<string, EditorialPage> = {
  "/explore-da-lat": {
    seoTitle: "Explore Da Lat, Vietnam | Nature, Coffee, Culture & Adventure",
    metaDescription:
      "Explore Da Lat’s pine forests, waterfalls, flower gardens, coffee culture and highland adventures. Discover the best things to do in Da Lat, Vietnam.",
    intro:
      "Welcome to Da Lat: Vietnam’s cool-climate highland escape, where mist settles over pine-covered hills, cafés overlook quiet lakes, and every day invites a slower kind of adventure.",
    sections: [
      {
        id: "find-your-da-lat",
        title: "Find your Da Lat",
        paragraphs: [
          "Set in the Central Highlands, Da Lat is known for its fresh air, flower-filled streets, local farms and beautiful French-era character. Come for a weekend of coffee and calm, a romantic escape, an outdoor adventure, or a deeper look at the landscapes and flavours that make this city unlike anywhere else in Vietnam.",
        ],
      },
      {
        id: "nature-views",
        title: "Nature, views and fresh air",
        paragraphs: [
          "Wake up early for cloud-covered valleys, take a walk around Xuan Huong Lake, or follow winding roads through pine forests and countryside. Da Lat rewards travellers who take their time: sunrise viewpoints, quiet trails, waterfalls and flower gardens are never far away.",
          "For a day outdoors, explore the area around Lang Biang, visit Datanla Waterfall, or head beyond the city for farms, forests and open highland scenery.",
        ],
      },
      {
        id: "coffee-food",
        title: "Coffee, food and local flavours",
        paragraphs: [
          "Da Lat’s cool climate helps create some of Vietnam’s most distinctive produce. Sip locally grown coffee in a hilltop café, visit a roastery, or wander the market for strawberries, artichoke tea, fresh vegetables and regional snacks.",
          "When evening comes, Da Lat’s food scene feels warm and informal. Look for grilled specialities, comforting soups, bánh tráng nướng and local sweet treats—best enjoyed with a light jacket as the temperature drops.",
        ],
      },
      {
        id: "culture",
        title: "Culture with character",
        paragraphs: [
          "Da Lat blends Vietnamese highland life with a legacy of French-influenced architecture, gardens and old railway history. Ride the heritage railway toward Trai Mat, visit Linh Phuoc Pagoda, or discover the city’s imaginative side at the Crazy House.",
          "The best moments are often unplanned: a small coffee shop on a rainy afternoon, a flower stall on a quiet street, or a viewpoint found while exploring by scooter or private car.",
        ],
      },
      {
        id: "outdoor-adventures",
        title: "Adventure in the highlands",
        paragraphs: [
          "For travellers looking for more energy, Da Lat offers canyoning, hiking, mountain biking and scenic road trips. The surrounding forests and waterfalls provide a dramatic setting for guided outdoor experiences.",
          "Choose experienced, properly equipped local operators, check conditions before you go, and give yourself time to enjoy the journey as much as the destination.",
        ],
      },
      {
        id: "start-exploring",
        title: "Start exploring",
        paragraphs: [
          "Whether you have two days or a full week, Da Lat makes it easy to mix gentle sightseeing with memorable experiences. Build your visit around the places, flavours and adventures that feel most like you.",
        ],
      },
    ],
    cta: { label: "Plan your Da Lat itinerary", href: "/plan-your-stay" },
    internalLinks: [
      { label: "Plan Your Stay", href: "/plan-your-stay" },
      { label: "How to Get Here", href: "/plan-your-stay/how-to-get-here" },
      { label: "Things to Do", href: "/explore-da-lat/things-to-do" },
      { label: "Food & Coffee", href: "#coffee-food" },
      { label: "Outdoor Adventures", href: "#outdoor-adventures" },
    ],
    sources: [
      {
        label: "Da Lat travel guide — Vietnam Tourism",
        href: "https://vietnam.travel/places-to-go/south-central-coast-central-highlands/dalat",
      },
    ],
  },
  "/plan-your-stay": {
    seoTitle:
      "Plan Your Da Lat Trip | Best Time to Visit, Where to Stay & Travel Tips",
    metaDescription:
      "Plan your Da Lat trip with practical advice on the best time to visit, where to stay, what to pack and how long to spend in Vietnam’s highland city.",
    intro:
      "Planning a trip to Da Lat is simple once you know what kind of experience you want. This is a city made for unhurried mornings, scenic afternoons and cosy evenings—so leave room in your itinerary for a little spontaneity.",
    secondaryIntro:
      "Use this guide to choose when to visit, where to stay and how to make the most of your time in Da Lat.",
    sections: [
      {
        id: "when-to-visit-da-lat",
        title: "When to visit Da Lat",
        paragraphs: [
          "Da Lat is pleasantly cool throughout the year, with warm days and noticeably cooler evenings. The drier months, generally from December to March, are a popular time for outdoor activities, clear views and exploring the countryside.",
          "The wetter season, generally from April to November, brings greener landscapes and regular showers. Travelling at this time can still be rewarding: bring a rain layer, keep plans flexible, and enjoy the city’s cafés, gardens and misty atmosphere between showers.",
          "No matter when you visit, pack layers. Da Lat can feel like several seasons in one day.",
        ],
      },
      {
        id: "how-many-days",
        title: "How many days do you need?",
        items: [
          {
            label: "2 days",
            text: "A great introduction. Explore the city centre, cafés, Xuan Huong Lake, a market visit and one nearby attraction.",
          },
          {
            label: "3–4 days",
            text: "The ideal first visit. Add a waterfall, farm or garden, a countryside drive, a cultural site and a relaxed food-and-coffee itinerary.",
          },
          {
            label: "5 days or more",
            text: "Slow down. Add outdoor activities, more day trips and time to explore the highlands beyond central Da Lat.",
          },
        ],
      },
      {
        id: "where-to-stay",
        title: "Where to stay in Da Lat",
        paragraphs: ["Choose your base based on the stay you want."],
        items: [
          {
            label: "Central Da Lat",
            text: "Best for first-time visitors, easy walks, restaurants, the night market and access to Xuan Huong Lake.",
          },
          {
            label: "Near the lake and gardens",
            text: "A calmer choice with scenic surroundings and a more relaxed pace.",
          },
          {
            label: "Pine hills and countryside",
            text: "Ideal for travellers seeking boutique stays, farm escapes, nature and quieter mornings. Plan transport in advance if you stay outside the centre.",
          },
        ],
        afterItems: [
          "From homestays and guesthouses to design-led hotels and private villas, Da Lat has options for every travel style. Book earlier for weekends, public holidays and peak travel periods.",
        ],
      },
      {
        id: "what-to-pack",
        title: "What to pack",
        paragraphs: [
          "Bring comfortable walking shoes, a light waterproof layer, sunscreen and a warmer layer for evenings. If you plan to ride a motorbike or spend time outdoors, add appropriate protective gear and check the weather before setting out.",
        ],
      },
      {
        id: "responsible-travel",
        title: "Travel well in Da Lat",
        paragraphs: [
          "Da Lat is best experienced with care. Support local cafés, farms, guides and independent businesses. Keep natural areas clean, respect local communities, and choose licensed, safety-conscious providers for adventure activities.",
          "Most importantly, don’t try to do everything. Leave space for a long coffee, a scenic detour and the unexpected moments that make Da Lat memorable.",
        ],
      },
    ],
    cta: { label: "Build your Da Lat itinerary", href: "/explore-da-lat" },
    internalLinks: [
      { label: "Explore Da Lat", href: "/explore-da-lat" },
      { label: "How to Get Here", href: "/plan-your-stay/how-to-get-here" },
      { label: "Where to Stay", href: "/stay" },
      { label: "Weather in Da Lat", href: "#when-to-visit-da-lat" },
      { label: "Responsible Travel", href: "#responsible-travel" },
    ],
  },
  "/plan-your-stay/how-to-get-here": {
    seoTitle: "How to Get to Da Lat | Flights, Buses & Travel Tips",
    metaDescription:
      "Learn how to get to Da Lat, Vietnam by flight, sleeper bus, private car or transfer. Find practical arrival and transport tips for your trip.",
    intro:
      "Reaching Da Lat is part of the experience. The city sits in Vietnam’s Central Highlands, surrounded by pine forests, mountain roads and sweeping valleys. Whether you arrive by air, road or private transfer, a little planning will make your journey smooth and enjoyable.",
    sections: [
      {
        id: "fly-to-da-lat",
        title: "Fly to Da Lat",
        paragraphs: [
          "The most convenient option for many travellers is flying to Lien Khuong Airport (DLI), the airport serving Da Lat. Domestic connections are available from major Vietnamese cities, and the airport is located outside the city centre.",
          "From the airport, continue to your accommodation by airport shuttle, taxi, pre-booked private transfer or a hotel-arranged pickup. Confirm your transfer before arrival, especially if you are landing late or staying outside central Da Lat.",
          "Flight schedules and availability can change, so check directly with your airline before booking.",
        ],
      },
      {
        id: "bus-to-da-lat",
        title: "Travel to Da Lat by bus",
        paragraphs: [
          "Sleeper buses connect Da Lat with several cities in Vietnam, including Ho Chi Minh City and other popular travel hubs. This can be a practical option for travellers on a budget or those looking to travel overnight.",
          "Choose a reputable operator, confirm the pickup and drop-off points, and allow extra time during wet weather or holiday periods. If you are prone to motion sickness, the winding mountain approach is worth considering before you book.",
        ],
      },
      {
        id: "private-car",
        title: "Private car or transfer",
        paragraphs: [
          "A private car is a comfortable choice for families, groups or travellers who prefer to set their own pace. It also makes it easier to stop for views, coffee or food along the way.",
          "Ask your accommodation or a trusted local provider to arrange a licensed driver. For longer road journeys, plan breaks and avoid tight onward connections.",
        ],
      },
      {
        id: "arriving-from-abroad",
        title: "Arriving from abroad",
        paragraphs: [
          "International visitors usually arrive in Vietnam through a major international airport, then continue to Da Lat by domestic flight or overland transport. Entry requirements depend on your nationality, passport and travel plans.",
          "Check the official Vietnam Immigration portal for the latest visa and entry guidance before you travel. Keep travel documents, bookings and any required visa confirmation accessible throughout your journey.",
        ],
        links: [
          {
            label: "Vietnam National Electronic Visa system",
            href: "https://evisa.gov.vn/",
            external: true,
          },
        ],
      },
      {
        id: "getting-around-da-lat",
        title: "Getting around once you arrive",
        paragraphs: [
          "Central Da Lat is easy to explore on foot, especially around the lake, market and café districts. For attractions farther out, consider a taxi, private car, guided tour or motorbike—only if you are properly licensed, experienced and insured.",
          "Roads outside the centre can be steep, winding and affected by fog or rain. Travel at a comfortable pace, wear appropriate safety gear and never rush to fit too much into one day.",
          "Dalat Family Hostel is at 3/4 Ngô Quyền St, Ward 6, Dalat City, Vietnam. Save the address or open it in Google Maps before setting out.",
        ],
        links: [
          {
            label: "Open Dalat Family Hostel in Google Maps",
            href: "https://www.google.com/maps/search/?api=1&query=3%2F4%20Ng%C3%B4%20Quy%E1%BB%81n%20St%2C%20Ward%206%2C%20Dalat%20City%2C%20Vietnam",
            external: true,
          },
        ],
      },
      {
        id: "before-you-leave",
        title: "Before you leave",
        items: [
          {
            label: "Confirm your arrival point",
            text: "Check your airport, bus station or transfer pickup location.",
          },
          {
            label: "Save your accommodation address",
            text: "Dalat Family Hostel: 3/4 Ngô Quyền St, Ward 6, Dalat City, Vietnam.",
          },
          {
            label: "Check the weather",
            text: "Pack layers for cool evenings and rain.",
          },
          {
            label: "Allow extra time",
            text: "Build in a buffer for mountain roads, weather and holiday traffic.",
          },
          {
            label: "Reconfirm your transport",
            text: "Check flights, buses and transfers shortly before departure.",
          },
        ],
      },
    ],
    cta: { label: "Plan your stay in Da Lat", href: "/plan-your-stay" },
    internalLinks: [
      { label: "Explore Da Lat", href: "/explore-da-lat" },
      { label: "Plan Your Stay", href: "/plan-your-stay" },
      { label: "Airport Transfers", href: "#fly-to-da-lat" },
      {
        label: "Getting Around",
        href: "/explore-da-lat/getting-around",
      },
      {
        label: "Vietnam Visa Information",
        href: "https://evisa.gov.vn/",
        external: true,
      },
    ],
    sources: [
      {
        label: "Vietnam National Electronic Visa system",
        href: "https://evisa.gov.vn/",
      },
    ],
  },
};
