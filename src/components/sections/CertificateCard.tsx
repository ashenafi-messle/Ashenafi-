"use client";

import React from "react";
import type { Certificate } from "@/types/certificate";
import { motion } from "framer-motion";
import { Eye, DownloadCloud } from "lucide-react";

type Props = {
  cert: Certificate;
  onPreview?: (cert: Certificate) => void;
};

export default function CertificateCard({ cert, onPreview }: Props) {
  const thumb = cert.thumbnail ?? cert.file;
  const isImage = /\.(jpg|jpeg|png|gif)$/i.test(cert.file);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      className="relative bg-white/5 border border-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transform transition-transform duration-300"
    >
      <div className="group">
        <div className="h-48 w-full bg-gradient-to-br from-[#0f172a]/20 to-[#0b1220]/10 flex items-center justify-center overflow-hidden">
          {isImage ? (
            <img
              src={`/${thumb}`}
              alt={cert.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full text-sm text-gray-300">
              <div className="px-4 py-2">Document Preview</div>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm line-clamp-2">{cert.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{cert.issuer} · {cert.year}</p>
            </div>
            <span className="ml-3 inline-flex items-center px-2 py-1 rounded-full text-xs bg-gradient-to-r from-cyan-600 to-purple-600 text-white">{cert.category}</span>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => (isImage && onPreview ? onPreview(cert) : window.open(`/${cert.file}`, "_blank", "noopener noreferrer"))}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/6 hover:bg-white/10 border border-white/6 text-sm text-white transition">
              <Eye size={16} />
              <span>View Document</span>
            </button>

            {cert.downloadable ? (
              <a
                href={`/${cert.file}`}
                download
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-sm text-white shadow-md"
              >
                <DownloadCloud size={16} />
                <span>Download</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
