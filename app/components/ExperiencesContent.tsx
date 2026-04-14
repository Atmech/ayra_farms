"use client";

import { useState } from "react";

type Experience = {
  id: string;
  title: string;
  description: string;
  tip?: string;
};

type Season = {
  id: string;
  label: string;
  months: string;
  tagline: string;
  color: string;
  experiences: Experience[];
};

const SEASONS: Season[] = [
  {
    id: "monsoon",
    label: "Monsoon",
    months: "June – September",
    tagline: "The farm breathes deep. Everything turns green overnight.",
    color: "text-forest",
    experiences: [
      {
        id: "rain-walks",
        title: "Rain Walks on the Farm",
        description:
          "Pull on your boots and walk the farm paths as the earth wakes up. The smell of wet laterite, the sound of rain on betel nut leaves — this is Konkan at its most alive.",
      },
      {
        id: "waterfall-trek",
        title: "Waterfall Treks Nearby",
        description:
          "The Guhagar–Ratnagiri coastline hides seasonal waterfalls that only flow in the rains. We can point you to the best trails just a short drive away.",
        tip: "Best after a good two-day rain; roads can get muddy — wear proper footwear.",
      },
      {
        id: "foraging",
        title: "Farm Foraging & Wild Herb Walk",
        description:
          "Learn to spot wild turmeric, kokum, and rain-season greens with our farm guide. Most of what you find ends up in the evening's meal.",
      },
      {
        id: "kitchen-session",
        title: "Monsoon Kitchen Session",
        description:
          "A rainy afternoon is the best time to learn how to make solkadhi from fresh kokum, or how to stone-grind coconut masala the traditional way.",
      },
      {
        id: "birdwatch-monsoon",
        title: "Birdwatching in the Mist",
        description:
          "Monsoon brings migratory and nesting birds to the Guhagar region. Early mornings on the farm sit-out are a good place to spot kingfishers, sunbirds, and hornbills.",
      },
    ],
  },
  {
    id: "winter",
    label: "Winter",
    months: "October – February",
    tagline: "Clear skies, easy sea. The best time to explore.",
    color: "text-ink",
    experiences: [
      {
        id: "guhagar-beach",
        title: "Guhagar Beach at Sunrise",
        description:
          "One of the cleanest and least-crowded beaches on the Konkan coast. A 15-minute drive from the farm — the winter sunrise here is something you'll remember.",
      },
      {
        id: "velas-turtle",
        title: "Velas Turtle Festival",
        description:
          "Every February, Velas beach — just an hour south — comes alive with Olive Ridley turtle hatchlings making their first walk to the sea. An extraordinary thing to witness.",
        tip: "Festival season is late February; book early as it fills up.",
      },
      {
        id: "cycling",
        title: "Village Cycling Trails",
        description:
          "Borrow the farm cycles and wind through quiet Guhagar lanes, past temples, fishing hamlets, and betel nut groves. The winter air makes it perfect.",
      },
      {
        id: "birdwatch-winter",
        title: "Winter Birdsong Trails",
        description:
          "The early morning chorus in winter is at its richest. Walk the farm's edges at dawn and listen for kingfishers, bee-eaters, and the occasional brahminy kite overhead.",
      },
      {
        id: "bonfire",
        title: "Bonfire Evenings",
        description:
          "As the temperature dips, we light a fire in the courtyard. Pull up a chair, pour a cup of something warm, and watch the stars come out over the farm.",
      },
      {
        id: "market-visit",
        title: "Local Market & Temple Visits",
        description:
          "Explore Guhagar's small market for fresh catch, local coconut oil, and dried spices. Nearby temples like Vyadeshwar are peaceful and beautiful in the cool weather.",
      },
    ],
  },
  {
    id: "summer",
    label: "Summer",
    months: "March – May",
    tagline: "Mango season. Hot days, sweet evenings.",
    color: "text-terracotta",
    experiences: [
      {
        id: "mango-picking",
        title: "Alphonso Mango Picking",
        description:
          "Walk the orchard and pluck ripe Alphonso mangoes straight from the branch. There's nothing like eating one still warm from the sun — no cutting, no ceremony.",
        tip: "Peak season is April–May. We also do fresh mango lassi and aamras in the kitchen.",
      },
      {
        id: "cashew-harvest",
        title: "Cashew Harvest Walk",
        description:
          "March brings cashew apple season. Learn how the fruit is harvested and how the nut is separated by hand — and try fresh cashew feni if you're curious.",
      },
      {
        id: "beach-summer",
        title: "Guhagar Beach & Rock Pools",
        description:
          "Before the heat peaks, the morning beach is serene. Look for crabs and sea creatures in the rock pools along the southern end of Guhagar beach.",
      },
      {
        id: "sunrise-farm",
        title: "Sunrise on the Farm",
        description:
          "Summer sunrises at the farm are soft and golden before the heat arrives. The best hour of the day — sit out with your chai and watch the plantation wake up.",
      },
      {
        id: "lucy-farm",
        title: "Meeting Lucy",
        description:
          "Spend time with Lucy the cow, feed the chickens, and settle into the daily rhythm of farm life. A favourite for children, and for anyone who forgets what slow feels like.",
      },
    ],
  },
];

export default function ExperiencesContent() {
  const [activeSeason, setActiveSeason] = useState<string>(SEASONS[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const season = SEASONS.find((s) => s.id === activeSeason)!;

  return (
    <div className="pt-32 pb-24 bg-parchment min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-paper-texture opacity-60 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="font-hand text-3xl text-forest inline-block mb-4 -rotate-1">
            Slow days, deep breaths...
          </span>
          <h1 className="font-serif text-6xl md:text-7xl text-ink">Experiences</h1>
          <p className="mt-4 font-sans text-xs uppercase tracking-widest text-ink/50">
            Around Guhagar &amp; Ratnagiri — what to do, by season
          </p>
        </div>

        {/* Season selector */}
        <div className="mb-12">
          {/* Desktop tabs */}
          <div className="hidden md:flex border-b-2 border-ink/20">
            {SEASONS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSeason(s.id)}
                className={`relative px-10 py-4 font-sans text-sm uppercase tracking-widest transition-colors ${
                  activeSeason === s.id
                    ? "text-ink border-b-2 border-ink -mb-[2px]"
                    : "text-ink/40 hover:text-ink/70"
                }`}
              >
                {s.label}
                <span className="block font-hand text-xs normal-case tracking-normal text-ink/40 mt-0.5">
                  {s.months}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile dropdown */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsDropdownOpen((v) => !v)}
              className="w-full flex items-center justify-between bg-white border-2 border-ink/20 px-5 py-4 font-sans text-sm uppercase tracking-widest text-ink"
            >
              <span>
                {season.label}{" "}
                <span className="font-hand normal-case tracking-normal text-ink/50 ml-2">
                  {season.months}
                </span>
              </span>
              <span className="text-ink/50">{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-ink/10 shadow-lg z-20">
                {SEASONS.filter((s) => s.id !== activeSeason).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveSeason(s.id);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-5 py-4 font-sans text-sm uppercase tracking-widest text-ink/60 hover:text-ink hover:bg-parchment transition-colors border-t border-ink/10"
                  >
                    {s.label}{" "}
                    <span className="font-hand normal-case tracking-normal text-ink/40 ml-2">
                      {s.months}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Season tagline */}
        <div className="mb-12">
          <p className={`font-hand text-2xl italic ${season.color}`}>
            &quot;{season.tagline}&quot;
          </p>
        </div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {season.experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="bg-white border border-ink/10 p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <span className="font-sans text-[10px] uppercase tracking-widest text-ink/30 absolute top-4 right-4">
                0{i + 1}
              </span>
              <h3 className="font-serif text-2xl text-ink mb-3 pr-6">{exp.title}</h3>
              <p className="font-serif text-base text-ink/70 italic leading-relaxed">
                {exp.description}
              </p>
              {exp.tip && (
                <p className="mt-4 font-sans text-xs text-terracotta border-t border-dashed border-ink/10 pt-4">
                  ✦ {exp.tip}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
