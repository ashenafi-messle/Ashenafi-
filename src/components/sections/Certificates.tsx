"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import certificatesData from "@/data/certificates";
import type { Certificate } from "@/types/certificate";
import { X } from "lucide-react";

export default function Certificates() {
  const [preview, setPreview] = useState<Certificate | null>(null);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certificates & Academic Documents
          </h2>
          <p className="mt-2 text-gray-300 max-w-2xl">
            Verified academic records, certifications, and educational achievements that support my professional background.
          </p>
        </header>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} onPreview={(c) => setPreview(c)} />
          ))}
        </motion.div>
      </div>

      {/* Modal preview for images */}
      {preview ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <motion.div initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} className="relative max-w-4xl w-full mx-4 bg-white/4 border border-white/6 backdrop-blur-md rounded-2xl overflow-hidden">
            <button onClick={() => setPreview(null)} className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/6 text-white">
              <X size={18} />
            </button>

            <div className="p-4">
              {/\.(jpg|jpeg|png|gif)$/i.test(preview.file) ? (
                <img src={`/${preview.file}`} alt={preview.title} className="w-full h-[70vh] object-contain" />
              ) : (
                <div className="flex flex-col items-center justify-center py-20">
                  <p className="text-white mb-4">Preview not available for this document type.</p>
                  <a href={`/${preview.file}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-gradient-to-r from-cyan-500 to-purple-600 text-white">Open Document</a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </section>
  );
}
