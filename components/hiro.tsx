"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import excl from "../public/excel-no-bg.png";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Hiro() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden text-neutral-900"
    >
      {/* Background Grid Modern */}
      <div className="absolute inset-0 z-0 " />

      {/* =========================================
          1. DESKTOP VIEW (Teks 1 Baris Bergerak Kanan)
      ========================================== */}
      <div className="absolute top-1/2 left-0 z-0 hidden w-screen -translate-y-1/2 py-4 pointer-events-none md:block">
        <Marquee direction="right" speed={50} gradient={false}>
          <span 
            className="text-[30vw] leading-none font-bold uppercase tracking-tighter mr-16 text-transparent"
            style={{ WebkitTextStroke: "1px #000",

              
             }}
          >
            FRONTEND DEVELOPER &nbsp;&nbsp;
          </span>
        </Marquee>
      </div>

      {/* =========================================
          2. MOBILE VIEW (Teks 2 Baris Berlawanan Arah)
      ========================================== */}
      <div className="absolute top-[43%] left-0 z-0 flex w-screen -translate-y-1/2 flex-col py-4 pointer-events-none md:hidden">
        {/* Baris Atas: Frontend ke Kanan */}
        <Marquee direction="left" speed={40} gradient={false}>
          <span 
            className="text-[30vw] leading-none font-black uppercase tracking-tighter mr-10 text-transparent"
            style={{ WebkitTextStroke: "1px #000" }}
          >
            EXCELLIO &nbsp;&nbsp;
          </span>
        </Marquee>

        <Marquee direction="right" speed={40} gradient={false}>
          <span 
            className="text-[30vw] leading-none font-black uppercase tracking-tighter mr-10 text-transparent"
            style={{ WebkitTextStroke: "1px #000" }}
          >
            FRONTEND developer &nbsp;&nbsp; &nbsp;&nbsp;
          </span>
        </Marquee>

        <br />
        
        {/* Baris Bawah: Developer ke Kiri */}
        <Marquee direction="left" speed={40} gradient={false}>
          <span 
            className="text-[30vw] leading-none font-black uppercase tracking-tighter mr-10 text-transparent"
            style={{ WebkitTextStroke: "1px #000" }}
          >
            DEVELOPER &nbsp;&nbsp;
          </span>
        </Marquee>
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 lg:px-8">
        
        {/* Main Canvas */}
        <div className="relative flex flex-1 flex-col items-center justify-center py-10">
          {/* Gambar dengan Shadow Keras ala Poster */}
          <Image
            src={excl}
            alt="Excellio Character"
            priority
            // Perbaikan kelas ukuran gambar & penambahan efek active: untuk HP
            className="relative z-10 w-[80vw] sm:w-105 md:w-125 lg:w-160 object-contain drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 active:translate-y-2 active:-rotate-2"
          />
        </div>

        {/* Footer Layout */}
        <footer className="grid grid-cols-1 gap-8 border-t-2 border-neutral-900 pt-6 md:grid-cols-2">
          
          {/* Kiri: Tombol Brutalis */}
          <div className="flex items-start">
            <Link
              href="#project"
              className="group relative flex h-20 w-full items-center justify-between border-2 border-neutral-900 bg-neutral-900 px-6 text-white transition-all duration-200 hover:bg-yellow-400 hover:text-neutral-900 active:bg-yellow-400 active:text-neutral-900 md:w-auto"
              aria-label="Go to About Section"
            >
              <span className="font-mono text-sm font-bold uppercase tracking-widest">
                Explore Me
              </span>
              <ArrowDownRight
                size={28}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-active:translate-x-1 group-active:translate-y-1"
              />
            </Link>
          </div>

          {/* Kanan: Scroll Hint */}
          <div className="flex items-end justify-start md:justify-end">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
              [ Scroll to Discover ]
            </span>
          </div>

        </footer>
      </div>
    </section>
  );
}