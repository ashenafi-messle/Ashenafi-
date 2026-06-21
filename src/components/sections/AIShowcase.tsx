"use client";

import { motion } from "framer-motion";
import { TrendingUp, Brain, Zap, BarChart3 } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AIShowcase() {
  return (
    <section id="ai-showcase" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.12),_transparent_50%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={itemVariants} className="mb-16 max-w-3xl">
          <p className="mb-3 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-violet-200">
            AI Innovation
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            AI-Powered Campus Dining <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-violet-300 bg-clip-text text-transparent">Intelligence</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            An intelligent system that predicts meal demand, optimizes food preparation, and reduces waste using historical data and machine learning concepts.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 p-3 text-cyan-300">
                  <Brain className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-white">Demand Prediction Engine</h3>
                  <p className="text-sm text-slate-400">Predict daily and weekly meal demand, forecast student attendance per meal, and identify peak dining hours using historical patterns.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full border border-purple-400/20 bg-purple-500/10 p-3 text-purple-300">
                  <Zap className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-white">Food Optimization</h3>
                  <p className="text-sm text-slate-400">Suggest optimal preparation quantities, reduce overproduction, and minimize food waste through intelligent recommendations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full border border-violet-400/20 bg-violet-500/10 p-3 text-violet-300">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-white">Attendance Analysis</h3>
                  <p className="text-sm text-slate-400">Analyze student attendance trends, detect behavioral patterns, and improve planning accuracy across semesters.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full border border-blue-400/20 bg-blue-500/10 p-3 text-blue-300">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-white">Real-Time Analytics</h3>
                  <p className="text-sm text-slate-400">Dashboard insights powered by historical data, academic calendars, and seasonal patterns for data-driven decisions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideVariants} className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_100px_rgba(15,23,42,0.4)] sm:p-8">
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/15 via-transparent to-transparent p-4 transition duration-300 hover:border-cyan-400/30"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Predicted Today</p>
                    <p className="mt-2 text-2xl font-semibold text-white">342</p>
                    <p className="mt-1 text-xs text-cyan-200">+12% vs avg</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/15 via-transparent to-transparent p-4 transition duration-300 hover:border-purple-400/30"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Peak Hour</p>
                    <p className="mt-2 text-2xl font-semibold text-white">12:30 PM</p>
                    <p className="mt-1 text-xs text-purple-200">High density</p>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/15 via-transparent to-transparent p-4 transition duration-300 hover:border-violet-400/30"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Food Recommendation</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Rice servings</span>
                      <span className="font-semibold text-white">280kg</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Vegetables</span>
                      <span className="font-semibold text-white">165kg</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Proteins</span>
                      <span className="font-semibold text-white">95kg</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/15 via-transparent to-transparent p-4 transition duration-300 hover:border-blue-400/30"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Waste Reduction</p>
                      <p className="mt-2 text-2xl font-semibold text-white">87%</p>
                    </div>
                    <div className="rounded-full border-4 border-blue-500/30 bg-blue-500/10 p-4">
                      <div className="relative h-12 w-12">
                        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="4"
                            strokeDasharray="251.2"
                            initial={{ strokeDashoffset: 251.2 }}
                            whileInView={{ strokeDashoffset: 32.6 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">87%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">System Health</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Model Accuracy</span>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-24 rounded-full bg-slate-800">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "91%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                      <span className="text-white">91%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">Data Quality</span>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-24 rounded-full bg-slate-800">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-400 to-violet-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "94%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                        />
                      </div>
                      <span className="text-white">94%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500">*Metrics shown are based on real system data and historical predictions</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
