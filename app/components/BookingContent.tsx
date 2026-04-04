"use client";

import { useState, type FormEvent } from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { DateRangePicker } from "./DateRangePicker";

export default function BookingContent() {
  const [formData, setFormData] = useState({
    space: "main-house",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    pets: "no",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleDateChange = (range: DateRange | undefined) => {
    setDateRange(range);
    setFormData((prev) => ({
      ...prev,
      checkIn: range?.from ? format(range.from, "yyyy-MM-dd") : "",
      checkOut: range?.to ? format(range.to, "yyyy-MM-dd") : "",
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-booking-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Your inquiry has been sent! We'll be in touch within 24 hours.");
        setFormData({
            space: "main-house",
            checkIn: "",
            checkOut: "",
            adults: 1,
            children: 0,
            pets: "no",
            name: "",
            email: "",
            phone: "",
            notes: "",
        });
        setDateRange(undefined);
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to send inquiry. Please try again later.");
    }
  };

  return (
    <div className="pt-32 pb-24 bg-parchment min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-notebook-lines opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col-reverse lg:flex-row gap-12">
        {/* Left Side: Form */}
        <div className="w-full lg:w-[55%] bg-white p-8 md:p-12 shadow-sm border border-ink/10 relative">
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-red-300/50 z-0 hidden md:block" />
          
          <div className="relative z-10 md:pl-8">
            <h1 className="font-serif text-5xl text-ink mb-2">Book Your Stay</h1>
            <p className="font-hand text-xl text-ink/60 mb-12">Secure your days of slow living.</p>

            {status === "success" ? (
              <div className="text-center py-20 border border-ink/10 bg-forest/5">
                <span className="material-symbols-outlined text-5xl text-forest mb-4">check_circle</span>
                <h3 className="font-serif text-2xl text-ink mb-2">Inquiry Received</h3>
                <p className="font-serif text-ink/70">Thank you! We've sent you a confirmation email and will reach out shortly.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 font-sans text-xs uppercase tracking-widest border-b border-ink/30 pb-1 text-ink/60 hover:text-ink hover:border-ink transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
                <form className="space-y-12" onSubmit={handleSubmit}>
                {/* Step 1: Space */}
                <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-terracotta mb-6 border-b border-ink/10 pb-2">1. Select Space</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="border border-ink/20 p-4 cursor-pointer hover:border-terracotta transition-colors relative group">
                        <input
                            type="radio"
                            name="space"
                            value="main-house"
                            className="sr-only peer"
                            checked={formData.space === "main-house"}
                            onChange={(e) => setFormData({ ...formData, space: e.target.value })}
                        />
                        <span className="absolute top-4 right-4 w-4 h-4 rounded-full border border-ink/40 peer-checked:bg-terracotta peer-checked:border-terracotta transition-colors" />
                        <h4 className="font-serif text-2xl text-ink mb-1">Main House</h4>
                        <p className="font-sans text-xs text-ink/60 uppercase tracking-widest">Up to 6 guests</p>
                    </label>
                    <label className="border border-ink/20 p-4 cursor-pointer hover:border-terracotta transition-colors relative group">
                        <input
                            type="radio"
                            name="space"
                            value="garden-cottage"
                            className="sr-only peer"
                            checked={formData.space === "garden-cottage"}
                            onChange={(e) => setFormData({ ...formData, space: e.target.value })}
                        />
                        <span className="absolute top-4 right-4 w-4 h-4 rounded-full border border-ink/40 peer-checked:bg-terracotta peer-checked:border-terracotta transition-colors" />
                        <h4 className="font-serif text-2xl text-ink mb-1">Garden Cottage</h4>
                        <p className="font-sans text-xs text-ink/60 uppercase tracking-widest">Up to 2 guests</p>
                    </label>
                    </div>
                </div>

                {/* Step 2: Dates */}
                <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-terracotta mb-6 border-b border-ink/10 pb-2">2. Select Dates</h3>
                    <div className="w-full relative z-50">
                        <label className="block font-serif italic text-ink/70 mb-2">Check-in — Check-out</label>
                        <DateRangePicker 
                            date={dateRange} 
                            setDate={handleDateChange} 
                        />
                        {/* Hidden inputs to trigger required validation */}
                        <input type="text" className="hidden" required value={formData.checkIn} onChange={() => {}} />
                        <input type="text" className="hidden" required value={formData.checkOut} onChange={() => {}} />
                    </div>
                </div>

                {/* Step 3: Guest Details */}
                <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-terracotta mb-6 border-b border-ink/10 pb-2">3. Guest Count</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <label className="block font-serif italic text-ink/70 mb-2">Adults</label>
                            <div className="flex items-center border-b border-ink/30 py-1 transition-colors focus-within:border-terracotta">
                                <button 
                                    type="button" 
                                    onClick={() => setFormData(prev => ({ ...prev, adults: Math.max(1, prev.adults - 1) }))}
                                    className="w-10 h-10 flex items-center justify-center text-ink/40 hover:text-terracotta transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xl">remove</span>
                                </button>
                                <input 
                                    type="number" 
                                    min="1" 
                                    max={formData.space === "main-house" ? 6 : 2}
                                    required
                                    value={formData.adults}
                                    onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) || 1 })}
                                    className="flex-1 w-full bg-transparent text-center text-ink focus:outline-none font-sans text-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                                />
                                <button 
                                    type="button" 
                                    onClick={() => setFormData(prev => ({ ...prev, adults: Math.min(formData.space === "main-house" ? 6 : 2, prev.adults + 1) }))}
                                    className="w-10 h-10 flex items-center justify-center text-ink/40 hover:text-terracotta transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xl">add</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block font-serif italic text-ink/70 mb-2">Children (5-12yrs)</label>
                            <div className="flex items-center border-b border-ink/30 py-1 transition-colors focus-within:border-terracotta">
                                <button 
                                    type="button" 
                                    onClick={() => setFormData(prev => ({ ...prev, children: Math.max(0, prev.children - 1) }))}
                                    className="w-10 h-10 flex items-center justify-center text-ink/40 hover:text-terracotta transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xl">remove</span>
                                </button>
                                <input 
                                    type="number" 
                                    min="0" 
                                    max="6"
                                    value={formData.children}
                                    onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) || 0 })}
                                    className="flex-1 w-full bg-transparent text-center text-ink focus:outline-none font-sans text-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                                />
                                <button 
                                    type="button" 
                                    onClick={() => setFormData(prev => ({ ...prev, children: Math.min(6, prev.children + 1) }))}
                                    className="w-10 h-10 flex items-center justify-center text-ink/40 hover:text-terracotta transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xl">add</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block font-serif italic text-ink/70 mb-2">Pets</label>
                            <select 
                                className="w-full bg-transparent border-b border-ink/30 py-3 text-ink focus:border-terracotta focus:outline-none font-sans text-lg transition-colors cursor-pointer"
                                value={formData.pets}
                                onChange={(e) => setFormData({ ...formData, pets: e.target.value })}
                            >
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Step 4: Contact */}
                <div>
                    <h3 className="font-sans text-xs uppercase tracking-widest text-terracotta mb-6 border-b border-ink/10 pb-2">4. Your Details</h3>
                    <div className="space-y-6">
                    <input 
                        type="text" 
                        required
                        placeholder="Full Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-ink/30 py-3 text-ink placeholder-ink/40 focus:border-terracotta focus:outline-none font-serif text-lg transition-colors" 
                    />
                    <input 
                        type="email" 
                        required
                        placeholder="Email Address" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-ink/30 py-3 text-ink placeholder-ink/40 focus:border-terracotta focus:outline-none font-serif text-lg transition-colors" 
                    />
                    <input 
                        type="tel" 
                        placeholder="Phone Number (Optional)" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-ink/30 py-3 text-ink placeholder-ink/40 focus:border-terracotta focus:outline-none font-serif text-lg transition-colors" 
                    />
                    <textarea 
                        placeholder="Any special requests or dietary requirements?" 
                        rows={3} 
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-transparent border-b border-ink/30 py-3 text-ink placeholder-ink/40 focus:border-terracotta focus:outline-none font-serif text-lg resize-none transition-colors"
                    ></textarea>
                    </div>
                </div>

                {status === "error" && (
                    <div className="p-4 bg-red-50 text-red-700 font-serif text-sm border-l-2 border-red-700">
                        {message}
                    </div>
                )}

                {/* Submit */}
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-ink text-white font-sans text-sm uppercase tracking-widest font-bold py-4 hover:bg-terracotta transition-colors mt-8 shadow-md disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {status === "loading" ? "Checking availability..." : "Send Inquiry"}
                </button>
                </form>
            )}
          </div>
        </div>

        {/* Right Side: Calendar Embed & Summary */}
        <div className="w-full lg:w-[45%] space-y-8 flex flex-col pt-8 lg:pt-0">
          <div className="bg-paper-white shadow-polaroid p-6 lg:p-8 transform rotate-1 rough-edge relative flex-grow overflow-hidden flex flex-col">
            <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-200/50 -rotate-3 backdrop-blur-sm z-20 shadow-sm" />
            
            <h3 className="font-serif text-2xl text-ink mb-6 border-b border-ink/10 pb-4">Check Availability</h3>
            
            <div className="flex-grow w-full h-[400px] lg:h-full relative filter sepia-[0.1] contrast-[0.9]">
               <iframe 
                 src="https://calendar.google.com/calendar/embed?src=79841354370294e7651c1f181b69ad7e621672595bb587a3f8f480248ba11247%40group.calendar.google.com&ctz=Asia%2FKolkata&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0" 
                 style={{border: 0, width: "100%", height: "100%", position: "absolute", inset: 0}} 
                 frameBorder="0" 
                 scrolling="no"
                 className="opacity-80 mix-blend-multiply"
               ></iframe>
            </div>
            
            <p className="font-hand text-sm text-ink/60 mt-6 text-center">
              Our calendar is updated in real-time. Pick any available dates.
            </p>
          </div>

          <div className="bg-white/70 border border-ink/10 p-6 shadow-sm flex items-start gap-4 transform -rotate-1">
             <span className="material-symbols-outlined text-3xl text-terracotta shrink-0">mail</span>
             <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-ink mb-2">What Happens Next?</h4>
                <ul className="space-y-2 font-serif text-sm text-ink/70">
                    <li>1. We receive your inquiry and check dates.</li>
                    <li>2. We confirm your stay via email within 24hr.</li>
                    <li>3. We'll assist you with payment and arrival details.</li>
                </ul>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
