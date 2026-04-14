"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ROOMS = [
  {
    id: "round-window-room",
    name: "Round Window Room",
    description: "Birdwatch through the iconic round window, stream flowing just beyond.",
    images: ["/new_images/roundWindowRoom1.jpeg", "/new_images/roundWindowRoom2.jpeg", "/new_images/roundWindowRoom3.jpeg"],
    capacity: "Up to 4 adults",
    amenities: ["King Bed", "Private Patio", "Round Window", "Handcrafted Furniture"],
    tariff: "₹7,000 / night (Weekdays) | ₹7,500 / night (Weekends & Holidays)",
    extraOccupancy: "₹2,000 / head / night (age 5+)",
    includes: "Breakfast included",
  },
  {
    id: "terrace-room",
    name: "Terrace Room",
    description: "Open skies, sweeping farm views, and the rhythm of the Betel Nut plantation.",
    images: ["/new_images/Terrace_room1.png", "/new_images/Terrace_room2.png"],
    capacity: "Up to 3–4 adults",
    amenities: ["King Bed", "Private Terrace", "Bathtub", "Farm Views"],
    tariff: "₹6,500 / night (Weekdays) | ₹6,800 / night (Weekends & Holidays)",
    extraOccupancy: "₹2,000 / head / night (age 5+)",
    includes: "Breakfast included",
  },
  {
    id: "cottage-room",
    name: "Cottage Room",
    description: "Earthy interiors, lazy sit-outs, and the quiet of a village afternoon.",
    images: ["/new_images/Cottage_room1.png", "/new_images/Cottage_room2.png"],
    capacity: "Up to 3 adults",
    amenities: ["King Bed", "Private Sit-out", "Nature Views", "Deck Chair"],
    tariff: "₹6,000 / night (Weekdays) | ₹6,500 / night (Weekends & Holidays)",
    extraOccupancy: "₹2,000 / head / night (age 5+)",
    includes: "Breakfast included",
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
  const next = () =>
    setActiveIndex((i) => (i + 1) % room.images.length);

  return (
    <div
      className={`flex flex-col lg:flex-row gap-12 lg:gap-20 ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Image Side — carousel */}
      <div className="w-full lg:w-1/2 relative">
        <div className="absolute -inset-4 border-2 border-dashed border-ink/20 transform -rotate-1 z-0" />
        <div className="relative z-10 bg-white p-3 shadow-xl transform rotate-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-parchment-dark">
            {room.images.map((src, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  alt={`${room.name} — view ${i + 1}`}
                  className="object-cover filter contrast-[0.9]"
                  src={src}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}

            {/* Prev / Next arrows — only if more than 1 image */}
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

      {/* Text Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
        <div className="bg-paper-white/60 p-8 relative border-l-4 border-terracotta backdrop-blur-sm shadow-sm">
          <h2 className="font-serif text-4xl text-ink mb-1">{room.name}</h2>
          <p className="font-hand text-xl text-ink/70 mb-8 italic">
            &quot;{room.description}&quot;
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <span className="font-sans text-xs uppercase tracking-widest text-ink/50 w-24 flex-shrink-0 pt-1">
                Details
              </span>
              <div className="font-serif text-lg text-ink">
                <p>Max Capacity: {room.capacity}</p>
                <p className="mt-1">Tariff: {room.tariff}</p>
                <p className="mt-1 text-sm text-ink/60">
                  Extra occupancy: {room.extraOccupancy}
                </p>
                <p className="mt-1 text-sm font-sans uppercase tracking-widest text-terracotta">
                  {room.includes}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-sans text-xs uppercase tracking-widest text-ink/50 w-24 flex-shrink-0 pt-1">
                Features
              </span>
              <div className="flex flex-wrap gap-2">
                {room.amenities.map((amenity, amIdx) => (
                  <span
                    key={amIdx}
                    className="bg-parchment border border-ink/10 px-3 py-1 font-sans text-xs text-ink/80 rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link
            href={`/booking?room=${room.id}`}
            className="inline-flex items-center justify-center px-8 py-3 bg-ink text-white font-sans text-sm uppercase tracking-widest hover:bg-terracotta transition-colors"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function StayContent() {
  return (
    <div className="pt-32 pb-24 bg-parchment min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <span className="font-hand text-3xl text-terracotta inline-block mb-4 -rotate-2">
            Rooms & Spaces
          </span>
          <h1 className="font-serif text-6xl md:text-7xl text-ink">The Dwelling</h1>
          <p className="mt-6 font-serif text-xl text-ink/70 max-w-2xl mx-auto italic">
            &quot;A collection of heirloom spaces built with local laterite stone, designed to let
            the outside in.&quot;
          </p>
        </div>

        {/* Room List */}
        <div className="space-y-24 mb-32">
          {ROOMS.map((room, index) => (
            <RoomCard key={room.id} room={room} isEven={index % 2 === 0} />
          ))}
        </div>

        {/* Common Areas */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 border-b-2 border-ink/80 pb-4 border-dashed">
            <div>
              <span className="font-hand text-2xl text-terracotta block mb-1">
                Beyond the rooms...
              </span>
              <h2 className="font-serif text-4xl text-ink">Common Areas</h2>
            </div>
            <span className="font-sans text-xs uppercase tracking-[0.3em] bg-ink text-white px-2 py-1 mb-2">
              Shared Spaces
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMON_AREAS.map((area, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-2 border-2 border-dashed border-ink/20 transform rotate-1 z-0" />
                <div className="relative z-10 bg-white p-3 shadow-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      alt={area.caption}
                      src={area.src}
                      fill
                      className="object-cover filter contrast-[0.9]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <p className="font-hand text-sm text-ink/60 text-center mt-2">{area.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Availability Calendar */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-polaroid relative rough-edge text-center mt-24">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-10 bg-yellow-100/50 transform rotate-2 z-20 backdrop-blur-sm border-b border-white/20 shadow-sm" />
          <h2 className="font-serif text-3xl text-ink mb-4 mt-4">Check Farm Availability</h2>
          <p className="font-sans text-sm text-ink/60 mb-8">
            Select dates below to see which spaces are open. Green indicates availability.
          </p>

          <div className="w-full h-[500px] relative filter sepia-[0.1] contrast-[0.9]">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=79841354370294e7651c1f181b69ad7e621672595bb587a3f8f480248ba11247%40group.calendar.google.com&ctz=Asia%2FKolkata&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
              style={{ border: 0, width: "100%", height: "100%", position: "absolute", inset: 0 }}
              frameBorder="0"
              scrolling="no"
              className="opacity-80 mix-blend-multiply rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
