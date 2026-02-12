import Image from "next/image";

export default function NupursKitchen() {
  return (
    <section className="py-24 bg-white relative" id="dining">
      {/* Notebook Lines Background */}
      <div className="absolute inset-0 bg-notebook-lines opacity-30" />
      {/* Red Margin Line */}
      <div className="absolute left-8 md:left-24 top-0 bottom-0 w-[2px] bg-red-300/50 z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pl-12 md:pl-32">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-serif text-5xl text-ink">
            From Nupur&apos;s Kitchen
          </h2>
          <p className="font-hand text-2xl text-gray-500 mt-2">
            Recipes &amp; Harvests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — Quote + Spice Photo */}
          <div className="space-y-6">
            <p className="font-serif text-xl italic leading-loose text-ink/80">
              &quot;Today we harvested fresh turmeric. The aroma filled the
              entire courtyard. Tonight, we cook the fish curry slow, over the
              wood fire, just how grandmother used to.&quot;
            </p>
            <div className="flex gap-4">
              <span className="inline-block px-4 py-2 border border-ink/20 rounded-full font-sans text-xs uppercase tracking-widest text-ink/60 bg-white">
                Local Spices
              </span>
              <span className="inline-block px-4 py-2 border border-ink/20 rounded-full font-sans text-xs uppercase tracking-widest text-ink/60 bg-white">
                Wood Fire
              </span>
            </div>
            <div className="mt-8 relative group cursor-pointer">
              <div className="overflow-hidden rounded-tl-[50px] rounded-br-[50px] border-4 border-white shadow-lg transform transition-transform group-hover:scale-105">
                <Image
                  alt="Fresh spices from the farm"
                  className="w-full h-64 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw_CCm4uKyri1d2F_PD-jp986qINQIYONShLdj4Bu81nEPEBkXED6xOTc3kRwj7Bm_sroG3gdZAHD0C7u4VtpFMs1n4bAt1VsArJLRXulTSWgi_1YbwAJ4ND9-Nj_PIUZJ4v3Aya9yDv2kijdv9aTcdno40gkQDJu1OLWT89WISe4tj3Duj3eGuBdpookTEJ2_SYjZ5kCpHeUL7q4PKq7Y_OE6NcWTyfVWiLj3LDEIJcozGP4iOagwpqHaeJbUHUUxqrXg8t6D8WKm"
                  width={600}
                  height={256}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span className="absolute -bottom-4 -right-4 bg-terracotta text-white font-hand text-xl px-4 py-1 shadow-md rotate-[-5deg]">
                Fresh Ground
              </span>
            </div>
          </div>

          {/* Right — Fish Thali */}
          <div className="grid grid-cols-2 gap-4">
            <div className="transform translate-y-8 col-span-2">
              <div className="relative bg-white p-4 shadow-md rotate-1 recipe-cutout">
                {/* Tape on top */}
                <div
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-200/50 backdrop-blur-sm shadow-sm rotate-1 z-20"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 2px, 98% 100%, 2% 95%)",
                  }}
                />
                <Image
                  alt="Special Fish Thali"
                  className="w-full aspect-[4/3] object-cover rounded-sm filter contrast-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD46ZIEW30FRHFJVSCNeS28KbjodeGCoM9TVI8o2jGlO6ftqvS--5zDINQHgYdfVp7N7YIQaSN2ALB07DnoVXkMBSd-Bkp-SCMq__wXUHbfiFOabagw1Gkhf-prmdW0vALfyh-g-M2rAAO_vCvD_20v19hJZxbG_4crfpHqfRKS4QBaLNaegB_brJ5k0akoHkcTeeVfR52LO3MGNc5FpfiK23VVVVNYUXGpnxxgkxEeBR10jLZ8IO70xMYvqL-zwBaV4-6nEHEpOHdi"
                  width={600}
                  height={450}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="pt-4 pb-2 border-t border-dashed border-gray-300 mt-2">
                  <div className="flex justify-between items-center">
                    <p className="font-hand text-lg text-ink/80">
                      Special Fish Thali
                    </p>
                    <span className="text-xs font-serif italic text-gray-400">
                      Recipe No. 24
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
