"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#092327] text-white pt-12 pb-10 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left: Branding */}
        <div className="text-lg font-semibold tracking-wide text-center">
          Messy Desk Studio
        </div>

        {/* Center: Navigation */}
        <nav className="flex justify-center flex-wrap gap-y-4 gap-x-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-yellow-400 transition">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-yellow-400 transition">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </nav>

        {/* Right: Socials */}
        <div className="flex justify-center space-x-4 text-gray-400">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="w-5 h-5 hover:text-yellow-400 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5 hover:text-yellow-400 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="w-5 h-5 hover:text-yellow-400 transition" />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-xs text-center text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Messy Desk Studio. All rights
        reserved.
      </div>
    </footer>
  );
}
