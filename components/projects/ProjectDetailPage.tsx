import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import type { DholeraProject } from "@/data/dholeraProjects";

interface Props {
  project: DholeraProject;
}

export default function ProjectDetailPage({ project }: Props) {
  const heroImages = project.heroImages?.length
    ? project.heroImages
    : [{ src: project.image, alt: project.title }];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-7 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-8 lg:py-20">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-accent sm:text-sm">
              {project.title}
            </p>

            <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              {project.description}
            </p>

            {project.introduction?.map((paragraph, index) => (
              <p
                key={index}
                className="mt-4 max-w-2xl text-sm leading-7 text-white/75"
              >
                {paragraph}
              </p>
            ))}

            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-5 space-y-2">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-6 text-white/85"
                  >
                    <ArrowRight
                      size={16}
                      className="mt-1 shrink-0 text-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Enquire About Project
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Responsive image collage */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {heroImages.slice(0, 4).map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className={`relative overflow-hidden rounded-xl bg-white/10 ${
                  index === 0
                    ? "col-span-1 aspect-[1.15/1]"
                    : index === 1
                      ? "aspect-[1.15/1]"
                      : "aspect-[1.4/1]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 28vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIME LOCATION ADVANTAGES */}
      {project.advantages && project.advantages.length > 0 && (
        <section className="bg-light-bg px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="mb-8 text-center text-2xl font-bold text-accent sm:text-3xl">
              Prime Location Advantages
            </h2>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {/* {project.advantages.map((item) => (
                <figure key={item.src} className="min-w-0"> */}
              {project.advantages.map((item, index) => (
                <figure key={`${item.src}-${index}`} className="min-w-0">
                  <div className="relative aspect-[1.8/1] overflow-hidden rounded-xl bg-border">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <figcaption className="mt-2 text-center text-xs leading-5 text-brand-grey sm:text-sm">
                    {item.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROJECT OVERVIEW */}
      {project.overview && project.overview.length > 0 && (
        <section className="bg-background px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="mb-7 text-center text-2xl font-bold text-accent sm:text-3xl">
              Project Overview
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.overview.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                    <MapPin size={16} />
                    {item.label}
                  </div>
                  <p className="mt-2 break-words text-sm leading-6 text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DETAIL SECTIONS */}
      {project.sections && project.sections.length > 0 && (
        <section className="bg-light-bg px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <article className="mx-auto max-w-[1100px]">
            <h2 className="mb-7 text-center text-2xl font-bold text-accent sm:text-3xl">
              Why Invest in {project.title}?
            </h2>

            {project.sections.map((section, index) => (
              <div
                key={section.title}
                className="border-b border-border py-5 last:border-b-0 sm:py-6"
              >
                <h3 className="text-lg font-bold text-brand">
                  {index + 1}. {section.title}
                </h3>

                {section.description && (
                  <p className="mt-3 text-sm leading-7 text-brand-grey">
                    {section.description}
                  </p>
                )}

                {section.points && section.points.length > 0 && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-brand-grey marker:text-accent">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>
        </section>
      )}

      {/* MASTER PLAN / SUPPORTING IMAGES */}
      {project.masterPlanImages && project.masterPlanImages.length > 0 && (
        <section className="bg-background px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="mb-8 text-center text-2xl font-bold text-accent sm:text-3xl">
              Project Plans &amp; Documents
            </h2>

            {/* <div className="space-y-6">
                {project.masterPlanImages.map((item) => (
                  <figure
                    key={item.src}
                    className="relative mx-auto w-full max-w-[1000px] overflow-hidden rounded-xl border border-border bg-light-bg"
                  > */}
            <div className="space-y-6">
              {project.masterPlanImages.map((item, index) => (
                <figure
                  key={`${item.src}-${index}`}
                  className="relative mx-auto w-full max-w-[1000px] overflow-hidden rounded-xl border border-border bg-light-bg"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1400}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, 1000px"
                    className="h-auto w-full object-contain"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      <section className="bg-brand px-4 py-12 text-center text-white sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Interested in {project.title}?
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base">
            Contact SAB Realty Hub for project information and assistance.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
