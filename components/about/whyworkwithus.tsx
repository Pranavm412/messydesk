"use client";

import { DollarSign, Layers, Rocket, Handshake, Smile } from "lucide-react";

const reasons = [
  {
    icon: <DollarSign className="text-teal-400 w-6 h-6" />,
    title: "Startup-Friendly Pricing",
    description: "Affordable plans tailored to early-stage businesses.",
  },
  {
    icon: <Layers className="text-teal-400 w-6 h-6" />,
    title: "All-in-One Creative Studio",
    description: "Design, video, marketing — everything under one roof.",
  },
  {
    icon: <Rocket className="text-teal-400 w-6 h-6" />,
    title: "Fast Turnaround, High Quality",
    description: "Quick delivery without compromising on quality.",
  },
  {
    icon: <Handshake className="text-teal-400 w-6 h-6" />,
    title: "We Get Startups",
    description: "We’re a startup too — we move fast and think lean.",
  },
  {
    icon: <Smile className="text-teal-400 w-6 h-6" />,
    title: "Friendly, Flexible & Fun",
    description: "You’ll actually enjoy working with us.",
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="bg-[#0b2c2f] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Startups Choose Us
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className="bg-[#092327] p-8 rounded-xl border border-teal-600 shadow-md hover:shadow-lg transition-shadow text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                {icon}
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
