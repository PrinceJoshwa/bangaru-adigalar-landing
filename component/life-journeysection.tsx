// "use client";

// import { motion, Variants } from "framer-motion";
// import { cinzel, inter } from "@/app/fonts";

// const milestones = [
//   {
//     year: "1941",
//     title: "Born in Melmaruvathur",
//     text: "Born on March 3, 1941, Bangaru Adigalar remained inseparable from Melmaruvathur, the town that later became the center of his spiritual and public legacy.",
//   },
//   {
//     year: "1966",
//     title: "Sacred site revelation",
//     text: "The Peedam history ties November 28, 1966 to the Swayambu emergence beneath the neem tree and snake mound, marking the site as spiritually significant.",
//   },
//   {
//     year: "1971",
//     title: "First oracle",
//     text: "Official history presents 1971 as the moment when the first oracle came through him, linking Bangaru Adigalar directly to the unfolding Adhiparasakthi mission.",
//   },
//   {
//     year: "1977",
//     title: "Idol installation",
//     text: "On November 25, 1977, the idol of Mother Adhiparasakthi was installed, giving a lasting visible identity to the spiritual center at Melmaruvathur.",
//   },
//   {
//     year: "2023",
//     title: "Legacy beyond lifetime",
//     text: "After October 19, 2023, his name continued to define the movement through worship, institutions, public memory, and service networks built over decades.",
//   },
// ];

// const reveal: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1] as const,
//     },
//   },
// };

// const floatSlow: Variants = {
//   animate: {
//     y: [0, -10, 0],
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       ease: "linear" as const,
//     },
//   },
// };

// export default function LifeJourney() {
//   return (
//     <section
//       id="journey"
//       data-section
//       className="relative isolate overflow-hidden bg-[#0c111f] px-6 py-28 text-[#f4efe8] sm:px-8 sm:py-32 lg:px-10"
//     >
//       {/* Base Gradient - Matched to Hero/About */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0c111f] via-[#2d1f44] to-[#0c111f]" />
      
//       {/* Divine Auras */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(237,158,111,0.08),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(182,101,112,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(128,70,110,0.12),_transparent_30%)]" />
      
//       {/* Sacred Geometry Grid */}
//       <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      
//       <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#ed9e6f]/[0.02] to-transparent" />

//       {/* Floating Ambient Orbs (Soft Peach and Muted Rose) */}
//       <motion.div
//         className="absolute left-[-8%] top-[10%] h-[320px] w-[320px] rounded-full bg-[#ed9e6f]/10 blur-[140px]"
//         animate={{ x: [0, 18, -8, 0], y: [0, -18, 10, 0] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-[-8%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[#80466e]/20 blur-[150px]"
//         animate={{ x: [0, -20, 8, 0], y: [0, 18, -8, 0] }}
//         transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative z-10 mx-auto max-w-7xl">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.12,
//               },
//             },
//           }}
//           className="mx-auto max-w-4xl text-center"
//         >
//           {/* Section Pill */}
//           <motion.p
//             variants={reveal}
//             className={`inline-flex items-center gap-3 rounded-full border border-[#80466e]/40 bg-[#512f5c]/20 px-5 py-2 text-[11px] uppercase tracking-[0.34em] text-[#b66570] backdrop-blur-xl ${inter.className}`}
//           >
//             <span className="h-2 w-2 rounded-full bg-[#ed9e6f] shadow-[0_0_14px_rgba(237,158,111,0.8)]" />
//             Life Journey
//           </motion.p>

//           {/* Heading */}
//           <motion.h2
//             variants={reveal}
//             className={`mt-6 text-5xl leading-[1.04] text-[#f4efe8] sm:text-6xl lg:text-[4.8rem] ${cinzel.className}`}
//           >
//             A sacred timeline of{" "}
//             <span className="bg-gradient-to-r from-[#ed9e6f] to-[#b66570] bg-clip-text text-transparent">
//               formation and legacy
//             </span>
//           </motion.h2>

//           <motion.p
//             variants={reveal}
//             className={`mx-auto mt-7 max-w-3xl text-base leading-8 text-[#cfc7bc] sm:text-lg ${inter.className}`}
//           >
//             The page works better when his life is told with restraint. This
//             section focuses on a few pivotal moments instead of forcing too much
//             decoration around them.
//           </motion.p>

//           {/* Sub-navigation Pills */}
//           <motion.div
//             variants={reveal}
//             className="mt-10 flex flex-wrap items-center justify-center gap-4"
//           >
//             <div className="rounded-full border border-[#80466e]/30 bg-[#2d1f44]/30 px-5 py-3 text-sm text-[#cfc7bc] backdrop-blur-xl">
//               Spiritual Milestones
//             </div>
//             <div className="rounded-full border border-[#80466e]/30 bg-[#2d1f44]/30 px-5 py-3 text-sm text-[#cfc7bc] backdrop-blur-xl">
//               Sacred Legacy
//             </div>
//             <div className="rounded-full border border-[#80466e]/30 bg-[#2d1f44]/30 px-5 py-3 text-sm text-[#cfc7bc] backdrop-blur-xl">
//               Lifelong Service
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Timeline Core */}
//         <div className="relative mt-20">
//           {/* Vertical Track Base */}
//           <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#80466e]/30 to-transparent md:left-1/2 md:-translate-x-1/2" />
          
//           {/* Vertical Track Highlight */}
//           <div className="absolute left-6 top-10 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-[#ed9e6f]/0 via-[#ed9e6f]/40 to-[#80466e]/0 md:left-1/2 md:-translate-x-1/2" />

//           <div className="space-y-8 md:space-y-10">
//             {milestones.map((item, index) => {
//               const rightSide = index % 2 !== 0;

//               return (
//                 <motion.div
//                   key={item.year}
//                   initial={{ opacity: 0, y: 28 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.2 }}
//                   transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
//                   className="relative grid items-center gap-6 md:grid-cols-2"
//                 >
//                   <div
//                     className={`hidden md:block ${rightSide ? "order-1" : "order-2"}`}
//                   />

//                   <div
//                     className={`relative pl-16 md:pl-0 ${
//                       rightSide
//                         ? "md:order-2 md:pl-12"
//                         : "md:order-1 md:pr-12"
//                     }`}
//                   >
//                     {/* Card Container */}
//                     <motion.div
//                       whileHover={{ y: -6, scale: 1.01 }}
//                       transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//                       className="group relative"
//                     >
//                       {/* Ambient Card Glow (Peach/Rose) */}
//                       <div className="absolute -inset-[1px] rounded-[2rem] bg-[linear-gradient(135deg,rgba(237,158,111,0.2),rgba(182,101,112,0.15),rgba(128,70,110,0.2))] opacity-70 blur-[2px]" />
                      
//                       <motion.div
//                         variants={floatSlow}
//                         animate="animate"
//                         className="relative overflow-hidden rounded-[2rem] border border-[#80466e]/30 bg-[#2d1f44]/40 p-6 shadow-[0_22px_52px_rgba(12,17,31,0.4)] backdrop-blur-2xl"
//                       >
//                         {/* Card Internal Gradient */}
//                         <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(237,158,111,0.05),transparent_38%,rgba(128,70,110,0.1)_100%)] opacity-80" />
                        
//                         {/* Top Edge Hover Highlight */}
//                         <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed9e6f]/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                        
//                         {/* Glass Sweep Animation */}
//                         <motion.div
//                           className="absolute inset-y-0 left-[-35%] w-[32%] -skew-x-12 bg-gradient-to-r from-transparent via-[#ed9e6f]/10 to-transparent"
//                           animate={{ x: ["0%", "270%"] }}
//                           transition={{ duration: 4.6, repeat: Infinity, repeatDelay: 2.8, ease: "easeInOut" }}
//                         />

//                         <div className="relative z-10">
//                           {/* Year Badge & Icon */}
//                           <div className="flex items-center gap-4">
//                             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(237,158,111,0.15),rgba(128,70,110,0.2))] ring-1 ring-[#80466e]/40">
//                               <div className="h-2.5 w-2.5 rounded-full bg-[#ed9e6f] shadow-[0_0_16px_rgba(237,158,111,0.8)]" />
//                             </div>
//                             <span
//                               className={`rounded-full border border-[#80466e]/40 bg-[#80466e]/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.32em] text-[#ed9e6f] ${inter.className}`}
//                             >
//                               {item.year}
//                             </span>
//                           </div>

//                           {/* Title */}
//                           <h3
//                             className={`mt-5 text-2xl leading-tight text-[#f4efe8] sm:text-[1.9rem] ${cinzel.className}`}
//                           >
//                             {item.title}
//                           </h3>

//                           {/* Description */}
//                           <p
//                             className={`mt-4 max-w-xl text-sm leading-7 text-[#cfc7bc] sm:text-[15px] ${inter.className}`}
//                           >
//                             {item.text}
//                           </p>
//                         </div>
//                       </motion.div>
//                     </motion.div>

//                     {/* Central Timeline Dot (The glowing bead on the line) */}
//                     <motion.div
//                       className="absolute left-6 top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[#ed9e6f] shadow-[0_0_20px_rgba(237,158,111,0.8)] md:left-auto md:right-[-2.45rem] md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2"
//                       animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
//                       transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
//                     />
                    
//                     {/* Horizontal Connectors */}
//                     {!rightSide && (
//                       <div className="hidden md:block absolute right-[-2.45rem] top-1/2 h-px w-12 -translate-y-1/2 bg-gradient-to-r from-[#ed9e6f]/60 to-transparent" />
//                     )}
//                     {rightSide && (
//                       <div className="hidden md:block absolute left-[-2.45rem] top-1/2 h-px w-12 -translate-y-1/2 bg-gradient-to-l from-[#ed9e6f]/60 to-transparent" />
//                     )}
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

import { motion, Variants } from "framer-motion";
import { cinzel, inter } from "@/app/fonts";

const milestones = [
  {
    year: "1941",
    title: "The Holy Birth",
    text: "Taking holy birth on March 3, 1941, His Holiness Bangaru Adigalar's life became forever intertwined with Melmaruvathur, the sacred soil that would serve as the epicenter of His divine mission.",
  },
  {
    year: "1966",
    title: "Swayambu Manifestation",
    text: "On the auspicious day of November 28, 1966, a divine Swayambu naturally manifested beneath the holy neem tree and anthill, laying the supreme spiritual foundation of the Siddhar Peetam.",
  },
  {
    year: "1971",
    title: "The First Arulvaakku",
    text: "In 1971, Amma bestowed His first divine oracle (Arulvaakku), marking the auspicious commencement of His lifelong mission to directly guide and uplift lakhs of devotees seeking His blessings.",
  },
  {
    year: "1977",
    title: "Holy Consecration",
    text: "On November 25, 1977, the holy idol of Divine Mother Adhiparasakthi was formally consecrated, establishing the visible spiritual heart of the Melmaruvathur holy shrine.",
  },
  {
    year: "2023",
    title: "An Eternal Legacy",
    text: "Having attained Mahasamadhi on October 19, 2023, Amma's divine legacy continues to eternally inspire a global movement of steadfast devotion, educational upliftment, and selfless service to mankind.",
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const floatSlow: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear" as const,
    },
  },
};

export default function LifeJourney() {
  return (
    <section
      id="journey"
      data-section
      className="relative isolate overflow-hidden bg-[#0c111f] px-6 py-28 text-[#f4efe8] sm:px-8 sm:py-32 lg:px-10"
    >
      {/* Base Midnight Blue / Purple Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c111f] via-[#2d1f44] to-[#0c111f]" />
      
      {/* Divine Auras (Peach and Muted Rose) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(237,158,111,0.08),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(182,101,112,0.08),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(128,70,110,0.12),_transparent_30%)]" />
      
      {/* Sacred Geometry Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#ed9e6f]/[0.02] to-transparent" />

      {/* Floating Ambient Orbs */}
      <motion.div
        className="absolute left-[-8%] top-[10%] h-[320px] w-[320px] rounded-full bg-[#ed9e6f]/10 blur-[140px]"
        animate={{ x: [0, 18, -8, 0], y: [0, -18, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[#80466e]/20 blur-[150px]"
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
            className={`inline-flex items-center gap-3 rounded-full border border-[#80466e]/40 bg-[#512f5c]/20 px-5 py-2 text-[11px] uppercase tracking-[0.34em] text-[#b66570] backdrop-blur-xl ${inter.className}`}
          >
            <span className="h-2 w-2 rounded-full bg-[#ed9e6f] shadow-[0_0_14px_rgba(237,158,111,0.8)]" />
            Divine Journey
          </motion.p>

          <motion.h2
            variants={reveal}
            className={`mt-6 text-5xl leading-[1.04] text-[#f4efe8] sm:text-6xl lg:text-[4.8rem] ${cinzel.className}`}
          >
            The sacred timeline of{" "}
            <span className="bg-gradient-to-r from-[#ed9e6f] to-[#b66570] bg-clip-text text-transparent">
              His divine journey
            </span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className={`mx-auto mt-7 max-w-3xl text-base leading-8 text-[#cfc7bc] sm:text-lg ${inter.className}`}
          >
            Reflecting upon the auspicious milestones that shaped Amma's profound spiritual journey, offering divine guidance to crores of devotees through boundless compassion and the establishment of the Holy Adhiparasakthi Siddhar Peetam.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="rounded-full border border-[#80466e]/30 bg-[#2d1f44]/30 px-5 py-3 text-sm text-[#cfc7bc] backdrop-blur-xl">
              Spiritual Milestones
            </div>
            <div className="rounded-full border border-[#80466e]/30 bg-[#2d1f44]/30 px-5 py-3 text-sm text-[#cfc7bc] backdrop-blur-xl">
              Sacred Legacy
            </div>
            <div className="rounded-full border border-[#80466e]/30 bg-[#2d1f44]/30 px-5 py-3 text-sm text-[#cfc7bc] backdrop-blur-xl">
              Service to Mankind
            </div>
          </motion.div>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#80466e]/30 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="absolute left-6 top-10 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-[#ed9e6f]/0 via-[#ed9e6f]/40 to-[#80466e]/0 md:left-1/2 md:-translate-x-1/2" />

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
                  <div className={`hidden md:block ${rightSide ? "order-1" : "order-2"}`} />

                  <div className={`relative pl-16 md:pl-0 ${rightSide ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12"}`}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="group relative"
                    >
                      <div className="absolute -inset-[1px] rounded-[2rem] bg-[linear-gradient(135deg,rgba(237,158,111,0.2),rgba(182,101,112,0.15),rgba(128,70,110,0.2))] opacity-70 blur-[2px]" />
                      <motion.div
                        variants={floatSlow}
                        animate="animate"
                        className="relative overflow-hidden rounded-[2rem] border border-[#80466e]/30 bg-[#2d1f44]/40 p-6 shadow-[0_22px_52px_rgba(12,17,31,0.4)] backdrop-blur-2xl"
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(237,158,111,0.05),transparent_38%,rgba(128,70,110,0.1)_100%)] opacity-80" />
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ed9e6f]/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                        <motion.div
                          className="absolute inset-y-0 left-[-35%] w-[32%] -skew-x-12 bg-gradient-to-r from-transparent via-[#ed9e6f]/10 to-transparent"
                          animate={{ x: ["0%", "270%"] }}
                          transition={{ duration: 4.6, repeat: Infinity, repeatDelay: 2.8, ease: "easeInOut" }}
                        />

                        <div className="relative z-10">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(237,158,111,0.15),rgba(128,70,110,0.2))] ring-1 ring-[#80466e]/40">
                              <div className="h-2.5 w-2.5 rounded-full bg-[#ed9e6f] shadow-[0_0_16px_rgba(237,158,111,0.8)]" />
                            </div>
                            <span className={`rounded-full border border-[#80466e]/40 bg-[#80466e]/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.32em] text-[#ed9e6f] ${inter.className}`}>
                              {item.year}
                            </span>
                          </div>

                          <h3 className={`mt-5 text-2xl leading-tight text-[#f4efe8] sm:text-[1.9rem] ${cinzel.className}`}>
                            {item.title}
                          </h3>

                          <p className={`mt-4 max-w-xl text-sm leading-7 text-[#cfc7bc] sm:text-[15px] ${inter.className}`}>
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="absolute left-6 top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[#ed9e6f] shadow-[0_0_20px_rgba(237,158,111,0.8)] md:left-auto md:right-[-2.45rem] md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2"
                      animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
                    />
                    {!rightSide && <div className="hidden md:block absolute right-[-2.45rem] top-1/2 h-px w-12 -translate-y-1/2 bg-gradient-to-r from-[#ed9e6f]/60 to-transparent" />}
                    {rightSide && <div className="hidden md:block absolute left-[-2.45rem] top-1/2 h-px w-12 -translate-y-1/2 bg-gradient-to-l from-[#ed9e6f]/60 to-transparent" />}
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