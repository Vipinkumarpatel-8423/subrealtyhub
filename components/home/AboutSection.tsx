"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Play, X, ArrowRight } from "lucide-react";

import { heroVideoUrl } from "@/data/hero";

export default function AboutSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  /*
   * Prevent background scroll when video modal is open
   */
  useEffect(() => {
    if (videoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [videoOpen]);

  /*
   * Convert YouTube URL into Embed URL
   */
  const getYoutubeEmbedUrl = (url: string) => {
    try {
      const parsedUrl = new URL(url);

      let videoId = "";

      if (parsedUrl.hostname.includes("youtu.be")) {
        videoId = parsedUrl.pathname.replace("/", "");
      } else if (parsedUrl.hostname.includes("youtube.com")) {
        videoId = parsedUrl.searchParams.get("v") || "";

        if (!videoId && parsedUrl.pathname.includes("/shorts/")) {
          videoId = parsedUrl.pathname.split("/shorts/")[1];
        }

        if (!videoId && parsedUrl.pathname.includes("/embed/")) {
          videoId = parsedUrl.pathname.split("/embed/")[1];
        }
      }

      if (!videoId) {
        return "";
      }

      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    } catch {
      return "";
    }
  };

  const youtubeEmbedUrl = getYoutubeEmbedUrl(heroVideoUrl);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#fffaf5] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1350px] px-5 sm:px-7 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 xl:gap-20">

            {/* =====================================================
                LEFT IMAGE AREA
            ====================================================== */}
            <div className="relative mx-auto w-full max-w-[560px]">

              {/* Decorative Border */}
              <div className="absolute -left-3 -top-3 h-[calc(100%-20px)] w-[calc(100%-30px)] rounded-xl border border-brand/10 sm:-left-5 sm:-top-5" />

              {/* Image Link */}
              <Link
                href="/about/"
                aria-label="Learn more about SAB Realty Hub"
                className="group relative z-10 block overflow-hidden rounded-[18px]"
              >
                <div className="relative aspect-[0.92/1] w-full overflow-hidden rounded-[18px] bg-brand/5">

                  <Image
                    src="/images/about/about-real-estate.jpg"
                    alt="SAB Realty Hub Real Estate"
                    fill
                    priority={false}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-brand/0 transition-all duration-500 group-hover:bg-brand/10" />

                </div>
              </Link>

              {/* =================================================
                  VIDEO CIRCLE
              ================================================== */}
              <div className="absolute right-[-5px] top-5 z-30 sm:right-[-10px] sm:top-6 lg:right-[-15px] lg:top-5">

                <button
  type="button"
  onClick={() => setVideoOpen(true)}
  aria-label="Play SAB Realty Hub video"
  className="about-video-button group relative flex h-[145px] w-[145px] items-center justify-center rounded-full sm:h-[165px] sm:w-[165px] lg:h-[180px] lg:w-[180px]"
>
  {/* =================================================
      ROTATING TEXT
  ================================================== */}
  <div className="about-rotating-text absolute inset-0 z-10">
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <path
          id="aboutCirclePath"
          d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
          fill="none"
        />
      </defs>

      <text
        fill="white"
        // fontSize="20"
        fontWeight="600"
        letterSpacing="2"
        className="text-[15px] sm:text-[17px] lg:text-[19px] "
      >
        <textPath href="#aboutCirclePath">
          SAB : A Group Of Realty Hub •
        </textPath>
      </text>
    </svg>
  </div>

  {/* =================================================
      ORANGE BACKGROUND
  ================================================== */}
  <span
    className="
      absolute
      inset-[8px]
      z-0
      rounded-full
      bg-accent
      shadow-xl
      transition-transform
      duration-500
      group-hover:scale-105
    "
  />

  {/* =================================================
      PLAY BUTTON
  ================================================== */}
  <span
    className="
      relative
      z-20
      flex
      h-[62px]
      w-[62px]
      items-center
      justify-center
      rounded-full
      bg-white
      text-accent
      shadow-md
      transition-all
      duration-300
      group-hover:scale-110
      sm:h-[68px]
      sm:w-[68px]
      lg:h-[72px]
      lg:w-[72px]
    "
  >
    <Play
      size={25}
      fill="currentColor"
      strokeWidth={0}
      className="ml-1"
    />
  </span>
</button>
              </div>

              {/* Decorative Bottom Shape */}
              <div className="absolute bottom-0 left-1/2 z-20 hidden h-[135px] w-[100px] -translate-x-1/2 rounded-t-[50px] bg-[#fffaf5] sm:block" />

            </div>

            {/* =====================================================
                RIGHT CONTENT
            ====================================================== */}
            <div className="relative z-10">

              {/* Phone */}
              <div className="mb-7 text-left lg:text-right">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent sm:text-base">
                  CALL NOW:{" "}
                  <a
                    href="tel:+919896152870"
                    className="transition-opacity hover:opacity-70"
                  >
                    +91 9896152870
                  </a>
                  {" , "}
                  <a
                    href="tel:+919466097007"
                    className="transition-opacity hover:opacity-70"
                  >
                    +91 9466097007
                  </a>
                </p>
              </div>

              {/* Small Heading */}
              <p className="text-sm font-semibold text-accent sm:text-base">
                About Us
              </p>

              {/* Main Heading */}
              <div className="mt-2 flex items-center gap-3">
                <h2 className="text-2xl font-bold tracking-tight text-brand sm:text-3xl lg:text-[27px]">
                  SAB : A Group Of Realty Hub
                </h2>

                <ArrowRight
                  size={30}
                  strokeWidth={1.6}
                  className="shrink-0 rotate-[-35deg] text-accent"
                />
              </div>

              {/* Description */}
              <p className="mt-5 max-w-[650px] text-sm leading-7 text-gray-500 sm:text-[15px] sm:leading-7 lg:text-base">
                Sab Realty Hub is a trusted real estate company in Kaithal,
                offering transparent property solutions, expert guidance,
                and reliable deals to help clients find the right homes
                and investments confidently.
              </p>

              {/* Features */}
              <div className="mt-7 space-y-4">

                <AboutFeature>
                  Trusted Kaithal Realtors
                </AboutFeature>

                <AboutFeature>
                  Transparent Property Deals
                </AboutFeature>

                <AboutFeature>
                  Expert Market Guidance
                </AboutFeature>

              </div>

              {/* CTA */}
              <div className="mt-9">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                >
                  <span>Contact Us</span>

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            BOTTOM DECORATIVE LINES
        ====================================================== */}
        <div className="pointer-events-none absolute bottom-0 right-5 hidden opacity-40 lg:block xl:right-10">

          <div className="relative h-[100px] w-[110px]">

            <span className="absolute bottom-0 right-0 h-[70px] w-[70px] rotate-[-30deg] border border-brand/40" />

            <span className="absolute bottom-0 right-2 h-[70px] w-[70px] rotate-[-30deg] border border-brand/30 translate-x-3" />

            <span className="absolute bottom-0 right-4 h-[70px] w-[70px] rotate-[-30deg] border border-brand/20 translate-x-6" />

          </div>
        </div>

      </section>

      {/* =====================================================
          YOUTUBE VIDEO MODAL
      ====================================================== */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-[1000px]"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
              className="absolute -right-1 -top-12 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white transition-all duration-300 hover:bg-accent-hover sm:-right-12 sm:top-0"
            >
              <X size={19} />
            </button>

            {/* Video */}
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">

              {youtubeEmbedUrl ? (
                <iframe
                  src={youtubeEmbedUrl}
                  title="SAB Realty Hub Video"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full items-center justify-center px-5 text-center text-white">
                  <p>
                    Please add a valid YouTube video URL in{" "}
                    <span className="text-accent">
                      hero.ts
                    </span>
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}


/* =========================================================
   FEATURE ITEM
========================================================= */

function AboutFeature({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="group flex items-center gap-3">

      <ArrowRight
        size={21}
        strokeWidth={1.8}
        className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
      />

      <span className="text-base font-medium text-brand sm:text-lg">
        {children}
      </span>

    </div>
  );
}