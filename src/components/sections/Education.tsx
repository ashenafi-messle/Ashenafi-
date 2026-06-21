"use client";

import { motion } from "framer-motion";
import EducationCard from "@/components/sections/EducationCard";
import { educationEntries } from "@/data/education";

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.1),_transparent_45%)]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-3 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
            Journey
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Education & Academic Journey
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            My academic background and key milestones in Computer Science and software engineering.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="relative space-y-8"
        >
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500/30 via-cyan-500/10 to-transparent lg:block" />

          {educationEntries.map((entry, idx) => (
            <EducationCard key={entry.id} entry={entry} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
