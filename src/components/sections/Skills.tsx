"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/sections/SkillCard";
import { skillCategories } from "@/data/skills";

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.1),_transparent_45%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 inline-flex rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-purple-200">
            Expertise
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Technical Skills
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Technologies, tools, and frameworks I use to build scalable software systems and intelligent applications.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
