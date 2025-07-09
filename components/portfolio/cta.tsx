"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import {
  Camera,
  Film,
  PenTool,
  Monitor,
  Palette,
  Video,
  Mic,
  Music,
  Aperture,
  Image,
  Edit3,
  Layers,
  Type,
  Settings,
} from "lucide-react";

const icons = [
  { icon: Camera, top: "10%", left: "15%" },
  { icon: Film, top: "20%", right: "20%" },
  { icon: PenTool, bottom: "15%", left: "10%" },
  { icon: Monitor, bottom: "25%", right: "15%" },
  { icon: Palette, top: "50%", left: "5%" },
  { icon: Video, bottom: "5%", right: "5%" },
  { icon: Mic, top: "20%", left: "35%" },
  { icon: Music, bottom: "20%", left: "35%" },
  { icon: Aperture, top: "65%", right: "30%" },
  { icon: Image, top: "13%", right: "40%" },
  { icon: Edit3, top: "30%", right: "10%" },
  { icon: Layers, top: "75%", left: "25%" },
  { icon: Type, bottom: "10%", left: "50%" },
  { icon: Settings, top: "45%", left: "22%" },
];

export default function CTASection() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ctaRef.current) return;

    const elements = ctaRef.current.querySelectorAll(".bg-icon");

    elements.forEach((el) => {
      const randomX = Math.random() * 100 - 50;
      const randomY = Math.random() * 100 - 50;

      // Floating motion
      gsap.to(el, {
        x: randomX,
        y: randomY,
        duration: 1.5 + Math.random() * 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random(),
      });

      // Optional pulsing
      gsap.to(el, {
        scale: 1.1,
        duration: 1.5 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section
      ref={ctaRef}
      className="relative overflow-hidden bg-yellow-400 text-[#092327] py-24 px-6"
    >
      {/* Background Icons */}
      {icons.map(({ icon: Icon, ...style }, index) => (
        <div
          key={index}
          className="bg-icon absolute opacity-30 transition duration-300 transform pointer-events-none"
          style={{ ...style }}
        >
          <Icon className="w-8 h-8 md:w-10 md:h-10" />
        </div>
      ))}

      {/* CTA Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Let&apos;s Collaborate
        </h2>
        <p className="text-lg max-w-xl mx-auto text-[#2c3a3f]">
          Book a free discovery call with Messy Desk Studio and let&apos;s turn
          your creative vision into a bold, beautiful reality.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-[#092327] text-white rounded-full hover:scale-105 transition-transform duration-300"
        >
          Book a Free Call
        </Link>
      </div>
    </section>
  );
}
