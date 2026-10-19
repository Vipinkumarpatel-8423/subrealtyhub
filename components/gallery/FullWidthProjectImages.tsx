
import Image from "next/image";
import { fullWidthProjectImages } from "@/data/gallery";

interface FullWidthProjectImagesProps {
  className?: string;
}

export default function FullWidthProjectImages({
  className = "",
}: FullWidthProjectImagesProps) {
  return (
    <section
      className={`bg-background py-8 sm:py-12 ${className}`}
    >
      <div className="mx-auto max-w-[1400px] space-y-5 px-4 sm:space-y-7 sm:px-6 lg:px-8">
        {fullWidthProjectImages.map((image) => (
          <figure
            key={image.src}
            className="relative w-full overflow-hidden rounded-xl bg-light-bg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1600}
              height={1000}
              sizes="100vw"
              className="h-auto w-full object-contain"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
