"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const mediaItems = [
  { type: "image", src: "/images/1.png" },
  { type: "video", src: "/videos/Real Estate Ad Instagram Post.webm" },
  { type: "image", src: "/images/1.png" },
  { type: "video", src: "/videos/Real Estate Ads Video.webm" },
  { type: "image", src: "/images/1.png" },
  { type: "video", src: "/videos/Real Estate Ads Video.webm" },
  { type: "image", src: "/images/1.png" },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const camera = cameraRef.current;
    if (!camera || !itemRefs.current.length) return;

    // Set up camera zoom
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=5000",
        scrub: true,
        pin: true,
      },
    });

    tl.to(camera, {
      z: 6000,
      ease: "none",
    });

    // Each item fades in as it gets close to Z = 0 (camera position)
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const zPos = i * -800;

      gsap.set(el, { opacity: 0 });

      gsap.to(el, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const currentZ = progress * 6000; // same as camera Z
            const distanceToCamera = Math.abs(currentZ + zPos);
            const fadeDistance = 2000;

            const opacity =
              distanceToCamera < fadeDistance
                ? 1 - distanceToCamera / fadeDistance
                : 0;

            gsap.set(el, { opacity });
          },
        },
      });
    });
    if (ctaRef.current) {
      const ctaZ = -6400; // Same Z as the text itself

      gsap.set(ctaRef.current, { opacity: 0 });

      gsap.to(ctaRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const currentZ = progress * 6000;
            const distanceToCamera = Math.abs(currentZ + ctaZ);
            const fadeDistance = 2000;

            const opacity =
              distanceToCamera < fadeDistance
                ? 1 - distanceToCamera / fadeDistance + 0.2
                : 0;

            gsap.set(ctaRef.current, { opacity });
          },
        },
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#092327]"
    >
      <div className="absolute inset-0" style={{ perspective: "1200px" }}>
        <div
          ref={cameraRef}
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {mediaItems.map((item, i) => {
            const zPos = i * -800;
            const xOffset =
              i % 2 === 0 ? (isMobile ? 0 : -250) : isMobile ? 0 : 250;
            const yOffset =
              i % 3 === 0 ? (isMobile ? -40 : -100) : isMobile ? 40 : 100;

            return (
              <div
                key={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="absolute w-64 h-40 md:w-96 md:h-56 rounded-xl overflow-hidden shadow-xl opacity-0"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translateX(${xOffset}px)
                    translateY(${yOffset}px)
                    translateZ(${zPos}px)
                  `,
                  top: "50%",
                  left: "50%",
                }}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt="portfolio media"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            );
          })}

          {/* CTA text at the end */}
          <div
            ref={ctaRef}
            className="absolute text-center text-white w-full max-w-xl px-6"
            style={{
              top: "50%",
              left: "50%",
              transform: `
      translate(-50%, -50%)
      translateZ(-6000px)
    `,
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Dive Deeper Into Creativity
            </h2>
            <Link
              href="/portfolio"
              className="inline-block px-6 py-3 border-2 border-yellow-400 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-[#092327] transition"
            >
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
