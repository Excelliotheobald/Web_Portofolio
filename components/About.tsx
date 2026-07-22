import ScrollFloat from "./ScrollFloat";
import Poto from "../public/poto.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      
      className="relative overflow-hidden py-30 sm:py-28 lg:py-36 scroll-mt-28"
    >
      {/* Background Text */}
      <ScrollFloat
      
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=50%"
        stagger={0.3}
        containerClassName="
          absolute
          top-1
          left-1/2
          -translate-x-1/2
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
          text-neutral-100
          leading-none
        "
      >
        ABOUT
      </ScrollFloat>

      <div  className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-28">
        {/* FOTO */}
        <div className="relative h-105 w-[320px] shrink-0 sm:h-125 sm:w-95 lg:h-130 lg:w-105">
          <div className="absolute inset-0 scale-95 rounded-[40px] bg-yellow-300/20 blur-3xl" />

          <div
            className="
              relative
              h-full
              rotate-[-4deg]
              rounded-[36px]
              border
              border-neutral-200
              bg-white
              shadow-[0_30px_60px_rgba(0,0,0,.08)]
              transition
              duration-500
              hover:rotate-0
            "
          >
            <div  className="m-5 flex h-[calc(100%-40px)] items-center justify-center rounded-[36px] border border-dashed border-neutral-300">
              <Image
                src={Poto}
                alt="Excellio"
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>

          <div className="absolute -right-5 top-12 hidden h-20 w-20 rounded-full border border-neutral-300 bg-white shadow-lg lg:block" />

          <div className="absolute -left-6 bottom-10 hidden h-12 w-12 rounded-full bg-yellow-300 lg:block" />
        </div>

        {/* TEXT */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-5 uppercase tracking-[0.45em] text-neutral-400">
            WHO AM I
          </p>

          <h2  className="text-4xl font-black leading-tight text-black sm:text-5xl lg:text-6xl">
            Frontend
            <br />
            Developer
          </h2>

          <div className="mx-auto mt-10 h-px w-24 bg-black lg:mx-0" />

          <p className="mt-10 leading-8 text-neutral-500">
            Hallo! Nama saya{" "}
            <span className="font-semibold text-black">Excellio</span>, saya
            bersekolah di SMKN 8 Semarang dan merupakan seorang Frontend
            Developer yang berfokus pada pengembangan antarmuka modern,
            responsif, dan intuitif untuk menghadirkan pengalaman pengguna yang
            nyaman, efisien, dan menyenangkan.
          </p>

          <p className="mt-6 leading-8 text-neutral-500">
            Selain coding, saya juga menyukai desain grafis dan branding sebuah
            produk. Saya memiliki sebuah brand kaos yang juga saya bangun
            website-nya. Saya percaya bahwa produk yang hebat tercipta ketika
            desain, marketing, dan kode bekerja bersama.
          </p>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap justify-center gap-8 lg:justify-start lg:gap-12">
            <div>
              <h3 className="text-3xl font-black lg:text-4xl">2+</h3>
              <p className="text-sm uppercase text-neutral-400">
                Years Learning
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black lg:text-4xl">15+</h3>
              <p className="text-sm uppercase text-neutral-400">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black lg:text-4xl">100%</h3>
              <p className="text-sm uppercase text-neutral-400">
                Passion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}