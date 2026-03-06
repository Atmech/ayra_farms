"use client";

export default function BookingContent() {
  return (
    <div className="pt-32 pb-24 bg-parchment min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-notebook-lines opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12">
        {/* Left Side: Form */}
        <div className="w-full lg:w-[60%] bg-white p-8 md:p-12 shadow-sm border border-ink/10 relative">
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-red-300/50 z-0 hidden md:block" />
          
          <div className="relative z-10 md:pl-8">
            <h1 className="font-serif text-5xl text-ink mb-2">Book Your Stay</h1>
            <p className="font-hand text-xl text-ink/60 mb-12">Secure your days of slow living.</p>

            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              {/* Step 1 */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-terracotta mb-6 border-b border-ink/10 pb-2">1. Select Dates</h3>
                <div className="w-full h-40 bg-parchment/50 border border-ink/20 flex flex-col items-center justify-center border-dashed">
                  {/* Calendar sync API */}
                  <span className="material-symbols-outlined text-4xl text-ink/20 mb-2">calendar_month</span>
                  <span className="font-serif italic text-ink/50">Date Picker Integration Placeholder</span>
                  <span className="font-sans text-[10px] text-ink/40 mt-1 uppercase tracking-widest">Google Calendar Sync</span>
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-terracotta mb-6 border-b border-ink/10 pb-2">2. Select Space</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="border border-ink/20 p-4 cursor-pointer hover:border-terracotta transition-colors relative group">
                     <span className="absolute top-4 right-4 w-4 h-4 rounded-full border border-ink/40 group-hover:border-terracotta" />
                     <h4 className="font-serif text-2xl text-ink mb-1">Main House</h4>
                     <p className="font-sans text-xs text-ink/60 uppercase tracking-widest">Up to 6 guests</p>
                  </label>
                  <label className="border border-ink/20 p-4 cursor-pointer hover:border-terracotta transition-colors relative group">
                     <span className="absolute top-4 right-4 w-4 h-4 rounded-full border border-ink/40 group-hover:border-terracotta" />
                     <h4 className="font-serif text-2xl text-ink mb-1">Garden Cottage</h4>
                     <p className="font-sans text-xs text-ink/60 uppercase tracking-widest">Up to 2 guests</p>
                  </label>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-terracotta mb-6 border-b border-ink/10 pb-2">3. Guest Details</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="First Name" className="w-full bg-transparent border-b border-ink/30 py-3 text-ink placeholder-ink/40 focus:border-terracotta focus:outline-none font-serif text-lg transition-colors" />
                    <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b border-ink/30 py-3 text-ink placeholder-ink/40 focus:border-terracotta focus:outline-none font-serif text-lg transition-colors" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-ink/30 py-3 text-ink placeholder-ink/40 focus:border-terracotta focus:outline-none font-serif text-lg transition-colors" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-ink/30 py-3 text-ink placeholder-ink/40 focus:border-terracotta focus:outline-none font-serif text-lg transition-colors" />
                  <textarea placeholder="Any special requests or dietary requirements?" rows={3} className="w-full bg-transparent border-b border-ink/30 py-3 text-ink placeholder-ink/40 focus:border-terracotta focus:outline-none font-serif text-lg resize-none transition-colors"></textarea>
                </div>
              </div>

              {/* Submit */}
              <button type="button" className="w-full bg-ink text-white font-sans text-sm uppercase tracking-widest font-bold py-4 hover:bg-terracotta transition-colors mt-8 shadow-md">
                Proceed to Payment
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Summary / Payment Placeholder */}
        <div className="w-full lg:w-[40%] space-y-8">
          <div className="bg-paper-white shadow-polaroid p-8 transform rotate-1 rough-edge relative">
            <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-200/50 -rotate-3 backdrop-blur-sm z-20 shadow-sm" />
            
            <h3 className="font-serif text-3xl text-ink mb-6 border-b border-ink/10 pb-4">Booking Summary</h3>
            
            <div className="space-y-4 mb-8 font-serif text-lg text-ink/80">
              <div className="flex justify-between">
                <span>Select a room</span>
                <span>—</span>
              </div>
              <div className="flex justify-between">
                <span>Select dates</span>
                <span>—</span>
              </div>
            </div>

            <div className="border-t border-ink/20 pt-6 flex justify-between items-center text-ink font-bold">
              <span className="font-sans text-sm uppercase tracking-widest">Total</span>
              <span className="font-serif text-2xl">₹0</span>
            </div>
            <p className="font-hand text-sm text-ink/50 mt-4 text-center">Taxes included. Meals added separately.</p>
          </div>

          <div className="bg-white/50 border border-ink/10 p-6 text-center shadow-sm">
             <span className="material-symbols-outlined text-3xl text-ink/30 mb-2">lock</span>
             <h4 className="font-sans text-xs uppercase tracking-widest text-ink/70 mb-2">Razorpay Integration</h4>
             <p className="font-serif italic text-ink/50 text-sm">Secure payment gateway placeholder.</p>
          </div>
          
          <div className="bg-white/50 border border-ink/10 p-6 text-center shadow-sm">
             <span className="material-symbols-outlined text-3xl text-ink/30 mb-2">mail</span>
             <h4 className="font-sans text-xs uppercase tracking-widest text-ink/70 mb-2">Automated Confirmation</h4>
             <p className="font-serif italic text-ink/50 text-sm">Resend email integration placeholder.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
