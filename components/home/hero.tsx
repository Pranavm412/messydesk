"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const headingRef = useRef(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Animate videos from center outward
    videoRefs.current.forEach((video, index) => {
      if (video && containerRef.current) {
        const bounds = (
          containerRef.current as HTMLElement
        ).getBoundingClientRect();
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const videoBounds = video.getBoundingClientRect();

        // Reset position to center
        gsap.set(video, {
          x: centerX - videoBounds.left - videoBounds.width / 2,
          y: centerY - videoBounds.top - videoBounds.height / 2,
          opacity: 0,
        });

        // Animate out to their natural positions
        gsap.to(video, {
          x: 0,
          y: 0,
          opacity: 1,
          delay: 0.5 + index * 0.2,
          duration: 1.4,
          ease: "power4.out",
        });
      }
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 md:pt-40 pb-20 min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Decorative blurry shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-36 h-36 bg-yellow-400 rounded-full opacity-20 top-12 left-10 blur-2xl" />
        <div className="absolute w-24 h-24 bg-white rounded-full opacity-10 bottom-10 right-16 blur-xl" />
        <div className="absolute border-t border-white opacity-10 w-full top-3/4 left-0" />
        <div className="absolute border-t border-white opacity-10 w-full top-2/10 left-0" />
        <div className="absolute border-t border-white opacity-10 w-full top-39/40 left-0" />
        <div className="absolute border-r border-white opacity-10 h-full top-0 left-3/4" />
        <div className="absolute border-r border-white opacity-10 h-full top-0 left-1/20" />
        <div className="absolute border-r border-white opacity-10 h-full top-0 left-2/20" />
      </div>

      {/* Heading */}
      <header className="relative z-10 text-center px-6 max-w-5xl text-shadow-lg">
        <h1
          ref={headingRef}
          className="text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[8rem] font-decalotype font-bold text-white leading-tighter"
        >
          For All Your Creative Needs
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 font-sans">
          A creative studio where ideas thrive in beautiful disorder.
        </p>
      </header>

      {/* Scattered Videos (absolute but responsive) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Video 1 - Top Left */}
        <video
          ref={(el) => {
            videoRefs.current[0] = el;
          }}
          className="absolute top-[7%] max-md:top-[15%] left-[9%] w-50 md:w-75 lg:w-90 rounded-xl shadow-xl object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/Logo Animation.mp4"
        />

        {/* Video 2 - Bottom Right */}
        <video
          ref={(el) => {
            videoRefs.current[1] = el;
          }}
          className="absolute bottom-[24%] max-sm:bottom-[13%] right-[5%] w-28 sm:w-36 md:w-48 lg:w-56 rounded-xl shadow-xl object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/Coffee Ad Video.mp4"
        />

        {/* Video 3 - Left Center */}
        <video
          ref={(el) => {
            videoRefs.current[2] = el;
          }}
          className="absolute top-5/6  max-sm:top-[90%] left-[5%] transform -translate-y-1/2 w-40 md:w-65 lg:w-80 rounded-xl shadow-xl object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/Porsche Video.mp4"
        />
      </div>
    </section>
  );
}
