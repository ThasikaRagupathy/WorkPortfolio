"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../../../components/ui/badge";
import {
  CircleCheck as CheckCircle2,
  Satellite,
  ShieldCheck,
  Smartphone,
  Sprout,
  BriefcaseBusiness,
  Dumbbell,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  year: string;
  role: string;
  technologies: string[];
  description: string;
  image: {
    src: string;
    alt: string;
  };
  icon: React.ComponentType<{ className?: string }>;
}

const projectsData: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Sentry Guard",
    year: "Ongoing",
    role: "Team Lead & Developer",
    technologies: [
      "ESP32",
      "GPS NEO-6M",
      "LoRa SX1278",
      "IoT",
      "Embedded Systems",
    ],
    description:
      "A GPS and LoRa-based early warning prototype designed to improve safety at unprotected railway level crossings in Sri Lanka. The system uses ESP32 microcontrollers, GPS positioning, and LoRa communication to trigger dynamic, ETA-based safety alerts.",
    image: {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      alt: "Sentry Guard GPS and LoRa based railway crossing safety system",
    },
    icon: Satellite,
  },

  {
    id: "proj-2",
    title: "GoVTrack",
    year: "Ongoing",
    role: "Team Lead & Full-Stack Developer",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Solidity",
      "Ethereum",
      "Polygon",
      "React Native",
    ],
    description:
      "A blockchain-based government fund transparency and payment monitoring platform that combines secure smart contracts with a citizen-facing mobile application to improve transparency and accountability in public fund management.",
    image: {
      src: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1200&q=80",
      alt: "GoVTrack blockchain-based government fund transparency and monitoring platform",
    },
    icon: ShieldCheck,
  },

  {
    id: "proj-3",
    title: "Novira",
    year: "Ongoing",
    role: "Android Developer",
    technologies: [
      "Android",
      "Java",
      "Firebase",
      "Real-Time Monitoring",
    ],
    description:
      "An Android-based child safety system designed to support real-time monitoring, risk detection, and instant parental alerts, helping parents respond quickly to potential safety concerns.",
    image: {
      src: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1200&q=80",
      alt: "Novira Android-based child safety monitoring system",
    },
    icon: Smartphone,
  },

  {
  id: "proj-4",
  title: "AgroGuard",
  year: "2025",
  role: "Backend & Database Developer",
  technologies: [
    "IoT",
    "Database",
    "Backend Development",
    "Agricultural Data",
  ],
  description:
    "An IoT-based crop prediction system focused on agricultural data analysis. Contributed to database integration and backend logic for collecting, managing, and processing agricultural data.",
  image: {
    src: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1200&q=80",
    alt: "AgroGuard IoT-based agricultural monitoring and crop prediction system",
  },
  icon: Sprout,
},

  {
    id: "proj-5",
    title: "Campus Hustle",
    year: "2025",
    role: "PHP Developer & Database Contributor",
    technologies: [
      "PHP",
      "MySQL",
      "Bootstrap",
      "Web Development",
    ],
    description:
      "A web-based internship platform developed to connect students with internship opportunities. Contributed to PHP development and database management using MySQL.",
    image: {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
      alt: "Campus Hustle web-based internship platform",
    },
    icon: BriefcaseBusiness,
  },

  {
    id: "proj-6",
    title: "Gym Management System",
    year: "2024",
    role: "Developer & Database Contributor",
    technologies: [
      "C#",
      ".NET Framework",
      "Database Design",
      "Service-Based Architecture",
    ],
    description:
      "A desktop-based Gym Management System developed using C# and the .NET Framework. Contributed to service-based database design, implementation, and system development.",
    image: {
      src: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1200&q=80",
      alt: "Gym Management System developed using C# and .NET Framework",
    },
    icon: Dumbbell,
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
            ACADEMIC PROJECTS
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-foreground">
            Projects &amp; Solutions
          </h2>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            A selection of academic and technical projects exploring
            software development, IoT, blockchain, mobile applications,
            and data-driven solutions.
          </p>
        </div>

        {/* Projects */}
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
                transition={{
                  duration: 0.6,
                  delay: 0.08,
                }}
                className="relative group"
              >

                {/* Ambient Decoration */}
                {index % 2 === 0 ? (
                  <div
                    aria-hidden="true"
                    className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none -z-10"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-12 -right-12 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none -z-10"
                  />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-card/60 backdrop-blur-xs border border-border rounded-xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-primary/40 hover:shadow-2xl">

                  {/* Project Image */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-16/10 overflow-hidden rounded-lg border border-border/80 bg-muted/40 shadow-md">

                      <img
                        src={project.image.src}
                        alt={project.image.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent pointer-events-none" />

                      {/* Project Icon */}
                      <div className="absolute top-3 right-3 p-2.5 rounded-md bg-background/80 border border-border backdrop-blur-sm text-primary">
                        <Icon className="size-4" />
                      </div>

                      {/* Project Number */}
                      <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-md bg-background/80 border border-border backdrop-blur-sm">
                        <span className="font-mono text-xs text-muted-foreground">
                          PROJECT {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Project Details */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >

                    {/* Year + Role */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">

                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border border-primary/20 font-medium px-2.5 py-1 text-xs"
                      >
                        {project.year}
                      </Badge>

                      <Badge
                        variant="secondary"
                        className="bg-secondary/15 text-secondary border border-secondary/30 font-medium px-2.5 py-1 text-xs"
                      >
                        {project.role}
                      </Badge>

                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif text-foreground mb-4 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono bg-muted text-muted-foreground border border-border transition-colors duration-200 hover:border-primary/50 hover:text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Highlight */}
                    <div className="pt-4 border-t border-border flex items-start gap-3 text-sm text-foreground/90 leading-relaxed bg-background/40 p-4 rounded-lg">

                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />

                      <div>
                        <span className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                          Project Focus
                        </span>

                        <p>{project.role}</p>
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