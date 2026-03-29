// // // // import PremiumSection from "./PremiumSection";
// // // // import { programs } from "@/lib/content";

// // // // export default function Programs() {
// // // //   return (
// // // //     <PremiumSection title="Spiritual Programs">

// // // //       <div className="grid md:grid-cols-4 gap-8">

// // // //         {programs.map((item) => (
// // // //           <div className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition">

// // // //             <h3 className="text-white text-xl">{item.title}</h3>

// // // //             <p className="text-white/60 mt-4">{item.text}</p>

// // // //           </div>
// // // //         ))}

// // // //       </div>

// // // //     </PremiumSection>
// // // //   );
// // // // }

// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { cinzel, inter } from "@/app/fonts";

// // // export default function Programs() {
// // //   return (
// // //     <section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

// // //       {/* 🌌 Background */}
// // //       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

// // //       {/* ✨ Soft Glow */}
// // //       <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-[#CFA95F]/10 blur-[160px] rounded-full -translate-x-1/2" />

// // //       <div className="relative z-10 max-w-7xl mx-auto px-6">

// // //         {/* 🔥 HEADER */}
// // //         <div className="text-center max-w-3xl mx-auto">

// // //           <p className="text-[#CFA95F] tracking-[0.4em] text-xs uppercase">
// // //             Spiritual Programs
// // //           </p>

// // //           <h2 className={`mt-6 text-5xl md:text-6xl text-white ${cinzel.className}`}>
// // //             A Path Through
// // //             <span className="block text-[#CFA95F]">
// // //               Service & Devotion
// // //             </span>
// // //           </h2>

// // //           <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
// // //             Each program is a step toward inner growth, where devotion meets action,
// // //             and spirituality becomes a lived experience.
// // //           </p>

// // //         </div>

// // //         {/* 🔥 MAIN LAYOUT */}
// // //         <div className="mt-24 grid lg:grid-cols-2 gap-16 items-start">

// // //           {/* 🌟 FEATURE PROGRAM */}
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 60 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-[#CFA95F]/40 via-transparent to-[#CFA95F]/30"
// // //           >
// // //             <div className="p-10 rounded-[2rem] bg-[#0B0B1E]/80 backdrop-blur-xl border border-white/10">

// // //               <p className="text-[#CFA95F] text-sm mb-3">
// // //                 Featured Program
// // //               </p>

// // //               <h3 className="text-3xl text-white mb-4">
// // //                 Annadhanam (Food Offering)
// // //               </h3>

// // //               <p className="text-white/70 leading-relaxed">
// // //                 Serving food to thousands is not charity — it is devotion in action.
// // //                 Annadhanam reflects the spirit of selfless giving, where every meal
// // //                 becomes an offering to humanity.
// // //               </p>

// // //               {/* ✨ subtle glow */}
// // //               <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition rounded-[2rem]" />

// // //             </div>
// // //           </motion.div>

// // //           {/* 📜 PROGRAM LIST */}
// // //           <div className="space-y-10">

// // //             {[
// // //               {
// // //                 title: "Daily Pooja",
// // //                 desc: "Sacred rituals performed with devotion, creating a spiritual atmosphere of peace and connection.",
// // //               },
// // //               {
// // //                 title: "Spiritual Discourses",
// // //                 desc: "Guidance through teachings that help individuals understand life, purpose, and inner transformation.",
// // //               },
// // //               {
// // //                 title: "Community Service",
// // //                 desc: "Serving society through compassion-driven initiatives that uplift lives and spread kindness.",
// // //               },
// // //               {
// // //                 title: "Devotee Gatherings",
// // //                 desc: "Moments of unity where people come together to share devotion, faith, and spiritual energy.",
// // //               },
// // //             ].map((item, i) => (
// // //               <motion.div
// // //                 key={i}
// // //                 initial={{ opacity: 0, x: 40 }}
// // //                 whileInView={{ opacity: 1, x: 0 }}
// // //                 transition={{ delay: i * 0.2 }}
// // //                 className="border-b border-white/10 pb-6"
// // //               >
// // //                 <h4 className="text-white text-xl">{item.title}</h4>
// // //                 <p className="text-white/60 mt-2 leading-relaxed">
// // //                   {item.desc}
// // //                 </p>
// // //               </motion.div>
// // //             ))}

// // //           </div>

// // //         </div>

// // //         {/* 🌟 FINAL TEXT */}
// // //         <div className="mt-24 max-w-4xl mx-auto text-center">

// // //           <p className={`text-white/70 leading-relaxed ${inter.className}`}>
// // //             These programs are not events — they are expressions of a deeper
// // //             spiritual journey, where every act becomes a step toward self-realization.
// // //           </p>

// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import { cinzel, inter } from "@/app/fonts";

// // export default function Programs() {
// //   return (
// //     <section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

// //       {/* 🌌 Background */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

// //       {/* ✨ Soft Glow */}
// //       <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-[#CFA95F]/10 blur-[160px] rounded-full -translate-x-1/2" />

// //       <div className="relative z-10 max-w-7xl mx-auto px-6">

// //         {/* 🔥 HEADER */}
// //         <div className="text-center max-w-3xl mx-auto">

// //           <p className="text-[#CFA95F] tracking-[0.4em] text-xs uppercase">
// //             Spiritual Programs
// //           </p>

// //           <h2 className={`mt-6 text-5xl md:text-6xl text-white ${cinzel.className}`}>
// //             A Path Through
// //             <span className="block text-[#CFA95F]">
// //               Service & Devotion
// //             </span>
// //           </h2>

// //           <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
// //             Each program is a step toward inner growth, where devotion meets action,
// //             and spirituality becomes a lived experience.
// //           </p>

// //         </div>

// //         {/* 🔥 MAIN LAYOUT */}
// //         <div className="mt-24 grid lg:grid-cols-2 gap-16 items-start">

// //           {/* 🌟 LEFT SIDE */}
// //           <div>

// //             {/* FEATURE CARD */}
// //             <motion.div
// //               initial={{ opacity: 0, y: 60 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-[#CFA95F]/40 via-transparent to-[#CFA95F]/30"
// //             >
// //               <div className="relative p-10 rounded-[2rem] bg-[#0B0B1E]/80 backdrop-blur-xl border border-white/10">

// //                 <p className="text-[#CFA95F] text-sm mb-3">
// //                   Featured Program
// //                 </p>

// //                 <h3 className="text-3xl text-white mb-4">
// //                   Annadhanam (Food Offering)
// //                 </h3>

// //                 <p className="text-white/70 leading-relaxed">
// //                   Serving food to thousands is not charity — it is devotion in action.
// //                   Annadhanam reflects the spirit of selfless giving, where every meal
// //                   becomes an offering to humanity.
// //                 </p>

// //                 {/* Glow */}
// //                 <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition rounded-[2rem]" />

// //               </div>
// //             </motion.div>

// //             {/* 🖼️ IMAGE STACK */}
// //             <div className="relative mt-12 h-[260px]">

// //               <img
// //                 src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1772704459/WhatsApp_Image_2026-03-05_at_10.44.57_AM_qnbh5k.jpg"
// //                 className="absolute left-0 top-0 w-40 h-52 object-cover rounded-xl shadow-xl rotate-[-6deg] opacity-80 hover:opacity-100 transition"
// //               />

// //               <img
// //                 src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1770717303/DocScanner_02-Feb-2026_2-31_pm_page-0001_xmuskq.jpg"
// //                 className="absolute left-20 top-10 w-44 h-56 object-cover rounded-xl shadow-xl rotate-[4deg] opacity-80 hover:opacity-100 transition"
// //               />

// //               <img
// //                 src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/097A1993.JPG?updatedAt=1767689415965"
// //                 className="absolute left-40 top-0 w-40 h-52 object-cover rounded-xl shadow-xl rotate-[-3deg] opacity-80 hover:opacity-100 transition"
// //               />

// //             </div>

// //           </div>

// //           {/* 📜 RIGHT SIDE LIST */}
// //           <div className="space-y-10">

// //             {[
// //               {
// //                 title: "Daily Pooja",
// //                 desc: "Sacred rituals performed with devotion, creating a spiritual atmosphere of peace and connection.",
// //               },
// //               {
// //                 title: "Spiritual Discourses",
// //                 desc: "Guidance through teachings that help individuals understand life, purpose, and inner transformation.",
// //               },
// //               {
// //                 title: "Community Service",
// //                 desc: "Serving society through compassion-driven initiatives that uplift lives and spread kindness.",
// //               },
// //               {
// //                 title: "Devotee Gatherings",
// //                 desc: "Moments of unity where people come together to share devotion, faith, and spiritual energy.",
// //               },
// //             ].map((item, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, x: 40 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ delay: i * 0.2 }}
// //                 className="border-b border-white/10 pb-6"
// //               >
// //                 <h4 className="text-white text-xl">{item.title}</h4>
// //                 <p className="text-white/60 mt-2 leading-relaxed">
// //                   {item.desc}
// //                 </p>
// //               </motion.div>
// //             ))}

// //           </div>

// //         </div>

// //         {/* 🌟 FINAL TEXT */}
// //         <div className="mt-24 max-w-4xl mx-auto text-center">

// //           <p className={`text-white/70 leading-relaxed ${inter.className}`}>
// //             These programs are not events — they are expressions of a deeper
// //             spiritual journey, where every act becomes a step toward self-realization.
// //           </p>

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { cinzel, inter } from "@/app/fonts";

// export default function Programs() {
//   return (
//     <section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

//       {/* 🌌 Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

//       {/* ✨ Soft Glow */}
//       <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-[#CFA95F]/10 blur-[160px] rounded-full -translate-x-1/2" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">

//         {/* 🔥 HEADER */}
//         <div className="text-center max-w-3xl mx-auto">

//           <p className="text-[#CFA95F] tracking-[0.4em] text-xs uppercase">
//             Spiritual Programs
//           </p>

//           <h2 className={`mt-6 text-5xl md:text-6xl text-white ${cinzel.className}`}>
//             A Path Through
//             <span className="block text-[#CFA95F]">
//               Service & Devotion
//             </span>
//           </h2>

//           <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
//             Each program is a step toward inner growth, where devotion meets action,
//             and spirituality becomes a lived experience.
//           </p>

//         </div>

//         {/* 🔥 MAIN LAYOUT */}
//         <div className="mt-24 grid lg:grid-cols-2 gap-16 items-start">

//           {/* 🌟 LEFT SIDE */}
//           <div>

//             {/* FEATURE CARD */}
//             <motion.div
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-[#CFA95F]/40 via-transparent to-[#CFA95F]/30"
//             >
//               <div className="relative p-10 rounded-[2rem] bg-[#0B0B1E]/80 backdrop-blur-xl border border-white/10">

//                 <p className="text-[#CFA95F] text-sm mb-3">
//                   Featured Program
//                 </p>

//                 <h3 className="text-3xl text-white mb-4">
//                   Annadhanam (Food Offering)
//                 </h3>

//                 <p className="text-white/70 leading-relaxed">
//                   Serving food to thousands is not charity — it is devotion in action.
//                   Annadhanam reflects the spirit of selfless giving, where every meal
//                   becomes an offering to humanity.
//                 </p>

//                 {/* Hover Glow */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition rounded-[2rem]" />

//               </div>
//             </motion.div>

//             {/* 🖼️ CLEAN IMAGE BLOCK */}
// <motion.div
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 1 }}
//   className="relative mt-12 flex justify-center gap-6"
// >

//   {/* Glow */}
//   <div className="absolute w-[450px] h-[450px] bg-[#CFA95F]/10 blur-[120px] rounded-full" />

//   {/* Image 1 */}
//   <div className="relative w-[200px] h-[260px] rounded-xl overflow-hidden border border-white/10 shadow-lg">

//     <img
//       src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1772704459/WhatsApp_Image_2026-03-05_at_10.44.57_AM_qnbh5k.jpg"
//       className="w-full h-full object-cover"
//     />

//     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

//   </div>

//   {/* Image 2 */}
//   <div className="relative w-[200px] h-[260px] rounded-xl overflow-hidden border border-white/10 shadow-lg">

//     <img
//       src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1770717303/DocScanner_02-Feb-2026_2-31_pm_page-0001_xmuskq.jpg"
//       className="w-full h-full object-cover"
//     />

//     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

//   </div>

// </motion.div>

//           </div>

//           {/* 📜 RIGHT SIDE LIST */}
//           <div className="space-y-6">

//             {[
//               {
//                 title: "Daily Pooja",
//                 desc: "Sacred rituals performed with devotion, creating a spiritual atmosphere of peace and connection.",
//               },
//               {
//                 title: "Spiritual Discourses",
//                 desc: "Guidance through teachings that help individuals understand life, purpose, and inner transformation.",
//               },
//               {
//                 title: "Community Service",
//                 desc: "Serving society through compassion-driven initiatives that uplift lives and spread kindness.",
//               },
//               {
//                 title: "Devotee Gatherings",
//                 desc: "Moments of unity where people come together to share devotion, faith, and spiritual energy.",
//               },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: 40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.2 }}
//                 whileHover={{ scale: 1.02 }}
//                 className="group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
//               >

//                 {/* Glow */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#CFA95F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition rounded-xl" />

//                 {/* Number */}
//                 <div className="text-[#CFA95F] text-sm mb-2">
//                   0{i + 1}
//                 </div>

//                 {/* Title */}
//                 <h4 className="text-white text-lg font-medium">
//                   {item.title}
//                 </h4>

//                 {/* Description */}
//                 <p className="text-white/60 mt-2 leading-relaxed">
//                   {item.desc}
//                 </p>

//               </motion.div>
//             ))}

//           </div>

//         </div>

//         {/* 🌟 FINAL TEXT */}
//         <div className="mt-24 max-w-4xl mx-auto text-center">

//           <p className={`text-white/70 leading-relaxed ${inter.className}`}>
//             These programs are not events — they are expressions of a deeper
//             spiritual journey, where every act becomes a step toward self-realization.
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { cinzel, inter } from "@/app/fonts";

export default function Programs() {
  return (
    <section id="programs" data-section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

      {/* ✨ Soft Glow */}
      <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-[#CFA95F]/10 blur-[160px] rounded-full -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-[#CFA95F] tracking-[0.4em] text-xs uppercase">
            Spiritual Programs
          </p>

          <h2 className={`mt-6 text-5xl md:text-6xl text-white ${cinzel.className}`}>
            A Path Through
            <span className="block text-[#CFA95F]">
              Service & Devotion
            </span>
          </h2>

          <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
            Each program is a step toward inner growth, where devotion meets action,
            and spirituality becomes a lived experience.
          </p>

        </div>

        {/* 🔥 MAIN LAYOUT */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-start">

          {/* 🌟 LEFT SIDE (FIXED) */}
          <div className="space-y-10">

            {/* FEATURE CARD */}


            {/* 🖼️ BALANCED IMAGE */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-[#CFA95F]/40 via-transparent to-[#CFA95F]/30"
>
  <div className="relative rounded-[2rem] overflow-hidden bg-[#0B0B1E]/80 backdrop-blur-xl border border-white/10">

    {/* 🖼️ IMAGE TOP */}
    <div className="relative h-[240px] w-full overflow-hidden">
      <img
        src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1772704459/WhatsApp_Image_2026-03-05_at_10.44.57_AM_qnbh5k.jpg"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    </div>

    {/* 📜 CONTENT */}
    <div className="p-8">

      <p className="text-[#CFA95F] text-sm mb-3">
        Featured Program
      </p>

      <h3 className="text-2xl text-white mb-3">
        Annadhanam (Food Offering)
      </h3>

      <p className="text-white/70 leading-relaxed">
        Serving food to thousands is not charity — it is devotion in action.
        Annadhanam reflects the spirit of selfless giving, where every meal
        becomes an offering to humanity.
      </p>

    </div>

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition rounded-[2rem]" />

  </div>
</motion.div>

          </div>

          {/* 📜 RIGHT SIDE */}
          <div className="space-y-6">

            {[
              {
                title: "Daily Pooja",
                desc: "Sacred rituals performed with devotion, creating a spiritual atmosphere of peace and connection.",
              },
            //   {
            //     title: "Spiritual Discourses",
            //     desc: "Guidance through teachings that help individuals understand life, purpose, and inner transformation.",
            //   },
              {
                title: "Community Service",
                desc: "Serving society through compassion-driven initiatives that uplift lives and spread kindness.",
              },
              {
                title: "Devotee Gatherings",
                desc: "Moments of unity where people come together to share devotion, faith, and spiritual energy.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
              >

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#CFA95F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition rounded-xl" />

                {/* Number */}
                <div className="text-[#CFA95F] text-sm mb-2">
                  0{i + 1}
                </div>

                {/* Title */}
                <h4 className="text-white text-lg font-medium">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-white/60 mt-2 leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

        {/* 🌟 FINAL TEXT */}
        <div className="mt-24 max-w-4xl mx-auto text-center">

          <p className={`text-white/70 leading-relaxed ${inter.className}`}>
            These programs are not events — they are expressions of a deeper
            spiritual journey, where every act becomes a step toward self-realization.
          </p>

        </div>

      </div>
    </section>
  );
}