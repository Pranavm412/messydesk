"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Camera, PenTool, Monitor, Video, Film } from "lucide-react";

const icons = [
  { icon: Camera, top: "10%", left: "10%" },
  { icon: Film, top: "30%", right: "15%" },
  { icon: PenTool, bottom: "15%", left: "5%" },
  { icon: Monitor, bottom: "25%", right: "10%" },
  { icon: Video, top: "50%", left: "50%" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }

    // floating icons
    const q = gsap.utils.selector(headerRef);
    q(".bg-icon").forEach((el: Element) => {
      gsap.to(el, {
        x: `random(-20, 20)`,
        y: `random(-20, 20)`,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: Math.random(),
      });
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative py-32 px-6 text-center bg-[#092327] text-white overflow-hidden"
    >
      {/* Background Icons */}
      {icons.map(({ icon: Icon, ...style }, index) => (
        <div
          key={index}
          className="bg-icon absolute opacity-10 pointer-events-none"
          style={{ ...style }}
        >
          <Icon className="w-10 h-10 md:w-12 md:h-12" />
        </div>
      ))}

      {/* Main Content */}
      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Our Expertise in Motion
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/70">
          At Messy Desk Studio, our services combine storytelling, design, and
          technology. From dynamic visuals to strategic branding — explore what
          we do best.
        </p>
      </div>
    </header>
  );
}
