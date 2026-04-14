import Link from "next/link";
import Image from "next/image";

export default function HomePreviews() {
  return (
    <section className="py-24 bg-parchment relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 bg-paper-texture opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-hand text-2xl text-terracotta inline-block mb-2 -rotate-2">
            Explore the Farm
          </span>
          <h2 className="font-serif text-5xl text-ink">A Glimpse Inside</h2>
        </div>

        {/* Stay Preview */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-white p-3 shadow-polaroid transform -rotate-2 hover:rotate-0 transition-transform duration-500 will-change-transform z-10 relative rough-edge">
              <div className="relative aspect-[4/3] bg-parchment-dark overflow-hidden flex items-center justify-center">
                <span className="font-serif italic text-ink/30 z-20 absolute">Room Photo</span>
                {/* Fallback image */}
                <Image
                  src="/new_images/Screenshot2026-03-05at11.27.20PM.png"
                  alt="The Dwelling"
                  fill
                  className="object-cover filter contrast-[1.05] brightness-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="font-hand text-xl text-ink/80 text-center mt-3 rotate-1">
                The Heritage Home
              </p>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-8 bg-yellow-100/50 transform -rotate-6 z-20 backdrop-blur-sm shadow-sm" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="font-serif text-4xl text-ink mb-4">The Dwelling</h3>
            <p className="font-serif text-lg text-ink/70 mb-8 italic max-w-md">
              High ceilings, chira stones, and stories in the walls. Find your sanctuary amidst the mature areca nut trees.
            </p>
            <Link
              href="/stay"
              className="inline-flex items-center gap-3 group/btn border border-ink/20 px-6 py-3 hover:border-terracotta transition-colors rounded-sm"
            >
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ink group-hover/btn:text-terracotta transition-colors">
                View Rooms & Spaces
              </span>
              <span className="transform transition-transform group-hover/btn:translate-x-1 text-terracotta">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Food Preview */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-white p-3 shadow-polaroid transform rotate-2 hover:rotate-0 transition-transform duration-500 will-change-transform z-10 relative rough-edge">
              <div className="relative aspect-[4/3] bg-parchment-dark overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-notebook-lines opacity-20 pointer-events-none z-10" />
                <span className="font-serif italic text-ink/30 z-20 absolute">Food Photo</span>
                <Image
                  src="/new_images/Screenshot2026-03-05at11.28.17PM.png"
                  alt="Sadhana's Kitchen"
                  fill
                  className="object-cover filter contrast-[1.05] opacity-80"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="font-hand text-xl text-ink/80 text-center mt-3 -rotate-1">
                Farm to Table
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="font-sans text-xs uppercase tracking-widest text-ink/50 mb-2 block">
              Sadhana&apos;s Kitchen
            </span>
            <h3 className="font-serif text-4xl text-ink mb-4">Slow Food</h3>
            <p className="font-serif text-lg text-ink/70 mb-8 italic max-w-md">
              Nourishing, slow-cooked meals made with produce straight from our patch of earth. Real food, the way it used to be.
            </p>
            <Link
              href="/food"
              className="inline-flex items-center gap-3 group/btn border border-ink/20 px-6 py-3 hover:border-terracotta transition-colors rounded-sm"
            >
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ink group-hover/btn:text-terracotta transition-colors">
                See Menu & Pricing
              </span>
              <span className="transform transition-transform group-hover/btn:translate-x-1 text-terracotta">
                →
              </span>
            </Link>
          </div>
        </div>
        
        {/* Experiences Preview */}
        <div className="flex flex-col items-center text-center">
          <span className="font-hand text-2xl text-terracotta inline-block mb-3 rotate-1">
            Days filled with...
          </span>
          <h3 className="font-serif text-4xl text-ink mb-12">Experiences</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-12">
            {[ 
              { title: "Forest Foraging", date: "Year-round", rotation: "-rotate-2", image: "/new_images/forst_forgaging.png" },
              { title: "Meeting Lucy", date: "Every morning", rotation: "rotate-1", image: "/new_images/meeting_lucy.png" },
              { title: "Nature Art", date: "For the kids", rotation: "rotate-3", image: "/new_images/kids_nature_art_sessions.png" }
            ].map((exp, i) => (
              <div key={i} className={`bg-white p-2 shadow-polaroid transform ${exp.rotation} hover:scale-105 transition-transform duration-300 rough-edge`}>
                <div className="aspect-square bg-parchment-dark relative overflow-hidden flex items-center justify-center">
                  {exp.image ? (
                    <Image src={exp.image} alt={exp.title} fill className="object-cover filter contrast-[1.05]" sizes="(max-width: 768px) 100vw, 33vw" />
                  ) : (
                    <span className="font-serif italic text-ink/30 text-lg">Photo/Video</span>
                  )}
                </div>
                <div className="p-3 text-left">
                  <h4 className="font-serif text-xl text-ink">{exp.title}</h4>
                  <p className="font-hand text-sm text-ink/60">{exp.date}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Link
            href="/experiences"
            className="inline-flex items-center gap-3 group/btn"
          >
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-ink border-b border-ink/30 pb-1 group-hover/btn:border-terracotta group-hover/btn:text-terracotta transition-colors">
              Explore All Activities
            </span>
            <span className="transform transition-transform group-hover/btn:translate-x-1 text-terracotta">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
