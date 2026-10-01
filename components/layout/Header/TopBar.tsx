// import {

//   Instagram,
//   MapPin,
//   Pinterest,
//   Twitter,
// } from "lucide-react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";

import Link from "next/link";

export default function TopBar() {
  return (
    <div className="border-b border-white/15 bg-brand text-white">
      <div className="mx-auto flex h-10 w-full max-w-[1350px] items-center justify-between px-4 sm:px-6 lg:px-7">
        {/* Left Side */}
        <div className="flex items-center gap-5 text-[12px] sm:text-[13px]">
          {" "}
          <Link
            href="https://maps.google.com/"
            target="_blank"
            className="hidden items-center gap-2 transition-colors duration-200 hover:text-accent sm:flex"
          >
            {" "}
            <FiMapPin
              size={15}
              strokeWidth={2.5}
              className="text-accent"
            />{" "}
            <span>info@sabrealtyhub.com</span>{" "}
          </Link>{" "}
          <a
            href="tel:+919896152870"
            className="flex items-center gap-2 transition-colors duration-200 hover:text-accent"
          >
            {" "}
            <FaPhoneAlt
              size={14}
              strokeWidth={2.5}
              className="text-accent"
            />{" "}
            <span>+91 9896152870</span>{" "}
          </a>{" "}
          <a
            href="tel:+919466097007"
            className="flex items-center gap-2 transition-colors duration-200 hover:text-accent"
          >
            {" "}
            <FaPhoneAlt
              size={14}
              strokeWidth={2.5}
              className="text-accent"
            />{" "}
            <span>+91 9466097007</span>{" "}
          </a>{" "}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link
            href="/sign-in-register/"
            className="hidden text-[13px] font-medium transition-colors duration-200 hover:text-accent sm:block"
          >
            Sign in or Register
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-white/80 transition-colors duration-200 hover:text-accent"
            >
              <FaFacebook size={14} fill="currentColor" />
            </Link>

            <Link
              href="#"
              aria-label="Twitter"
              className="text-white/80 transition-colors duration-200 hover:text-accent"
            >
              <FaTwitter size={14} fill="currentColor" />
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="text-white/80 transition-colors duration-200 hover:text-accent"
            >
              <FaInstagram size={14} />
            </Link>

            {/* <Link
              href="#"
              aria-label="Pinterest"
              className="text-white/80 transition-colors duration-200 hover:text-accent"
            >
              <Pinterest size={14} fill="currentColor" />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
