"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Anti-doping", href: "/anti-doping" },
  {
    label: "Championships",
    children: [
      { label: "Calendar", href: "/events/calendar" },
      { label: "My First Championship", href: "/my-first-championship" },
      { label: "Upcoming Events", href: "/events/championships" },
      { label: "Results", href: "/events/results" },
    ],
  },
  {
    label: "Black Belts",
    children: [
      { label: "Certified Black Belts", href: "/certified-black-belts" },
      { label: "Black Belt Certification", href: "/athletes/black-belt-certification" },
    ],
  },
  {
    label: "Rankings",
    children: [
      { label: "Athlete Ranking Information", href: "/athlete-ranking-info" },
      { label: "Academy Ranking Information", href: "/academy-ranking-info" },
      { label: "Athletes", href: "/2026-athletes-ranking" },
      { label: "Academies", href: "/2026-academies-ranking" },
      { label: "Hall of Fame", href: "/hall-of-fame" },
    ],
  },
  {
    label: "Academies",
    children: [
      { label: "Registered Academies", href: "/registered-academies" },
      { label: "Academy Registration", href: "/academy-registration-informations" },
      { label: "Join Us", href: "/join-us" },
    ],
  },
  {
    label: "Athletes",
    children: [{ label: "Membership", href: "/athletes/become-a-member" }],
  },
  {
    label: "Rules",
    children: [
      { label: "Books and Videos", href: "/books-videos" },
      { label: "Graduation System", href: "/graduation-system" },
      { label: "Rules Course", href: "https://learning.ljjl.com/" },
      { label: "Rules Seminar", href: "/courses/seminars" },
      { label: "Rules Webinar", href: "/courses/webinars" },
      { label: "Uniform", href: "/uniform" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Shop", href: "https://ljjlshop.com/" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="row no-gutters" id="top-bar">
      <div className="col-sm-12">
        <nav
          className="ljjl-nav navbar navbar-expand-xl bg-[#07162e] transition-colors duration-300"
          style={{ height: "65px" }}
        >
          <div className="container-fluid h-full flex items-center justify-between px-4 lg:px-8">
            {/* Mobile hamburger */}
            <button
              className="navbar-toggler collapsed d-xl-none flex flex-col gap-[4px] p-2 bg-transparent border-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Site Header"
            >
              <span
                className={`block w-[30px] h-[4px] bg-white transition-all duration-200 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block w-[30px] h-[4px] bg-white transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-[30px] h-[4px] bg-white transition-all duration-200 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>

            {/* Logo */}
            <Link href="/" className="navbar-brand mx-auto lg:mx-0">
              <Image
                src="/logo-ljjl.png"
                alt="LJJL Logo"
                width={130}
                height={50}
                className="w-[130px] h-auto"
                priority
              />
            </Link>

            {/* Mobile user button */}
            <button
              className="navbar-toggler d-xl-none flex items-center p-2 bg-transparent border-none"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              aria-label="User Header"
            >
              <FontAwesomeIcon icon={faUser} className="text-white w-5 h-5" />
            </button>

            {/* Mobile user dropdown */}
            {userMenuOpen && (
              <div className="absolute top-[65px] right-0 bg-white shadow-lg z-50 w-48 d-xl-none">
                <ul className="list-none p-0 m-0">
                  <li className="border-b border-gray-200">
                    <Link
                      href="https://app.ljjldb.com/auth/login"
                      className="block px-4 py-3 text-[#555] font-semibold text-sm no-underline hover:text-[#d13e48]"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/athletes/become-a-member"
                      className="block px-4 py-3 text-[#555] font-semibold text-sm no-underline hover:text-[#d13e48]"
                    >
                      Membership
                    </Link>
                  </li>
                  <li className="border-t border-gray-200 flex justify-center gap-4 py-3">
                    <a href="https://www.instagram.com/ljjl/" target="_blank" rel="noopener">
                      <FontAwesomeIcon icon={faInstagram} className="text-[#d13e48] text-2xl" />
                    </a>
                    <a href="https://www.facebook.com/ljjl" target="_blank" rel="noopener">
                      <FontAwesomeIcon icon={faFacebook} className="text-[#d13e48] text-2xl" />
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {/* Mobile nav menu */}
            {mobileMenuOpen && (
              <div className="absolute top-[65px] left-0 w-full bg-white shadow-lg z-50 d-xl-none overflow-scroll" style={{ height: "calc(100vh - 120px)" }}>
                <ul className="list-none p-4 m-0">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.label} className="border-b border-gray-200 py-2">
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-[#555] font-semibold text-base no-underline hover:text-[#d13e48]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div>
                          <span className="text-[#555] font-semibold text-base">
                            {item.label}
                          </span>
                          {item.children && (
                            <ul className="list-none pl-4 mt-1">
                              {item.children.map((child) => (
                                <li key={child.label} className="py-1">
                                  <Link
                                    href={child.href}
                                    className="text-[#555] font-normal text-sm no-underline hover:text-[#d13e48]"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </li>
                  ))}
                  <li className="flex justify-center gap-4 pt-4">
                    <a href="https://www.instagram.com/ljjl/" target="_blank" rel="noopener">
                      <FontAwesomeIcon icon={faInstagram} className="text-[#d13e48] text-3xl" />
                    </a>
                    <a href="https://www.facebook.com/ljjl" target="_blank" rel="noopener">
                      <FontAwesomeIcon icon={faFacebook} className="text-[#d13e48] text-3xl" />
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {/* Desktop nav */}
            <div className="navbar-dk hidden xl:flex flex-grow items-center justify-between">
              <ul className="navbar-nav flex items-center list-none m-0 p-0 gap-1">
                {NAV_ITEMS.slice(0, -2).map((item) => (
                  <li
                    key={item.label}
                    className="nav-item relative px-2"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="nav-link text-white text-xs uppercase tracking-wider no-underline hover:text-[#d13e48] transition-colors duration-300"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div>
                        <button className="nav-link text-white text-xs uppercase tracking-wider no-underline hover:text-[#d13e48] transition-colors duration-300 bg-transparent border-none cursor-pointer flex items-center gap-1">
                          {item.label}
                        </button>
                        {item.children && openDropdown === item.label && (
                          <div className="absolute top-full left-0 bg-white shadow-lg min-w-[200px] z-50">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-5 py-2 text-[#07162e] text-xs no-underline border-b border-gray-200 last:border-b-0 hover:text-[#4b90d1] transition-colors duration-300"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                ))}
                <li className="nav-item px-2">
                  <Link
                    href="/news"
                    className="nav-link text-white text-xs uppercase tracking-wider no-underline hover:text-[#d13e48] transition-colors duration-300"
                  >
                    News
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <a
                    href="https://ljjlshop.com/"
                    target="_blank"
                    rel="noopener"
                    className="nav-link text-white text-xs uppercase tracking-wider no-underline hover:text-[#d13e48] transition-colors duration-300"
                  >
                    Shop
                  </a>
                </li>
              </ul>
            </div>

            {/* Desktop user & social */}
            <div className="hidden xl:flex items-center gap-4">
              {/* User */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("user")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="bg-transparent border-none cursor-pointer">
                  <FontAwesomeIcon icon={faUser} className="text-white w-5 h-5 hover:text-[#d13e48] transition-colors" />
                </button>
                {openDropdown === "user" && (
                  <div className="absolute right-0 top-full bg-white shadow-lg min-w-[150px] z-50">
                    <a
                      href="https://app.ljjldb.com/auth/login"
                      target="_blank"
                      rel="noopener"
                      className="block px-5 py-2 text-[#07162e] text-xs no-underline border-b border-gray-200 hover:text-[#4b90d1]"
                    >
                      Login
                    </a>
                    <Link
                      href="/athletes/become-a-member"
                      className="block px-5 py-2 text-[#07162e] text-xs no-underline hover:text-[#4b90d1]"
                    >
                      Membership
                    </Link>
                  </div>
                )}
              </div>
              {/* Social */}
              <div className="flex items-center gap-2">
                <a href="https://www.instagram.com/ljjl/" target="_blank" rel="noopener">
                  <FontAwesomeIcon icon={faInstagram} className="text-[#d13e48] text-2xl hover:text-gray-200 transition-all" />
                </a>
                <a href="https://www.facebook.com/ljjl" target="_blank" rel="noopener">
                  <FontAwesomeIcon icon={faFacebook} className="text-[#d13e48] text-2xl hover:text-gray-200 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
