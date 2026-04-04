import Image from "next/image";
import Link from "next/link";

const ROOMS = [
  {
    id: "main-house",
    name: "The Main House",
    description: "High ceilings, chira stones, stories in the walls.",
    images: ["/new_images/room-laterite.png", "/new_images/Screenshot2026-03-05at11.27.12PM.png", "/new_images/Screenshot2026-03-05at11.26.37PM.png"], 
    capacity: "Up to 6 guests",
    amenities: ["3 Bedrooms", "Heritage Architecture", "Veranda Swing", "AC & Non-AC"],
    badge: "Heritage",
    tariff: "₹12,000 / night (Weekdays) | ₹15,000 / night (Weekends)",
  },
  {
    id: "garden-cottage",
    name: "Garden Cottage",
    description: "Hidden amidst the areca nut palms.",
    images: ["/new_images/room-cottage.png", "/new_images/Screenshot2026-03-05at11.27.31PM.png"],
    capacity: "Up to 2 guests",
    amenities: ["King Bed", "Private Sit-out", "Nature Views", "AC"],
    tariff: "₹5,000 / night (Weekdays) | ₹6,500 / night (Weekends)",
  },
];

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
            &quot;A collection of heirloom spaces built with local laterite stone, designed to let the outside in.&quot;
          </p>
        </div>

        {/* Room List Loop */}
        <div className="space-y-24 mb-32">
          {ROOMS.map((room, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={room.id}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute -inset-4 border-2 border-dashed border-ink/20 transform -rotate-1 z-0" />
                  <div className="relative z-10 bg-white p-3 shadow-xl transform rotate-1">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-parchment-dark flex items-center justify-center">
                      <span className="font-serif italic text-ink/30 absolute z-20">Add up to 10 photos here</span>
                      <Image
                        alt={room.name}
                        className="object-cover filter contrast-[0.9] opacity-80"
                        src={room.images[0]}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    {room.badge && (
                      <div className="absolute -right-4 -top-4 w-20 h-20 bg-terracotta/90 rounded-full flex items-center justify-center text-white font-serif italic text-lg shadow-lg z-20 transform rotate-[15deg]">
                        {room.badge}
                      </div>
                    )}
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
                  <div className="bg-paper-white/60 p-8 relative border-l-4 border-terracotta backdrop-blur-sm shadow-sm">
                    <h2 className="font-serif text-4xl text-ink mb-1">
                      {room.name}
                    </h2>
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
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="font-sans text-xs uppercase tracking-widest text-ink/50 w-24 flex-shrink-0 pt-1">
                          Features
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {room.amenities.map((amenity, amIdx) => (
                            <span key={amIdx} className="bg-parchment border border-ink/10 px-3 py-1 font-sans text-xs text-ink/80 rounded-full">
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
          })}
        </div>

        {/* Global Live Calendar Integration Placeholder */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-polaroid relative rough-edge text-center mt-24">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-10 bg-yellow-100/50 transform rotate-2 z-20 backdrop-blur-sm border-b border-white/20 shadow-sm" />
          <h2 className="font-serif text-3xl text-ink mb-4 mt-4">Check Farm Availability</h2>
          <p className="font-sans text-sm text-ink/60 mb-8">
            Select dates below to see which spaces are open. Green indicates availability.
          </p>
          
          <div className="w-full h-[500px] relative filter sepia-[0.1] contrast-[0.9]">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=79841354370294e7651c1f181b69ad7e621672595bb587a3f8f480248ba11247%40group.calendar.google.com&ctz=Asia%2FKolkata&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0" 
              style={{border: 0, width: "100%", height: "100%", position: "absolute", inset: 0}} 
              frameBorder="0" 
              scrolling="no"
              className="opacity-80 mix-blend-multiply rounded"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
