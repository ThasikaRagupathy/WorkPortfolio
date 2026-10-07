"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CircleCheck as CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from "../../../components/ui/card";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface StepItem {
  id: string;
  title: string;
  description: string;
  phase: string;
  image: {
    src: string;
    srcset: string;
    sizes: string;
    alt: string;
  };
}

const stepsData: StepItem[] = [
  {
    id: "step-1",
    title: "Member",
    phase: "Year 1 Foundation",
    description:
      "Joined university tech societies with an open mind, eager to absorb best practices and contribute to grassroots initiatives.",
    image: {
      src: "/image/Libi3.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/leadership_freshman_member.png-wvc-srcset",
      sizes: "(max-width: 768px) 100vw, 420px",
      alt: "Leadership development from society member to leader - university society onboarding",
    },
  },
  {
    id: "step-2",
    title: "Volunteer",
    phase: "Year 2 Operations",
    description:
      "Stepped forward to manage logistical operations, event coordination, and participant support for faculty gatherings.",
    image: {
      src: "/image/Libi15.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/leadership_event_volunteer.png-wvc-srcset",
      sizes: "(max-width: 768px) 100vw, 420px",
      alt: "Leadership development through event logistics and attendee registration",
    },
  },
  {
    id: "step-3",
    title: "Organizer",
    phase: "Year 3 Workshop Execution",
    description:
      "Spearheaded university-wide technical workshops, coordinating guest speakers, schedules, and lab infrastructure.",
    image: {
      src: "/image/Libi17.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/leadership_workshop_organizer.png-wvc-srcset",
      sizes: "(max-width: 768px) 100vw, 420px",
      alt: "Leadership development through technical workshop setup and keynote coordination",
    },
  },
  {
    id: "step-4",
    title: "Project Lead",
    phase: "Year 3-4 Engineering Governance",
    description:
      "Directed software development teams through full sprint cycles, managing repositories, code reviews, and project milestones.",
    image: {
      src: "/image/Libi40.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/leadership_sprint_lead.png-wvc-srcset",
      sizes: "(max-width: 768px) 100vw, 420px",
      alt: "Leadership development through a software team code review session",
    },
  },
  {
    id: "step-5",
    title: "Leader",
    phase: "Year 4 Executive Impact",
    description:
      "Served as a mentor and executive society officer, establishing strategic vision, community partnerships, and legacy handovers.",
    image: {
      src: "/image/Libi50.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/leadership_executive_address.png-wvc-srcset",
      sizes: "(max-width: 768px) 100vw, 420px",
      alt: "Leadership development through faculty engagement and society stewardship",
    },
  },
];

export default function Leadership() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Sidebar header reveal
        gsap.set(".leadership-header-block", { y: 28 });
        gsap.to(".leadership-header-block", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        });

        // Staggered step nodes reveal
        gsap.set(".leadership-step-node", { y: 35 });
        gsap.to(".leadership-step-node", {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".leadership-rail-track",
            start: "top 78%",
            once: true,
          },
        });

        // Telemetry connector animation
        gsap.set(".telemetry-line-fill", { scaleY: 0, transformOrigin: "top" });
        gsap.to(".telemetry-line-fill", {
          scaleY: 1,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".leadership-rail-track",
            start: "top 80%",
            once: true,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".leadership-header-block", { opacity: 1, y: 0 });
        gsap.set(".leadership-step-node", { opacity: 1, y: 0 });
        gsap.set(".telemetry-line-fill", { scaleY: 1 });
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
      id="leadership"
      data-nav="dark"
      className="relative bg-background text-foreground py-20 lg:py-32 border-b border-border overflow-hidden isolate"
    >
      <div className="mx-auto max-w-330 px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Columns 1-4: Narrative Context */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div
              className="leadership-header-block space-y-6"
              style={{ opacity: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/60 text-xs font-mono tracking-widest text-primary uppercase">
                <Sparkles className="size-3.5 text-primary animate-pulse" />
                <span>GROWTH IN RESPONSIBILITY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
                Leadership Progression
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                true leadership is earned in increments — starting from active
                listening to ultimately steering multi-disciplinary teams toward
                unified goals.
              </p>

              {/* Progress Summary Pip Matrix */}
              <div className="pt-4 border-t border-border/70 hidden sm:block">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-3">
                  <span>CURRICULUM MILESTONES</span>
                  <span className="text-primary">5 OF 5 PHASES</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {stepsData.map((step, i) => (
                    <div
                      key={step.id}
                      data-index={i}
                      className="group relative flex flex-col items-center gap-1.5"
                    >
                      <div className="h-1.5 w-full rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-card/40 border border-border flex items-start gap-3">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-normal">
                  Reflected through 4 active academic years across technical,
                  administrative, and collaborative initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Columns 5-12: 5-Step Horizontal / Telemetry Progression Track */}
          <div className="lg:col-span-8">
            <div className="leadership-rail-track relative">
              {/* Telemetry vertical guide line for larger mobile & desktop */}
              <div
                aria-hidden="true"
                className="absolute left-6 md:left-8 top-6 bottom-6 w-px bg-border z-0 hidden sm:block"
              >
                <div className="telemetry-line-fill w-full h-full bg-linear-to-b from-primary via-primary/80 to-secondary" />
              </div>

              {/* Steps Sequence */}
              <div className="space-y-8 sm:space-y-10 relative z-10">
                {stepsData.map((step, index) => (
                  <div
                    key={step.id}
                    data-index={index}
                    className="leadership-step-node relative flex flex-col sm:flex-row items-start gap-5 sm:gap-8"
                    style={{ opacity: 0 }}
                  >
                    {/* Node Telemetry Pip */}
                    <div className="shrink-0 flex items-center gap-3 sm:block">
                      <div className="size-12 md:size-16 rounded-lg bg-card border border-border flex flex-col items-center justify-center text-center shadow-md relative group hover:border-primary transition-colors">
                        <span className="text-[10px] font-mono tracking-wider text-muted-foreground leading-none">
                          STEP
                        </span>
                        <div className="absolute -inset-0.5 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </div>
                      <span className="sm:hidden font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {step.phase}
                      </span>
                    </div>

                    {/* Step Card Content */}
                    <Card className="flex-1 bg-card/70 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 shadow-xl overflow-hidden group">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                        {/* 4:3 Documentary Photograph */}
                        <div className="md:col-span-5 relative aspect-4/3 bg-muted overflow-hidden">
                          <img
                            src={step.image.src}
                            data-wvc-srcset={step.image.srcset}
                            data-wvc-sizes={step.image.sizes}
                            alt={step.image.alt}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                        </div>

                        {/* Text and Milestone Detail */}
                        <div className="md:col-span-7 flex flex-col justify-between p-6">
                          <CardContent className="p-0 space-y-3">
                            <div className="flex items-center justify-between gap-2">
                              <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-wider text-primary/80">
                                {step.phase}
                              </span>
                              <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </div>

                            <h3 className="font-serif text-xl md:text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                              {step.title}
                            </h3>

                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </CardContent>

                          <div className="pt-4 mt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground font-mono">
                            <span>University of Vavuniya</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
