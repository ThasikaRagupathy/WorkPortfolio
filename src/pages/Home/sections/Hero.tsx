"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "../../../components/common/link";
import { Button } from "../../../components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      data-nav="dark"
      className="relative overflow-hidden bg-background text-foreground pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32"
    >
      {/* Ambient cyan orb behind columns 8–12 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] top-1/4 h-112 w-md -translate-y-1/2 rounded-full bg-primary/20 blur-3xl lg:h-144 lg:w-xl"
      />

      <div className="container relative z-10 mx-auto max-w-330 px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Columns 1–7: Editorial Headline & Student Identity Block */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Signature Kit Device above heading */}
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-primary/40 bg-accent text-primary">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <div className="h-px w-8 bg-primary/40" />
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                BICT (HONS) — INFORMATION &amp; COMMUNICATION TECHNOLOGY
              </span>
            </div>

            {/* Monumental Two-Line Editorial Headline */}
            <h1 className="font-serif text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[1.05]">
              <span className="block text-foreground">MORE THAN DEGREE,</span>
              <span className="block text-primary mt-1">THIS IS MY JOURNEY.</span>
            </h1>

            {/* Student Identity & University Details Block */}
            <div className="mt-8 border-l-2 border-primary/60 pl-5">
              <p className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Jeyasingam Azrikam Libisanan
              </p>
              <p className="mt-1 font-sans text-sm font-medium text-muted-foreground sm:text-base">
                BICT (Hons) — Information &amp; Communication Technology
              </p>
              <p className="mt-1 font-sans text-sm text-muted-foreground/80">
                Faculty of Technological Studies, University of Vavuniya
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="group h-12 rounded-md border border-primary bg-primary px-8 text-primary-foreground font-medium transition-all hover:bg-transparent hover:text-primary hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
              >
                <Link to="#journey" className="inline-flex items-center gap-2">
                  <span>Explore My Journey</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Columns 8–12: 4:5 Cinematic Studio Portrait */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-colors duration-300 hover:border-primary/50">
              {/* Aspect ratio frame 4:5 */}
              <div className="relative aspect-4/5 w-full overflow-hidden bg-muted">
                <img
                  src="src/image/Libi1.jpg"
                //  data-wvc-srcset="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/hero_tharindu_perera_portrait.png-wvc-srcset"
                  //data-wvc-sizes="https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/hero_tharindu_perera_portrait.png-wvc-sizes"
                  alt="Portrait of Jeyasingam Azrikam Libisanan at the University of Vavuniya"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover object-center filter contrast-[1.05]"
                />

                {/* Documentary subtle bottom gradient fade into background */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent"
                />

                {/* Subtle top edge telemetry glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent"
                />
              </div>

              {/* Minimal caption plate in native metadata form */}
              <div className="border-t border-border/70 bg-card/90 px-5 py-3 backdrop-blur-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-xs font-medium text-foreground tracking-wide">
                    DOCUMENTARY ARCHIVE
                  </span>
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">
                  FACULTY OF TECHNOLOGY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
