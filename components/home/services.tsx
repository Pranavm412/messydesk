"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    name: "Branding & Design",
    title: "Bold Brands Begin Here",
    subtitle: "Crafting logos, guidelines, and visual identities that last.",
    image: "https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?w=600",
  },
  {
    name: "Video Production",
    title: "Visuals That Tell Stories",
    subtitle: "Producing sleek, story-driven videos that captivate.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600",
  },
  {
    name: "Web & Digital",
    title: "Web That Works",
    subtitle: "Interactive websites and apps tailored for humans.",
    image: "https://images.unsplash.com/photo-1707836885254-79b6e3d7b18d?w=600",
  },
  {
    name: "3D Mockups",
    title: "Ideas in 3D",
    subtitle: "Bring products to life with photorealistic mockups.",
    image: "https://images.unsplash.com/photo-1666696319287-a199c7bc2c64?w=600",
  },
  {
    name: "Marketing & Social",
    title: "Strategy Meets Scroll",
    subtitle: "Smart campaigns made for the digital era.",
    image: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?w=600",
  },
];

export default function Services() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // GSAP scroll animation
  useEffect(() => {
    sectionRefs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    idx: number
  ) => {
    e.preventDefault();
    const el = sectionRefs.current[idx];
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#092327] text-white px-4 md:px-8 lg:px-16 py-20 relative">
      {/* ✅ Sticky top nav for mobile */}
      <nav className="md:hidden sticky top-15 z-30 bg-[#092327] border-b border-white/10 mb-10 -mt-4 px-1 py-3 overflow-x-auto flex gap-3">
        {services.map((service, index) => (
          <a
            key={index}
            href={`#service-${index}`}
            onClick={(e) => handleNavClick(e, index)}
            className={`flex-shrink-0 text-sm font-medium whitespace-nowrap px-3 py-1 rounded-full transition-colors ${
              activeIndex === index
                ? "bg-yellow-400 text-[#092327]"
                : "text-white/60 hover:text-white"
            }`}
          >
            {service.name}
          </a>
        ))}
      </nav>

      <div className="flex gap-10">
        {/* ✅ Sticky Sidebar - Desktop (unchanged) */}
        <aside className="hidden md:flex flex-col justify-center sticky top-28 py-38 h-fit min-w-[220px]">
          {services.map((service, index) => (
            <a
              key={index}
              href={`#service-${index}`}
              onClick={(e) => handleNavClick(e, index)}
              className={`mb-4 text-left text-base font-semibold transition-colors ${
                activeIndex === index
                  ? "text-yellow-400"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {service.name}
            </a>
          ))}
        </aside>

        {/* Main Service Content */}
        <div className="flex-1 space-y-32">
          {services.map((service, index) => (
            <section
              key={index}
              id={`service-${index}`}
              data-index={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="scroll-mt-28"
            >
              <div className="w-full max-w-4xl mx-auto">
                <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-xl mb-8">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-lg md:text-xl text-white/70 mb-6">
                  {service.subtitle}
                </p>
                <Link
                  href="/services"
                  className="inline-block px-6 py-2 border-2 border-yellow-400 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-[#092327] transition"
                >
                  Learn More
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
