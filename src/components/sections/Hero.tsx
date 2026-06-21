"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "@/images/photo_5827828041932017946_w.jpg";
import ResumeButton from "@/components/ui/ResumeButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pt-28 pb-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_10%_15%,_rgba(168,85,247,0.14),_transparent_18%),radial-gradient(circle_at_90%_10%,_rgba(59,130,246,0.12),_transparent_25%)]" />
      <div className="pointer-events-none absolute right-0 top-32 hidden h-72 w-72 rounded-full bg-violet-500/10 blur-3xl lg:block" />
      <div className="pointer-events-none absolute left-0 top-[30rem] hidden h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl lg:block" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        <motion.div variants={fadeUp} className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-100 shadow-[0_0_30px_rgba(56,189,248,0.08)]">
            Software Engineer · Full Stack · AI Developer
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">ASHENAFI MESSLE</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              I design and build scalable web applications, intelligent systems, and modern digital platforms that solve real-world problems.
            </p>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.18)] transition duration-200 hover:scale-[1.02] hover:shadow-[0_24px_80px_rgba(56,189,248,0.22)]"
            >
              View Projects
            </Link>
            <ResumeButton variant="primary" />
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 sm:max-w-md md:grid-cols-3">
            {[
              "Scalable Architecture",
              "AI-driven Systems",
              "Modern UI/UX",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-slate-300 shadow-[0_20px_80px_rgba(15,23,42,0.25)]"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
          className="group relative mx-auto flex max-w-xl items-center justify-center"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-purple-500/15 to-blue-500/10 blur-[80px] opacity-80 transition duration-500 group-hover:opacity-100" />
          <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/95 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <div className="relative mx-auto h-[360px] w-[520px] max-w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-inner shadow-black/30 sm:h-[380px]">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_40%)]" />
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 220 }} className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={profilePic}
                  alt="Profile photo"
                  fill
                  style={{ objectPosition: "center 18%" }}
                  className="object-cover transition-transform duration-700 will-change-transform"
                  priority
                />
              </motion.div>
            </div>

            <div className="mt-8 text-center text-slate-400">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Live Fast Die Last</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
