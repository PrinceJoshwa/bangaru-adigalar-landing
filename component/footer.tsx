// "use client";

// import { cinzel, inter } from "@/app/fonts";

// export default function Footer() {
//   return (
//     <footer className="relative bg-[#0B0B1E] text-white overflow-hidden pt-28 pb-10">

//       {/* Glow */}
//       <div className="absolute top-0 left-1/2 w-[600px] h-[300px] bg-[#CFA95F]/10 blur-[120px] -translate-x-1/2" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">

//         {/* 🔥 TOP GRID */}
//         <div className="grid md:grid-cols-4 gap-12">

//           {/* Brand */}
//           <div>
//             <h2 className={`text-2xl mb-4 ${cinzel.className}`}>
//               Bangaru Adigalar
//             </h2>
//             <p className={`text-white/60 text-sm ${inter.className}`}>
//               A spiritual path of devotion, service, and inner awakening,
//               guiding millions toward peace and harmony.
//             </p>
//           </div>

//           {/* Links */}
//           <div>
//             <h3 className="text-[#CFA95F] mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-white/60 text-sm">
//               <li>About</li>
//               <li>Programs</li>
//               <li>Gallery</li>
//               <li>Contact</li>
//             </ul>
//           </div>

//           {/* Programs */}
//           <div>
//             <h3 className="text-[#CFA95F] mb-4">Programs</h3>
//             <ul className="space-y-2 text-white/60 text-sm">
//               <li>Daily Worship</li>
//               <li>Annadhanam</li>
//               <li>Community Service</li>
//               <li>Gatherings</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-[#CFA95F] mb-4">Contact</h3>
//             <ul className="space-y-2 text-white/60 text-sm">
//               <li>Email: info@amma.org</li>
//               <li>Phone: +91 9876543210</li>
//               <li>Location: Tamil Nadu, India</li>
//             </ul>
//           </div>

//         </div>

//         {/* Divider */}
//         <div className="mt-16 h-[1px] bg-gradient-to-r from-transparent via-[#CFA95F]/40 to-transparent" />

//         {/* Bottom */}
//         <div className="mt-6 text-center text-white/50 text-sm">
//           © {new Date().getFullYear()} Bangaru Adigalar. All rights reserved.
//         </div>

//       </div>
//     </footer>
//   );
// }

"use client";

import { cinzel, inter } from "@/app/fonts";

const quickLinks = ["About", "Programs", "Gallery", "Contact"];
const programs = ["Daily Worship", "Annadhanam", "Community Service", "Gatherings"];
const contact = ["Email: info@amma.org", "Phone: +91 9876543210", "Location: Tamil Nadu, India"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07141a] pt-28 pb-10 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_#07141a_0%,_#0b1f2d_40%,_#08131c_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(52,211,153,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.14),_transparent_30%)]" />
      <div className="absolute top-0 left-1/2 h-[320px] w-[640px] -translate-x-1/2 bg-cyan-300/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-2xl md:p-10">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <h2 className={`mb-4 text-2xl text-white ${cinzel.className}`}>
                Bangaru Adigalar
              </h2>
              <p className={`text-sm leading-7 text-white/60 ${inter.className}`}>
                A spiritual path of devotion, service, and inner awakening,
                guiding millions toward peace and harmony.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm uppercase tracking-[0.22em] text-cyan-200">
                Quick Links
              </h3>
              <ul className={`space-y-3 text-sm text-white/60 ${inter.className}`}>
                {quickLinks.map((item) => (
                  <li key={item} className="transition hover:text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm uppercase tracking-[0.22em] text-emerald-200">
                Programs
              </h3>
              <ul className={`space-y-3 text-sm text-white/60 ${inter.className}`}>
                {programs.map((item) => (
                  <li key={item} className="transition hover:text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm uppercase tracking-[0.22em] text-violet-200">
                Contact
              </h3>
              <ul className={`space-y-3 text-sm text-white/60 ${inter.className}`}>
                {contact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

        <div className="mt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Bangaru Adigalar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
