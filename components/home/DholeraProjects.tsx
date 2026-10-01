"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { dholeraProjects } from "@/data/dholeraProjects";

export default function DholeraProjects() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-7 lg:px-8">

        {/* =================================
            SECTION HEADING
        ================================= */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">

          <p className="mb-2 text-xs font-semibold text-accent sm:text-sm">
            Our Projects
          </p>

          <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-brand sm:text-3xl lg:text-[32px]">
              Dholera Smart City Project
            </h2>

            <ArrowUpRight
              size={30}
              strokeWidth={1.7}
              className="mt-1 text-accent"
            />
          </div>
        </div>

        {/* =================================
            PROJECT GRID
        ================================= */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {dholeraProjects.map((project) => (
            <Link
              key={project.id}
              href={`/dholera/${project.slug}`}
              className="group block"
            >
              {/* =========================
                  IMAGE
              ========================== */}
              <div className="relative aspect-[1.55/1] w-full overflow-hidden bg-brand/5">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand/0 transition-all duration-500 group-hover:bg-brand/15" />

                {/* Arrow */}
                <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-brand opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:rotate-6"
                  />
                </div>
              </div>

              {/* =========================
                  TITLE
              ========================== */}
              <div className="px-2 pt-5 text-center sm:px-3">

                <h3 className="text-[17px] font-bold leading-[1.35] text-brand transition-colors duration-300 group-hover:text-accent sm:text-lg">
                  {project.title}
                </h3>

                {/* Small hover line */}
                <span className="mx-auto mt-3 block h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-12" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}