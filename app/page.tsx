// "use client";

// import { motion } from "framer-motion";

// export default function CosmicHero() {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1A1A40] via-[#6A11CB] to-[#C9A7FF]">

//       {/* 🌌 Glow Orbs */}
//       <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500 opacity-30 blur-[120px] rounded-full"></div>
//       <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-indigo-500 opacity-30 blur-[120px] rounded-full"></div>

//       {/* 🔝 Header */}
//       <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          
//           {/* Logo */}
//           <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
//             Bangaru Adigalar
//           </h1>

//           {/* Nav */}
//           <nav className="hidden md:flex gap-8 text-white/80">
//             <a href="#" className="hover:text-white transition">Home</a>
//             <a href="#" className="hover:text-white transition">About</a>
//             <a href="#" className="hover:text-white transition">Services</a>
//             <a href="#" className="hover:text-white transition">Contact</a>
//           </nav>

//           {/* CTA */}
//           <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:scale-105 transition">
//             Get Blessings
//           </button>
//         </div>
//       </header>

//       {/* 🌠 Hero Content */}
//       <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-6xl font-extrabold text-white"
//         >
//           Bangaru Adigalar
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl"
//         >
//           Experience divine energy, inner peace, and spiritual awakening through cosmic calmness.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="mt-8 flex gap-4"
//         >
//           <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:scale-105 transition">
//             Explore
//           </button>

//           <button className="px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition">
//             Learn More
//           </button>
//         </motion.div>
//       </section>

//       {/* ✨ Floating Stars */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/3 animate-ping"></div>
//         <div className="absolute w-1 h-1 bg-white rounded-full top-1/2 left-2/3 animate-pulse"></div>
//         <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/4 left-1/2 animate-bounce"></div>
//       </div>
//     </div>
//   );
// }

import About from "@/component/about";
import Awards from "@/component/awards";
import PremiumHero from "@/component/hero";
import Institutions from "@/component/institutions";
import LifeJourney from "@/component/life-journey";
import Teachings from "@/component/teaching";
import Uniqueness from "@/component/uniqueness";
import Miracles from "@/component/miracles";

function Divider() {
  return (
    <>
      <div className="absolute w-[200px] h-[20px] bg-[#CFA95F]/20 blur-xl rounded-full" />
      <div className="w-[70%] h-[1px] bg-gradient-to-r from-transparent via-[#CFA95F]/50 to-transparent" />
    </>
  );
}

export default function Home() {
  return (
    <main>
      <PremiumHero />
      <Divider />
      <About />
      <Divider />
      <Miracles />
      <Divider />
      <LifeJourney />
      <Divider />
      <Uniqueness />
      <Divider />
      <Awards />
      <Divider />
      <Teachings />
      <Divider />
      <Institutions />
    </main>
  );
}
