"use client";

import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import excl from "../public/excel-no-bg.png";
import Link from "next/link";

export default function Hiro() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden text-neutral-900"
    >
      {/* CSS Animasi Sederhana (Hanya Fade Up) */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-up {
            opacity: 0;
            animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
        `
      }} />

      {/* Konten Utama: Flex column di HP, Flex row di Desktop */}
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-6xl flex-col items-center justify-center px-6 py-10 lg:px-8">
        
        <div className="flex w-full flex-col items-center gap-10 md:flex-row md:justify-between md:gap-4">
          
          {/* KIRI: Teks */}
          <div className="fade-up max-w-xl text-center md:text-left" style={{ animationDelay: '0.1s' }}>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Hallo dunia, nama ku
            </p>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-neutral-900 leading-[1.05]">
              Muhammad <br className="md:hidden" />
              <span className="text-yellow-400">Excellio</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-md mx-auto md:mx-0">
              PPLG Student From SMK Negeri 8 Semarang
            </p>

            {/* Tombol CTA (Call to Action) */}
            <div className="mt-8 flex justify-center md:justify-start">
              <Link
                href="#project"
                className="group flex h-14 w-auto items-center justify-center gap-2 border-2 border-neutral-900 bg-neutral-900 px-6 text-white transition-all duration-200 hover:bg-yellow-400 hover:text-neutral-900 md:h-16"
                aria-label="Go to Project Section"
              >
                <span className="font-mono text-sm font-bold uppercase tracking-widest">
                  Explore Me
                </span>
                <ArrowDownRight
                  size={22}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* KANAN: Gambar */}
          <div className="fade-up relative flex items-center justify-center" style={{ animationDelay: '0.3s' }}>
            <Image
              src={excl}
              alt="Excellio Character"
              priority
              // Ukuran disederhanakan agar gambar tidak terlalu dominan/keluar layout
              className="relative z-10 h-[250px] w-auto object-contain drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:h-[350px] md:h-[450px] lg:h-[500px] transition-transform duration-300 hover:-translate-y-1"
            />
          </div>

        </div>

        {/* Scroll Indicator di bawah sendiri */}
        <div
  className="fade-up absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-5"
  style={{ animationDelay: "0.6s" }}
>
  <a
    href="https://github.com/Excelliotheobald"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:text-neutral-900"
  >
    <FaGithub size={22} />
  </a>

  <a
    href="https://instagram.com/excel.halilintar"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400"
  >
    <FaInstagram size={22} />
  </a>

  <a
    href="https://wa.me/628982115403"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:text-green-500"
  >
    <FaWhatsapp size={22} />
  </a>
</div>

      </div>
    </section>
  );
}