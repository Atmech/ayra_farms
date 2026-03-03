import Image from "next/image";

export default function NupursKitchen() {
  return (
    <section className="py-24 bg-white relative" id="dining">
      {/* Notebook Lines Background */}
      <div className="absolute inset-0 bg-notebook-lines opacity-30" />
      {/* Red Margin Line */}
      <div className="absolute left-8 md:left-24 top-0 bottom-0 w-[2px] bg-red-300/50 z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pl-12 md:pl-32">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-serif text-5xl text-ink">
            From Nupur&apos;s Kitchen
          </h2>
          <p className="font-hand text-2xl text-gray-500 mt-2">
            Recipes &amp; Harvests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — Quote + Spice Photo */}
          <div className="space-y-6">
            <p className="font-serif text-xl italic leading-loose text-ink/80">
              &quot;Today we harvested fresh turmeric. The aroma filled the
              entire courtyard. Tonight, we cook the fish curry slow, over the
              wood fire, just how grandmother used to.&quot;
            </p>
            <div className="flex gap-4">
              <span className="inline-block px-4 py-2 border border-ink/20 rounded-full font-sans text-xs uppercase tracking-widest text-ink/60 bg-white">
                Local Spices
              </span>
              <span className="inline-block px-4 py-2 border border-ink/20 rounded-full font-sans text-xs uppercase tracking-widest text-ink/60 bg-white">
                Wood Fire
              </span>
            </div>
            <div className="mt-8 relative group cursor-pointer">
              <div className="overflow-hidden rounded-tl-[50px] rounded-br-[50px] border-4 border-white shadow-lg transform transition-transform group-hover:scale-105">
                <Image
                  alt="Nupur cooking over a traditional wood fire"
                  className="w-full h-64 object-cover"
                  src="/images/kitchen1.png"
                  width={600}
                  height={256}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className="absolute -bottom-4 -right-4 bg-terracotta text-white font-hand text-xl px-4 py-1 shadow-md rotate-[-5deg]">
                Wood Fire Cooking
              </span>
            </div>
          </div>

          {/* Right — Food Showcase */}
          <div className="space-y-12">
            {/* Top Cutout — Special Fish Thali */}
            <div className="relative bg-white p-4 shadow-md rotate-1 recipe-cutout group">
              {/* Tape on top */}
              <div
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-200/50 backdrop-blur-sm shadow-sm rotate-1 z-20"
                style={{
                  clipPath: "polygon(0 0, 100% 2px, 98% 100%, 2% 95%)",
                }}
              />
              <Image
                alt="Special Fish Thali"
                className="w-full aspect-[4/3] object-cover rounded-sm filter contrast-110 transition-transform group-hover:scale-[1.02]"
                src="/images/food2.png"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pt-4 pb-2 border-t border-dashed border-gray-300 mt-2">
                <div className="flex justify-between items-center">
                  <p className="font-hand text-lg text-ink/80">
                    Special Fish Thali
                  </p>
                  <span className="text-xs font-serif italic text-gray-400">
                    Recipe No. 24
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Cutout — Morning Harvest Spread */}
            <div className="relative bg-white p-4 shadow-md -rotate-2 recipe-cutout w-5/6 ml-auto transform translate-y-4 group">
              {/* Tape on top */}
              <div
                className="absolute -top-3 left-1/4 transform -translate-x-1/2 w-24 h-6 bg-gray-300/40 backdrop-blur-sm shadow-sm rotate-[-15deg] z-20"
                style={{
                  clipPath: "polygon(2px 0, 100% 5%, 95% 100%, 0 92%)",
                }}
              />
              <Image
                alt="Morning harvest spread"
                className="w-full aspect-[4/3] object-cover rounded-sm transition-transform group-hover:scale-[1.02]"
                src="/images/food1.png"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pt-3 border-t border-dotted border-gray-300 mt-2">
                <p className="font-hand text-md text-ink/70">
                  Morning Harvest Brunch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
