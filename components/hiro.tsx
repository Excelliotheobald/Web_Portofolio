"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import excl from "../public/excel-no-bg.png";
import Link from "next/link";

export default function Hiro() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef(null);

  // Fungsi untuk melacak pergerakan mouse (khusus Desktop)
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // nilai 0 sampai 1
    const y = (e.clientY - rect.top) / rect.height; // nilai 0 sampai 1
    setMousePos({ x, y });
  };

  // Array kata-kata untuk efek animasi staggered
  const headingText = ["Nama", "ku", "Muhammad", "Excellio"];

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden  text-neutral-900"
    >
      {/* CSS untuk Animasi ReactBits Style (BlurIn & Floating) */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blurIn {
            0% { opacity: 0; filter: blur(12px); transform: translateY(20px); }
            100% { opacity: 1; filter: blur(0px); transform: translateY(0); }
          }
          .animate-blur-in {
            opacity: 0;
            display: inline-block;
            animation: blurIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `
      }} />

      {/* Background Grid Modern */}
      <div className="absolute inset-0 z-0" />

      {/* Dynamic Mouse Glow (Mengikuti Kursor di Desktop) */}
      

      {/* Parallax Outline Text (Bergerak mengikuti mouse) */}
      <div 
        className="absolute top-1/2 right-0 z-0 hidden select-none text-[25vw] font-black uppercase tracking-tighter text-transparent pointer-events-none md:block"
        style={{ 
          WebkitTextStroke: "1px #e5e5e5",
          transform: `translate(${(mousePos.x - 0.5) * -40}px, ${(mousePos.y - 0.5) * -40}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        2024
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 lg:px-8">
        
        {/* Main Canvas */}
        <div className="flex flex-1 flex-col items-center justify-center gap-12 pt-24 pb-8 md:flex-row md:items-center md:justify-between md:gap-8">
          
          {/* KIRI: Teks dengan Animasi Staggered */}
          <div className="text-center md:text-left max-w-xl">
            <p 
              className="font-mono text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4 animate-blur-in" 
              style={{ animationDelay: '0.1s' }}
            >
              Hallo dunia
            </p>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-neutral-900 leading-[1.1]">
              {headingText.map((word, i) => (
                <span 
                  key={i} 
                  className={`animate-blur-in ${word === "Excellio" ? "text-yellow-400" : "text-neutral-900"}`} 
                  style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </h1>

            <p 
              className="mt-6 text-base sm:text-lg text-neutral-600 max-w-md mx-auto md:mx-0 animate-blur-in" 
              style={{ animationDelay: '1s' }}
            >
              PPLG Student From SMK Negeri 8 Semarang
            </p>
          </div>

          {/* KANAN: Gambar dengan Animasi Float */}
          <div className="relative flex items-center justify-center animate-float">
            <Image
              src={excl}
              alt="Excellio Character"
              priority
              // Efek hover & active tetap dipertahankan
              className="relative z-10 w-[70vw] sm:w-[380px] md:w-[400px] lg:w-[600px] object-contain drop-shadow-[12px_12px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 active:translate-y-2 active:-rotate-2"
            />
          </div>
        </div>

        {/* Footer Layout (Dengan animasi muncul tertunda) */}
        <footer 
          className="grid w-full grid-cols-1 gap-4 border-t-2 border-neutral-900 pt-4 md:grid-cols-2 md:gap-8 md:pt-6 animate-blur-in"
          style={{ animationDelay: '1.2s' }}
        >
          <div className="flex items-start">
            <Link
              href="#project"
              className="group relative flex h-16 w-full items-center justify-between border-2 border-neutral-900 bg-neutral-900 px-6 text-white transition-all duration-200 hover:bg-yellow-400 hover:text-neutral-900 active:bg-yellow-400 active:text-neutral-900 md:h-20 md:w-auto"
              aria-label="Go to About Section"
            >
              <span className="font-mono text-sm font-bold uppercase tracking-widest">
                Explore Me
              </span>
              <ArrowDownRight
                size={24}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-active:translate-x-1 group-active:translate-y-1 md:size-7"
              />
            </Link>
          </div>

          <div className="flex items-end justify-start md:justify-end">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 md:text-xs">
              [ Scroll to Discover ]
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}