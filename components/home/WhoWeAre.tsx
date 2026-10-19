
"use client";

import Image from "next/image";
import { useEffect, useState,useRef } from "react";
import { ArrowRight } from "lucide-react";

type TabKey = "mission" | "vision" | "goal";

const tabContent: Record<TabKey, { title: string; paragraphs?: string[]; points?: string[] }> = {
  mission: {
    title: "Our Mission",
    paragraphs: [
      "To provide trusted, transparent, and value-driven real estate solutions that empower individuals and families to invest confidently in the future of Dholera Smart City. We are committed to offering genuine investment opportunities backed by expert guidance, clear communication, and professional support at every stage of the journey.",
      "Our mission is to simplify the real estate experience by helping clients make informed decisions that lead to long-term financial growth, security, and stability. Through integrity, customer satisfaction, and a deep understanding of the evolving real estate market, we strive to build lasting relationships and become a reliable partner in shaping a brighter and more prosperous future for our clients.",
    ],
  },

  vision: {
    title: "Our Vision",
    paragraphs: [
      "To become a leading and trusted real estate brand in Dholera by shaping modern communities, creating sustainable and future-ready investment opportunities, and actively contributing to the growth of India’s next smart city. Our vision is to transform the real estate experience through innovation, transparency, quality development, and customer-focused services that create lasting value for investors and families alike.",
      "We aspire to play a key role in the development of Dholera by promoting smart infrastructure, sustainable urban planning, and high-potential properties that support long-term growth and modern living.",
    ],
  },

  goal: {
    title: "Our Goal",
    points: [
      "To guide investors with expert advice and market insights for better decision-making.",
      "To create valuable investment opportunities in high-growth locations.",
      "To ensure customer satisfaction through professional and personalized services.",
      "To build lasting relationships based on honesty, commitment, and reliability.",
      "To deliver projects that combine modern infrastructure with sustainable development.",
      "To make real estate investment simple, secure, and accessible for everyone.",
      "To contribute towards the transformation of Dholera into a world-class smart city.",
      "To provide properties with strong appreciation potential and future growth benefits.",
    ],
  },
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "mission", label: "Our Mission" },
  { key: "vision", label: "Our Vision" },
  { key: "goal", label: "Our Goal" },
];

export default function WhoWeAre() {
  const [activeTab, setActiveTab] = useState<TabKey>("mission");
  const [imagesVisible, setImagesVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setImagesVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const activeContent = tabContent[activeTab];

  const sectionRef = useRef<HTMLElement>(null);

useEffect(() => {
  const section = sectionRef.current;

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setImagesVisible(true);
        observer.disconnect(); // Sirf pehli baar animate hoga
      }
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

  return (
    <section 
    ref={sectionRef}
    className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">

          {/* LEFT: PROJECT IMAGES */}
          <div
            className={`who-we-are-images grid min-w-0 gap-2 ${
    imagesVisible ? "is-visible" : "is-hidden"
  }`}
          >
            <div className="relative aspect-[1.78/1] w-full overflow-hidden bg-brand/5">
              <Image
                src="/images/projects/dholera-residential-zone.jpg"
                alt="Dholera Smart City Residential Zone"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="relative aspect-[1.78/1] w-full overflow-hidden bg-brand/5">
              <Image
                src="/images/projects/sub-realty-project-2-scaled.jpg"
                alt="Dholera SIR Residential Investment Project"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="min-w-0">

            <p className="text-sm font-semibold text-accent sm:text-base">
              Who We Are
            </p>

            <div className="mt-1 flex items-center gap-3">
              <h2 className="text-xl font-semibold tracking-tight text-brand sm:text-2xl">
                Our Real Estate Story
              </h2>

              <ArrowRight
                size={25}
                strokeWidth={1.6}
                className="shrink-0 -rotate-45 text-accent"
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-[14px] sm:leading-[1.8]">
              At Realty Hub Dholera Properties, we believe real estate is more
              than just buying and selling land — it is about creating a future
              filled with growth, opportunity, stability, and long-term value.
              Our vision is to help individuals and families make smart
              investment decisions that secure their future and create lasting
              wealth for generations to come.
            </p>

            {/* TABS */}
            <div
              className="mt-6 grid grid-cols-3 gap-2 sm:mx-auto sm:max-w-[420px] sm:gap-3"
              role="tablist"
              aria-label="Our mission, vision and goals"
            >
              {tabs.map((tab) => {
                const selected = activeTab === tab.key;

                return (
                  <button
                    key={tab.key}
                    id={`who-tab-${tab.key}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="who-tab-panel"
                    onClick={() => setActiveTab(tab.key)}
                    className={`min-h-11 px-2 py-3 text-xs font-medium transition-all duration-300 sm:px-4 sm:text-sm ${
                      selected
                        ? "bg-brand text-white shadow-md"
                        : "bg-accent text-white hover:-translate-y-0.5 hover:brightness-95"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* ACTIVE TAB CONTENT */}
            <div
              id="who-tab-panel"
              role="tabpanel"
              aria-labelledby={`who-tab-${activeTab}`}
              key={activeTab}
              className="who-tab-content mt-6 text-sm leading-6 text-gray-500 sm:leading-[1.8]"
            >
              <h3 className="sr-only">{activeContent.title}</h3>

              {activeContent.paragraphs?.map((paragraph, index) => (
                <p
                  key={index}
                  className={index > 0 ? "mt-3" : ""}
                >
                  {paragraph}
                </p>
              ))}

              {activeContent.points && (
                <ul className="space-y-2.5">
                  {activeContent.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <ArrowRight
                        size={17}
                        className="mt-1 shrink-0 text-accent"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
