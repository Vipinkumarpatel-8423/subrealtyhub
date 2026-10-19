
"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";

interface ImageLightboxProps {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function ImageLightbox({
  images,
  activeIndex,
  onClose,
  onChange,
}: ImageLightboxProps) {
  const currentImage = images[activeIndex];

  const previous = useCallback(() => {
    onChange((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onChange]);

  const next = useCallback(() => {
    onChange((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onChange]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, previous, next]);

  if (!currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent sm:right-6 sm:top-6"
      >
        <X size={23} />
      </button>

      {/* Previous */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            previous();
          }}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-accent sm:left-6 sm:h-12 sm:w-12"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Main image */}
      <div
        className="relative flex h-[75vh] w-full max-w-[1200px] flex-col items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative min-h-0 w-full flex-1">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="100vw"
            priority
            className="object-contain"
          />
        </div>

        <div className="pt-4 text-center">
          <p className="text-sm font-semibold text-white sm:text-base">
            {currentImage.title}
          </p>
          <p className="mt-1 text-xs text-white/65">
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            next();
          }}
          aria-label="Next image"
          className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-accent sm:right-6 sm:h-12 sm:w-12"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </div>
  );
}
