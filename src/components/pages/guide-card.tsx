import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import {
  getTravelGuidePath,
  type TravelGuide,
} from "@/content/guides";

export function GuideCard({
  guide,
  index,
}: {
  guide: TravelGuide;
  index?: number;
}) {
  return (
    <article className="guide-list-card">
      {index !== undefined && (
        <span className="guide-list-number" aria-hidden="true">
          {String(index).padStart(2, "0")}
        </span>
      )}
      <div className="guide-list-copy">
        <p className="guide-card-category">{guide.category}</p>
        <h3>
          <Link href={getTravelGuidePath(guide)}>{guide.title}</Link>
        </h3>
        <p>{guide.description}</p>
        <span className="guide-list-reading">
          <Clock3 aria-hidden="true" size={14} />
          {guide.readingTime} min read
        </span>
      </div>
      <Link
        className="guide-list-arrow"
        href={getTravelGuidePath(guide)}
        aria-label={`Read ${guide.title}`}
      >
        <ArrowUpRight aria-hidden="true" size={19} />
      </Link>
    </article>
  );
}
