// // // // // import PremiumSection from "./PremiumSection";
// // // // // import { teachings } from "@/lib/content";

// // // // // export default function Teachings() {
// // // // //   return (
// // // // //     <PremiumSection title="Divine Teachings">

// // // // //       <div className="grid md:grid-cols-3 gap-8">

// // // // //         {teachings.map((item) => (
// // // // //           <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition">

// // // // //             <h3 className="text-white text-xl">{item.title}</h3>

// // // // //             <p className="text-white/60 mt-4">{item.text}</p>

// // // // //           </div>
// // // // //         ))}

// // // // //       </div>

// // // // //     </PremiumSection>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { motion } from "framer-motion";
// // // // import { teachings, wisdom } from "@/lib/content";
// // // // import { cinzel, inter } from "@/app/fonts";

// // // // export default function Teachings() {
// // // //   return (
// // // //     <section className="relative py-32 bg-[#0B0B1E] overflow-hidden">

// // // //       {/* 🌌 Soft Background (reduced hero feel) */}
// // // //       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

// // // //       {/* ✨ Subtle Glow */}
// // // //       <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full -translate-x-1/2" />

// // // //       <div className="relative z-10 max-w-7xl mx-auto px-6">

// // // //         {/* 🔥 HEADER */}
// // // //         <div className="text-center max-w-3xl mx-auto">

// // // //           <p className="text-purple-300 text-xs tracking-[0.3em] uppercase">
// // // //             Divine Teachings
// // // //           </p>

// // // //           <h2 className={`mt-4 text-4xl md:text-5xl text-white ${cinzel.className}`}>
// // // //             Sacred Wisdom for Inner Transformation
// // // //           </h2>

// // // //           <p className={`mt-6 text-white/70 ${inter.className}`}>
// // // //             Amma’s teachings guide seekers toward a life of compassion, discipline,
// // // //             and spiritual awareness — shaping both inner peace and outer harmony.
// // // //           </p>

// // // //         </div>

// // // //         {/* 🧊 MAIN GRID */}
// // // //         <div className="mt-20 grid lg:grid-cols-3 gap-10">

// // // //           {/* LEFT - FEATURE CARD */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 60 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             className="lg:col-span-2 p-10 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
// // // //           >
// // // //             <h3 className="text-2xl text-white mb-4">
// // // //               A Path of Simplicity & Awareness
// // // //             </h3>

// // // //             <p className="text-white/70 leading-relaxed">
// // // //               Spiritual growth begins with simplicity. Amma emphasizes reducing
// // // //               ego, embracing humility, and living with awareness in every action.
// // // //               Through this, one can experience true inner peace and connection
// // // //               with the divine.
// // // //             </p>

// // // //             <div className="mt-6 text-purple-300 text-sm">
// // // //               — Core Teaching
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* RIGHT - QUOTE */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 60 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             className="p-8 rounded-[2rem] bg-gradient-to-br from-purple-500/20 to-transparent border border-white/10"
// // // //           >
// // // //             <p className="text-white italic text-lg leading-relaxed">
// // // //               “{wisdom[0]?.quote}”
// // // //             </p>

// // // //             <p className="mt-4 text-purple-300 text-sm">
// // // //               {wisdom[0]?.note}
// // // //             </p>
// // // //           </motion.div>

// // // //         </div>

// // // //         {/* ✨ TEACHING CARDS */}
// // // //         <div className="mt-20 grid md:grid-cols-3 gap-8">

// // // //           {teachings.map((item, i) => (
// // // //             <motion.div
// // // //               key={item.title}
// // // //               initial={{ opacity: 0, y: 60 }}
// // // //               whileInView={{ opacity: 1, y: 0 }}
// // // //               transition={{ delay: i * 0.2 }}
// // // //               className="p-8 rounded-[1.5rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition"
// // // //             >
// // // //               <h3 className="text-white text-xl">{item.title}</h3>

// // // //               <p className="text-white/60 mt-3 leading-relaxed">
// // // //                 {item.text}
// // // //               </p>
// // // //             </motion.div>
// // // //           ))}

// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { teachings } from "@/lib/content";
// // // import { cinzel, inter } from "@/app/fonts";

// // // export default function Teachings() {
// // //   return (
// // //     <section className="relative py-32 bg-[#0B0B1E]">

// // //       <div className="max-w-7xl mx-auto px-6">

// // //         {/* 🔥 TOP SPLIT (IMPORTANT FIX) */}
// // //         <div className="grid lg:grid-cols-2 gap-20 items-center">

// // //           {/* 🖼️ LEFT VISUAL */}
// // // <motion.div
// // //   initial={{ opacity: 0, x: -60 }}
// // //   whileInView={{ opacity: 1, x: 0 }}
// // //   className="relative flex justify-center"
// // // >

// // //   {/* 🌟 Controlled Glow (behind, not overpowering) */}
// // //   <div className="absolute w-[550px] h-[550px] bg-purple-500/20 blur-[140px] rounded-full" />

// // //   {/* 🖼️ IMAGE FRAME (BIGGER + PREMIUM) */}
// // //   <div className="relative w-full max-w-[420px] h-[520px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.7)]">

// // //     <img
// // //       src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// // //       className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
// // //     />

// // //     {/* 🔥 Depth overlay */}
// // //     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
// // //   </div>

// // // </motion.div>

// // //           {/* ✨ RIGHT CONTENT */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 60 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //           >
// // //             <p className="text-purple-300 text-xs tracking-[0.3em] uppercase">
// // //               Teachings
// // //             </p>

// // //             <h2 className={`mt-4 text-4xl md:text-5xl text-white ${cinzel.className}`}>
// // //               A Path to Inner Peace
// // //             </h2>

// // //             <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
// // //               Amma’s teachings focus on simplicity, compassion, and selfless service.
// // //               They are not just philosophies, but a way of living that transforms
// // //               both the individual and society.
// // //             </p>

// // //             {/* Clean points instead of cards */}
// // //             <ul className="mt-8 space-y-4 text-white/70">
// // //               <li>• Live with simplicity and awareness</li>
// // //               <li>• Serve others without expectation</li>
// // //               <li>• Maintain inner peace in all situations</li>
// // //             </ul>
// // //           </motion.div>
// // //         </div>

// // //         {/* 👇 BOTTOM MINIMAL GRID (NOT HEAVY) */}
// // //         <div className="mt-24 grid md:grid-cols-3 gap-10">

// // //           {teachings.map((item, i) => (
// // //             <motion.div
// // //               key={item.title}
// // //               initial={{ opacity: 0, y: 40 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: i * 0.2 }}
// // //               className="border-t border-white/10 pt-6"
// // //             >
// // //               <h3 className="text-white text-xl">{item.title}</h3>

// // //               <p className="text-white/60 mt-3 leading-relaxed">
// // //                 {item.text}
// // //               </p>
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
// //     <section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

// //       {/* 🌌 Deep Gradient */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

// //       {/* ✨ GOLDEN AURA (KEY UPGRADE) */}
// //       <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#CFA95F]/20 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

// //       <div className="relative z-10 max-w-7xl mx-auto px-6">

// //         {/* 🔥 HEADER (SPIRITUAL STYLE) */}
// //         <div className="text-center max-w-3xl mx-auto">

// //           <p className="text-[#CFA95F] tracking-[0.4em] text-xs uppercase">
// //             Divine Teachings
// //           </p>

// //           <h2 className={`mt-6 text-5xl md:text-6xl text-white leading-tight ${cinzel.className}`}>
// //             The Path of
// //             <span className="block text-[#CFA95F]">
// //               Inner Awakening
// //             </span>
// //           </h2>

// //           <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
// //             True spirituality is not learned — it is experienced.
// //             Amma’s teachings guide the soul beyond ego, into a space of
// //             compassion, stillness, and divine awareness.
// //           </p>
// //         </div>

// //         {/* 🧘 MAIN VISUAL (CENTERED PREMIUM) */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           className="mt-24 flex justify-center"
// //         >
// //           <div className="relative">

// //             {/* 🌟 HALO RINGS */}
// //             <div className="absolute w-[500px] h-[500px] border border-[#CFA95F]/30 rounded-full animate-pulse" />
// //             <div className="absolute w-[420px] h-[420px] border border-[#CFA95F]/20 rounded-full" />

// //             {/* 🖼️ IMAGE */}
// //             <div className="relative w-[380px] h-[480px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.7)]">

// //               <img
// //                 src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //                 className="w-full h-full object-cover scale-105"
// //               />

// //               {/* 🔥 GOLD OVERLAY */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* ✨ SACRED POINTS (NO CARDS → PREMIUM LOOK) */}
// //         <div className="mt-24 grid md:grid-cols-3 gap-10 text-center">

// //           {[
// //             "Live with awareness, not ego",
// //             "Serve without expectation",
// //             "Find stillness within yourself",
// //           ].map((text, i) => (
// //             <motion.div
// //               key={i}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: i * 0.2 }}
// //               className="relative"
// //             >
// //               <p className="text-[#CFA95F] text-lg mb-2">✦</p>
// //               <p className="text-white/80">{text}</p>
// //             </motion.div>
// //           ))}

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { cinzel, inter } from "@/app/fonts";

// export default function Teachings() {
//   return (
//     <section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

//       {/* 🌌 Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

//       {/* ✨ GOLDEN AURA BACKGROUND */}
//       <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#CFA95F]/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">

//         {/* 🔥 HEADER */}
//         <div className="text-center max-w-3xl mx-auto">
//           <p className="text-[#CFA95F] tracking-[0.4em] text-xs uppercase">
//             Divine Teachings
//           </p>

//           <h2 className={`mt-6 text-5xl md:text-6xl text-white ${cinzel.className}`}>
//             The Path of
//             <span className="block text-[#CFA95F]">
//               Inner Awakening
//             </span>
//           </h2>

//           <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
//             True spirituality is not learned — it is experienced. Amma’s teachings guide the soul beyond ego,
//             into a space of compassion, stillness, and divine awareness.
//           </p>
//         </div>

//         {/* 🧘 MAIN VISUAL */}
// <motion.div
//   initial={{ opacity: 0, scale: 0.9 }}
//   whileInView={{ opacity: 1, scale: 1 }}
//   transition={{ duration: 1.2 }}
//   className="mt-24 flex justify-center items-center relative"
// >

//   {/* 🌟 BACK LIGHT BURST */}
//   <div className="absolute w-[700px] h-[700px] bg-[#CFA95F]/10 blur-[200px] rounded-full animate-pulse" />

//   {/* ✨ RADIAL LIGHT RAYS */}
//   <div
//     className="absolute w-[600px] h-[600px] rounded-full opacity-30"
//     style={{
//       background:
//         "radial-gradient(circle, rgba(207,169,95,0.4) 0%, transparent 70%)",
//     }}
//   />

//   {/* 🔶 HALO RINGS */}
//   <div className="absolute w-[500px] h-[500px] rounded-full border border-[#CFA95F]/40 shadow-[0_0_80px_rgba(207,169,95,0.5)] animate-pulse" />
//   <div className="absolute w-[420px] h-[420px] rounded-full border border-[#CFA95F]/20" />

//   {/* ✨ FRONT GLOW (IMPORTANT) */}
//   <div className="absolute w-[420px] h-[420px] bg-[#CFA95F]/10 blur-[80px] rounded-full" />

//   {/* 🖼️ IMAGE */}
//   <div className="relative w-[380px] h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_150px_rgba(0,0,0,0.8)]">

//     <img
//       src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//       alt="Amma"
//       className="w-full h-full object-cover scale-105"
//     />

//     {/* 🔥 INNER LIGHT FADE */}
//     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//     {/* ✨ GOLDEN SHINE OVERLAY */}
//     <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/10 via-transparent to-transparent mix-blend-overlay" />

//   </div>

// </motion.div>

//         {/* ✨ SACRED POINTS */}
//         <div className="mt-24 grid md:grid-cols-3 gap-10 text-center">

//           {[
//             "Live with awareness, not ego",
//             "Serve others without expectation",
//             "Find stillness within yourself",
//           ].map((text, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2 }}
//             >
//               <p className="text-[#CFA95F] text-lg mb-2">✦</p>
//               <p className="text-white/80">{text}</p>
//             </motion.div>
//           ))}

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
    <section id="teaching" data-section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

      {/* ✨ Golden Aura Background */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#CFA95F]/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#CFA95F] tracking-[0.4em] text-xs uppercase">
            Divine Teachings
          </p>

          <h2 className={`mt-6 text-5xl md:text-6xl text-white ${cinzel.className}`}>
            The Path of
            <span className="block text-[#CFA95F]">
              Inner Awakening
            </span>
          </h2>

          <p className={`mt-6 text-white/70 leading-relaxed text-lg ${inter.className}`}>
            True spirituality is not learned — it is experienced. Amma’s teachings guide the soul beyond ego,
            into a space of compassion, stillness, and divine awareness.
          </p>
        </div>

        {/* 🧘 DIVINE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-24 flex justify-center items-center relative"
        >

          {/* 🌟 BACK LIGHT */}
          <div className="absolute w-[700px] h-[700px] bg-[#CFA95F]/10 blur-[200px] rounded-full animate-pulse" />

          {/* ✨ RADIAL LIGHT */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(207,169,95,0.4) 0%, transparent 70%)",
            }}
          />

          {/* 🔶 HALO RINGS */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-[#CFA95F]/40 shadow-[0_0_80px_rgba(207,169,95,0.5)] animate-pulse" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-[#CFA95F]/20" />

          {/* ✨ FRONT GLOW */}
          <div className="absolute w-[420px] h-[420px] bg-[#CFA95F]/10 blur-[80px] rounded-full" />

          {/* 🖼️ IMAGE */}
          <div className="relative w-[380px] h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_150px_rgba(0,0,0,0.8)]">

            <img
              src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/hero1_i2rvap.webp?updatedAt=1769077169742"
              alt="Amma"
              className="w-full h-full object-cover scale-105"
            />

            {/* Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Golden Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/10 via-transparent to-transparent mix-blend-overlay" />

          </div>

        </motion.div>

        {/* ✨ INTRO CONTENT */}
        <div className="mt-28 max-w-5xl mx-auto text-center">

          <h3 className={`text-4xl text-white ${cinzel.className}`}>
            Wisdom Beyond Words
          </h3>

          <p className={`mt-6 text-white/70 leading-relaxed text-lg ${inter.className}`}>
            Amma’s teachings are not confined to scriptures or spoken words.
            They are lived, experienced, and realized through simplicity, devotion,
            and selfless service. Each teaching invites the seeker to move beyond
            the mind and discover the stillness within.
          </p>

        </div>

        {/* 🧘 QUOTE */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <p className="text-white italic text-2xl leading-relaxed">
            “When the mind becomes silent, the soul begins to speak.”
          </p>

          <p className="mt-4 text-[#CFA95F] text-sm">
            — Divine Wisdom
          </p>
        </div>

        {/* ✨ TEACHINGS GRID */}
{/* ✨ NEXT LEVEL TEACHING CARDS */}
<div className="mt-24 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

  {[
    {
      title: "Simplicity in Life",
      desc: "True peace begins when desires are reduced. Living simply allows the mind to remain calm and focused on what truly matters.",
      icon: "🪔",
    },
    {
      title: "Compassion in Action",
      desc: "Spirituality is not isolation — it is service. Helping others with kindness and humility is the highest form of devotion.",
      icon: "🤲",
    },
    {
      title: "Inner Stillness",
      desc: "Silence is not the absence of sound, but the absence of disturbance within. In stillness, one connects with the divine.",
      icon: "🧘",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.2, duration: 0.8 }}
      whileHover={{ y: -10 }}
      className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-[#CFA95F]/40 via-transparent to-[#CFA95F]/30"
    >

      {/* 🧊 INNER CARD */}
      <div className="relative h-full p-8 rounded-[2rem] bg-[#0B0B1E]/80 backdrop-blur-xl border border-white/10 overflow-hidden">

        {/* ✨ Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* 🌟 Light Spot */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#CFA95F]/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />

        {/* 🔶 ICON */}
        <div className="text-3xl mb-6">
          {item.icon}
        </div>

        {/* 🧠 TITLE */}
        <h3 className="text-white text-xl font-semibold">
          {item.title}
        </h3>

        {/* 📜 DESCRIPTION */}
        <p className="text-white/60 mt-4 leading-relaxed">
          {item.desc}
        </p>

      </div>

    </motion.div>
  ))}

</div>

        {/* 🌟 FINAL REFLECTION */}
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