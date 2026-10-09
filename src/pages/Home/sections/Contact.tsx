"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
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
    transition: { staggerChildren: 0.06 },
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
  // These environment variables use Vite's naming convention.
  // Add them to your .env file, or the fallbacks below will be used.
  const linkedInUrl =
    import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/libisananaj/";
  const githubUrl = import.meta.env.VITE_GITHUB_URL;

  return (
    <section
      id="contact"
      data-nav="dark"
      className="relative overflow-hidden border-t border-border bg-background py-20 text-foreground lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="size-2 animate-pulse rounded-full bg-primary" />
                Connect &amp; Collaborate
              </div>

              <h2 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Let’s Build What’s Next
              </h2>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Have an opportunity, a project idea, or want to collaborate? I’d
                love to connect and discuss how we can build something meaningful
                together.
              </p>
            </div>
          </motion.div>

          {/* Contact links and CV */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-5 lg:col-span-7"
          >
            {/* LinkedIn contact card */}
            <motion.div variants={itemVariants}>
              <Card className="border-border bg-card/70 shadow-md transition-[border-color,box-shadow] duration-300 hover:border-primary/50">
                <CardContent className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center sm:p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-primary">
                      <BriefcaseBusiness className="size-5" />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Open to opportunities
                      </p>
                      <p className="text-sm font-medium text-foreground sm:text-base">
                        Connect with me on LinkedIn
                      </p>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full shrink-0 sm:w-auto"
                  >
                    <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                      Get in touch
                      <ArrowUpRight className="ml-1 size-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* GitHub card */}
            {githubUrl && (
              <motion.div variants={itemVariants}>
                <Card className="border-border bg-card/70 shadow-md transition-[border-color,box-shadow] duration-300 hover:border-primary/50">
                  <CardContent className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center sm:p-7">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-primary">
                        <CodeXml className="size-5" />
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Code &amp; Open Source
                        </p>
                        <p className="text-sm font-medium text-foreground sm:text-base">
                          Explore my GitHub repositories
                        </p>
                      </div>
                    </div>

                    <Button asChild variant="secondary" className="w-full shrink-0 sm:w-auto">
                      <Link to={githubUrl} newTab>
                        View GitHub
                        <ArrowUpRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* CV card */}
            <motion.div variants={itemVariants}>
              <div className="group relative overflow-hidden rounded-xl p-px">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 animate-pulse bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.6),transparent_70%)]"
                />

                <Card className="relative border-border bg-card/90 backdrop-blur-sm transition-[border-color,box-shadow] duration-300">
                  <CardContent className="flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-7">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                        <Sparkles className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Academic &amp; Technical Curriculum Vitae
                        </p>
                        <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                          Education, skills, experience &amp; projects
                        </p>
                      </div>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="w-full shrink-0 shadow-md transition-[color,background-color,border-color,box-shadow] duration-300 sm:w-auto"
                    >
                      <a
                        href="/cv/Libisanan_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 size-4" />
                        View CV
                      </a>
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
