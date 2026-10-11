import Image from "next/image";

export type PhotoAsset = {
  src: string;
  alt: string;
  caption: string;
};

export function PhotoGallery({
  photos,
  className = "",
  hideCaptions = false,
}: {
  photos: PhotoAsset[];
  className?: string;
  hideCaptions?: boolean;
}) {
  return (
    <div className={`photo-gallery ${className}`}>
      {photos.map((photo) => (
        <figure className="photo-gallery-item" key={photo.src}>
          <div className="photo-gallery-image">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={
                className.includes("shared-photo-gallery")
                  ? "(max-width: 767px) 20vw, 12vw"
                  : "(max-width: 767px) 46vw, (max-width: 1023px) 30vw, 22vw"
              }
            />
          </div>
          {!hideCaptions && <figcaption>{photo.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
