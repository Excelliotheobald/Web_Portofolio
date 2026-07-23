"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS featuring responsive design and smooth animations.",
    image: "/project1.png",
    github: "#",
    demo: "#",
    tech: ["Next.js", "Tailwind", "Motion"],
  },
  {
    title: "UCOY",
    description: "Aplikasi ujian yang interaktif dan aman.",
    image: "/project2.png",
    github: "https://github.com/Excelliotheobald/PJBL_UCOY.git",
    demo: "#",
    tech: ["React Native", "Express"],
  },
  {
    title: "Bexsdoors",
    description: "Website e-commerce khusus untuk pintu.",
    image: "/project3.png",
    github: "https://github.com/Excelliotheobald/PJBL_BEXSDOOR.git",
    demo: "#",
    tech: ["PHP", "Tailwind", "Blade", "JS"],
  },
];

export default function Project() {
  return (
    <main id="project" className="min-h-screen py-20 px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center md:mb-20">
          <p className="text-3xl font-bold uppercase tracking-[0.2em] text-neutral-900 md:text-6xl md:tracking-[0.3em] md:font-black">
            Selected Project
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-500 text-sm md:text-base">
            Ini adalah project yang telah saya pilih untuk saya tampilkan di portofolio
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-10 md:space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-[0.98] md:rounded-3xl"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-neutral-100 sm:h-72 md:h-105">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:mt-4 md:text-base">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-700 md:px-4 md:py-2 md:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tombol: Flex-col di HP, Flex-row di Desktop */}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10 md:gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm text-white transition hover:bg-neutral-800 active:bg-neutral-900 sm:w-auto md:text-base"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 text-sm transition hover:bg-neutral-100 active:bg-neutral-200 sm:w-auto md:text-base"
                    >
                      Live Demo
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center md:mt-24">
          <p className="text-neutral-400 text-sm md:text-base">
            More projects coming soon...
          </p>
        </div>
      </div>
    </main>
  );
}