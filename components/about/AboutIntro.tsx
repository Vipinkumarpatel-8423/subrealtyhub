
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, House } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="overflow-hidden bg-brand py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 xl:gap-16">

          {/* LEFT: ABOUT CONTENT */}
          <div className="min-w-0 lg:pt-8">
            <p className="text-sm font-semibold text-accent sm:text-base">
              About Us
            </p>

            <h1 className="mt-3 max-w-[440px] text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl xl:text-[42px]">
              Welcome To{" "}
              <span className="text-accent-light">SAB</span>
              <br />
              Realty Hub
            </h1>

            <p className="mt-5 max-w-[490px] text-sm leading-7 text-white/85 sm:text-[15px]">
              Founded with a vision to deliver trusted real estate solutions,
              SAB Realty Hub is a leading property consultancy in Kaithal,
              offering transparent and reliable residential and commercial
              property options. We are committed to providing well-located
              properties with strong growth potential and genuine value.
            </p>

            {/* Key points */}
            <ul className="mt-6 space-y-2 text-sm font-medium text-white sm:text-base">
              <li className="flex items-start gap-3">
                <ArrowRight
                  size={19}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span>List your own property</span>
              </li>

              <li className="flex items-start gap-3">
                <ArrowRight
                  size={19}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span>Friendly host &amp; Fast support</span>
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/dholera-projects/"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-accent-light/80 px-6 py-3 text-sm font-semibold text-accent-light transition-all duration-300 hover:bg-accent hover:text-white sm:mt-9"
            >
              <House size={16} />
              All Projects
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* RIGHT: LOGO AND IMAGE */}
          <div className="min-w-0">
            {/* Logo */}
            <div className="relative mx-auto mb-8 aspect-[2.8/1] w-full max-w-[600px] sm:mb-10 lg:mb-12">
              <Image
                src="/images/about/sab-logo.png"
                alt="SAB Realty Hub - A Group of Realty Hub"
                fill
                priority
                sizes="(max-width: 1023px) 90vw, 600px"
                className="object-contain"
              />
            </div>

            {/* Main image */}
            <Link
              href="/about/"
              aria-label="Learn more about SAB Realty Hub"
              className="group relative block aspect-[1.45/1] w-full overflow-hidden rounded-xl border border-white/15 bg-primary-light"
            >
              <Image
                src="/images/about/dholera-industrial-city.jpg"
                alt="Dholera Industrial City development"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-brand/5 transition-colors duration-300 group-hover:bg-transparent" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
