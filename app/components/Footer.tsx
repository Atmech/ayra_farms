"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-parchment-dark pt-20 pb-12 border-t-8 border-double border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left — Keep in touch */}
          <div className="md:col-span-5">
            <h4 className="font-hand text-4xl text-ink mb-6 rotate-[-2deg] inline-block">
              Keep in touch
            </h4>
            <p className="text-ink/60 font-serif text-lg mb-8 leading-relaxed max-w-sm">
              We send postcards from the farm every season. Recipes, harvest
              updates, and a little bit of quiet.
            </p>
            <form className="relative max-w-xs" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full bg-transparent border-b-2 border-ink/30 py-2 text-ink placeholder-ink/40 focus:ring-0 focus:border-terracotta transition-colors font-serif italic focus:outline-none"
                placeholder="Your address (email)"
                type="email"
              />
              <button
                className="absolute right-0 bottom-2 text-xs font-bold uppercase tracking-widest text-terracotta hover:text-ink transition-colors"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>

          {/* Center — Index */}
          <div className="md:col-span-3">
            <h5 className="font-sans text-xs font-bold tracking-widest uppercase text-ink/40 mb-6">
              Explore
            </h5>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3 font-serif text-xl text-ink">
                <li>
                  <Link
                    className="hover:text-terracotta transition-colors hover:italic decoration-1 underline-offset-4 hover:underline block"
                    href="/stay"
                  >
                    Sanctuary
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-terracotta transition-colors hover:italic decoration-1 underline-offset-4 hover:underline block"
                    href="/food"
                  >
                    Kitchen
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-terracotta transition-colors hover:italic decoration-1 underline-offset-4 hover:underline block"
                    href="/experiences"
                  >
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-terracotta transition-colors hover:italic decoration-1 underline-offset-4 hover:underline block"
                    href="/gallery"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3 font-serif text-xl text-ink">
                <li>
                  <Link
                    className="hover:text-terracotta transition-colors hover:italic decoration-1 underline-offset-4 hover:underline block"
                    href="/booking"
                  >
                    Bookings
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-terracotta transition-colors hover:italic decoration-1 underline-offset-4 hover:underline block"
                    href="/tariff"
                  >
                    Tariff
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-terracotta transition-colors hover:italic decoration-1 underline-offset-4 hover:underline block"
                    href="/about"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-terracotta transition-colors hover:italic decoration-1 underline-offset-4 hover:underline block"
                    href="/directions"
                  >
                    Directions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right — Coordinates */}
          <div className="md:col-span-4 relative">
            {/* Wax Seal */}
            <div className="absolute -top-10 -right-10 w-32 h-32 hidden lg:flex items-center justify-center opacity-80">
              <div className="w-24 h-24 wax-seal flex items-center justify-center">
                <span className="font-serif text-red-200 text-3xl font-bold italic opacity-60">
                  AF
                </span>
              </div>
            </div>
            <h5 className="font-sans text-xs font-bold tracking-widest uppercase text-ink/40 mb-6">
              Coordinates
            </h5>
            <p className="font-serif text-xl text-ink mb-2">
              Dapoli, Ratnagiri
              <br />
              Maharashtra, India
            </p>
            <div className="mt-8 flex gap-4">
              <a
                className="w-10 h-10 border border-ink/20 rounded-full flex items-center justify-center hover:bg-terracotta hover:text-white hover:border-transparent transition-all"
                href="https://www.instagram.com/ayra.farms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-serif italic text-sm">Ig</span>
              </a>
              <a
                className="w-10 h-10 border border-ink/20 rounded-full flex items-center justify-center hover:bg-terracotta hover:text-white hover:border-transparent transition-all"
                href="#"
              >
                <span className="font-serif italic text-sm">Fb</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ink/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <span className="font-hand text-2xl text-ink font-bold">
            Ayra Farms
          </span>
          <p className="text-ink/40 text-xs mt-4 md:mt-0 font-sans tracking-widest uppercase">
            © 2023 Heirloom Collection.
          </p>
        </div>
      </div>
    </footer>
  );
}
