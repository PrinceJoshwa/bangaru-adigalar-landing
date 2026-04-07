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
    y: [0, -6, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function LifeJourney() {
  return (
    <section
      id="journey"
      data-section
      className="relative isolate overflow-hidden bg-[#FCFBFA] px-6 py-28 text-[#5A4A45] sm:px-8 sm:py-32 lg:px-10 selection:bg-[#CE9B59] selection:text-white"
    >
      {/* Divine Auras (Khaki and Aztec Gold) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(237,228,144,0.3),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(206,155,89,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(150,63,46,0.05),_transparent_40%)]" />
      
      {/* Sacred Geometry Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#CE9B59_1px,transparent_1px),linear-gradient(to_bottom,#CE9B59_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#EDE490]/20 to-transparent" />

      {/* Floating Ambient Orbs */}
      <motion.div
        className="absolute left-[-5%] top-[15%] h-[400px] w-[400px] rounded-full bg-[#EDE490]/40 blur-[140px] pointer-events-none"
        animate={{ x: [0, 20, -10, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[-5%] h-[450px] w-[450px] rounded-full bg-[#CE9B59]/20 blur-[150px] pointer-events-none"
        animate={{ x: [0, -25, 10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={reveal}
            className={`inline-flex items-center gap-3 rounded-full border border-[#CE9B59]/60 bg-[#EDE490]/30 px-5 py-2 text-[11px] uppercase tracking-[0.34em] text-[#963F2E] font-semibold ${inter.className}`}
          >
            <span className="h-2 w-2 rounded-full bg-[#963F2E] shadow-[0_0_10px_rgba(150,63,46,0.6)]" />
            Divine Journey
          </motion.p>

          <motion.h2
            variants={reveal}
            className={`mt-8 text-5xl leading-[1.05] text-[#963F2E] sm:text-6xl lg:text-[4.5rem] ${cinzel.className}`}
          >
            The sacred timeline of <br className="hidden sm:block"/>
            <span className="text-[#CE9B59] italic font-light">
              His divine journey
            </span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className={`mx-auto mt-8 max-w-3xl text-base leading-8 text-[#6B5C57] sm:text-lg font-light ${inter.className}`}
          >
            Reflecting upon the auspicious milestones that shaped Amma's profound spiritual journey, offering divine guidance to crores of devotees through boundless compassion and the establishment of the Holy Adhiparasakthi Siddhar Peetam.
          </motion.p>

          {/* Value Pills */}
          <motion.div
            variants={reveal}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            {["Spiritual Milestones", "Sacred Legacy", "Service to Mankind"].map((pill) => (
              <div key={pill} className="rounded-full border border-[#CE9B59]/40 bg-white px-6 py-3 text-sm text-[#963F2E] font-medium shadow-sm">
                {pill}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* TIMELINE SECTION */}
        <div className="relative mt-28">
          {/* Central Golden Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#CE9B59]/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
          
          {/* Animated Light Beam on Timeline */}
          <div className="absolute left-6 top-10 h-[calc(100%-5rem)] w-[2px] bg-gradient-to-b from-[#EDE490]/0 via-[#CE9B59] to-[#EDE490]/0 md:left-1/2 md:-translate-x-1/2 opacity-60" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((item, index) => {
              const rightSide = index % 2 !== 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative grid items-center gap-6 md:grid-cols-2"
                >
                  <div className={`hidden md:block ${rightSide ? "order-1" : "order-2"}`} />

                  <div className={`relative pl-16 md:pl-0 ${rightSide ? "md:order-2 md:pl-16" : "md:order-1 md:pr-16"}`}>
                    
                    {/* The Milestone Card (Plaque) */}
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="group relative"
                    >
                      {/* Subtle Glow Behind Card */}
                      <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-[#CE9B59]/20 to-[#EDE490]/10 opacity-0 blur-md transition duration-500 group-hover:opacity-100" />
                      
                      <motion.div
                        variants={floatSlow}
                        animate="animate"
                        className="relative overflow-hidden rounded-3xl border border-[#CE9B59]/30 bg-white p-8 md:p-10 shadow-[0_20px_50px_-10px_rgba(150,63,46,0.08)] transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(150,63,46,0.12)]"
                      >
                        {/* Decorative Top Accent Line */}
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#CE9B59] to-transparent opacity-60" />
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-4">
                            {/* Year Badge */}
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FCFBFA] border border-[#CE9B59]/40 shadow-inner">
                              <div className="h-3 w-3 rounded-full bg-[#963F2E] shadow-[0_0_12px_rgba(150,63,46,0.5)]" />
                            </div>
                            <span className={`rounded-full border border-[#CE9B59]/30 bg-[#EDE490]/20 px-4 py-1.5 text-[12px] uppercase tracking-[0.25em] font-semibold text-[#963F2E] ${inter.className}`}>
                              {item.year}
                            </span>
                          </div>

                          <h3 className={`mt-6 text-2xl leading-tight text-[#963F2E] sm:text-[1.8rem] ${cinzel.className}`}>
                            {item.title}
                          </h3>

                          <p className={`mt-4 text-base leading-relaxed text-[#6B5C57] font-light ${inter.className}`}>
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Timeline Center Dot (Jewel) */}
                    <motion.div
                      className="absolute left-6 top-12 h-4 w-4 -translate-x-1/2 rounded-full bg-[#FCFBFA] border-[3px] border-[#CE9B59] shadow-[0_0_15px_rgba(206,155,89,0.8)] md:left-auto md:right-[-2.5rem] md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2 flex items-center justify-center z-20"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#963F2E]" />
                    </motion.div>

                    {/* Connecting Lines to Central Timeline */}
                    {!rightSide && <div className="hidden md:block absolute right-[-2.5rem] top-1/2 h-[2px] w-10 -translate-y-1/2 bg-gradient-to-r from-[#CE9B59]/60 to-transparent z-10" />}
                    {rightSide && <div className="hidden md:block absolute left-[-2.5rem] top-1/2 h-[2px] w-10 -translate-y-1/2 bg-gradient-to-l from-[#CE9B59]/60 to-transparent z-10" />}
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