"use client";

import Image from "next/image";

const team = [
  {
    name: "Anurag",
    role: "Motion Graphics Designer",
    image: "/team/ava.jpg", // replace with real images
  },
  {
    name: "Arvind",
    role: "Video Editor",
    image: "/team/kunal.jpg",
  },
  {
    name: "Moon",
    role: "Graphic Designer",
    image: "/team/sara.jpg",
  },
  {
    name: "Nived",
    role: "3D Modeller",
    image: "/team/jordan.jpg",
  },
  {
    name: "Pranav",
    role: "Web Designer",
    image: "/team/nina.jpg",
  },
  {
    name: "Sidhu",
    role: "3D Designer",
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
