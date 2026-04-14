"use client";

import Image from "next/image";

type Meal = {
  id: string;
  title: string;
  time: string;
  description: string;
  items: string[];
  image: string;
  rotation: string;
  pricing:
    | { type: "included" }
    | { type: "veg-nonveg"; veg: string; nonveg: string }
    | { type: "complimentary" };
};

const MEALS: Meal[] = [
  {
    id: "breakfast",
    title: "Morning Harvest",
    time: "Included with your stay",
    description:
      "Start your day with a traditional farm breakfast. Hot, fresh, and soothing — made with whatever the morning gives us.",
    items: ["Poha / Upma / Thalipeeth", "Seasonal fruit or fresh coconut water", "Tea / Coffee"],
    image: "/images/food1.png",
    rotation: "-rotate-2",
    pricing: { type: "included" },
  },
  {
    id: "lunch",
    title: "The Farm Thali",
    time: "Lunch · Must be pre-booked",
    description:
      "A grand spread of Maharashtrian and Konkani flavours. Seasonal bhaji, pithla or amti, bhakri, solkadhi — mostly from our own patch of earth.",
    items: [
      "Veg: Bhakri/Chapati/Rice, Seasonal Bhaji, Pithla or Amti, Thecha/Pickle/Papad, Solkadhi",
      "Non-Veg: Kombdi Wade or Fish Curry (catch of the day), Rice/Bhakri, Salad, Solkadhi",
    ],
    image: "/images/food2.png",
    rotation: "rotate-1",
    pricing: { type: "veg-nonveg", veg: "₹500 / Veg Thali", nonveg: "₹600+ / Non-Veg Thali" },
  },
  {
    id: "evening-snacks",
    title: "Evening Bites",
    time: "Evening Snacks",
    description:
      "The farm slows down as the sun dips. Pull up a chair on the verandah with piping hot kanda bhaji and a cup of herbal village chai.",
    items: ["Kanda Bhaji", "Chutney / Solkadhi", "Tea or Herbal Village Decoction"],
    image: "/new_images/Screenshot2026-03-05at11.28.17PM.png",
    rotation: "-rotate-1",
    pricing: { type: "complimentary" },
  },
  {
    id: "dinner",
    title: "Wood Fire Evenings",
    time: "Dinner · Must be pre-booked",
    description:
      "Slow-cooked curries over the wood fire, served under the stars. The menu rotates with the season and whatever the day has to offer.",
    items: [
      "Rotating specials based on season and availability",
      "Similar to lunch — Veg or Non-Veg options",
    ],
    image: "/new_images/Screenshot2026-03-05at11.28.17PM.png",
    rotation: "rotate-2",
    pricing: { type: "veg-nonveg", veg: "₹500 / Veg Thali", nonveg: "₹600+ / Non-Veg Thali" },
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
            homemade freshly cooked meals from the kitchen
          </span>
          <h1 className="font-serif text-6xl md:text-7xl text-ink bg-white inline-block px-2">Sadhana&apos;s Kitchen</h1>
          <p className="font-serif text-xl italic leading-loose text-ink/80 max-w-2xl mt-8 bg-white/80 p-6 md:-ml-4 border-l-4 border-terracotta backdrop-blur-sm shadow-sm relative z-10">
            &quot;Today we harvested fresh turmeric. The aroma filled the
            entire courtyard. Tonight, we cook the fish curry slow, over the
            wood fire, just how grandmother used to.&quot;
          </p>
          <p className="mt-4 font-sans text-xs uppercase tracking-widest text-ink/50 bg-white inline-block px-2">
            Meals are served at fixed times and must be pre-booked in advance.
          </p>
          <div className="mt-6">
            <a
              href="/menu.pdf"
              download
              className="inline-flex items-center gap-2 bg-ink text-white font-sans text-xs uppercase tracking-widest px-6 py-3 hover:bg-terracotta transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Menu Card
            </a>
          </div>
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
                    <p className="font-serif text-lg text-ink/70 mb-4 italic">{meal.description}</p>

                    <ul className="mb-6 space-y-1">
                      {meal.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 font-sans text-sm text-ink/70">
                          <span className="text-terracotta mt-1 flex-shrink-0">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-dashed border-ink/20">
                      {meal.pricing.type === "included" && (
                        <div className="flex justify-between items-center">
                          <span className="font-sans text-sm tracking-widest text-ink/60 uppercase">Price</span>
                          <span className="font-serif text-xl text-terracotta font-bold">Included with stay</span>
                        </div>
                      )}
                      {meal.pricing.type === "complimentary" && (
                        <div className="flex justify-between items-center">
                          <span className="font-sans text-sm tracking-widest text-ink/60 uppercase">Price</span>
                          <span className="font-serif text-xl text-terracotta font-bold">Complimentary</span>
                        </div>
                      )}
                      {meal.pricing.type === "veg-nonveg" && (
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="font-sans text-sm tracking-widest text-ink/60">VEG THALI</span>
                            <span className="font-serif text-xl text-ink font-bold">{meal.pricing.veg}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-sans text-sm tracking-widest text-ink/60">NON-VEG THALI</span>
                            <span className="font-serif text-xl text-ink font-bold">{meal.pricing.nonveg}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 max-w-4xl bg-parchment-dark/30 border border-ink/10 p-8">
          <h3 className="font-sans text-xs uppercase tracking-widest text-ink/60 mb-4">Kids &amp; Special Meals</h3>
          <p className="font-serif text-lg text-ink/80 italic">
            We offer simple meals like dal-rice, plain chapati, boiled veggies, or khichdi for children or guests with specific dietary needs. Kindly let us know in advance when booking.
          </p>
        </div>
      </div>
    </div>
  );
}
