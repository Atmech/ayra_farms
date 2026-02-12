"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "The Journal", href: "#about" },
  { label: "Sanctuary", href: "#stay" },
  { label: "Kitchen", href: "#dining" },
  { label: "Memories", href: "#experience" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 pt-6 pb-4 ${scrolled || mobileOpen ? "bg-parchment/95 backdrop-blur-md shadow-lg" : ""}`}>
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center relative">
            <div className="absolute -inset-4 bg-terracotta/20 rounded-full blur-xl" />
            <span className="font-hand text-4xl md:text-5xl font-bold text-ink relative z-10 -rotate-2">
              Ayra Farms
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ink/80 hover:text-terracotta transition-colors font-sans text-xs uppercase tracking-widest hover:line-through decoration-terracotta decoration-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Rotating Book Button */}
          <div className="hidden md:block relative group">
            <a
              href="#inquiry"
              className="relative block w-24 h-24 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12"
            >
              <svg
                className="absolute inset-0 w-full h-full text-terracotta animate-spin-slow"
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id="curve"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                  />
                </defs>
                <text className="text-[11px] uppercase tracking-[0.2em] font-bold fill-current">
                  <textPath xlinkHref="#curve">
                    Book Your Stay • Book Your Stay •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-2 border-2 border-dashed border-terracotta rounded-full flex items-center justify-center bg-parchment/80 backdrop-blur-sm">
                <span className="font-hand text-xl font-bold text-terracotta -rotate-12">
                  Book
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-ink hover:text-terracotta transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined font-light text-3xl">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 border-t border-ink/10 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-ink/80 hover:text-terracotta transition-colors font-sans text-sm uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inquiry"
              onClick={() => setMobileOpen(false)}
              className="inline-block mt-4 px-6 py-2 bg-terracotta text-white font-sans text-xs uppercase tracking-widest rounded-sm"
            >
              Book Your Stay
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
