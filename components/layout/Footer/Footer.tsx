"use client";

import Image from "next/image";
import Link from "next/link";

// import {
//   MapPin,
//   Mail,
//   Phone,
//   Facebook,
//   Instagram,
//   Linkedin,
//   MessageCircle,
//   ChevronRight,
//   Star,
// } from "lucide-react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand text-white">

      {/* =====================================================
          CONTACT INFORMATION BAR
      ====================================================== */}
      <div className="px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
  <div className="mx-auto grid max-w-[1260px] grid-cols-1 overflow-hidden rounded-[22px] bg-accent lg:grid-cols-3">

    {/* Address */}
    <div className="flex min-w-0 items-center gap-2 px-2 py-5 sm:gap-4 sm:px-6 sm:py-6 lg:px-7 xl:px-8">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 sm:h-14 sm:w-14">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-accent sm:h-10 sm:w-10">
          <FiMapPin size={18} strokeWidth={2.5} />
        </div>
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-medium text-white/90 sm:text-xs">
          Address
        </p>

        <p className="mt-1 truncate text-xs font-semibold text-white sm:text-base lg:text-lg">
          Kaithal, Haryana
        </p>
      </div>
    </div>

    {/* Email */}
    <div className="flex min-w-0 items-center gap-2 px-2 py-5 sm:gap-4 sm:px-6 sm:py-6 lg:px-7 xl:px-8">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 sm:h-14 sm:w-14">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-accent sm:h-10 sm:w-10">
          <IoMdMail size={17} strokeWidth={2.5} />
        </div>
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-medium text-white/90 sm:text-xs">
          Send Email
        </p>

        <a
          href="mailto:info@sabrealtyhub.com"
          className="mt-1 block truncate text-[10px] font-semibold text-white transition-opacity hover:opacity-80 sm:text-base lg:text-lg"
        >
          info@sabrealtyhub.com
        </a>
      </div>
    </div>

    {/* Phone */}
    <div className="flex min-w-0 items-center gap-2 px-2 py-5 sm:gap-4 sm:px-6 sm:py-6 lg:px-7 xl:px-8">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 sm:h-14 sm:w-14">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-accent sm:h-10 sm:w-10">
          <FaPhoneAlt size={16} strokeWidth={2.5} />
        </div>
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-medium text-white/90 sm:text-xs">
          Call Emergency
        </p>

        <div className="mt-1 flex flex-col gap-0.5">
          <a
            href="tel:+919896152870"
            className="truncate text-[10px] font-semibold text-white transition-opacity hover:opacity-80 sm:text-base lg:text-lg"
          >
            +91 9896152870
          </a>

          <a
            href="tel:+919466097007"
            className="truncate text-[10px] font-semibold text-white transition-opacity hover:opacity-80 sm:text-base lg:text-lg"
          >
            +91 9466097007
          </a>
        </div>
      </div>
    </div>

  </div>
</div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="relative mx-auto max-w-[1350px] px-5 pb-12 pt-14 sm:px-8 sm:pt-16 lg:px-10 lg:pt-20">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr] lg:gap-10 xl:gap-16">

          {/* =================================================
              BRAND COLUMN
          ================================================== */}
          <div>

            {/* Logo */}
            <Link
              href="/"
              className="inline-block"
              aria-label="SAB Realty Hub Home"
            >
              <Image
                src="/images/logo/sab-logo.jpg"
                alt="SAB Realty Hub"
                width={245}
                height={85}
                className="h-auto w-[210px] object-contain sm:w-[235px]"
              />
            </Link>

            {/* Description */}
            <p className="mt-7 max-w-[380px] text-sm leading-7 text-white/75 sm:text-[15px]">
              <strong className="font-bold text-white">
                SAB Realty Hub
              </strong>{" "}
              offers expert real estate services, helping you buy,
              sell, and invest in property with confidence and ease.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-5">
              <span className="mr-1 text-sm text-white/80">
                Follow on
              </span>

              <a
                href="https://www.facebook.com/envato/"
                target="_blank"
                aria-label="Facebook"
                className="text-white/80 transition-colors duration-300 hover:text-accent"
              >
                <FaFacebook size={18} fill="currentColor" />
              </a>

              <a
                href="https://www.instagram.com/envato/"
                target="_blank"
                aria-label="Instagram"
                className="text-white/80 transition-colors duration-300 hover:text-accent"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://x.com/envato/"
                target="_blank"
                aria-label="Twitter"
                className="text-white/80 transition-colors duration-300 hover:text-accent"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="https://in.pinterest.com/envato/"
                target="_blank"
                aria-label="Pinterest"
                className="text-white/80 transition-colors duration-300 hover:text-accent"
              >
                <FaPinterest size={18} fill="currentColor" />
              </a> 
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}
          <div>
            <FooterHeading title="Quick Link" />

            <ul className="mt-6 space-y-4">
              <FooterLink
                href="/dholera/dholera-sir"
                label="Dholera Special Investment Region"
              />

              <FooterLink
                href="/dholera/residential-plot-in-dholera-sir"
                label="Residential Plot in Dholera SIR"
              />

              <FooterLink
                href="/dholera/master-plan-investment-opportunity"
                label="Master Plan & Investment Opportunity"
              />

              <FooterLink
                href="/dholera/future-investment-destination"
                label="India’s Future Investment Destination"
              />

              <FooterLink
                href="/dholera/multipurpose-na-plot-expressway"
                label="Multipurpose NA Plot on Expressway"
              />
            </ul>
          </div>

          {/* =================================================
              PROJECT LINKS
          ================================================== */}
          <div>
            <FooterHeading title="Quick Link" />

            <ul className="mt-6 space-y-4">
              <FooterLink
                href="/dholera/premium-residential-plots-dholera-smart-city"
                label="Premium Residential Plots in Dholera Smart City"
              />

              <FooterLink
                href="/dholera/residential-plot-dholera-smart-city"
                label="Residential Plot in Dholera Smart City"
              />

              <FooterLink
                href="/dholera/premium-residential-land-dholera-smart-city"
                label="Premium Residential Land in Dholera Smart City"
              />

              <FooterLink
                href="/dholera/premium-commercial-plot-dholera-smart-city"
                label="Premium Commercial Plot in Dholera Smart City"
              />
            </ul>
          </div>

          {/* =================================================
              DISCOVER
          ================================================== */}
          <div>
            <FooterHeading title="Discover" />

            <ul className="mt-6 space-y-4">
              <FooterLink
                href="/about"
                label="About"
              />

              <FooterLink
                href="/gallery"
                label="Gallery"
              />

              <FooterLink
                href="/contact"
                label="Contact"
              />

              <FooterLink
                href="/dholera-projects"
                label="All Projects"
              />
            </ul>
          </div>
        </div>

        {/* =================================================
            DECORATIVE CIRCLE
        ================================================== */}
        <div className="pointer-events-none absolute bottom-0 right-[-30px] hidden h-[150px] w-[150px] opacity-50 lg:block xl:right-[-10px]">

          <div className="absolute inset-3 rounded-full border border-white/40" />

          <div className="absolute inset-7 rounded-full border border-white/30" />

          <FaStar
            size={42}
            fill="currentColor"
            className="absolute -top-2 left-1/2 -translate-x-1/2 text-accent"
          />
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="mx-auto max-w-[1290px] border-t border-white/15 px-5 py-6 sm:px-8 lg:px-0">

        <div className="flex flex-col gap-4 text-sm text-white/75 lg:flex-row lg:items-center lg:justify-between">

          {/* Copyright */}
          <p className="text-center lg:text-left">
            © 2026 Copyrights by SAB REALTY HUB. All Rights Reserved
          </p>

          {/* Right Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-end">

            <p>
              Developed By{" "}
              <span className="text-white">
                YMOR INNOVATION
              </span>
            </p>

            <Link
              href="/terms-and-conditions"
              className="transition-colors duration-300 hover:text-accent"
            >
              Terms &amp; Conditions
            </Link>

            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-accent"
            >
              Privacy Policy
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}


/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({
  title,
}: {
  title: string;
}) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white">
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-1">
        <span className="h-[2px] w-5 bg-accent" />
        <span className="h-[2px] w-8 bg-white" />
      </div>
    </div>
  );
}


/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-start gap-2 text-sm leading-6 text-white/75 transition-colors duration-300 hover:text-accent"
      >
        <FaChevronRight 
          size={17}
          strokeWidth={3}
          className="mt-1 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
        />

        <span>{label}</span>
      </Link>
    </li>
  );
}
