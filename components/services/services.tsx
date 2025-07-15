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
    title: "Branding & Design",
    features: [
      "Logo Design",
      "Brand Identity (Fonts, Colors, Guidelines)",
      "Brochures, Catalogs & Menus",
      "Hoarding Board Designs",
      "Personalized Poster Designs",
      "Business Cards, Letterheads & Stationery",
      "Presentation Decks & Social Media Templates",
    ],
    images: [
      "/images/branding.png",
      "/images/Kurta Kartel.png",
      "/images/Stationery Design.png",
      "/images/brochure.png",
    ],
    portfolioUrl: "/portfolio",
  },
  {
    number: "2",
    title: "Video Production",
    features: [
      "Instagram Reels, Shorts & Ads",
      "Logo Reveal Animations",
      "Motion Graphics / Infographic Videos",
      "Explainer Videos (2D/3D)",
      "Product Shoots & Editing",
      "Full Campaign: Shoot → Edit → Post",
    ],
    images: [
      "/videos/Logo Animation.mp4",
      "/videos/Logo Animation 2.mp4",
      "/videos/Smoothie Bowl Ad.mp4",
      "/videos/Coffee Ad Video.mp4",
    ],
    portfolioUrl: "/portfolio",
  },
  {
    number: "3",
    title: "Web Design",
    features: [
      "Landing Pages for Campaigns",
      "Portfolio / Product Showcase Sites",
      "E-Commerce Setup",
      "Website Maintenance & Support",
    ],
    images: [
      "/images/web1.png",
      "/images/web2.png",
      "/images/web3.png",
      "/images/web4.png",
    ],
    portfolioUrl: "/portfolio",
  },
  {
    number: "4",
    title: "3d Mockups",
    features: [
      "3D Product Mockups & Renders",
      "Branded Storefront/Booth Visuals",
      "Packaging in Realistic Scenes",
    ],
    images: [
      "/videos/Porsche Video.mp4",
      "/images/3d1.png",
      "/images/3d2.png",
      "/images/3d3.png",
    ],
    portfolioUrl: "/portfolio",
  },
  {
    number: "5",
    title: "Marketing & Social",
    features: [
      "Content Calendars",
      "Social Media Management",
      "Hashtag & Trend Optimization",
      "Influencer Coordination",
    ],
    images: [
      "/images/Herbae.png",
      "/videos/Drinks Ad Video.mp4",
      "/images/food.png",
      "/videos/Real Estate Post.webm",
    ],
    portfolioUrl: "/portfolio",
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
                    <div className="w-full md:w-1/2 px-6 md:px-12 overflow-auto flex flex-col justify-center">
                      <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-300 max-h-full">
                        {features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom half */}
                  <div className="w-full h-[55%] md:h-1/2 px-5 pt-3 mb-8 md:p-8 flex flex-col">
                    {/* Portfolio link */}
                    <div className="mb-3 md:mb-6 flex justify-between items-center">
                      <h3 className="pl-2 sm:pl-4 font-semibold text-xl md:text-3xl">
                        Demo Works
                      </h3>
                      <Link
                        href={portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-1 inline-block text-teal-300 font-semibold hover:underline self-end text-sm md:text-base"
                      >
                        View All Works
                      </Link>
                    </div>
                    {/* Images grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 md:flex-grow gap-4 overflow-hidden rounded-md">
                      {images.map((src, i) => {
                        const isVideo =
                          src.endsWith(".mp4") || src.endsWith(".webm");
                        return (
                          <div
                            key={i}
                            className="relative overflow-hidden max-sm:aspect-[4/3] rounded-md"
                          >
                            {isVideo ? (
                              <video
                                src={src}
                                autoPlay
                                muted
                                loop
                                className="w-full h-full object-cover rounded-md"
                              />
                            ) : (
                              <Image
                                src={src}
                                alt={`${title} work ${i + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={i === 0}
                              />
                            )}
                          </div>
                        );
                      })}
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
