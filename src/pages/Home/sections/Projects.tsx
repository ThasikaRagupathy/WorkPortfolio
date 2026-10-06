"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../../../components/ui/badge";
import { CircleCheck as CheckCircle2, Cpu, Terminal, Activity, Layers } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  role: string;
  technologies: string[];
  result: string;
  image: {
    src: string;
    srcset: string;
    sizes: string;
    alt: string;
  };
  icon: React.ComponentType<{ className?: string }>;
}

const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Vavuniya Campus Asset & Resource Tracker",
    role: "Lead Full-Stack Developer",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
    result:
      "Reduced departmental equipment allocation tracking latency by 65% and eliminated duplicate physical paper logs across two faculty facilities.",
    image: {
      src: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/vavuniya_asset_tracker_interface.png",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/vavuniya_asset_tracker_interface.png-wvc-srcset",
      sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/vavuniya_asset_tracker_interface.png-wvc-sizes",
      alt: "Vavuniya Campus Asset & Resource Tracker interface dashboard showing inventory status",
    },
    icon: Layers,
  },
  {
    id: "proj-2",
    title: "Automated Student Academic Advising Portal",
    role: "System Architect & Frontend Engineer",
    technologies: ["Next.js", "TypeScript", "Python FastAPI", "MongoDB"],
    result:
      "Enabled over 800 undergraduates to dynamically simulate degree module paths and monitor prerequisite fulfillment with real-time academic validation.",
    image: {
      src: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/academic_advising_portal_preview.png",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/academic_advising_portal_preview.png-wvc-srcset",
      sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/academic_advising_portal_preview.png-wvc-sizes",
      alt: "Automated Student Academic Advising Portal degree progression module simulator",
    },
    icon: Terminal,
  },
  {
    id: "proj-3",
    title: "IoT Agricultural Telemetry & Monitoring Node",
    role: "Embedded Systems & Backend Developer",
    technologies: ["ESP32", "MQTT", "Express", "InfluxDB", "Grafana"],
    result:
      "Deployed solar-powered sensory hardware delivering microclimate soil and moisture readings at 30-second intervals for faculty experimental crops.",
    image: {
      src: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/iot_agricultural_telemetry_system.png",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/iot_agricultural_telemetry_system.png-wvc-srcset",
      sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/iot_agricultural_telemetry_system.png-wvc-sizes",
      alt: "IoT agricultural microclimate telemetry monitoring dashboard and sensor node metrics",
    },
    icon: Cpu,
  },
  {
    id: "proj-4",
    title: "Distributed Cloud Examination Verification Engine",
    role: "DevOps & Security Engineer",
    technologies: ["Go", "AWS Lambda", "Redis", "Docker", "GitHub Actions"],
    result:
      "Architected resilient verification pipelines handling 1,200 concurrent student submissions without dropped transactions during semester final exams.",
    image: {
      src: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/distributed_exam_verification_engine.png",
      srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/distributed_exam_verification_engine.png-wvc-srcset",
      sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/distributed_exam_verification_engine.png-wvc-sizes",
      alt: "Distributed Cloud Examination Verification Engine pipeline activity and throughput log",
    },
    icon: Activity,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      data-nav="dark"
      className="relative bg-background text-foreground py-20 md:py-28 lg:py-32 overflow-hidden border-t border-border isolate"
    >
      <div className="mx-auto max-w-330 px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-primary font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold mb-3">
            SYSTEMS &amp; SOLUTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-foreground">
            Featured Projects
          </h2>
        </div>

        {/* Case Studies Stack */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 === 1;
            const Icon = project.icon;

            return (
              <motion.article
                key={project.id}
                data-index={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="relative group"
              >
                {/* Ambient cyan orb decoration behind alternate showcases */}
                {index % 2 === 0 && (
                  <div
                    aria-hidden="true"
                    className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-primary/20 blur-xl pointer-events-none -z-10"
                  />
                )}
                {index % 2 === 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-12 -right-12 w-80 h-80 rounded-full bg-primary/15 blur-xl pointer-events-none -z-10"
                  />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-card/60 backdrop-blur-xs border border-border rounded-xl p-6 sm:p-8 lg:p-10 transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-2xl">
                  {/* Screenshot Container */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-16/10 overflow-hidden rounded-lg border border-border/80 bg-muted/40 shadow-md">
                      <img
                        src={project.image.src}
                        data-wvc-srcset={project.image.srcset}
                        data-wvc-sizes={project.image.sizes}
                        alt={project.image.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 right-3 p-2 rounded-md bg-background/80 border border-border backdrop-blur-sm text-primary">
                        <Icon className="size-4" />
                      </div>
                    </div>
                  </div>

                  {/* Narrative & Details */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-secondary/15 text-secondary border border-secondary/30 font-medium px-2.5 py-1 text-xs"
                      >
                        {project.role}
                      </Badge>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-foreground mb-4 leading-snug">
                      {project.title}
                    </h3>

                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          data-index={techIdx}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono bg-muted text-muted-foreground border border-border transition-colors duration-200 hover:border-primary/50 hover:text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Result / Outcome Box */}
                    <div className="pt-4 border-t border-border flex items-start gap-3 text-sm text-foreground/90 leading-relaxed bg-background/40 p-4 rounded-lg border">
                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                          Measurable Outcome
                        </span>
                        <p>{project.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}