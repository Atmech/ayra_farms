import Image from "next/image";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 relative z-30">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">
          Caught on Film
        </h2>
        <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">
          Roll 03 — Life at the Farm
        </p>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div className="relative w-full overflow-x-auto hide-scrollbar pb-12 pt-4 px-4 md:px-12 flex gap-1 z-10">
        {/* Card 01 — The Mini Forest */}
        <div className="flex-none w-[300px] md:w-[400px] bg-black p-4 relative group">
          <span className="absolute top-2 left-2 text-[10px] text-gray-500 font-mono">
            01
          </span>
          <div className="relative w-full h-[250px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
            <Image
              alt="The Mini Forest"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzcND83KMlFdpq0taOJXgEioAxp3SwBTEla1g0-FiEHmGzRMq4J5V9lg8NiqbNtU3AA21Lbup0AOPUB16bZc1CvW3fBKz5TbAfrwj__-gM6Ww2P4vUW9gOZy8RRzEKMLsjoSozuZU2Tw9Xn17OaZW9uaE5Be38kCTeHNV42RnX4LcwSXwCVdlfSa38N-7BLoLzocDeS16VZ-CFV_Laiyyc-OL1K-TP-hV5CjGTRpn2yFGJ3JJHgAaFxPcCdXIM2cgu5qH4zW-eDrzR"
              fill
              sizes="400px"
            />
          </div>
          <div className="mt-3 border-l-2 border-white/20 pl-3">
            <h3 className="font-serif text-xl text-white">The Mini Forest</h3>
            <p className="font-hand text-gray-400 text-sm">Morning walks</p>
          </div>
        </div>

        {/* Card 02 — Furry Residents */}
        <div className="flex-none w-[300px] md:w-[400px] bg-black p-4 relative group border-l-2 border-dashed border-gray-800">
          <span className="absolute top-2 left-2 text-[10px] text-gray-500 font-mono">
            02
          </span>
          <div className="w-full h-[250px] flex items-center justify-center bg-gray-900 border border-gray-800">
            <span className="material-symbols-outlined text-white/30 text-6xl group-hover:text-white/60 transition-colors">
              pets
            </span>
          </div>
          <div className="mt-3 border-l-2 border-white/20 pl-3">
            <h3 className="font-serif text-xl text-white">Furry Residents</h3>
            <p className="font-hand text-gray-400 text-sm">
              Always looking for treats
            </p>
          </div>
        </div>

        {/* Card 03 — Monsoon Streams */}
        <div className="flex-none w-[300px] md:w-[400px] bg-black p-4 relative group border-l-2 border-dashed border-gray-800">
          <span className="absolute top-2 left-2 text-[10px] text-gray-500 font-mono">
            03
          </span>
          <div className="relative w-full h-[250px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
            <Image
              alt="Monsoon Streams"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC2ce-o5oOLwXYsEKcOKYUryEhSnnIafrpIH29hDPOu5CIxfVMpAPA1K0PhK5Fkmh-o8QCi4xeYkPGwCBr3ea2kNTa0e-V7yyhnCCXOfsiq3cxhpk5vVl7Lv5a8an7rhfzEk9dGnP0xmDbhGq1SR14N1m489Efc3rh1rmQKMJatSltEMLOFLWf_j_YLcrG8Ibh-JtmxB4NwOS3kv63sQCEsMmZUe_QPQqPWBIab9_HnAUbrcpa7o3PqecJeVM4VH4A5GjJqCrXt79X"
              fill
              sizes="400px"
            />
          </div>
          <div className="mt-3 border-l-2 border-white/20 pl-3">
            <h3 className="font-serif text-xl text-white">Monsoon Streams</h3>
            <p className="font-hand text-gray-400 text-sm">
              The sound of rain
            </p>
          </div>
        </div>

        {/* Card 04 — Quote */}
        <div className="flex-none w-[300px] md:w-[400px] bg-black p-4 relative group border-l-2 border-dashed border-gray-800">
          <div className="w-full h-full flex flex-col justify-center items-center text-center border border-white/10 p-8">
            <p className="font-serif text-2xl italic text-white/60 mb-4">
              &quot;Nature does not hurry, yet everything is accomplished.&quot;
            </p>
            <span className="font-hand text-terracotta">- Lao Tzu</span>
          </div>
        </div>
      </div>
    </section>
  );
}
