export default function DirectionsContent() {
  return (
    <div className="pt-32 pb-24 bg-parchment min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-notebook-lines opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
        <span className="font-hand text-3xl text-terracotta inline-block mb-4 -rotate-2">
          Find your way home...
        </span>
        <h1 className="font-serif text-6xl md:text-7xl text-ink">Getting Here</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Map Side */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-4 border-2 border-dashed border-ink/20 pointer-events-none transform -rotate-1 z-0" />
          
          <div className="relative z-10 bg-white p-3 shadow-polaroid transform rotate-1 hover:rotate-0 transition-transform duration-500 rough-edge h-[500px]">
            {/* Washi tape */}
            <div className="absolute -top-3 left-1/4 transform -translate-x-1/2 w-24 h-6 bg-yellow-100/60 backdrop-blur-sm shadow-sm rotate-[-15deg] z-20" />
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5775.779905769506!2d73.28304969999999!3d17.541504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9e5451cbea55b%3A0x233928cacc099708!2sAyra%20Farms!5e1!3m2!1sen!2sin!4v1770894816819!5m2!1sen!2sin"
              className="w-full h-full border-0 filter contrast-[1.05] grayscale-[0.2]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ayra Farms Google Maps Location"
            />
          </div>
          <p className="font-hand text-xl text-ink/70 text-center mt-6 rotate-1">
             X marks the spot.
          </p>
        </div>

        {/* Routes Side */}
        <div className="w-full lg:w-1/2 space-y-10">
           
           {/* Card: From Mumbai */}
           <div className="bg-paper-white/80 p-8 shadow-sm border-l-4 border-terracotta relative group">
              <span className="absolute top-4 right-4 material-symbols-outlined text-ink/20 group-hover:text-terracotta/50 transition-colors text-4xl">directions_car</span>
              <h2 className="font-serif text-3xl text-ink mb-2">From Mumbai</h2>
              <p className="font-sans text-xs uppercase tracking-widest text-ink/50 mb-6">Approx. 220 km | 5 - 6 hours</p>
              <p className="font-serif text-lg text-ink/80 italic leading-relaxed">
                 Take the Mumbai-Goa Highway (NH66) towards Mangaon. After Mangaon, take the right fork towards Purar and then follow the scenic winding roads down to Dapoli. The farm is tucked away just on the outskirts.
              </p>
           </div>

           {/* Card: From Pune */}
           <div className="bg-paper-white/80 p-8 shadow-sm border-l-4 border-forest relative group">
              <span className="absolute top-4 right-4 material-symbols-outlined text-ink/20 group-hover:text-forest/50 transition-colors text-4xl">directions_car</span>
              <h2 className="font-serif text-3xl text-ink mb-2">From Pune</h2>
              <p className="font-sans text-xs uppercase tracking-widest text-ink/50 mb-6">Approx. 200 km | 5 hours</p>
              <p className="font-serif text-lg text-ink/80 italic leading-relaxed">
                 Drive down via the Mulshi-Tamhini Ghat route or via the Mahabaleshwar-Poladpur route. Both offer stunning views of the Western Ghats.
              </p>
           </div>
           
           {/* Monsoon Note */}
           <div className="bg-white p-6 shadow-polaroid transform -rotate-1 relative rough-edge border border-ink/5">
              <div className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-10 h-4 bg-gray-200/50 backdrop-blur-sm -rotate-2" />
              <div className="flex items-start gap-4">
                 <span className="material-symbols-outlined text-terracotta text-3xl">water_drop</span>
                 <div>
                    <h3 className="font-serif text-xl text-ink font-bold border-b border-ink/10 pb-2 mb-2 inline-block">Monsoon Note (Jun - Sep)</h3>
                    <p className="font-serif text-[15px] text-ink/80 italic">
                       The Konkan comes alive in the rains, but roads can get tricky. Stick to the main NH66 highway. We recommend calling us a day before your travel for an update on local road conditions.
                    </p>
                 </div>
              </div>
           </div>

           {/* Public Transit */}
           <div className="grid grid-cols-2 gap-6 pt-4 border-t border-ink/10">
              <div>
                 <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-ink/60 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">directions_bus</span> Nearest Bus
                 </h4>
                 <p className="font-serif text-lg text-ink/80 italic">Dapoli ST Depot (5 km)</p>
              </div>
              <div>
                 <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-ink/60 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">train</span> Nearest Train
                 </h4>
                 <p className="font-serif text-lg text-ink/80 italic">Khed Station (30 km)</p>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}
