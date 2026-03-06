import Image from "next/image";

const MEALS = [
  {
    id: "breakfast",
    title: "Morning Harvest",
    time: "8:30 AM - 10:30 AM",
    description: "Start your day with a traditional Konkani breakfast. Hot, fresh, and soothing.",
    image: "/images/food1.png",
    priceAdult: "₹350 / person",
    priceKid: "₹200 / child",
    rotation: "-rotate-2",
  },
  {
    id: "lunch",
    title: "The Farm Thali",
    time: "1:00 PM - 3:00 PM",
    description: "Our signature meal. A grand spread of local delicacies, mostly harvested from our own patch of earth.",
    image: "/images/food2.png",
    priceAdult: "₹650 / person",
    priceKid: "₹350 / child",
    rotation: "rotate-1",
  },
  {
    id: "dinner",
    title: "Wood Fire Evenings",
    time: "8:00 PM - 10:00 PM",
    description: "Slow-cooked curries over the wood fire, served under the stars in the courtyard.",
    image: "/new_images/Screenshot2026-03-05at11.28.17PM.png",
    priceAdult: "₹650 / person",
    priceKid: "₹350 / child",
    rotation: "rotate-2",
  },
];

export default function FoodContent() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-notebook-lines opacity-30" />
      <div className="absolute left-8 md:left-24 top-0 bottom-0 w-[2px] bg-red-300/50 z-0 hidden md:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 md:pl-32">
        <div className="mb-20">
          <span className="font-hand text-3xl text-terracotta inline-block mb-2 -rotate-2 bg-white px-2 py-1">
            Meals made using produce from our own farm
          </span>
          <h1 className="font-serif text-6xl md:text-7xl text-ink bg-white inline-block px-2">Nupur&apos;s Kitchen</h1>
          <p className="font-serif text-xl italic leading-loose text-ink/80 max-w-2xl mt-8 bg-white/80 p-6 md:-ml-4 border-l-4 border-terracotta backdrop-blur-sm shadow-sm relative z-10">
            &quot;Today we harvested fresh turmeric. The aroma filled the
            entire courtyard. Tonight, we cook the fish curry slow, over the
            wood fire, just how grandmother used to.&quot;
          </p>
        </div>

        <div className="space-y-24 max-w-4xl">
          {MEALS.map((meal, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={meal.id} className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                <div className={`w-full md:w-1/2 relative bg-white p-4 shadow-polaroid recipe-cutout transform ${meal.rotation} group`}>
                  <div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-200/50 backdrop-blur-sm shadow-sm rotate-1 z-20"
                    style={{ clipPath: "polygon(0 0, 100% 2px, 98% 100%, 2% 95%)" }}
                  />
                  <div className="relative aspect-[4/3] bg-parchment-dark">
                    <span className="absolute z-20 font-serif italic text-ink/30 inset-0 flex items-center justify-center">Add thali pics here</span>
                    {meal.image && (
                      <Image
                        alt={meal.title}
                        className="w-full h-full object-cover filter contrast-[1.05] opacity-90 transition-transform group-hover:scale-[1.02]"
                        src={meal.image}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="bg-white/90 p-6 md:p-8 shadow-sm border border-ink/10 relative">
                    <h2 className="font-serif text-4xl text-ink mb-1">{meal.title}</h2>
                    <span className="font-sans text-xs uppercase tracking-widest text-terracotta block mb-4">{meal.time}</span>
                    <p className="font-serif text-lg text-ink/70 mb-8 italic">{meal.description}</p>
                    
                    <div className="pt-6 border-t border-dashed border-ink/20 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-sans text-sm tracking-widest text-ink/60">ADULT</span>
                        <span className="font-serif text-xl text-ink font-bold">{meal.priceAdult}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-sans text-sm tracking-widest text-ink/60">CHILD <span className="text-[10px] normal-case">(5-12 yrs)</span></span>
                        <span className="font-serif text-xl text-ink font-bold">{meal.priceKid}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
