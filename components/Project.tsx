"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";

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
    image1: "/79.png",
    image2: "/69.png",
    image3: "/81.png",
    github: "https://github.com/Excelliotheobald/PJBL_UCOY.git",
    figma: "https://www.figma.com/proto/fDgY5Lb59aUvzrzO7t0SP1/UCOY---Ujian-Coy?node-id=1-753&starting-point-node-id=1%3A738",
    demo: "#",
    tech: ["React Native", "Express"],
  },
  {
    title: "Bexsdoors",
    description: "Website e-commerce khusus untuk pintu.",
    image: "/bexs.png",
    github: "https://github.com/Excelliotheobald/PJBL_BEXSDOOR.git",
    figma: "https://www.figma.com/proto/kt6KihY0ThdLmb7oUcPKcC/BexsDoor---PJBL-1?node-id=2681-4105&starting-point-node-id=2681%3A4105",
    demo: "#",
    tech: ["PHP", "Tailwind", "Blade", "JS"],
  },
];

export default function Project() {
  return (
    <main id="project" className="relative w-full py-24 md:py-32 scroll-mt-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Header Sederhana */}
        <div className="mb-16 text-center md:mb-24">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
            My Work
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-neutral-900">
            Selected <span className="text-yellow-400">Projects</span>
          </h2>
        </div>

        {/* List Project (Grid 12 Kolom) */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12"
            >
              {/* Bingkai Gambar Utama */}
              <div className={`relative flex overflow-hidden border-2 border-neutral-900 aspect-[16/10] md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                
                {/* Cek jika project memiliki 3 gambar (UCOY) */}
                {project.image1 ? (
                  <div className="flex w-full h-full ">
                    <div className="relative w-1/3 h-full p-2">
                      <Image
                        src={project.image1}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-90"
                      />
                    </div>
                    <div className="relative w-1/3 h-full p-2">
                      <Image
                        src={project.image2}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-500 ease-out group-hover:scale-90"
                      />
                    </div>
                    <div className="relative w-1/3 h-full p-2 ">
                      <Image
                        src={project.image3}
                        alt={project.title}
                        fill
                        className="object-contain  transition-transform duration-500 ease-out group-hover:scale-90"
                      />
                    </div>
                  </div>
                ) : (
                  /* Jika project hanya memiliki 1 gambar */
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                )}
              </div>

              {/* Content */}
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1 md:text-right' : 'md:text-left'}`}>
                {/* Nomor urut gaya editorial */}
                <span className="font-mono text-sm text-neutral-400 mb-2 block">
                  0{index + 1}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-neutral-600">
                  {project.description}
                </p>

                {/* Tech Stack (Tanpa kotak/pill, murni teks mono) */}
                <div className={`mt-5 flex flex-wrap gap-3 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs uppercase tracking-widest text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tombol Aksi Tegas (Sesuai tema) */}
                <div className={`mt-8 flex flex-wrap gap-3 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                   <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-neutral-900 bg-neutral-900 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-yellow-400 hover:text-neutral-900"
                  >
                    <FaFigma size={14} />
                    desain
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-neutral-900 bg-neutral-900 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-yellow-400 hover:text-neutral-900"
                  >
                    <FaGithub size={14} />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-neutral-900 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-neutral-900 transition-all duration-200 hover:bg-neutral-900 hover:text-white"
                  >
                    Live Demo
                    <ArrowUpRight size={14} strokeWidth={3} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-24 flex flex-col items-center gap-4 border-t-2 border-neutral-900 pt-12">
          <p className="font-mono text-sm uppercase tracking-widest text-neutral-500">
            More projects coming soon...
          </p>
        </div>

      </div>
    </main>
  );
}