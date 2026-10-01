"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ShoppingBasket } from "lucide-react";

import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-white/10 bg-brand">
        <div className="mx-auto flex h-[72px] w-full max-w-[1350px] items-center justify-between px-4 sm:px-6 lg:h-[100px] lg:px-7">

          {/* Logo */}
          <Link
            href="/"
            className="relative flex shrink-0 items-center"
            aria-label="SAB Realty Hub Home"
          >
            <Image
              src="/images/logo/sab-logo.jpg"
              alt="SAB Realty Hub"
              width={180}
              height={65}
              priority
              className="h-auto w-[125px] object-contain sm:w-[145px] lg:w-[175px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <DesktopNav />
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            
            {/* Cart */}
            <button
              type="button"
              aria-label="Enquiry Cart"
              className="relative flex h-[51px] w-[51px] items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
            >
              <ShoppingBasket size={21} strokeWidth={1.7} />

              <span className="absolute -right-1 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-accent px-1 text-[9px] font-bold text-white">
                0
              </span>
            </button>

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="flex h-[51px] w-[51px] items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
            >
              <Search size={22} strokeWidth={1.7} />
            </button>

            {/* All Projects */}
            <Link
              href="/dholera-projects/"
              className="ml-3 flex h-[51px] items-center gap-2 rounded-full border border-[#b6d76a] px-6 text-[15px] font-semibold text-[#d4ed91] transition-all duration-300 hover:bg-[#b6d76a] hover:text-brand"
            >
              <span className="text-[17px]">⌂</span>
              All Projects
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">

            {/* Menu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 hover:bg-accent hover:border-accent"
            >
              <Menu size={19} />
            </button>

            {/* Cart */}
            <button
              type="button"
              aria-label="Enquiry Cart"
              className="relative flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 hover:bg-accent hover:border-accent"
            >
              <ShoppingBasket size={17} />

              <span className="absolute -right-1 -top-1 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-accent px-1 text-[8px] font-bold text-white">
                0
              </span>
            </button>

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 hover:bg-accent hover:border-accent"
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}