"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const q = gsap.utils.selector(sectionRef);

      gsap.from(q(".fade-in"), {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0e1c1f] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 fade-in">
          <div className="w-full h-[300px] md:h-[400px] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/1.png" // Replace with actual image
              alt="About Messy Desk Studio"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-lg leading-relaxed space-y-6 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
            About Us
          </h2>
          <p>
            Messy Desk Studio is a multidisciplinary creative studio offering
            end-to-end services in motion graphics, 3D design, post-production,
            branding, and web design. We work closely with our clients to
            understand their goals and deliver work that is intentional,
            refined, and visually compelling.
          </p>
          <p>
            Every project is an opportunity for us to solve problems creatively,
            communicate with purpose, and bring ideas to life with excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
