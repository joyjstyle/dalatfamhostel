import { Camera } from "lucide-react";
import Image from "next/image";

export function PhotoPlaceholder({
  subject,
  number,
  className = "",
  tone = "blue",
  imageSrc,
  imageAlt = subject,
  imageLabel = "Photograph",
  priority = false,
}: {
  subject: string;
  number: string;
  className?: string;
  tone?: "blue" | "red" | "cream";
  imageSrc?: string;
  imageAlt?: string;
  imageLabel?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`photo-placeholder photo-${tone} ${className}`}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 767px) 100vw, 50vw"
          className="photo-placeholder-image"
        />
      ) : (
        <div className="photo-scene" aria-hidden="true">
          <div className="scene-sun" />
          <div className="scene-hill scene-hill-back" />
          <div className="scene-hill scene-hill-front" />
          <Camera className="scene-camera" size={30} strokeWidth={1} />
        </div>
      )}
      <div className="photo-topline">
        <span>THE FAMILY JOURNAL</span>
        <span>{number}</span>
      </div>
      <figcaption>
        <span className="photo-label">
          {imageSrc ? imageLabel : "Development photo placeholder"}
        </span>
        <span className="photo-subject">{subject}</span>
      </figcaption>
    </figure>
  );
}
