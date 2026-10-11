import type { Metadata } from "next";
import { FaqPage, faqMetadata } from "@/components/pages/faq-page";

export const metadata: Metadata = faqMetadata;

export default function FaqRoute() {
  return <FaqPage />;
}
