import LogoLoop from "@/components/LogoLoop";

import {
  SiHtml5,

  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVercel,
  
  SiVuedotjs,
  SiFramer,
 
  SiKrita,
  SiPython,
  SiLinux,
} from "react-icons/si";

const techLogos = [
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/docs/Web/HTML" },
 
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  

  { node: <SiVuedotjs />, title: "Vue.js", href: "https://vuejs.org" },
  { node: <SiFramer />, title: "Framer Motion", href: "https://motion.dev" },
  
  { node: <SiKrita />, title: "Krita", href: "https://krita.org" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiReact />, title: "React Native", href: "https://reactnative.dev" },
  { node: <SiLinux />, title: "Linux", href: "https://kernel.org" },
];

export default function About() {
  return (
    <section
      id="about"
      // Bg putih bersih, menghilangkan glow dan grid yang membebani
      className="relative w-full overflow-hidden text-neutral-900 scroll-mt-10"
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:px-8">
        
        {/* Header Section Sederhana */}
        <div className="mb-12 text-center md:mb-16 md:text-left">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-neutral-900">
            About <span className="text-yellow-400">Me</span>
          </h2>
        </div>

        {/* Konten Tengah: Grid 2 Kolom Sederhana */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          
          {/* Kolom Kiri: Hook / Kalimat Pembuka */}
          <div className="md:col-span-5">
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-neutral-900">
              Frontend Developer & siswa di SMKN 8 Semarang.
            </h3>
            <p className="mt-4 text-base text-neutral-600">
              Fokus pada antarmuka web modern, responsif, dan mudah digunakan.
            </p>
          </div>

          {/* Kolom Kanan: Paragraf Cerita (Digabung agar lebih ringkas) */}
          <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-neutral-500">
            <p>
              Selain coding, saya juga tertarik pada desain grafis dan branding. Saya aktif mengembangkan keterampilan melalui proyek pribadi dan selalu antusias mempelajari teknologi baru.
            </p>
            <p>
              Saat ini, saya sedang mencari kesempatan magang (PKL) untuk memperoleh pengalaman industri, mengembangkan kemampuan teknis, serta memahami alur kerja pengembangan perangkat lunak di lingkungan profesional.
            </p>
            <p className="font-semibold text-neutral-700">
              Saya memiliki semangat belajar yang tinggi, mampu bekerja sama dalam tim, dan terus meningkatkan kemampuan pemecahan masalah untuk membangun solusi digital yang andal.
            </p>
          </div>
        </div>


        {/* Garis Pemisah Solid Tegas (Mengikuti gaya border Hiro.tsx) */}
    {/* Tech Stack */}
<div className="mt-20">
  <p className="text-center font-mono text-sm uppercase tracking-[0.25em] text-neutral-500">
    Tech Stack
  </p>

  <div className="mt-10 h-24">
    <LogoLoop
      logos={techLogos}
      speed={100}
      direction="left"
      logoHeight={42}
      gap={56}
      hoverSpeed={25}
      scaleOnHover
      fadeOut
      fadeOutColor="#ffffff"
      ariaLabel="Technology Stack"
    />
  </div>
</div>

       

       
      </div>
    </section>
  );
}