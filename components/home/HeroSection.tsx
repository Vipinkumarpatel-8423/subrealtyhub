"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

import { heroSlides, heroVideoUrl } from "@/data/hero";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  /*
   * Automatic Slider
   */
  useEffect(() => {
    if (heroSlides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /*
   * Disable body scroll when video modal is open
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
   * Convert YouTube URL into embed URL
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

      if (!videoId) return "";

      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    } catch {
      return "";
    }
  };

  const youtubeEmbedUrl = getYoutubeEmbedUrl(heroVideoUrl);

  return (
    <>
      <section className="relative isolate h-[560px] min-h-[560px] w-full overflow-hidden bg-brand sm:h-[620px] sm:min-h-[620px] lg:h-[calc(100vh-100px)] lg:min-h-[650px]">
        {/* =====================================================
            BACKGROUND SLIDES
        ====================================================== */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
                currentSlide === index
                  ? "z-10 scale-100 opacity-100"
                  : "z-0 scale-105 opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center sm:object-cover"
              />
            </div>
          ))}
        </div>

        {/* =====================================================
            DARK OVERLAY
        ====================================================== */}
        <div className="absolute inset-0 z-20 bg-brand/55" />

        {/* Extra gradient for bottom readability */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-1/2 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}
       

        {/* =====================================================
            SLIDE INDICATORS
        ====================================================== */}
        <div className="absolute bottom-7 left-5 z-40 flex items-center gap-2 sm:left-7 lg:left-10">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`h-[3px] rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "w-10 bg-accent"
                  : "w-5 bg-white/40 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* =====================================================
            ROTATING VIDEO BUTTON
        ====================================================== */}
        {/* <div className="absolute right-5 top-[62%] z-40 -translate-y-1/2 sm:right-8 sm:top-[60%] lg:right-12 lg:top-[58%]"> */}
        <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 sm:left-auto sm:right-8 sm:top-[60%] sm:translate-x-0 lg:right-12 lg:top-[58%]">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label="Play SAB Realty Hub video"
            className="hero-video-button group relative flex h-[125px] w-[125px] items-center justify-center rounded-full sm:h-[145px] sm:w-[145px] lg:h-[175px] lg:w-[175px]"
          >
            {/* Rotating Text */}
            <div className="hero-rotating-text absolute inset-0 p-2 ">
              <svg
                viewBox="0 0 200 200"
                className="h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="heroCirclePath"
                    d="M 100,100 m -73,0 a 73,73 0 1,1 146,0 a 73,73 0 1,1 -146,0"
                    fill="none"
                    
                  />
                </defs>

                <text
                  fill="white"
                  fontSize="15"
                  fontWeight="600"
                  letterSpacing="3"
                >
                  <textPath href="#heroCirclePath" >
                    SAB • A GROUP OF REALTY HUB •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Outer Circle */}
            <span className="absolute inset-[12px] rounded-full border border-white/70 transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10" />

            {/* Play Button */}
            <span className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/80 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent sm:h-[58px] sm:w-[58px] lg:h-[64px] lg:w-[64px]">
              <Play
                size={23}
                fill="currentColor"
                strokeWidth={0}
                className="ml-1 sm:h-6 sm:w-6"
              />
            </span>
          </button>
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
            {/* Close */}
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