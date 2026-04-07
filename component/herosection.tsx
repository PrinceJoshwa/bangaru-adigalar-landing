"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cinzel, inter } from "@/app/fonts";

export default function EliteSpiritualHero() {
  return (
    <section className="relative min-h-screen bg-[#0c111f] overflow-hidden text-[#f4efe8]">

      {/* Background Layers (UPDATED COLORS) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c111f] via-[#2d1f44] to-[#0c111f]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Top Label */}
        <p className="text-[#b66570] tracking-[0.4em] text-xs uppercase mb-8">
          Divine Presence
        </p>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {/* Headline */}
            <h1
              className={`${cinzel.className} text-5xl md:text-7xl leading-[1.1] text-[#f4efe8]`}
            >
              Arulthiru <br />
              Bangaru Adigalar
            </h1>

            {/* Subheadline (PRIMARY ACCENT) */}
            <p className="mt-6 text-xl text-[#ed9e6f] font-light tracking-wide">
              The Divine Incarnation of Adhiparasakthi
            </p>

            {/* Description */}
            <p
              className={`${inter.className} mt-8 text-[#cfc7bc] text-lg leading-relaxed max-w-xl`}
            >
              A life dedicated to spiritual equality, breaking social barriers,
              and service to humanity. Known to millions simply as{" "}
              <span className="italic text-[#f4efe8]">“Amma.”</span>
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-6">
              {/* Primary */}
              <button className="px-8 py-4 bg-[#ed9e6f] text-[#0c111f] rounded-full text-sm tracking-wide shadow-[0_10px_30px_rgba(237,158,111,0.25)] hover:scale-[1.05] transition">
                Read the Biography
              </button>

              {/* Secondary */}
              <button className="px-8 py-4 border border-[#80466e] text-[#b66570] rounded-full hover:bg-[#512f5c]/40 transition">
                Explore His Teachings
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Soft vertical glow (UPDATED) */}
            <div className="absolute w-[300px] h-[500px] bg-gradient-to-b from-[#ed9e6f33] to-transparent blur-[80px]" />

            {/* Image */}
            <div className="relative w-[260px] md:w-[320px] aspect-[3/4] overflow-hidden rounded-[160px] border border-[#80466e]/40">
              <Image
                src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_1_nt513j.jpg"
                alt="Bangaru Adigalar"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>

        {/* Bottom Divider */}
        <div className="mt-24 flex items-center justify-center gap-4">
          <div className="h-[1px] w-20 bg-[#80466e]" />
          <span className="text-[#b66570] text-sm">✦</span>
          <div className="h-[1px] w-20 bg-[#80466e]" />
        </div>

      </div>
    </section>
  );
}