"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Mail,
  BriefcaseBusiness,
  CodeXml,
  Download,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Link } from "../../../components/common/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function Contact() {
  const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL;
  const githubUrl = import.meta.env.VITE_GITHUB_URL;

  return (
    <section
      id="contact"
      data-nav="dark"
      className="relative bg-background text-foreground py-20 lg:py-32 border-t border-border overflow-hidden"
    >
      <div className="mx-auto max-w-330 px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Columns 1–5: Narrative Heading & Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-widest text-primary uppercase">
                <span className="size-2 rounded-full bg-primary animate-pulse" />
                CONNECT &amp; COLLABORATE
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-foreground leading-[1.15]">
                Let’s Build What’s Next
              </h2>

              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Whether you have an ambitious engineering role, a groundbreaking
                venture, or simply want to talk systems architecture — my inbox
                is always open.
              </p>
            </div>
          </motion.div>

          {/* Columns 6–12: Touchpoints & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-5"
          >
            {/* Primary Email Channel Card */}
            <motion.div variants={itemVariants}>
              <Card className="border-border bg-card/70 hover:border-primary/50 transition-[border-color,box-shadow] duration-300 shadow-md">
                <CardContent className="p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-lg bg-muted border border-border flex items-center justify-center shrink-0 text-primary">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                        Open to opportunities
                      </div>
                      <p className="text-sm sm:text-base font-medium text-foreground">Connect through my professional profile</p>
                    </div>
                  </div>

                  <Button asChild variant="outline" size="sm" className="shrink-0 w-full sm:w-auto">
                    <a href="https://www.linkedin.com/in/libisananaj/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0LpOTuw8RN6kLLX9QIo7QA%3D%3D" target="_blank" rel="noreferrer">
                      Get in touch
                      <ArrowUpRight className="size-4 ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social / Repositories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* LinkedIn Button Card */}
              {linkedInUrl && <motion.div variants={itemVariants}>
                <Card className="h-full border-border bg-card/70 hover:border-primary/50 transition-[border-color,box-shadow] duration-300 shadow-md">
                  <CardContent className="p-6 flex flex-col justify-between h-full gap-4">
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-lg bg-muted border border-border flex items-center justify-center text-primary">
                        <BriefcaseBusiness className="size-5" />
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        Professional Network
                      </div>
                      <Button
                        asChild
                        variant="secondary"
                        className="w-full justify-between font-medium"
                      >
                        <Link to={linkedInUrl} newTab>
                          <span>LinkedIn Profile</span>
                          <BriefcaseBusiness className="size-4 ml-2 opacity-70" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>}

              {/* GitHub Button Card */}
              {githubUrl && <motion.div variants={itemVariants}>
                <Card className="h-full border-border bg-card/70 hover:border-primary/50 transition-[border-color,box-shadow] duration-300 shadow-md">
                  <CardContent className="p-6 flex flex-col justify-between h-full gap-4">
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-lg bg-muted border border-border flex items-center justify-center text-primary">
                        <CodeXml className="size-5" />
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        Code &amp; Open Source
                      </div>
                      <Button
                        asChild
                        variant="secondary"
                        className="w-full justify-between font-medium"
                      >
                        <Link to={githubUrl} newTab>
                          <span>GitHub Repositories</span>
                          <CodeXml className="size-4 ml-2 opacity-70" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>}
            </div>

            {/* Prominent CV Download with Ambient Pulsing Highlight */}
            <motion.div variants={itemVariants}>
              <div className="relative rounded-xl p-px overflow-hidden group">
                {/* Ambient Pulsing Border Highlight */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.6),transparent_70%)] animate-pulse"
                />

                <Card className="relative border-border bg-card/90 backdrop-blur-xs transition-[border-color,box-shadow] duration-300">
                  <CardContent className="p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                        <Sparkles className="size-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          Academic &amp; Technical Curriculum Vitae
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5 font-mono">
                          Four-Year BICT (Hons) Profile &amp; Project Index
                        </div>
                      </div>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto shrink-0 shadow-md transition-[color,background-color,border-color,box-shadow] duration-300"
                    >
                      <Link to="#projects">
                        <Download className="size-4 mr-2" />
                        Explore my work
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
