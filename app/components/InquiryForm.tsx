"use client";

import { useState, useRef, type FormEvent } from "react";

type FormData = {
  who: string;
  date: string;
  pets: string;
  name: string;
  email: string;
  phone: string;
};

export default function InquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    who: "",
    date: "",
    pets: "no",
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send-postcard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage("Your postcard has been sent! We'll get back to you soon.");
        setFormData({ who: "", date: "", pets: "no", name: "", email: "", phone: "" });
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to send. Please try again later.");
    }
  };

  return (
    <section className="py-24 bg-parchment relative overflow-hidden" id="inquiry">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(https://www.transparenttextures.com/patterns/cubes.png)",
        }}
      />
      <div className="absolute -left-20 top-20 w-72 h-72 bg-terracotta/10 rounded-full blur-3xl mix-blend-multiply" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative bg-paper-white p-6 md:p-10 shadow-floating rough-edge transform rotate-[0.5deg]">
          {/* Vertical divider */}
          <div className="hidden md:block absolute top-10 bottom-10 left-1/2 w-[1px] bg-ink/10" />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 relative"
          >
            {/* Left — Steps 1-3 */}
            <div className="space-y-10">
              <div className="mb-2">
                <span className="font-sans text-xs font-bold tracking-[0.2em] text-terracotta uppercase">
                  Step 1 — 3
                </span>
                <h2 className="font-hand text-4xl text-ink mt-1">
                  Tell us your story...
                </h2>
                {/* Progress bar */}
                <div className="relative w-full mt-4">
                  <div className="h-[2px] w-full bg-ink/10 rounded-full" />
                  <div
                    className="absolute top-0 left-0 h-[3px] w-2/3 bg-terracotta/60 rounded-full"
                    style={{
                      maskImage:
                        "linear-gradient(90deg, black 80%, transparent 100%)",
                    }}
                  />
                  <div className="absolute -top-1 left-2/3 transform -translate-x-1/2">
                    <span className="material-symbols-outlined text-terracotta text-sm rotate-12">
                      edit
                    </span>
                  </div>
                </div>
              </div>

              {/* Q1: Who is coming? */}
              <div>
                <label className="block font-serif text-xl text-ink mb-4 italic">
                  1. Who is coming?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: "couple", icon: "favorite", label: "Couple" },
                    { value: "family", icon: "diversity_3", label: "Family" },
                    { value: "solitary", icon: "self_improvement", label: "Solitary" },
                  ].map((opt) => (
                    <label key={opt.value} className="cursor-pointer text-center group">
                      <input
                        type="radio"
                        name="who"
                        value={opt.value}
                        className="peer sr-only"
                        checked={formData.who === opt.value}
                        onChange={(e) =>
                          setFormData({ ...formData, who: e.target.value })
                        }
                      />
                      <div className="p-3 border border-ink/20 rounded hover:border-terracotta peer-checked:bg-terracotta/10 peer-checked:border-terracotta transition-all">
                        <span className="material-symbols-outlined text-2xl text-ink/60">
                          {opt.icon}
                        </span>
                        <div className="text-xs font-sans font-bold uppercase mt-1 text-ink/60">
                          {opt.label}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q2: When? */}
              <div>
                <label className="block font-serif text-xl text-ink mb-4 italic">
                  2. When do you wish to escape?
                </label>
                <input
                  type="date"
                  className="w-full bg-transparent border-b border-ink/20 py-2 text-ink font-serif focus:ring-0 focus:border-terracotta text-lg focus:outline-none"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>

              {/* Q3: Pets? */}
              <div>
                <label className="block font-serif text-xl text-ink mb-4 italic">
                  3. Any furry friends joining?
                </label>
                <div className="flex gap-4">
                  {["yes", "no"].map((opt) => (
                    <label
                      key={opt}
                      className="inline-flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="pets"
                        className="peer sr-only"
                        value={opt}
                        checked={formData.pets === opt}
                        onChange={(e) =>
                          setFormData({ ...formData, pets: e.target.value })
                        }
                      />
                      <span className="w-4 h-4 border border-ink/40 rounded-full mr-2 peer-checked:bg-terracotta peer-checked:border-terracotta flex items-center justify-center">
                        <span className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </span>
                      <span className="font-serif text-lg text-ink/80 capitalize">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Step 4 */}
            <div className="flex flex-col h-full pt-8 md:pt-0 relative">
              {/* Konkan Post stamp */}
              <div className="absolute top-0 right-0 w-24 h-28 border-2 border-dashed border-ink/20 hidden md:flex items-center justify-center rotate-2 bg-parchment/20">
                <div className="text-center">
                  <span className="material-symbols-outlined text-3xl text-ink/20 block">
                    spa
                  </span>
                  <span className="text-[8px] uppercase tracking-widest text-ink/20">
                    Konkan
                    <br />
                    Post
                  </span>
                </div>
              </div>

              <div className="mt-auto md:mt-32 space-y-8">
                <div className="mb-2">
                  <span className="font-sans text-xs font-bold tracking-[0.2em] text-terracotta uppercase">
                    Step 4
                  </span>
                </div>
                <label className="block font-serif text-xl text-ink mb-2 italic">
                  How can we reach you?
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-ink/20 py-2 text-ink font-hand text-2xl focus:ring-0 focus:border-terracotta placeholder-ink/30 transition-colors focus:outline-none"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-ink/20 py-2 text-ink font-hand text-2xl focus:ring-0 focus:border-terracotta placeholder-ink/30 transition-colors focus:outline-none"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-ink/20 py-2 text-ink font-hand text-2xl focus:ring-0 focus:border-terracotta placeholder-ink/30 transition-colors focus:outline-none"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div className="mt-12 text-right">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-ink px-8 py-3 font-medium text-white shadow-2xl transition duration-300 hover:bg-terracotta hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="font-serif italic text-lg mr-2">
                    {status === "loading"
                      ? "Sending..."
                      : "Send your Postcard"}
                  </span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                </button>
              </div>

              {/* Status message */}
              {status !== "idle" && status !== "loading" && (
                <div
                  className={`mt-4 p-3 rounded-sm font-serif text-sm ${
                    status === "success"
                      ? "bg-forest/10 text-forest"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
