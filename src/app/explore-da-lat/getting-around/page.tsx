import type { Metadata } from "next";
import {
  GettingAroundPage,
  gettingAroundMetadata,
} from "@/components/pages/explore-da-lat-guides";

export const metadata: Metadata = gettingAroundMetadata;

export default function GettingAroundRoute() {
  return <GettingAroundPage />;
}
