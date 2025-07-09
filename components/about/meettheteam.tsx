"use client";

import Image from "next/image";

const team = [
  {
    name: "Ava Roy",
    role: "Creative Director",
    image: "/team/ava.jpg", // replace with real images
  },
  {
    name: "Kunal Mehra",
    role: "Art Director",
    image: "/team/kunal.jpg",
  },
  {
    name: "Sara Lim",
    role: "UX/UI Designer",
    image: "/team/sara.jpg",
  },
  {
    name: "Jordan Kim",
    role: "Developer",
    image: "/team/jordan.jpg",
  },
  {
    name: "Nina Das",
    role: "Motion Designer",
    image: "/team/nina.jpg",
  },
  {
    name: "Leo Singh",
    role: "Marketing Strategist",
    image: "/team/leo.jpg",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="bg-[#0b2c2f] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet the Team
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#092327] rounded-lg overflow-hidden shadow-lg p-6 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-teal-400">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-teal-300 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
