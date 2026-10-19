
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Navigation,
} from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "Real Estate",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Frontend validation is handled by required fields.
    // Connect your email/API service here to deliver messages.
    setSubmitted(true);
  };

  return (
    <>
      {/* Section heading */}
      <section className="bg-background px-4 py-8 text-center sm:py-10">
        <p className="text-sm font-semibold text-accent sm:text-base">
          Book Appointment
        </p>

        <div className="mt-1 flex items-center justify-center gap-2">
          <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Send Message Anytime
          </h2>

          <ArrowUpRight
            size={26}
            strokeWidth={1.7}
            className="-rotate-45 text-accent"
          />
        </div>
      </section>

      {/* Main contact area */}
      <section className="relative isolate overflow-hidden bg-brand py-12 text-white sm:py-16 lg:py-20">
        {/* Decorative dotted world map */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-[-12%] z-[-1] hidden w-[65%] opacity-40 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--brand-grey) 1.3px, transparent 1.7px)",
            backgroundSize: "7px 7px",
            clipPath:
              "polygon(12% 24%, 30% 14%, 43% 19%, 52% 9%, 72% 17%, 83% 12%, 100% 28%, 92% 46%, 100% 63%, 78% 75%, 69% 90%, 52% 77%, 34% 91%, 25% 68%, 9% 61%, 0 43%)",
          }}
        />

        <div className="mx-auto grid max-w-[1300px] items-center gap-12 px-5 sm:px-7 lg:grid-cols-2 lg:gap-16 lg:px-8">

          {/* LEFT: CONTACT FORM */}
          <div className="w-full max-w-[620px]">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-accent sm:text-base">
              CALL NOW:{" "}
              <a
                href="tel:+919896152870"
                className="transition-opacity hover:opacity-75"
              >
                +91 9896152870
              </a>
              <span className="mx-1">,</span>
              <a
                href="tel:+919466097007"
                className="transition-opacity hover:opacity-75"
              >
                +91 9466097007
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  aria-label="Full Name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="min-w-0 rounded-lg border border-white/15 bg-transparent px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/70 focus:border-accent"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  aria-label="Email Address"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="min-w-0 rounded-lg border border-white/15 bg-transparent px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/70 focus:border-accent"
                />
              </div>

              <select
                name="interest"
                aria-label="Property interest"
                value={form.interest}
                onChange={(e) =>
                  setForm({ ...form, interest: e.target.value })
                }
                className="w-full appearance-none rounded-lg border border-white/15 bg-brand px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-accent"
              >
                <option value="Real Estate">Real Estate</option>
                <option value="Residential Plot">Residential Plot</option>
                <option value="Commercial Property">Commercial Property</option>
                <option value="Investment Opportunity">Investment Opportunity</option>
                <option value="Dholera Smart City">Dholera Smart City</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                aria-label="Your Message"
                rows={5}
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="min-h-[140px] w-full resize-y rounded-lg border border-white/15 bg-transparent px-4 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/70 focus:border-accent sm:min-h-[175px]"
              />

              <button
                type="submit"
                className="inline-flex min-w-[175px] items-center justify-center gap-2 rounded-full border border-accent px-7 py-3.5 text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-white"
              >
                Submit Message
                <ArrowUpRight size={17} />
              </button>

              {submitted && (
                <p
                  role="status"
                  className="text-sm text-accent"
                >
                  Form validated. Connect an email or API service to send your message.
                </p>
              )}
            </form>
          </div>

          {/* RIGHT: LOCATION CARD */}
          <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[360px] lg:min-h-[390px]">

            {/* Mobile/tablet dotted backdrop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-25 lg:hidden"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--brand-grey) 1.3px, transparent 1.7px)",
                backgroundSize: "8px 8px",
                clipPath:
                  "polygon(10% 25%, 35% 12%, 52% 22%, 75% 10%, 95% 35%, 85% 70%, 55% 90%, 30% 72%, 5% 58%)",
              }}
            />

            <div className="relative z-10 flex w-full max-w-[390px] items-center gap-4 rounded-2xl bg-background p-3 text-foreground shadow-xl sm:gap-4 sm:p-4">

              {/* Property image */}
              <div className="relative h-[150px] w-[95px] shrink-0 overflow-hidden rounded-xl bg-light-bg sm:h-[175px] sm:w-[105px]">
                <Image
                  src="/images/contact/property-building.jpg"
                  alt="SAB Realty Hub property"
                  fill
                  sizes="105px"
                  className="object-cover"
                />
              </div>

              {/* Address details */}
              <div className="min-w-0 flex-1 py-1">
                <p className="text-xs text-brand-grey">
                  Address:
                </p>

                <h3 className="mt-1 text-sm font-semibold leading-5 text-foreground sm:text-base sm:leading-6">
                  New Peoda Road, Shastri Nagar, Appo. Gali No. 6, Kaithal
                </h3>

                <p className="mt-2 text-xs text-brand-grey">
                  Post Code:
                </p>

                <p className="mt-0.5 text-sm font-semibold text-foreground sm:text-base">
                  136027
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=New+Peoda+Road+Shastri+Nagar+Gali+No+6+Kaithal+136027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  <Navigation size={14} />
                  Direction
                </a>
              </div>
            </div>

            {/* Map pin decoration */}
            <div className="absolute bottom-1 left-1/2 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-accent/40">
              <MapPin
                size={12}
                fill="var(--accent)"
                className="text-accent"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
