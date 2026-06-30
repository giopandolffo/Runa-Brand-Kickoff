import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#07162e] w-full text-center text-white">
      <div className="logo py-3">
        <Image
          src="/logo-ljjl.png"
          alt="LJJL Logo"
          width={100}
          height={100}
          className="mx-auto w-auto h-auto"
        />
      </div>
      <div className="pb-[18px]">
        <a
          href="https://help.ljjl.com"
          target="_blank"
          rel="noopener"
          className="text-[#d13e48] no-underline hover:text-gray-200 transition-colors duration-300 uppercase text-sm tracking-wider"
        >
          Contact Us
        </a>
      </div>
      <div className="w-[70%] mx-auto border-t border-b border-white/50 py-3">
        <div className="flex justify-center gap-4">
          <a href="https://www.instagram.com/ljjl/" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faInstagram} className="text-[#d13e48] text-2xl hover:text-gray-200 transition-colors" />
          </a>
          <a href="https://www.facebook.com/ljjl" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faFacebook} className="text-[#d13e48] text-2xl hover:text-gray-200 transition-colors" />
          </a>
          <a href="https://www.youtube.com/@LJJL" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faYoutube} className="text-[#d13e48] text-2xl hover:text-gray-200 transition-colors" />
          </a>
          <a href="https://www.twitter.com/ljjl" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faTwitter} className="text-[#d13e48] text-2xl hover:text-gray-200 transition-colors" />
          </a>
        </div>
      </div>
      <nav className="navbar flex justify-center mt-6 pb-8 uppercase text-sm font-normal">
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 list-none m-0 p-0">
          <li>
            <Link href="/events/championships" className="text-white no-underline hover:text-[#d13e48] transition-colors duration-300">
              Championships
            </Link>
          </li>
          <li>
            <Link href="/2026-athletes-ranking" className="text-white no-underline hover:text-[#d13e48] transition-colors duration-300">
              Athletes Ranking
            </Link>
          </li>
          <li>
            <Link href="/2026-academies-ranking" className="text-white no-underline hover:text-[#d13e48] transition-colors duration-300">
              Academies Ranking
            </Link>
          </li>
          <li>
            <Link href="/news" className="text-white no-underline hover:text-[#d13e48] transition-colors duration-300">
              News
            </Link>
          </li>
          <li>
            <Link href="/uniform" className="text-white no-underline hover:text-[#d13e48] transition-colors duration-300">
              Uniform
            </Link>
          </li>
          <li>
            <a href="https://learning.ljjl.com/" target="_blank" rel="noopener" className="text-white no-underline hover:text-[#d13e48] transition-colors duration-300">
              Rules Course
            </a>
          </li>
          <li>
            <button
              onClick={() => {}}
              className="text-white no-underline hover:text-[#d13e48] transition-colors duration-300 bg-transparent border-none cursor-pointer text-sm uppercase"
            >
              Cookie Settings
            </button>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
