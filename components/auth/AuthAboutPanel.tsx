
import Link from "next/link";
import { ArrowRight, House } from "lucide-react";

const benefits = [
  "Proactive property assistance",
  "Personalized real estate guidance",
  "Support for your property journey",
];

export default function AuthAboutPanel() {
  return (
    <section className="relative flex h-full flex-col justify-center py-8 lg:py-12">
      <p className="mb-3 text-base font-semibold text-accent">
        About Company
      </p>

      <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-brand sm:text-4xl xl:text-5xl">
        Welcome To Properties
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-grey sm:text-base">
        Discover real estate opportunities with SAB Realty Hub.
        We help you explore residential and commercial properties
        with personalized guidance and reliable support throughout
        your property journey.
      </p>

      <div className="mt-7 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <ul className="space-y-4">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 text-sm font-medium text-foreground sm:text-base"
            >
              <ArrowRight
                size={20}
                className="mt-0.5 shrink-0 text-accent"
              />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center justify-start xl:justify-center">
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-brand/70 bg-background text-center sm:h-32 sm:w-32">
            <span className="text-2xl font-bold text-brand">24/7</span>
            <span className="mt-1 text-xs leading-4 text-brand-grey">
              Property
              <br />
              Assistance
            </span>
          </div>

          <div className="-ml-3 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-brand/70 bg-background text-center sm:h-32 sm:w-32">
            <span className="text-2xl font-bold text-brand">100%</span>
            <span className="mt-1 text-xs leading-4 text-brand-grey">
              Customer
              <br />
              Focused
            </span>
          </div>
        </div>
      </div>

      <Link
        href="/dholera-projects/"
        className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary-light"
      >
        <House size={18} className="text-[#c3dc94]" />
        Explore More
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}
