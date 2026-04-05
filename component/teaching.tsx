// // // // // // // import PremiumSection from "./PremiumSection";
// // // // // // // import { teachings } from "@/lib/content";

// // // // // // // export default function Teachings() {
// // // // // // //   return (
// // // // // // //     <PremiumSection title="Divine Teachings">

// // // // // // //       <div className="grid md:grid-cols-3 gap-8">

// // // // // // //         {teachings.map((item) => (
// // // // // // //           <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition">

// // // // // // //             <h3 className="text-white text-xl">{item.title}</h3>

// // // // // // //             <p className="text-white/60 mt-4">{item.text}</p>

// // // // // // //           </div>
// // // // // // //         ))}

// // // // // // //       </div>

// // // // // // //     </PremiumSection>
// // // // // // //   );
// // // // // // // }

// // // // // // "use client";

// // // // // // import { motion } from "framer-motion";
// // // // // // import { teachings, wisdom } from "@/lib/content";
// // // // // // import { cinzel, inter } from "@/app/fonts";

// // // // // // export default function Teachings() {
// // // // // //   return (
// // // // // //     <section className="relative py-32 bg-[#0B0B1E] overflow-hidden">

// // // // // //       {/* 🌌 Soft Background (reduced hero feel) */}
// // // // // //       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

// // // // // //       {/* ✨ Subtle Glow */}
// // // // // //       <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full -translate-x-1/2" />

// // // // // //       <div className="relative z-10 max-w-7xl mx-auto px-6">

// // // // // //         {/* 🔥 HEADER */}
// // // // // //         <div className="text-center max-w-3xl mx-auto">

// // // // // //           <p className="text-purple-300 text-xs tracking-[0.3em] uppercase">
// // // // // //             Divine Teachings
// // // // // //           </p>

// // // // // //           <h2 className={`mt-4 text-4xl md:text-5xl text-white ${cinzel.className}`}>
// // // // // //             Sacred Wisdom for Inner Transformation
// // // // // //           </h2>

// // // // // //           <p className={`mt-6 text-white/70 ${inter.className}`}>
// // // // // //             Amma’s teachings guide seekers toward a life of compassion, discipline,
// // // // // //             and spiritual awareness — shaping both inner peace and outer harmony.
// // // // // //           </p>

// // // // // //         </div>

// // // // // //         {/* 🧊 MAIN GRID */}
// // // // // //         <div className="mt-20 grid lg:grid-cols-3 gap-10">

// // // // // //           {/* LEFT - FEATURE CARD */}
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 60 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             className="lg:col-span-2 p-10 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
// // // // // //           >
// // // // // //             <h3 className="text-2xl text-white mb-4">
// // // // // //               A Path of Simplicity & Awareness
// // // // // //             </h3>

// // // // // //             <p className="text-white/70 leading-relaxed">
// // // // // //               Spiritual growth begins with simplicity. Amma emphasizes reducing
// // // // // //               ego, embracing humility, and living with awareness in every action.
// // // // // //               Through this, one can experience true inner peace and connection
// // // // // //               with the divine.
// // // // // //             </p>

// // // // // //             <div className="mt-6 text-purple-300 text-sm">
// // // // // //               — Core Teaching
// // // // // //             </div>
// // // // // //           </motion.div>

// // // // // //           {/* RIGHT - QUOTE */}
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 60 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             className="p-8 rounded-[2rem] bg-gradient-to-br from-purple-500/20 to-transparent border border-white/10"
// // // // // //           >
// // // // // //             <p className="text-white italic text-lg leading-relaxed">
// // // // // //               “{wisdom[0]?.quote}”
// // // // // //             </p>

// // // // // //             <p className="mt-4 text-purple-300 text-sm">
// // // // // //               {wisdom[0]?.note}
// // // // // //             </p>
// // // // // //           </motion.div>

// // // // // //         </div>

// // // // // //         {/* ✨ TEACHING CARDS */}
// // // // // //         <div className="mt-20 grid md:grid-cols-3 gap-8">

// // // // // //           {teachings.map((item, i) => (
// // // // // //             <motion.div
// // // // // //               key={item.title}
// // // // // //               initial={{ opacity: 0, y: 60 }}
// // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // //               transition={{ delay: i * 0.2 }}
// // // // // //               className="p-8 rounded-[1.5rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition"
// // // // // //             >
// // // // // //               <h3 className="text-white text-xl">{item.title}</h3>

// // // // // //               <p className="text-white/60 mt-3 leading-relaxed">
// // // // // //                 {item.text}
// // // // // //               </p>
// // // // // //             </motion.div>
// // // // // //           ))}

// // // // // //         </div>

// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // "use client";

// // // // // import { motion } from "framer-motion";
// // // // // import { teachings } from "@/lib/content";
// // // // // import { cinzel, inter } from "@/app/fonts";

// // // // // export default function Teachings() {
// // // // //   return (
// // // // //     <section className="relative py-32 bg-[#0B0B1E]">

// // // // //       <div className="max-w-7xl mx-auto px-6">

// // // // //         {/* 🔥 TOP SPLIT (IMPORTANT FIX) */}
// // // // //         <div className="grid lg:grid-cols-2 gap-20 items-center">

// // // // //           {/* 🖼️ LEFT VISUAL */}
// // // // // <motion.div
// // // // //   initial={{ opacity: 0, x: -60 }}
// // // // //   whileInView={{ opacity: 1, x: 0 }}
// // // // //   className="relative flex justify-center"
// // // // // >

// // // // //   {/* 🌟 Controlled Glow (behind, not overpowering) */}
// // // // //   <div className="absolute w-[550px] h-[550px] bg-purple-500/20 blur-[140px] rounded-full" />

// // // // //   {/* 🖼️ IMAGE FRAME (BIGGER + PREMIUM) */}
// // // // //   <div className="relative w-full max-w-[420px] h-[520px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.7)]">

// // // // //     <img
// // // // //       src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// // // // //       className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
// // // // //     />

// // // // //     {/* 🔥 Depth overlay */}
// // // // //     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
// // // // //   </div>

// // // // // </motion.div>

// // // // //           {/* ✨ RIGHT CONTENT */}
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, x: 60 }}
// // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // //           >
// // // // //             <p className="text-purple-300 text-xs tracking-[0.3em] uppercase">
// // // // //               Teachings
// // // // //             </p>

// // // // //             <h2 className={`mt-4 text-4xl md:text-5xl text-white ${cinzel.className}`}>
// // // // //               A Path to Inner Peace
// // // // //             </h2>

// // // // //             <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
// // // // //               Amma’s teachings focus on simplicity, compassion, and selfless service.
// // // // //               They are not just philosophies, but a way of living that transforms
// // // // //               both the individual and society.
// // // // //             </p>

// // // // //             {/* Clean points instead of cards */}
// // // // //             <ul className="mt-8 space-y-4 text-white/70">
// // // // //               <li>• Live with simplicity and awareness</li>
// // // // //               <li>• Serve others without expectation</li>
// // // // //               <li>• Maintain inner peace in all situations</li>
// // // // //             </ul>
// // // // //           </motion.div>
// // // // //         </div>

// // // // //         {/* 👇 BOTTOM MINIMAL GRID (NOT HEAVY) */}
// // // // //         <div className="mt-24 grid md:grid-cols-3 gap-10">

// // // // //           {teachings.map((item, i) => (
// // // // //             <motion.div
// // // // //               key={item.title}
// // // // //               initial={{ opacity: 0, y: 40 }}
// // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // //               transition={{ delay: i * 0.2 }}
// // // // //               className="border-t border-white/10 pt-6"
// // // // //             >
// // // // //               <h3 className="text-white text-xl">{item.title}</h3>

// // // // //               <p className="text-white/60 mt-3 leading-relaxed">
// // // // //                 {item.text}
// // // // //               </p>
// // // // //             </motion.div>
// // // // //           ))}

// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { motion } from "framer-motion";
// // // // import { cinzel, inter } from "@/app/fonts";

// // // // export default function Teachings() {
// // // //   return (
// // // //     <section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

// // // //       {/* 🌌 Deep Gradient */}
// // // //       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

// // // //       {/* ✨ GOLDEN AURA (KEY UPGRADE) */}
// // // //       <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#CFA95F]/20 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

// // // //       <div className="relative z-10 max-w-7xl mx-auto px-6">

// // // //         {/* 🔥 HEADER (SPIRITUAL STYLE) */}
// // // //         <div className="text-center max-w-3xl mx-auto">

// // // //           <p className="text-[#CFA95F] tracking-[0.4em] text-xs uppercase">
// // // //             Divine Teachings
// // // //           </p>

// // // //           <h2 className={`mt-6 text-5xl md:text-6xl text-white leading-tight ${cinzel.className}`}>
// // // //             The Path of
// // // //             <span className="block text-[#CFA95F]">
// // // //               Inner Awakening
// // // //             </span>
// // // //           </h2>

// // // //           <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
// // // //             True spirituality is not learned — it is experienced.
// // // //             Amma’s teachings guide the soul beyond ego, into a space of
// // // //             compassion, stillness, and divine awareness.
// // // //           </p>
// // // //         </div>

// // // //         {/* 🧘 MAIN VISUAL (CENTERED PREMIUM) */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, scale: 0.9 }}
// // // //           whileInView={{ opacity: 1, scale: 1 }}
// // // //           className="mt-24 flex justify-center"
// // // //         >
// // // //           <div className="relative">

// // // //             {/* 🌟 HALO RINGS */}
// // // //             <div className="absolute w-[500px] h-[500px] border border-[#CFA95F]/30 rounded-full animate-pulse" />
// // // //             <div className="absolute w-[420px] h-[420px] border border-[#CFA95F]/20 rounded-full" />

// // // //             {/* 🖼️ IMAGE */}
// // // //             <div className="relative w-[380px] h-[480px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.7)]">

// // // //               <img
// // // //                 src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// // // //                 className="w-full h-full object-cover scale-105"
// // // //               />

// // // //               {/* 🔥 GOLD OVERLAY */}
// // // //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
// // // //             </div>
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* ✨ SACRED POINTS (NO CARDS → PREMIUM LOOK) */}
// // // //         <div className="mt-24 grid md:grid-cols-3 gap-10 text-center">

// // // //           {[
// // // //             "Live with awareness, not ego",
// // // //             "Serve without expectation",
// // // //             "Find stillness within yourself",
// // // //           ].map((text, i) => (
// // // //             <motion.div
// // // //               key={i}
// // // //               initial={{ opacity: 0, y: 40 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ delay: i * 0.2 }}
// // // //               className="relative"
// // // //             >
// // // //               <p className="text-[#CFA95F] text-lg mb-2">✦</p>
// // // //               <p className="text-white/80">{text}</p>
// // // //             </motion.div>
// // // //           ))}

// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { cinzel, inter } from "@/app/fonts";

// // // export default function Teachings() {
// // //   return (
// // //     <section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

// // //       {/* 🌌 Background */}
// // //       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

// // //       {/* ✨ GOLDEN AURA BACKGROUND */}
// // //       <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#CFA95F]/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

// // //       <div className="relative z-10 max-w-7xl mx-auto px-6">

// // //         {/* 🔥 HEADER */}
// // //         <div className="text-center max-w-3xl mx-auto">
// // //           <p className="text-[#CFA95F] tracking-[0.4em] text-xs uppercase">
// // //             Divine Teachings
// // //           </p>

// // //           <h2 className={`mt-6 text-5xl md:text-6xl text-white ${cinzel.className}`}>
// // //             The Path of
// // //             <span className="block text-[#CFA95F]">
// // //               Inner Awakening
// // //             </span>
// // //           </h2>

// // //           <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
// // //             True spirituality is not learned — it is experienced. Amma’s teachings guide the soul beyond ego,
// // //             into a space of compassion, stillness, and divine awareness.
// // //           </p>
// // //         </div>

// // //         {/* 🧘 MAIN VISUAL */}
// // // <motion.div
// // //   initial={{ opacity: 0, scale: 0.9 }}
// // //   whileInView={{ opacity: 1, scale: 1 }}
// // //   transition={{ duration: 1.2 }}
// // //   className="mt-24 flex justify-center items-center relative"
// // // >

// // //   {/* 🌟 BACK LIGHT BURST */}
// // //   <div className="absolute w-[700px] h-[700px] bg-[#CFA95F]/10 blur-[200px] rounded-full animate-pulse" />

// // //   {/* ✨ RADIAL LIGHT RAYS */}
// // //   <div
// // //     className="absolute w-[600px] h-[600px] rounded-full opacity-30"
// // //     style={{
// // //       background:
// // //         "radial-gradient(circle, rgba(207,169,95,0.4) 0%, transparent 70%)",
// // //     }}
// // //   />

// // //   {/* 🔶 HALO RINGS */}
// // //   <div className="absolute w-[500px] h-[500px] rounded-full border border-[#CFA95F]/40 shadow-[0_0_80px_rgba(207,169,95,0.5)] animate-pulse" />
// // //   <div className="absolute w-[420px] h-[420px] rounded-full border border-[#CFA95F]/20" />

// // //   {/* ✨ FRONT GLOW (IMPORTANT) */}
// // //   <div className="absolute w-[420px] h-[420px] bg-[#CFA95F]/10 blur-[80px] rounded-full" />

// // //   {/* 🖼️ IMAGE */}
// // //   <div className="relative w-[380px] h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_150px_rgba(0,0,0,0.8)]">

// // //     <img
// // //       src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// // //       alt="Amma"
// // //       className="w-full h-full object-cover scale-105"
// // //     />

// // //     {/* 🔥 INNER LIGHT FADE */}
// // //     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

// // //     {/* ✨ GOLDEN SHINE OVERLAY */}
// // //     <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/10 via-transparent to-transparent mix-blend-overlay" />

// // //   </div>

// // // </motion.div>

// // //         {/* ✨ SACRED POINTS */}
// // //         <div className="mt-24 grid md:grid-cols-3 gap-10 text-center">

// // //           {[
// // //             "Live with awareness, not ego",
// // //             "Serve others without expectation",
// // //             "Find stillness within yourself",
// // //           ].map((text, i) => (
// // //             <motion.div
// // //               key={i}
// // //               initial={{ opacity: 0, y: 40 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: i * 0.2 }}
// // //             >
// // //               <p className="text-[#CFA95F] text-lg mb-2">✦</p>
// // //               <p className="text-white/80">{text}</p>
// // //             </motion.div>
// // //           ))}

// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import { cinzel, inter } from "@/app/fonts";

// // export default function Teachings() {
// //   return (
// //     <section id="teaching" data-section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

// //       {/* 🌌 Background */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

// //       {/* ✨ Golden Aura Background */}
// //       <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#CFA95F]/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

// //       <div className="relative z-10 max-w-7xl mx-auto px-6">

// //         {/* 🔥 HEADER */}
// //         <div className="text-center max-w-3xl mx-auto">
// //           <p className="text-[#CFA95F] tracking-[0.4em] text-xs uppercase">
// //             Divine Teachings
// //           </p>

// //           <h2 className={`mt-6 text-5xl md:text-6xl text-white ${cinzel.className}`}>
// //             The Path of
// //             <span className="block text-[#CFA95F]">
// //               Inner Awakening
// //             </span>
// //           </h2>

// //           <p className={`mt-6 text-white/70 leading-relaxed text-lg ${inter.className}`}>
// //             True spirituality is not learned — it is experienced. Amma’s teachings guide the soul beyond ego,
// //             into a space of compassion, stillness, and divine awareness.
// //           </p>
// //         </div>

// //         {/* 🧘 DIVINE IMAGE */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 1.2 }}
// //           className="mt-24 flex justify-center items-center relative"
// //         >

// //           {/* 🌟 BACK LIGHT */}
// //           <div className="absolute w-[700px] h-[700px] bg-[#CFA95F]/10 blur-[200px] rounded-full animate-pulse" />

// //           {/* ✨ RADIAL LIGHT */}
// //           <div
// //             className="absolute w-[600px] h-[600px] rounded-full opacity-30"
// //             style={{
// //               background:
// //                 "radial-gradient(circle, rgba(207,169,95,0.4) 0%, transparent 70%)",
// //             }}
// //           />

// //           {/* 🔶 HALO RINGS */}
// //           <div className="absolute w-[500px] h-[500px] rounded-full border border-[#CFA95F]/40 shadow-[0_0_80px_rgba(207,169,95,0.5)] animate-pulse" />
// //           <div className="absolute w-[420px] h-[420px] rounded-full border border-[#CFA95F]/20" />

// //           {/* ✨ FRONT GLOW */}
// //           <div className="absolute w-[420px] h-[420px] bg-[#CFA95F]/10 blur-[80px] rounded-full" />

// //           {/* 🖼️ IMAGE */}
// //           <div className="relative w-[380px] h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_150px_rgba(0,0,0,0.8)]">

// //             <img
// //               src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/hero1_i2rvap.webp?updatedAt=1769077169742"
// //               alt="Amma"
// //               className="w-full h-full object-cover scale-105"
// //             />

// //             {/* Depth Overlay */}
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

// //             {/* Golden Shine */}
// //             <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/10 via-transparent to-transparent mix-blend-overlay" />

// //           </div>

// //         </motion.div>

// //         {/* ✨ INTRO CONTENT */}
// //         <div className="mt-28 max-w-5xl mx-auto text-center">

// //           <h3 className={`text-4xl text-white ${cinzel.className}`}>
// //             Wisdom Beyond Words
// //           </h3>

// //           <p className={`mt-6 text-white/70 leading-relaxed text-lg ${inter.className}`}>
// //             Amma’s teachings are not confined to scriptures or spoken words.
// //             They are lived, experienced, and realized through simplicity, devotion,
// //             and selfless service. Each teaching invites the seeker to move beyond
// //             the mind and discover the stillness within.
// //           </p>

// //         </div>

// //         {/* 🧘 QUOTE */}
// //         <div className="mt-20 max-w-4xl mx-auto text-center">
// //           <p className="text-white italic text-2xl leading-relaxed">
// //             “When the mind becomes silent, the soul begins to speak.”
// //           </p>

// //           <p className="mt-4 text-[#CFA95F] text-sm">
// //             — Divine Wisdom
// //           </p>
// //         </div>

// //         {/* ✨ TEACHINGS GRID */}
// //         {/* ✨ NEXT LEVEL TEACHING CARDS */}
// //         <div className="mt-24 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

// //           {[
// //             {
// //               title: "Simplicity in Life",
// //               desc: "True peace begins when desires are reduced. Living simply allows the mind to remain calm and focused on what truly matters.",
// //               icon: "🪔",
// //             },
// //             {
// //               title: "Compassion in Action",
// //               desc: "Spirituality is not isolation — it is service. Helping others with kindness and humility is the highest form of devotion.",
// //               icon: "🤲",
// //             },
// //             {
// //               title: "Inner Stillness",
// //               desc: "Silence is not the absence of sound, but the absence of disturbance within. In stillness, one connects with the divine.",
// //               icon: "🧘",
// //             },
// //           ].map((item, i) => (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, y: 60 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: i * 0.2, duration: 0.8 }}
// //               whileHover={{ y: -10 }}
// //               className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-[#CFA95F]/40 via-transparent to-[#CFA95F]/30"
// //             >

// //               {/* 🧊 INNER CARD */}
// //               <div className="relative h-full p-8 rounded-[2rem] bg-[#0B0B1E]/80 backdrop-blur-xl border border-white/10 overflow-hidden">

// //                 {/* ✨ Hover Glow */}
// //                 <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

// //                 {/* 🌟 Light Spot */}
// //                 <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#CFA95F]/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />

// //                 {/* 🔶 ICON */}
// //                 <div className="text-3xl mb-6">
// //                   {item.icon}
// //                 </div>

// //                 {/* 🧠 TITLE */}
// //                 <h3 className="text-white text-xl font-semibold">
// //                   {item.title}
// //                 </h3>

// //                 {/* 📜 DESCRIPTION */}
// //                 <p className="text-white/60 mt-4 leading-relaxed">
// //                   {item.desc}
// //                 </p>

// //               </div>

// //             </motion.div>
// //           ))}

// //         </div>

// //         {/* 🌟 FINAL REFLECTION */}
// //         <div className="mt-24 max-w-4xl mx-auto text-center">
// //           <p className={`text-white/70 leading-relaxed ${inter.className}`}>
// //             The path shown by Amma is not about renouncing the world, but transforming
// //             the way we live within it. By cultivating awareness, compassion, and
// //             discipline, one begins to experience a deeper connection with life itself.
// //           </p>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { cinzel, inter } from "@/app/fonts";

// const cards = [
//   {
//     title: "Simplicity in Life",
//     desc: "True peace begins when desires are reduced. Living simply allows the mind to remain calm and focused on what truly matters.",
//     icon: "S",
//   },
//   {
//     title: "Compassion in Action",
//     desc: "Spirituality is not isolation - it is service. Helping others with kindness and humility is the highest form of devotion.",
//     icon: "C",
//   },
//   {
//     title: "Inner Stillness",
//     desc: "Silence is not the absence of sound, but the absence of disturbance within. In stillness, one connects with the divine.",
//     icon: "I",
//   },
// ];

// const reveal = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export default function Teachings() {
//   return (
//     <section
//       id="teaching"
//       data-section
//       className="relative isolate overflow-hidden bg-[#07141a] py-28 text-white sm:py-32"
//     >
//       <div className="absolute inset-0 bg-[linear-gradient(180deg,_#07141a_0%,_#0b1f2d_34%,_#112d40_68%,_#08131c_100%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.16),_transparent_30%)]" />
//       <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:92px_92px]" />

//       <motion.div
//         className="absolute left-[-8%] top-[10%] h-[320px] w-[320px] rounded-full bg-[#22d3ee]/12 blur-[140px]"
//         animate={{ x: [0, 18, -8, 0], y: [0, -16, 8, 0] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-[-10%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[#a78bfa]/14 blur-[150px]"
//         animate={{ x: [0, -20, 8, 0], y: [0, 18, -8, 0] }}
//         transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
//           className="mx-auto max-w-4xl text-center"
//         >
//           <motion.div
//             variants={reveal}
//             className={`inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/8 px-5 py-2 text-[11px] uppercase tracking-[0.34em] text-[#9cfce5] backdrop-blur-xl ${inter.className}`}
//           >
//             <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
//             Divine Teachings
//           </motion.div>

//           <motion.h2
//             variants={reveal}
//             className={`mt-6 text-5xl leading-[1.04] text-white sm:text-6xl lg:text-[4.8rem] ${cinzel.className}`}
//           >
//             The Path of
//             <span className="mt-2 block bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_30%,#34d399_65%,#c084fc_100%)] bg-clip-text text-transparent">
//               Inner Awakening
//             </span>
//           </motion.h2>

//           <motion.p
//             variants={reveal}
//             className={`mx-auto mt-7 max-w-3xl text-base leading-8 text-white/72 sm:text-lg ${inter.className}`}
//           >
//             True spirituality is not learned - it is experienced. Amma's teachings guide the soul beyond ego, into a space of compassion, stillness, and divine awareness.
//           </motion.p>
//         </motion.div>

//         <div className="mt-20 grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
//             className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
//           >
//             <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-[#10202a]">
//               <motion.img
//                 src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/hero1_i2rvap.webp?updatedAt=1769077169742"
//                 alt="Amma"
//                 className="h-[40rem] w-full object-cover"
//                 animate={{ scale: [1.02, 1.06, 1.02] }}
//                 transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" />
//               <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.12)_0%,transparent_34%,transparent_66%,rgba(192,132,252,0.16)_100%)]" />

//               <div className="absolute inset-x-6 bottom-6 rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] px-6 py-6 backdrop-blur-xl">
//                 <div className={`text-[11px] uppercase tracking-[0.28em] text-[#9cfce5] ${inter.className}`}>Wisdom Beyond Words</div>
//                 <p className={`mt-3 text-xl leading-relaxed text-white ${cinzel.className}`}>
//                   Amma's teachings are lived, experienced, and realized through simplicity, devotion, and selfless service.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
//             className="space-y-6"
//           >
//             <motion.div
//               variants={reveal}
//               className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(255,255,255,0.04),rgba(192,132,252,0.08))] p-8 shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
//             >
//               <div className={`text-[11px] uppercase tracking-[0.28em] text-cyan-300 ${inter.className}`}>Living Wisdom</div>
//               <p className={`mt-5 text-white/72 leading-8 text-lg ${inter.className}`}>
//                 Amma's teachings are not confined to scriptures or spoken words. They are lived, experienced, and realized through simplicity, devotion, and selfless service. Each teaching invites the seeker to move beyond the mind and discover the stillness within.
//               </p>
//             </motion.div>

//             <motion.div
//               variants={reveal}
//               className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-8 text-center shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-xl"
//             >
//               <p className={`text-3xl italic leading-relaxed text-white ${cinzel.className}`}>
//                 "When the mind becomes silent, the soul begins to speak."
//               </p>
//               <p className="mt-4 text-sm uppercase tracking-[0.24em] text-cyan-300">- Divine Wisdom</p>
//             </motion.div>

//             <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-1">
//               {cards.map((item) => (
//                 <motion.div
//                   key={item.title}
//                   variants={reveal}
//                   whileHover={{ y: -6, scale: 1.01 }}
//                   transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//                   className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-7 shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-xl"
//                 >
//                   <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_40%,rgba(192,132,252,0.1)_100%)] opacity-80" />
//                   <div className="relative z-10 flex gap-5">
//                     <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(52,211,153,0.18),rgba(192,132,252,0.22))] ring-1 ring-white/10">
//                       <span className={`text-lg text-white ${cinzel.className}`}>{item.icon}</span>
//                     </div>
//                     <div>
//                       <h3 className={`text-2xl text-white ${cinzel.className}`}>{item.title}</h3>
//                       <p className={`mt-4 text-white/66 leading-7 ${inter.className}`}>{item.desc}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               variants={reveal}
//               className="rounded-[2.2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-xl"
//             >
//               <p className={`text-white/72 leading-8 ${inter.className}`}>
//                 The path shown by Amma is not about renouncing the world, but transforming the way we live within it. By cultivating awareness, compassion, and discipline, one begins to experience a deeper connection with life itself.
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { cinzel, inter } from "@/app/fonts";

export default function Teachings() {
  return (
    <section id="teaching" data-section className="relative py-36 bg-[#07141a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07141a] via-[#0c1f2d] to-[#07141a]" />

      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#22D3EE]/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#7DD3FC] tracking-[0.4em] text-xs uppercase">
            Divine Teachings
          </p>

          <h2 className={`mt-6 text-5xl md:text-6xl text-white ${cinzel.className}`}>
            The Path of
            <span className="block bg-gradient-to-r from-[#7DD3FC] via-[#34D399] to-[#C084FC] bg-clip-text text-transparent">
              Inner Awakening
            </span>
          </h2>

          <p className={`mt-6 text-white/70 leading-relaxed text-lg ${inter.className}`}>
            True spirituality is not learned - it is experienced. Amma's teachings guide the soul beyond ego,
            into a space of compassion, stillness, and divine awareness.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-24 flex justify-center items-center relative"
        >
          <div className="absolute w-[700px] h-[700px] bg-[#22D3EE]/10 blur-[200px] rounded-full animate-pulse" />

          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 70%)",
            }}
          />

          <div className="absolute w-[500px] h-[500px] rounded-full border border-[#22D3EE]/40 shadow-[0_0_80px_rgba(34,211,238,0.35)] animate-pulse" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-[#A78BFA]/20" />

          <div className="absolute w-[420px] h-[420px] bg-[#34D399]/10 blur-[80px] rounded-full" />

          <div className="relative w-[380px] h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_150px_rgba(0,0,0,0.8)]">
            <img
              src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/hero1_i2rvap.webp?updatedAt=1769077169742"
              alt="Amma"
              className="w-full h-full object-cover scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/10 via-transparent to-[#C084FC]/10 mix-blend-overlay" />
          </div>
        </motion.div>

        <div className="mt-28 max-w-5xl mx-auto text-center">
          <h3 className={`text-4xl text-white ${cinzel.className}`}>
            Wisdom Beyond Words
          </h3>

          <p className={`mt-6 text-white/70 leading-relaxed text-lg ${inter.className}`}>
            Amma's teachings are not confined to scriptures or spoken words.
            They are lived, experienced, and realized through simplicity, devotion,
            and selfless service. Each teaching invites the seeker to move beyond
            the mind and discover the stillness within.
          </p>
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center">
          <p className="text-white italic text-2xl leading-relaxed">
            "When the mind becomes silent, the soul begins to speak."
          </p>

          <p className="mt-4 text-[#7DD3FC] text-sm">
            - Divine Wisdom
          </p>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Simplicity in Life",
              desc: "True peace begins when desires are reduced. Living simply allows the mind to remain calm and focused on what truly matters.",
              icon: "S",
              gradient: "from-[#22D3EE]/40 via-transparent to-[#34D399]/30",
            },
            {
              title: "Compassion in Action",
              desc: "Spirituality is not isolation - it is service. Helping others with kindness and humility is the highest form of devotion.",
              icon: "C",
              gradient: "from-[#34D399]/40 via-transparent to-[#7DD3FC]/30",
            },
            {
              title: "Inner Stillness",
              desc: "Silence is not the absence of sound, but the absence of disturbance within. In stillness, one connects with the divine.",
              icon: "I",
              gradient: "from-[#C084FC]/40 via-transparent to-[#22D3EE]/30",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className={`group relative p-[1px] rounded-[2rem] bg-gradient-to-br ${item.gradient}`}
            >
              <div className="relative h-full p-8 rounded-[2rem] bg-[#07141a]/80 backdrop-blur-xl border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/15 via-transparent to-[#C084FC]/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#22D3EE]/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />

                <div className="text-3xl mb-6 text-[#7DD3FC]">
                  {item.icon}
                </div>

                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-white/60 mt-4 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 max-w-4xl mx-auto text-center">
          <p className={`text-white/70 leading-relaxed ${inter.className}`}>
            The path shown by Amma is not about renouncing the world, but transforming
            the way we live within it. By cultivating awareness, compassion, and
            discipline, one begins to experience a deeper connection with life itself.
          </p>
        </div>
      </div>
    </section>
  );
}
