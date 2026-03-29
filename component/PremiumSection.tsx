"use client";

import { motion } from "framer-motion";
import { cinzel, inter } from "@/app/fonts";

type SectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function PremiumSection({
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section className="relative isolate py-32 overflow-hidden">

      {/* 🌌 SAME BACKGROUND SYSTEM AS HERO */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B1E] via-[#1A1A40] to-[#6A11CB]" />

      {/* 🌟 AURA GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* ✨ SECONDARY GLOW */}
      <div className="absolute top-0 right-1/3 w-[300px] h-[300px] bg-pink-400/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* 🔥 TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`text-4xl md:text-6xl text-white ${cinzel.className}`}
        >
          {title}
        </motion.h2>

        {/* 🌙 DESCRIPTION */}
        {description && (
          <p
            className={`mt-6 max-w-2xl mx-auto text-white/70 ${inter.className}`}
          >
            {description}
          </p>
        )}

        {/* 📦 CONTENT */}
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}