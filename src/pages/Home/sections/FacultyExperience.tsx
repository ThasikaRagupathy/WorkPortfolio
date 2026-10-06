"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { BookOpen, Laptop, Users, Trophy, Sparkles, Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../../components/ui/card";

interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  srcset: string;
  sizes: string;
  alt: string;
  icon: typeof BookOpen;
  gridSpan: string;
}

const experienceItems: ExperienceItem[] = [
  {
    id: "exp-lectures",
    title: "Lectures & Foundations",
    description: "Where conceptual computing paradigms and algorithmic theory were debated, deconstructed, and mastered daily.",
    image: "src/image/Libi42.jpg",
    srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/faculty_lectures_vavuniya.png-wvc-srcset",
    sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/faculty_lectures_vavuniya.png-wvc-sizes",
    alt: "Faculty of Technological Studies campus experiences at University of Vavuniya - Lecture hall and academic foundations",
    icon: BookOpen,
    gridSpan: "lg:col-span-4",
  },
  {
    id: "exp-workshops",
    title: "Workshops & Technical Labs",
    description: "Endless hours spent at high-performance workstations configuring networks, testing databases, and stress-testing applications.",
    image: "src/image/Libi33.jpg",
    srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/faculty_workshops_lab.webp-wvc-srcset",
    sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/faculty_workshops_lab.webp-wvc-sizes",
    alt: "Faculty of Technological Studies campus experiences at University of Vavuniya - Technical labs and workstation testing",
    icon: Laptop,
    gridSpan: "lg:col-span-4",
  },
  {
    id: "exp-clubs",
    title: "Clubs & Peer Communities",
    description: "Fostering peer mentorship, collaborative open-source contributions, and active tech meetups across faculties.",
    image: "src/image/Libi12.jpg",
    srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/faculty_student_clubs.png-wvc-srcset",
    sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/faculty_student_clubs.png-wvc-sizes",
    alt: "Faculty of Technological Studies campus experiences at University of Vavuniya - Student tech clubs and collaborative sessions",
    icon: Users,
    gridSpan: "lg:col-span-4",
  },
  {
    id: "exp-competitions",
    title: "Competitions & Hackathons",
    description: "High-stakes overnight coding marathons where innovative problem-solving was tested against strict delivery clocks.",
    image: "src/image/Libi36.jpg",
    srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/faculty_hackathon_arena.png-wvc-srcset",
    sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/faculty_hackathon_arena.png-wvc-sizes",
    alt: "Faculty of Technological Studies campus experiences at University of Vavuniya - Competitive coding and hackathon brainstorms",
    icon: Trophy,
    gridSpan: "lg:col-span-4",
  },
  {
    id: "exp-events",
    title: "Events & Tech Symposia",
    description: "Organizing cultural, academic, and technological symposiums that brought the whole university community together.",
    image: "src/image/Libi44.jpg",
    srcset: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/faculty_tech_symposium.webp-wvc-srcset",
    sizes: "https://wpvc-images.s3.us-east-1.amazonaws.com/images/1820360/img/faculty_tech_symposium.webp-wvc-sizes",
    alt: "Faculty of Technological Studies campus experiences at University of Vavuniya - Tech symposium and academic conference hall",
    icon: Sparkles,
    gridSpan: "lg:col-span-4",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function FacultyExperience() {
  return (
    <section
      id="faculty"
      data-nav="dark"
      className="relative bg-background text-foreground py-20 lg:py-28 overflow-hidden border-b border-border"
    >
      <div className="mx-auto max-w-330 px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="mb-14 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <p className="text-xs uppercase tracking-[0.18em] font-semibold text-primary font-mono">
              CAMPUS ENVIRONMENT
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-foreground leading-[1.15] mb-4">
            Faculty Experience
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
            The Faculty of Technological Studies at the University of Vavuniya provided the crucible where theory met relentless practical execution.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          {experienceItems.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                data-index={i}
                className={`col-span-1 ${item.gridSpan}`}
              >
                <Card className="h-full border border-border bg-card/70 hover:border-primary/50 transition-[border-color,box-shadow] duration-300 shadow-md group overflow-hidden rounded-lg">
                  {/* Photo Frame */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-muted border-b border-border">
                    <img
                      src={item.image}
                      data-wvc-srcset={item.srcset}
                      data-wvc-sizes={item.sizes}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
                    
                    {/* Badge Icon */}
                    <div className="absolute top-3 left-3 flex items-center justify-center size-10 rounded-md bg-muted/80 backdrop-blur-md border border-border text-primary shadow-xs">
                      <IconComponent className="size-5 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <CardHeader className="p-0 gap-2 mb-2">
                      <CardTitle className="text-lg sm:text-xl font-bold font-serif text-foreground group-hover:text-primary transition-colors duration-200">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed font-sans">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
