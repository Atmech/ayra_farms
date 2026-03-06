"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { name: "Stay", href: "/stay" },
    { name: "Food", href: "/food" },
    { name: "Experiences", href: "/experiences" },
    { name: "Community", href: "/community" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-parchment/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative gap-4">
          {/* Logo */}
          <Link href="/" className="font-hand text-3xl md:text-4xl text-ink hover:text-terracotta transition-colors z-50 whitespace-nowrap">
            Ayra Farms
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-4 lg:gap-6 font-serif text-lg text-ink/80">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:text-terracotta transition-colors hover:italic ${
                      pathname === link.href ? "text-terracotta italic underline decoration-1 underline-offset-4" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/booking"
              className="px-4 py-2 border-2 border-terracotta text-terracotta font-sans text-xs uppercase tracking-widest font-bold hover:bg-terracotta hover:text-white transition-all rounded-sm whitespace-nowrap"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-ink hover:text-terracotta transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl block h-[30px] leading-[30px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-parchment-dark/95 backdrop-blur-lg transform transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Grain overlay */}
        <div className="absolute inset-0 grain-overlay pointer-events-none" />
        
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8 relative z-10">
          <ul className="flex flex-col items-center gap-6 font-serif text-3xl text-ink">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-terracotta transition-colors hover:italic ${
                    pathname === link.href ? "text-terracotta italic underline decoration-1 underline-offset-4" : "text-ink/80"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="w-16 h-[1px] bg-ink/20 my-4" />

          <Link
            href="/booking"
            className="px-8 py-3 bg-terracotta text-white font-sans text-sm uppercase tracking-widest font-bold shadow-polaroid"
          >
            Book Now
          </Link>
          
          <div className="mt-8 flex gap-4">
            <Link href="/about" className="font-sans text-xs uppercase tracking-widest text-ink/50 hover:text-terracotta">
              Our Story
            </Link>
            <span className="text-ink/20">•</span>
            <Link href="/directions" className="font-sans text-xs uppercase tracking-widest text-ink/50 hover:text-terracotta">
              Directions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
