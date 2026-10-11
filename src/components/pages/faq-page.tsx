import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";

export const faqMetadata: Metadata = {
  title: {
    absolute: "Dalat Family Hostel FAQ | Stay, Activities & Da Lat Travel Tips",
  },
  description:
    "Find answers about staying at Dalat Family Hostel, check-in, activities, transport, getting around Da Lat and planning your visit.",
};

const faqGroups = [
  {
    title: "Staying at Dalat Family Hostel",
    id: "staying",
    questions: [
      {
        question: "What time is check-in and check-out?",
        answer:
          "Check-in begins from 2:00 PM, and check-out is before 12:00 PM. If you are arriving early or leaving later, speak to the team and we will do our best to help with your plans.",
      },
      {
        question: "Is reception open 24 hours?",
        answer:
          "Yes. Our reception is open 24 hours, so you can arrive with peace of mind—even after a long sleeper-bus journey.",
      },
      {
        question: "Is Wi-Fi available?",
        answer: "Yes, free Wi-Fi is available at the hostel.",
      },
      {
        question: "Is breakfast included?",
        answer:
          "Breakfast is not included. Da Lat has plenty of great local breakfast spots, cafés and market food to discover nearby.",
      },
      {
        question: "Is the hostel close to Da Lat city centre?",
        answer:
          "Dalat Family Hostel is around 1.4 km from the city centre. It is close enough to reach cafés, food, the lake and nightlife easily, while still giving you a more local Da Lat feel.",
      },
      {
        question: "Can the hostel help arrange an airport transfer?",
        answer:
          "Yes. Airport transfers are available—ask the team in advance so we can help make your arrival smooth.",
      },
    ],
  },
  {
    title: "Experiences & Social Nights",
    id: "experiences",
    questions: [
      {
        question: "What activities can I join at the hostel?",
        answer:
          "Our schedule can include Family Dinner, canyoning tours, pub crawls, beer pong, karaoke and other social experiences. Activities vary by date, weather and availability, so check with the team when you arrive.",
      },
      {
        question: "Do I need to book activities in advance?",
        answer:
          "For popular activities, especially canyoning and day tours, it is a good idea to ask early. Our team can let you know what is happening during your stay and help you plan.",
      },
      {
        question: "Can solo travellers join activities?",
        answer:
          "Absolutely. That is what they are for. Our dinners, social nights and tours are an easy way to meet fellow travellers without needing to arrive with a group.",
      },
      {
        question: "Is canyoning suitable for beginners?",
        answer:
          "Canyoning is an adventurous activity and can include rappelling, swimming, climbing and natural slides. Choose a professionally run experience, follow every safety briefing and be honest about your comfort level before booking.",
      },
    ],
  },
  {
    title: "Getting Here & Getting Around",
    id: "getting-around",
    questions: [
      {
        question: "How do I get to Dalat Family Hostel from the airport?",
        answer:
          "Lien Khuong Airport is outside central Da Lat. You can arrange an airport transfer, take a taxi or book a private car. Save the hostel address in Vietnamese before you travel for an easier arrival.",
      },
      {
        question: "How do I get to the hostel from the bus station?",
        answer:
          "Most travellers take a taxi, ride-hailing car or pre-arranged pickup from the Da Lat bus station. If you arrive early after a sleeper bus, message us in advance about storing your bags.",
      },
      {
        question: "Can I explore Da Lat on foot?",
        answer:
          "Central Da Lat is great for walking, especially around Xuan Huong Lake, the market and nearby cafés. For waterfalls, farms and viewpoints farther out, use a taxi, private car, scooter or organised day tour.",
      },
      {
        question: "Should I rent a scooter in Da Lat?",
        answer:
          "Only if you are properly licensed, experienced and confident. Da Lat has steep, winding roads, and rain or fog can make conditions more challenging. Taxis, ride-hailing and tours are excellent alternatives.",
      },
    ],
  },
  {
    title: "Planning Your Da Lat Trip",
    id: "planning",
    questions: [
      {
        question: "How many days should I spend in Da Lat?",
        answer:
          "Three days is ideal for a first visit. It gives you time for the city, a countryside or waterfall day, and one memorable experience such as canyoning or cloud hunting.",
      },
      {
        question: "What is the best time to visit Da Lat?",
        answer:
          "Da Lat is enjoyable throughout the year. The drier months are popular for outdoor adventures and clear views, while wetter months bring green scenery, mist and cosy café weather. Bring layers whenever you visit—Da Lat evenings can feel cool.",
      },
      {
        question: "What should I pack for Da Lat?",
        answer:
          "Bring comfortable shoes, a light rain layer, sun protection and something warm for the evening. If you plan to join outdoor activities, pack swimwear and a change of clothes too.",
      },
      {
        question: "Can you help me plan my time in Da Lat?",
        answer:
          "Of course. Tell us what you enjoy—waterfalls, coffee, food, adventure, culture or slow mornings—and we will help you make the most of your stay.",
      },
    ],
  },
] as const;

export function FaqPage() {
  return (
    <main className="faq-page">
      <section className="explore-guide-hero faq-hero" aria-labelledby="faq-title">
        <Image
          src="/images/explore-da-lat/dalat-city-panorama.jpg"
          alt="Da Lat rooftops and pine-covered hills at dusk"
          fill
          priority
          sizes="100vw"
          className="explore-guide-hero-image"
        />
        <Container className="explore-guide-hero-content">
          <nav
            className="page-breadcrumbs explore-guide-breadcrumbs"
            aria-label="Breadcrumb"
          >
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">FAQs</span>
          </nav>
          <p className="eyebrow">A few helpful answers</p>
          <h1 id="faq-title">Frequently Asked Questions</h1>
          <p className="explore-guide-hero-intro">
            Everything you need to know before you arrive—plus a few things
            that will make your Da Lat adventure easier.
          </p>
          <div className="explore-guide-actions">
            <Link className="button button-primary" href="#faq-questions">
              Browse the FAQs <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link
              className="button explore-guide-hero-secondary"
              href="/plan-your-stay/contact"
            >
              Contact the family <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <p className="faq-hero-note">
            Still have a question? Our team is always happy to help. Come say
            hello when you arrive.
          </p>
        </Container>
        <a
          className="faq-image-credit"
          href="https://commons.wikimedia.org/wiki/File:Da_Lat_-_Viet_Nam.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Da Lat - Viet Nam · Tuong Lam Photos · CC BY-SA 4.0
        </a>
      </section>

      <Container className="faq-main" id="faq-questions">
        <div className="faq-intro">
          <p className="eyebrow">Good to know before you go</p>
          <h2>Make the most of your time in Da Lat.</h2>
          <p>
            From your first night at the hostel to your last day in the
            highlands, here are a few practical details to help you feel ready.
          </p>
        </div>

        <div className="faq-groups">
          {faqGroups.map((group) => (
            <section
              className="faq-group"
              id={group.id}
              aria-labelledby={`${group.id}-heading`}
              key={group.id}
            >
              <div className="faq-group-heading">
                <p className="eyebrow">Questions & answers</p>
                <h2 id={`${group.id}-heading`}>{group.title}</h2>
              </div>
              <div className="faq-questions">
                {group.questions.map(({ question, answer }) => (
                  <details className="faq-item" key={question}>
                    <summary>
                      <span>{question}</span>
                      <ChevronDown aria-hidden="true" size={20} />
                    </summary>
                    <div className="faq-answer">
                      <p>{answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="faq-cta" aria-labelledby="faq-cta-title">
          <div>
            <p className="eyebrow">We are here to help</p>
            <h2 id="faq-cta-title">Still have a question?</h2>
            <p>
              Send us a message or ask the family when you arrive. We are here
              to help you have an unforgettable Da Lat stay.
            </p>
          </div>
          <Link className="button button-primary" href="/plan-your-stay/contact">
            Contact Dalat Family Hostel{" "}
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </section>
      </Container>
    </main>
  );
}
