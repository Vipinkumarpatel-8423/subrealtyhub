"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const dholeraItems = [
  {
    title: "Dholera Special Investment Region",
    href: "/dholera-special-investment-region/",
  },
  {
    title: "Residential Plot in Dholera SIR",
    href: "/residential-plot-in-dholera-sir/",
  },
  {
    title: "Master Plan & Investment Opportunity",
    href: "/master-plan-investment-opportunity/",
  },
  {
    title: "India’s Future Investment Destination",
    href: "/future-investment-destination/",
  },
  {
    title: "Multipurpose NA Plot on Expressway",
    href: "/multipurpose-na-plot-expressway/",
  },
  {
    title: "Premium Residential Plots in Dholera Smart City",
    href: "/premium-residential-plots/",
  },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();
  const [dholeraOpen, setDholeraOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (
      pathname.startsWith("/dholera-") ||
      pathname.startsWith("/residential-") ||
      pathname.startsWith("/master-plan-") ||
      pathname.startsWith("/future-") ||
      pathname.startsWith("/multipurpose-") ||
      pathname.startsWith("/premium-")
    ) {
      setDholeraOpen(true);
    }
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[1100] bg-black/50 backdrop-blur-[1px] transition-opacity duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-[1200] h-full w-[82%] max-w-[360px] overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="absolute right-0 top-0 flex h-[34px] w-[34px] items-center justify-center bg-accent text-white transition-colors duration-200 hover:bg-accent-hover"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Menu Content */}
        <div className="px-5 pb-10 pt-10">
          
          {/* Mobile Menu */}
          <nav>
            
            {/* Home */}
            <Link
              href="/"
              onClick={onClose}
              className={`flex min-h-[41px] items-center border-b border-gray-200 text-[14px] font-medium transition-colors duration-200 ${
                isActive("/")
                  ? "text-accent"
                  : "text-brand hover:text-accent"
              }`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about/"
              onClick={onClose}
              className={`flex min-h-[41px] items-center border-b border-gray-200 text-[14px] font-medium transition-colors duration-200 ${
                isActive("/about/")
                  ? "text-accent"
                  : "text-brand hover:text-accent"
              }`}
            >
              About Us
            </Link>

            {/* Dholera */}
            <div className="border-b border-gray-200">
              <div className="flex items-center justify-between">
                <Link
                  href="/dholera-special-investment-region/"
                  onClick={onClose}
                  className={`flex min-h-[41px] flex-1 items-center text-[14px] font-medium transition-colors duration-200 ${
                    pathname.startsWith(
                      "/dholera-special-investment-region/"
                    )
                      ? "text-accent"
                      : "text-brand hover:text-accent"
                  }`}
                >
                  Dholera Projects
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setDholeraOpen(!dholeraOpen)
                  }
                  aria-label="Toggle Dholera Projects"
                  className="flex h-[41px] w-[42px] items-center justify-center text-brand transition-colors duration-200 hover:text-accent"
                >
                  <ChevronDown
                    size={17}
                    className={`transition-transform duration-300 ${
                      dholeraOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Mobile Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  dholeraOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="mb-2 ml-3 border-l border-orange-200">
                  {dholeraItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={onClose}
                      className={`block border-b border-gray-100 px-4 py-3 text-[13px] leading-5 transition-colors duration-200 last:border-b-0 ${
                        isActive(item.href)
                          ? "bg-accent/5 font-semibold text-accent"
                          : "text-gray-600 hover:bg-gray-50 hover:text-accent"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* All Projects */}
            <Link
              href="/dholera-projects/"
              onClick={onClose}
              className={`flex min-h-[41px] items-center border-b border-gray-200 text-[14px] font-medium transition-colors duration-200 ${
                isActive("/dholera-projects/")
                  ? "text-accent"
                  : "text-brand hover:text-accent"
              }`}
            >
              All Projects
            </Link>

            {/* Gallery */}
            <Link
              href="/gallery/"
              onClick={onClose}
              className={`flex min-h-[41px] items-center border-b border-gray-200 text-[14px] font-medium transition-colors duration-200 ${
                isActive("/gallery/")
                  ? "text-accent"
                  : "text-brand hover:text-accent"
              }`}
            >
              Gallery
            </Link>

            {/* Contact */}
            <Link
              href="/contact/"
              onClick={onClose}
              className={`flex min-h-[41px] items-center border-b border-gray-200 text-[14px] font-medium transition-colors duration-200 ${
                isActive("/contact/")
                  ? "text-accent"
                  : "text-brand hover:text-accent"
              }`}
            >
              Contact
            </Link>

            {/* Sign In / Register */}
            <Link
              href="/sign-in-register/"
              onClick={onClose}
              className="mt-5 flex min-h-[43px] items-center justify-center rounded-md border border-brand bg-brand px-4 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-accent hover:border-accent"
            >
              Sign in or Register
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}