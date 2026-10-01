"use client";

import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function Header() {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Top of the page
      if (currentScroll <= 10) {
        setShowTopBar(true);
        return;
      }

      // Hide TopBar once user scrolls down
      setShowTopBar(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-[1000] w-full">
      <div
        className={`overflow-hidden transition-all duration-300 ${
          showTopBar
            ? "max-h-12 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <TopBar />
      </div>

      <Navbar />
    </header>
  );
}