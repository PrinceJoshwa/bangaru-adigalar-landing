// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { cinzel, inter } from "@/app/fonts";

// // // const stats = [
// // //   { value: "7,200", label: "worship centres" },
// // //   { value: "1000", label: "hospital beds" },
// // //   { value: "166", label: "doctors" },
// // //   { value: "750", label: "villages served" },
// // // ];

// // // const bodies = [
// // //   {
// // //     name: "ACMEC",
// // //     text: "The trust backbone for education, healthcare, welfare, and cultural service.",
// // //   },
// // //   {
// // //     name: "ASPWCT",
// // //     text: "Women's charitable work across education, healthcare, and welfare initiatives.",
// // //   },
// // //   {
// // //     name: "MASM",
// // //     text: "The wider movement identity that carried the mission into public spiritual life.",
// // //   },
// // //   {
// // //     name: "Annadhanam",
// // //     text: "Feeding and practical care as part of lived spirituality and seva.",
// // //   },
// // // ];

// // // export default function Institutions() {
// // //   return (
// // //     <section id="institutions" data-section className="relative overflow-hidden bg-[#0B0B1E] py-36">
// // //       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#12122d] to-[#0B0B1E]" />
// // //       <div className="absolute left-[15%] top-20 h-60 w-60 rounded-full bg-[#CFA95F]/8 blur-[140px]" />

// // //       <div className="relative z-10 mx-auto max-w-7xl px-6">
// // //         <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 24 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true, amount: 0.2 }}
// // //             transition={{ duration: 0.7 }}
// // //             className="flex flex-col justify-between"
// // //           >
// // //             <div>
// // //               <p className="text-xs uppercase tracking-[0.42em] text-[#CFA95F]">Institutional Legacy</p>
// // //               <h2 className={`mt-6 text-5xl leading-tight text-white md:text-6xl ${cinzel.className}`}>
// // //                 Structure,
// // //                 <span className="block text-[#CFA95F]">not just symbolism</span>
// // //               </h2>
// // //               <p className={`mt-6 text-lg leading-relaxed text-white/68 ${inter.className}`}>
// // //                 One of the most convincing parts of Bangaru Adigalar's legacy is that his influence
// // //                 took organizational form through trusts, welfare bodies, healthcare, education, and
// // //                 service networks.
// // //               </p>
// // //             </div>

// // //             <div className="mt-10 rounded-[2.4rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
// // //               <p className={`text-4xl leading-tight text-white ${cinzel.className}`}>
// // //                 The achievement was continuity.
// // //               </p>
// // //               <p className={`mt-5 text-white/64 leading-relaxed ${inter.className}`}>
// // //                 These institutions make the page feel grounded in real legacy rather than abstract
// // //                 praise.
// // //               </p>
// // //             </div>
// // //           </motion.div>

// // //           <div className="grid gap-6">
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 24 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               viewport={{ once: true, amount: 0.2 }}
// // //               transition={{ duration: 0.7 }}
// // //               className="grid gap-[1px] overflow-hidden rounded-[2.8rem] bg-white/10 md:grid-cols-4"
// // //             >
// // //               {stats.map((item, index) => (
// // //                 <div key={item.label} className="bg-[#0F1025] p-8 text-center">
// // //                   <motion.p
// // //                     initial={{ opacity: 0, scale: 0.94 }}
// // //                     whileInView={{ opacity: 1, scale: 1 }}
// // //                     viewport={{ once: true, amount: 0.2 }}
// // //                     transition={{ delay: index * 0.06, duration: 0.45 }}
// // //                     className={`text-4xl text-[#F2D08D] ${cinzel.className}`}
// // //                   >
// // //                     {item.value}
// // //                   </motion.p>
// // //                   <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/45">{item.label}</p>
// // //                 </div>
// // //               ))}
// // //             </motion.div>

// // //             <div className="grid gap-[1px] overflow-hidden rounded-[2.8rem] bg-white/10 md:grid-cols-2">
// // //               {bodies.map((item, index) => (
// // //                 <motion.div
// // //                   key={item.name}
// // //                   initial={{ opacity: 0, y: 26 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true, amount: 0.2 }}
// // //                   transition={{ delay: index * 0.08, duration: 0.6 }}
// // //                   className="bg-[#0F1025] p-8 transition duration-300 hover:bg-[#13152d]"
// // //                 >
// // //                   <p className={`text-3xl text-white ${cinzel.className}`}>{item.name}</p>
// // //                   <p className={`mt-4 text-white/64 leading-relaxed ${inter.className}`}>{item.text}</p>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import { cinzel, inter } from "@/app/fonts";

// // const stats = [
// //   { value: "7,200", label: "worship centres" },
// //   { value: "1000", label: "hospital beds" },
// //   { value: "166", label: "doctors" },
// //   { value: "750", label: "villages served" },
// // ];

// // const bodies = [
// //   { name: "ACMEC", text: "The trust backbone for education, healthcare, welfare, and cultural service.", colSpan: "md:col-span-2" },
// //   { name: "ASPWCT", text: "Women's charitable work across education, healthcare, and welfare initiatives.", colSpan: "md:col-span-1" },
// //   { name: "MASM", text: "The wider movement identity that carried the mission into public spiritual life.", colSpan: "md:col-span-1" },
// //   { name: "Annadhanam", text: "Feeding and practical care as part of lived spirituality and seva.", colSpan: "md:col-span-2" },
// // ];

// // const easePremium = [0.16, 1, 0.3, 1];

// // export default function Institutions() {
// //   return (
// //     <section id="institutions" data-section className="relative bg-[#08080C] py-32 px-6">
// //       <div className="max-w-7xl mx-auto relative z-10">
        
// //         <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] mb-16">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 1, ease: easePremium }}
// //             className="flex flex-col justify-between"
// //           >
// //             <div>
// //               <p className="text-xs uppercase tracking-[0.42em] text-[#CFA95F]">Institutional Legacy</p>
// //               <h2 className={`mt-6 text-5xl md:text-6xl text-white leading-tight ${cinzel.className}`}>
// //                 Structure, <br/><span className="text-[#CFA95F] italic">not just symbolism</span>
// //               </h2>
// //               <p className={`mt-6 text-lg text-white/68 ${inter.className}`}>
// //                 One of the most convincing parts of Bangaru Adigalar's legacy is that his influence took organizational form through trusts, welfare bodies, healthcare, education, and service networks.
// //               </p>
// //             </div>

// //             <div className="mt-10 rounded-[2.4rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm relative overflow-hidden">
// //               <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/10 to-transparent opacity-50" />
// //               <div className="relative z-10">
// //                 <p className={`text-4xl leading-tight text-white ${cinzel.className}`}>
// //                   The achievement was continuity.
// //                 </p>
// //                 <p className={`mt-5 text-white/64 leading-relaxed ${inter.className}`}>
// //                   These institutions make the page feel grounded in real legacy rather than abstract praise.
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>

// //           <div className="grid grid-cols-2 gap-4 h-max">
// //             {stats.map((stat, index) => (
// //               <motion.div
// //                 key={stat.label}
// //                 initial={{ opacity: 0, scale: 0.95 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.8, delay: index * 0.1, ease: easePremium }}
// //                 className="bg-[#101018] border border-white/5 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group hover:border-[#CFA95F]/30 transition-colors"
// //               >
// //                 <h3 className={`text-4xl md:text-5xl text-[#F2D08D] mb-3 ${cinzel.className}`}>{stat.value}</h3>
// //                 <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //           {bodies.map((body, index) => (
// //             <motion.div
// //               key={body.name}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.8, delay: index * 0.15, ease: easePremium }}
// //               className={`relative overflow-hidden bg-gradient-to-br from-[#151520] to-[#0A0A10] border border-white/5 rounded-[2rem] p-10 group hover:border-[#CFA95F]/20 transition-all ${body.colSpan}`}
// //             >
// //               <div className="absolute top-0 right-0 w-32 h-32 bg-[#CFA95F]/5 rounded-full blur-3xl transition-colors" />
// //               <div className="relative z-10 flex flex-col h-full justify-end">
// //                 <h3 className={`text-3xl text-white mb-4 ${cinzel.className}`}>{body.name}</h3>
// //                 <p className={`text-white/60 leading-relaxed ${inter.className}`}>{body.text}</p>
// //               </div>
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

// const stats = [
//   { value: "7,200", label: "worship centres" },
//   { value: "1000", label: "hospital beds" },
//   { value: "166", label: "doctors" },
//   { value: "750", label: "villages served" },
// ];

// const bodies = [
//   {
//     name: "ACMEC",
//     text: "The trust backbone for education, healthcare, welfare, and cultural service.",
//     accent: "from-cyan-300/20 via-emerald-300/10 to-transparent",
//   },
//   {
//     name: "ASPWCT",
//     text: "Women's charitable work across education, healthcare, and welfare initiatives.",
//     accent: "from-emerald-300/20 via-cyan-300/10 to-transparent",
//   },
//   {
//     name: "MASM",
//     text: "The wider movement identity that carried the mission into public spiritual life.",
//     accent: "from-violet-300/20 via-cyan-300/10 to-transparent",
//   },
//   {
//     name: "Annadhanam",
//     text: "Feeding and practical care as part of lived spirituality and seva.",
//     accent: "from-cyan-300/20 via-violet-300/10 to-transparent",
//   },
// ];

// const easePremium = [0.16, 1, 0.3, 1];

// export default function Institutions() {
//   return (
//     <section
//       id="institutions"
//       data-section
//       className="relative isolate overflow-hidden bg-[#06131a] px-6 py-28 text-white sm:px-8 sm:py-32"
//     >
//       <div className="absolute inset-0 bg-[linear-gradient(180deg,_#06131a_0%,_#0a1d29_34%,_#0f2b3a_68%,_#07131c_100%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.15),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(52,211,153,0.12),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(167,139,250,0.16),_transparent_30%)]" />
//       <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:92px_92px]" />

//       <motion.div
//         className="absolute left-[-8%] top-[12%] h-[320px] w-[320px] rounded-full bg-[#22d3ee]/12 blur-[140px]"
//         animate={{ x: [0, 18, -8, 0], y: [0, -16, 8, 0] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-[-10%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[#a78bfa]/14 blur-[150px]"
//         animate={{ x: [0, -20, 8, 0], y: [0, 18, -8, 0] }}
//         transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="relative z-10 mx-auto max-w-7xl">
//         <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.9, ease: easePremium }}
//             className="space-y-6"
//           >
//             <div className={`inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/8 px-5 py-2 text-[11px] uppercase tracking-[0.34em] text-[#9cfce5] backdrop-blur-xl ${inter.className}`}>
//               <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
//               Institutional Legacy
//             </div>

//             <h2 className={`text-5xl leading-[1.03] text-white sm:text-6xl lg:text-[4.8rem] ${cinzel.className}`}>
//               Structure,
//               <span className="mt-2 block bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_30%,#34d399_65%,#c084fc_100%)] bg-clip-text text-transparent">
//                 not just symbolism
//               </span>
//             </h2>

//             <p className={`max-w-xl text-base leading-8 text-white/72 sm:text-lg ${inter.className}`}>
//               One of the most convincing parts of Bangaru Adigalar&apos;s legacy is that his influence took organizational form through trusts, welfare bodies, healthcare, education, and service networks.
//             </p>

//             <motion.div
//               whileHover={{ y: -4 }}
//               transition={{ duration: 0.35, ease: easePremium }}
//               className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(255,255,255,0.04),rgba(192,132,252,0.08))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
//             >
//               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.12),_transparent_38%)]" />
//               <div className="relative z-10">
//                 <div className={`text-[11px] uppercase tracking-[0.28em] text-cyan-300 ${inter.className}`}>Core Idea</div>
//                 <p className={`mt-4 text-4xl leading-tight text-white ${cinzel.className}`}>
//                   The achievement was continuity.
//                 </p>
//                 <p className={`mt-5 text-white/64 leading-8 ${inter.className}`}>
//                   These institutions make the page feel grounded in real legacy rather than abstract praise.
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>

//           <div className="space-y-6">
//             <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 24, scale: 0.96 }}
//                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.7, delay: index * 0.08, ease: easePremium }}
//                   whileHover={{ y: -6 }}
//                   className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-7 text-center shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-xl"
//                 >
//                   <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_38%,rgba(192,132,252,0.1)_100%)] opacity-80" />
//                   <motion.div
//                     className="absolute inset-y-0 left-[-35%] w-[28%] -skew-x-12 bg-gradient-to-r from-transparent via-white/16 to-transparent"
//                     animate={{ x: ["0%", "290%"] }}
//                     transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 2.6, ease: "easeInOut" }}
//                   />
//                   <div className="relative z-10">
//                     <p className={`text-4xl text-white sm:text-5xl ${cinzel.className}`}>{stat.value}</p>
//                     <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-white/50">{stat.label}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="grid gap-4 md:grid-cols-2">
//               {bodies.map((body, index) => (
//                 <motion.div
//                   key={body.name}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: index * 0.12, ease: easePremium }}
//                   whileHover={{ y: -6, scale: 1.01 }}
//                   className="group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-7 shadow-[0_22px_52px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${body.accent} opacity-80`} />
//                   <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

//                   <div className="relative z-10">
//                     <div className="flex items-center justify-between gap-4">
//                       <h3 className={`text-3xl text-white ${cinzel.className}`}>{body.name}</h3>
//                       <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
//                     </div>
//                     <p className={`mt-5 text-white/64 leading-8 ${inter.className}`}>{body.text}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2, ease: easePremium }}
//               className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]"
//             >
//               <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-7 shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
//                 <div className={`text-[11px] uppercase tracking-[0.28em] text-emerald-300 ${inter.className}`}>Living Network</div>
//                 <p className={`mt-4 text-2xl leading-tight text-white ${cinzel.className}`}>
//                   Institutions turned belief into lasting public service.
//                 </p>
//               </div>

//               <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(52,211,153,0.1),rgba(255,255,255,0.04),rgba(34,211,238,0.08))] p-7 shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
//                 <div className={`text-[11px] uppercase tracking-[0.28em] text-violet-300 ${inter.className}`}>Legacy</div>
//                 <p className={`mt-4 text-white/66 leading-8 ${inter.className}`}>
//                   Trusts, welfare, healthcare, education, and feeding initiatives gave the movement a durable structure beyond symbolism alone.
//                 </p>
//               </div>
//             </motion.div>
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

const stats = [
  { value: "7,200", label: "worship centres" },
  { value: "1000", label: "hospital beds" },
  { value: "166", label: "doctors" },
  { value: "750", label: "villages served" },
];

const bodies = [
  {
    name: "ACMEC",
    text: "The trust backbone for education, healthcare, welfare, and cultural service.",
  },
  {
    name: "ASPWCT",
    text: "Women's charitable work across education, healthcare, and welfare initiatives.",
  },
  {
    name: "MASM",
    text: "The wider movement identity that carried the mission into public spiritual life.",
  },
  {
    name: "Annadhanam",
    text: "Feeding and practical care as part of lived spirituality and seva.",
  },
];

const institutionVisuals = [
  {
    name: "ASPWCT",
    label: "Women's charitable trust",
    image:
      "https://res.cloudinary.com/dvd7o5nph/image/upload/v1770876877/WhatsApp_Image_2026-02-11_at_2.17.57_PM_nswgzl.jpg",
  },
  {
    name: "MASM",
    label: "Spiritual movement & service",
    image: sacredImages.procession,
  },
  {
    name: "Healthcare & Welfare",
    label: "Service in action",
    image:
      "https://res.cloudinary.com/dvd7o5nph/image/upload/v1770717303/DocScanner_02-Feb-2026_2-31_pm_page-0001_xmuskq.jpg",
  },
];

const easePremium = [0.16, 1, 0.3, 1] as const;

export default function Institutions() {
  return (
    <section
      id="institutions"
      data-section
      className="relative isolate overflow-hidden bg-[#06131a] px-6 py-28 text-white sm:px-8 sm:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#06131a_0%,_#0a1d29_34%,_#0f2b3a_68%,_#07131c_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.15),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(52,211,153,0.12),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(167,139,250,0.16),_transparent_30%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:92px_92px]" />

      <motion.div
        className="absolute left-[-8%] top-[12%] h-[320px] w-[320px] rounded-full bg-[#22d3ee]/12 blur-[140px]"
        animate={{ x: [0, 18, -8, 0], y: [0, -16, 8, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-8%] h-[360px] w-[360px] rounded-full bg-[#a78bfa]/14 blur-[150px]"
        animate={{ x: [0, -20, 8, 0], y: [0, 18, -8, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 xl:grid-cols-[1fr_1fr] xl:items-start">
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
            className="space-y-8"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easePremium } } }}>
              <div className={`inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-white/8 px-5 py-2 text-[11px] uppercase tracking-[0.34em] text-[#9cfce5] backdrop-blur-xl ${inter.className}`}>
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
                Institutional Legacy
              </div>

              <h2 className={`mt-6 text-5xl leading-[1.03] text-white sm:text-6xl lg:text-[4.8rem] ${cinzel.className}`}>
                Structure,
                <span className="mt-2 block bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_30%,#34d399_65%,#c084fc_100%)] bg-clip-text text-transparent">
                  not just symbolism
                </span>
              </h2>

              <p className={`mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg ${inter.className}`}>
                One of the most convincing parts of Bangaru Adigalar&apos;s legacy is that his influence took organizational form through trusts, welfare bodies, healthcare, education, and service networks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.05, ease: easePremium }}
              className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
            >
              <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#10202a] min-h-[28rem]">
                  <motion.img
                    src={institutionVisuals[0].image}
                    alt={institutionVisuals[0].name}
                    className="h-full w-full object-cover"
                    animate={{ scale: [1.02, 1.05, 1.02] }}
                    transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06131a]/90 via-[#06131a]/20 to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(34,211,238,0.14),transparent_42%,rgba(52,211,153,0.12)_100%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-200">{institutionVisuals[0].name}</p>
                    <p className={`mt-2 text-3xl text-white ${cinzel.className}`}>{institutionVisuals[0].label}</p>
                  </div>
                </div>

                <div className="grid gap-4">
                  {institutionVisuals.slice(1).map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.08, ease: easePremium }}
                      className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#10202a] min-h-[12rem]"
                    >
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        animate={{ scale: [1.02, 1.04, 1.02] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06131a]/90 via-[#06131a]/14 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-200">{item.name}</p>
                        <p className={`mt-2 text-xl text-white ${cinzel.className}`}>{item.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: easePremium }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-7 text-center shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_38%,rgba(192,132,252,0.1)_100%)] opacity-80" />
                  <motion.div
                    className="absolute inset-y-0 left-[-35%] w-[28%] -skew-x-12 bg-gradient-to-r from-transparent via-white/16 to-transparent"
                    animate={{ x: ["0%", "290%"] }}
                    transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 2.6, ease: "easeInOut" }}
                  />
                  <div className="relative z-10">
                    <p className={`text-4xl text-white sm:text-5xl ${cinzel.className}`}>{stat.value}</p>
                    <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-white/50">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
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
                  staggerChildren: 0.12,
                },
              },
            }}
            className="space-y-6 xl:pt-10"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easePremium } } }}
              className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(255,255,255,0.04),rgba(192,132,252,0.08))] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
            >
              <div className={`text-[11px] uppercase tracking-[0.28em] text-cyan-300 ${inter.className}`}>Core Idea</div>
              <p className={`mt-4 text-4xl leading-tight text-white ${cinzel.className}`}>
                The achievement was continuity.
              </p>
              <p className={`mt-5 text-white/64 leading-8 ${inter.className}`}>
                These institutions make the page feel grounded in real legacy rather than abstract praise.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {bodies.map((body, index) => (
                <motion.div
                  key={body.name}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: easePremium }}
                  whileHover={{ x: 4, y: -4 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-7 shadow-[0_22px_52px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_40%,rgba(192,132,252,0.1)_100%)] opacity-80" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(52,211,153,0.18),rgba(192,132,252,0.22))] ring-1 ring-white/10">
                      <span className={`text-lg text-white ${cinzel.className}`}>
                        {body.name.charAt(0)}
                      </span>
                    </div>

                    <div>
                      <h3 className={`text-3xl text-white ${cinzel.className}`}>{body.name}</h3>
                      <p className={`mt-4 text-white/64 leading-8 ${inter.className}`}>{body.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: easePremium }}
              className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-7 shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
                <div className={`text-[11px] uppercase tracking-[0.28em] text-emerald-300 ${inter.className}`}>Living Network</div>
                <p className={`mt-4 text-2xl leading-tight text-white ${cinzel.className}`}>
                  Institutions turned belief into lasting public service.
                </p>
              </div>

              <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(52,211,153,0.1),rgba(255,255,255,0.04),rgba(34,211,238,0.08))] p-7 shadow-[0_20px_48px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
                <div className={`text-[11px] uppercase tracking-[0.28em] text-violet-300 ${inter.className}`}>Legacy</div>
                <p className={`mt-4 text-white/66 leading-8 ${inter.className}`}>
                  Trusts, welfare, healthcare, education, and feeding initiatives gave the movement a durable structure beyond symbolism alone.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
