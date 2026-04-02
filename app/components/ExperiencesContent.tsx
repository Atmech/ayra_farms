export default function ExperiencesContent() {
  const EXPERIENCES = [
    {
      id: "forest-walks",
      title: "Forest Walks & Foraging",
      season: "Year-round",
      description: "Follow the trails into the dense woods. Learn to identify local edible plants, wild berries, and herbs.",
      rotation: "-rotate-2",
      image: "/new_images/forst_forgaging.png",
    },
    {
      id: "farm-to-table",
      title: "Farm-to-Table Meals",
      season: "Daily",
      description: "Harvest vegetables with us and learn traditional Konkani cooking methods over a wood fire.",
      rotation: "rotate-1",
      image: "/new_images/activitiees.png",
    },
    {
      id: "animal-interactions",
      title: "Meeting Lucy",
      season: "Daily",
      description: "Spend time with Lucy the cow, feed the chickens, and experience the rhythm of farm life.",
      rotation: "rotate-2",
      image: "/new_images/meeting_lucy.png",
    },
    {
      id: "kids-nature-art",
      title: "Kids Nature Art Sessions",
      season: "On Request",
      description: "Using leaves, flowers, and natural pigments to create beautiful pieces of art. A favorite for our little guests.",
      rotation: "-rotate-1",
      image: "/new_images/kids_nature_art_sessions.png",
    },
    {
      id: "birdsong-trails",
      title: "Birdsong Trails",
      season: "Early Mornings",
      description: "Wake up to the symphony of the forest. Spot hornbills, kingfishers, and sunbirds.",
      rotation: "rotate-3",
      image: "/new_images/bird_song_trails.png",
    },
    {
      id: "mango-picking",
      title: "Seasonal Experiences",
      season: "Apr - Jun (Mangoes)",
      description: "The sweetest time of the year. Pluck ripe Alphonso mangoes right from the orchards.",
      rotation: "-rotate-2",
      image: "/new_images/natures_art.png",
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-parchment min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-paper-texture opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <span className="font-hand text-3xl text-forest inline-block mb-4 -rotate-1">
            Slow days, deep breaths...
          </span>
          <h1 className="font-serif text-6xl md:text-7xl text-ink">Experiences</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="flex flex-col h-full">
              <div className={`bg-white p-3 shadow-polaroid transform ${exp.rotation} hover:scale-105 transition-transform duration-500 rough-edge z-10 relative flex-shrink-0`}>
                <div className="relative aspect-video w-full bg-parchment-dark overflow-hidden flex items-center justify-center border border-ink/10">
                  {exp.image ? (
                     <img src={exp.image} alt={exp.title} className="w-full h-full object-cover filter contrast-[1.05] grayscale-[0.1]" />
                  ) : (
                    <>
                      <span className="font-serif italic text-ink/30 absolute z-20 text-center px-4 leading-tight">Add 10-20s video loop<br/>here</span>
                      <div className="absolute inset-0 bg-forest/5" />
                    </>
                  )}
                </div>
                {/* Washi tape */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-200/60 backdrop-blur-sm -rotate-3 shadow-sm z-20" />
              </div>

              <div className="mt-8 px-4 flex-grow flex flex-col text-center">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-terracotta inline-block mb-3">
                  {exp.season}
                </span>
                <h3 className="font-serif text-3xl text-ink mb-4">{exp.title}</h3>
                <p className="font-serif text-lg text-ink/70 italic flex-grow">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
