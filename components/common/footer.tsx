"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import {
  SiUpwork,
  SiFreelancer,
  SiGumroad,
  SiFiverr,
  SiLinkedin,
} from "react-icons/si";

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
        <div className="flex justify-center space-x-5 text-gray-400">
          <Link
            href="https://gumroad.com/dashboard"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <SiGumroad size={20} />
          </Link>
          <Link
            href="https://www.freelancer.com/u/messydesks09"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <SiFreelancer size={20} />
          </Link>
          <Link
            href="https://www.fiverr.com/messydeskstudio/buying?source=avatar_menu_profile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <SiFiverr size={20} />
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~012baa97879989ad07?qpn-profile-completeness=employment"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <SiUpwork size={20} />
          </Link>
          <Link
            href="http://www.linkedin.com/in/messy-desk-studio-746b24372"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <SiLinkedin size={20} />
          </Link>
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
