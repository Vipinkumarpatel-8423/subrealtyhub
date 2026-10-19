
"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { locationAdvantages } from "@/data/gallery";
import ImageLightbox from "@/components/gallery/ImageLightbox";

export default function PrimeLocationAdvantages() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const changeImage = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        <div className="mb-8 text-center sm:mb-10">
          <p className="text-sm font-semibold text-accent sm:text-base">
            Prime Location Advantages
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand sm:text-3xl">
            Connected to Tomorrow&apos;s Opportunities
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {locationAdvantages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${image.title}`}
              className="group min-w-0 text-left"
            >
              <div className="relative aspect-[1.6/1] overflow-hidden rounded-xl bg-light-bg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 46vw, (max-width: 1023px) 45vw, 31vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand/0 transition-colors duration-300 group-hover:bg-brand/10" />
              </div>

              <p className="mt-3 text-center text-xs font-medium leading-5 text-brand transition-colors group-hover:text-accent sm:text-sm">
                {image.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <ImageLightbox
          images={locationAdvantages}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onChange={changeImage}
        />
      )}
    </section>
  );
}
