// "use client";

// import { motion } from "framer-motion";
// import { cinzel, inter } from "@/app/fonts";

// const PremiumHero = () => {
//   return (
//     <section className="relative isolate min-h-screen overflow-hidden bg-[#0B0B1E]">

//       {/* 🌌 Gradient Base */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B1E] via-[#1A1A40] to-[#6A11CB]" />

//       {/* 🌟 Aura Glow */}
//       <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-purple-500/20 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />

//       {/* ✨ Extra Light Glow */}
//       <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-pink-400/10 blur-[120px] rounded-full" />

//       {/* 🔝 Header */}
//       <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          
//           <h1 className={`text-2xl tracking-widest text-white ${cinzel.className}`}>
//             Bangaru Adigalar
//           </h1>

//           <nav className={`hidden md:flex gap-10 text-white/70 ${inter.className}`}>
//             <a href="#" className="hover:text-white transition">Home</a>
//             <a href="#" className="hover:text-white transition">About</a>
//             <a href="#" className="hover:text-white transition">Services</a>
//             <a href="#" className="hover:text-white transition">Contact</a>
//           </nav>

//           <button className="relative overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-xl hover:scale-105 transition">
//             Blessings
//             <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-1000" />
//           </button>
//         </div>
//       </header>

//       {/* 🌠 Hero Grid */}
//       <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">

//         {/* 🔥 LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           {/* Tag */}
//           <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-xs tracking-[0.35em] text-purple-200 uppercase mb-6">
//             Divine Grace & Blessings
//           </div>

//           {/* Title */}
//           <h1 className={`text-5xl md:text-7xl leading-[1.05] text-white ${cinzel.className}`}>
//             Experience the Divine Grace and Boundless Love of{" "}
//             <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
//               Amma
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p className={`mt-8 max-w-xl text-lg text-white/70 leading-relaxed ${inter.className}`}>
//             Step into a sanctuary of peace, devotion, and selfless service. Discover the profound teachings and universal love guiding millions toward inner awakening.
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 flex flex-wrap gap-5">
//             <button className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-2xl hover:scale-105 transition">
//               Explore the Story
//               <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition duration-1000" />
//             </button>

//             <button className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition backdrop-blur-md">
//               Read Divine Wisdom
//             </button>
//           </div>
//         </motion.div>

//         {/* 🌌 RIGHT SIDE PREMIUM CARDS */}
// <motion.div
//   initial={{ opacity: 0, scale: 0.9 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{ duration: 1.2 }}
//   className="relative flex justify-center items-center"
// >

//   {/* 🌟 MAIN AURA GLOW */}
//   <div className="absolute w-[650px] h-[650px] bg-purple-600/30 blur-[180px] rounded-full" />

//   {/* ✨ SECONDARY GLOW */}
//   <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full" />

//   {/* 🔵 OUTER RING (VISIBLE NOW) */}
//   <div className="absolute w-[560px] h-[560px] border border-white/20 rounded-full animate-pulse" />

//   {/* 🟣 INNER RING */}
//   <div className="absolute w-[480px] h-[480px] border border-purple-400/30 rounded-full" />

//   {/* 🖼️ IMAGE CONTAINER (BIG FIX HERE) */}
//   <div className="relative w-[420px] h-[520px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.7)]">

//     {/* IMAGE */}
//     <img
//       src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_1_nt513j.jpg"
//       alt="Bangaru Adigalar"
//       className="w-full h-full object-cover scale-110 hover:scale-115 transition duration-700"
//     />

//     {/* 🔥 STRONG OVERLAY (DEPTH) */}
//     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//     {/* ✨ SHINE SWEEP */}
//     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition duration-700" />
//   </div>

//   {/* ✨ FLOATING LIGHTS */}
//   <div className="absolute top-12 right-12 w-2 h-2 bg-white rounded-full animate-ping" />
//   <div className="absolute bottom-12 left-12 w-2 h-2 bg-white rounded-full animate-pulse" />

// </motion.div>
//       </div>

//       {/* ✨ Floating Particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/3 animate-ping" />
//         <div className="absolute w-1 h-1 bg-white rounded-full top-1/2 left-2/3 animate-pulse" />
//         <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/4 left-1/2 animate-bounce" />
//       </div>
//     </section>
//   );
// };

// export default PremiumHero;

"use client";

import { motion } from "framer-motion";
import { cinzel, inter } from "@/app/fonts";

const PremiumHero = () => {
  return (
    <section id="home" data-section className="relative isolate min-h-screen overflow-hidden bg-[#0B0B1E]">

      {/* 🌌 Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B1E] via-[#141433] to-[#0B0B1E]" />

      {/* ✨ GOLDEN AURA */}
      <div className="absolute top-1/2 left-1/2 w-[750px] h-[750px] bg-[#CFA95F]/10 blur-[200px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* 🔝 Header */}

      {/* 🌠 HERO GRID */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >

          {/* Tag */}
          <div className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-xs tracking-[0.35em] text-[#CFA95F] uppercase mb-6">
            Divine Grace & Blessings
          </div>

          {/* Title */}
          <h1 className={`text-5xl md:text-7xl leading-[1.05] text-white ${cinzel.className}`}>
            Experience the Divine Grace and Boundless Love of{" "}
            <span className="text-[#CFA95F]">
              Amma
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`mt-8 max-w-xl text-lg text-white/70 leading-relaxed ${inter.className}`}>
            Step into a sanctuary of peace, devotion, and selfless service.
            Discover the profound teachings and universal love guiding millions
            toward inner awakening.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#CFA95F] to-[#E6C77A] text-black font-medium shadow-2xl hover:scale-105 transition">
              Explore the Story
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition backdrop-blur-md">
              Read Divine Wisdom
            </button>

          </div>
        </motion.div>

        {/* 🌟 RIGHT SIDE DIVINE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center items-center"
        >

          {/* 🌟 BACK LIGHT */}
          <div className="absolute w-[750px] h-[750px] bg-[#CFA95F]/10 blur-[200px] rounded-full animate-pulse" />

          {/* ✨ RADIAL LIGHT */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(207,169,95,0.4) 0%, transparent 70%)",
            }}
          />

          {/* 🔶 HALO RINGS */}
          <div className="absolute w-[540px] h-[540px] rounded-full border border-[#CFA95F]/40 shadow-[0_0_100px_rgba(207,169,95,0.5)] animate-pulse" />
          <div className="absolute w-[460px] h-[460px] rounded-full border border-[#CFA95F]/20" />

          {/* ✨ FRONT GLOW */}
          <div className="absolute w-[420px] h-[420px] bg-[#CFA95F]/10 blur-[90px] rounded-full" />

          {/* 🖼️ IMAGE */}
          <div className="relative w-[420px] h-[520px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_150px_rgba(0,0,0,0.8)]">

            <img
              src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_1_nt513j.jpg"
              alt="Bangaru Adigalar"
              className="w-full h-full object-cover scale-105"
            />

            {/* Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Golden Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/10 via-transparent to-transparent mix-blend-overlay" />

          </div>

          {/* ✨ FLOATING LIGHTS */}
          <div className="absolute top-10 right-10 w-2 h-2 bg-[#CFA95F] rounded-full animate-ping" />
          <div className="absolute bottom-10 left-10 w-2 h-2 bg-[#CFA95F] rounded-full animate-pulse" />

        </motion.div>

      </div>

      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/3 animate-ping" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-1/2 left-2/3 animate-pulse" />
        <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/4 left-1/2 animate-bounce" />
      </div>

    </section>
  );
};

export default PremiumHero;