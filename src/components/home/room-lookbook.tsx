"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { PhotoAsset } from "./photo-gallery";

export function RoomLookbook({
  photos,
}: {
  photos: PhotoAsset[];
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedPhoto =
    selectedIndex === null ? null : photos[selectedIndex];

  useEffect(() => {
    if (selectedIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex]);

  const close = () => dialog.current?.close();

  return (
    <>
      <div
        className="photo-gallery room-photo-gallery"
        role="region"
        aria-label="Room photo lookbook. Scroll horizontally to browse all 13 room images."
        tabIndex={0}
      >
        {photos.map((photo, index) => (
          <figure className="photo-gallery-item" key={photo.src}>
            <button
              type="button"
              className="room-lookbook-trigger"
              aria-label={`Expand ${photo.caption}`}
              onClick={() => {
                setSelectedIndex(index);
                dialog.current?.showModal();
              }}
            >
              <span className="photo-gallery-image">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 767px) 78vw, (max-width: 1023px) 42vw, 38vw"
                />
              </span>
            </button>
            <figcaption>
              <span className="photo-gallery-count">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </span>
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="room-image-dialog"
        aria-labelledby="room-image-dialog-caption"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onClose={() => setSelectedIndex(null)}
      >
        {selectedPhoto && (
          <div className="room-image-dialog-panel">
            <div className="room-image-dialog-toolbar">
              <p id="room-image-dialog-caption">{selectedPhoto.caption}</p>
              <button
                type="button"
                autoFocus
                className="room-image-dialog-close"
                aria-label="Close expanded room photo"
                onClick={close}
              >
                <X aria-hidden="true" size={24} />
              </button>
            </div>
            <div className="room-image-dialog-media">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="94vw"
              />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
