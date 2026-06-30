"use client";

import { useEffect, useState } from "react";
import Header from "@/components/sections/Header";
import HeroCarousel from "@/components/sections/HeroCarousel";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import LatestNews from "@/components/sections/LatestNews";
import Rankings from "@/components/sections/Rankings";
import MembershipRules from "@/components/sections/MembershipRules";
import YoutubeVideos from "@/components/sections/YoutubeVideos";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Header />
      <HeroCarousel />
      <UpcomingEvents />
      <LatestNews />
      <Rankings />
      <MembershipRules />
      <YoutubeVideos />
      <Footer />

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${showScrollBtn ? "show" : ""}`}
        aria-label="Scroll to top"
      />

      {/* Cookie consent */}
      <CookieConsent />
    </div>
  );
}

function CookieConsent() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#07162e]/95 p-6 lg:p-8 text-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm mb-1">
          We use cookies to help this site function, understand service usage, and support
          marketing efforts.
        </p>
        <p className="text-xs text-gray-400 mb-4">
          Access MANAGE COOKIES to change your preferences at any time.
        </p>
        <hr className="border-white/20 mb-4" />
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo-ljjl.png"
              alt="LJJL"
              className="h-10 w-auto"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {}}
              className="px-4 py-2 border border-white/50 text-white text-xs uppercase tracking-wider hover:bg-white/10 transition-colors bg-transparent cursor-pointer"
            >
              Manage Cookies
            </button>
            <button
              onClick={() => setShow(false)}
              className="px-4 py-2 border border-white/50 text-white text-xs uppercase tracking-wider hover:bg-white/10 transition-colors bg-transparent cursor-pointer"
            >
              Reject
            </button>
            <button
              onClick={() => setShow(false)}
              className="px-6 py-2 bg-[#d13e48] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#b8323c] transition-colors border-none cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
