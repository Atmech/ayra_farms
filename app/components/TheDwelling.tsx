import Image from "next/image";

export default function TheDwelling() {
  return (
    <section
      className="py-24 bg-parchment-dark/30 relative overflow-hidden"
      id="stay"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Overlapping Photo Layout */}
        <div className="relative min-h-[800px] lg:min-h-[600px]">
          {/* Main House */}
          <div className="absolute top-0 left-0 md:left-12 w-full md:w-[60%] z-10 group">
            <div className="relative bg-white p-3 shadow-xl transform -rotate-1 transition-transform group-hover:rotate-0">
              <Image
                alt="Main House — living room with hanging swing and laterite walls"
                className="w-full h-[350px] object-cover filter contrast-[0.9]"
                src="/images/living-room-swing.jpeg"
                width={800}
                height={350}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              {/* Heritage badge */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-terracotta/90 rounded-full flex items-center justify-center text-white font-serif italic text-xl shadow-lg z-20">
                Heritage
              </div>
            </div>

            {/* Description Card */}
            <div className="absolute -bottom-24 md:-bottom-12 right-4 md:-right-24 w-[90%] md:w-[350px] bg-paper-white p-6 shadow-floating transform rotate-2 z-30 border-l-4 border-terracotta">
              <h3 className="font-serif text-3xl text-ink mb-2">
                The Main House
              </h3>
              <p className="font-hand text-lg text-ink/70 mb-4">
                High ceilings, chira stones, stories in the walls.
              </p>
              <ul className="font-serif text-sm text-ink/60 space-y-1 list-disc pl-4 mb-4">
                <li>3 Bedrooms</li>
                <li>Veranda swing</li>
                <li>Scent of aged wood</li>
              </ul>
              <a
                href="#inquiry"
                className="font-sans text-xs font-bold uppercase tracking-widest text-terracotta border-b border-terracotta pb-1"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Garden Cottage */}
          <div className="absolute bottom-0 md:top-24 right-0 md:right-12 w-full md:w-[45%] z-0 group mt-[350px] md:mt-0">
            <div className="relative bg-white p-3 shadow-xl transform rotate-2 transition-transform group-hover:rotate-0">
              <Image
                alt="Garden Cottage — four-poster bed with laterite brick walls"
                className="w-full h-[300px] object-cover filter contrast-[0.9] grayscale-[0.3]"
                src="/images/bedroom.jpeg"
                width={800}
                height={300}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
            {/* Dashed outline behind */}
            <div className="absolute top-[-20px] left-[-20px] w-full h-full border-2 border-dashed border-ink/20 pointer-events-none" />
            <div className="bg-parchment p-6 mt-4 relative">
              <h3 className="font-serif text-3xl text-ink mb-2">
                Garden Cottage
              </h3>
              <p className="font-hand text-lg text-ink/70">
                Hidden amidst the areca nut palms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
