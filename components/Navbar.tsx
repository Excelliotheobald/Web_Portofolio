"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll Listener Sederhana
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-neutral-200 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo Sederhana */}
        <Link 
          href="#home" 
          className="font-mono text-sm font-bold uppercase tracking-widest text-neutral-900 transition-colors hover:text-yellow-500"
        >
          Excellio.
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden items-center gap-10 md:flex">
          {["Home", "About", "Project"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="group relative font-mono text-sm uppercase tracking-widest text-neutral-500 transition-colors hover:text-neutral-900"
              >
                {item}
                {/* Garis bawah minimalis */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol Contact Desktop */}
        <Link 
          href="#contact" 
          className="hidden border-2 border-neutral-900 px-5 py-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-900 transition-all duration-200 hover:bg-neutral-900 hover:text-white md:block"
        >
          Contact
        </Link>

        {/* Tombol Burger Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-neutral-900 transition-transform duration-300 active:scale-90 md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Dropdown Burger Menu Mobile (Lebih Bersih) */}
      <div
        className={`absolute left-0 top-full w-full bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-80 border-t border-neutral-200 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {["Home", "About", "Project"].map((item) => (
            <li key={item} onClick={() => setIsMenuOpen(false)}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="font-mono text-sm uppercase tracking-widest text-neutral-600 transition-colors hover:text-yellow-500"
              >
                {item}
              </Link>
            </li>
          ))}
          <li onClick={() => setIsMenuOpen(false)}>
            <Link 
              href="#contact" 
              className="mt-2 border-2 border-neutral-900 px-6 py-2 font-mono text-xs font-bold uppercase tracking-widest text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}