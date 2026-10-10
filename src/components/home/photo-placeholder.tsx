import { Camera } from "lucide-react";

export function PhotoPlaceholder({
  subject,
  number,
  className = "",
  tone = "blue",
}: {
  subject: string;
  number: string;
  className?: string;
  tone?: "blue" | "red" | "cream";
}) {
  return (
    <figure className={`photo-placeholder photo-${tone} ${className}`}>
      <div className="photo-scene" aria-hidden="true">
        <div className="scene-sun" />
        <div className="scene-hill scene-hill-back" />
        <div className="scene-hill scene-hill-front" />
        <Camera className="scene-camera" size={30} strokeWidth={1} />
      </div>
      <div className="photo-topline">
        <span>THE FAMILY JOURNAL</span>
        <span>{number}</span>
      </div>
      <figcaption>
        <span className="photo-label">Development photo placeholder</span>
        <span className="photo-subject">{subject}</span>
      </figcaption>
    </figure>
  );
}
