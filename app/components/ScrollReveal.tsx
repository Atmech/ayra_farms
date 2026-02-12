"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let x = 0;
    let y = 0;

    switch (direction) {
      case "left":
        x = -50;
        break;
      case "right":
        x = 50;
        break;
      case "up":
        y = 50;
        break;
      case "down":
        y = -50;
        break;
    }

    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        x,
        y,
      },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [direction]);

  return (
    <div ref={elementRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
