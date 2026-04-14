"use client";

import Image from "next/image";
import { useState } from "react";

const ROOMS = [
  {
    id: "round-window-room",
    name: "Round Window Room",
    description: "Birdwatch through the iconic round window, stream flowing just beyond.",
    images: ["/new_images/roundWindowRoom1.jpeg", "/new_images/roundWindowRoom2.jpeg", "/new_images/roundWindowRoom3.jpeg"],
    capacity: "Up to 4 adults",
    amenities: ["King Bed", "Private Patio", "Round Window", "Handcrafted Furniture"],
  },
  {
    id: "terrace-room",
    name: "Terrace Room",
    description: "Open skies, sweeping farm views, and the rhythm of the Betel Nut plantation.",
    images: ["/new_images/Terrace_room1.png", "/new_images/Terrace_room2.png"],
    capacity: "Up to 3–4 adults",
    amenities: ["King Bed", "Private Terrace", "Bathtub", "Farm Views"],
  },
  {
    id: "cottage-room",
    name: "Cottage Room",
    description: "Earthy interiors, lazy sit-outs, and the quiet of a village afternoon.",
    images: ["/new_images/Cottage_room1.png", "/new_images/Cottage_room2.png"],
    capacity: "Up to 3 adults",
    amenities: ["King Bed", "Private Sit-out", "Nature Views", "Deck Chair"],
  },
];

const COMMON_AREAS = [
  {
    src: "/new_images/Screenshot2026-03-05at11.27.12PM.png",
    caption: "The Common Sit-out",
  },
];

type Room = (typeof ROOMS)[number];

function RoomCard({ room, isEven }: { room: Room; isEven: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + room.images.length) % room.images.length);
  const next = () => setActiveIndex((i) => (i + 1) % room.images.length);

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image Side — carousel */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="absolute -inset-4 border-2 border-dashed border-ink/20 pointer-events-none transform -rotate-1 z-0" />

        <div className="relative z-10">
          <div
            className={`relative bg-white p-3 shadow-xl transition-all duration-300 ${
              isEven
                ? "transform rotate-1 group-hover:-rotate-1"
                : "transform -rotate-1 group-hover:rotate-1"
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {room.images.map((src, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image
                    alt={`${room.name} — view ${i + 1}`}
                    className="object-cover filter contrast-[0.9] grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
                    src={src}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}

              {/* Prev / Next arrows */}
              {room.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous photo"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-ink/70 hover:bg-ink text-white w-8 h-8 flex items-center justify-center text-lg leading-none transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next photo"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-ink/70 hover:bg-ink text-white w-8 h-8 flex items-center justify-center text-lg leading-none transition-colors"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Dot indicators */}
            {room.images.length > 1 && (
              <div className="flex justify-center gap-2 mt-3">
                {room.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === activeIndex ? "bg-ink" : "bg-ink/25"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
        <div className="bg-paper-white/60 p-6 md:p-8 relative border-l-4 border-terracotta backdrop-blur-sm shadow-sm transition-shadow hover:shadow-md">
          <h3 className="font-serif text-4xl text-ink mb-1">{room.name}</h3>
          <p className="font-hand text-xl text-ink/70 mb-6 italic">
            &quot;{room.description}&quot;
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-sans text-xs uppercase tracking-widest text-ink/50 w-24 flex-shrink-0">
                Capacity
              </span>
              <span className="font-serif text-lg text-ink">{room.capacity}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-sans text-xs uppercase tracking-widest text-ink/50 w-24 flex-shrink-0 mt-1">
                Features
              </span>
              <ul className="font-sans text-sm text-ink/80 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {room.amenities.map((amenity, amIdx) => (
                  <li key={amIdx} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-terracotta rounded-full flex-shrink-0" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a href="#inquiry" className="inline-flex items-center gap-3 group/btn">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ink border-b border-terracotta pb-1 group-hover/btn:text-terracotta transition-colors">
              Inquire Availability
            </span>
            <span className="transform transition-transform group-hover/btn:translate-x-1 text-terracotta">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TheDwelling() {
  return (
    <section className="py-24 bg-parchment-dark/30 relative overflow-hidden" id="stay">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b-2 border-ink/80 pb-4 border-dashed">
          <div>
            <span className="font-hand text-2xl text-terracotta block mb-1">
              Where we sleep...
            </span>
            <h2 className="font-serif text-5xl text-ink">The Dwelling</h2>
          </div>
          <div className="mb-2">
            <span className="font-sans text-xs uppercase tracking-[0.3em] bg-ink text-white px-2 py-1">
              Architectural Notes
            </span>
          </div>
        </div>

        {/* Room List */}
        <div className="space-y-16 lg:space-y-24">
          {ROOMS.map((room, index) => (
            <RoomCard key={room.id} room={room} isEven={index % 2 === 0} />
          ))}
        </div>

        {/* Common Areas */}
        <div className="mt-20 lg:mt-28">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 border-b-2 border-ink/80 pb-4 border-dashed">
            <div>
              <span className="font-hand text-2xl text-terracotta block mb-1">
                Beyond the rooms...
              </span>
              <h2 className="font-serif text-4xl text-ink">Common Areas</h2>
            </div>
            <div className="mb-2">
              <span className="font-sans text-xs uppercase tracking-[0.3em] bg-ink text-white px-2 py-1">
                Shared Spaces
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMMON_AREAS.map((area, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-3 border-2 border-dashed border-ink/20 transform rotate-1 z-0" />
                <div className="relative z-10 bg-white p-3 shadow-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      alt={area.caption}
                      src={area.src}
                      fill
                      className="object-cover filter contrast-[0.9] grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <p className="font-hand text-sm text-ink/60 text-center mt-2">{area.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
