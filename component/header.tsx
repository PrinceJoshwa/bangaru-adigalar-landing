// // // // "use client";

// // // // import { cinzel, inter } from "@/app/fonts";

// // // // export default function Header() {
// // // //   return (
// // // //     <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/10">

// // // //       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

// // // //         {/* Logo */}
// // // //         <h1 className={`text-2xl tracking-widest text-white ${cinzel.className}`}>
// // // //           Bangaru Adigalar
// // // //         </h1>

// // // //         {/* Nav */}
// // // //         <nav className={`hidden md:flex gap-10 text-white/70 ${inter.className}`}>
// // // //           <a href="#" className="hover:text-white transition">Home</a>
// // // //           <a href="#" className="hover:text-white transition">About</a>
// // // //           <a href="#" className="hover:text-white transition">Programs</a>
// // // //           <a href="#" className="hover:text-white transition">Contact</a>
// // // //         </nav>

// // // //         {/* Button */}
// // // //         <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#CFA95F] to-[#E6C77A] text-black font-medium shadow-xl hover:scale-105 transition">
// // // //           Blessings
// // // //         </button>

// // // //       </div>
// // // //     </header>
// // // //   );
// // // // }

// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { cinzel, inter } from "@/app/fonts";

// // // export default function Header() {
// // //   const [scrolled, setScrolled] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => setScrolled(window.scrollY > 40);
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   return (
// // //     <header
// // //       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
// // //         scrolled
// // //           ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
// // //           : "bg-transparent"
// // //       }`}
// // //     >
// // //       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

// // //         {/* Logo */}
// // //         <h1 className={`text-xl md:text-2xl text-white tracking-widest ${cinzel.className}`}>
// // //           Bangaru Adigalar
// // //         </h1>

// // //         {/* Nav */}
// // //         <nav className={`hidden md:flex gap-10 text-sm ${inter.className}`}>
// // //           {["Home", "About", "Programs", "Gallery", "Contact"].map((item) => (
// // //             <a
// // //               key={item}
// // //               href="#"
// // //               className="relative text-white/70 hover:text-white transition group"
// // //             >
// // //               {item}
// // //               <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#CFA95F] transition-all group-hover:w-full"></span>
// // //             </a>
// // //           ))}
// // //         </nav>

// // //         {/* CTA */}
// // //         <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#CFA95F] to-[#E6C77A] text-black text-sm font-medium shadow-lg hover:scale-105 transition">
// // //           Blessings
// // //         </button>
// // //       </div>
// // //     </header>
// // //   );
// // // }


// // "use client";

// // import { useEffect, useState } from "react";
// // import { cinzel, inter } from "@/app/fonts";

// // const links = [
// //   { name: "Home", id: "home" },
// //   { name: "About", id: "about" },
// //   { name: "Teaching", id: "teaching" },
// //   { name: "Impact", id: "impact" },
// //   { name: "Programs", id: "programs" },
// // //   { name: "Contact", id: "contact" },
// // ];

// // export default function Header() {
// //   const [active, setActive] = useState("home");
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const sections = document.querySelectorAll("[data-section]");

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setActive(entry.target.id);
// //           }
// //         });
// //       },
// //       {
// //         threshold: 0.6, // adjust if needed
// //       }
// //     );

// //     sections.forEach((section) => observer.observe(section));

// //     return () => observer.disconnect();
// //   }, []);

// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 40);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <header
// //       className={`fixed top-0 w-full z-50 transition ${
// //         scrolled
// //           ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
// //           : "bg-transparent"
// //       }`}
// //     >
// //       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

// //         {/* Logo */}
// //         <h1 className={`text-xl text-white ${cinzel.className}`}>
// //           Bangaru Adigalar
// //         </h1>

// //         {/* Nav */}
// //         <nav className={`hidden md:flex gap-10 ${inter.className}`}>
// //           {links.map((link, index) => (
// //             <a
// //               key={`${link.id}-${index}`}
// //               href={`#${link.id}`}
// //               className={`relative transition ${
// //                 active === link.id
// //                   ? "text-white"
// //                   : "text-white/60 hover:text-white"
// //               }`}
// //             >
// //               {link.name}

// //               {/* Active underline */}
// //               <span
// //                 className={`absolute left-0 -bottom-1 h-[2px] bg-[#CFA95F] transition-all ${
// //                   active === link.id ? "w-full" : "w-0"
// //                 }`}
// //               />
// //             </a>
// //           ))}
// //         </nav>

// //         {/* CTA */}
// //         <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#CFA95F] to-[#E6C77A] text-black text-sm font-medium">
// //           Blessings
// //         </button>

// //       </div>
// //     </header>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";
// import { cinzel, inter } from "@/app/fonts";

// const links = [
//   { name: "Home", id: "home" },
//   { name: "About", id: "about" },
//   { name: "Teaching", id: "teaching" },
//   { name: "Impact", id: "impact" },
//   { name: "Programs", id: "programs" },
// ];

// export default function Header() {
//   const [active, setActive] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   // 🔥 INTERSECTION OBSERVER (ACTIVE SECTION)
//   useEffect(() => {
//     const sections = document.querySelectorAll("[data-section]");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActive(entry.target.id);
//           }
//         });
//       },
//       {
//         threshold: 0.5,
//         rootMargin: "-100px 0px -50% 0px",
//       }
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   // 🔥 SCROLL BACKGROUND EFFECT
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
//           ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
//           : "bg-transparent"
//         }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* 🔶 LOGO */}
//         <h1 className={`text-xl md:text-2xl text-white tracking-widest ${cinzel.className}`}>
//           Bangaru Adigalar
//         </h1>

//         {/* 🔥 NAVIGATION */}
//         <nav className={`hidden md:flex gap-10 ${inter.className}`}>
//           {links.map((link, index) => {
//             const isActive = active === link.id;

//             return (
//               <a
//                 key={`${link.id}-${index}`}
//                 href={`#${link.id}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   document
//                     .getElementById(link.id)
//                     ?.scrollIntoView({ behavior: "smooth" });
//                 }}
//                 className={`relative px-1 py-1 transition duration-300 ${isActive
//                     ? "text-white"
//                     : "text-white/60 hover:text-white"
//                   }`}
//               >
//                 {link.name}

//                 {/* 🔥 UNDERLINE */}
//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] bg-[#CFA95F] transition-all duration-300 ${isActive ? "w-full" : "w-0"
//                     }`}
//                 />

//                 {/* ✨ GLOW */}
//                 {isActive && (
//                   <span className="absolute inset-0 -z-10 rounded-md bg-[#CFA95F]/10 blur-md opacity-60" />
//                 )}
//               </a>
//             );
//           })}
//         </nav>

//         {/* 🔘 CTA */}
//         <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#CFA95F] to-[#E6C77A] text-black text-sm font-medium shadow-lg hover:scale-105 transition">
//           Blessings
//         </button>

//       </div>
//     </header>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { cinzel, inter } from "@/app/fonts";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Teaching", id: "teaching" },
  { name: "Impact", id: "impact" },
  { name: "Programs", id: "programs" },
];

export default function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    if (!sections.length) return;

    const updateActiveSection = () => {
      const offset = 140;
      const scrollPosition = window.scrollY + offset;

      let currentSection = sections[0].id;

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      }

      setActive(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#07141a]/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className={`text-xl tracking-[0.18em] text-white md:text-2xl ${cinzel.className}`}>
          Bangaru Adigalar
        </h1>

        <nav className={`hidden items-center gap-8 md:flex ${inter.className}`}>
          {links.map((link, index) => {
            const isActive = active === link.id;

            return (
              <a
                key={`${link.id}-${index}`}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(link.id);
                  if (!target) return;

                  const headerOffset = 96;
                  const top =
                    target.getBoundingClientRect().top + window.scrollY - headerOffset;

                  window.scrollTo({
                    top,
                    behavior: "smooth",
                  });

                  setActive(link.id);
                }}
                className={`relative px-1 py-1 text-sm transition duration-300 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#7DD3FC] via-[#34D399] to-[#C084FC] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />

                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-md bg-cyan-300/10 blur-md opacity-70" />
                )}
              </a>
            );
          })}
        </nav>

        <button className="rounded-full bg-gradient-to-r from-[#7DD3FC] via-[#34D399] to-[#C084FC] px-5 py-2 text-sm font-medium text-[#07141a] shadow-[0_12px_30px_rgba(52,211,153,0.24)] transition hover:scale-105">
          Blessings
        </button>
      </div>
    </header>
  );
}
