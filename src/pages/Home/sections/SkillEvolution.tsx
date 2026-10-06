"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Badge } from "../../../components/ui/badge";
import { Card } from "../../../components/ui/card";
import { Layers, Terminal, Users, ShieldCheck } from "lucide-react";

interface StageItem {
  id: string;
  stageNumber: string;
  name: string;
  description: string;
  icon: React.ElementType;
}

const STAGES: StageItem[] = [
  {
    id: "stage-1",
    stageNumber: "01",
    name: "Learning",
    description:
      "Building rock-solid computer science fundamentals — data structures, object-oriented principles, database schemas, and networking essentials.",
    icon: Terminal,
  },
  {
    id: "stage-2",
    stageNumber: "02",
    name: "Building",
    description:
      "Transitioning into real-world software engineering — constructing robust APIs, crafting fluid user interfaces, and managing state across modern stacks.",
    icon: Layers,
  },
  {
    id: "stage-3",
    stageNumber: "03",
    name: "Leading",
    description:
      "Mastering collaborative delivery — running code reviews, establishing CI/CD automation pipelines, resolving architectural trade-offs, and unblocking teammates.",
    icon: Users,
  },
  {
    id: "stage-4",
    stageNumber: "04",
    name: "Professional",
    description:
      "Engineering production-grade systems — optimizing database bottlenecks, ensuring security compliance, and maintaining scalable cloud infrastructures.",
    icon: ShieldCheck,
  },
];

export default function SkillEvolution() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 15,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skill-evolution"
      data-nav="dark"
      className="relative bg-background text-foreground py-24 lg:py-32 border-b border-border overflow-hidden"
    >
      <div className="mx-auto max-w-330px px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left Column: Narrative Anchor (Cols 1-5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex flex-col items-start gap-4">
              <Badge
                variant="outline"
                className="rounded-full px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary border-primary/40 bg-accent/20"
              >
                CAPABILITY ROADMAP
              </Badge>

              <h2 className="font-serif text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
                Skill Evolution
              </h2>

              <p className="mt-2 text-base sm:text-lg leading-relaxed text-muted-foreground">
                The trajectory was never linear. It required unlearning rigid assumptions and continuously building the resilience to master unfamiliar stacks.
              </p>
            </div>
          </div>

          {/* Right Column: 4-Stage Evolution Cards (Cols 6-12) */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative flex flex-col gap-6"
            >
              {/* Subtle vertical indicator rail */}
              <div
                aria-hidden="true"
                className="absolute left-7 top-6 bottom-6 w-px bg-border/60 hidden sm:block"
              />

              {STAGES.map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <motion.div
                    key={stage.id}
                    data-index={index}
                    variants={cardVariants}
                    className="relative"
                  >
                    <Card className="group relative border border-border/80 bg-card/75 p-6 sm:p-7 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-lg rounded-lg">
                      <div className="flex items-start gap-5">
                        {/* Cyan Status Indicator Node */}
                        <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-md border border-border bg-muted/60 text-primary transition-colors duration-300 group-hover:border-primary/60 group-hover:bg-accent/40">
                          <IconComponent className="size-5 text-primary stroke-[1.75]" />
                        </div>

                        {/* Content Body */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                            <span className="font-mono text-xs font-semibold text-primary tracking-wider">
                              STAGE // {stage.stageNumber}
                            </span>
                            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-card-foreground">
                              {stage.name}
                            </h3>
                          </div>

                          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mt-1">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
