
"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailtoUrl =
      `mailto:info@sabrealtyhub.com` +
      `?subject=${encodeURIComponent(subject || "Contact Enquiry")}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setStatus(
      "Your email app should open with your message. Please send the email to complete your enquiry."
    );
  }

  const inputClass =
    "min-h-[50px] w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-brand-grey focus:border-accent focus:ring-2 focus:ring-accent/15";

  return (
    <section className="bg-background px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[900px]">

        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-sm font-semibold text-accent sm:text-base">
            Book Appointment
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand sm:text-4xl lg:text-[42px]">
            Send Message Anytime
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your name"
              autoComplete="name"
              className={inputClass}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              aria-label="Phone number"
              autoComplete="tel"
              className={inputClass}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              aria-label="Email address"
              autoComplete="email"
              className={inputClass}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              aria-label="Subject"
              className={inputClass}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Write a Message"
            aria-label="Write a message"
            rows={6}
            className={`${inputClass} min-h-[150px] resize-y sm:min-h-[190px]`}
            required
          />

          <div className="flex justify-center pt-1">
            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover sm:w-auto sm:min-w-[200px]"
            >
              Send a Message
              <ArrowRight size={17} />
            </button>
          </div>

          {status && (
            <p
              role="status"
              className="text-center text-sm leading-6 text-brand-grey"
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
