// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { cinzel, inter } from "@/app/fonts";

// export default function AboutSacred() {
//   // Staggered text animations for a graceful entrance
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.25,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
//   };

//   return (
//     <section className="relative bg-[#0c111f] text-[#f4efe8] py-32 overflow-hidden">
      
//       {/* 1. Base Gradient matching the Hero */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0c111f] via-[#2d1f44] to-[#0c111f]" />

//       {/* 2. Ethereal Central Aura */}
//       <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
//         <div className="w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(237,158,111,0.08)_0%,_transparent_60%)] blur-[100px]" />
//       </div>

//       {/* 3. Sacred Geometry Grid */}
//       <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
//           {/* 🔱 LEFT — THE SANCTUM IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="lg:col-span-5 relative flex justify-center group"
//           >
//             {/* Divine Backlight Glow */}
//             <div className="absolute w-[300px] h-[450px] bg-gradient-to-b from-[#ed9e6f22] via-[#80466e22] to-transparent blur-[60px] pointer-events-none" />

//             {/* Sanctum Arch Frame (Premium Spiritual Vibe) */}
//             <motion.div 
//               animate={{ y: [0, -10, 0] }} 
//               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//               className="relative w-full max-w-[340px] mx-auto aspect-[3/4] overflow-hidden rounded-t-[180px] rounded-b-[24px] border border-[#80466e]/50 shadow-[0_20px_60px_rgba(12,17,31,0.8)] z-10 p-2 bg-[#2d1f44]/30 backdrop-blur-sm"
//             >
//               <div className="relative w-full h-full rounded-t-[170px] rounded-b-[16px] overflow-hidden">
//                 <Image
//                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939324/bangaru_rok3vv.jpg"
//                   alt="Bangaru Adigalar"
//                   fill
//                   className="object-cover transition-transform duration-1000 group-hover:scale-105"
//                 />
//                 {/* Inner shadow for depth */}
//                 <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(12,17,31,0.6)] rounded-t-[170px] rounded-b-[16px] pointer-events-none" />
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* 🔱 RIGHT — SACRED TEXT */}
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
//           >
//             {/* Top Label */}
//             <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
//               <div className="h-[1px] w-12 bg-[#80466e]" />
//               <p className="text-[#b66570] tracking-[0.4em] text-xs uppercase font-semibold">
//                 Early Life
//               </p>
//             </motion.div>

//             {/* Heading */}
//             <motion.h2 
//               variants={itemVariants}
//               className={`${cinzel.className} text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-10 text-[#f4efe8]`}
//             >
//               The Journey from <br className="hidden lg:block" /> 
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed9e6f] to-[#b66570]">
//                 Teacher to Guide
//               </span>
//             </motion.h2>

//             {/* Paragraphs */}
//             <div className={`${inter.className} space-y-8 text-[#cfc7bc] text-lg leading-relaxed`}>
              
//               <motion.p variants={itemVariants} className="font-light">
//                 Arulthiru Bangaru Adigalar was born on March 3, 1941, in the
//                 village of Melmaruvathur, Tamil Nadu, to Sri Gopala Naicker and
//                 Smt. Meenakshi Ammal. His early years were rooted in modesty.
//                 Before his spiritual calling was globally recognized, he worked
//                 as a school teacher in Arapedu village near Achirupakkam.
//               </motion.p>

//               {/* Spiritual Blockquote */}
//               <motion.blockquote 
//                 variants={itemVariants}
//                 className="relative p-8 my-10 bg-[#512f5c]/10 border-l-[3px] border-[#ed9e6f] rounded-r-2xl backdrop-blur-sm shadow-[0_10px_30px_rgba(12,17,31,0.5)]"
//               >
//                 {/* Decorative Quote Mark */}
//                 <span className={`${cinzel.className} absolute -top-8 left-4 text-8xl text-[#80466e] opacity-30 select-none`}>
//                   "
//                 </span>
//                 <p className="text-[#ed9e6f] font-light italic relative z-10 text-xl leading-relaxed">
//                   Devotees noted early signs of his spiritual depth. A young
//                   Adigalar was once found sleeping peacefully with a king cobra
//                   coiled around him — a moment interpreted as divine protection.
//                 </p>
//               </motion.blockquote>

//               <motion.p variants={itemVariants} className="font-light">
//                 Unlike ascetic monks who renounce worldly attachments, Adigalar
//                 lived a complete family life. He married Tmt. Lakshmi in 1968,
//                 and together they raised four children. This established one of
//                 his core spiritual examples: that devotion, leadership, and
//                 family responsibilities can coexist.
//               </motion.p>

//             </div>
//           </motion.div>

//         </div>

//         {/* Bottom Divider matching Hero */}
//         <div className="mt-32 flex items-center justify-center gap-4">
//           <div className="h-[1px] w-24 bg-[#80466e]/60" />
//           <span className="text-[#b66570] text-sm">✦</span>
//           <div className="h-[1px] w-24 bg-[#80466e]/60" />
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { cinzel, inter } from "@/app/fonts";

export default function AboutSacred() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
//   };

  const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut", // ✅ correct type
    },
  },
};

  return (
    <section className="relative bg-[#0c111f] text-[#f4efe8] py-32 overflow-hidden">
      
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c111f] via-[#2d1f44] to-[#0c111f]" />

      {/* 2. Ethereal Central Aura */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(237,158,111,0.08)_0%,_transparent_60%)] blur-[100px]" />
      </div>

      {/* 3. Sacred Geometry Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* 🔱 LEFT — THE SANCTUM IMAGE (ENLARGED) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative flex justify-center group w-full"
          >
            {/* Dynamic Backlight Glow - Scaled up to cover the new larger image */}
            <div className="absolute inset-[-10%] bg-gradient-to-b from-[#ed9e6f22] via-[#80466e22] to-transparent blur-[70px] pointer-events-none rounded-t-full" />

            {/* Sanctum Arch Frame - Increased max-w to 460px and used rounded-t-full for perfect scaling */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[460px] mx-auto aspect-[3/4] overflow-hidden rounded-t-full rounded-b-3xl border border-[#80466e]/50 shadow-[0_20px_60px_rgba(12,17,31,0.8)] z-10 p-2.5 bg-[#2d1f44]/30 backdrop-blur-sm"
            >
              <div className="relative w-full h-full rounded-t-full rounded-b-2xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939324/bangaru_rok3vv.jpg"
                  alt="Bangaru Adigalar"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(12,17,31,0.6)] rounded-t-full rounded-b-2xl pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>

          {/* 🔱 RIGHT — SACRED TEXT */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
          >
            {/* Top Label */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#80466e]" />
              <p className="text-[#b66570] tracking-[0.4em] text-xs uppercase font-semibold">
                Early Life
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              variants={itemVariants}
              className={`${cinzel.className} text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-10 text-[#f4efe8]`}
            >
              The Journey from <br className="hidden lg:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ed9e6f] to-[#b66570]">
                Teacher to Guide
              </span>
            </motion.h2>

            {/* Paragraphs */}
            <div className={`${inter.className} space-y-8 text-[#cfc7bc] text-lg leading-relaxed`}>
              
              <motion.p variants={itemVariants} className="font-light">
                Arulthiru Bangaru Adigalar was born on March 3, 1941, in the
                village of Melmaruvathur, Tamil Nadu, to Sri Gopala Naicker and
                Smt. Meenakshi Ammal. His early years were rooted in modesty.
                Before his spiritual calling was globally recognized, he worked
                as a school teacher in Arapedu village near Achirupakkam.
              </motion.p>

              {/* Spiritual Blockquote */}
              <motion.blockquote 
                variants={itemVariants}
                className="relative p-8 my-10 bg-[#512f5c]/10 border-l-[3px] border-[#ed9e6f] rounded-r-2xl backdrop-blur-sm shadow-[0_10px_30px_rgba(12,17,31,0.5)]"
              >
                <span className={`${cinzel.className} absolute -top-8 left-4 text-8xl text-[#80466e] opacity-30 select-none`}>
                  "
                </span>
                <p className="text-[#ed9e6f] font-light italic relative z-10 text-xl leading-relaxed">
                  Devotees noted early signs of his spiritual depth. A young
                  Adigalar was once found sleeping peacefully with a king cobra
                  coiled around him — a moment interpreted as divine protection.
                </p>
              </motion.blockquote>

              <motion.p variants={itemVariants} className="font-light">
                Unlike ascetic monks who renounce worldly attachments, Adigalar
                lived a complete family life. He married Tmt. Lakshmi in 1968,
                and together they raised four children. This established one of
                his core spiritual examples: that devotion, leadership, and
                family responsibilities can coexist.
              </motion.p>

            </div>
          </motion.div>

        </div>

        {/* Bottom Divider */}
        <div className="mt-32 flex items-center justify-center gap-4">
          <div className="h-[1px] w-24 bg-[#80466e]/60" />
          <span className="text-[#b66570] text-sm">✦</span>
          <div className="h-[1px] w-24 bg-[#80466e]/60" />
        </div>

      </div>
    </section>
  );
}