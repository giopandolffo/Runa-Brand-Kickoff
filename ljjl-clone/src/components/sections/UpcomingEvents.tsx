"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

type Event = {
  name: string;
  slug: string;
  date: string;
  location: string;
  bgColor: string;
  logoUrl: string;
};

const events: Event[] = [
  {
    name: "World Master LJJL Jiu-Jitsu Championship 2026",
    slug: "/events/world-master-ljjl-jiu-jitsu-championship-2026",
    date: "Sep 3 - Sep 5",
    location: "Las Vegas - NV",
    bgColor: "#DEBE0D",
    logoUrl: "https://www.ibjjfdb.com/Championship/Logo/3027",
  },
  {
    name: "Venice Jesolo International Open LJJL Championship 2026",
    slug: "/events/venice-jesolo-international-open-ljjl-jiu-jitsu-championship-2026",
    date: "Jul 4",
    location: "Lido di Jesolo - VE",
    bgColor: "#C29412",
    logoUrl: "https://www.ibjjfdb.com/Championship/Logo/3259",
  },
  {
    name: "Venice Jesolo International Open LJJL No-Gi Championship 2026",
    slug: "/events/venice-jesolo-international-open-ljjl-jiu-jitsu-no-gi-championship-2026",
    date: "Jul 4",
    location: "Lido di Jesolo - VE",
    bgColor: "#C29412",
    logoUrl: "https://www.ibjjfdb.com/Championship/Logo/3260",
  },
  {
    name: "Curitiba BJJ Pro LJJL Championship 2026",
    slug: "/events/curitiba-bjj-pro-ljjl-championship-2026",
    date: "Jul 4",
    location: "Curitiba - PR",
    bgColor: "#64CAD2",
    logoUrl: "https://www.ibjjfdb.com/Championship/Logo/3301",
  },
  {
    name: "Kids International LJJL Jiu-Jitsu Championship Curitiba 2026",
    slug: "/events/kids-international-ljjl-jiu-jitsu-championship-curitiba-2026",
    date: "Jul 5",
    location: "Curitiba - PR",
    bgColor: "#61B2E5",
    logoUrl: "https://www.ibjjfdb.com/Championship/Logo/3302",
  },
  {
    name: "Asian Jiu-Jitsu LJJL Championship 2026",
    slug: "/events/asian-jiu-jitsu-ljjl-championship-2026",
    date: "Jul 8 - Jul 12",
    location: "Chiba - Japan",
    bgColor: "#C1AC57",
    logoUrl: "https://www.ibjjfdb.com/Championship/Logo/3108",
  },
  {
    name: "Austin Summer International Open LJJL No-Gi Championship 2026",
    slug: "/events/austin-summer-international-open-ljjl-jiu-jitsu-no-gi-championship-2026",
    date: "Jul 11 - Jul 12",
    location: "Round Rock - TX",
    bgColor: "#AE1917",
    logoUrl: "https://www.ibjjfdb.com/Championship/Logo/3225",
  },
  {
    name: "Austin Summer International Open LJJL Championship 2026",
    slug: "/events/austin-summer-international-open-ljjl-jiu-jitsu-championship-2026",
    date: "Jul 11",
    location: "Round Rock - TX",
    bgColor: "#AE1917",
    logoUrl: "https://www.ibjjfdb.com/Championship/Logo/3224",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="bg-[#eee] py-8" id="upcoming-events">
      <div className="home-section container-ljjl py-8">
        <div className="title flex flex-col items-center text-[#07162e] uppercase h-[100px] lg:h-[140px] mb-[40px] lg:mb-[60px] justify-center">
          <h3 className="text-2xl lg:text-3xl font-bold m-0">Upcoming Events</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1500px] mx-auto">
          {events.map((event) => (
            <div key={event.slug} className="my-2">
              <div className="event bg-white shadow-sm">
                <Link href={event.slug} className="block no-underline text-black">
                  <div
                    className="h-[180px] bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url(${event.logoUrl})`,
                      backgroundSize: "70% auto",
                    }}
                  />
                  <div className="border-t border-gray-200 flex min-w-full">
                    <div
                      className="flex items-center justify-center px-2 py-1 text-white text-sm font-semibold w-5/12"
                      style={{ backgroundColor: event.bgColor }}
                    >
                      <span className="text-center leading-[18px]">{event.date}</span>
                    </div>
                    <div className="flex items-center px-3 py-2 text-xs text-[#969696] w-7/12 gap-1">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#969696] text-xs" />
                      <span className="font-normal">{event.location}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/events/championships"
            className="inline-block px-6 py-2 border-2 border-[#d13e48] text-[#d13e48] uppercase text-sm tracking-wider font-medium no-underline hover:bg-[#d13e48] hover:text-white transition-all duration-300"
          >
            All Championships
          </Link>
        </div>
      </div>
    </section>
  );
}
