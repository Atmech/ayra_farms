"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Element Config ─── */
interface ElementLayout {
  top: string;
  left: string;
  width: number;
  height: number;
}

interface MapElement {
  id: string;
  src: string;
  alt: string;
  label: string;
  targetSection: string;
  rotation: number;
  delay: number;
  zIndex: number;
  /* Desktop layout (>= 768px) */
  desktop: ElementLayout;
  /* Mobile layout (< 768px) — scaled down, spaced to avoid overlap */
  mobile: ElementLayout;
}

const MAP_ELEMENTS: MapElement[] = [
  {
    id: "house",
    src: "/elements/house.png",
    alt: "The farmhouse at Ayra Farms",
    label: "The Dwelling",
    targetSection: "#stay",
    rotation: -3,
    delay: 0.05,
    zIndex: 12,
    desktop: { top: "10%", left: "50%", width: 240, height: 150 },
    mobile:  { top: "6%",  left: "50%", width: 150, height: 95 },
  },
  {
    id: "berries",
    src: "/elements/berries.png",
    alt: "Fresh jamun berries from the farm",
    label: "The Farm",
    targetSection: "#about",
    rotation: 5,
    delay: 0.15,
    zIndex: 11,
    desktop: { top: "30%", left: "8%",  width: 140, height: 160 },
    mobile:  { top: "24%", left: "12%", width: 90,  height: 105 },
  },
  {
    id: "bananas",
    src: "/elements/bananas.png",
    alt: "Home-grown bananas",
    label: "The Kitchen",
    targetSection: "#dining",
    rotation: -6,
    delay: 0.2,
    zIndex: 11,
    desktop: { top: "26%", left: "82%", width: 135, height: 160 },
    mobile:  { top: "22%", left: "82%", width: 85,  height: 100 },
  },
  {
    id: "cow",
    src: "/elements/cow.png",
    alt: "Farm cow resting peacefully",
    label: "Farm Life",
    targetSection: "#about",
    rotation: 2,
    delay: 0.3,
    zIndex: 10,
    desktop: { top: "76%", left: "10%", width: 210, height: 140 },
    mobile:  { top: "78%", left: "14%", width: 130, height: 88 },
  },
  {
    id: "dog",
    src: "/elements/dog.png",
    alt: "The farm dog",
    label: "Our Residents",
    targetSection: "#experience",
    rotation: -4,
    delay: 0.35,
    zIndex: 10,
    desktop: { top: "70%", left: "80%", width: 150, height: 190 },
    mobile:  { top: "72%", left: "80%", width: 95,  height: 120 },
  },
];

/* ── Ayra & hair constants (desktop / mobile) ── */
const LAYOUT = {
  desktop: {
    ayra:        { top: "58%", width: 210, height: 260 },
    hair:        { startTop: "43%", finalTop: "32%", width: 230, height: 95 },
    burstOrigin: { top: "40%", left: "50%" },
  },
  mobile: {
    ayra:        { top: "52%", width: 140, height: 175 },
    hair:        { startTop: "38%", finalTop: "28%", width: 155, height: 65 },
    burstOrigin: { top: "35%", left: "50%" },
  },
};

/* ─── Hook: detect mobile ─── */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

/* ─── Component ─── */
export default function AyraScrollMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const ayraRef = useRef<HTMLDivElement>(null);
  const hairRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const labelsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const introRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isSettled, setIsSettled] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isMobile = useIsMobile();
  const layout = isMobile ? LAYOUT.mobile : LAYOUT.desktop;

  const setElementRef = useCallback(
    (id: string) => (el: HTMLDivElement | null) => {
      if (el) elementsRef.current.set(id, el);
    },
    []
  );

  const setLabelRef = useCallback(
    (id: string) => (el: HTMLDivElement | null) => {
      if (el) labelsRef.current.set(id, el);
    },
    []
  );

  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  /* Reduced-motion check */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* Main GSAP animation — re-runs when layout changes */
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsSettled(true);
      return;
    }

    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const ayra = ayraRef.current;
    const hair = hairRef.current;
    const intro = introRef.current;
    const cta = ctaRef.current;
    if (!section || !canvas || !ayra || !hair) return;

    /* Update Ayra & hair sizes for current layout */
    gsap.set(ayra, {
      width: layout.ayra.width,
      height: layout.ayra.height,
      top: layout.ayra.top,
    });
    gsap.set(hair, {
      width: layout.hair.width,
      height: layout.hair.height,
    });

    /* Update element sizes for current layout */
    MAP_ELEMENTS.forEach((el) => {
      const dom = elementsRef.current.get(el.id);
      if (!dom) return;
      const l = isMobile ? el.mobile : el.desktop;
      gsap.set(dom, { width: l.width, height: l.height });
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          onUpdate: (self) => {
            if (self.progress > 0.82) {
              setIsSettled(true);
            } else {
              setIsSettled(false);
            }
          },
        },
      });

      /* ── Phase 0: Fade out intro text ── */
      if (intro) {
        tl.to(intro, {
          autoAlpha: 0,
          y: -30,
          duration: 0.08,
          ease: "power2.in",
        }, 0);
      }

      /* ── Phase 1: Ayra & hair appear ── */
      tl.fromTo(ayra,
        { scale: 0.7, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.13, ease: "back.out(1.4)" },
        0.02
      );
      gsap.set(hair, {
        top: layout.hair.startTop,
        autoAlpha: 0,
        scale: 0.7,
      });
      tl.to(hair, {
        scale: 1,
        autoAlpha: 1,
        duration: 0.13,
        ease: "back.out(1.4)",
      }, 0.02);

      /* ── Phase 1.5: Hair lifts upward ── */
      tl.to(hair, {
        top: layout.hair.finalTop,
        duration: 0.38,
        ease: "power2.out",
      }, 0.12);

      /* ── Phase 2: Elements burst outward ── */
      MAP_ELEMENTS.forEach((el) => {
        const dom = elementsRef.current.get(el.id);
        if (!dom) return;
        const l = isMobile ? el.mobile : el.desktop;

        gsap.set(dom, {
          top: layout.burstOrigin.top,
          left: layout.burstOrigin.left,
          xPercent: -50,
          yPercent: -50,
          scale: 0,
          autoAlpha: 0,
          rotation: 0,
        });

        tl.to(dom, {
          top: l.top,
          left: l.left,
          scale: 1,
          autoAlpha: 1,
          rotation: el.rotation,
          duration: 0.3,
          ease: "back.out(1.5)",
        }, 0.15 + el.delay);
      });

      /* ── Phase 3: Labels fade in ── */
      MAP_ELEMENTS.forEach((el) => {
        const label = labelsRef.current.get(el.id);
        if (!label) return;

        tl.fromTo(label,
          { autoAlpha: 0, y: 8, scale: 0.85 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 0.1, ease: "power2.out" },
          0.55 + el.delay * 0.5
        );
      });

      /* ── Phase 4: CTA appears ── */
      if (cta) {
        tl.fromTo(cta,
          { autoAlpha: 0, y: 15 },
          { autoAlpha: 1, y: 0, duration: 0.08, ease: "power2.out" },
          0.82
        );
      }
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion, isMobile, layout]);

  /* Helpers for current layout */
  const getElementLayout = (el: MapElement): ElementLayout =>
    isMobile ? el.mobile : el.desktop;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-parchment"
      style={{ height: prefersReducedMotion ? "100vh" : "400vh" }}
      aria-label="Interactive site map — scroll to reveal, click to explore"
    >
      <div
        className={`${
          prefersReducedMotion ? "" : "sticky top-0"
        } flex h-screen w-full items-center justify-center overflow-hidden bg-parchment`}
      >
        {/* Paper texture background */}
        <div className="absolute inset-0 bg-paper-texture opacity-60" />

        {/* Subtle radial glow behind center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-terracotta/8 rounded-full blur-[100px]" />

        {/* Intro text overlay */}
        <div
          ref={introRef}
          className="absolute inset-0 z-40 pointer-events-none flex flex-col items-center justify-center"
        >
          <h2 className="font-hand text-5xl md:text-7xl text-ink leading-none">
            Ayra&apos;s World
          </h2>
          <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.3em] text-ink/50 md:text-xs">
            scroll to explore
          </p>
          <span className="mt-3 text-2xl text-terracotta/70 animate-bounce">
            ↓
          </span>
        </div>

        {/* ── Canvas ── */}
        <div
          ref={canvasRef}
          className="relative w-[92vw] max-w-[620px] h-[80vh] max-h-[700px]"
        >
          {/* ── Ayra ── */}
          <div
            ref={ayraRef}
            className="scroll-element absolute z-20"
            style={{
              top: layout.ayra.top,
              left: "50%",
              width: layout.ayra.width,
              height: layout.ayra.height,
              transform: "translate(-50%, -50%)",
              opacity: 0,
            }}
          >
            <Image
              src="/elements/ayra.png"
              alt="Ayra — the girl who dreams of the farm"
              fill
              sizes="(max-width: 768px) 140px, 210px"
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>

          {/* ── Hair ── */}
          <div
            ref={hairRef}
            className="scroll-element absolute z-30"
            style={{
              top: layout.hair.startTop,
              left: "50%",
              width: layout.hair.width,
              height: layout.hair.height,
              transform: "translate(-50%, -50%)",
              opacity: 0,
            }}
          >
            <Image
              src="/elements/ayra-hair.png"
              alt=""
              fill
              sizes="(max-width: 768px) 155px, 230px"
              className="object-contain drop-shadow-sm"
              priority
              aria-hidden="true"
            />
          </div>

          {/* ── Interactive elements ── */}
          {MAP_ELEMENTS.map((el) => {
            const l = getElementLayout(el);
            return (
              <div
                key={el.id}
                ref={setElementRef(el.id)}
                className="scroll-element absolute"
                style={{
                  top: l.top,
                  left: l.left,
                  width: l.width,
                  height: l.height,
                  zIndex: el.zIndex,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <button
                  onClick={() => scrollToSection(el.targetSection)}
                  className={`scroll-element-btn group relative w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 rounded-lg transition-all duration-300 ${
                    isSettled ? "cursor-pointer" : "pointer-events-none"
                  }`}
                  aria-label={`Go to ${el.label} section`}
                  tabIndex={isSettled ? 0 : -1}
                >
                  <Image
                    src={el.src}
                    alt={el.alt}
                    fill
                    sizes={`(max-width: 768px) ${el.mobile.width}px, ${el.desktop.width}px`}
                    className={`object-contain drop-shadow-lg transition-all duration-500 ${
                      isSettled
                        ? "group-hover:scale-[1.12] group-hover:drop-shadow-2xl"
                        : ""
                    }`}
                  />

                  {/* Hover ring glow */}
                  <div
                    className={`absolute inset-[-10px] md:inset-[-14px] rounded-full border-2 border-dashed transition-all duration-500 ${
                      isSettled
                        ? "border-terracotta/0 group-hover:border-terracotta/40 group-hover:bg-terracotta/5"
                        : "border-transparent"
                    }`}
                  />

                  {/* Pulse ring hint */}
                  {isSettled && (
                    <span className="absolute inset-[-8px] md:inset-[-10px] rounded-full border-2 border-terracotta/25 animate-element-ping pointer-events-none" />
                  )}
                </button>

                {/* Label */}
                <div
                  ref={setLabelRef(el.id)}
                  className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none ${
                    parseFloat(l.top) < 40 ? "top-full mt-1 md:mt-2" : "bottom-full mb-1 md:mb-2"
                  }`}
                  style={{ opacity: 0 }}
                >
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-[1px] h-2 md:h-3 border-l border-dashed border-ink/25 ${
                      parseFloat(l.top) < 40 ? "-top-2 md:-top-3" : "-bottom-2 md:-bottom-3"
                    }`}
                  />
                  <span
                    className={`element-label font-hand text-xs md:text-base text-ink/75 px-1.5 md:px-2 py-0.5 bg-parchment/80 backdrop-blur-sm rounded-sm ${
                      isSettled ? "element-label-active" : ""
                    }`}
                  >
                    {el.label}
                    {isSettled && (
                      <span className="inline-block ml-1 text-terracotta text-[10px] md:text-xs">
                        ↗
                      </span>
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          ref={ctaRef}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40 text-center"
          style={{ opacity: 0 }}
        >
          <p className="font-hand text-base md:text-2xl text-terracotta/80 animate-gentle-float">
            tap any element to explore ✦
          </p>
          <div className="mt-1.5 md:mt-2 flex items-center justify-center gap-2">
            <span className="w-6 md:w-8 h-[1px] bg-ink/20" />
            <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-ink/35">
              interactive map
            </span>
            <span className="w-6 md:w-8 h-[1px] bg-ink/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
