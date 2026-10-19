
import Image from "next/image";
import { galleryHeroImages } from "@/data/gallery";

export default function GalleryHero() {
  const images = galleryHeroImages;

  return (
    <section className="overflow-hidden bg-brand py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">

          {images.map((image, index) => {
            const layout = [
              "col-start-1 row-start-1",
              "col-start-2 row-start-1 lg:col-start-2",
              "col-start-1 row-start-2 lg:col-start-3 lg:row-start-1 lg:row-span-2",
              "col-start-1 row-start-3 lg:row-start-2",
              "col-start-2 row-start-2 lg:col-start-2 lg:row-start-2",
              "col-start-2 row-start-3 lg:col-start-3 lg:row-start-3",
            ];

            return (
              <div
                key={image.src}
                className={`group relative min-h-[125px] overflow-hidden rounded-xl bg-primary-light sm:min-h-[180px] lg:min-h-[190px] ${layout[index]}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 46vw, (max-width: 1023px) 45vw, 32vw"
                  priority={index < 2}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
