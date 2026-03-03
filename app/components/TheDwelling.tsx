import Image from "next/image";

const ROOMS = [
  {
    id: "main-house",
    name: "The Main House",
    description: "High ceilings, chira stones, stories in the walls.",
    images: ["/images/living-room-swing.jpeg"], // Ready for more photos
    capacity: "Up to 6 guests",
    amenities: ["3 Bedrooms", "Heritage Architecture", "Veranda Swing", "Scent of aged wood"],
    badge: "Heritage",
  },
  {
    id: "garden-cottage",
    name: "Garden Cottage",
    description: "Hidden amidst the areca nut palms.",
    images: ["/images/bedroom.jpeg"], // Ready for more photos
    capacity: "Up to 2 guests",
    amenities: ["King Bed", "Private Sit-out", "Nature Views", "Ensuite Bathroom"],
  },
];

export default function TheDwelling() {
  return (
    <section
      className="py-24 bg-parchment-dark/30 relative overflow-hidden"
      id="stay"
    >
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

        {/* Room List Loop */}
        <div className="space-y-16 lg:space-y-24">
          {ROOMS.map((room, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={room.id}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Side (Scrapbook Style) */}
                <div className="w-full lg:w-1/2 relative group">
                  {/* Decorative background dashed border */}
                  <div className="absolute -inset-4 border-2 border-dashed border-ink/20 pointer-events-none transform -rotate-1 z-0" />

                  {/* Multiple image stack concept: using mapping for the future, right now just one */}
                  <div className="relative z-10">
                    {room.images.slice(0, 1).map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative bg-white p-3 shadow-xl transition-all duration-300 ${
                          isEven
                            ? "transform rotate-1 group-hover:-rotate-1"
                            : "transform -rotate-1 group-hover:rotate-1"
                        }`}
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <Image
                            alt={`${room.name} — Room view`}
                            className="object-cover filter contrast-[0.9] grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
                            src={img}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>

                        {/* Badge if present */}
                        {room.badge && (
                          <div className="absolute -right-4 -top-4 w-20 h-20 bg-terracotta/90 rounded-full flex items-center justify-center text-white font-serif italic text-lg shadow-lg z-20 transform rotate-[15deg] hover:scale-105 transition-transform">
                            {room.badge}
                          </div>
                        )}
                        
                        {/* Placeholder for "More photos" indicator if we have > 1 photo */}
                        {room.images.length > 1 && (
                          <div className="absolute bottom-4 right-4 bg-ink/80 text-white font-sans text-xs uppercase tracking-widest px-3 py-1 pointer-events-none">
                            + {room.images.length - 1} Photos
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
                  {/* Slight paper card look for text section */}
                  <div className="bg-paper-white/60 p-6 md:p-8 relative border-l-4 border-terracotta backdrop-blur-sm shadow-sm transition-shadow hover:shadow-md">
                    <h3 className="font-serif text-4xl text-ink mb-1">
                      {room.name}
                    </h3>
                    <p className="font-hand text-xl text-ink/70 mb-6 italic">
                      &quot;{room.description}&quot;
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-xs uppercase tracking-widest text-ink/50 w-24 flex-shrink-0">
                          Capacity
                        </span>
                        <span className="font-serif text-lg text-ink">
                          {room.capacity}
                        </span>
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

                    <a
                      href="#inquiry"
                      className="inline-flex items-center gap-3 group/btn"
                    >
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
          })}
        </div>
      </div>
    </section>
  );
}
