import ScrollFloat from "./ScrollFloat";

export default function About() {
  return (
    <section
      id="about"
      // Tambahan pt-28 agar tidak terpotong navbar saat di-scroll
      className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden pt-28 pb-30 scroll-mt-10"
    >
      {/* Background Text / Heading */}
      <ScrollFloat
       animationDuration={1.8}
  ease="power4.out"
  scrollStart="top 100%"
  scrollEnd="center 45%"
  stagger={0.12}
        containerClassName="
          relative
          z-10
          mb-16
          flex
          justify-center
          pointer-events-none
          select-none
          whitespace-nowrap
        "
        textClassName="
          text-4xl
          sm:text-8xl
          lg:text-[170px]
          font-black
          uppercase
          tracking-tight
          leading-none
          text-black
        "
      >
        ABOUT ME
      </ScrollFloat>

      {/* Konten Tengah */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <p className="lg:text-3xl sm:text-xl leading-relaxed text-neutral-600 font-mono font-semibold">
          Hallo! Nama saya{" "}
          <span className="font-mono font-bold text-black">Excellio</span>, Saya bersekolah di SMKN 8 Semarang dan merupakan Frontend Developer yang berfokus pada pengembangan antarmuka web modern, responsif, dan mudah digunakan. 
          Selain coding, saya juga tertarik pada desain grafis dan branding, serta aktif mengembangkan keterampilan melalui proyek pribadi dan mempelajari teknologi baru. 
          Saat ini, saya sedang mencari kesempatan magang (PKL) untuk memperoleh pengalaman industri, mengembangkan kemampuan teknis, serta memahami alur kerja pengembangan perangkat lunak di lingkungan profesional. 
          Saya memiliki semangat belajar yang tinggi, mampu bekerja sama dalam tim, dan terus meningkatkan kemampuan pemecahan masalah untuk membangun solusi digital yang andal dan bermanfaat.
        </p>

        {/* Garis Pemisah */}
        <div className="my-12 mx-auto h-[2px] w-24 bg-neutral-300"></div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
          <div>
            <h3 className="text-3xl font-black lg:text-4xl text-neutral-900">2+</h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-neutral-400">
              Years Learning
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black lg:text-4xl text-neutral-900">15+</h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-neutral-400">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-black lg:text-4xl text-neutral-900">100%</h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-neutral-400">
              Passion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}