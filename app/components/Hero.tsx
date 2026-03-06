import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-24 pb-12">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-parchment opacity-100 bg-paper-texture" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-forest/10 rounded-full blur-3xl mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-terracotta/10 rounded-full blur-3xl mix-blend-multiply" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left — Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1 relative">
          <div className="hidden lg:block absolute -left-12 top-0 bottom-0 w-[1px] bg-ink/10" />
          <span className="font-hand text-3xl text-terracotta block mb-2 -rotate-2 transform origin-bottom-left">
            Est. 2023, Ratnagiri
          </span>
          <h1 className="font-serif text-5xl md:text-8xl text-ink leading-[0.9] mb-6 lg:mb-8 relative">
            The Heirloom <br />
            <span className="italic font-light ml-8">Journal</span>
            <span className="absolute -z-10 top-1/2 left-0 w-32 h-8 bg-terracotta/20 -skew-x-12 rounded-sm mix-blend-multiply" />
          </h1>
          <p className="font-serif text-lg md:text-xl text-ink/70 max-w-md mx-auto lg:mx-0 leading-relaxed italic border-l-2 border-terracotta pl-6">
            &quot;A curated collection of slow moments, captured in the laterite
            heart of the Konkan coast.&quot;
          </p>
          <div className="mt-8 lg:mt-12 flex flex-col items-center lg:items-start gap-4">
            <span className="font-sans text-xs uppercase tracking-widest text-ink/50">
              Volume I: The Beginning
            </span>
            <div className="h-[1px] w-24 bg-ink/20" />
          </div>
        </div>

        {/* Right — Polaroid + Sticky Note */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          {/* Main Polaroid */}
          <div className="relative w-full max-w-md transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
            {/* Washi tape top strip */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-10 bg-yellow-100/50 transform -rotate-2 z-20 backdrop-blur-sm border-b border-white/20 shadow-sm" />
            <div className="bg-white p-3 pb-16 shadow-2xl relative rough-edge">
              <div className="relative overflow-hidden aspect-[4/3] filter contrast-[1.05] brightness-[1.05]">
                <div className="light-leak" />
                <Image
                  alt="Ayra Farms — heritage laterite house with tiled roof and frangipani"
                  className="w-full h-full object-cover grain-overlay"
                  src="/new_images/Screenshot2026-03-05at11.27.20PM.png"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(https://www.transparenttextures.com/patterns/dust.png)",
                  }}
                />
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center">
                <p className="font-hand text-2xl text-ink/80 rotate-1">
                  Our little sanctuary, March &apos;23
                </p>
              </div>
            </div>
          </div>

          {/* Sticky Note */}
          <div className="absolute -z-10 top-10 -right-4 w-48 h-48 bg-paper-white shadow-lg p-4 transform rotate-12 rough-edge hidden md:block">
            <p className="font-hand text-sm leading-6 text-gray-500">
              Notes:
              <br />- Plant more hibiscus
              <br />- Fix the veranda swing
              <br />- Wait for the rain.
            </p>
          </div>
        </div>

        {/* Google Maps Card — in-flow on mobile */}
        <div className="order-3 flex justify-center lg:hidden">
          <div className="relative w-56 transform -rotate-2">
            <div className="bg-white p-2 pb-10 shadow-polaroid rough-edge">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5775.779905769506!2d73.28304969999999!3d17.541504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9e5451cbea55b%3A0x233928cacc099708!2sAyra%20Farms!5e1!3m2!1sen!2sin!4v1770894816819!5m2!1sen!2sin"
                className="w-full h-28 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ayra Farms Location"
              />
              <p className="font-hand text-base text-ink/70 text-center mt-2 absolute bottom-2 w-full left-0">
                Find us here...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Card — absolute on desktop */}
      <div className="absolute bottom-12 right-8 z-20 hidden lg:block">
        <div className="relative w-64 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="bg-white p-2 pb-10 shadow-polaroid rough-edge">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5775.779905769506!2d73.28304969999999!3d17.541504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9e5451cbea55b%3A0x233928cacc099708!2sAyra%20Farms!5e1!3m2!1sen!2sin!4v1770894816819!5m2!1sen!2sin"
              className="w-full h-32 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ayra Farms Location"
            />
            <p className="font-hand text-lg text-ink/70 text-center mt-2 absolute bottom-2 w-full left-0">
              Find us here...
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
