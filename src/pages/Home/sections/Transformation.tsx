"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "../../../components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Milestone {
  id: string;
  step: string;
  title: string;
  reflection: string;
  image: {
    src: string;
    srcset: string;
    sizes: string;
    alt: string;
  };
}

const MILESTONES: Milestone[] = [
  {
    id: "step-1",
    step: "Phase 01 // Freshmen Arrival",
    title: "The Initial Spark",
    reflection:
      "I arrived uncertain of my technical voice, intimidated by the sheer depth of computer science and wondering if I could stand out.",
    image: {
      src: "/image/Fac1.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/transformation_initial_spark.png-wvc-srcset",
      sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/transformation_initial_spark.png-wvc-sizes",
      alt: "A first-year student arriving on the University of Vavuniya campus"
    }
  },
  {
    id: "step-2",
    step: "Phase 02 // Deep Development",
    title: "Embracing the Friction",
    reflection:
      "I realized that bugs and compile failures were not signs of inadequacy, but the exact mechanism through which an engineer is forged.",
    image: {
      src: "/image/Libi62.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/transformation_embracing_friction.png-wvc-srcset",
      sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/transformation_embracing_friction.png-wvc-sizes",
      alt: "Late night code editing and debugging session on system software"
    }
  },
  {
    id: "step-3",
    step: "Phase 03 // Team Synergies",
    title: "Expanding the Horizon",
    reflection:
      "I learned that the best software is built through empathy, teamwork, and clear communication rather than isolated solo hacking.",
    image: {
      src: "/image/Libi46.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/transformation_expanding_horizon.png-wvc-srcset",
      sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/transformation_expanding_horizon.png-wvc-sizes",
      alt: "Collaborative tech hackathon and architectural whiteboarding session"
    }
  },
  {
    id: "step-4",
    step: "Phase 04 // Degree Completion",
    title: "Ready for the Horizon",
    reflection:
      "I leave the University of Vavuniya with grounded confidence, battle-tested technical discipline, and an insatiable hunger to build systems that matter.",
    image: {
      src: "/image/Libi57.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/transformation_ready_horizon.png-wvc-srcset",
      sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/transformation_ready_horizon.png-wvc-sizes",
      alt: "A BICT graduate standing on the University of Vavuniya campus"
    }
  }
];

export default function Transformation() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(".transformation-header", { y: 24 });
        gsap.to(".transformation-header", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true
          }
        });

        gsap.set(".milestone-card", { y: 35 });
        gsap.to(".milestone-card", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".milestones-grid",
            start: "top 80%",
            once: true
          }
        });

        gsap.set(".transformation-banner", { y: 24, scale: 0.98 });
        gsap.to(".transformation-banner", {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".transformation-banner",
            start: "top 85%",
            once: true
          }
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [".transformation-header", ".milestone-card", ".transformation-banner"],
          {
            opacity: 1,
            y: 0,
            scale: 1
          }
        );
      });

      const refresh = () => ScrollTrigger.refresh();
      requestAnimationFrame(refresh);
      if (document.readyState === "complete") {
        refresh();
      } else {
        window.addEventListener("load", refresh, { once: true });
      }
      if (document.fonts?.ready) {
        document.fonts.ready.then(refresh);
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="transformation"
      data-nav="dark"
      className="relative bg-background text-foreground py-20 lg:py-28 overflow-hidden border-t border-border"
    >
      <div className="mx-auto max-w-330 px-5 sm:px-8">
        {/* Header block */}
        <div
          className="transformation-header max-w-3xl mb-12 lg:mb-16"
          style={{ opacity: 0 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block size-2 rounded-full bg-primary" />
            <p className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              REFLECTION &amp; EVOLUTION
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Who I Was &rarr; Who I Became
          </h2>
        </div>

        {/* 4 Paired Milestone Cards */}
        <div className="milestones-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {MILESTONES.map((item, index) => (
            <div
              key={item.id}
              data-index={index}
              className="milestone-card group"
              style={{ opacity: 0 }}
            >
              <Card className="h-full bg-card/70 border-border backdrop-blur-md rounded-lg p-0 overflow-hidden shadow-xl transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={item.image.src}
                    data-wvc-srcset={item.image.srcset}
                    data-wvc-sizes={item.image.sizes}
                    alt={item.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute top-3 left-3 bg-background/80 border border-border/80 px-2.5 py-1 rounded text-[11px] font-mono tracking-wider text-muted-foreground uppercase backdrop-blur-sm">
                    {item.step}
                  </div>
                </div>

                <CardContent className="p-6 lg:p-7 flex flex-col justify-between grow">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-sans">
                      {item.reflection}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-primary/90">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Milestone {index + 1} of 4
                    </span>
                    <span className="text-muted-foreground/60">BICT (Hons) Journey</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Closing before/after reflection banner */}
        <div
          className="transformation-banner mt-12 lg:mt-16"
          style={{ opacity: 0 }}
        >
          <div className="relative rounded-lg border border-border bg-card/85 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-primary/50">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-primary">
                  <Sparkles className="size-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                      Synthesis &bull; Vavuniya Perspective
                    </span>
                  </div>
                  <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl font-medium text-foreground leading-snug tracking-tight">
                    &ldquo;I entered as an uncertain freshman writing syntax; I graduate as a resilient technologist architecting solutions for real human needs.&rdquo;
                  </blockquote>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-start lg:self-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-muted/60 text-xs font-mono text-muted-foreground">
                  <span>Transformation Complete</span>
                  <ArrowRight className="size-3.5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
