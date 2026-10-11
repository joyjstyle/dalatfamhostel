import type { Metadata } from "next";
import {
  GuidesHub,
  guidesMetadata,
} from "@/components/pages/guides-hub";

export const metadata: Metadata = guidesMetadata;

export default function GuidesPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string | string[];
    topic?: string | string[];
  }>;
}) {
  return <GuidesHub searchParams={searchParams} />;
}
