"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { PhotoAsset } from "./photo-gallery";

export function SharedSpaceGallery({ photos }: { photos: PhotoAsset[] }) {
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
      <div className="photo-gallery shared-photo-gallery">
        {photos.map((photo, index) => (
          <figure className="photo-gallery-item" key={photo.src}>
            <button
              type="button"
              className="photo-gallery-reveal"
              aria-label={`Expand shared-space photo: ${photo.alt}`}
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
                  sizes="(max-width: 767px) 20vw, 12vw"
                />
              </span>
            </button>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="room-image-dialog"
        aria-label={
          selectedPhoto
            ? `Expanded photo: ${selectedPhoto.alt}`
            : "Expanded shared-space photo"
        }
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onClose={() => setSelectedIndex(null)}
      >
        {selectedPhoto && (
          <div className="room-image-dialog-panel">
            <div className="room-image-dialog-toolbar">
              <button
                type="button"
                autoFocus
                className="room-image-dialog-close"
                aria-label="Close expanded shared-space photo"
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
