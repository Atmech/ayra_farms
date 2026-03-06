"use client";

import Image from "next/image";

export default function GalleryContent() {
  const images = [
    { id: 0, src: "/new_images/Screenshot2026-03-05at11.28.35PM.png", rotation: Math.random() * 6 - 3, caption: "Quiet nights by the swing" },
    { id: 1, src: "/new_images/Screenshot2026-03-05at11.27.56PM.png", rotation: Math.random() * 6 - 3, caption: "Cozy corners" },
    { id: 2, src: "/new_images/Screenshot2026-03-05at11.26.37PM.png", rotation: Math.random() * 6 - 3, caption: "Vintage bathtub" },
    { id: 3, src: "/new_images/Screenshot2026-03-05at11.28.06PM.png", rotation: Math.random() * 6 - 3, caption: "Four poster dreams" },
    { id: 4, src: "/new_images/our_story.png", rotation: Math.random() * 6 - 3, caption: "The beginning" },
    { id: 5, src: "/new_images/Screenshot2026-03-05at11.27.20PM.png", rotation: Math.random() * 6 - 3, caption: "Ayra at dusk" },
  ];

  return (
    <div className="pt-32 pb-24 bg-charcoal text-paper-white min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full film-strip-holes bg-repeat-x z-20 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 mb-16 text-center">
        <span className="font-hand text-3xl text-terracotta inline-block mb-4 -rotate-2">
          Roll 03 — Life at the Farm
        </span>
        <h1 className="font-serif text-6xl md:text-7xl text-white mb-6">Caught on Film</h1>
        <p className="font-serif text-lg text-white/70 max-w-2xl mx-auto italic">
          &quot;A collection of slow moments. Sunlight through the leaves, mud on our boots, and meals shared under the open sky.&quot;
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Instagram Reels Row */}
        <div className="mb-32">
          <h2 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-8 border-b border-white/10 pb-4">From the Gram</h2>
          <div className="flex overflow-x-auto hide-scrollbar gap-8 pb-8">
            {/* Reel 1 */}
            <div className="flex-none w-[280px] h-[500px] relative rounded-lg overflow-hidden bg-black border border-white/10">
              <iframe 
                src="https://www.instagram.com/p/DGdhRK7NZJJ/embed" 
                className="w-full h-full border-0 absolute top-0 left-0 scale-[1.02] transform origin-top-left"
                scrolling="no" 
                allowTransparency={true} 
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen={true}
              />
            </div>
            {/* Reel 2 */}
            <div className="flex-none w-[280px] h-[500px] relative rounded-lg overflow-hidden bg-black mt-12 border border-white/10">
              <iframe 
                src="https://www.instagram.com/p/DRhqtENEnd6/embed" 
                className="w-full h-full border-0 absolute top-0 left-0 scale-[1.02] transform origin-top-left"
                scrolling="no" 
                allowTransparency={true} 
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen={true}
              />
            </div>
          </div>
        </div>

        {/* Polaroid Grid */}
        <h2 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-8 border-b border-white/10 pb-4">Our Album</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 lg:gap-16 pt-8 pb-24">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="bg-white p-3 shadow-polaroid w-full max-w-sm mx-auto group rough-edge"
              style={{ transform: `rotate(${img.rotation}deg)` }}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-parchment-dark flex items-center justify-center">
                <span className="font-serif italic text-ink/30 absolute z-20">Add photo here</span>
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover filter contrast-[1.05] opacity-50 transition-transform duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-hand text-xl text-ink/80 text-center mt-4">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
