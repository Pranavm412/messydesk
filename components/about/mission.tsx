"use client";

export default function OurMission() {
  return (
    <section className="bg-[#0b2c2f] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Mission
        </h2>

        {/* Block 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <h3 className="text-2xl font-semibold text-teal-300">
            Work For Future with Unlimited Creative Ideas
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            At MessyDesk Studio, we are committed to shaping a better creative
            future. We believe in pushing the boundaries of design by
            consistently exploring new ideas, methods, and perspectives. Our
            mission is to deliver original, forward-thinking solutions that help
            brands evolve, connect meaningfully, and stand out in a dynamic
            market.
          </p>
        </div>

        {/* Block 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <h3 className="text-2xl font-semibold text-teal-300">
            Work for Money, Design for Love
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            While we understand the value of commercial success, our core
            passion lies in the craft of design. Every project we take on is
            driven by purpose and executed with love, dedication, and detail. We
            aim to create visuals that are not just functional, but emotionally
            engaging — work that aligns with your values and speaks
            authentically to your audience.
          </p>
        </div>
      </div>
    </section>
  );
}
