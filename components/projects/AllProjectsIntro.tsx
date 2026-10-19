
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

const projectImages = [
  {
    src: "/images/projects/dholera-market.jpg",
    alt: "Dholera Smart City market and commercial development",
    className: "col-start-1 row-start-1",
  },
  {
    src: "/images/projects/dholera-commercial.jpg",
    alt: "Dholera commercial development",
    className: "col-start-1 row-start-2",
  },
  {
    src: "/images/projects/dholera-sports.jpg",
    alt: "Dholera sports and recreation development",
    className: "col-start-1 row-start-3",
  },
  {
    src: "/images/projects/dholera-city.jpg",
    alt: "Dholera Smart City development",
    className: "col-start-2 row-start-1 row-span-2",
  },
  {
    src: "/images/projects/dholera-residential.jpg",
    alt: "Residential property development in Dholera",
    className: "col-start-2 row-start-3",
  },
];

export default function AllProjectsIntro() {
  return (
    <section className="overflow-hidden bg-brand py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8 xl:gap-16">

        {/* LEFT CONTENT */}
        <div className="max-w-[560px]">
          <p className="text-sm font-semibold text-accent sm:text-base">
            Dholera Smart City
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl xl:text-[42px]">
            India&apos;s PM Narendra Modi&apos;s Dream Project
          </h1>

          <p className="mt-5 text-sm leading-7 text-white/85 sm:text-[15px]">
            Dholera Smart City is a major project under the DMIC Project
            with an aim to make it a global manufacturing hub supported by
            world-class infrastructure. Dholera is India&apos;s first SIR
            within the high-impact Delhi-Mumbai Industrial Corridor (DMIC).
            The vision of Dholera&apos;s development plan focuses on creating
            an environment that supports industries, enhances investment
            opportunities, improves quality of life, upgrades human skills
            and attracts global investment.
          </p>

          <a
            href="/documents/dholera-project-brochure.pdf"
            download
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-hover"
          >
            <Download size={17} />
            Download PDF
          </a>
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className="grid grid-cols-2 grid-rows-[repeat(3,minmax(110px,1fr))] gap-3 sm:grid-rows-[repeat(3,minmax(145px,1fr))] sm:gap-5 lg:min-h-[480px]">
          {projectImages.map((item) => (
            <div
              key={item.src}
              className={`group relative min-h-[110px] overflow-hidden rounded-xl bg-primary-light sm:min-h-[145px] ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 639px) 45vw, (max-width: 1023px) 45vw, 28vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
