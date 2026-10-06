"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function Future() {
  const shouldReduceMotion = useReducedMotion();
  const buttonRef = useRef<HTMLDivElement>(null);
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * 0.28;
    const deltaY = (e.clientY - centerY) * 0.28;
    setMagneticPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setMagneticPosition({ x: 0, y: 0 });
  };

  return (
    <section
      id="future"
      data-nav="dark"
      className="relative overflow-hidden bg-background text-foreground py-28 md:py-36 lg:py-44"
    >
      {/* Decorative Signature Glow & Grid Telemetry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 md:w-2xl md:h-168 rounded-full bg-primary/10 blur-3xl opacity-75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0.5px,transparent_1px)] bg-size-[32px_32px] opacity-[0.07]" />
        <div className="absolute top-0 inset-x-0 h-px bg-border" />
      </div>

      <div className="relative z-10 max-w-82.5 mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Signature centered above heading */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border bg-card/60 mb-8 backdrop-blur-xs"
          >
            <Compass className="size-3.5 text-primary animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
              THE NEXT CHAPTER
            </span>
            <span className="size-1 rounded-full bg-primary" />
          </motion.div>

          {/* Dictated Headline */}
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]"
          >
            The Story Doesn't End Here.
          </motion.h2>

          {/* Supporting Copy */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
            className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-normal"
          >
            The degree is complete, but the engineering journey is just accelerating. I am actively seeking high-impact software engineering roles, collaborative ventures, and transformative challenges worldwide.
          </motion.p>

          {/* Magnetic CTA Button */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.26, ease: "easeOut" }}
            className="mt-10 sm:mt-12"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              ref={buttonRef}
              animate={{
                x: magneticPosition.x,
                y: magneticPosition.y,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.1 }}
            >
              <Button
                asChild
                size="lg"
                className="group relative h-auto px-8 py-4 rounded-md border border-primary bg-primary text-primary-foreground font-semibold text-base transition-[color,background-color,border-color,box-shadow] duration-300 hover:bg-transparent hover:text-primary hover:shadow-[0_0_35px_hsl(186_100%_50%/0.5)]"
              >
                <a href="#contact">
                  <span className="flex items-center gap-2">
                    <Sparkles className="size-4 opacity-80 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Chapter Next &rarr;</span>
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
