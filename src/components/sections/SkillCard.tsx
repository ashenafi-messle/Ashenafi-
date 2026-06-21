"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/data/skills";
import {
  Code,
  Database,
  Zap,
  Brain,
  Settings,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="h-6 w-6" />,
  database: <Database className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  brain: <Brain className="h-6 w-6" />,
  settings: <Settings className="h-6 w-6" />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-7 shadow-[0_20px_80px_rgba(15,23,42,0.35)] transition duration-300 hover:border-cyan-400/30 hover:shadow-[0_25px_100px_rgba(56,189,248,0.1)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative space-y-5">
        <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 p-3 text-cyan-300 transition duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-500/20">
          {iconMap[category.iconName] || iconMap.code}
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-white">{category.title}</h3>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, idx) => (
            <motion.span
              key={skill}
              variants={skillVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-slate-300 transition duration-200 group-hover:border-cyan-400/20 group-hover:bg-cyan-500/10 group-hover:text-cyan-100"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
