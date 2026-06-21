"use client";

import type { Project } from "@/types/project";
import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_20px_80px_rgba(15,23,42,0.35)] transition duration-300"
    >
      <div className="relative overflow-hidden bg-slate-900/95">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-90" />
        <div className="relative h-56 overflow-hidden transition duration-400 group-hover:scale-[1.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),_transparent_30%)]" />
          <div className="relative flex h-full items-end justify-between p-6">
            <div>
              <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100">
                {project.type}
              </p>
            </div>
            <div className="rounded-full border border-cyan-300/10 bg-white/5 px-3 py-2 text-xs font-medium text-cyan-200 shadow-[0_0_30px_rgba(56,189,248,0.12)]">
              {project.tags[0]}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/95 via-transparent" />
        </div>
      </div>

      <div className="space-y-5 p-6 sm:p-7">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
          <p className="text-sm leading-6 text-slate-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <ul className="space-y-2 text-sm text-slate-300">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            {project.github ? (
              Array.isArray(project.github) ? (
                project.github.map((link, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition duration-200 hover:border-cyan-300/40 hover:bg-cyan-500/20"
                  >
                    <GitBranch className="h-4 w-4" />
                    {project.github.length > 1 ? `Repo ${idx + 1}` : "GitHub"}
                  </a>
                ))
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition duration-200 hover:border-cyan-300/40 hover:bg-cyan-500/20"
                >
                  <GitBranch className="h-4 w-4" />
                  GitHub
                </a>
              )
            ) : null}

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:border-cyan-400/30 hover:bg-white/10"
              >
                <ArrowUpRight className="h-4 w-4" />
                Live Demo
              </a>
            ) : null}
          </div>
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500">Featured</span>
        </div>
      </div>
    </motion.article>
  );
}
