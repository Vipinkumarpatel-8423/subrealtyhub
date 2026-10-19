"use client";

import Link from "next/link";

const dholeraItems = [
  {
    title: "Dholera Special Investment Region",
    href: "/dholera/smart-industrial-investment-destination/",
  },
  {
    title: "Residential Plot in Dholera SIR",
    href: "/dholera/premium-residential-plot-dholera-smart-city/",
  },
  {
    title: "Master Plan & Investment Opportunity",
    href: "/dholera/master-plan-investment-opportunity/",
  },
  {
    title: "India’s Future Investment Destination",
    href: "/dholera/future-investment-destination/",
  },
  {
    title: "Multipurpose NA Plot on Expressway",
    href: "/dholera/multipurpose-na-plot-expressway/",
  },
  {
    title: "Premium Residential Plots in Dholera Smart City",
    href: "/dholera/premium-commercial-plot-dholera-smart-city/",
  },
];

export default function DholeraDropdown() {
  return (
    <div className="invisible absolute left-1/2 top-full z-[100] w-[330px] -translate-x-1/2 translate-y-2 rounded-b-xl border border-gray-200 bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      
      {/* <div className="border-b border-gray-100 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[2px] text-accent">
          Dholera Projects
        </p>
      </div> */}

      <div className="py-2">
        {dholeraItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group/item flex items-center border-b border-gray-100 px-5 py-3.5 text-[14px] font-medium leading-5 text-brand transition-all duration-200 last:border-b-0 hover:bg-[#f7f8fa] hover:pl-7 hover:text-accent"
          >
            <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />

            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}