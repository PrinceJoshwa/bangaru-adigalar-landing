
// // "use client";

// // import { motion } from "framer-motion";
// // import { about } from "@/lib/content";
// // import { cinzel, inter } from "@/app/fonts";

// // export default function About() {
// //   return (
// //     <section className="relative py-32 overflow-hidden">

// //       {/* Glow */}
// //       <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

// //       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

// //         {/* Image */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -60 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           className="relative"
// //         >
// //           <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

// //           <img
// //             src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939324/bangaru_rok3vv.jpg"
// //             className="relative rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
// //           />
// //         </motion.div>

// //         {/* Content */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 60 }}
// //           animate={{ opacity: 1, x: 0 }}
// //         >
// //           <h2 className={`text-5xl text-white ${cinzel.className}`}>
// //             Who is Amma?
// //           </h2>

// //           <p className={`mt-6 text-white/70 ${inter.className}`}>
// //             {about.intro}
// //           </p>

// //           <div className="mt-10 grid gap-6">
// //             {about.highlights.map((item) => (
// //               <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition">
// //                 <h3 className="text-white text-xl">{item.title}</h3>
// //                 <p className="text-white/60 mt-2">{item.text}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { about } from "@/lib/content";
// import { cinzel, inter } from "@/app/fonts";

// export default function About() {
//   return (
//     <section id="about" data-section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

//       {/* 🌌 Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

//       {/* ✨ Golden Glow */}
//       <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#CFA95F]/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

//         {/* 🖼️ IMAGE SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2 }}
//           className="relative flex justify-center items-center"
//         >

//           {/* 🌟 BACK LIGHT */}
//           <div className="absolute w-[550px] h-[550px] bg-[#CFA95F]/10 blur-[160px] rounded-full" />

//           {/* 🔶 HALO RINGS */}
//           <div className="absolute w-[480px] h-[480px] rounded-full border border-[#CFA95F]/30" />
//           <div className="absolute w-[420px] h-[420px] rounded-full border border-[#CFA95F]/20" />

//           {/* ✨ FRONT GLOW */}
//           <div className="absolute w-[420px] h-[420px] bg-[#CFA95F]/10 blur-[80px] rounded-full" />

//           {/* 🖼️ IMAGE */}
//           <div className="relative w-[380px] h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.7)]">

//             <img
//               src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939324/bangaru_rok3vv.jpg"
//               alt="Amma"
//               className="w-full h-full object-cover scale-105"
//             />

//             {/* Depth */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//             {/* Golden shine */}
//             <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/10 via-transparent to-transparent mix-blend-overlay" />

//           </div>

//         </motion.div>

//         {/* ✨ CONTENT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.2 }}
//         >

//           {/* Tag */}
//           <p className="text-[#CFA95F] tracking-[0.35em] text-xs uppercase mb-4">
//             About Amma
//           </p>

//           {/* Title */}
//           <h2 className={`text-5xl md:text-6xl text-white ${cinzel.className}`}>
//             Who is{" "}
//             <span className="text-[#CFA95F]">Amma</span>?
//           </h2>

//           {/* Intro */}
//           <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
//             {about.intro}
//           </p>

//           {/* 🔥 HIGHLIGHTS */}
//           <div className="mt-12 space-y-6">

//             {about.highlights.map((item, i) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.2 }}
//                 className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-[#CFA95F]/40 via-transparent to-[#CFA95F]/30"
//               >

//                 {/* INNER CARD */}
//                 <div className="p-6 rounded-2xl bg-[#0B0B1E]/80 backdrop-blur-xl border border-white/10">

//                   {/* Hover glow */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#CFA95F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition rounded-2xl" />

//                   <h3 className="text-white text-xl">{item.title}</h3>
//                   <p className="text-white/60 mt-2">{item.text}</p>

//                 </div>

//               </motion.div>
//             ))}

//           </div>

//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { cinzel, inter } from "@/app/fonts";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      data-section
      className="relative overflow-hidden bg-[#07141a] py-28 text-white sm:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#08131a_0%,_#0c1f2d_35%,_#112d40_68%,_#08131c_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.18),_transparent_30%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:92px_92px]" />

      <motion.div
        className="absolute left-[-8%] top-[12%] h-[300px] w-[300px] rounded-full bg-[#34d399]/16 blur-[130px]"
        animate={{ x: [0, 18, -8, 0], y: [0, -16, 8, 0], scale: [1, 1.06, 0.98, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-6%] h-[360px] w-[360px] rounded-full bg-[#a78bfa]/16 blur-[150px]"
        animate={{ x: [0, -18, 10, 0], y: [0, 16, -8, 0], scale: [1, 0.97, 1.04, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(390px,500px)_minmax(0,1fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            <div className="absolute inset-[-24px] rounded-[2.8rem] bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(52,211,153,0.14),rgba(192,132,252,0.14))] blur-3xl" />

            <motion.div
              className="absolute -top-6 -left-6 h-24 w-24 rounded-full border border-white/10 bg-white/6 backdrop-blur-xl"
              animate={{ y: [0, -8, 0], rotate: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full border border-cyan-300/20 bg-cyan-300/10 backdrop-blur-xl"
              animate={{ y: [0, 10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="rounded-[2.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05))] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
                <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#10202a]">
                  <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5">
                    <div className={`rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#8ef2dd] backdrop-blur-md ${inter.className}`}>
                      About Amma
                    </div>
                    <div className={`rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/92 backdrop-blur-md ${inter.className}`}>
                      Divine Presence
                    </div>
                  </div>

                  <div className="absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-cyan-200/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-black/72 via-black/20 to-transparent" />

                  <motion.img
                    src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939324/bangaru_rok3vv.jpg"
                    alt="Amma"
                    className="h-[580px] w-full object-cover"
                    animate={{ scale: [1.03, 1.06, 1.03] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.12)_0%,transparent_34%,transparent_66%,rgba(192,132,252,0.16)_100%)]" />
                  <motion.div
                    className="absolute inset-y-0 left-[-32%] w-[36%] -skew-x-12 bg-gradient-to-r from-transparent via-white/28 to-transparent"
                    animate={{ x: ["0%", "250%"] }}
                    transition={{ duration: 4.2, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
                  />

                  <div className="absolute inset-x-6 bottom-6 z-30 rounded-[1.5rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] px-5 py-5 backdrop-blur-xl">
                    <div className={`text-[11px] uppercase tracking-[0.28em] text-white/72 ${inter.className}`}>
                      Spiritual Journey
                    </div>
                    <div className={`mt-3 text-2xl leading-tight text-white ${cinzel.className}`}>
                      Grace, Wisdom,
                      <br />
                      Universal Love
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <motion.p
              variants={fadeUp}
              className={`text-[11px] uppercase tracking-[0.34em] text-[#9cfce5] ${inter.className}`}
            >
              About Amma
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className={`mt-5 text-5xl leading-[1.04] text-white sm:text-6xl ${cinzel.className}`}
            >
              Who is{" "}
              <span className="bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_30%,#34d399_65%,#c084fc_100%)] bg-clip-text text-transparent">
                Amma
              </span>
              ?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className={`mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg ${inter.className}`}
            >
              {about.intro}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <div className="rounded-full border border-emerald-300/20 bg-white/8 px-5 py-3 text-sm text-white/80 backdrop-blur-xl">
                Spiritual Legacy
              </div>
              <div className="rounded-full border border-cyan-300/20 bg-white/8 px-5 py-3 text-sm text-white/80 backdrop-blur-xl">
                Compassionate Guidance
              </div>
            </motion.div>

            <div className="mt-12 grid gap-5">
              {about.highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.75,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_48px_rgba(0,0,0,0.2)] backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_38%,rgba(192,132,252,0.1)_100%)] opacity-70" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex gap-4">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(52,211,153,0.18),rgba(192,132,252,0.22))] ring-1 ring-white/10">
                      <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.75)]" />
                    </div>

                    <div>
                      <h3 className={`text-xl text-white ${cinzel.className}`}>
                        {item.title}
                      </h3>
                      <p className={`mt-2 leading-7 text-white/68 ${inter.className}`}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
