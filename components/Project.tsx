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
    description:
      "Aplikasi ujian yang interaktif dan aman.",
    image: "/project2.png",
    github: "https://github.com/Excelliotheobald/PJBL_UCOY.git",
    demo: "#",
    tech: ["React Native","express"],
  },
  {
    title: "Bexsdoors",
    description:
      "Website e-commerce khusus untuk pintu.",
    image: "/project3.png",
    github: "https://github.com/Excelliotheobald/PJBL_BEXSDOOR.git",
    demo: "#",
    tech: ["PHP", "Tailwind","Blade","js"],
  },
];

export default function Project() {
  return (
    <main id="project" className="min-h-screen  py-28 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-xl uppercase tracking-[0.3em] text-neutral-500 md:text-6xl">
            Selected Works
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-500">
            A collection of projects I've designed and built while learning web
            development.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-72 overflow-hidden bg-neutral-100 md:h-[420px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-8">
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-900">
                      {project.title}
                    </h2>

                    <p className="mt-4 leading-relaxed text-neutral-600">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white transition hover:bg-neutral-800"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 transition hover:bg-neutral-100"
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
        <div className="mt-24 text-center">
          <p className="text-neutral-400">
            More projects coming soon...
          </p>
        </div>
      </div>
    </main>
  );
}