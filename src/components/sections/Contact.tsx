"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, GitBranch, Link, MessageCircle } from "lucide-react";

const contacts = [
  {
    id: "email",
    label: "Email",
    value: "ashurack664@gmail.com",
    href: "mailto:ashurack664@gmail.com",
    icon: Mail,
  },
  {
    id: "phone",
    label: "Phone",
    value: "+251 997 278 932",
    href: "tel:+251997278932",
    icon: Phone,
  },
];

const socials = [
  {
    id: "github",
    label: "GitHub",
    value: "ashenafi-messle",
    href: "https://github.com/ashenafi-messle",
    icon: GitBranch,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "ashenafi-mesele-49b944410",
    href: "https://www.linkedin.com/in/ashenafi-mesele-49b944410",
    icon: Link,
  },
  {
    id: "telegram",
    label: "Telegram",
    value: "@MrBombastick22",
    href: "https://t.me/MrBombastick22",
    icon: MessageCircle,
  },
];

export default function Contact() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let’s Connect
          </h2>
          <p className="mt-2 text-gray-300">Feel free to reach out for collaboration, opportunities, or project discussions.</p>
        </header>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {contacts.map((c) => (
            <a key={c.id} href={c.href} className="group block p-4 rounded-2xl bg-white/5 border border-white/6 backdrop-blur-md hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-300">{c.label}</div>
                  <div className="text-white font-medium">{c.value}</div>
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-3 sm:grid-cols-3 gap-4">
          {socials.map((s) => (
            <a key={s.id} href={s.href} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/6 backdrop-blur-md hover:scale-[1.03] transition-transform">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
                <s.icon size={18} />
              </div>
              <div className="text-sm text-gray-300">{s.label}</div>
              <div className="text-sm text-white">{s.value}</div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
