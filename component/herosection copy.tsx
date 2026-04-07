// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { cinzel, inter } from "@/app/fonts";

// export default function EliteSpiritualHero() {
//   return (
//     <section className="relative min-h-screen bg-[#0c111f] overflow-hidden text-[#f4efe8]">

//       {/* Background Layers (UPDATED COLORS) */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0c111f] via-[#2d1f44] to-[#0c111f]" />

//       {/* Subtle grid */}
//       <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

//         {/* Top Label */}
//         <p className="text-[#b66570] tracking-[0.4em] text-xs uppercase mb-8">
//           Divine Presence
//         </p>

//         <div className="grid lg:grid-cols-2 gap-20 items-center">

//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//           >
//             {/* Headline */}
//             <h1
//               className={`${cinzel.className} text-5xl md:text-7xl leading-[1.1] text-[#f4efe8]`}
//             >
//               Arulthiru <br />
//               Bangaru Adigalar
//             </h1>

//             {/* Subheadline (PRIMARY ACCENT) */}
//             <p className="mt-6 text-xl text-[#ed9e6f] font-light tracking-wide">
//               The Divine Incarnation of Adhiparasakthi
//             </p>

//             {/* Description */}
//             <p
//               className={`${inter.className} mt-8 text-[#cfc7bc] text-lg leading-relaxed max-w-xl`}
//             >
//               A life dedicated to spiritual equality, breaking social barriers,
//               and service to humanity. Known to millions simply as{" "}
//               <span className="italic text-[#f4efe8]">“Amma.”</span>
//             </p>

//             {/* Buttons */}
//             <div className="mt-12 flex flex-wrap gap-6">
//               {/* Primary */}
//               <button className="px-8 py-4 bg-[#ed9e6f] text-[#0c111f] rounded-full text-sm tracking-wide shadow-[0_10px_30px_rgba(237,158,111,0.25)] hover:scale-[1.05] transition">
//                 Read the Biography
//               </button>

//               {/* Secondary */}
//               <button className="px-8 py-4 border border-[#80466e] text-[#b66570] rounded-full hover:bg-[#512f5c]/40 transition">
//                 Explore His Teachings
//               </button>
//             </div>
//           </motion.div>

//           {/* RIGHT IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="relative flex justify-center"
//           >
//             {/* Soft vertical glow (UPDATED) */}
//             <div className="absolute w-[300px] h-[500px] bg-gradient-to-b from-[#ed9e6f33] to-transparent blur-[80px]" />

//             {/* Image */}
//             <div className="relative w-[260px] md:w-[320px] aspect-[3/4] overflow-hidden rounded-[160px] border border-[#80466e]/40">
//               <Image
//                 src="/amma.jpg"
//                 alt="Bangaru Adigalar"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>

//         </div>

//         {/* Bottom Divider */}
//         <div className="mt-24 flex items-center justify-center gap-4">
//           <div className="h-[1px] w-20 bg-[#80466e]" />
//           <span className="text-[#b66570] text-sm">✦</span>
//           <div className="h-[1px] w-20 bg-[#80466e]" />
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cinzel, inter } from "@/app/fonts"; // Ensure these are imported from your fonts file

export default function EliteSpiritualHero() {
  return (
    <section className="relative min-h-screen bg-[#FCFBFA] flex items-center justify-center overflow-hidden selection:bg-[#CE9B59] selection:text-[#FCFBFA]">
      
      {/* Ambient Khaki Glow Background */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#EDE490] rounded-full blur-[150px] opacity-30 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#CE9B59] rounded-full blur-[180px] opacity-10 pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          {/* Subtle Accent Line & Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-16 bg-[#CE9B59]" />
            <p className="text-[#CE9B59] tracking-[0.3em] text-sm font-semibold uppercase">
              Divine Presence
            </p>
          </div>

          {/* Main Headline - Chestnut */}
          <h1 className={`${cinzel.className} text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-[#963F2E]`}>
            Arulthiru <br />
            Bangaru Adigalar
          </h1>

          {/* Subheadline - Aztec Gold */}
          <p className={`${cinzel.className} mt-6 text-2xl text-[#CE9B59] font-medium italic tracking-wide`}>
            The Divine Incarnation of Adhiparasakthi
          </p>

          {/* Body Text */}
          <p className={`${inter.className} mt-8 text-[#5A4A45] text-lg leading-relaxed max-w-lg font-light`}>
            A life dedicated to spiritual equality, breaking social barriers,
            and service to humanity. Known to millions simply as{" "}
            <span className="font-semibold text-[#963F2E]">“Amma.”</span>
          </p>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-wrap gap-6 items-center">
            {/* Primary Button - Chestnut background with Khaki text */}
            <button className="px-8 py-4 bg-[#963F2E] text-[#EDE490] rounded-sm text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#7D3425] hover:shadow-[0_15px_30px_rgba(150,63,46,0.3)] transition-all duration-300">
              Read Biography
            </button>

            {/* Secondary Button - Transparent with Aztec Gold border */}
            <button className="px-8 py-4 border border-[#CE9B59] text-[#963F2E] rounded-sm text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#CE9B59]/10 transition-colors duration-300">
              Explore Teachings
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end pr-4 lg:pr-8"
        >
          {/* Offset Decorative Frame (Aztec Gold) */}
          <div className="absolute top-6 -right-4 lg:-right-8 w-full max-w-[340px] aspect-[3/4] border-2 border-[#CE9B59] rounded-tl-[100px] rounded-br-[100px] z-0" />
          
          {/* Solid Offset Block (Khaki) */}
          <div className="absolute -bottom-6 -left-4 w-[80%] h-[60%] bg-[#EDE490] rounded-bl-[100px] z-0 opacity-80" />

          {/* Main Image Container */}
          <div className="relative z-10 w-full max-w-[340px] aspect-[3/4] overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-2xl shadow-[#963F2E]/20">
            {/* Image Overlay to subtly warm it up */}
            <div className="absolute inset-0 bg-[#CE9B59] mix-blend-overlay opacity-20 z-10 pointer-events-none" />
            
            <Image
              src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_1_nt513j.jpg"
              alt="Bangaru Adigalar"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}