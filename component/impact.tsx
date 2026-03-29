// import PremiumSection from "./PremiumSection";
// import { impact } from "@/lib/content";

// export default function Impact() {
//   return (
//     <PremiumSection title="Global Impact">

//       <div className="grid md:grid-cols-4 gap-8">

//         {impact.map((item) => (
//           <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition text-center">

//             <p className="text-4xl text-purple-300">{item.value}</p>

//             <p className="text-white/60 mt-3">{item.label}</p>

//           </div>
//         ))}

//       </div>

//     </PremiumSection>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { cinzel, inter } from "@/app/fonts";

export default function Impact() {
  return (
    <section id="impact" data-section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

      {/* ✨ Soft Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#CFA95F]/10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#CFA95F] tracking-[0.4em] text-xs uppercase">
            Global Presence
          </p>

          <h2 className={`mt-6 text-5xl md:text-6xl text-white ${cinzel.className}`}>
            A Movement That
            <span className="block text-[#CFA95F]">
              Touches Millions
            </span>
          </h2>

          <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
            What began as a spiritual journey has grown into a global movement,
            inspiring millions through compassion, service, and divine connection.
          </p>

        </div>

        {/* 🔥 STATS CARDS (moved up slightly) */}
        <div className="mt-20 grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {[
            { value: "1M+", label: "Devotees Inspired", icon: "🌍" },
            { value: "100+", label: "Spiritual Centers", icon: "🛕" },
            { value: "50+", label: "Years of Service", icon: "⏳" },
            { value: "Global", label: "Presence", icon: "✨" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-[#CFA95F]/40 via-transparent to-[#CFA95F]/30"
            >

              {/* INNER CARD */}
              <div className="relative p-8 rounded-[2rem] bg-[#0B0B1E]/80 backdrop-blur-xl border border-white/10 text-center">

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Icon */}
                <div className="text-3xl mb-4">{item.icon}</div>

                {/* Value */}
                <p className="text-3xl text-[#CFA95F] font-semibold">
                  {item.value}
                </p>

                {/* Label */}
                <p className="text-white/60 mt-2 text-sm">
                  {item.label}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* 🌟 FINAL TEXT */}
        <div className="mt-24 max-w-4xl mx-auto text-center">

          <p className={`text-white/70 leading-relaxed ${inter.className}`}>
            Through devotion, unity, and service, this spiritual path continues
            to grow — not as an organization, but as a living force of compassion
            that transforms lives across the world.
          </p>

        </div>

      </div>
    </section>
  );
}