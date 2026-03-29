
// "use client";

// import { motion } from "framer-motion";
// import { about } from "@/lib/content";
// import { cinzel, inter } from "@/app/fonts";

// export default function About() {
//   return (
//     <section className="relative py-32 overflow-hidden">

//       {/* Glow */}
//       <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="relative"
//         >
//           <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

//           <img
//             src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939324/bangaru_rok3vv.jpg"
//             className="relative rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
//           />
//         </motion.div>

//         {/* Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//         >
//           <h2 className={`text-5xl text-white ${cinzel.className}`}>
//             Who is Amma?
//           </h2>

//           <p className={`mt-6 text-white/70 ${inter.className}`}>
//             {about.intro}
//           </p>

//           <div className="mt-10 grid gap-6">
//             {about.highlights.map((item) => (
//               <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition">
//                 <h3 className="text-white text-xl">{item.title}</h3>
//                 <p className="text-white/60 mt-2">{item.text}</p>
//               </div>
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

export default function About() {
  return (
    <section id="about" data-section className="relative py-36 bg-[#0B0B1E] overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

      {/* ✨ Golden Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#CFA95F]/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* 🖼️ IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center items-center"
        >

          {/* 🌟 BACK LIGHT */}
          <div className="absolute w-[550px] h-[550px] bg-[#CFA95F]/10 blur-[160px] rounded-full" />

          {/* 🔶 HALO RINGS */}
          <div className="absolute w-[480px] h-[480px] rounded-full border border-[#CFA95F]/30" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-[#CFA95F]/20" />

          {/* ✨ FRONT GLOW */}
          <div className="absolute w-[420px] h-[420px] bg-[#CFA95F]/10 blur-[80px] rounded-full" />

          {/* 🖼️ IMAGE */}
          <div className="relative w-[380px] h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.7)]">

            <img
              src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939324/bangaru_rok3vv.jpg"
              alt="Amma"
              className="w-full h-full object-cover scale-105"
            />

            {/* Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Golden shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/10 via-transparent to-transparent mix-blend-overlay" />

          </div>

        </motion.div>

        {/* ✨ CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >

          {/* Tag */}
          <p className="text-[#CFA95F] tracking-[0.35em] text-xs uppercase mb-4">
            About Amma
          </p>

          {/* Title */}
          <h2 className={`text-5xl md:text-6xl text-white ${cinzel.className}`}>
            Who is{" "}
            <span className="text-[#CFA95F]">Amma</span>?
          </h2>

          {/* Intro */}
          <p className={`mt-6 text-white/70 leading-relaxed ${inter.className}`}>
            {about.intro}
          </p>

          {/* 🔥 HIGHLIGHTS */}
          <div className="mt-12 space-y-6">

            {about.highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-[#CFA95F]/40 via-transparent to-[#CFA95F]/30"
              >

                {/* INNER CARD */}
                <div className="p-6 rounded-2xl bg-[#0B0B1E]/80 backdrop-blur-xl border border-white/10">

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#CFA95F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition rounded-2xl" />

                  <h3 className="text-white text-xl">{item.title}</h3>
                  <p className="text-white/60 mt-2">{item.text}</p>

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}