"use client";

import { motion } from "framer-motion";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";

interface TimelineStage {
  id: string;
  badge: string;
  title: string;
  reflection: string;
  image: {
    src: string;
    srcset: string;
    sizes: string;
    alt: string;
  };
}

const STAGES: TimelineStage[] = [
  {
    id: "stage-1",
    badge: "STAGE 01",
    title: "YEAR 01 — THE BEGINNING",
    reflection:
      "Stepping onto the Vavuniya campus as a fresher, navigating initial algorithms, foundational logic, and the uncharted terrain of higher technology.",
    image: {
      src: "/image/Libi37.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/vavuniya_year_01_matriculation.png-wvc-srcset",
      sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/vavuniya_year_01_matriculation.png-wvc-sizes",
      alt: "Jeyasingam Azrikam Libisanan during first-year university orientation and foundational programming lab at University of Vavuniya",
    },
  },
  {
    id: "stage-2",
    badge: "STAGE 02",
    title: "YEAR 02 — THE EXPLORATION",
    reflection:
      "Diving deep into software architectures, full-stack environments, late-night debugging sessions, and collaborative hackathons with peers.",
    image: {
      src: "/image/Libi21.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/vavuniya_year_02_computer_lab.png-wvc-srcset",
      sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/vavuniya_year_02_computer_lab.png-wvc-sizes",
      alt: "Late-night collaborative software development and hackathon sessions in the faculty computer lab",
    },
  },
  {
    id: "stage-3",
    badge: "STAGE 03",
    title: "YEAR 03 — THE TRANSFORMATION",
    reflection:
      "Stepping into project leadership, tackling complex distributed engineering challenges, and guiding team dynamics under real deadline pressures.",
    image: {
      src: "/image/Libi22.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/vavuniya_year_03_team_leadership.png-wvc-srcset",
      sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/vavuniya_year_03_team_leadership.png-wvc-sizes",
      alt: "Leading peer engineering teams through technical reviews and sprint planning sessions",
    },
  },
  {
    id: "stage-4",
    badge: "STAGE 04",
    title: "YEAR 04 — THE LAUNCH",
    reflection:
      "Synthesizing four years of discipline into capstone engineering, research defense, and stepping forward ready for industry-grade impact.",
    image: {
      src: "/image/Libi39.jpg",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/vavuniya_year_04_capstone_defense.png-wvc-srcset",
      sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/vavuniya_year_04_capstone_defense.png-wvc-sizes",
      alt: "Final BICT honours capstone defense presentation to academic panel and tech industry evaluators",
    },
  },
];

export default function Timeline() {
  return (
    <section
      id="journey"
      data-nav="dark"
      className="relative bg-background text-foreground py-20 lg:py-32 overflow-hidden border-b border-border"
    >
      {/* Kit decoration: Ambient cyan telemetry orb */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 -left-24 lg:left-8 w-80 h-80 rounded-full bg-primary/20 blur-xl" />
        <div className="absolute bottom-1/3 -right-16 w-72 h-72 rounded-full bg-primary/10 blur-xl" />
      </div>

      <div className="relative z-10 max-w-330 mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Narrative Sticky Anchor (Columns 1–5 on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-6 max-w-xl"
            >
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  THE TIMELINE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif leading-[1.12]">
                Four Years, One Transformation
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I walked in not knowing where the code would lead me. Four years
                later, every challenge, lab night, and breakthrough has
                engineered who I am.
              </p>

              {/* Progress telemetry rule */}
              <div className="pt-2 hidden lg:flex items-center gap-3 text-xs tracking-wider text-muted-foreground/80 font-mono">
                <span className="text-primary">01</span>
                <span className="h-px w-24 bg-border relative">
                  <span className="absolute top-0 left-0 h-px w-12 bg-primary" />
                </span>
                <span>04</span>
                <span className="uppercase text-[11px] tracking-widest pl-2">
                  Undergraduate Arc
                </span>
              </div>
            </motion.div>
          </div>

          {/* Sequential Timeline Stages (Columns 6–12 on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-10 lg:gap-14 relative">
            {/* Subtle timeline track guide on desktop */}
            <div
              className="hidden lg:block absolute -left-6 top-4 bottom-4 w-px bg-border"
              aria-hidden="true"
            />

            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.id}
                data-index={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                className="relative lg:pl-6"
              >
                {/* Timeline node marker */}
                <div
                  className="hidden lg:flex absolute -left-7.5 top-7 items-center justify-center w-3 h-3 rounded-full bg-card border border-primary"
                  aria-hidden="true"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <Card className="border-border bg-card/75 shadow-lg backdrop-blur-xs transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-xl overflow-hidden p-0 gap-0">
                  {/* Documentary Campus Image (16:9 ratio) */}
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={stage.image.src}
                      data-wvc-srcset={stage.image.srcset}
                      data-wvc-sizes={stage.image.sizes}
                      alt={stage.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  <CardContent className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="secondary"
                        className="rounded-full px-3 py-0.5 text-[11px] font-semibold tracking-wider uppercase bg-secondary text-secondary-foreground"
                      >
                        {stage.badge}
                      </Badge>
                      <span className="text-xs text-muted-foreground font-mono">
                        BICT (Hons) Journey
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-serif tracking-tight text-foreground">
                      {stage.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {stage.reflection}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
