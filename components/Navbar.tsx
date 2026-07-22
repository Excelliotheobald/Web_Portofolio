"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Optimasi Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((prev) => {
        const next = window.scrollY > 50;
        if (next !== prev) {
          if (next) setIsMenuOpen(false); // Tutup burger menu saat scroll
          return next;
        }
        return prev;
      });
    };

    // passive: true sangat penting untuk mencegah lag saat scroll di mobile & desktop
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      // 1. Hapus w-[90%] dan -translate-x-1/2
      // 2. Gunakan left-[5%] right-[5%] lalu ubah ke left-0 right-0 saat scroll
      // Ini jauh lebih ringan di-render oleh browser
      className={`fixed z-50 pointer-events-auto bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-[top,left,right,border-radius,padding,border-color] duration-500 ease-out border ${
        isScrolled
          ? "top-0 left-0 right-0 rounded-none border-transparent border-b-neutral-200 py-3"
          : isMenuOpen
          ? "top-3 left-[5%] right-[5%] rounded-3xl border-neutral-200 py-2"
          : "top-3 left-[5%] right-[5%] rounded-full border-neutral-200 py-2"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-[padding] duration-500 max-w-7xl mx-auto ${
          isScrolled ? "px-8" : "px-6"
        }`}
      >
        <h1 className="font-inter font-semibold text-black tracking-tight text-lg">
          Excellio Porto
        </h1>

        {/* Menu Desktop */}
        <ul
          className={`hidden md:flex text-sm font-semibold text-black transition-[gap] duration-500 ${
            isScrolled ? "gap-12" : "gap-8"
          }`}
        >
          <li>
            <Link
              href="#home"
              className="opacity-50 transition duration-300 hover:opacity-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="opacity-50 transition duration-300 hover:opacity-100"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#project"
              className="opacity-50 transition duration-300 hover:opacity-100"
            >
              Project
            </Link>
          </li>
        </ul>

        <div className="hidden md:block cursor-pointer rounded-full border-2 border-black bg-black px-4 py-2 text-sm font-semibold text-white 
        transition-colors  duration-300 hover:bg-yellow-400 hover:text-black">
          Contact Person
        </div>

        {/* Tombol Burger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-black transition-transform duration-300 active:scale-90"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Burger Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        } ${isScrolled ? "px-8" : "px-6"}`}
      >
        <ul className="flex flex-col gap-6 pt-6 pb-8 text-center border-t border-neutral-200 mt-3">
          <li onClick={() => setIsMenuOpen(false)}>
            <Link
              href="#home"
              className="text-lg font-semibold text-black opacity-70 transition hover:opacity-100"
            >
              Home
            </Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link
              href="#about"
              className="text-lg font-semibold text-black opacity-70 transition hover:opacity-100"
            >
              About
            </Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link
              href="#project"
              className="text-lg font-semibold text-black opacity-70 transition hover:opacity-100"
            >
              Project
            </Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <div className="inline-block cursor-pointer rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-80">
              Contact Person
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}