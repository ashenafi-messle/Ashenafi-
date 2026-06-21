"use client";

import { motion } from "framer-motion";
import type { EducationEntry } from "@/data/education";
import {
  GraduationCap,
  Book,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap className="h-5 w-5" />,
  book: <Book className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

interface EducationCardProps {
  entry: EducationEntry;
  index: number;
}

export default function EducationCard({ entry, index }: EducationCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={cardVariants}
      className={`flex w-full gap-6 lg:gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className="hidden flex-1 lg:block" />

      <div className="relative flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-cyan-400/30 bg-slate-950/90 text-cyan-300 shadow-[0_0_30px_rgba(56,189,248,0.2)]"
        >
          {iconMap[entry.icon] || iconMap["graduation-cap"]}
        </motion.div>

        <div className="absolute top-16 h-32 w-1 bg-gradient-to-b from-cyan-400/50 to-transparent" />
      </div>

      <motion.div
        whileHover={{ y: -4 }}
        className="mb-12 flex-1 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.35)] transition duration-300 hover:border-cyan-400/30 hover:shadow-[0_25px_100px_rgba(56,189,248,0.1)] sm:p-7 lg:mb-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />

        <div className="relative space-y-3">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
            {entry.year}
          </div>

          <h3 className="text-lg font-semibold tracking-tight text-white">{entry.title}</h3>
          <p className="text-sm font-medium text-slate-400">{entry.institution}</p>

          <p className="pt-2 text-sm leading-6 text-slate-300">{entry.description}</p>

          <div className="space-y-2 pt-4">
            {entry.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span className="text-xs text-slate-300">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="hidden flex-1 lg:block" />
    </motion.div>
  );
}
