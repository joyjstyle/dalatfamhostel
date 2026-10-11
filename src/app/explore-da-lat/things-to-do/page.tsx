import type { Metadata } from "next";
import {
  ThingsToDoPage,
  thingsToDoMetadata,
} from "@/components/pages/explore-da-lat-guides";

export const metadata: Metadata = thingsToDoMetadata;

export default function ThingsToDoRoute() {
  return <ThingsToDoPage />;
}
