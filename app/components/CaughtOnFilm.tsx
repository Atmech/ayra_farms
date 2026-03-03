export default function CaughtOnFilm() {
  return (
    <section
      className="py-24 bg-charcoal text-paper-white relative overflow-hidden"
      id="experience"
    >
      {/* Film Strip Holes */}
      <div className="absolute top-0 left-0 w-full film-strip-holes bg-repeat-x z-20" />
      <div className="absolute bottom-0 left-0 w-full film-strip-holes bg-repeat-x z-20" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-30">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">
          Caught on Film
        </h2>
        <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">
          Roll 03 — Life at the Farm
        </p>
      </div>

      {/* Horizontal Scrolling Gallery - Reel Style */}
      <div className="relative w-full overflow-x-auto hide-scrollbar pb-12 px-4 md:px-12 flex gap-6 z-10 items-center">
        
        {/* Reel Card 01 - Actual Instagram Reel Embed */}
        <div className="flex-none w-[280px] md:w-[320px] h-[500px] md:h-[560px] relative rounded-2xl overflow-hidden group bg-black">
          <iframe 
            src="https://www.instagram.com/p/DGdhRK7NZJJ/embed" 
            className="w-full h-full border-0 absolute top-0 left-0 scale-[1.02] transform origin-top-left"
            scrolling="no" 
            allowTransparency={true} 
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>

        {/* Reel Card 02 - Actual Instagram Reel Embed */}
        <div className="flex-none w-[280px] md:w-[320px] h-[500px] md:h-[560px] relative rounded-2xl overflow-hidden group bg-black mt-8">
          <iframe 
            src="https://www.instagram.com/p/DRhqtENEnd6/embed" 
            className="w-full h-full border-0 absolute top-0 left-0 scale-[1.02] transform origin-top-left z-20 relative"
            scrolling="no" 
            allowTransparency={true} 
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen={true}
            style={{ pointerEvents: 'auto' }}
          ></iframe>
        </div>

        {/* Info Card - Quote */}
        <div className="flex-none w-[280px] md:w-[320px] h-[500px] md:h-[560px] relative rounded-2xl overflow-hidden group border border-gray-800 bg-charcoal">
          <div className="w-full h-full flex flex-col justify-between p-8">
            <span className="material-symbols-outlined text-4xl text-terracotta/50">
               format_quote
            </span>
            <div>
               <p className="font-serif text-3xl md:text-4xl italic text-white/80 mb-6 leading-snug">
                 &quot;Nature does not hurry, yet everything is accomplished.&quot;
               </p>
               <span className="font-hand text-xl text-terracotta">- Lao Tzu</span>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-terracotta/0 via-terracotta/50 to-terracotta/0"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
