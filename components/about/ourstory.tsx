"use client";

import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-[#092327] text-white pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            MessyDesk Studio began as a vision shared by five creatives from
            diverse disciplines, united by a passion for design and
            storytelling. What started at cluttered workspaces filled with
            sketches, screens, and spontaneous ideas has evolved into a
            collaborative design studio focused on crafting compelling visual
            content.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            Our name is a reflection of the creative journey — structured chaos
            that drives innovation.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/group.jpg" // Update this with your image
            alt="MessyDesk Studio workspace"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
