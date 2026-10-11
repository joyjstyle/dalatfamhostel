import type { Metadata } from "next";
import { StayPage, stayMetadata } from "@/components/pages/stay-page";

export const metadata: Metadata = stayMetadata;

export default function StayRoute() {
  return <StayPage />;
}
