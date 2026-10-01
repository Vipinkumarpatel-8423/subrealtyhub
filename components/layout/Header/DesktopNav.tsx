"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import DholeraDropdown from "./DholeraDropdown";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about/",
  },
  {
    label: "Dholera Projects",
    href: "/dholera-special-investment-region/",
    dropdown: true,
  },
  {
    label: "All Projects",
    href: "/dholera-projects/",
  },
  {
    label: "Gallery",
    href: "/gallery/",
  },
  {
    label: "Contact",
    href: "/contact/",
  },
];

export default function DesktopNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <ul className="flex items-center gap-8 xl:gap-9">
      {navItems.map((item) => {
        const active = isActive(item.href);

        if (item.dropdown) {
          return (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                className={`relative flex items-center gap-1 py-8 text-[15px] font-medium transition-colors duration-300 xl:text-[16px] ${
                  active
                    ? "text-accent"
                    : "text-white hover:text-accent"
                }`}
              >
                {item.label}

                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />

                {/* Active line */}
                <span
                  className={`absolute bottom-[21px] left-0 h-[2px] bg-accent transition-all duration-300 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              <DholeraDropdown />
            </li>
          );
        }

        return (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`relative flex items-center py-8 text-[15px] font-medium transition-colors duration-300 xl:text-[16px] ${
                active
                  ? "text-accent"
                  : "text-white hover:text-accent"
              }`}
            >
              {item.label}

              <span
                className={`absolute bottom-[21px] left-0 h-[2px] bg-accent transition-all duration-300 ${
                  active
                    ? "w-full"
                    : "w-0 hover:w-full"
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}