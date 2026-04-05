// // "use client";

// // import { motion } from "framer-motion";
// // import {
// //   Activity,
// //   Baby,
// //   BookOpen,
// //   Globe,
// //   HeartHandshake,
// //   Leaf,
// //   Stethoscope,
// // } from "lucide-react";
// // import { cinzel, inter } from "@/app/fonts";

// // const introText = {
// //   title: "Astonishing Miracles of Amma",
// //   body: "Amma, who has been rightly realised by lakhs of devotees as the true Avatar of Adhiparasakthi, has performed innumerable miracles. His Holiness, the Amma, has appeared in dreams, cured incurable diseases by a mere graceful look, and solved intricate problems in the lives of devotees.",
// //   footer:
// //     "The spiritual magazine, Sakthi Oli, carries first-hand information about these miracles. Amma's grace is something one can truly understand only through personal experience.",
// // };

// // const miracles = [
// //   {
// //     title: "Earthquake Foreseen",
// //     icon: Globe,
// //     content:
// //       "Amma once instructed a devotee to ask his son-in-law to move houses in the U.S. immediately. Though confused, they followed the instruction. Soon after shifting, an earthquake struck the exact region-proving Amma's divine foresight.",
// //     highlight: "Protection from Natural Disasters",
// //   },
// //   {
// //     title: "Neem Leaf to Beetle",
// //     icon: Leaf,
// //     content:
// //       "When a devotee questioned the use of neem leaves, Amma handed him one and asked him to close his palm. When he opened it, the leaf had transformed into a living black beetle, moving exactly as Amma directed.",
// //     highlight: "Divine Transformation",
// //   },
// //   {
// //     title: "Curing Chicken Pox",
// //     icon: Baby,
// //     content:
// //       "In earlier days, Amma would recite the Mariyamman Thalattu in front of suffering devotees. The patients would gradually calm down, feeling relieved and filled with Her divine grace.",
// //     highlight: "Traditional Healing",
// //   },
// //   {
// //     title: "The Doctor's Experience",
// //     icon: Stethoscope,
// //     content:
// //       "Dr. T. P. Meenakshisundaram, a Vice-Chancellor, witnessed gold materializing from neem leaves. Later, Amma healed a woman with Ankylosing Spondylitis by simply stepping on her back, allowing her to stand straight instantly.",
// //     highlight: "Miracles in Medicine",
// //   },
// //   {
// //     title: "Healing Cancer & Karma",
// //     icon: Activity,
// //     content:
// //       "When Dr. Meenakshisundaram suffered leg pain, Amma revealed it was actually cancer. She guided him through the pain, comforting him by revealing, 'This is your last birth.' He recovered enough to visit the Peedam again.",
// //     highlight: "The Ultimate Liberation",
// //   },
// //   {
// //     title: "Healing Beyond Religion",
// //     icon: BookOpen,
// //     content:
// //       "Amma cured Mumtaz, a Muslim woman, reciting the Quran in flawless Arabic. To another devotee, She said, 'I am The Mother, I am Allah,' proving that in Her eyes, all religions are one.",
// //     highlight: "Universal Oneness",
// //   },
// // ];

// // const containerVariants = {
// //   hidden: {},
// //   show: {
// //     transition: {
// //       staggerChildren: 0.12,
// //     },
// //   },
// // };

// // const itemVariants = {
// //   hidden: { opacity: 0, y: 24 },
// //   show: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.75,
// //       ease: [0.22, 1, 0.36, 1] as const,
// //     },
// //   },
// // };

// // export default function DivineWisdomPage() {
// //   return (
// //     <main className="relative isolate overflow-hidden bg-[#06131a] text-white">
// //       <div className="absolute inset-0 bg-[linear-gradient(180deg,_#06131a_0%,_#0a1d29_34%,_#0f2b3a_68%,_#07131c_100%)]" />
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.15),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(52,211,153,0.12),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(167,139,250,0.16),_transparent_30%)]" />
// //       <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:92px_92px]" />

// //       <motion.div
// //         className="absolute left-[-8%] top-[10%] h-[320px] w-[320px] rounded-full bg-[#22d3ee]/12 blur-[140px]"
// //         animate={{ x: [0, 18, -8, 0], y: [0, -16, 8, 0] }}
// //         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
// //       />
// //       <motion.div
// //         className="absolute bottom-[-10%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[#a78bfa]/14 blur-[150px]"
// //         animate={{ x: [0, -20, 8, 0], y: [0, 18, -8, 0] }}
// //         transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
// //       />

// //       <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
// //         <motion.div
// //           initial="hidden"
// //           animate="show"
// //           variants={containerVariants}
// //           className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]"
// //         >
// //           <div className="space-y-8">
// //             <motion.div
// //               variants={itemVariants}
// //               className="rounded-[2.4rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:p-10"
// //             >
// //               <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/8 px-5 py-2 text-[11px] uppercase tracking-[0.34em] text-[#9cfce5] backdrop-blur-xl">
// //                 <HeartHandshake className="h-4 w-4" />
// //                 Divine Wisdom
// //               </div>

// //               <h1
// //                 className={`mt-6 text-4xl leading-[1.04] text-white md:text-5xl lg:text-[4.2rem] ${cinzel.className}`}
// //               >
// //                 Astonishing
// //                 <span className="mt-2 block bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_30%,#34d399_65%,#c084fc_100%)] bg-clip-text text-transparent">
// //                   Miracles of Amma
// //                 </span>
// //               </h1>

// //               <p className={`mt-7 text-lg leading-8 text-white/72 ${inter.className}`}>
// //                 {introText.body}
// //               </p>
// //             </motion.div>

// //             <motion.div
// //               variants={itemVariants}
// //               className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(255,255,255,0.04),rgba(192,132,252,0.08))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
// //             >
// //               <div className={`text-[11px] uppercase tracking-[0.28em] text-cyan-300 ${inter.className}`}>
// //                 Spiritual Insight
// //               </div>
// //               <p className={`mt-5 text-white/72 leading-8 ${inter.className}`}>
// //                 {introText.footer}
// //               </p>
// //             </motion.div>
// //           </div>

// //           <motion.div
// //             variants={itemVariants}
// //             className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
// //           >
// //             <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-8 md:p-10">
// //               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.12),_transparent_36%)]" />

// //               <div className="relative z-10">
// //                 <div className={`text-[11px] uppercase tracking-[0.28em] text-cyan-300 ${inter.className}`}>
// //                   Central Reflection
// //                 </div>
// //                 <p className={`mt-6 text-3xl leading-relaxed text-white md:text-4xl ${cinzel.className}`}>
// //                   "I am The Mother,
// //                   <br />
// //                   I am Allah."
// //                 </p>
// //                 <p className={`mt-6 text-white/68 leading-8 ${inter.className}`}>
// //                   Amma&apos;s grace was experienced not as separation, but as protection,
// //                   healing, guidance, and oneness beyond all boundaries.
// //                 </p>
// //                 <div className="mt-8 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
// //                 <p className="mt-6 text-sm uppercase tracking-[0.24em] text-white/50">
// //                   Universal Compassion
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </motion.div>

// //         <motion.div
// //           variants={containerVariants}
// //           initial="hidden"
// //           whileInView="show"
// //           viewport={{ once: true, amount: 0.08 }}
// //           className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
// //         >
// //           {miracles.map((item) => {
// //             const Icon = item.icon;

// //             return (
// //               <motion.div
// //                 key={item.title}
// //                 variants={itemVariants}
// //                 whileHover={{ y: -8, scale: 1.01 }}
// //                 transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
// //                 className="group relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-7 shadow-[0_22px_52px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
// //               >
// //                 <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_40%,rgba(192,132,252,0.1)_100%)] opacity-80" />
// //                 <motion.div
// //                   className="absolute inset-y-0 left-[-35%] w-[28%] -skew-x-12 bg-gradient-to-r from-transparent via-white/16 to-transparent"
// //                   animate={{ x: ["0%", "290%"] }}
// //                   transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 2.6, ease: "easeInOut" }}
// //                 />

// //                 <div className="relative z-10">
// //                   <div className="flex items-center justify-between gap-4">
// //                     <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(52,211,153,0.18),rgba(192,132,252,0.22))] ring-1 ring-white/10">
// //                       <Icon className="h-6 w-6 text-white" />
// //                     </div>
// //                     <span className="rounded-full border border-cyan-300/20 bg-white/6 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#9cfce5]">
// //                       {item.highlight}
// //                     </span>
// //                   </div>

// //                   <h3 className={`mt-6 text-2xl leading-tight text-white ${cinzel.className}`}>
// //                     {item.title}
// //                   </h3>

// //                   <p className={`mt-4 text-white/66 leading-8 ${inter.className}`}>
// //                     {item.content}
// //                   </p>
// //                 </div>
// //               </motion.div>
// //             );
// //           })}
// //         </motion.div>

// //         <motion.div
// //           initial={{ opacity: 0, y: 24 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.2 }}
// //           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
// //           className="mt-16 rounded-[2.4rem] border border-white/10 bg-white/[0.05] p-8 text-center shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
// //         >
// //           <p className={`text-white/72 leading-8 text-lg ${inter.className}`}>
// //             Amma&apos;s grace is understood most deeply through lived experience -
// //             through the healing of pain, the lifting of fear, and the quiet
// //             assurance that the Divine Mother walks with Her devotees.
// //           </p>
// //         </motion.div>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import {
//   Activity,
//   Baby,
//   BookOpen,
//   Globe,
//   HeartHandshake,
//   Leaf,
//   Sparkles,
//   Stethoscope,
// } from "lucide-react";
// import { cinzel, inter } from "@/app/fonts";
// import { sacredImages } from "@/lib/content";

// const introText = {
//   title: "Astonishing Miracles of Amma",
//   body: "Amma, who has been rightly realised by lakhs of devotees as the true Avatar of Adhiparasakthi, has performed innumerable miracles. His Holiness, the Amma, has appeared in dreams, cured incurable diseases by a mere graceful look, and solved intricate problems in the lives of devotees.",
//   footer:
//     "The spiritual magazine, Sakthi Oli, carries first-hand information about these miracles. Amma's grace is something one can truly understand only through personal experience.",
// };

// const miracles = [
//   {
//     title: "Earthquake Foreseen",
//     icon: Globe,
//     content:
//       "Amma once instructed a devotee to ask his son-in-law to move houses in the U.S. immediately. Though confused, they followed the instruction. Soon after shifting, an earthquake struck the exact region-proving Amma's divine foresight.",
//     highlight: "Protection from Natural Disasters",
//   },
//   {
//     title: "Neem Leaf to Beetle",
//     icon: Leaf,
//     content:
//       "When a devotee questioned the use of neem leaves, Amma handed him one and asked him to close his palm. When he opened it, the leaf had transformed into a living black beetle, moving exactly as Amma directed.",
//     highlight: "Divine Transformation",
//   },
//   {
//     title: "Curing Chicken Pox",
//     icon: Baby,
//     content:
//       "In earlier days, Amma would recite the Mariyamman Thalattu in front of suffering devotees. The patients would gradually calm down, feeling relieved and filled with Her divine grace.",
//     highlight: "Traditional Healing",
//   },
//   {
//     title: "The Doctor's Experience",
//     icon: Stethoscope,
//     content:
//       "Dr. T. P. Meenakshisundaram, a Vice-Chancellor, witnessed gold materializing from neem leaves. Later, Amma healed a woman with Ankylosing Spondylitis by simply stepping on her back, allowing her to stand straight instantly.",
//     highlight: "Miracles in Medicine",
//   },
//   {
//     title: "Healing Cancer & Karma",
//     icon: Activity,
//     content:
//       "When Dr. Meenakshisundaram suffered leg pain, Amma revealed it was actually cancer. She guided him through the pain, comforting him by revealing, 'This is your last birth.' He recovered enough to visit the Peedam again.",
//     highlight: "The Ultimate Liberation",
//   },
//   {
//     title: "Healing Beyond Religion",
//     icon: BookOpen,
//     content:
//       "Amma cured Mumtaz, a Muslim woman, reciting the Quran in flawless Arabic. To another devotee, She said, 'I am The Mother, I am Allah,' proving that in Her eyes, all religions are one.",
//     highlight: "Universal Oneness",
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

// export default function DivineWisdomPage() {
//   return (
//     <main className="relative isolate overflow-hidden bg-[#051119] text-white">
//       <div className="absolute inset-0 bg-[linear-gradient(180deg,_#051119_0%,_#0a1d2a_38%,_#0e2a39_70%,_#07131b_100%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(52,211,153,0.12),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.16),_transparent_28%)]" />
//       <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:88px_88px]" />

//       <motion.div
//         className="absolute left-[-6%] top-[8%] h-[320px] w-[320px] rounded-full bg-cyan-300/10 blur-[140px]"
//         animate={{ x: [0, 18, -6, 0], y: [0, -16, 8, 0] }}
//         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute right-[-8%] top-[22%] h-[360px] w-[360px] rounded-full bg-violet-300/10 blur-[150px]"
//         animate={{ x: [0, -20, 10, 0], y: [0, 18, -8, 0] }}
//         transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
//         <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
//           <motion.div
//             initial="hidden"
//             animate="show"
//             variants={{
//               hidden: {},
//               show: { transition: { staggerChildren: 0.12 } },
//             }}
//             className="space-y-8"
//           >
//             <motion.div
//               variants={fadeUp}
//               className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/8 px-5 py-2 text-[11px] uppercase tracking-[0.34em] text-cyan-200 backdrop-blur-xl"
//             >
//               <HeartHandshake className="h-4 w-4" />
//               Divine Wisdom
//             </motion.div>

//             <motion.h1
//               variants={fadeUp}
//               className={`max-w-4xl text-5xl leading-[1.02] text-white sm:text-6xl xl:text-[5.4rem] ${cinzel.className}`}
//             >
//               Astonishing
//               <span className="mt-2 block bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_28%,#34d399_62%,#c084fc_100%)] bg-clip-text text-transparent">
//                 Miracles of Amma
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className={`max-w-2xl text-base leading-8 text-white/72 sm:text-lg ${inter.className}`}
//             >
//               {introText.body}
//             </motion.p>

//             <motion.div
//               variants={fadeUp}
//               className="grid gap-4 sm:grid-cols-3"
//             >
//               <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
//                 <div className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">Grace</div>
//                 <div className={`mt-3 text-xl text-white ${cinzel.className}`}>Healing Presence</div>
//               </div>
//               <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
//                 <div className="text-[11px] uppercase tracking-[0.24em] text-emerald-300">Faith</div>
//                 <div className={`mt-3 text-xl text-white ${cinzel.className}`}>Living Miracles</div>
//               </div>
//               <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
//                 <div className="text-[11px] uppercase tracking-[0.24em] text-violet-300">Truth</div>
//                 <div className={`mt-3 text-xl text-white ${cinzel.className}`}>Universal Oneness</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 28 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//             className="relative"
//           >
//             <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.26)] backdrop-blur-2xl">
//               <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#10202a]">
//                 <motion.img
//                   src={sacredImages.bangaru}
//                   alt="Bangaru Adigalar"
//                   className="h-[36rem] w-full object-cover"
//                   animate={{ scale: [1.02, 1.05, 1.02] }}
//                   transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#051119]/90 via-[#051119]/18 to-transparent" />
//                 <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(34,211,238,0.12),transparent_45%,rgba(167,139,250,0.14)_100%)]" />

//                 <div className="absolute inset-x-6 bottom-6 rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] px-6 py-6 backdrop-blur-xl">
//                   <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">
//                     His Holiness Bangaru Adigalar
//                   </div>
//                   <p className={`mt-3 text-2xl leading-tight text-white ${cinzel.className}`}>
//                     Divine Grace in Human Form
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <motion.div
//               className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl lg:block"
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <div className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">
//                 Living Grace
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={{
//             hidden: {},
//             show: { transition: { staggerChildren: 0.1 } },
//           }}
//           className="mt-16 grid gap-6 lg:grid-cols-12"
//         >
//           {miracles.map((item, index) => {
//             const Icon = item.icon;
//             const large = index === 0 || index === 4;
//             return (
//               <motion.article
//                 key={item.title}
//                 variants={fadeUp}
//                 whileHover={{ y: -8 }}
//                 className={`group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-7 shadow-[0_22px_52px_rgba(0,0,0,0.18)] backdrop-blur-2xl ${
//                   large ? "lg:col-span-7" : "lg:col-span-5"
//                 }`}
//               >
//                 <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_38%,rgba(192,132,252,0.1)_100%)] opacity-80" />
//                 <motion.div
//                   className="absolute inset-y-0 left-[-35%] w-[28%] -skew-x-12 bg-gradient-to-r from-transparent via-white/16 to-transparent"
//                   animate={{ x: ["0%", "290%"] }}
//                   transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 2.6, ease: "easeInOut" }}
//                 />

//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between gap-4">
//                     <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(52,211,153,0.18),rgba(192,132,252,0.22))] ring-1 ring-white/10">
//                       <Icon className="h-6 w-6 text-white" />
//                     </div>
//                     <span className="rounded-full border border-cyan-300/20 bg-white/6 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-cyan-200">
//                       {item.highlight}
//                     </span>
//                   </div>

//                   <h3 className={`mt-6 text-2xl leading-tight text-white ${cinzel.className}`}>
//                     {item.title}
//                   </h3>

//                   <p className={`mt-4 text-white/66 leading-8 ${inter.className}`}>
//                     {item.content}
//                   </p>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="mt-16 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]"
//         >
//           <div className="rounded-[2.3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(255,255,255,0.04),rgba(192,132,252,0.08))] p-8 shadow-[0_22px_52px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
//             <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/8 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-cyan-200">
//               <Sparkles className="h-4 w-4" />
//               Divine Insight
//             </div>
//             <p className={`mt-6 text-white/72 leading-8 ${inter.className}`}>
//               {introText.footer}
//             </p>
//           </div>

//           <div className="rounded-[2.3rem] border border-white/10 bg-white/[0.05] p-8 text-center shadow-[0_22px_52px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
//             <p className={`text-3xl leading-relaxed text-white md:text-4xl ${cinzel.className}`}>
//               “I am The Mother,
//               <br />
//               I am Allah.”
//             </p>
//             <p className={`mt-6 text-white/68 leading-8 ${inter.className}`}>
//               Amma&apos;s grace is understood most deeply through lived experience -
//               through the healing of pain, the lifting of fear, and the quiet assurance
//               that the Divine Mother walks with Her devotees.
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </main>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Baby,
  BookOpen,
  Globe,
  HeartHandshake,
  Leaf,
  Stethoscope,
} from "lucide-react";
import { cinzel, inter } from "@/app/fonts";
import { sacredImages } from "@/lib/content";

const introText = {
  title: "Astonishing Miracles of Amma",
  body: "Amma, who has been rightly realised by lakhs of devotees as the true Avatar of Adhiparasakthi, has performed innumerable miracles. His Holiness, the Amma, has appeared in dreams, cured incurable diseases by a mere graceful look, and solved intricate problems in the lives of devotees.",
  footer:
    "The spiritual magazine, Sakthi Oli, carries first-hand information about these miracles. Amma's grace is something one can truly understand only through personal experience.",
};

const miracles = [
  {
    title: "Earthquake Foreseen",
    icon: Globe,
    content:
      "Amma once instructed a devotee to ask his son-in-law to move houses in the U.S. immediately. Though confused, they followed the instruction. Soon after shifting, an earthquake struck the exact region, proving Amma's divine foresight.",
    highlight: "Protection from Natural Disasters",
  },
  {
    title: "Neem Leaf to Beetle",
    icon: Leaf,
    content:
      "When a devotee questioned the use of neem leaves, Amma handed him one and asked him to close his palm. When he opened it, the leaf had transformed into a living black beetle, moving exactly as Amma directed.",
    highlight: "Divine Transformation",
  },
  {
    title: "Curing Chicken Pox",
    icon: Baby,
    content:
      "In earlier days, Amma would recite the Mariyamman Thalattu in front of suffering devotees. The patients would gradually calm down, feeling relieved and filled with Her divine grace.",
    highlight: "Traditional Healing",
  },
  {
    title: "The Doctor's Experience",
    icon: Stethoscope,
    content:
      "Dr. T. P. Meenakshisundaram, a Vice-Chancellor, witnessed gold materializing from neem leaves. Later, Amma healed a woman with Ankylosing Spondylitis by simply stepping on her back, allowing her to stand straight instantly.",
    highlight: "Miracles in Medicine",
  },
  {
    title: "Healing Cancer & Karma",
    icon: Activity,
    content:
      "When Dr. Meenakshisundaram suffered leg pain, Amma revealed it was actually cancer. She guided him through the pain, comforting him by revealing, 'This is your last birth.' He recovered enough to visit the Peedam again.",
    highlight: "The Ultimate Liberation",
  },
  {
    title: "Healing Beyond Religion",
    icon: BookOpen,
    content:
      "Amma cured Mumtaz, a Muslim woman, reciting the Quran in flawless Arabic. To another devotee, She said, 'I am The Mother, I am Allah,' proving that in Her eyes, all religions are one.",
    highlight: "Universal Oneness",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function DivineWisdomPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#051119] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#051119_0%,_#0a1d2a_38%,_#0e2a39_70%,_#07131b_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(52,211,153,0.12),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.16),_transparent_28%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:88px_88px]" />

      <motion.div
        className="absolute left-[-6%] top-[8%] h-[320px] w-[320px] rounded-full bg-cyan-300/10 blur-[140px]"
        animate={{ x: [0, 18, -6, 0], y: [0, -16, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8%] top-[22%] h-[360px] w-[360px] rounded-full bg-violet-300/10 blur-[150px]"
        animate={{ x: [0, -20, 10, 0], y: [0, 18, -8, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/8 px-5 py-2 text-[11px] uppercase tracking-[0.34em] text-cyan-200 backdrop-blur-xl"
            >
              <HeartHandshake className="h-4 w-4" />
              Divine Wisdom
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`max-w-4xl text-5xl leading-[1.02] text-white sm:text-6xl xl:text-[5.4rem] ${cinzel.className}`}
            >
              Astonishing
              <span className="mt-2 block bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_28%,#34d399_62%,#c084fc_100%)] bg-clip-text text-transparent">
                Miracles of Amma
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`max-w-2xl text-base leading-8 text-white/72 sm:text-lg ${inter.className}`}
            >
              {introText.body}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid gap-4 sm:grid-cols-3"
            >
              <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <div className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">Grace</div>
                <div className={`mt-3 text-xl text-white ${cinzel.className}`}>Healing Presence</div>
              </div>
              <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <div className="text-[11px] uppercase tracking-[0.24em] text-emerald-300">Faith</div>
                <div className={`mt-3 text-xl text-white ${cinzel.className}`}>Living Miracles</div>
              </div>
              <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
                <div className="text-[11px] uppercase tracking-[0.24em] text-violet-300">Truth</div>
                <div className={`mt-3 text-xl text-white ${cinzel.className}`}>Universal Oneness</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.26)] backdrop-blur-2xl">
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#10202a]">
                <motion.img
                  src={sacredImages.bangaru}
                  alt="Bangaru Adigalar"
                  className="h-[36rem] w-full object-cover"
                  animate={{ scale: [1.02, 1.05, 1.02] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051119]/90 via-[#051119]/18 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(34,211,238,0.12),transparent_45%,rgba(167,139,250,0.14)_100%)]" />

                <div className="absolute inset-x-6 bottom-6 rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] px-6 py-6 backdrop-blur-xl">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">
                    His Holiness Bangaru Adigalar
                  </div>
                  <p className={`mt-3 text-2xl leading-tight text-white ${cinzel.className}`}>
                    Divine Grace in Human Form
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl lg:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">
                Living Grace
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-20"
        >
          <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_40%,rgba(192,132,252,0.1)_100%)] opacity-80" />
              <motion.div
                className="absolute inset-y-0 left-[-35%] w-[28%] -skew-x-12 bg-gradient-to-r from-transparent via-white/16 to-transparent"
                animate={{ x: ["0%", "290%"] }}
                transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 2.6, ease: "easeInOut" }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(52,211,153,0.18),rgba(192,132,252,0.22))] ring-1 ring-white/10">
                    <Globe className="h-7 w-7 text-white" />
                  </div>
                  <span className="rounded-full border border-cyan-300/20 bg-white/6 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-cyan-200">
                    Protection from Natural Disasters
                  </span>
                </div>

                <h3 className={`mt-8 text-3xl leading-tight text-white md:text-4xl ${cinzel.className}`}>
                  Earthquake Foreseen
                </h3>

                <p className={`mt-5 max-w-3xl text-white/66 leading-8 ${inter.className}`}>
                  Amma once instructed a devotee to ask his son-in-law to move houses in the U.S. immediately.
                  Though confused, they followed the instruction. Soon after shifting, an earthquake struck the
                  exact region, proving Amma&apos;s divine foresight.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(255,255,255,0.04),rgba(192,132,252,0.08))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
            >
              <div className={`text-[11px] uppercase tracking-[0.28em] text-cyan-300 ${inter.className}`}>
                Divine Reflection
              </div>
              <p className={`mt-6 text-3xl leading-relaxed text-white ${cinzel.className}`}>
                “When grace moves silently, impossible things become natural.”
              </p>
              <p className={`mt-6 text-white/68 leading-8 ${inter.className}`}>
                Amma&apos;s miracles were never presented as spectacle alone, but as compassion in action,
                protection in crisis, and reassurance in moments where human understanding had no answer.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {miracles.slice(1).map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-7 shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_40%,rgba(192,132,252,0.1)_100%)] opacity-80" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(52,211,153,0.18),rgba(192,132,252,0.22))] ring-1 ring-white/10">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="rounded-full border border-cyan-300/20 bg-white/6 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-cyan-200">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className={`mt-6 text-2xl leading-tight text-white ${cinzel.className}`}>
                      {item.title}
                    </h3>

                    <p className={`mt-4 text-white/66 leading-8 ${inter.className}`}>
                      {item.content}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className={`text-[11px] uppercase tracking-[0.28em] text-cyan-300 ${inter.className}`}>
                  Final Reflection
                </div>
                <p className={`mt-5 text-3xl leading-relaxed text-white ${cinzel.className}`}>
                  “I am The Mother, I am Allah.”
                </p>
              </div>

              <p className={`text-white/68 leading-8 ${inter.className}`}>
                Amma&apos;s grace is understood most deeply through lived experience:
                through healing, through protection, through relief from suffering,
                and through the quiet certainty that the Divine Mother walks with Her devotees
                beyond all divisions of religion, fear, and doubt.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

