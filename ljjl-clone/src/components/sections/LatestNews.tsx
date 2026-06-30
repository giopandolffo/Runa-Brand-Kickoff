import Link from "next/link";

const news = [
  {
    title: "Brown Belt Recap | 2026 World Championships",
    subtitle: "Elite Prospects Deliver Standout Performances Under Bright Lights",
    category: "Championship News",
    readTime: "12 min read",
    slug: "/news/brown-belt-recap-2026-world-championships",
    imgSrc: "https://images.unsplash.com/photo-1555597673-b21d5c9359b2?w=600&q=80",
  },
  {
    title: "American National Athlete Watch-List",
    subtitle: "Top Talent to Watch Ahead of the 2026 American Nationals",
    category: "Championship News",
    readTime: "6 min read",
    slug: "/news/american-national-athlete-watch-list",
    imgSrc: "https://images.unsplash.com/photo-1583473848882-f10222726f3d?w=600&q=80",
  },
  {
    title: "2026 World Championship Black Belt Recap",
    subtitle: "World-Class Athletes Capture the Jiu-Jitsu Spotlight",
    category: "Championship News",
    readTime: "21 min read",
    slug: "/news/2026-world-championship-black-belt-recap",
    imgSrc: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
  },
];

export default function LatestNews() {
  return (
    <section className="container-ljjl home-section py-8" id="featured-news">
      <div className="flex flex-col items-center text-[#07162e] uppercase h-[100px] lg:h-[140px] mb-[40px] lg:mb-[60px] justify-center">
        <h3 className="text-2xl lg:text-3xl font-bold m-0">Latest News</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1070px] mx-auto px-2">
        {news.map((item) => (
          <div key={item.slug} className="mb-4" id="featured-news-card">
            <Link
              href={item.slug}
              className="block no-underline bg-[#eee] overflow-hidden rounded-lg h-full flex flex-col justify-between"
            >
              <div className="flex flex-col">
                <div className="relative overflow-hidden" style={{ aspectRatio: "1.77" }}>
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="text-[#d13e48] font-bold text-lg mx-[1.75rem] my-[0.9rem]">
                  {item.title}
                </div>
                <div className="text-[#333] text-base mx-[1.75rem] overflow-hidden text-ellipsis line-clamp-3">
                  {item.subtitle}
                </div>
              </div>
              <div className="flex justify-between px-[1.75rem] pb-[1.75rem] pt-5">
                <div className="text-[#767676] text-base font-light uppercase">
                  {item.category}
                </div>
                <div className="text-[#767676] text-base font-light">{item.readTime}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center my-10">
        <Link
          href="/news"
          className="inline-block px-6 py-2 border-2 border-[#d13e48] text-[#d13e48] uppercase text-sm tracking-wider font-medium no-underline hover:bg-[#d13e48] hover:text-white transition-all duration-300"
        >
          All News
        </Link>
      </div>
    </section>
  );
}
