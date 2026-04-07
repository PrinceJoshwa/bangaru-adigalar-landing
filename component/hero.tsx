// // // // // // // // // // "use client";

// // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // import { cinzel, inter } from "@/app/fonts";

// // // // // // // // // // const PremiumHero = () => {
// // // // // // // // // //   return (
// // // // // // // // // //     <section className="relative isolate min-h-screen overflow-hidden bg-[#0B0B1E]">

// // // // // // // // // //       {/* 🌌 Gradient Base */}
// // // // // // // // // //       <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B1E] via-[#1A1A40] to-[#6A11CB]" />

// // // // // // // // // //       {/* 🌟 Aura Glow */}
// // // // // // // // // //       <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-purple-500/20 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />

// // // // // // // // // //       {/* ✨ Extra Light Glow */}
// // // // // // // // // //       <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-pink-400/10 blur-[120px] rounded-full" />

// // // // // // // // // //       {/* 🔝 Header */}
// // // // // // // // // //       <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10">
// // // // // // // // // //         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

// // // // // // // // // //           <h1 className={`text-2xl tracking-widest text-white ${cinzel.className}`}>
// // // // // // // // // //             Bangaru Adigalar
// // // // // // // // // //           </h1>

// // // // // // // // // //           <nav className={`hidden md:flex gap-10 text-white/70 ${inter.className}`}>
// // // // // // // // // //             <a href="#" className="hover:text-white transition">Home</a>
// // // // // // // // // //             <a href="#" className="hover:text-white transition">About</a>
// // // // // // // // // //             <a href="#" className="hover:text-white transition">Services</a>
// // // // // // // // // //             <a href="#" className="hover:text-white transition">Contact</a>
// // // // // // // // // //           </nav>

// // // // // // // // // //           <button className="relative overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-xl hover:scale-105 transition">
// // // // // // // // // //             Blessings
// // // // // // // // // //             <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-1000" />
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </header>

// // // // // // // // // //       {/* 🌠 Hero Grid */}
// // // // // // // // // //       <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">

// // // // // // // // // //         {/* 🔥 LEFT CONTENT */}
// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial={{ opacity: 0, y: 60 }}
// // // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // // //           transition={{ duration: 1.2 }}
// // // // // // // // // //         >
// // // // // // // // // //           {/* Tag */}
// // // // // // // // // //           <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-xs tracking-[0.35em] text-purple-200 uppercase mb-6">
// // // // // // // // // //             Divine Grace & Blessings
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Title */}
// // // // // // // // // //           <h1 className={`text-5xl md:text-7xl leading-[1.05] text-white ${cinzel.className}`}>
// // // // // // // // // //             Experience the Divine Grace and Boundless Love of{" "}
// // // // // // // // // //             <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
// // // // // // // // // //               Amma
// // // // // // // // // //             </span>
// // // // // // // // // //           </h1>

// // // // // // // // // //           {/* Subtitle */}
// // // // // // // // // //           <p className={`mt-8 max-w-xl text-lg text-white/70 leading-relaxed ${inter.className}`}>
// // // // // // // // // //             Step into a sanctuary of peace, devotion, and selfless service. Discover the profound teachings and universal love guiding millions toward inner awakening.
// // // // // // // // // //           </p>

// // // // // // // // // //           {/* Buttons */}
// // // // // // // // // //           <div className="mt-10 flex flex-wrap gap-5">
// // // // // // // // // //             <button className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-2xl hover:scale-105 transition">
// // // // // // // // // //               Explore the Story
// // // // // // // // // //               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-1000" />
// // // // // // // // // //             </button>

// // // // // // // // // //             <button className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition backdrop-blur-md">
// // // // // // // // // //               Read Divine Wisdom
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </motion.div>

// // // // // // // // // //         {/* 🌌 RIGHT SIDE PREMIUM CARDS */}
// // // // // // // // // // <motion.div
// // // // // // // // // //   initial={{ opacity: 0, scale: 0.9 }}
// // // // // // // // // //   animate={{ opacity: 1, scale: 1 }}
// // // // // // // // // //   transition={{ duration: 1.2 }}
// // // // // // // // // //   className="relative flex justify-center items-center"
// // // // // // // // // // >

// // // // // // // // // //   {/* 🌟 MAIN AURA GLOW */}
// // // // // // // // // //   <div className="absolute w-[650px] h-[650px] bg-purple-600/30 blur-[180px] rounded-full" />

// // // // // // // // // //   {/* ✨ SECONDARY GLOW */}
// // // // // // // // // //   <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full" />

// // // // // // // // // //   {/* 🔵 OUTER RING (VISIBLE NOW) */}
// // // // // // // // // //   <div className="absolute w-[560px] h-[560px] border border-white/20 rounded-full animate-pulse" />

// // // // // // // // // //   {/* 🟣 INNER RING */}
// // // // // // // // // //   <div className="absolute w-[480px] h-[480px] border border-purple-400/30 rounded-full" />

// // // // // // // // // //   {/* 🖼️ IMAGE CONTAINER (BIG FIX HERE) */}
// // // // // // // // // //   <div className="relative w-[420px] h-[520px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.7)]">

// // // // // // // // // //     {/* IMAGE */}
// // // // // // // // // //     <img
// // // // // // // // // //       src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_1_nt513j.jpg"
// // // // // // // // // //       alt="Bangaru Adigalar"
// // // // // // // // // //       className="w-full h-full object-cover scale-110 hover:scale-115 transition duration-700"
// // // // // // // // // //     />

// // // // // // // // // //     {/* 🔥 STRONG OVERLAY (DEPTH) */}
// // // // // // // // // //     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

// // // // // // // // // //     {/* ✨ SHINE SWEEP */}
// // // // // // // // // //     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition duration-700" />
// // // // // // // // // //   </div>

// // // // // // // // // //   {/* ✨ FLOATING LIGHTS */}
// // // // // // // // // //   <div className="absolute top-12 right-12 w-2 h-2 bg-white rounded-full animate-ping" />
// // // // // // // // // //   <div className="absolute bottom-12 left-12 w-2 h-2 bg-white rounded-full animate-pulse" />

// // // // // // // // // // </motion.div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* ✨ Floating Particles */}
// // // // // // // // // //       <div className="absolute inset-0 pointer-events-none">
// // // // // // // // // //         <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/3 animate-ping" />
// // // // // // // // // //         <div className="absolute w-1 h-1 bg-white rounded-full top-1/2 left-2/3 animate-pulse" />
// // // // // // // // // //         <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/4 left-1/2 animate-bounce" />
// // // // // // // // // //       </div>
// // // // // // // // // //     </section>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default PremiumHero;

// // // // // // // // // "use client";

// // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // import { cinzel, inter } from "@/app/fonts";

// // // // // // // // // const PremiumHero = () => {
// // // // // // // // //   return (
// // // // // // // // //     <section id="home" data-section className="relative isolate min-h-screen overflow-hidden bg-[#0B0B1E]">

// // // // // // // // //       {/* 🌌 Gradient Base */}
// // // // // // // // //       <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

// // // // // // // // //       {/* ✨ GOLDEN AURA */}
// // // // // // // // //       <div className="absolute top-1/2 left-1/2 w-[750px] h-[750px] bg-[#CFA95F]/10 blur-[200px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />

// // // // // // // // //       {/* 🔝 Header */}

// // // // // // // // //       {/* 🌠 HERO GRID */}
// // // // // // // // //       <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">

// // // // // // // // //         {/* 🔥 LEFT CONTENT */}
// // // // // // // // //         <motion.div
// // // // // // // // //           initial={{ opacity: 0, y: 60 }}
// // // // // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // // // // //           transition={{ duration: 1.2 }}
// // // // // // // // //         >

// // // // // // // // //           {/* Tag */}
// // // // // // // // //           <div className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-xs tracking-[0.35em] text-[#CFA95F] uppercase mb-6">
// // // // // // // // //             Divine Grace & Blessings
// // // // // // // // //           </div>

// // // // // // // // //           {/* Title */}
// // // // // // // // //           <h1 className={`text-5xl md:text-7xl leading-[1.05] text-white ${cinzel.className}`}>
// // // // // // // // //             Experience the Divine Grace and Boundless Love of{" "}
// // // // // // // // //             <span className="text-[#CFA95F]">
// // // // // // // // //               Amma
// // // // // // // // //             </span>
// // // // // // // // //           </h1>

// // // // // // // // //           {/* Subtitle */}
// // // // // // // // //           <p className={`mt-8 max-w-xl text-lg text-white/70 leading-relaxed ${inter.className}`}>
// // // // // // // // //             Step into a sanctuary of peace, devotion, and selfless service.
// // // // // // // // //             Discover the profound teachings and universal love guiding millions
// // // // // // // // //             toward inner awakening.
// // // // // // // // //           </p>

// // // // // // // // //           {/* Buttons */}
// // // // // // // // //           <div className="mt-10 flex flex-wrap gap-5">

// // // // // // // // //             <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#CFA95F] to-[#E6C77A] text-black font-medium shadow-2xl hover:scale-105 transition">
// // // // // // // // //               Explore the Story
// // // // // // // // //             </button>

// // // // // // // // //             <button className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition backdrop-blur-md">
// // // // // // // // //               Read Divine Wisdom
// // // // // // // // //             </button>

// // // // // // // // //           </div>
// // // // // // // // //         </motion.div>

// // // // // // // // //         {/* 🌟 RIGHT SIDE DIVINE IMAGE */}
// // // // // // // // //         <motion.div
// // // // // // // // //           initial={{ opacity: 0, scale: 0.9 }}
// // // // // // // // //           animate={{ opacity: 1, scale: 1 }}
// // // // // // // // //           transition={{ duration: 1.2 }}
// // // // // // // // //           className="relative flex justify-center items-center"
// // // // // // // // //         >

// // // // // // // // //           {/* 🌟 BACK LIGHT */}
// // // // // // // // //           <div className="absolute w-[750px] h-[750px] bg-[#CFA95F]/10 blur-[200px] rounded-full animate-pulse" />

// // // // // // // // //           {/* ✨ RADIAL LIGHT */}
// // // // // // // // //           <div
// // // // // // // // //             className="absolute w-[600px] h-[600px] rounded-full opacity-40"
// // // // // // // // //             style={{
// // // // // // // // //               background:
// // // // // // // // //                 "radial-gradient(circle, rgba(207,169,95,0.4) 0%, transparent 70%)",
// // // // // // // // //             }}
// // // // // // // // //           />

// // // // // // // // //           {/* 🔶 HALO RINGS */}
// // // // // // // // //           <div className="absolute w-[540px] h-[540px] rounded-full border border-[#CFA95F]/40 shadow-[0_0_100px_rgba(207,169,95,0.5)] animate-pulse" />
// // // // // // // // //           <div className="absolute w-[460px] h-[460px] rounded-full border border-[#CFA95F]/20" />

// // // // // // // // //           {/* ✨ FRONT GLOW */}
// // // // // // // // //           <div className="absolute w-[420px] h-[420px] bg-[#CFA95F]/10 blur-[90px] rounded-full" />

// // // // // // // // //           {/* 🖼️ IMAGE */}
// // // // // // // // //           <div className="relative w-[420px] h-[520px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_150px_rgba(0,0,0,0.8)]">

// // // // // // // // //             <img
// // // // // // // // //               src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_1_nt513j.jpg"
// // // // // // // // //               alt="Bangaru Adigalar"
// // // // // // // // //               className="w-full h-full object-cover scale-105"
// // // // // // // // //             />

// // // // // // // // //             {/* Depth Overlay */}
// // // // // // // // //             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

// // // // // // // // //             {/* Golden Shine */}
// // // // // // // // //             <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/10 via-transparent to-transparent mix-blend-overlay" />

// // // // // // // // //           </div>

// // // // // // // // //           {/* ✨ FLOATING LIGHTS */}
// // // // // // // // //           <div className="absolute top-10 right-10 w-2 h-2 bg-[#CFA95F] rounded-full animate-ping" />
// // // // // // // // //           <div className="absolute bottom-10 left-10 w-2 h-2 bg-[#CFA95F] rounded-full animate-pulse" />

// // // // // // // // //         </motion.div>

// // // // // // // // //       </div>

// // // // // // // // //       {/* ✨ PARTICLES */}
// // // // // // // // //       <div className="absolute inset-0 pointer-events-none">
// // // // // // // // //         <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/3 animate-ping" />
// // // // // // // // //         <div className="absolute w-1 h-1 bg-white rounded-full top-1/2 left-2/3 animate-pulse" />
// // // // // // // // //         <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/4 left-1/2 animate-bounce" />
// // // // // // // // //       </div>

// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default PremiumHero;

// // // // // // // // "use client";

// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // import { cinzel, inter } from "@/app/fonts";

// // // // // // // // const containerVariants = {
// // // // // // // //   hidden: {},
// // // // // // // //   visible: {
// // // // // // // //     transition: {
// // // // // // // //       staggerChildren: 0.12,
// // // // // // // //       delayChildren: 0.1,
// // // // // // // //     },
// // // // // // // //   },
// // // // // // // // };

// // // // // // // // const fadeUp = {
// // // // // // // //   hidden: { opacity: 0, y: 24 },
// // // // // // // //   visible: {
// // // // // // // //     opacity: 1,
// // // // // // // //     y: 0,
// // // // // // // //     transition: {
// // // // // // // //       duration: 0.8,
// // // // // // // //       ease: [0.22, 1, 0.36, 1],
// // // // // // // //     },
// // // // // // // //   },
// // // // // // // // };

// // // // // // // // const stats = ["Grace", "Devotion", "Service"];

// // // // // // // // const PremiumHero = () => {
// // // // // // // //   return (
// // // // // // // //     <section
// // // // // // // //       id="home"
// // // // // // // //       data-section
// // // // // // // //       className="relative isolate min-h-screen overflow-hidden bg-[#f8f4ec] text-[#24332d]"
// // // // // // // //     >
// // // // // // // //       <div className="absolute inset-0 bg-[linear-gradient(180deg,_#fdfbf7_0%,_#f7f2e8_52%,_#f3eadc_100%)]" />
// // // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(177,133,70,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(74,109,97,0.1),_transparent_28%)]" />

// // // // // // // //       <motion.div
// // // // // // // //         className="absolute left-[-8%] top-[8%] h-[280px] w-[280px] rounded-full bg-[#d8b47a]/20 blur-[120px]"
// // // // // // // //         animate={{ x: [0, 16, 0], y: [0, -14, 0] }}
// // // // // // // //         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
// // // // // // // //       />
// // // // // // // //       <motion.div
// // // // // // // //         className="absolute bottom-[-10%] right-[-6%] h-[320px] w-[320px] rounded-full bg-[#789081]/16 blur-[130px]"
// // // // // // // //         animate={{ x: [0, -18, 0], y: [0, 16, 0] }}
// // // // // // // //         transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
// // // // // // // //       />

// // // // // // // //       <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
// // // // // // // //         <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(420px,520px)]">
// // // // // // // //           <motion.div
// // // // // // // //             variants={containerVariants}
// // // // // // // //             initial="hidden"
// // // // // // // //             animate="visible"
// // // // // // // //             className="max-w-2xl"
// // // // // // // //           >
// // // // // // // //             <motion.div
// // // // // // // //               variants={fadeUp}
// // // // // // // //               className={`inline-flex items-center gap-3 rounded-full border border-[#dbcdb8] bg-white/85 px-5 py-2 text-[11px] uppercase tracking-[0.32em] text-[#9a7440] shadow-[0_10px_28px_rgba(84,72,58,0.06)] ${inter.className}`}
// // // // // // // //             >
// // // // // // // //               <span className="h-2 w-2 rounded-full bg-[#b7894d]" />
// // // // // // // //               Divine Grace & Blessings
// // // // // // // //             </motion.div>

// // // // // // // //             <motion.h1
// // // // // // // //               variants={fadeUp}
// // // // // // // //               className={`mt-7 text-5xl leading-[1.04] text-[#24332d] sm:text-6xl lg:text-[4.8rem] ${cinzel.className}`}
// // // // // // // //             >
// // // // // // // //               Experience the Divine Grace and Boundless Love of{" "}
// // // // // // // //               <span className="text-[#a7773f]">Amma</span>
// // // // // // // //             </motion.h1>

// // // // // // // //             <motion.p
// // // // // // // //               variants={fadeUp}
// // // // // // // //               className={`mt-7 max-w-xl text-base leading-8 text-[#5f685f] sm:text-lg ${inter.className}`}
// // // // // // // //             >
// // // // // // // //               Step into a sanctuary of peace, devotion, and selfless service.
// // // // // // // //               Discover the profound teachings and universal love guiding millions
// // // // // // // //               toward inner awakening.
// // // // // // // //             </motion.p>

// // // // // // // //             <motion.div
// // // // // // // //               variants={fadeUp}
// // // // // // // //               className="mt-10 flex flex-wrap gap-4"
// // // // // // // //             >
// // // // // // // //               <button className="rounded-full bg-[#2f5a50] px-8 py-4 text-sm font-semibold tracking-[0.16em] text-white shadow-[0_18px_36px_rgba(47,90,80,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#274a42] sm:text-base">
// // // // // // // //                 Explore the Story
// // // // // // // //               </button>

// // // // // // // //               <button className="rounded-full border border-[#d6c8b5] bg-white/80 px-8 py-4 text-sm font-medium tracking-[0.14em] text-[#42504a] shadow-[0_10px_24px_rgba(84,72,58,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#b7894d] hover:bg-white sm:text-base">
// // // // // // // //                 Read Divine Wisdom
// // // // // // // //               </button>
// // // // // // // //             </motion.div>

// // // // // // // //             <motion.div
// // // // // // // //               variants={fadeUp}
// // // // // // // //               className="mt-12 grid max-w-xl grid-cols-3 gap-4"
// // // // // // // //             >
// // // // // // // //               {stats.map((item, index) => (
// // // // // // // //                 <motion.div
// // // // // // // //                   key={item}
// // // // // // // //                   className="rounded-[1.4rem] border border-[#ddd2c1] bg-white/72 px-4 py-5 text-center shadow-[0_14px_28px_rgba(84,72,58,0.05)]"
// // // // // // // //                   animate={{ y: [0, -4, 0] }}
// // // // // // // //                   transition={{
// // // // // // // //                     duration: 5 + index,
// // // // // // // //                     repeat: Infinity,
// // // // // // // //                     ease: "easeInOut",
// // // // // // // //                     delay: index * 0.2,
// // // // // // // //                   }}
// // // // // // // //                 >
// // // // // // // //                   <div className={`text-sm tracking-[0.08em] text-[#2f5a50] ${cinzel.className}`}>
// // // // // // // //                     {item}
// // // // // // // //                   </div>
// // // // // // // //                 </motion.div>
// // // // // // // //               ))}
// // // // // // // //             </motion.div>
// // // // // // // //           </motion.div>

// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: 30 }}
// // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
// // // // // // // //             className="relative mx-auto w-full max-w-[520px]"
// // // // // // // //           >
// // // // // // // //             <motion.div
// // // // // // // //               className="absolute inset-[-24px] rounded-[2.5rem] bg-[#d8b47a]/18 blur-3xl"
// // // // // // // //               animate={{ opacity: [0.5, 0.75, 0.5], scale: [1, 1.03, 1] }}
// // // // // // // //               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
// // // // // // // //             />

// // // // // // // //             <div className="relative rounded-[2.4rem] border border-[#dfd3c3] bg-white/76 p-3 shadow-[0_26px_70px_rgba(82,72,58,0.12)] backdrop-blur-xl">
// // // // // // // //               <div className="relative overflow-hidden rounded-[2rem] bg-[#efe5d6]">
// // // // // // // //                 <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5">
// // // // // // // //                   <div className={`rounded-full bg-white/90 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#87653a] shadow-[0_10px_20px_rgba(82,72,58,0.06)] ${inter.className}`}>
// // // // // // // //                     Spiritual Trust
// // // // // // // //                   </div>
// // // // // // // //                   <div className={`rounded-full bg-[#2f5a50] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white shadow-[0_10px_20px_rgba(47,90,80,0.16)] ${inter.className}`}>
// // // // // // // //                     Compassion
// // // // // // // //                   </div>
// // // // // // // //                 </div>

// // // // // // // //                 <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#fffaf2]/90 to-transparent" />
// // // // // // // //                 <div className="absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-[#22312d]/65 via-[#22312d]/15 to-transparent" />

// // // // // // // //                 <motion.img
// // // // // // // //                   src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_1_nt513j.jpg"
// // // // // // // //                   alt="Bangaru Adigalar"
// // // // // // // //                   className="h-[620px] w-full object-cover"
// // // // // // // //                   animate={{ scale: [1.02, 1.05, 1.02] }}
// // // // // // // //                   transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
// // // // // // // //                 />

// // // // // // // //                 <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,248,235,0.32)_0%,transparent_35%,transparent_68%,rgba(120,144,129,0.12)_100%)]" />

// // // // // // // //                 <div className="absolute inset-x-6 bottom-6 z-20 rounded-[1.5rem] border border-white/20 bg-white/15 px-5 py-5 backdrop-blur-md">
// // // // // // // //                   <div className={`text-[11px] uppercase tracking-[0.28em] text-white/78 ${inter.className}`}>
// // // // // // // //                     Living Message
// // // // // // // //                   </div>
// // // // // // // //                   <div className={`mt-2 text-2xl leading-tight text-white ${cinzel.className}`}>
// // // // // // // //                     Faith, Service,
// // // // // // // //                     <br />
// // // // // // // //                     Inner Awakening
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             <motion.div
// // // // // // // //               initial={{ opacity: 0, x: -16 }}
// // // // // // // //               animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
// // // // // // // //               transition={{
// // // // // // // //                 duration: 0.8,
// // // // // // // //                 delay: 0.7,
// // // // // // // //                 y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
// // // // // // // //               }}
// // // // // // // //               className="absolute -left-6 bottom-16 rounded-2xl border border-[#ddd2c4] bg-white/92 px-5 py-4 shadow-[0_16px_32px_rgba(82,72,58,0.08)] max-sm:left-2"
// // // // // // // //             >
// // // // // // // //               <div className={`text-[11px] uppercase tracking-[0.24em] text-[#9a7440] ${inter.className}`}>
// // // // // // // //                 Trusted Guidance
// // // // // // // //               </div>
// // // // // // // //             </motion.div>

// // // // // // // //             <motion.div
// // // // // // // //               initial={{ opacity: 0, x: 16 }}
// // // // // // // //               animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
// // // // // // // //               transition={{
// // // // // // // //                 duration: 0.8,
// // // // // // // //                 delay: 0.9,
// // // // // // // //                 y: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
// // // // // // // //               }}
// // // // // // // //               className="absolute -right-6 top-20 rounded-2xl border border-[#d6cdc1] bg-white/92 px-5 py-4 shadow-[0_16px_32px_rgba(82,72,58,0.08)] max-sm:right-2"
// // // // // // // //             >
// // // // // // // //               <div className={`text-[11px] uppercase tracking-[0.24em] text-[#2f5a50] ${inter.className}`}>
// // // // // // // //                 Community Care
// // // // // // // //               </div>
// // // // // // // //             </motion.div>
// // // // // // // //           </motion.div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default PremiumHero;

// // // // // // // "use client";

// // // // // // // import { motion, Variants } from "framer-motion";
// // // // // // // import { cinzel, inter } from "@/app/fonts";

// // // // // // // const containerVariants = {
// // // // // // //   hidden: {},
// // // // // // //   visible: {
// // // // // // //     transition: {
// // // // // // //       staggerChildren: 0.12,
// // // // // // //       delayChildren: 0.14,
// // // // // // //     },
// // // // // // //   },
// // // // // // // };

// // // // // // // const fadeUp: Variants = {
// // // // // // //   hidden: { opacity: 0, y: 60 },
// // // // // // //   visible: {
// // // // // // //     opacity: 1,
// // // // // // //     y: 0,
// // // // // // //     transition: {
// // // // // // //       duration: 1,
// // // // // // //       ease: [0.16, 1, 0.3, 1] as const, // ✅ FIX
// // // // // // //     },
// // // // // // //   },
// // // // // // // };

// // // // // // // const floatingAccents = [
// // // // // // //   "top-[14%] left-[8%]",
// // // // // // //   "top-[22%] right-[14%]",
// // // // // // //   "bottom-[20%] left-[12%]",
// // // // // // //   "bottom-[16%] right-[10%]",
// // // // // // // ];

// // // // // // // const trustPillars = ["Grace", "Devotion", "Service"];

// // // // // // // const PremiumHero = () => {
// // // // // // //   return (
// // // // // // //     <section
// // // // // // //       id="home"
// // // // // // //       data-section
// // // // // // //       className="relative isolate min-h-screen overflow-hidden bg-[#07141a] text-white"
// // // // // // //     >
// // // // // // //       <div className="absolute inset-0 bg-[linear-gradient(135deg,_#07141a_0%,_#0d2230_26%,_#15384a_56%,_#0c1724_100%)]" />
// // // // // // //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(52,211,153,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.18),_transparent_30%),radial-gradient(circle_at_center,_rgba(255,255,255,0.04),_transparent_46%)]" />
// // // // // // //       <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:96px_96px]" />

// // // // // // //       <motion.div
// // // // // // //         className="absolute left-[-10%] top-[8%] h-[360px] w-[360px] rounded-full bg-[#34d399]/18 blur-[140px]"
// // // // // // //         animate={{ x: [0, 26, -8, 0], y: [0, -22, 10, 0], scale: [1, 1.08, 0.98, 1] }}
// // // // // // //         transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
// // // // // // //       />
// // // // // // //       <motion.div
// // // // // // //         className="absolute bottom-[-12%] right-[-6%] h-[420px] w-[420px] rounded-full bg-[#a78bfa]/16 blur-[160px]"
// // // // // // //         animate={{ x: [0, -24, 12, 0], y: [0, 18, -8, 0], scale: [1, 0.96, 1.05, 1] }}
// // // // // // //         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
// // // // // // //       />

// // // // // // //       <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-10">
// // // // // // //         <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(430px,540px)]">
// // // // // // //           <motion.div
// // // // // // //             variants={containerVariants}
// // // // // // //             initial="hidden"
// // // // // // //             animate="visible"
// // // // // // //             className="relative max-w-2xl"
// // // // // // //           >
// // // // // // //             <motion.div
// // // // // // //               variants={fadeUp}
// // // // // // //               className={`inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-white/8 px-5 py-2 text-[11px] uppercase tracking-[0.34em] text-[#9cfce5] shadow-[0_16px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl ${inter.className}`}
// // // // // // //             >
// // // // // // //               <span className="h-2 w-2 rounded-full bg-[#34d399] shadow-[0_0_18px_rgba(52,211,153,0.85)]" />
// // // // // // //               Divine Grace & Blessings
// // // // // // //             </motion.div>

// // // // // // //             <motion.h1
// // // // // // //               variants={fadeUp}
// // // // // // //               className={`mt-8 text-5xl leading-[1.02] text-white sm:text-6xl lg:text-[5rem] ${cinzel.className}`}
// // // // // // //             >
// // // // // // //               Experience the Divine Grace and Boundless Love of{" "}
// // // // // // //               <span className="bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_30%,#34d399_65%,#c084fc_100%)] bg-clip-text text-transparent">
// // // // // // //                 Amma
// // // // // // //               </span>
// // // // // // //             </motion.h1>

// // // // // // //             <motion.p
// // // // // // //               variants={fadeUp}
// // // // // // //               className={`mt-7 max-w-xl text-base leading-8 text-white/72 sm:text-lg ${inter.className}`}
// // // // // // //             >
// // // // // // //               Step into a sanctuary of peace, devotion, and selfless service.
// // // // // // //               Discover the profound teachings and universal love guiding millions
// // // // // // //               toward inner awakening.
// // // // // // //             </motion.p>

// // // // // // //             <motion.div
// // // // // // //               variants={fadeUp}
// // // // // // //               className={`mt-8 flex flex-wrap gap-6 text-sm text-white/68 ${inter.className}`}
// // // // // // //             >
// // // // // // //               <div className="flex items-center gap-3">
// // // // // // //                 <span className="h-2.5 w-2.5 rounded-full bg-[#22d3ee]" />
// // // // // // //                 Sacred legacy
// // // // // // //               </div>
// // // // // // //               <div className="flex items-center gap-3">
// // // // // // //                 <span className="h-2.5 w-2.5 rounded-full bg-[#c084fc]" />
// // // // // // //                 Compassion in action
// // // // // // //               </div>
// // // // // // //             </motion.div>

// // // // // // //             <motion.div
// // // // // // //               variants={fadeUp}
// // // // // // //               className="mt-10 flex flex-wrap gap-4"
// // // // // // //             >
// // // // // // //               <button className="group relative overflow-hidden rounded-full bg-[linear-gradient(90deg,#22d3ee_0%,#34d399_48%,#86efac_100%)] px-8 py-4 text-sm font-semibold tracking-[0.16em] text-[#081318] shadow-[0_20px_44px_rgba(52,211,153,0.25)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(34,211,238,0.28)] sm:text-base">
// // // // // // //                 <span className="relative z-10">Explore the Story</span>
// // // // // // //                 <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/60 to-transparent transition duration-1000 group-hover:translate-x-[120%]" />
// // // // // // //               </button>

// // // // // // //               <button className="rounded-full border border-white/14 bg-white/8 px-8 py-4 text-sm font-medium tracking-[0.14em] text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/12 sm:text-base">
// // // // // // //                 Read Divine Wisdom
// // // // // // //               </button>
// // // // // // //             </motion.div>

// // // // // // //             <motion.div
// // // // // // //               variants={fadeUp}
// // // // // // //               className="mt-14 grid max-w-xl grid-cols-3 gap-4"
// // // // // // //             >
// // // // // // //               {trustPillars.map((item, index) => (
// // // // // // //                 <motion.div
// // // // // // //                   key={item}
// // // // // // //                   className="rounded-[1.5rem] border border-white/10 bg-white/[0.07] px-4 py-5 text-center shadow-[0_18px_36px_rgba(0,0,0,0.18)] backdrop-blur-xl"
// // // // // // //                   animate={{ y: [0, -6, 0] }}
// // // // // // //                   transition={{
// // // // // // //                     duration: 5 + index,
// // // // // // //                     repeat: Infinity,
// // // // // // //                     ease: "easeInOut",
// // // // // // //                     delay: index * 0.18,
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   <div className="mb-3 mx-auto h-10 w-10 rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,0.3),rgba(192,132,252,0.24))] ring-1 ring-white/12" />
// // // // // // //                   <div className={`text-sm tracking-[0.1em] text-white ${cinzel.className}`}>
// // // // // // //                     {item}
// // // // // // //                   </div>
// // // // // // //                 </motion.div>
// // // // // // //               ))}
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>

// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: 30, scale: 0.96 }}
// // // // // // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // // // // // //             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
// // // // // // //             className="relative mx-auto w-full max-w-[540px]"
// // // // // // //           >
// // // // // // //             <div className="absolute inset-[-24px] rounded-[2.8rem] bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(52,211,153,0.14),rgba(192,132,252,0.16))] blur-3xl" />

// // // // // // //             <motion.div
// // // // // // //               className="absolute -top-8 -right-6 h-24 w-24 rounded-full border border-white/10 bg-white/6 backdrop-blur-xl"
// // // // // // //               animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
// // // // // // //               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// // // // // // //             />

// // // // // // //             <motion.div
// // // // // // //               className="absolute -bottom-8 -left-6 h-28 w-28 rounded-full border border-emerald-300/20 bg-emerald-300/10 backdrop-blur-xl"
// // // // // // //               animate={{ y: [0, 10, 0], scale: [1, 1.06, 1] }}
// // // // // // //               transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
// // // // // // //             />

// // // // // // //             <motion.div
// // // // // // //               animate={{ y: [0, -10, 0] }}
// // // // // // //               transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
// // // // // // //               className="relative"
// // // // // // //             >
// // // // // // //               <div className="rounded-[2.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.05))] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
// // // // // // //                 <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#10202a]">
// // // // // // //                   <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5">
// // // // // // //                     <div className={`rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#8ef2dd] backdrop-blur-md ${inter.className}`}>
// // // // // // //                       Spiritual Trust
// // // // // // //                     </div>
// // // // // // //                     <div className={`rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/92 backdrop-blur-md ${inter.className}`}>
// // // // // // //                       Compassion
// // // // // // //                     </div>
// // // // // // //                   </div>

// // // // // // //                   <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-cyan-200/10 to-transparent" />
// // // // // // //                   <div className="absolute inset-x-0 bottom-0 z-20 h-52 bg-gradient-to-t from-black/72 via-black/22 to-transparent" />

// // // // // // //                   <motion.img
// // // // // // //                     src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_1_nt513j.jpg"
// // // // // // //                     alt="Bangaru Adigalar"
// // // // // // //                     className="h-[650px] w-full object-cover"
// // // // // // //                     animate={{ scale: [1.03, 1.07, 1.03] }}
// // // // // // //                     transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
// // // // // // //                   />

// // // // // // //                   <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.12)_0%,transparent_34%,transparent_66%,rgba(192,132,252,0.16)_100%)]" />
// // // // // // //                   <motion.div
// // // // // // //                     className="absolute inset-y-0 left-[-32%] w-[36%] -skew-x-12 bg-gradient-to-r from-transparent via-white/28 to-transparent"
// // // // // // //                     animate={{ x: ["0%", "250%"] }}
// // // // // // //                     transition={{ duration: 4.2, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
// // // // // // //                   />

// // // // // // //                   <div className="absolute inset-x-6 bottom-6 z-30 rounded-[1.6rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] px-5 py-5 backdrop-blur-xl">
// // // // // // //                     <div className={`text-[11px] uppercase tracking-[0.3em] text-white/72 ${inter.className}`}>
// // // // // // //                       Living Message
// // // // // // //                     </div>
// // // // // // //                     <div className={`mt-3 text-2xl leading-tight text-white sm:text-[1.9rem] ${cinzel.className}`}>
// // // // // // //                       Faith, Service,
// // // // // // //                       <br />
// // // // // // //                       Inner Awakening
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               <motion.div
// // // // // // //                 initial={{ opacity: 0, x: -14 }}
// // // // // // //                 animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
// // // // // // //                 transition={{
// // // // // // //                   duration: 0.8,
// // // // // // //                   delay: 0.7,
// // // // // // //                   y: { duration: 7.2, repeat: Infinity, ease: "easeInOut" },
// // // // // // //                 }}
// // // // // // //                 className="absolute -left-6 bottom-20 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl max-sm:left-2"
// // // // // // //               >
// // // // // // //                 <div className={`text-[11px] uppercase tracking-[0.24em] text-[#8ef2dd] ${inter.className}`}>
// // // // // // //                   Trusted Guidance
// // // // // // //                 </div>
// // // // // // //               </motion.div>

// // // // // // //               <motion.div
// // // // // // //                 initial={{ opacity: 0, x: 14 }}
// // // // // // //                 animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
// // // // // // //                 transition={{
// // // // // // //                   duration: 0.8,
// // // // // // //                   delay: 0.9,
// // // // // // //                   y: { duration: 7.8, repeat: Infinity, ease: "easeInOut" },
// // // // // // //                 }}
// // // // // // //                 className="absolute -right-6 top-20 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl max-sm:right-2"
// // // // // // //               >
// // // // // // //                 <div className={`text-[11px] uppercase tracking-[0.24em] text-[#d8b4fe] ${inter.className}`}>
// // // // // // //                   Community Care
// // // // // // //                 </div>
// // // // // // //               </motion.div>
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div className="pointer-events-none absolute inset-0">
// // // // // // //         {floatingAccents.map((position, index) => (
// // // // // // //           <motion.div
// // // // // // //             key={position}
// // // // // // //             className={`absolute ${position} h-3 w-3 rounded-full bg-cyan-300/70 shadow-[0_0_22px_rgba(34,211,238,0.45)]`}
// // // // // // //             animate={{ y: [0, -14, 0], opacity: [0.25, 0.8, 0.25], scale: [0.9, 1.15, 0.9] }}
// // // // // // //             transition={{
// // // // // // //               duration: 4.2 + index,
// // // // // // //               repeat: Infinity,
// // // // // // //               ease: "easeInOut",
// // // // // // //               delay: index * 0.3,
// // // // // // //             }}
// // // // // // //           />
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PremiumHero;
// // // // // // "use client";

// // // // // // import { motion } from "framer-motion";
// // // // // // import Image from "next/image";

// // // // // // export default function DivineHero() {
// // // // // //   return (
// // // // // //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0a05] text-[#f5e9d9]">

// // // // // //       {/* Divine Radial Aura */}
// // // // // //       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
// // // // // //         <div className="w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(212,175,55,0.18)_0%,_rgba(15,10,5,0)_70%)] blur-2xl" />
// // // // // //       </div>

// // // // // //       {/* Subtle Texture Overlay */}
// // // // // //       <div className="absolute inset-0 opacity-[0.06] bg-[url('/texture.png')]" />

// // // // // //       <div className="relative z-10 max-w-4xl text-center px-6">

// // // // // //         {/* Amma Image with Halo */}
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, scale: 0.92 }}
// // // // // //           animate={{ opacity: 1, scale: 1 }}
// // // // // //           transition={{ duration: 1.2, ease: "easeOut" }}
// // // // // //           className="relative mx-auto mb-10 w-[220px] h-[300px]"
// // // // // //         >
// // // // // //           {/* Golden Halo */}
// // // // // //           <div className="absolute inset-0 rounded-full blur-[60px] bg-yellow-400/30 scale-110" />

// // // // // //           <div className="relative w-full h-full rounded-[140px] overflow-hidden border border-[#d4af37]/40 shadow-[0_0_40px_rgba(212,175,55,0.25)]">
// // // // // //             <Image
// // // // // //               src="/amma.jpg"
// // // // // //               alt="Bangaru Adigalar"
// // // // // //               fill
// // // // // //               className="object-cover"
// // // // // //             />
// // // // // //           </div>
// // // // // //         </motion.div>

// // // // // //         {/* Title */}
// // // // // //         <motion.h1
// // // // // //           initial={{ opacity: 0, y: 15 }}
// // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 0.8, delay: 0.2 }}
// // // // // //           className="text-3xl md:text-5xl font-semibold tracking-wide leading-snug"
// // // // // //         >
// // // // // //           Arulthiru Bangaru Adigalar
// // // // // //         </motion.h1>

// // // // // //         {/* Sacred Subtitle */}
// // // // // //         <motion.p
// // // // // //           initial={{ opacity: 0 }}
// // // // // //           animate={{ opacity: 1 }}
// // // // // //           transition={{ delay: 0.4 }}
// // // // // //           className="mt-4 text-lg md:text-xl text-[#d4af37] tracking-[0.2em]"
// // // // // //         >
// // // // // //           The Divine Incarnation of Adhiparasakthi
// // // // // //         </motion.p>

// // // // // //         {/* Divider */}
// // // // // //         <div className="flex items-center justify-center gap-3 my-6">
// // // // // //           <span className="w-10 h-[1px] bg-[#d4af37]/60" />
// // // // // //           <span className="text-[#d4af37] text-sm">✦</span>
// // // // // //           <span className="w-10 h-[1px] bg-[#d4af37]/60" />
// // // // // //         </div>

// // // // // //         {/* Description */}
// // // // // //         <motion.p
// // // // // //           initial={{ opacity: 0 }}
// // // // // //           animate={{ opacity: 1 }}
// // // // // //           transition={{ delay: 0.6 }}
// // // // // //           className="max-w-2xl mx-auto text-[#e8dccb] leading-relaxed text-base md:text-lg"
// // // // // //         >
// // // // // //           A life dedicated to spiritual equality, breaking social barriers,
// // // // // //           and service to humanity. Known to millions simply as{" "}
// // // // // //           <span className="italic text-[#f5e9d9]">“Amma.”</span>
// // // // // //         </motion.p>

// // // // // //         {/* Buttons */}
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 10 }}
// // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ delay: 0.8 }}
// // // // // //           className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
// // // // // //         >
// // // // // //           <button className="px-8 py-3 rounded-full bg-[#d4af37] text-[#1a1206] font-medium tracking-wide hover:scale-[1.03] transition">
// // // // // //             Read the Biography
// // // // // //           </button>

// // // // // //           <button className="px-8 py-3 rounded-full border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10 transition">
// // // // // //             Explore His Teachings
// // // // // //           </button>
// // // // // //         </motion.div>

// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }
// // // // // "use client";

// // // // // import { motion } from "framer-motion";
// // // // // import Image from "next/image";

// // // // // export default function CosmicSpiritualHero() {
// // // // //   return (
// // // // //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-[#f4efe8]">

// // // // //       {/* Cosmic Background */}
// // // // //       <div className="absolute inset-0 bg-gradient-to-b from-[#0c111f] via-[#2d1f44] to-[#0c111f]" />

// // // // //       {/* Divine Glow */}
// // // // //       <div className="absolute inset-0 flex items-center justify-center">
// // // // //         <div className="w-[900px] h-[900px] bg-[radial-gradient(circle,_#ed9e6f33_0%,_transparent_70%)] blur-[120px]" />
// // // // //       </div>

// // // // //       {/* Secondary glow layer */}
// // // // //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#80466e33,_transparent_60%)]" />

// // // // //       <div className="relative z-10 max-w-6xl px-6 text-center">

// // // // //         {/* Image emerging from light */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, scale: 0.85 }}
// // // // //           animate={{ opacity: 1, scale: 1 }}
// // // // //           transition={{ duration: 1.2 }}
// // // // //           className="relative mx-auto mb-10 w-[240px] h-[320px]"
// // // // //         >
// // // // //           {/* Glow halo */}
// // // // //           <div className="absolute inset-0 bg-[#ed9e6f]/30 blur-[80px] rounded-full scale-110" />

// // // // //           <div className="relative w-full h-full rounded-[140px] overflow-hidden border border-[#b66570]/30 shadow-[0_0_60px_rgba(237,158,111,0.25)]">
// // // // //             <Image
// // // // //               src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_1_nt513j.jpg"
// // // // //               alt="Bangaru Adigalar"
// // // // //               fill
// // // // //               className="object-cover"
// // // // //             />
// // // // //           </div>
// // // // //         </motion.div>

// // // // //         {/* Headline */}
// // // // //         <motion.h1
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.8 }}
// // // // //           className="text-4xl md:text-6xl font-semibold leading-tight"
// // // // //         >
// // // // //           Arulthiru Bangaru Adigalar
// // // // //         </motion.h1>

// // // // //         {/* Subheadline */}
// // // // //         <p className="mt-4 text-lg md:text-xl text-[#ed9e6f] tracking-wide">
// // // // //           The Divine Incarnation of Adhiparasakthi
// // // // //         </p>

// // // // //         {/* Divider */}
// // // // //         <div className="flex justify-center items-center gap-3 my-6 text-[#b66570]">
// // // // //           <span className="w-12 h-[1px] bg-[#b66570]/60" />
// // // // //           ✦
// // // // //           <span className="w-12 h-[1px] bg-[#b66570]/60" />
// // // // //         </div>

// // // // //         {/* Description */}
// // // // //         <p className="max-w-2xl mx-auto text-[#d6cfc7] leading-relaxed text-lg">
// // // // //           A life dedicated to spiritual equality, breaking social barriers,
// // // // //           and service to humanity. Known to millions simply as{" "}
// // // // //           <span className="italic text-white">“Amma.”</span>
// // // // //         </p>

// // // // //         {/* Buttons */}
// // // // //         <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
// // // // //           <button className="px-8 py-4 rounded-full bg-[#ed9e6f] text-[#0c111f] font-medium shadow-[0_10px_30px_rgba(237,158,111,0.3)] hover:scale-[1.05] transition">
// // // // //             Read the Biography
// // // // //           </button>

// // // // //           <button className="px-8 py-4 rounded-full border border-[#b66570]/50 text-[#f4efe8] hover:bg-[#512f5c]/40 transition">
// // // // //             Explore His Teachings
// // // // //           </button>
// // // // //         </div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import Image from "next/image";
// // // // import { motion } from "framer-motion";

// // // // export default function AuthorityHero() {
// // // //   return (
// // // //     <section className="relative min-h-screen bg-[#0c111f] text-[#eae6df] overflow-hidden">

// // // //       {/* Subtle layered background (no flashy glow) */}
// // // //       <div className="absolute inset-0 bg-gradient-to-b from-[#0c111f] via-[#2d1f44] to-[#0c111f]" />

// // // //       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

// // // //         {/* Top Divider */}
// // // //         <div className="flex items-center gap-4 mb-10">
// // // //           <div className="h-[1px] w-12 bg-[#ed9e6f]" />
// // // //           <p className="text-sm tracking-[0.25em] text-[#b66570] uppercase">
// // // //             Spiritual Legacy
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid lg:grid-cols-2 gap-16 items-center">

// // // //           {/* LEFT CONTENT */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 30 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //           >
// // // //             <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-white">
// // // //               Arulthiru <br />
// // // //               Bangaru Adigalar
// // // //             </h1>

// // // //             <p className="mt-6 text-xl text-[#ed9e6f]">
// // // //               The Divine Incarnation of Adhiparasakthi
// // // //             </p>

// // // //             <p className="mt-8 text-[#cfc7bc] text-lg leading-relaxed max-w-xl">
// // // //               A life dedicated to spiritual equality, breaking social barriers,
// // // //               and service to humanity. Known to millions simply as{" "}
// // // //               <span className="italic text-white">“Amma.”</span>
// // // //             </p>

// // // //             {/* Buttons */}
// // // //             <div className="mt-10 flex flex-wrap gap-6">
// // // //               <button className="px-8 py-4 bg-[#ed9e6f] text-[#0c111f] font-medium rounded-none">
// // // //                 Read the Biography
// // // //               </button>

// // // //               <button className="px-8 py-4 border border-[#80466e] text-[#eae6df] rounded-none hover:bg-[#2d1f44] transition">
// // // //                 Explore His Teachings
// // // //               </button>
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* RIGHT IMAGE */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 40 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 1 }}
// // // //             className="flex justify-center"
// // // //           >
// // // //             <div className="relative">

// // // //               {/* Structured frame (not fancy, authoritative) */}
// // // //               <div className="absolute -inset-6 border border-[#80466e]" />

// // // //               <div className="relative w-[280px] md:w-[340px] aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
// // // //                 <Image
// // // //                   src="/amma.jpg"
// // // //                   alt="Bangaru Adigalar"
// // // //                   fill
// // // //                   className="object-cover"
// // // //                 />
// // // //               </div>

// // // //             </div>
// // // //           </motion.div>

// // // //         </div>

// // // //         {/* Bottom Divider */}
// // // //         <div className="mt-20 flex items-center justify-center gap-4">
// // // //           <div className="h-[1px] w-20 bg-[#80466e]" />
// // // //           <span className="text-[#b66570]">✦</span>
// // // //           <div className="h-[1px] w-20 bg-[#80466e]" />
// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // "use client";

// // // import { motion } from "framer-motion";
// // // import Image from "next/image";
// // // import { cinzel, inter } from "@/app/fonts";

// // // export default function EliteSpiritualHero() {
// // //   return (
// // //     <section className="relative min-h-screen bg-[#0c111f] overflow-hidden text-[#eae6df]">

// // //       {/* Background Layers */}
// // //       <div className="absolute inset-0 bg-gradient-to-br from-[#0c111f] via-[#2d1f44] to-[#0c111f]" />

// // //       {/* Subtle grid lines */}
// // //       <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

// // //       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

// // //         {/* Top Label */}
// // //         <p className="text-[#7fd8ff] tracking-[0.4em] text-xs uppercase mb-8">
// // //           Divine Presence
// // //         </p>

// // //         <div className="grid lg:grid-cols-2 gap-20 items-center">

// // //           {/* LEFT */}
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.9 }}
// // //           >
// // //             {/* Headline */}
// // //             <h1
// // //               className={`${cinzel.className} text-5xl md:text-7xl leading-[1.1]`}
// // //             >
// // //               Arulthiru <br />
// // //               Bangaru Adigalar
// // //             </h1>

// // //             {/* Subheadline */}
// // //             <p className="mt-6 text-xl text-[#7fd8ff] font-light tracking-wide">
// // //               The Divine Incarnation of Adhiparasakthi
// // //             </p>

// // //             {/* Description */}
// // //             <p
// // //               className={`${inter.className} mt-8 text-[#cfc7bc] text-lg leading-relaxed max-w-xl`}
// // //             >
// // //               A life dedicated to spiritual equality, breaking social barriers,
// // //               and service to humanity. Known to millions simply as{" "}
// // //               <span className="italic text-white">“Amma.”</span>
// // //             </p>

// // //             {/* Buttons */}
// // //             <div className="mt-12 flex flex-wrap gap-6">
// // //               <button className="px-8 py-4 bg-[#ed9e6f] text-[#0c111f] rounded-full text-sm tracking-wide hover:scale-[1.05] transition">
// // //                 Read the Biography
// // //               </button>

// // //               <button className="px-8 py-4 border border-[#7fd8ff]/40 text-[#7fd8ff] rounded-full hover:bg-[#7fd8ff]/10 transition">
// // //                 Explore His Teachings
// // //               </button>
// // //             </div>
// // //           </motion.div>

// // //           {/* RIGHT IMAGE */}
// // //           <motion.div
// // //             initial={{ opacity: 0, scale: 0.95 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             transition={{ duration: 1 }}
// // //             className="relative flex justify-center"
// // //           >
// // //             {/* Soft vertical glow */}
// // //             <div className="absolute w-[300px] h-[500px] bg-gradient-to-b from-[#7fd8ff33] to-transparent blur-[80px]" />

// // //             {/* Image */}
// // //             <div className="relative w-[260px] md:w-[320px] aspect-[3/4] overflow-hidden rounded-[160px] border border-[#7fd8ff]/20">
// // //               <Image
// // //                 src="/amma.jpg"
// // //                 alt="Bangaru Adigalar"
// // //                 fill
// // //                 className="object-cover"
// // //               />
// // //             </div>
// // //           </motion.div>

// // //         </div>

// // //         {/* Bottom Divider */}
// // //         <div className="mt-24 flex items-center justify-center gap-4">
// // //           <div className="h-[1px] w-20 bg-[#7fd8ff]/40" />
// // //           <span className="text-[#7fd8ff] text-sm">✦</span>
// // //           <div className="h-[1px] w-20 bg-[#7fd8ff]/40" />
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import { cinzel, inter } from "@/app/fonts";

// // export default function EliteSpiritualHero() {
// //   return (
// //     <section className="relative min-h-screen bg-[#0c111f] overflow-hidden text-[#f4efe8]">

// //       {/* Background Layers (UPDATED COLORS) */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-[#0c111f] via-[#2d1f44] to-[#0c111f]" />

// //       {/* Subtle grid */}
// //       <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

// //       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

// //         {/* Top Label */}
// //         <p className="text-[#b66570] tracking-[0.4em] text-xs uppercase mb-8">
// //           Divine Presence
// //         </p>

// //         <div className="grid lg:grid-cols-2 gap-20 items-center">

// //           {/* LEFT */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.9 }}
// //           >
// //             {/* Headline */}
// //             <h1
// //               className={`${cinzel.className} text-5xl md:text-7xl leading-[1.1] text-[#f4efe8]`}
// //             >
// //               Arulthiru <br />
// //               Bangaru Adigalar
// //             </h1>

// //             {/* Subheadline (PRIMARY ACCENT) */}
// //             <p className="mt-6 text-xl text-[#ed9e6f] font-light tracking-wide">
// //               The Divine Incarnation of Adhiparasakthi
// //             </p>

// //             {/* Description */}
// //             <p
// //               className={`${inter.className} mt-8 text-[#cfc7bc] text-lg leading-relaxed max-w-xl`}
// //             >
// //               A life dedicated to spiritual equality, breaking social barriers,
// //               and service to humanity. Known to millions simply as{" "}
// //               <span className="italic text-[#f4efe8]">“Amma.”</span>
// //             </p>

// //             {/* Buttons */}
// //             <div className="mt-12 flex flex-wrap gap-6">
// //               {/* Primary */}
// //               <button className="px-8 py-4 bg-[#ed9e6f] text-[#0c111f] rounded-full text-sm tracking-wide shadow-[0_10px_30px_rgba(237,158,111,0.25)] hover:scale-[1.05] transition">
// //                 Read the Biography
// //               </button>

// //               {/* Secondary */}
// //               <button className="px-8 py-4 border border-[#80466e] text-[#b66570] rounded-full hover:bg-[#512f5c]/40 transition">
// //                 Explore His Teachings
// //               </button>
// //             </div>
// //           </motion.div>

// //           {/* RIGHT IMAGE */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 1 }}
// //             className="relative flex justify-center"
// //           >
// //             {/* Soft vertical glow (UPDATED) */}
// //             <div className="absolute w-[300px] h-[500px] bg-gradient-to-b from-[#ed9e6f33] to-transparent blur-[80px]" />

// //             {/* Image */}
// //             <div className="relative w-[260px] md:w-[320px] aspect-[3/4] overflow-hidden rounded-[160px] border border-[#80466e]/40">
// //               <Image
// //                 src="/amma.jpg"
// //                 alt="Bangaru Adigalar"
// //                 fill
// //                 className="object-cover"
// //               />
// //             </div>
// //           </motion.div>

// //         </div>

// //         {/* Bottom Divider */}
// //         <div className="mt-24 flex items-center justify-center gap-4">
// //           <div className="h-[1px] w-20 bg-[#80466e]" />
// //           <span className="text-[#b66570] text-sm">✦</span>
// //           <div className="h-[1px] w-20 bg-[#80466e]" />
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { cinzel, inter } from "@/app/fonts";

// export default function EliteSpiritualHero() {
//   return (
//     <section className="relative min-h-screen bg-[#140b08] overflow-hidden text-[#f5eee6]">

//       {/* SAME BACKGROUND STRUCTURE (only colors changed) */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#140b08] via-[#2a140f] to-[#140b08]" />

//       {/* SAME GRID LINES */}
//       <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

//         {/* SAME TOP LABEL */}
//         <p className="text-[#c15b2a] tracking-[0.4em] text-xs uppercase mb-8">
//           Divine Presence
//         </p>

//         <div className="grid lg:grid-cols-2 gap-20 items-center">

//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.9 }}
//           >
//             <h1 className={`${cinzel.className} text-5xl md:text-7xl leading-[1.1]`}>
//               Arulthiru <br />
//               Bangaru Adigalar
//             </h1>

//             {/* ONLY COLOR CHANGED */}
//             <p className="mt-6 text-xl text-[#f0a35a] font-light tracking-wide">
//               The Divine Incarnation of Adhiparasakthi
//             </p>

//             <p
//               className={`${inter.className} mt-8 text-[#d6c2b3] text-lg leading-relaxed max-w-xl`}
//             >
//               A life dedicated to spiritual equality, breaking social barriers,
//               and service to humanity. Known to millions simply as{" "}
//               <span className="italic text-[#f5eee6]">“Amma.”</span>
//             </p>

//             {/* SAME BUTTON STRUCTURE */}
//             <div className="mt-12 flex flex-wrap gap-6">
//               <button className="px-8 py-4 bg-[#f0a35a] text-[#140b08] rounded-full text-sm tracking-wide hover:scale-[1.05] transition">
//                 Read the Biography
//               </button>

//               <button className="px-8 py-4 border border-[#8c3a1f] text-[#c15b2a] rounded-full hover:bg-[#5a2416]/40 transition">
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
//             {/* SAME GLOW STRUCTURE (only color changed) */}
//             <div className="absolute w-[300px] h-[500px] bg-gradient-to-b from-[#f0a35a33] to-transparent blur-[80px]" />

//             <div className="relative w-[260px] md:w-[320px] aspect-[3/4] overflow-hidden rounded-[160px] border border-[#8c3a1f]/40">
//               <Image
//                 src="/amma.jpg"
//                 alt="Bangaru Adigalar"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </motion.div>

//         </div>

//         {/* SAME DIVIDER */}
//         <div className="mt-24 flex items-center justify-center gap-4">
//           <div className="h-[1px] w-20 bg-[#8c3a1f]" />
//           <span className="text-[#c15b2a] text-sm">✦</span>
//           <div className="h-[1px] w-20 bg-[#8c3a1f]" />
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cinzel, inter } from "@/app/fonts";

export default function EliteSpiritualHero() {
  return (
    <section className="relative min-h-screen bg-[#140b08] overflow-hidden text-[#f5eee6]">

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#140b08] via-[#2a140f] to-[#140b08]" />

      {/* 🔥 NEW: Divine top light */}
      <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-[#f0a35a22] to-transparent pointer-events-none" />

      {/* 🔥 NEW: Central Aura */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(240,163,90,0.15)_0%,_transparent_70%)] blur-[120px]" />
      </div>

      {/* Grid (your fixed version) */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* Label */}
        <p className="text-[#c15b2a] tracking-[0.4em] text-xs uppercase mb-8">
          Divine Presence
        </p>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1
              className={`${cinzel.className} text-5xl md:text-7xl leading-[1.1]`}
            >
              Arulthiru <br />
              Bangaru Adigalar
            </h1>

            {/* 🔥 Subtle glow text */}
            <p className="mt-6 text-xl text-[#f0a35a] font-light tracking-wide">
              The Divine Incarnation of Adhiparasakthi
            </p>

            <p
              className={`${inter.className} mt-8 text-[#d6c2b3] text-lg leading-relaxed max-w-xl`}
            >
              A life dedicated to spiritual equality, breaking social barriers,
              and service to humanity. Known to millions simply as{" "}
              <span className="italic text-[#f5eee6]">“Amma.”</span>
            </p>

            <div className="mt-12 flex flex-wrap gap-6">
              <button className="px-8 py-4 bg-[#f0a35a] text-[#140b08] rounded-full text-sm tracking-wide shadow-[0_10px_30px_rgba(240,163,90,0.3)] hover:scale-[1.05] transition">
                Read the Biography
              </button>

              <button className="px-8 py-4 border border-[#8c3a1f] text-[#c15b2a] rounded-full hover:bg-[#5a2416]/40 transition">
                Explore His Teachings
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* 🔥 Enhanced glow */}
            <div className="absolute w-[320px] h-[520px] bg-gradient-to-b from-[#f0a35a44] to-transparent blur-[100px]" />

            {/* 🔥 Depth shadow added */}
            <div className="relative w-[260px] md:w-[320px] aspect-[3/4] overflow-hidden rounded-[160px] border border-[#8c3a1f]/40 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <Image
                src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_1_nt513j.jpg"
                alt="Bangaru Adigalar"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>

        {/* 🔥 Enhanced divider */}
        <div className="mt-24 flex items-center justify-center gap-4">
          <div className="h-[1px] w-24 bg-[#8c3a1f]" />
          <span className="text-[#c15b2a] text-sm">✦</span>
          <div className="h-[1px] w-24 bg-[#8c3a1f]" />
        </div>

      </div>
    </section>
  );
}