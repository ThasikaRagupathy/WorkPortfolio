"use client";

import React, { useRef, useState, useCallback } from "react";
import {
  GraduationCap,
  Users,
  Cpu,
  Trophy,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardHeader, CardTitle, CardContent } from "../../../components/ui/card";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface AchievementItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const achievements: AchievementItem[] = [
  {
    id: "academic",
    title: "Academic Excellence",
    description:
      "Consistently maintained top percentile academic standings across advanced software engineering, database systems, and networking modules.",
    icon: GraduationCap,
    tag: "HONORS",
  },
  {
    id: "leadership",
    title: "Leadership Impact",
    description:
      "Elected to represent student cohorts, advocating for academic resources, peer well-being, and faculty collaboration initiatives.",
    icon: Users,
    tag: "GOVERNANCE",
  },
  {
    id: "technology",
    title: "Technology Innovations",
    description:
      "Developed automated departmental utility tools that streamlined project submissions and internal scheduling across student bodies.",
    icon: Cpu,
    tag: "SYSTEMS",
  },
  {
    id: "competitions",
    title: "Competitive Hackathons",
    description:
      "Secured podium positions in inter-university technology hackathons by architecting rapid-prototype IoT and web solutions.",
    icon: Trophy,
    tag: "PODIUM",
  },
  {
    id: "certifications",
    title: "Professional Certifications",
    description:
      "Earned verified industry credentials in cloud infrastructure, containerized deployments, and enterprise full-stack development.",
    icon: ShieldCheck,
    tag: "CREDENTIAL",
  },
  {
    id: "volunteering",
    title: "Community Volunteering",
    description:
      "Dedicated over 200 hours mentoring junior undergraduates in introductory programming, version control, and career planning.",
    icon: HeartHandshake,
    tag: "OUTREACH",
  },
];

function TiltCard({ item, index }: { item: AchievementItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const Icon = item.icon;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(6px)`
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
  }, []);

  return (
    <div
      ref={cardRef}
      data-index={index}
      className="achievement-card group relative transition-transform duration-200 ease-out will-change-transform"
      style={{
        opacity: 0,
        transform: transformStyle,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="h-full rounded-md border border-border bg-card/90 p-2 backdrop-blur-md transition-colors duration-300 hover:border-primary/50 hover:shadow-lg shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-3 pt-4 px-5">
          <div className="flex size-12 items-center justify-center rounded-md border border-border bg-muted text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_15px_hsl(186_100%_50%/0.25)]">
            <Icon className="size-5.5 stroke-[1.75]" />
          </div>
          <span className="font-mono text-[0.6875rem] uppercase tracking-wider text-secondary">
            {item.tag}
          </span>
        </CardHeader>
        <CardContent className="px-5 pb-5 pt-1">
          <CardTitle className="font-serif text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
            {item.title}
          </CardTitle>
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(".achievements-header", { y: 24 });
        gsap.to(".achievements-header", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });

        gsap.set(".achievement-card", { y: 32 });
        gsap.to(".achievement-card", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".achievements-header", { opacity: 1, y: 0 });
        gsap.set(".achievement-card", { opacity: 1, y: 0 });
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
      id="achievements"
      data-nav="dark"
      ref={containerRef}
      className="relative overflow-hidden bg-background py-20 text-foreground md:py-28"
    >
      <div className="relative mx-auto max-w-330 px-5 sm:px-8">
        {/* Kit: Signature Centered Above Heading */}
        <div
          className="achievements-header mb-14 text-center md:mb-20"
          style={{ opacity: 0 }}
        >
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-border" aria-hidden="true" />
            <div className="flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 font-mono text-[0.6875rem] font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="size-3" aria-hidden="true" />
              <span>RECOGNITION &amp; HONORS</span>
            </div>
            <span className="h-px w-10 bg-border" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Achievements &amp; Milestones
          </h2>
        </div>

        {/* 3x2 Perspective Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <TiltCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}