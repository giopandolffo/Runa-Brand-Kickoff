const videos = [
  {
    title: "THE FUTURE IS NOW | Jalen's Road to 2x World Champion",
    id: "EbT2eIY6zoM",
  },
  {
    title: "Jansen Gomes: The Return | Becoming a 3x LJJL World Champion",
    id: "U6gF4ETeW9Q",
  },
  {
    title: "Tainan Dalpra's INSANE Run to Gold at Brasileiro 2026",
    id: "cxyDJfEoeXU",
  },
  {
    title: "Andy Murasaki Submitted EVERY Opponent at Brasileiros",
    id: "1Mg-baLesek",
  },
];

export default function YoutubeVideos() {
  return (
    <section className="container-ljjl home-section py-8" id="youtube-videos">
      <div className="flex flex-col items-center text-[#07162e] uppercase h-[100px] lg:h-[140px] mb-[40px] lg:mb-[60px] justify-center">
        <h3 className="text-2xl lg:text-3xl font-bold m-0">LJJL on YouTube</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        {videos.map((video) => (
          <div key={video.id} className="pb-4 lg:pb-0">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&playsinline=1&rel=0`}
                className="w-full h-full"
                allowFullScreen
                allow="autoplay"
                title={video.title}
              />
            </div>
            <div className="text-[#333] text-sm font-medium mt-2 line-clamp-2">
              {video.title}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center lg:pt-20 lg:pb-8 mt-8 lg:mt-0">
        <a
          href="https://www.youtube.com/@LJJL"
          target="_blank"
          rel="noopener"
          className="inline-block px-6 py-2 border-2 border-[#d13e48] text-[#d13e48] uppercase text-sm tracking-wider font-medium no-underline hover:bg-[#d13e48] hover:text-white transition-all duration-300"
        >
          Visit Our Channel
        </a>
      </div>
    </section>
  );
}
