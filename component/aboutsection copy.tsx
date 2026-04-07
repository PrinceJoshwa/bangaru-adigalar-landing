"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { cinzel, inter } from "@/app/fonts";

export default function AboutSacred() {
  // const fadeUp = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } },
  // };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const, // ✅ FIX HERE
    },
  },
};

  return (
    <section className="relative bg-[#FCFBFA] py-32 overflow-hidden selection:bg-[#CE9B59] selection:text-white">
      
      {/* --- DIVINE LIGHTING (BACKGROUND) --- */}
      {/* Top descending light (Sunlight/Grace) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[radial-gradient(ellipse_at_top,_#EDE490_0%,_transparent_70%)] opacity-30 pointer-events-none" />
      
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* 🔱 LEFT — THE SANCTUM (IMAGE) 🔱 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative flex justify-center w-full"
          >
            {/* The Breathing Aura (Khaki Glow) */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#EDE490] blur-[80px] rounded-full z-0" 
            />

            {/* The Outer Golden Shrine Frame */}
            <div className="relative z-10 w-full max-w-[420px] p-3 rounded-t-full rounded-b-md border-[2px] border-[#CE9B59] shadow-[0_30px_60px_rgba(150,63,46,0.15)] bg-[#FCFBFA]">
              
              {/* Inner Arch Layer */}
              <div className="relative w-full aspect-[3/4] rounded-t-full rounded-b-sm overflow-hidden border border-[#CE9B59]/30 bg-[#F4EFE8] group">
                
                {/* Subtle Image Warming Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#963F2E]/20 to-transparent z-10 pointer-events-none mix-blend-overlay" />
                
                <Image
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939324/bangaru_rok3vv.jpg"
                  alt="Bangaru Adigalar"
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-[1.03]"
                />
              </div>

              {/* Devotional Base Plaque / Ornament */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#FCFBFA] px-6 py-2 border border-[#CE9B59] rounded-full shadow-lg flex items-center gap-3">
                <span className="text-[#CE9B59] text-sm">✧</span>
                <span className={`${cinzel.className} text-[#963F2E] text-xs font-bold tracking-[0.2em] uppercase`}>Amma</span>
                <span className="text-[#CE9B59] text-sm">✧</span>
              </div>
            </div>
          </motion.div>


          {/* 🔱 RIGHT — THE SCRIPTURE (TEXT) 🔱 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="lg:col-span-7 flex flex-col justify-center pt-8 lg:pt-0"
          >
            {/* Sacred Motif Header */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <span className="text-[#CE9B59]">✧</span>
              <div className="h-[1px] w-12 bg-[#CE9B59]/60" />
              <p className="text-[#CE9B59] tracking-[0.4em] text-xs uppercase font-bold">
                The Divine Path
              </p>
              <div className="h-[1px] w-12 bg-[#CE9B59]/60" />
              <span className="text-[#CE9B59]">✧</span>
            </motion.div>

            {/* Monumental Headline */}
            <motion.h2 
              variants={fadeUp}
              className={`${cinzel.className} text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-10 text-[#963F2E]`}
            >
              The Journey from <br className="hidden lg:block" /> 
              <span className="text-[#CE9B59] italic font-light">
                Teacher to Guide
              </span>
            </motion.h2>

            <div className={`${inter.className} text-[#6B5C57] text-[1.1rem] leading-[1.8] space-y-8 font-light`}>
              
              <motion.p variants={fadeUp}>
                Arulthiru Bangaru Adigalar was born on March 3, 1941, in the
                village of Melmaruvathur, Tamil Nadu. His early years were rooted in profound modesty.
                Before his spiritual calling was globally recognized and worshipped, he humbly served
                as a school teacher, guiding young minds in Arapedu village.
              </motion.p>

              {/* The "Golden Engraving" Quote Block */}
              <motion.div 
                variants={fadeUp}
                className="relative my-12 py-10 px-8 lg:px-12 bg-[#EDE490]/10 border-y border-[#CE9B59]/30"
              >
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#CE9B59]" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#CE9B59]" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#CE9B59]" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#CE9B59]" />

                <p className={`${cinzel.className} text-[#963F2E] text-2xl lg:text-3xl leading-snug italic text-center font-medium`}>
                  "Devotees noted early signs of his spiritual depth. A young
                  Adigalar was once found sleeping peacefully with a king cobra
                  coiled around him — a sign of ultimate divine protection."
                </p>
              </motion.div>

              <motion.p variants={fadeUp}>
                Unlike ascetic monks who renounce worldly attachments, Adigalar
                lived a complete, relatable family life. Marrying Tmt. Lakshmi in 1968,
                they raised four children. This established his ultimate teaching: that true devotion, 
                spiritual leadership, and earthly family responsibilities can beautifully coexist.
              </motion.p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}