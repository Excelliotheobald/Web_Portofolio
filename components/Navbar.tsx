"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const desktopMenus = ["Home", "About", "Project"];

const mobileMenus = [
  {
    title: "Home",
    bg: "bg-[#1B1722]",
    delay: "delay-75",
    links: [
      { label: "Landing", href: "#home" },
      { label: "Hero", href: "#home" },
    ],
  },
  {
    title: "About",
    bg: "bg-[#2C2635]",
    delay: "delay-150",
    links: [
      { label: "About Me", href: "#about" },
      { label: "Project", href: "#project" },
    ],
  },
  {
    title: "Contact",
    bg: "bg-[#2C2635]",
    delay: "delay-300",
    links: [
      { label: "Contact Person", href: "#contact" },
      { label: "Instagram", href: "https://instagram.com" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((prev) => {
        const next = window.scrollY > 50;
        if (next !== prev) {
          if (next) setIsMenuOpen(false);
          return next;
        }
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = `fixed z-50 pointer-events-auto bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out border ${
    isScrolled
      ? "top-0 left-0 right-0 rounded-none border-transparent border-b-neutral-200 py-5"
      : isMenuOpen
      ? "top-5 left-[5%] right-[5%] rounded-3xl border-neutral-200 py-3"
      : "top-5 left-[5%] right-[5%] rounded-full border-neutral-200 py-3"
  }`;

  return (
    <nav className={navClasses}>
      <div
        className={`flex items-center justify-between transition-all duration-500 max-w-7xl mx-auto ${
          isScrolled ? "px-12" : "px-8"
        }`}
      >
        <h1 className="font-inter font-semibold text-black tracking-tight text-lg transition-transform duration-300 hover:scale-105 cursor-pointer">
          Excellio Porto
        </h1>

        <ul
          className={`hidden md:flex text-md font-semibold text-black transition-all duration-500 ${
            isScrolled ? "gap-12" : "gap-8"
          }`}
        >
          {desktopMenus.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="group relative opacity-50 transition-opacity duration-300 hover:opacity-100"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-amber-400 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden md:block cursor-pointer rounded-full border-2 border-black bg-black px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-black hover:shadow-[0_8px_20px_rgba(251,191,36,0.4)]"
        >
          Contact Person
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 text-black transition-transform duration-300 active:scale-90 hover:text-amber-500"
          aria-label="Toggle Menu"
        >
          <div
            className={`transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Dropdown Burger Menu Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          // Max-height dikurangi menjadi 400px karena cardnya mengecil
          isMenuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-3 pb-4 sm:grid-cols-3">
          {mobileMenus.map((card) => (
            <div
              key={card.title}
              // PERUBAHAN: padding dikurangi dari p-5 menjadi p-4
              className={`rounded-2xl ${card.bg} p-4 text-white transition-all duration-500 ${card.delay} ${
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              {/* PERUBAHAN: text-2xl menjadi text-lg, mb-6 menjadi mb-3 */}
              <h3 className="text-lg font-semibold mb-3">{card.title}</h3>

              {/* PERUBAHAN: space-y-3 menjadi space-y-2 */}
              <div className="space-y-2">
                {card.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    // PERUBAHAN: menambahkan text-sm agar teks link lebih kecil
                    className="block text-sm hover:opacity-70 transition-opacity"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}