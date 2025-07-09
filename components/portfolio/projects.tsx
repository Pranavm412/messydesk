"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const categories = ["All", "Web", "Design", "Video", "3D", "Marketing"];
import { projects } from "@/data/projects";

// const projects = [
//   {
//     id: 1,
//     title: "Landing Page",
//     image: "/images/projects/web1.jpg",
//     category: "Web",
//   },
//   {
//     id: 2,
//     title: "Brand Identity",
//     image: "/images/projects/graphic1.jpg",
//     category: "Graphic",
//   },
//   {
//     id: 3,
//     title: "Promo Video",
//     image: "/images/projects/video1.jpg",
//     category: "Video",
//   },
//   {
//     id: 4,
//     title: "Portrait Shoot",
//     image: "/images/projects/photo1.jpg",
//     category: "Photo",
//   },
//   {
//     id: 5,
//     title: "Mobile UI",
//     image: "/images/projects/web2.jpg",
//     category: "Web",
//   },
//   {
//     id: 6,
//     title: "Logo Design",
//     image: "/images/projects/graphic2.jpg",
//     category: "Graphic",
//   },
//   {
//     id: 7,
//     title: "Product Ad",
//     image: "/images/projects/video2.jpg",
//     category: "Video",
//   },
//   {
//     id: 8,
//     title: "Studio Shot",
//     image: "/images/projects/photo2.jpg",
//     category: "Photo",
//   },
//   {
//     id: 9,
//     title: "eCommerce Web",
//     image: "/images/projects/web3.jpg",
//     category: "Web",
//   },
//   {
//     id: 10,
//     title: "Flyer Design",
//     image: "/images/projects/graphic3.jpg",
//     category: "Graphic",
//   },
// ];

const ITEMS_PER_PAGE = 12;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  return (
    <section className="bg-[#0b2c2f] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Our Projects
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={clsx(
                "px-4 py-2 rounded-full border text-sm font-medium transition-all",
                cat === activeCategory
                  ? "bg-teal-500 text-white border-teal-500"
                  : "border-gray-600 text-gray-300 hover:bg-teal-600 hover:text-white"
              )}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1); // reset to page 1 on filter change
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#092327] rounded-lg overflow-hidden border border-teal-800"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={clsx(
                  "w-10 h-10 rounded-full border text-sm font-medium transition-all",
                  i + 1 === currentPage
                    ? "bg-teal-500 text-white border-teal-500"
                    : "border-gray-600 text-gray-300 hover:bg-teal-600 hover:text-white"
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
