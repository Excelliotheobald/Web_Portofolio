import ScrollFloat from "./ScrollFloat";

export default function About() {
  return (
    <section
      id="about"
      // Ubah dari justify-center ke justify-start agar naik ke atas
      className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden pt-1 pb-30 scroll-mt-28"
    >
      {/* Background Text / Heading */}
      <ScrollFloat



        animationDuration={1}
        ease="back.inOut(1)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=50%"
        stagger={0.3}
        containerClassName="
          relative
          z-10
          mb-12
          flex
          justify-center
          pointer-events-none
          select-none
          whitespace-nowrap
        "
        textClassName="
          text-6xl
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
      <div   className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="text-lg sm:text-xl leading-relaxed text-neutral-600">
          Hallo! Nama saya{" "}
          <span className="font-bold text-black">Excellio</span>, saya
          bersekolah di SMKN 8 Semarang dan merupakan seorang Frontend
          Developer yang berfokus pada pengembangan antarmuka modern,
          responsif, dan intuitif untuk menghadirkan pengalaman pengguna yang
          nyaman, efisien, dan menyenangkan.
          Selain coding, saya juga menyukai desain grafis dan branding sebuah
          produk. Saya memiliki sebuah brand kaos yang juga saya bangun
          website-nya. Saya percaya bahwa produk yang hebat tercipta ketika
          desain, marketing, dan kode bekerja bersama.
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