"use client";

import React from "react";
import { DownloadCloud } from "lucide-react";

type Variant = "primary" | "secondary";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  preview?: boolean; // open in new tab instead of download
}

export default function ResumeButton({ variant = "primary", preview = false, className = "", ...props }: Props) {
  const base = "inline-flex items-center gap-2 font-semibold rounded-full transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/30";

  const variants: Record<Variant, string> = {
    primary:
      "px-7 py-3 text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_20px_60px_rgba(56,189,248,0.18)] hover:scale-105",
    secondary:
      "px-4 py-2 text-sm text-cyan-100 border border-white/10 bg-white/5 hover:bg-white/10 hover:text-cyan-100 hover:scale-105",
  };

  const href = "/resume/Ashenafi_Mesele_FlowCV_Resume.pdf";

  return (
    <a
      href={href}
      download={!preview}
      target={preview ? "_blank" : undefined}
      rel={preview ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
      aria-label={props["aria-label"] ?? "Download Resume"}
      {...props}
    >
      <DownloadCloud className="h-4 w-4" />
      <span>{variant === "primary" ? "Download Resume" : "Resume"}</span>
    </a>
  );
}
