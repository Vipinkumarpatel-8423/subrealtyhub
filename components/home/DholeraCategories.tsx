"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { dholeraCategories } from "@/data/dholeraCategories";

export default function DholeraCategories() {
  const pathname = usePathname();

  return (
    <section className="relative w-full overflow-hidden bg-brand py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-7 lg:px-8">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[2.5px] text-accent sm:text-xs">
            SAB A GROUP OF REALTY HUB
          </p>

          <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[32px]">
              Discover Dholera Smart City
            </h2>

            <ArrowUpRight
              size={28}
              strokeWidth={1.8}
              className="mt-1 text-accent sm:h-8 sm:w-8"
            />
          </div>
        </div>

        {/* =========================
            CATEGORY CARDS
        ========================== */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-7">
          {dholeraCategories.map((category) => {
            const Icon = category.icon;

            const href = `/dholera/${category.slug}`;

            const isActive = pathname === href;

            return (
              <Link
                key={category.id}
                href={href}
                aria-label={`Explore ${category.title}`}
                className={`group relative flex min-h-[225px] flex-col items-center justify-center rounded-[20px] border p-6 text-center transition-all duration-500 ease-out sm:min-h-[240px] lg:min-h-[225px] ${
                  isActive
                    ? "border-accent bg-white/[0.02]"
                    : "border-white/15 bg-transparent hover:-translate-y-1 hover:border-accent hover:bg-white/[0.025]"
                }`}
              >
                {/* Hover Glow */}
                <span
                  className={`pointer-events-none absolute inset-0 rounded-[20px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    isActive ? "opacity-100" : ""
                  }`}
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255,255,255,0.04), transparent 65%)",
                  }}
                />

                {/* =========================
                    ICON
                ========================== */}
                <div
                  className={`relative z-10 mb-7 flex h-[82px] w-[82px] items-center justify-center rounded-[20px] border transition-all duration-500 ${
                    isActive
                      ? "border-accent text-accent"
                      : "border-white/15 text-white group-hover:border-accent group-hover:text-accent"
                  }`}
                >
                  <Icon
                    size={45}
                    strokeWidth={1.5}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* =========================
                    TITLE
                ========================== */}
                <h3
                  className={`relative z-10 text-xl font-bold tracking-tight transition-colors duration-300 sm:text-[21px] ${
                    isActive
                      ? "text-accent"
                      : "text-white group-hover:text-accent"
                  }`}
                >
                  {category.title}
                </h3>

                {/* =========================
                    SMALL ARROW
                ========================== */}
                <span className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/40 opacity-0 transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:opacity-100">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}