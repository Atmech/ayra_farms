import Image from "next/image";

export default function PagesFromFarm() {
  return (
    <section className="py-24 bg-parchment relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="font-serif text-5xl md:text-6xl text-ink mb-4">
            Pages from the Farm
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto rounded-full opacity-60" />
          <p className="font-hand text-2xl text-forest mt-4">
            Where every corner holds a memory...
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 p-8">
          {/* Left — Polaroid: Laterite Texture */}
          <div className="relative group">
            <div className="polaroid-frame transform -rotate-2">
              <div className="aspect-square overflow-hidden bg-gray-100 mb-4 filter contrast-[1.1] brightness-[0.95] group-hover:contrast-100 transition-all duration-700 relative">
                <Image
                  alt="Laterite brick seating with handwoven rug at Ayra Farms"
                  className="w-full h-full object-cover"
                  src="/images/laterite-texture.jpeg"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-hand text-xl text-center text-ink/80 pt-2">
                Morning light on laterite, 1998
              </p>
            </div>
            <div className="washi-tape top-[-15px] left-1/2" />
          </div>

          {/* Center — Journal Entry Card */}
          <div className="relative flex items-center justify-center p-8 md:mt-12">
            <div className="bg-paper-white p-8 shadow-floating transform rotate-1 rough-edge border border-gray-100 max-w-sm relative">
              {/* Pushpin */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-800 shadow-sm border border-red-900 z-20" />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-black/20 z-10" />
              <h3 className="font-serif text-2xl italic text-ink mb-4 border-b border-ink/10 pb-2">
                Entry: The Beginning
              </h3>
              <p className="font-serif text-lg leading-relaxed text-ink/80">
                &quot;We built Ayra brick by red laterite brick. It was never
                just a farm; it was a return to our roots. A place to listen to
                the petrichor and forget the time.&quot;
              </p>
              <div className="mt-4 text-right">
                <span className="font-hand text-terracotta text-lg">
                  - Nupur
                </span>
              </div>
            </div>
            <div className="absolute inset-0 bg-terracotta/10 blur-2xl rounded-full -z-10 transform scale-110" />
          </div>

          {/* Right — Polaroid: Water Tank */}
          <div className="relative group md:mt-24">
            <div className="polaroid-frame transform rotate-3">
              <div className="aspect-square overflow-hidden bg-gray-100 mb-4 filter group-hover:sepia-0 transition-all duration-700 relative">
                <Image
                  alt="Heritage veranda with wooden chairs and hanging plants"
                  className="w-full h-full object-cover"
                  src="/images/veranda-seating.jpeg"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-hand text-xl text-center text-ink/80 pt-2">
                Slow afternoons on the veranda
              </p>
            </div>
            <div className="washi-tape top-[-15px] left-1/2 !bg-yellow-100/60 !rotate-[20deg]" />
          </div>
        </div>
      </div>
    </section>
  );
}
