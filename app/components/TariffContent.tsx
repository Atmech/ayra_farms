export default function TariffContent() {
  return (
    <div className="pt-32 pb-24 bg-paper-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-paper-texture opacity-80 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="font-hand text-3xl text-terracotta inline-block mb-4 -rotate-2">
            Pricing & Policies
          </span>
          <h1 className="font-serif text-6xl md:text-7xl text-ink">The Tariff</h1>
        </div>

        {/* Vintage Price Card Style */}
        <div className="bg-white p-8 md:p-12 shadow-polaroid border border-ink/10 relative rough-edge">
          {/* Decorative Corner Clips */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-ink/20 transform -translate-x-2 -translate-y-2" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-ink/20 transform translate-x-2 -translate-y-2" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-ink/20 transform -translate-x-2 translate-y-2" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-ink/20 transform translate-x-2 translate-y-2" />

          {/* Stay Tariff Table */}
          <div className="mb-16">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-terracotta mb-8 border-b border-ink/10 pb-4 text-center">Stay Tariff</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-serif">
                <thead>
                  <tr className="border-b border-ink/20 text-ink/60 italic text-lg">
                    <th className="py-4 font-normal">Room</th>
                    <th className="py-4 font-normal">Weekdays <span className="font-sans text-[10px] uppercase block mt-1 not-italic">Mon – Thu</span></th>
                    <th className="py-4 font-normal">Weekends / Holidays <span className="font-sans text-[10px] uppercase block mt-1 not-italic">Fri – Sun · Diwali · Christmas · Summer</span></th>
                  </tr>
                </thead>
                <tbody className="text-xl text-ink">
                  <tr className="border-b border-ink/5 border-dashed">
                    <td className="py-6">
                      Round Window Room
                      <span className="block font-sans text-xs text-ink/50 mt-1 uppercase tracking-widest">Up to 4 adults</span>
                    </td>
                    <td className="py-6">₹7,000</td>
                    <td className="py-6">₹7,500</td>
                  </tr>
                  <tr className="border-b border-ink/5 border-dashed">
                    <td className="py-6">
                      Terrace Room
                      <span className="block font-sans text-xs text-ink/50 mt-1 uppercase tracking-widest">Up to 3–4 adults</span>
                    </td>
                    <td className="py-6">₹6,500</td>
                    <td className="py-6">₹6,800</td>
                  </tr>
                  <tr>
                    <td className="py-6">
                      Cottage Room
                      <span className="block font-sans text-xs text-ink/50 mt-1 uppercase tracking-widest">Up to 3 adults</span>
                    </td>
                    <td className="py-6">₹6,000</td>
                    <td className="py-6">₹6,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-hand text-sm text-ink/50 text-center mt-6">
              *All rates include breakfast. Extra occupancy (age 5+): ₹2,000/head/night. Taxes as applicable.*
            </p>
          </div>

          {/* Meals Table */}
          <div className="mb-16">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-terracotta mb-8 border-b border-ink/10 pb-4 text-center">Farm Meals</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-serif">
                <thead>
                  <tr className="border-b border-ink/20 text-ink/60 italic text-lg">
                    <th className="py-4 font-normal">Meal</th>
                    <th className="py-4 font-normal">Veg</th>
                    <th className="py-4 font-normal">Non-Veg</th>
                  </tr>
                </thead>
                <tbody className="text-xl text-ink">
                  <tr className="border-b border-ink/5 border-dashed">
                    <td className="py-4">
                      Breakfast
                      <span className="block font-sans text-xs text-ink/50 mt-1">Poha/Upma/Thalipeeth, fruit, tea</span>
                    </td>
                    <td className="py-4 text-terracotta font-serif italic text-lg">Included</td>
                    <td className="py-4 text-terracotta font-serif italic text-lg">Included</td>
                  </tr>
                  <tr className="border-b border-ink/5 border-dashed">
                    <td className="py-4">
                      Lunch / Dinner Thali
                      <span className="block font-sans text-xs text-ink/50 mt-1">Bhakri, bhaji, dal, solkadhi & more</span>
                    </td>
                    <td className="py-4">₹500</td>
                    <td className="py-4">₹600+</td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      Evening Snacks
                      <span className="block font-sans text-xs text-ink/50 mt-1">Kanda bhaji, chutney, chai</span>
                    </td>
                    <td className="py-4 text-terracotta font-serif italic text-lg">Complimentary</td>
                    <td className="py-4 text-terracotta font-serif italic text-lg">Complimentary</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-hand text-sm text-ink/50 text-center mt-6">
              *Meals must be pre-booked in advance. Extra portions chargeable.*
            </p>
          </div>

          {/* Add-on Experiences */}
          <div className="mb-16">
            <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-terracotta mb-6 border-b border-ink/10 pb-4 text-center">Add-on Experiences</h2>
            <ul className="font-serif text-lg text-ink/80 space-y-4 max-w-lg mx-auto text-center">
              <li className="flex justify-between items-center border-b border-ink/5 pb-2">
                <span>Guided Forest Walk</span>
                <span className="font-bold">₹500 / person</span>
              </li>
              <li className="flex justify-between items-center border-b border-ink/5 pb-2">
                <span>Kids Nature Art Kit</span>
                <span className="font-bold">₹300 / child</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span>Farm-to-Table Cooking Class</span>
                <span className="font-bold">₹1,200 / person</span>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="bg-parchment-dark/30 p-8 border border-ink/10">
            <h2 className="font-sans text-xs font-bold tracking-widest uppercase text-ink/60 mb-6 text-center">Farm Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-serif text-ink/80 text-lg">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-1">•</span>
                    <span><strong>Check-in:</strong> 1:00 PM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-1">•</span>
                    <span><strong>Check-out:</strong> 11:00 AM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-1">•</span>
                    <span><strong>Child Policy:</strong> Kids under 5 stay free. Ages 5 and above are charged at ₹2,000/night extra occupancy rate.</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-1">•</span>
                    <span><strong>Extra Occupancy:</strong> ₹2,000/head/night for guests above age 5 beyond the base rate.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-1">•</span>
                    <span><strong>Pet Policy:</strong> We are pet friendly! Well-behaved pets are welcome with prior notice. ₹500/pet cleaning fee.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-terracotta mt-1">•</span>
                    <span><strong>Quiet Hours:</strong> 10:00 PM to 7:00 AM. We respect the silence of the forest.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
