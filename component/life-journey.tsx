// // "use client";

// // import { motion } from "framer-motion";
// // import { cinzel, inter } from "@/app/fonts";

// // const milestones = [
// //   {
// //     year: "1941",
// //     title: "Born in Melmaruvathur",
// //     text: "Born on March 3, 1941, Bangaru Adigalar remained inseparable from Melmaruvathur, the town that later became the center of his spiritual and public legacy.",
// //   },
// //   {
// //     year: "1966",
// //     title: "Sacred site revelation",
// //     text: "The Peedam history ties November 28, 1966 to the Swayambu emergence beneath the neem tree and snake mound, marking the site as spiritually significant.",
// //   },
// //   {
// //     year: "1971",
// //     title: "First oracle",
// //     text: "Official history presents 1971 as the moment when the first oracle came through him, linking Bangaru Adigalar directly to the unfolding Adhiparasakthi mission.",
// //   },
// //   {
// //     year: "1977",
// //     title: "Idol installation",
// //     text: "On November 25, 1977, the idol of Mother Adhiparasakthi was installed, giving a lasting visible identity to the spiritual center at Melmaruvathur.",
// //   },
// //   {
// //     year: "2023",
// //     title: "Legacy beyond lifetime",
// //     text: "After October 19, 2023, his name continued to define the movement through worship, institutions, public memory, and service networks built over decades.",
// //   },
// // ];

// // export default function LifeJourney() {
// //   return (
// //     <section id="journey" data-section className="relative overflow-hidden bg-[#0B0B1E] py-36">
// //       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#12122d] to-[#0B0B1E]" />
// //       <div className="absolute left-1/2 top-28 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#CFA95F]/8 blur-[160px]" />

// //       <div className="relative z-10 mx-auto max-w-7xl px-6">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.2 }}
// //           transition={{ duration: 0.7 }}
// //           className="max-w-3xl"
// //         >
// //           <p className="text-xs uppercase tracking-[0.42em] text-[#CFA95F]">Life Journey</p>
// //           <h2 className={`mt-6 text-5xl leading-tight text-white md:text-6xl ${cinzel.className}`}>
// //             A quieter timeline of
// //             <span className="block text-[#CFA95F]">formation and legacy</span>
// //           </h2>
// //           <p className={`mt-6 text-lg leading-relaxed text-white/68 ${inter.className}`}>
// //             The page works better when his life is told with restraint. This section focuses on a
// //             few pivotal moments instead of forcing too much decoration around them.
// //           </p>
// //         </motion.div>

// //         <div className="mt-20">
// //           <div className="hidden lg:block h-px w-full bg-gradient-to-r from-transparent via-[#CFA95F]/35 to-transparent" />

// //           <div className="mt-10 grid gap-6 lg:grid-cols-5">
// //             {milestones.map((item, index) => (
// //               <motion.article
// //                 key={item.year}
// //                 initial={{ opacity: 0, y: 34 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, amount: 0.2 }}
// //                 transition={{ delay: index * 0.08, duration: 0.65 }}
// //                 className="relative"
// //               >
// //                 <div className="mb-6 hidden lg:flex items-center justify-start">
// //                   <div className="h-3 w-3 rounded-full bg-[#CFA95F]" />
// //                 </div>
// //                 <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:border-[#CFA95F]/20 hover:bg-white/[0.05]">
// //                   <p className="text-xs uppercase tracking-[0.3em] text-[#CFA95F]/80">{item.year}</p>
// //                   <h3 className={`mt-4 text-2xl leading-tight text-white ${cinzel.className}`}>
// //                     {item.title}
// //                   </h3>
// //                   <p className={`mt-4 text-sm leading-7 text-white/62 ${inter.className}`}>
// //                     {item.text}
// //                   </p>
// //                 </div>
// //               </motion.article>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { cinzel, inter } from "@/app/fonts";

// const milestones = [
//   { year: "1941", title: "Born in Melmaruvathur", text: "Born on March 3, 1941, Bangaru Adigalar remained inseparable from Melmaruvathur, the town that later became the center of his spiritual and public legacy." },
//   { year: "1966", title: "Sacred site revelation", text: "The Peedam history ties November 28, 1966 to the Swayambu emergence beneath the neem tree and snake mound, marking the site as spiritually significant." },
//   { year: "1971", title: "First oracle", text: "Official history presents 1971 as the moment when the first oracle came through him, linking Bangaru Adigalar directly to the unfolding Adhiparasakthi mission." },
//   { year: "1977", title: "Idol installation", text: "On November 25, 1977, the idol of Mother Adhiparasakthi was installed, giving a lasting visible identity to the spiritual center at Melmaruvathur." },
//   { year: "2023", title: "Legacy beyond lifetime", text: "After October 19, 2023, his name continued to define the movement through worship, institutions, public memory, and service networks built over decades." },
// ];

// const easePremium = [0.16, 1, 0.3, 1];

// export default function LifeJourney() {
//   return (
//     <section id="journey" data-section className="relative bg-[#020205] py-32 px-6 overflow-hidden">
      
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <div className="w-[800px] h-[800px] bg-[#CFA95F]/5 rounded-full blur-[120px]" />
//       </div>

//       <div className="relative z-10 max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: easePremium }}
//           className="text-center max-w-3xl mx-auto mb-24"
//         >
//           <p className="text-xs uppercase tracking-[0.42em] text-[#CFA95F]">Life Journey</p>
//           <h2 className={`mt-6 text-5xl md:text-6xl text-white ${cinzel.className}`}>
//             A quieter timeline of <span className="block text-[#CFA95F]">formation and legacy</span>
//           </h2>
//           <p className={`mt-6 text-lg text-white/68 leading-relaxed ${inter.className}`}>
//             The page works better when his life is told with restraint. This section focuses on a few pivotal moments instead of forcing too much decoration around them.
//           </p>
//         </motion.div>

//         <div className="relative">
//           <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />
          
//           <div className="flex flex-col gap-12 md:gap-24">
//             {milestones.map((item, index) => {
//               const isEven = index % 2 === 0;
//               return (
//                 <motion.div
//                   key={item.year}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-10%" }}
//                   transition={{ duration: 0.8, ease: easePremium }}
//                   className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
//                 >
//                   <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-[#CFA95F] rounded-full -translate-x-1/2 shadow-[0_0_20px_rgba(207,169,95,0.6)] z-10 mt-6 md:mt-0" />

//                   <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-20 text-left md:text-right' : 'md:pl-20 text-left'}`}>
//                     <span className="text-[#CFA95F] text-sm tracking-[0.3em] uppercase">{item.year}</span>
//                     <h3 className={`mt-3 text-3xl text-white ${cinzel.className}`}>{item.title}</h3>
//                     <p className={`mt-4 text-white/50 leading-relaxed ${inter.className}`}>
//                       {item.text}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { cinzel, inter } from "@/app/fonts";

const milestones = [
  {
    year: "1941",
    title: "Born in Melmaruvathur",
    text: "Born on March 3, 1941, Bangaru Adigalar remained inseparable from Melmaruvathur, the town that later became the center of his spiritual and public legacy.",
  },
  {
    year: "1966",
    title: "Sacred site revelation",
    text: "The Peedam history ties November 28, 1966 to the Swayambu emergence beneath the neem tree and snake mound, marking the site as spiritually significant.",
  },
  {
    year: "1971",
    title: "First oracle",
    text: "Official history presents 1971 as the moment when the first oracle came through him, linking Bangaru Adigalar directly to the unfolding Adhiparasakthi mission.",
  },
  {
    year: "1977",
    title: "Idol installation",
    text: "On November 25, 1977, the idol of Mother Adhiparasakthi was installed, giving a lasting visible identity to the spiritual center at Melmaruvathur.",
  },
  {
    year: "2023",
    title: "Legacy beyond lifetime",
    text: "After October 19, 2023, his name continued to define the movement through worship, institutions, public memory, and service networks built over decades.",
  },
];

import { Variants } from "framer-motion";

const reveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const, // ✅ FIX
    },
  },
};

const floatSlow: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear" as const, // ✅ FIX
    },
  },
};

export default function LifeJourney() {
  return (
    <section
      id="journey"
      data-section
      className="relative isolate overflow-hidden bg-[#07141a] px-6 py-28 text-white sm:px-8 sm:py-32 lg:px-10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#07141a_0%,_#0b1f2d_34%,_#112d40_68%,_#08131c_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.16),_transparent_30%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:92px_92px]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.03] to-transparent" />

      <motion.div
        className="absolute left-[-8%] top-[10%] h-[320px] w-[320px] rounded-full bg-[#22d3ee]/12 blur-[140px]"
        animate={{ x: [0, 18, -8, 0], y: [0, -18, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[#a78bfa]/14 blur-[150px]"
        animate={{ x: [0, -20, 8, 0], y: [0, 18, -8, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
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
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={reveal}
            className={`inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/8 px-5 py-2 text-[11px] uppercase tracking-[0.34em] text-[#9cfce5] backdrop-blur-xl ${inter.className}`}
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
            Life Journey
          </motion.p>

          <motion.h2
            variants={reveal}
            className={`mt-6 text-5xl leading-[1.04] text-white sm:text-6xl lg:text-[4.8rem] ${cinzel.className}`}
          >
            A sacred timeline of{" "}
            <span className="bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_30%,#34d399_65%,#c084fc_100%)] bg-clip-text text-transparent">
              formation and legacy
            </span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className={`mx-auto mt-7 max-w-3xl text-base leading-8 text-white/72 sm:text-lg ${inter.className}`}
          >
            The page works better when his life is told with restraint. This
            section focuses on a few pivotal moments instead of forcing too much
            decoration around them.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm text-white/80 backdrop-blur-xl">
              Spiritual Milestones
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm text-white/80 backdrop-blur-xl">
              Sacred Legacy
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm text-white/80 backdrop-blur-xl">
              Lifelong Service
            </div>
          </motion.div>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/18 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="absolute left-6 top-10 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/35 to-violet-300/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">
            {milestones.map((item, index) => {
              const rightSide = index % 2 !== 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid items-center gap-6 md:grid-cols-2"
                >
                  <div
                    className={`hidden md:block ${rightSide ? "order-1" : "order-2"}`}
                  />

                  <div
                    className={`relative pl-16 md:pl-0 ${
                      rightSide
                        ? "md:order-2 md:pl-12"
                        : "md:order-1 md:pr-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="group relative"
                    >
                      <div className="absolute -inset-[1px] rounded-[2rem] bg-[linear-gradient(135deg,rgba(34,211,238,0.26),rgba(52,211,153,0.12),rgba(192,132,252,0.22))] opacity-70 blur-[2px]" />
                      <motion.div
                        variants={floatSlow}
                        animate="animate"
                        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-6 shadow-[0_22px_52px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_38%,rgba(192,132,252,0.1)_100%)] opacity-80" />
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                        <motion.div
                          className="absolute inset-y-0 left-[-35%] w-[32%] -skew-x-12 bg-gradient-to-r from-transparent via-white/16 to-transparent"
                          animate={{ x: ["0%", "270%"] }}
                          transition={{ duration: 4.6, repeat: Infinity, repeatDelay: 2.8, ease: "easeInOut" }}
                        />

                        <div className="relative z-10">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(52,211,153,0.18),rgba(192,132,252,0.22))] ring-1 ring-white/10">
                              <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.75)]" />
                            </div>
                            <span
                              className={`rounded-full border border-cyan-300/20 bg-white/6 px-3 py-1.5 text-[11px] uppercase tracking-[0.32em] text-[#9cfce5] ${inter.className}`}
                            >
                              {item.year}
                            </span>
                          </div>

                          <h3
                            className={`mt-5 text-2xl leading-tight text-white sm:text-[1.9rem] ${cinzel.className}`}
                          >
                            {item.title}
                          </h3>

                          <p
                            className={`mt-4 max-w-xl text-sm leading-7 text-white/68 sm:text-[15px] ${inter.className}`}
                          >
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="absolute left-6 top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.7)] md:left-auto md:right-[-2.45rem] md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2"
                      animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
                    />
                    {!rightSide && (
                      <div className="hidden md:block absolute right-[-2.45rem] top-1/2 h-px w-12 -translate-y-1/2 bg-gradient-to-r from-cyan-300/60 to-transparent" />
                    )}
                    {rightSide && (
                      <div className="hidden md:block absolute left-[-2.45rem] top-1/2 h-px w-12 -translate-y-1/2 bg-gradient-to-l from-cyan-300/60 to-transparent" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
