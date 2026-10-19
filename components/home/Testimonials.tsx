
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const ITEMS_PER_PAGE = 2;

export default function Testimonials() {
  const [activePage, setActivePage] = useState(0);

  const totalPages = Math.ceil(
    testimonials.length / ITEMS_PER_PAGE
  );

  const visibleTestimonials = testimonials.slice(
    activePage * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="w-full overflow-hidden bg-[#fff8f2] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-accent sm:text-base">
            Testimonials
          </p>

          <div className="mt-2 flex items-center justify-center gap-2">
            <h2 className="text-xl font-semibold tracking-tight text-brand sm:text-2xl">
              Our Clients Feedback
            </h2>

            <ArrowUpRight
              size={27}
              strokeWidth={1.6}
              className="mt-1 -rotate-45 text-accent"
            />
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
          {visibleTestimonials.map((item) => (
            <article
              key={item.id}
              className="group flex min-w-0 flex-col justify-between rounded-2xl bg-brand p-6 text-white transition-transform duration-300 hover:-translate-y-1 sm:p-7 lg:min-h-[294px] lg:p-8"
            >
              <div>
                {/* Rating */}
                <div
                  className="flex items-center gap-1"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={21}
                      fill="var(--accent)"
                      stroke="var(--accent)"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="mt-5 text-base leading-7 text-white sm:text-[17px] sm:leading-8">
                  “{item.feedback}”
                </p>
              </div>

              {/* Customer information */}
              <div className="mt-7 flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="58px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-base font-bold text-white sm:text-lg">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-white/85">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Quote decoration */}
                <Quote
                  size={43}
                  strokeWidth={0}
                  fill="var(--accent)"
                  className="shrink-0 rotate-180 text-accent"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Pagination indicators */}
        {totalPages > 1 && (
          <div
            className="mt-10 flex items-center justify-center gap-3 md:justify-start md:pl-1"
            aria-label="Testimonial pages"
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActivePage(index)}
                aria-label={`Show testimonial page ${index + 1}`}
                aria-current={activePage === index ? "true" : undefined}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  activePage === index
                    ? "w-12 bg-accent"
                    : "w-12 bg-brand/15 hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
