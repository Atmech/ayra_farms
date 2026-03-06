import Image from "next/image";

export default function AboutContent() {
  const TIMELINE = [
    {
      id: "city",
      year: "The City Years",
      title: "Before the Red Earth",
      description: "It started as a quiet yearning. Between the concrete and the deadlines, we kept dreaming of a place where time didn't run on a clock, but on the shifting of the sun. A place where our kids could run barefoot.",
      image: "/images/veranda-seating.jpeg", // placeholder
      rotation: "-rotate-2",
    },
    {
      id: "village",
      year: "Returning Home",
      title: "Finding Dapoli",
      description: "We found this piece of land in the Konkan heartland. It was overgrown, wild, and perfect. The old areca nut palms stood tall, and the laterite soil felt like home the moment we stepped on it.",
      image: "/new_images/Screenshot2026-03-05at11.27.12PM.png", 
      rotation: "rotate-2",
    },
    {
      id: "building",
      year: "Building Ayra",
      title: "Brick by Laterite Brick",
      description: "We didn't just build a house; we restored a way of life. Using local chira stone and reclaimed wood, we created a sanctuary that breathes with the forest around it.",
      image: "/new_images/our_story.png",
      rotation: "-rotate-1",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-parchment min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-paper-texture opacity-60 pointer-events-none" />
      
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-24">
        <span className="font-hand text-3xl text-terracotta inline-block mb-4 -rotate-2">
          Our Story
        </span>
        <h1 className="font-serif text-6xl md:text-7xl text-ink mb-8">The Roots of Ayra</h1>
        <p className="font-serif text-xl text-ink/70 italic leading-relaxed max-w-2xl mx-auto">
          &quot;We built Ayra brick by red laterite brick. It was never just a farm; it was a return to our roots. A place to listen to the petrichor and forget the time.&quot;
        </p>
      </div>

      {/* The Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Central timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-ink/20 hidden md:block" />

        <div className="space-y-32">
          {TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={item.id} className={`flex flex-col md:flex-row items-center gap-12 relative ${isEven ? "" : "md:flex-row-reverse"}`}>
                
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-terracotta rounded-full shadow-sm z-20 items-center justify-center">
                   <div className="w-8 h-[1px] bg-terracotta absolute -left-8 data-[right=true]:left-8 data-[right=true]:-right-8" data-right={!isEven} />
                </div>

                {/* Image Side */}
                <div className={`w-full md:w-1/2 flex ${isEven ? "justify-end md:pr-12" : "justify-start md:pl-12"}`}>
                  <div className={`bg-white p-3 shadow-polaroid transform ${item.rotation} rough-edge max-w-sm w-full relative group`}>
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-200/50 backdrop-blur-sm -rotate-2 shadow-sm z-20" />
                    <div className="relative aspect-square w-full bg-parchment-dark overflow-hidden flex items-center justify-center">
                      <span className="absolute z-20 font-serif italic text-ink/40">Add photo</span>
                      <Image
                        alt={item.title}
                        className="object-cover filter contrast-[1.05] opacity-50 transition-transform duration-700 group-hover:scale-[1.03] group-hover:opacity-80"
                        src={item.image}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center ${isEven ? "md:pl-12 text-center md:text-left" : "md:pr-12 text-center md:text-right"}`}>
                  <span className="font-hand text-2xl text-terracotta mb-2">{item.year}</span>
                  <h3 className="font-serif text-4xl text-ink mb-4">{item.title}</h3>
                  <p className="font-serif text-lg text-ink/70 leading-relaxed italic">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Mascot Section */}
      <div className="mt-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-paper-white/80 p-8 md:p-12 shadow-floating transform -rotate-1 border border-ink/10 flex flex-col md:flex-row items-center gap-12 relative rough-edge">
          {/* Pushpin */}
          <div className="absolute -top-3 left-1/2 md:left-12 w-4 h-4 rounded-full bg-red-800 shadow-sm border border-red-900 z-20" />
          
          <div className="w-48 h-48 relative flex-shrink-0">
             <Image
               src="/elements/cow.png"
               alt="Lucy the Cow"
               fill
               className="object-contain drop-shadow-lg"
             />
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl text-ink mb-2">Meet Lucy</h3>
            <span className="font-sans text-xs uppercase tracking-widest text-terracotta block mb-4">The Heart of the Farm</span>
            <p className="font-serif text-lg text-ink/80 italic">
              Our gentle giant and unofficial mascot. Lucy wanders the areca nut plantations, keeps the grass trimmed, and gives the best morning greetings. Slow living starts with learning to match her pace.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
