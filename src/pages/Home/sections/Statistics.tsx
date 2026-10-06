"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: "stat-1",
    target: 4,
    suffix: "",
    label: "Years of Dedicated Study",
  },
  {
    id: "stat-2",
    target: 18,
    suffix: "+",
    label: "Projects Engineered",
  },
  {
    id: "stat-3",
    target: 25,
    suffix: "+",
    label: "University & Tech Events Organized",
  },
  {
    id: "stat-4",
    target: 8,
    suffix: "",
    label: "Honors & Competition Awards",
  },
  {
    id: "stat-5",
    target: 6,
    suffix: "",
    label: "Industry Certifications Earned",
  },
];

export default function Statistics() {
  const containerRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const section = containerRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Reveal container and card
        gsap.set(".stats-reveal", { y: 28 });
        gsap.to(".stats-reveal", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        });

        // Counter upward animation
        ScrollTrigger.create({
          trigger: section,
          start: "top 80%",
          once: true,
          onEnter: () => {
            STATS_DATA.forEach((item, index) => {
              const el = numbersRef.current[index];
              if (!el) return;

              const counter = { val: 0 };
              gsap.to(counter, {
                val: item.target,
                duration: 1.2,
                delay: 0.15,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = Math.floor(counter.val).toString();
                },
              });
            });
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".stats-reveal", { opacity: 1, y: 0 });
        STATS_DATA.forEach((item, index) => {
          const el = numbersRef.current[index];
          if (el) {
            el.textContent = item.target.toString();
          }
        });
      });

      const refresh = () => ScrollTrigger.refresh();
      requestAnimationFrame(refresh);
      if (document.readyState === "complete") refresh();
      else window.addEventListener("load", refresh, { once: true });
      document.fonts?.ready.then(refresh);
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="statistics"
      data-nav="dark"
      className="relative bg-background text-foreground py-20 lg:py-32 overflow-hidden border-b border-border"
    >
      {/* Ambient cyan orb centered behind counter values */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="w-lg sm:w-2xl h-72 sm:h-88 rounded-full bg-primary/20 blur-xl translate-y-12" />
      </div>

      <div className="relative z-10 max-w-330 mx-auto px-5 sm:px-8">
        {/* Section Heading Block */}
        <div className="stats-reveal text-center max-w-3xl mx-auto mb-14 lg:mb-20" style={{ opacity: 0 }}>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-primary mb-3">
            BY THE NUMBERS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Four Years of Impact
          </h2>
        </div>

        {/* 5-Cell Metric Panel */}
        <div
          className="stats-reveal rounded-lg border border-border bg-card/70 backdrop-blur-md shadow-2xl overflow-hidden"
          style={{ opacity: 0 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border">
            {STATS_DATA.map((stat, i) => {
              const isLastMobile = i === STATS_DATA.length - 1;
              return (
                <div
                  key={stat.id}
                  data-index={i}
                  className={`group relative flex flex-col items-center justify-center p-6 sm:p-8 lg:py-12 text-center transition-colors duration-300 hover:bg-card/90 ${
                    isLastMobile ? "col-span-2 md:col-span-1" : ""
                  }`}
                >
                  <div className="flex items-baseline justify-center font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-3">
                    <span
                      ref={(el) => {
                        numbersRef.current[i] = el;
                      }}
                      className="tabular-nums"
                    >
                      {stat.target}
                    </span>
                    {stat.suffix && (
                      <span className="text-primary font-mono text-2xl sm:text-3xl lg:text-4xl ml-0.5 select-none">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-default max-w-42.5 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}