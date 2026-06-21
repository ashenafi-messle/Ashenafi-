"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.1),_transparent_45%)]" />
      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-12 max-w-3xl" variants={titleVariants}>
          <p className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Featured Work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Real-world systems I’ve built using modern software engineering, full-stack development, and AI-driven solutions.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
