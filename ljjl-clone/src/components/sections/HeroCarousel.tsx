"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    type: "image" as const,
    bgImage: "/hero-bg-1.png",
    logo: "/logo-ljjl.png",
  },
  {
    type: "image" as const,
    bgImage: "/hero-bg-2.png",
    logo: "/logo-ljjl.png",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 9000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="row no-gutters relative">
      <div className="col-sm-12 p-0">
        <div className="relative w-full overflow-hidden" style={{ height: "100vh", maxHeight: "100vh" }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Logo centrado */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="flex flex-col items-center gap-6 px-5 pb-[120px]">
                  <Image
                    src={slide.logo}
                    alt="LJJL"
                    width={500}
                    height={250}
                    className="max-h-full w-auto max-w-[80vw]"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all border-none cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all border-none cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 4L14 10L8 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="hidden lg:block absolute bottom-0 left-0 right-0 z-20">
            <ol className="flex justify-center gap-2 pb-[45px] list-none">
              {slides.map((_, index) => (
                <li
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-[15px] h-[15px] rounded-full cursor-pointer transition-all ${
                    index === current ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </ol>
          </div>

          {/* Scroll down icon */}
          <div className="hidden lg:flex absolute bottom-0 left-0 right-0 justify-center z-20 pb-2">
            <div className="animate-bounce-down">
              <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
                <rect x="3" y="3" width="24" height="34" rx="12" stroke="white" strokeWidth="2" opacity="0.7" />
                <circle cx="15" cy="15" r="4" fill="white" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
