// // "use client";

// // import { motion } from "framer-motion";
// // import { cinzel, inter } from "@/app/fonts";
// // import { sacredImages } from "@/lib/content";

// // const points = [
// //   "One Mother, One Race",
// //   "A Siddhar Peedam with a broader spiritual identity",
// //   "Women given visible prominence in worship",
// //   "Devotional participation beyond priestly restriction",
// // ];

// // export default function Uniqueness() {
// //   return (
// //     <section id="uniqueness" data-section className="relative overflow-hidden bg-[#0B0B1E] py-36">
// //       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

// //       <div className="relative z-10 mx-auto max-w-7xl px-6">
// //         <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr]">
// //           <motion.div
// //             initial={{ opacity: 0, y: 24 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true, amount: 0.2 }}
// //             transition={{ duration: 0.7 }}
// //             className="relative overflow-hidden rounded-[3rem] border border-white/10"
// //           >
// //             <img
// //               src={sacredImages.procession}
// //               alt="Devotees in procession"
// //               className="h-full min-h-[34rem] w-full object-cover"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B1E]/92 via-[#0B0B1E]/58 to-transparent" />
// //             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

// //             <div className="relative z-10 flex h-full max-w-2xl flex-col justify-end p-8 md:p-12">
// //               <p className="text-xs uppercase tracking-[0.42em] text-[#CFA95F]">Uniqueness</p>
// //               <h2 className={`mt-6 text-5xl leading-[1.02] text-white md:text-6xl ${cinzel.className}`}>
// //                 "One Mother.
// //                 <span className="block text-[#F2D08D]">One Race."</span>
// //               </h2>
// //               <p className={`mt-6 text-lg leading-relaxed text-white/74 ${inter.className}`}>
// //                 The distinctiveness of Bangaru Adigalar's world was not only theological. It was
// //                 visible in the way inclusion, public worship, and women-centered participation were
// //                 brought into the identity of the Peedam itself.
// //               </p>
// //             </div>
// //           </motion.div>

// //           <div className="flex flex-col justify-center gap-6">
// //             {points.map((point, index) => (
// //               <motion.div
// //                 key={point}
// //                 initial={{ opacity: 0, x: 24 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 viewport={{ once: true, amount: 0.2 }}
// //                 transition={{ delay: index * 0.08, duration: 0.6 }}
// //                 className="border-b border-white/10 pb-6"
// //               >
// //                 <p className="text-sm uppercase tracking-[0.28em] text-[#CFA95F]/75">
// //                   Distinctive Feature {index + 1}
// //                 </p>
// //                 <p className={`mt-3 text-3xl leading-tight text-white ${cinzel.className}`}>{point}</p>
// //               </motion.div>
// //             ))}

// //             <motion.div
// //               initial={{ opacity: 0, y: 24 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true, amount: 0.2 }}
// //               transition={{ delay: 0.25, duration: 0.65 }}
// //               className="mt-2 rounded-[2rem] border border-[#CFA95F]/14 bg-[#111126]/70 p-6 backdrop-blur-sm"
// //             >
// //               <p className={`text-white/68 leading-relaxed ${inter.className}`}>
// //                 This is why the section is more effective as a bold image-led statement wall rather
// //                 than another row of premium cards. The message should feel declarative and
// //                 unmistakable.
// //               </p>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { cinzel, inter } from "@/app/fonts";
// import { sacredImages } from "@/lib/content";

// const points = [
//   "One Mother, One Race",
//   "A Siddhar Peedam with a broader spiritual identity",
//   "Women given visible prominence in worship",
//   "Devotional participation beyond priestly restriction",
// ];

// const easePremium = [0.16, 1, 0.3, 1];

// export default function Uniqueness() {
//   return (
//     <section id="uniqueness" data-section className="relative bg-[#05050A] py-32">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0A0A10] border border-white/10 group">

//           <div className="absolute inset-0 z-0">
//             <img src={sacredImages.procession} alt="Devotees" className="w-full h-full object-cover opacity-40 transition-transform duration-[2s] group-hover:scale-105" />
//             <div className="absolute inset-0 bg-gradient-to-r from-[#05050A] via-[#05050A]/80 to-transparent" />
//           </div>

//           <div className="relative z-10 grid lg:grid-cols-2 gap-16 p-10 lg:p-20 items-center">

//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, ease: easePremium }}
//             >
//               <p className="text-xs uppercase tracking-[0.42em] text-[#CFA95F] mb-6">Uniqueness</p>
//               <h2 className={`text-6xl lg:text-7xl leading-[1.1] text-white ${cinzel.className}`}>
//                 "One Mother.<br />
//                 <span className="text-[#F2D08D] italic">One Race."</span>
//               </h2>
//               <p className={`mt-8 text-lg text-white/74 leading-relaxed max-w-md ${inter.className}`}>
//                 The distinctiveness of Bangaru Adigalar's world was not only theological. It was visible in the way inclusion, public worship, and women-centered participation were brought into the identity of the Peedam itself.
//               </p>
//             </motion.div>

//             <div className="flex flex-col gap-6">
//               {points.map((point, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: easePremium }}
//                   className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md"
//                 >
//                   <p className="text-[10px] uppercase tracking-[0.2em] text-[#CFA95F]/75 whitespace-nowrap">Feature {index + 1}</p>
//                   <div className="w-[1px] h-8 bg-white/10" />
//                   <p className={`text-xl text-white ${cinzel.className}`}>{point}</p>
//                 </motion.div>
//               ))}

//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.6, duration: 0.65 }}
//                 className="mt-6 rounded-[2rem] border border-[#CFA95F]/14 bg-[#111126]/70 p-6 backdrop-blur-sm"
//               >
//                 <p className={`text-sm text-white/68 leading-relaxed ${inter.className}`}>
//                   This is why the section is more effective as a bold image-led statement wall rather than another row of premium cards. The message should feel declarative and unmistakable.
//                 </p>
//               </motion.div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { cinzel, inter } from "@/app/fonts";
import { sacredImages } from "@/lib/content";

const points = [
  "One Mother, One Race",
  "A Siddhar Peedam with a broader spiritual identity",
  "Women given visible prominence in worship",
  "Devotional participation beyond priestly restriction",
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Uniqueness() {
  return (
    <section
      id="uniqueness"
      data-section
      className="relative isolate overflow-hidden bg-[#07141a] py-28 text-white sm:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#07141a_0%,_#0b1d2a_32%,_#10283a_68%,_#08131c_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.16),_transparent_30%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:96px_96px]" />

      <motion.div
        className="absolute left-[-8%] top-[10%] h-[320px] w-[320px] rounded-full bg-[#22d3ee]/12 blur-[140px]"
        animate={{ x: [0, 18, -8, 0], y: [0, -16, 8, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[#a78bfa]/14 blur-[150px]"
        animate={{ x: [0, -20, 8, 0], y: [0, 18, -8, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/[0.05] shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
          >
            <motion.img
              variants={reveal}
              src={sacredImages.procession}
              alt="Devotees"
              className="absolute inset-0 h-full w-full object-cover"
              animate={{ scale: [1.02, 1.07, 1.02] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,20,26,0.96)_0%,rgba(7,20,26,0.82)_38%,rgba(7,20,26,0.45)_68%,rgba(7,20,26,0.72)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.14),_transparent_30%)]" />

            <div className="relative z-10 flex h-full min-h-[42rem] flex-col justify-between p-8 sm:p-10 lg:p-12">
              <motion.div variants={reveal}>
                <div
                  className={`inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/8 px-5 py-2 text-[11px] uppercase tracking-[0.34em] text-[#9cfce5] backdrop-blur-xl ${inter.className}`}
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
                  Uniqueness
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="max-w-3xl"
              >
                <h2
                  className={`text-5xl leading-[1.02] text-white sm:text-6xl lg:text-[5rem] ${cinzel.className}`}
                >
                  "One Mother.
                  <span className="mt-2 block bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_30%,#34d399_65%,#c084fc_100%)] bg-clip-text text-transparent">
                    One Race."
                  </span>
                </h2>

                <p
                  className={`mt-8 max-w-2xl text-base leading-8 text-white/74 sm:text-lg ${inter.className}`}
                >
                  The distinctiveness of Bangaru Adigalar&apos;s world was not only theological. It was
                  visible in the way inclusion, public worship, and women-centered participation were
                  brought into the identity of the Peedam itself.
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="grid gap-4 sm:grid-cols-2"
              >
                <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-xl">
                  <div className={`text-[11px] uppercase tracking-[0.26em] text-cyan-300 ${inter.className}`}>
                    Inclusive Faith
                  </div>
                  <div className={`mt-3 text-lg text-white ${cinzel.className}`}>
                    Public worship with a larger spiritual identity
                  </div>
                </div>

                <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(52,211,153,0.08),rgba(192,132,252,0.12))] p-5 backdrop-blur-xl">
                  <div className={`text-[11px] uppercase tracking-[0.26em] text-violet-300 ${inter.className}`}>
                    Visible Change
                  </div>
                  <div className={`mt-3 text-lg text-white ${cinzel.className}`}>
                    Participation made unmistakable in ritual life
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-col gap-5"
          >
            {points.map((point, index) => (
              <motion.div
                key={point}
                variants={reveal}
                whileHover={{ x: 6, y: -4 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-6 shadow-[0_20px_48px_rgba(0,0,0,0.2)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_40%,rgba(192,132,252,0.1)_100%)] opacity-80" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <motion.div
                  className="absolute inset-y-0 left-[-35%] w-[28%] -skew-x-12 bg-gradient-to-r from-transparent via-white/16 to-transparent"
                  animate={{ x: ["0%", "290%"] }}
                  transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 2.6, ease: "easeInOut" }}
                />

                <div className="relative z-10 flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(52,211,153,0.18),rgba(192,132,252,0.22))] ring-1 ring-white/10">
                    <span className={`text-[11px] uppercase tracking-[0.2em] text-white/90 ${inter.className}`}>
                      {index + 1}
                    </span>
                  </div>

                  <div>
                    <div className={`text-[11px] uppercase tracking-[0.28em] text-[#9cfce5] ${inter.className}`}>
                      Distinctive Feature {index + 1}
                    </div>
                    <p className={`mt-3 text-2xl leading-tight text-white ${cinzel.className}`}>
                      {point}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={reveal}
              className="relative overflow-hidden rounded-[2rem] border border-cyan-300/12 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(255,255,255,0.04),rgba(192,132,252,0.1))] p-6 shadow-[0_22px_52px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.12),_transparent_36%)]" />
              <div className="relative z-10">
                <div className={`text-[11px] uppercase tracking-[0.28em] text-cyan-300 ${inter.className}`}>
                  Section Insight
                </div>
                <p className={`mt-4 text-sm leading-7 text-white/72 ${inter.className}`}>
                  This is why the section is more effective as a bold image-led statement wall rather
                  than another row of premium cards. The message should feel declarative and
                  unmistakable.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
