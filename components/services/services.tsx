"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "1",
    title: "Web Design",
    features: [
      "Responsive layouts for all devices",
      "User-friendly and intuitive UI",
      "SEO optimized for better ranking",
      "Fast loading times",
    ],
    images: [
      "/images/web1.jpg",
      "/images/web2.jpg",
      "/images/web3.jpg",
      "/images/web4.jpg",
    ],
    portfolioUrl: "https://yourportfolio.com/web-design",
  },
  {
    number: "2",
    title: "Graphic Design",
    features: [
      "Brand identity and logo design",
      "Marketing materials and brochures",
      "Custom illustrations",
      "Print and digital graphics",
    ],
    images: [
      "/images/graphic1.jpg",
      "/images/graphic2.jpg",
      "/images/graphic3.jpg",
      "/images/graphic4.jpg",
    ],
    portfolioUrl: "https://yourportfolio.com/graphic-design",
  },
  {
    number: "3",
    title: "Digital Marketing",
    features: [
      "Social media strategy and management",
      "Email marketing campaigns",
      "Paid ads optimization",
      "Analytics and reporting",
    ],
    images: [
      "/images/marketing1.jpg",
      "/images/marketing2.jpg",
      "/images/marketing3.jpg",
      "/images/marketing4.jpg",
    ],
    portfolioUrl: "https://yourportfolio.com/digital-marketing",
  },
  {
    number: "4",
    title: "Photography",
    features: [
      "Professional portrait sessions",
      "Event photography",
      "Product and commercial shoots",
      "Photo editing and retouching",
    ],
    images: [
      "/images/photo1.jpg",
      "/images/photo2.jpg",
      "/images/photo3.jpg",
      "/images/photo4.jpg",
    ],
    portfolioUrl: "https://yourportfolio.com/photography",
  },
  {
    number: "5",
    title: "Video Production",
    features: [
      "Concept development and scripting",
      "Filming and directing",
      "Post-production editing",
      "Animation and motion graphics",
    ],
    images: [
      "/images/video1.jpg",
      "/images/video2.jpg",
      "/images/video3.jpg",
      "/images/video4.jpg",
    ],
    portfolioUrl: "https://yourportfolio.com/video-production",
  },
];

export default function Main() {
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollSectionRef.current) return;

    const section = scrollSectionRef.current;
    const wrapper = section.querySelector<HTMLDivElement>(".wrapper");
    if (!wrapper) return;

    const items = wrapper.querySelectorAll<HTMLDivElement>(".item");

    items.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, { yPercent: 100 });
      }
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, index) => {
      if (index === items.length - 1) return;

      timeline.to(item, {
        scale: 0.85,
        borderRadius: "10px",
      });

      timeline.to(
        items[index + 1],
        {
          yPercent: 0,
        },
        "<"
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      timeline.kill();
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <section
        ref={scrollSectionRef}
        className="h-screen pt-16" // padding for navbar offset
      >
        <div className="wrapper h-screen relative">
          <div className="flex justify-start items-center h-full relative">
            {services.map(
              ({ number, title, features, images, portfolioUrl }) => (
                <article
                  key={number}
                  className="item absolute inset-0 w-screen h-full flex flex-col shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden bg-[#0b2c2f]"
                >
                  {/* Top half */}
                  <div className="flex flex-col md:flex-row w-full h-[45%] md:h-[40%] border-b border-gray-700">
                    {/* Title Left */}
                    <div className="relative w-full md:w-1/2 p-6 md:p-12 flex items-center">
                      <h2 className="item_number absolute top-6 left-6 md:top-10 md:left-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-[#092327] flex items-center justify-center font-medium text-lg md:text-xl">
                        {number}
                      </h2>
                      <h2 className="ml-14 md:ml-16 text-3xl md:text-5xl font-bold leading-tight text-white">
                        {title}
                      </h2>
                    </div>
                    {/* Features Right */}
                    <div className="w-full md:w-1/2 p-6 md:p-12 overflow-auto flex flex-col justify-center">
                      <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-300 max-h-full">
                        {features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom half */}
                  <div className="w-full h-[55%] md:h-1/2 p-6 mb-8 md:p-8 flex flex-col">
                    {/* Portfolio link */}
                    <Link
                      href={portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 md:mb-6 inline-block text-teal-300 font-semibold hover:underline self-start md:self-end text-sm md:text-base"
                    >
                      View All Works
                    </Link>
                    {/* Images grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-grow overflow-hidden rounded-md">
                      {images.map((src, i) => (
                        <div
                          key={i}
                          className="relative overflow-hidden aspect-video rounded-md"
                        >
                          <Image
                            src={src}
                            alt={`${title} work ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={i === 0}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
