// // // // "use client";

// // // // import { motion } from "framer-motion";
// // // // import { cinzel, inter } from "@/app/fonts";
// // // // import { sacredImages } from "@/lib/content";

// // // // const recognitions = [
// // // //   {
// // // //     year: "2019",
// // // //     type: "National Award",
// // // //     title: "Padma Shri for service to humanity",
// // // //     description:
// // // //       "Bangaru Adigalar received the Padma Shri from the Government of India in 2019. It remains the clearest formally documented national honour associated with his public life.",
// // // //   },
// // // //   {
// // // //     year: "1978",
// // // //     type: "Institution Building",
// // // //     title: "Founded ACMEC Trust",
// // // //     description:
// // // //       "His work moved beyond spiritual leadership into organized public service through the Adhiparasakthi Charitable, Medical, Educational and Cultural Trust, founded in Melmaruvathur in 1978.",
// // // //   },
// // // //   {
// // // //     year: "1988",
// // // //     type: "Women Welfare",
// // // //     title: "Launched ASPWCT for medical, educational, and charitable work",
// // // //     description:
// // // //       "The Adhiparasakthi Siddhar Peeda Women's Charitable Trust traces its founding to Bangaru Adigalar in 1988, with work spanning charity, medical care, education, rural development, and women-oriented welfare activity.",
// // // //   },
// // // //   {
// // // //     year: "1983 onward",
// // // //     type: "Education",
// // // //     title: "Expanded education access",
// // // //     description:
// // // //       "Trust material describes a long-running expansion from pre-primary schooling to higher education, with sponsorship support aimed at poorer communities.",
// // // //   },
// // // //   {
// // // //     year: "1986 onward",
// // // //     type: "Healthcare",
// // // //     title: "Scaled a free hospital into a major service network",
// // // //     description:
// // // //       "ACMEC states that its free hospital, started in 1986 with three doctors, later grew into a 1000-bed multispecialty institution serving hundreds of nearby villages.",
// // // //   },
// // // //   {
// // // //     year: "Movement Era",
// // // //     type: "Organization",
// // // //     title: "Built MASM as a wider spiritual and social movement",
// // // //     description:
// // // //       "The Melmaruvathur Adhiparasakthi Spiritual Movement presents itself as a holistic movement under Amma's guidance, combining spirituality with education, healthcare, and social welfare beyond a single temple structure.",
// // // //   },
// // // //   {
// // // //     year: "Public Legacy",
// // // //     type: "Social Reform",
// // // //     title: "Remembered for breaking ritual barriers",
// // // //     description:
// // // //       "Wikipedia and later press coverage consistently associate him with a more inclusive spiritual culture, including the dignity of women and devotees across caste and community lines.",
// // // //   },
// // // //   {
// // // //     year: "Global Reach",
// // // //     type: "Movement Scale",
// // // //     title: "A mission spread through 7,200 worship centres",
// // // //     description:
// // // //       "Official trust pages describe a wide devotional network across India and abroad, turning Melmaruvathur into the center of a much larger spiritual and service movement.",
// // // //   },
// // // //   {
// // // //     year: "Service Ecosystem",
// // // //     type: "Public Welfare",
// // // //     title: "Integrated women welfare, hospital donations, and annadhanam initiatives",
// // // //     description:
// // // //       "Current official donation and service pages show how the movement matured into multiple support channels, including women welfare, hospital donations, volunteer service, and annadhanam-focused giving.",
// // // //   },
// // // // ];

// // // // const institutionCards = [
// // // //   {
// // // //     year: "1978",
// // // //     name: "ACMEC",
// // // //     title: "Charity, healthcare, education, culture",
// // // //     text:
// // // //       "The main trust became the backbone of hospital, school, college, welfare, rural infrastructure, and employment activity.",
// // // //   },
// // // //   {
// // // //     year: "1988",
// // // //     name: "ASPWCT",
// // // //     title: "Women's charitable trust",
// // // //     text:
// // // //       "The women's trust expanded the service side of the movement with healthcare, education, CSR-linked support, and welfare initiatives.",
// // // //   },
// // // //   {
// // // //     year: "Movement",
// // // //     name: "MASM",
// // // //     title: "Spiritual movement with social reach",
// // // //     text:
// // // //       "MASM frames the mission as spirituality joined with equality, selfless service, education, healthcare, and public engagement.",
// // // //   },
// // // //   {
// // // //     year: "Service",
// // // //     name: "Annadhanam",
// // // //     title: "Feeding and welfare support",
// // // //     text:
// // // //       "Annadhanam and related donation channels show that the movement institutionalized feeding, seva, and practical care alongside worship.",
// // // //   },
// // // // ];

// // // // const impactRibbon = [
// // // //   { value: "Padma Shri", label: "national honour" },
// // // //   { value: "7,200", label: "micro-units / worship centres" },
// // // //   { value: "1000", label: "hospital beds cited by trust material" },
// // // //   { value: "750", label: "villages cited as served by hospital network" },
// // // // ];

// // // // export default function Awards() {
// // // //   return (
// // // //     <section
// // // //       id="awards"
// // // //       data-section
// // // //       className="relative overflow-hidden bg-[#0B0B1E] py-36"
// // // //     >
// // // //       <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B0B1E_0%,#141433_45%,#0B0B1E_100%)]" />
// // // //       <div className="absolute left-1/2 top-28 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#CFA95F]/10 blur-[180px]" />
// // // //       <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#CFA95F]/6 blur-[140px]" />
// // // //       <div className="absolute left-[-6rem] bottom-10 h-64 w-64 rounded-full border border-[#CFA95F]/10" />

// // // //       <div className="relative z-10 mx-auto max-w-7xl px-6">
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 30 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           viewport={{ once: true, amount: 0.15 }}
// // // //           transition={{ duration: 0.9 }}
// // // //           className="mx-auto max-w-4xl text-center"
// // // //         >
// // // //           <p className="text-xs uppercase tracking-[0.42em] text-[#CFA95F]">
// // // //             Awards & Achievements
// // // //           </p>
// // // //           <h2 className={`mt-6 text-5xl leading-tight text-white md:text-6xl ${cinzel.className}`}>
// // // //             More than one award,
// // // //             <span className="block text-[#CFA95F]">a legacy built in public view</span>
// // // //           </h2>
// // // //           <p className={`mt-6 text-lg leading-relaxed text-white/70 ${inter.className}`}>
// // // //             The documented record shows one major national honour, but a much larger story of
// // // //             achievement: institution building, social reach, inclusive spiritual reform, and a
// // // //             service network that outgrew a single temple town.
// // // //           </p>
// // // //         </motion.div>

// // // //         <div className="mt-20 grid gap-16 lg:grid-cols-[0.88fr_1.12fr]">
// // // //           <motion.div
// // // //             initial={{ opacity: 0, x: -40 }}
// // // //             whileInView={{ opacity: 1, x: 0 }}
// // // //             viewport={{ once: true, amount: 0.2 }}
// // // //             transition={{ duration: 0.9 }}
// // // //             className="relative space-y-8"
// // // //           >
// // // //             <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
// // // //               <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/12 via-transparent to-transparent" />
// // // //               <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
// // // //                 <div className="relative min-h-[28rem] overflow-hidden rounded-[2.2rem]">
// // // //                   <img
// // // //                     src={sacredImages.hero}
// // // //                     alt="Bangaru Adigalar portrait"
// // // //                     className="h-full w-full object-cover"
// // // //                   />
// // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
// // // //                   <div className="absolute bottom-0 left-0 right-0 p-6">
// // // //                     <p className="text-xs uppercase tracking-[0.3em] text-[#E6C77A]">
// // // //                       National Recognition
// // // //                     </p>
// // // //                     <p className={`mt-3 text-3xl text-white ${cinzel.className}`}>Padma Shri</p>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="flex flex-col gap-4">
// // // //                   <div className="relative flex min-h-[13.25rem] items-center justify-center overflow-hidden rounded-[2rem] border border-[#CFA95F]/20 bg-[#111126]">
// // // //                     <div className="absolute h-40 w-40 rounded-full border border-[#CFA95F]/35 shadow-[0_0_60px_rgba(207,169,95,0.35)]" />
// // // //                     <div className="absolute h-28 w-28 rounded-full border border-[#CFA95F]/20" />
// // // //                     <div className="absolute h-24 w-24 rounded-full bg-[#CFA95F]/10 blur-2xl" />
// // // //                     <div className="relative text-center">
// // // //                       <p className="text-xs uppercase tracking-[0.32em] text-[#CFA95F]/80">
// // // //                         Signature Honour
// // // //                       </p>
// // // //                       <p className={`mt-3 text-4xl text-[#F2D08D] ${cinzel.className}`}>2019</p>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="relative min-h-[13.25rem] overflow-hidden rounded-[2rem]">
// // // //                     <img
// // // //                       src={sacredImages.celebration}
// // // //                       alt="Celebration at Melmaruvathur"
// // // //                       className="h-full w-full object-cover"
// // // //                     />
// // // //                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
// // // //                     <div className="absolute bottom-0 left-0 right-0 p-5">
// // // //                       <p className="text-xs uppercase tracking-[0.3em] text-[#E6C77A]">
// // // //                         Public Movement
// // // //                       </p>
// // // //                       <p className={`mt-2 text-2xl text-white ${cinzel.className}`}>
// // // //                         Service, devotion, reach
// // // //                       </p>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="rounded-[2.4rem] border border-[#CFA95F]/15 bg-gradient-to-br from-white/6 to-white/[0.03] p-8 backdrop-blur-xl">
// // // //               <div className="flex items-center justify-between gap-4">
// // // //                 <div>
// // // //                   <p className="text-sm uppercase tracking-[0.34em] text-[#CFA95F]">
// // // //                     Institutional Footprint
// // // //                   </p>
// // // //                   <p className={`mt-3 text-white/70 ${inter.className}`}>
// // // //                     Achievements connected to the institutions he built.
// // // //                   </p>
// // // //                 </div>
// // // //                 <div className="h-px flex-1 bg-gradient-to-r from-[#CFA95F]/35 to-transparent" />
// // // //               </div>

// // // //               <div className="mt-8 grid gap-4 sm:grid-cols-2">
// // // //                 {institutionCards.map((item, index) => (
// // // //                   <motion.div
// // // //                     key={item.name}
// // // //                     initial={{ opacity: 0, y: 24 }}
// // // //                     whileInView={{ opacity: 1, y: 0 }}
// // // //                     viewport={{ once: true }}
// // // //                     transition={{ delay: index * 0.1, duration: 0.55 }}
// // // //                     className="rounded-[1.7rem] border border-white/10 bg-[#111126]/85 p-5"
// // // //                   >
// // // //                     <div className="flex items-center justify-between gap-3">
// // // //                       <p className={`text-xl text-white ${cinzel.className}`}>{item.name}</p>
// // // //                       <span className="rounded-full border border-[#CFA95F]/15 bg-[#CFA95F]/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#F2D08D]">
// // // //                         {item.year}
// // // //                       </span>
// // // //                     </div>
// // // //                     <p className="mt-4 text-sm uppercase tracking-[0.26em] text-[#CFA95F]/70">
// // // //                       {item.title}
// // // //                     </p>
// // // //                     <p className={`mt-4 text-sm leading-relaxed text-white/66 ${inter.className}`}>
// // // //                       {item.text}
// // // //                     </p>
// // // //                   </motion.div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             <div className="grid grid-cols-2 gap-4">
// // // //               {impactRibbon.map((item, index) => (
// // // //                 <motion.div
// // // //                   key={item.label}
// // // //                   initial={{ opacity: 0, scale: 0.96 }}
// // // //                   whileInView={{ opacity: 1, scale: 1 }}
// // // //                   viewport={{ once: true }}
// // // //                   transition={{ delay: index * 0.08, duration: 0.45 }}
// // // //                   className="rounded-[1.7rem] border border-[#CFA95F]/12 bg-[#0B0B1E]/90 p-5 text-center shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
// // // //                 >
// // // //                   <p className={`text-2xl text-[#F2D08D] ${cinzel.className}`}>{item.value}</p>
// // // //                   <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/45">
// // // //                     {item.label}
// // // //                   </p>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </div>

// // // //             <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
// // // //               <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/10 via-transparent to-transparent" />
// // // //               <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
// // // //                 <div className="relative min-h-[18rem] overflow-hidden rounded-[1.9rem]">
// // // //                   <img
// // // //                     src={sacredImages.procession}
// // // //                     alt="Procession and public devotional gathering"
// // // //                     className="h-full w-full object-cover"
// // // //                   />
// // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
// // // //                   <div className="absolute bottom-0 left-0 right-0 p-5">
// // // //                     <p className="text-xs uppercase tracking-[0.28em] text-[#E6C77A]">
// // // //                       Living Movement
// // // //                     </p>
// // // //                     <p className={`mt-2 text-2xl text-white ${cinzel.className}`}>
// // // //                       Worship, travel, institutions
// // // //                     </p>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="relative z-10 flex flex-col justify-center">
// // // //                   <p className="text-sm uppercase tracking-[0.3em] text-[#CFA95F]">
// // // //                     Legacy In Practice
// // // //                   </p>
// // // //                   <p className={`mt-5 text-white/72 leading-relaxed ${inter.className}`}>
// // // //                     The institutions did not grow as isolated projects. They formed a connected
// // // //                     ecosystem of worship centres, schools, colleges, hospitals, charity channels,
// // // //                     women-focused trusts, volunteer service, and annadhanam support.
// // // //                   </p>
// // // //                   <p className={`mt-4 text-white/60 leading-relaxed ${inter.className}`}>
// // // //                     That broader ecosystem is what makes the achievements section substantial,
// // // //                     because the legacy is visible not only in titles and honours, but in the
// // // //                     structures that continued serving devotees and the public.
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>

// // // //           <div className="relative">
// // // //             <div className="absolute left-[1.55rem] top-4 bottom-4 hidden w-px bg-gradient-to-b from-transparent via-[#CFA95F]/35 to-transparent md:block" />

// // // //             <div className="space-y-8">
// // // //               {recognitions.map((item, index) => (
// // // //                 <motion.article
// // // //                   key={item.title}
// // // //                   initial={{ opacity: 0, y: 60 }}
// // // //                   whileInView={{ opacity: 1, y: 0 }}
// // // //                   viewport={{ once: true, amount: 0.15 }}
// // // //                   transition={{ delay: index * 0.08, duration: 0.8 }}
// // // //                   className="relative md:pl-16"
// // // //                 >
// // // //                   <div className="absolute left-0 top-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-[#CFA95F]/30 bg-[#111126] shadow-[0_0_40px_rgba(207,169,95,0.18)]">
// // // //                     <div className="h-3 w-3 rounded-full bg-[#CFA95F]" />
// // // //                   </div>

// // // //                   <motion.div
// // // //                     whileHover={{ y: -6, scale: 1.01 }}
// // // //                     transition={{ duration: 0.25 }}
// // // //                     className="group relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10"
// // // //                   >
// // // //                     <div className="absolute inset-0 bg-gradient-to-br from-[#CFA95F]/10 via-transparent to-transparent opacity-60" />
// // // //                     <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-[#CFA95F]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

// // // //                     <div className="relative z-10 flex flex-wrap items-center gap-4">
// // // //                       <span className="rounded-full border border-[#CFA95F]/20 bg-[#CFA95F]/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#F2D08D]">
// // // //                         {item.type}
// // // //                       </span>
// // // //                       <span className="text-sm uppercase tracking-[0.3em] text-white/45">
// // // //                         {item.year}
// // // //                       </span>
// // // //                     </div>

// // // //                     <h3 className={`relative z-10 mt-6 text-3xl leading-tight text-white md:text-4xl ${cinzel.className}`}>
// // // //                       {item.title}
// // // //                     </h3>

// // // //                     <p className={`relative z-10 mt-5 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg ${inter.className}`}>
// // // //                       {item.description}
// // // //                     </p>
// // // //                   </motion.div>
// // // //                 </motion.article>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // "use client";

// // // import { motion } from "framer-motion";
// // // import { cinzel, inter } from "@/app/fonts";
// // // import { sacredImages } from "@/lib/content";

// // // const recognitions = [
// // //   {
// // //     year: "2019",
// // //     type: "National Award",
// // //     title: "Padma Shri for service to humanity",
// // //     description: "Bangaru Adigalar received the Padma Shri from the Government of India in 2019. It remains the clearest formally documented national honour associated with his public life.",
// // //   },
// // //   {
// // //     year: "1978",
// // //     type: "Institution Building",
// // //     title: "Founded ACMEC Trust",
// // //     description: "His work moved beyond spiritual leadership into organized public service through the Adhiparasakthi Charitable, Medical, Educational and Cultural Trust, founded in Melmaruvathur in 1978.",
// // //   },
// // //   {
// // //     year: "1988",
// // //     type: "Women Welfare",
// // //     title: "Launched ASPWCT for medical, educational, and charitable work",
// // //     description: "The Adhiparasakthi Siddhar Peeda Women's Charitable Trust traces its founding to Bangaru Adigalar in 1988, with work spanning charity, medical care, education, rural development, and women-oriented welfare activity.",
// // //   },
// // //   {
// // //     year: "1983 onward",
// // //     type: "Education",
// // //     title: "Expanded education access",
// // //     description: "Trust material describes a long-running expansion from pre-primary schooling to higher education, with sponsorship support aimed at poorer communities.",
// // //   },
// // //   {
// // //     year: "1986 onward",
// // //     type: "Healthcare",
// // //     title: "Scaled a free hospital into a major service network",
// // //     description: "ACMEC states that its free hospital, started in 1986 with three doctors, later grew into a 1000-bed multispecialty institution serving hundreds of nearby villages.",
// // //   },
// // //   {
// // //     year: "Movement Era",
// // //     type: "Organization",
// // //     title: "Built MASM as a wider spiritual and social movement",
// // //     description: "The Melmaruvathur Adhiparasakthi Spiritual Movement presents itself as a holistic movement under Amma's guidance, combining spirituality with education, healthcare, and social welfare beyond a single temple structure.",
// // //   },
// // //   {
// // //     year: "Public Legacy",
// // //     type: "Social Reform",
// // //     title: "Remembered for breaking ritual barriers",
// // //     description: "Wikipedia and later press coverage consistently associate him with a more inclusive spiritual culture, including the dignity of women and devotees across caste and community lines.",
// // //   },
// // //   {
// // //     year: "Global Reach",
// // //     type: "Movement Scale",
// // //     title: "A mission spread through 7,200 worship centres",
// // //     description: "Official trust pages describe a wide devotional network across India and abroad, turning Melmaruvathur into the center of a much larger spiritual and service movement.",
// // //   },
// // //   {
// // //     year: "Service Ecosystem",
// // //     type: "Public Welfare",
// // //     title: "Integrated women welfare, hospital donations, and annadhanam initiatives",
// // //     description: "Current official donation and service pages show how the movement matured into multiple support channels, including women welfare, hospital donations, volunteer service, and annadhanam-focused giving.",
// // //   },
// // // ];

// // // const institutionCards = [
// // //   { year: "1978", name: "ACMEC", title: "Charity, healthcare, education, culture", text: "The main trust became the backbone of hospital, school, college, welfare, rural infrastructure, and employment activity." },
// // //   { year: "1988", name: "ASPWCT", title: "Women's charitable trust", text: "The women's trust expanded the service side of the movement with healthcare, education, CSR-linked support, and welfare initiatives." },
// // //   { year: "Movement", name: "MASM", title: "Spiritual movement with social reach", text: "MASM frames the mission as spirituality joined with equality, selfless service, education, healthcare, and public engagement." },
// // //   { year: "Service", name: "Annadhanam", title: "Feeding and welfare support", text: "Annadhanam and related donation channels show that the movement institutionalized feeding, seva, and practical care alongside worship." },
// // // ];

// // // const impactRibbon = [
// // //   { value: "Padma Shri", label: "national honour" },
// // //   { value: "7,200", label: "micro-units / worship centres" },
// // //   { value: "1000", label: "hospital beds cited by trust material" },
// // //   { value: "750", label: "villages cited as served by hospital network" },
// // // ];

// // // const easePremium = [0.16, 1, 0.3, 1];

// // // export default function Awards() {
// // //   return (
// // //     <section id="awards" data-section className="relative bg-[#05050A] py-32 px-6">
// // //       <div className="absolute top-0 left-1/2 h-[50rem] w-[50rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(207,169,95,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
      
// // //       <div className="relative z-10 mx-auto max-w-7xl">
        
// // //         {/* Header Area */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 1, ease: easePremium }}
// // //           className="text-center max-w-4xl mx-auto mb-20"
// // //         >
// // //           <p className="text-xs uppercase tracking-[0.42em] text-[#CFA95F]">Awards & Achievements</p>
// // //           <h2 className={`mt-6 text-5xl md:text-6xl leading-[1.1] text-white ${cinzel.className}`}>
// // //             More than one award, <br/>
// // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFA95F] to-[#FFF1C5]">a legacy built in public view</span>
// // //           </h2>
// // //           <p className={`mt-6 text-lg text-white/70 leading-relaxed ${inter.className}`}>
// // //             The documented record shows one major national honour, but a much larger story of achievement: institution building, social reach, inclusive spiritual reform, and a service network that outgrew a single temple town.
// // //           </p>
// // //         </motion.div>

// // //         {/* Top Section: Recognitions Sticky Scroll */}
// // //         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
// // //           <div className="w-full lg:w-5/12">
// // //             <div className="sticky top-32 space-y-6">
              
// // //               <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 group">
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
// // //                 <img src={sacredImages.hero} alt="Bangaru Adigalar portrait" className="w-full h-[350px] object-cover transition-transform duration-1000 group-hover:scale-105" />
// // //                 <div className="absolute bottom-6 left-6 right-6 z-20">
// // //                   <p className="text-xs uppercase tracking-[0.3em] text-[#E6C77A]">National Recognition</p>
// // //                   <p className={`mt-2 text-4xl text-white ${cinzel.className}`}>Padma Shri</p>
// // //                 </div>
// // //               </div>

// // //               <div className="grid grid-cols-2 gap-6">
// // //                 <div className="relative flex min-h-[12rem] items-center justify-center overflow-hidden rounded-[2rem] border border-[#CFA95F]/20 bg-[#111126]">
// // //                   <div className="absolute h-32 w-32 rounded-full border border-[#CFA95F]/30" />
// // //                   <div className="relative text-center">
// // //                     <p className="text-[10px] uppercase tracking-[0.3em] text-[#CFA95F]/80">Signature Honour</p>
// // //                     <p className={`mt-2 text-4xl text-[#F2D08D] ${cinzel.className}`}>2019</p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="relative min-h-[12rem] overflow-hidden rounded-[2rem] border border-white/10">
// // //                   <img src={sacredImages.celebration} alt="Celebration" className="w-full h-full object-cover" />
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
// // //                   <div className="absolute bottom-5 left-5 z-20">
// // //                     <p className="text-[10px] uppercase tracking-[0.2em] text-[#E6C77A]">Public Movement</p>
// // //                     <p className={`mt-1 text-lg text-white ${cinzel.className}`}>Service, devotion, reach</p>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //             </div>
// // //           </div>

// // //           <div className="w-full lg:w-7/12 flex flex-col gap-6">
// // //             {recognitions.map((item, index) => (
// // //               <motion.div
// // //                 key={item.title}
// // //                 initial={{ opacity: 0, x: 30 }}
// // //                 whileInView={{ opacity: 1, x: 0 }}
// // //                 viewport={{ once: true, margin: "-100px" }}
// // //                 transition={{ duration: 0.8, delay: index * 0.1, ease: easePremium }}
// // //                 className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 md:p-10 transition-colors hover:bg-white/[0.04]"
// // //               >
// // //                 <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-[#CFA95F]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
// // //                 <div className="relative z-10">
// // //                   <div className="flex flex-wrap items-center gap-4 mb-4">
// // //                     <span className="text-[10px] uppercase tracking-[0.2em] text-[#CFA95F] border border-[#CFA95F]/30 rounded-full px-3 py-1 bg-[#CFA95F]/10">{item.type}</span>
// // //                     <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">{item.year}</span>
// // //                   </div>
// // //                   <h3 className={`text-2xl md:text-3xl text-white mb-4 ${cinzel.className}`}>{item.title}</h3>
// // //                   <p className={`text-white/60 leading-relaxed ${inter.className}`}>{item.description}</p>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Bottom Section: Institutional Footprint & Legacy */}
// // //         <div className="grid gap-8 lg:grid-cols-2 mb-8">
          
// // //           <div className="rounded-[2.4rem] border border-[#CFA95F]/15 bg-gradient-to-br from-white/[0.03] to-transparent p-8 md:p-10">
// // //             <p className="text-sm uppercase tracking-[0.34em] text-[#CFA95F]">Institutional Footprint</p>
// // //             <p className={`mt-3 text-white/70 ${inter.className}`}>Achievements connected to the institutions he built.</p>
            
// // //             <div className="mt-8 grid gap-4 sm:grid-cols-2">
// // //               {institutionCards.map((item) => (
// // //                 <div key={item.name} className="rounded-[1.7rem] border border-white/10 bg-[#111126]/60 p-5">
// // //                   <div className="flex items-center justify-between gap-3">
// // //                     <p className={`text-xl text-white ${cinzel.className}`}>{item.name}</p>
// // //                     <span className="rounded-full border border-[#CFA95F]/15 bg-[#CFA95F]/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#F2D08D]">{item.year}</span>
// // //                   </div>
// // //                   <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#CFA95F]/70">{item.title}</p>
// // //                   <p className={`mt-3 text-[13px] leading-relaxed text-white/60 ${inter.className}`}>{item.text}</p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="flex flex-col gap-8">
// // //             <div className="grid grid-cols-2 gap-4">
// // //               {impactRibbon.map((item) => (
// // //                 <div key={item.label} className="rounded-[1.7rem] border border-white/5 bg-[#0F1025] p-6 text-center">
// // //                   <p className={`text-2xl lg:text-3xl text-[#F2D08D] ${cinzel.className}`}>{item.value}</p>
// // //                   <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/45">{item.label}</p>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5 p-6 flex flex-col md:flex-row gap-6 items-center">
// // //               <div className="relative w-full md:w-1/2 h-64 md:h-full min-h-[16rem] rounded-[1.5rem] overflow-hidden">
// // //                 <img src={sacredImages.procession} alt="Procession" className="absolute inset-0 w-full h-full object-cover" />
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
// // //                 <div className="absolute bottom-4 left-4 z-20">
// // //                   <p className="text-[10px] uppercase tracking-[0.2em] text-[#E6C77A]">Living Movement</p>
// // //                   <p className={`mt-1 text-lg text-white ${cinzel.className}`}>Worship, travel, institutions</p>
// // //                 </div>
// // //               </div>
// // //               <div className="w-full md:w-1/2">
// // //                 <p className="text-xs uppercase tracking-[0.3em] text-[#CFA95F]">Legacy In Practice</p>
// // //                 <p className={`mt-4 text-sm text-white/70 leading-relaxed ${inter.className}`}>
// // //                   The institutions did not grow as isolated projects. They formed a connected ecosystem of worship centres, schools, colleges, hospitals, charity channels, women-focused trusts, volunteer service, and annadhanam support.
// // //                 </p>
// // //                 <p className={`mt-3 text-sm text-white/50 leading-relaxed ${inter.className}`}>
// // //                   That broader ecosystem is what makes the achievements section substantial, because the legacy is visible not only in titles and honours, but in the structures that continued serving devotees and the public.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import { cinzel, inter } from "@/app/fonts";
// // import { sacredImages } from "@/lib/content";

// // const recognitions = [
// //   { year: "2019", type: "National Award", title: "Padma Shri for service to humanity", description: "Bangaru Adigalar received the Padma Shri from the Government of India in 2019. It remains the clearest formally documented national honour associated with his public life." },
// //   { year: "1978", type: "Institution Building", title: "Founded ACMEC Trust", description: "His work moved beyond spiritual leadership into organized public service through the Adhiparasakthi Charitable, Medical, Educational and Cultural Trust, founded in Melmaruvathur in 1978." },
// //   { year: "1988", type: "Women Welfare", title: "Launched ASPWCT for medical, educational, and charitable work", description: "The Adhiparasakthi Siddhar Peeda Women's Charitable Trust traces its founding to Bangaru Adigalar in 1988, with work spanning charity, medical care, education, rural development, and women-oriented welfare activity." },
// //   { year: "1983 onward", type: "Education", title: "Expanded education access", description: "Trust material describes a long-running expansion from pre-primary schooling to higher education, with sponsorship support aimed at poorer communities." },
// //   { year: "1986 onward", type: "Healthcare", title: "Scaled a free hospital into a major service network", description: "ACMEC states that its free hospital, started in 1986 with three doctors, later grew into a 1000-bed multispecialty institution serving hundreds of nearby villages." },
// //   { year: "Movement Era", type: "Organization", title: "Built MASM as a wider spiritual and social movement", description: "The Melmaruvathur Adhiparasakthi Spiritual Movement presents itself as a holistic movement under Amma's guidance, combining spirituality with education, healthcare, and social welfare beyond a single temple structure." },
// //   { year: "Public Legacy", type: "Social Reform", title: "Remembered for breaking ritual barriers", description: "Wikipedia and later press coverage consistently associate him with a more inclusive spiritual culture, including the dignity of women and devotees across caste and community lines." },
// //   { year: "Global Reach", type: "Movement Scale", title: "A mission spread through 7,200 worship centres", description: "Official trust pages describe a wide devotional network across India and abroad, turning Melmaruvathur into the center of a much larger spiritual and service movement." },
// //   { year: "Service Ecosystem", type: "Public Welfare", title: "Integrated women welfare, hospital donations, and annadhanam initiatives", description: "Current official donation and service pages show how the movement matured into multiple support channels, including women welfare, hospital donations, volunteer service, and annadhanam-focused giving." },
// // ];

// // const institutionCards = [
// //   { year: "1978", name: "ACMEC", title: "Charity, healthcare, education, culture", text: "The main trust became the backbone of hospital, school, college, welfare, rural infrastructure, and employment activity." },
// //   { year: "1988", name: "ASPWCT", title: "Women's charitable trust", text: "The women's trust expanded the service side of the movement with healthcare, education, CSR-linked support, and welfare initiatives." },
// //   { year: "Movement", name: "MASM", title: "Spiritual movement with social reach", text: "MASM frames the mission as spirituality joined with equality, selfless service, education, healthcare, and public engagement." },
// //   { year: "Service", name: "Annadhanam", title: "Feeding and welfare support", text: "Annadhanam and related donation channels show that the movement institutionalized feeding, seva, and practical care alongside worship." },
// // ];

// // const impactRibbon = [
// //   { value: "Padma Shri", label: "national honour" },
// //   { value: "7,200", label: "micro-units / worship centres" },
// //   { value: "1000", label: "hospital beds cited by trust material" },
// //   { value: "750", label: "villages cited as served by hospital network" },
// // ];

// // const easePremium = [0.16, 1, 0.3, 1];

// // export default function Awards() {
// //   return (
// //     <section id="awards" data-section className="relative bg-[#020204] py-32 px-4 sm:px-6 overflow-hidden">
      
// //       {/* Ambient Deep Glows */}
// //       <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#CFA95F]/10 blur-[150px] pointer-events-none" />
// //       <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#F2D08D]/5 blur-[150px] pointer-events-none" />

// //       <div className="relative z-10 mx-auto max-w-7xl">
        
// //         {/* Header Section */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 1, ease: easePremium }}
// //           className="text-center max-w-4xl mx-auto mb-24"
// //         >
// //           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#CFA95F]/20 bg-[#CFA95F]/5 backdrop-blur-md mb-8">
// //             <div className="w-2 h-2 rounded-full bg-[#CFA95F] animate-pulse" />
// //             <p className="text-[10px] uppercase tracking-[0.3em] text-[#F2D08D]">Awards & Achievements</p>
// //           </div>
// //           <h2 className={`text-5xl md:text-7xl leading-[1.1] text-white ${cinzel.className}`}>
// //             More than one award, <br/>
// //             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CFA95F] to-[#FFF1C5]">a legacy built in public view</span>
// //           </h2>
// //           <p className={`mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto ${inter.className}`}>
// //             The documented record shows one major national honour, but a much larger story of achievement: institution building, social reach, inclusive spiritual reform, and a service network that outgrew a single temple town.
// //           </p>
// //         </motion.div>

// //         {/* Sticky Scroll Section for Recognitions */}
// //         <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-32">
          
// //           <div className="w-full lg:w-5/12">
// //             <div className="sticky top-32 space-y-6">
              
// //               <motion.div 
// //                 initial={{ opacity: 0, scale: 0.95 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 1, ease: easePremium }}
// //                 className="relative overflow-hidden rounded-[2.5rem] bg-white/5 ring-1 ring-white/10 shadow-2xl p-2"
// //               >
// //                 <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] group">
// //                   <img src={sacredImages?.padmaShri || sacredImages.hero} alt="National Recognition" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-[#020204]/90 via-[#020204]/20 to-transparent" />
// //                   <div className="absolute bottom-8 left-8 right-8 z-20">
// //                     <p className="text-[10px] uppercase tracking-[0.3em] text-[#E6C77A] mb-2 drop-shadow-md">National Recognition</p>
// //                     <p className={`text-4xl text-white drop-shadow-lg ${cinzel.className}`}>Padma Shri</p>
// //                     <div className="mt-4 flex items-center gap-3">
// //                       <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs text-white/80 border border-white/20">2019</span>
// //                       <span className="px-3 py-1.5 rounded-full bg-[#CFA95F]/20 backdrop-blur-md text-xs text-[#F2D08D] border border-[#CFA95F]/30">Signature Honour</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </motion.div>

// //             </div>
// //           </div>

// //           <div className="w-full lg:w-7/12 flex flex-col gap-6 pt-4">
// //             {recognitions.map((item, index) => (
// //               <motion.div 
// //                 key={item.title}
// //                 initial={{ opacity: 0, x: 20 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 viewport={{ once: true, margin: "-100px" }}
// //                 transition={{ duration: 0.8, delay: index * 0.1, ease: easePremium }}
// //                 className="group relative overflow-hidden rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 transition-all duration-500 backdrop-blur-xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:shadow-[#CFA95F]/5"
// //               >
// //                 <div className="flex flex-wrap items-center gap-4 mb-6">
// //                   <span className="text-[10px] uppercase tracking-[0.2em] text-[#F2D08D] border border-[#CFA95F]/20 rounded-full px-3 py-1.5 bg-[#CFA95F]/10">{item.type}</span>
// //                   <span className="text-sm font-mono tracking-widest text-white/40">{item.year}</span>
// //                 </div>
// //                 <h3 className={`text-2xl md:text-3xl text-white mb-4 group-hover:text-[#F2D08D] transition-colors duration-500 ${cinzel.className}`}>{item.title}</h3>
// //                 <p className={`text-base text-white/60 leading-relaxed ${inter.className}`}>{item.description}</p>
// //               </motion.div>
// //             ))}
// //           </div>

// //         </div>

// //         {/* Institutional Footprint & Legacy */}
// //         <div className="relative rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 p-8 md:p-16 backdrop-blur-3xl overflow-hidden">
          
// //           <div className="absolute top-0 right-0 w-96 h-96 bg-[#CFA95F]/5 blur-[100px] pointer-events-none" />

// //           <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            
// //             <div className="flex flex-col gap-10">
// //               <div>
// //                 <p className="text-[10px] uppercase tracking-[0.4em] text-[#CFA95F] mb-3">Institutional Footprint</p>
// //                 <p className={`text-3xl text-white ${cinzel.className}`}>Achievements connected to the institutions he built.</p>
// //               </div>
              
// //               <div className="grid sm:grid-cols-2 gap-4">
// //                 {institutionCards.map((item) => (
// //                   <div key={item.name} className="rounded-2xl bg-black/40 border border-white/5 p-6 hover:border-[#CFA95F]/30 transition-colors duration-500">
// //                     <div className="flex items-center justify-between gap-2 mb-4">
// //                       <p className={`text-xl text-white ${cinzel.className}`}>{item.name}</p>
// //                       <span className="text-[9px] uppercase tracking-widest text-[#CFA95F]">{item.year}</span>
// //                     </div>
// //                     <p className="text-[10px] uppercase tracking-[0.2em] text-[#CFA95F]/70 mb-3">{item.title}</p>
// //                     <p className={`text-sm leading-relaxed text-white/60 ${inter.className}`}>{item.text}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div className="flex flex-col gap-10">
// //               <div className="grid grid-cols-2 gap-4">
// //                 {impactRibbon.map((item) => (
// //                   <div key={item.label} className="rounded-2xl bg-black/40 border border-white/5 p-6 text-center hover:bg-white/[0.02] transition-colors duration-500">
// //                     <p className={`text-3xl lg:text-4xl text-[#F2D08D] mb-2 ${cinzel.className}`}>{item.value}</p>
// //                     <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">{item.label}</p>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="rounded-3xl overflow-hidden border border-white/10 relative group">
// //                 <img src={sacredImages.procession} alt="Legacy" className="w-full h-64 object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-60 group-hover:opacity-100" />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 flex flex-col justify-end">
// //                   <p className="text-[10px] uppercase tracking-[0.3em] text-[#CFA95F] mb-2">Legacy In Practice</p>
// //                   <p className={`text-sm text-white/80 leading-relaxed mb-3 ${inter.className}`}>
// //                     The institutions did not grow as isolated projects. They formed a connected ecosystem of worship centres, schools, colleges, hospitals, charity channels, women-focused trusts, volunteer service, and annadhanam support.
// //                   </p>
// //                   <p className={`text-xs text-white/50 leading-relaxed ${inter.className}`}>
// //                     That broader ecosystem is what makes the achievements section substantial, because the legacy is visible not only in titles and honours, but in the structures that continued serving devotees and the public.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>

// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import { cinzel, inter } from "@/app/fonts";
// import { sacredImages } from "@/lib/content";

// const recognitions = [
//   { year: "2019", type: "National Award", title: "Padma Shri for service to humanity", description: "Bangaru Adigalar received the Padma Shri from the Government of India in 2019. It remains the clearest formally documented national honour associated with his public life." },
//   { year: "1978", type: "Institution Building", title: "Founded ACMEC Trust", description: "His work moved beyond spiritual leadership into organized public service through the Adhiparasakthi Charitable, Medical, Educational and Cultural Trust, founded in Melmaruvathur in 1978." },
//   { year: "1988", type: "Women Welfare", title: "Launched ASPWCT for medical, educational, and charitable work", description: "The Adhiparasakthi Siddhar Peeda Women's Charitable Trust traces its founding to Bangaru Adigalar in 1988, with work spanning charity, medical care, education, rural development, and women-oriented welfare activity." },
//   { year: "1983 onward", type: "Education", title: "Expanded education access", description: "Trust material describes a long-running expansion from pre-primary schooling to higher education, with sponsorship support aimed at poorer communities." },
//   { year: "1986 onward", type: "Healthcare", title: "Scaled a free hospital into a major service network", description: "ACMEC states that its free hospital, started in 1986 with three doctors, later grew into a 1000-bed multispecialty institution serving hundreds of nearby villages." },
//   { year: "Movement Era", type: "Organization", title: "Built MASM as a wider spiritual and social movement", description: "The Melmaruvathur Adhiparasakthi Spiritual Movement presents itself as a holistic movement under Amma's guidance, combining spirituality with education, healthcare, and social welfare beyond a single temple structure." },
//   { year: "Public Legacy", type: "Social Reform", title: "Remembered for breaking ritual barriers", description: "Wikipedia and later press coverage consistently associate him with a more inclusive spiritual culture, including the dignity of women and devotees across caste and community lines." },
//   { year: "Global Reach", type: "Movement Scale", title: "A mission spread through 7,200 worship centres", description: "Official trust pages describe a wide devotional network across India and abroad, turning Melmaruvathur into the center of a much larger spiritual and service movement." },
//   { year: "Service Ecosystem", type: "Public Welfare", title: "Integrated women welfare, hospital donations, and annadhanam initiatives", description: "Current official donation and service pages show how the movement matured into multiple support channels, including women welfare, hospital donations, volunteer service, and annadhanam-focused giving." },
// ];

// const institutionCards = [
//   { year: "1978", name: "ACMEC", title: "Charity, healthcare, education, culture", text: "The main trust became the backbone of hospital, school, college, welfare, rural infrastructure, and employment activity." },
//   { year: "1988", name: "ASPWCT", title: "Women's charitable trust", text: "The women's trust expanded the service side of the movement with healthcare, education, CSR-linked support, and welfare initiatives." },
//   { year: "Movement", name: "MASM", title: "Spiritual movement with social reach", text: "MASM frames the mission as spirituality joined with equality, selfless service, education, healthcare, and public engagement." },
//   { year: "Service", name: "Annadhanam", title: "Feeding and welfare support", text: "Annadhanam and related donation channels show that the movement institutionalized feeding, seva, and practical care alongside worship." },
// ];

// const impactRibbon = [
//   { value: "Padma Shri", label: "national honour" },
//   { value: "7,200", label: "micro-units / worship centres" },
//   { value: "1000", label: "hospital beds cited by trust material" },
//   { value: "750", label: "villages cited as served by hospital network" },
// ];

// const easePremium = [0.16, 1, 0.3, 1];

// export default function Awards() {
//   return (
//     <section id="awards" data-section className="relative bg-[#020204] py-32 px-4 sm:px-6 overflow-hidden">
      
//       {/* Ambient Deep Glows */}
//       <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#CFA95F]/10 blur-[150px] pointer-events-none" />
//       <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#F2D08D]/5 blur-[150px] pointer-events-none" />

//       <div className="relative z-10 mx-auto max-w-7xl">
        
//         {/* Header Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: easePremium }}
//           className="text-center max-w-4xl mx-auto mb-24"
//         >
//           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#CFA95F]/20 bg-[#CFA95F]/5 backdrop-blur-md mb-8">
//             <div className="w-2 h-2 rounded-full bg-[#CFA95F] animate-pulse" />
//             <p className="text-[10px] uppercase tracking-[0.3em] text-[#F2D08D]">Awards & Achievements</p>
//           </div>
//           <h2 className={`text-5xl md:text-7xl leading-[1.1] text-white ${cinzel.className}`}>
//             More than one award, <br/>
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CFA95F] to-[#FFF1C5]">a legacy built in public view</span>
//           </h2>
//           <p className={`mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto ${inter.className}`}>
//             The documented record shows one major national honour, but a much larger story of achievement: institution building, social reach, inclusive spiritual reform, and a service network that outgrew a single temple town.
//           </p>
//         </motion.div>

//         {/* Layout: Fixed Left, Scrollable Right */}
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-32">
          
//           {/* Left Side: Fixed Image */}
//           <div className="w-full lg:w-5/12">
//             <div className="sticky top-32 space-y-6">
              
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, ease: easePremium }}
//                 className="relative overflow-hidden rounded-[2.5rem] bg-white/5 ring-1 ring-white/10 shadow-2xl p-2"
//               >
//                 <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] group">
//                   <img src={sacredImages?.padmaShri || sacredImages.hero} alt="National Recognition" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#020204]/90 via-[#020204]/20 to-transparent" />
//                   <div className="absolute bottom-8 left-8 right-8 z-20">
//                     <p className="text-[10px] uppercase tracking-[0.3em] text-[#E6C77A] mb-2 drop-shadow-md">National Recognition</p>
//                     <p className={`text-4xl text-white drop-shadow-lg ${cinzel.className}`}>Padma Shri</p>
//                     <div className="mt-4 flex items-center gap-3">
//                       <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs text-white/80 border border-white/20">2019</span>
//                       <span className="px-3 py-1.5 rounded-full bg-[#CFA95F]/20 backdrop-blur-md text-xs text-[#F2D08D] border border-[#CFA95F]/30">Signature Honour</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Public Service Image */}
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, delay: 0.2, ease: easePremium }}
//               className="relative overflow-hidden rounded-[2.5rem] bg-white/5 ring-1 ring-white/10 shadow-2xl p-2 hidden lg:block"
//             >
//               <div className="relative rounded-[2rem] overflow-hidden aspect-[16/9] group">
//                 <img src={sacredImages.nobel} alt="Public Service" className="w-full h-full object-fill grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s]" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#020204]/90 via-[#020204]/20 to-transparent" />
//                 <div className="absolute bottom-6 left-6 right-6 z-20">
//                   {/* <p className="text-[10px] uppercase tracking-[0.3em] text-[#E6C77A] mb-1 drop-shadow-md">Public Service</p> */}
//                   <p className={`text-2xl text-white drop-shadow-lg ${cinzel.className}`}>Nobel Award</p>
//                 </div>
//               </div>
//             </motion.div>

//             </div>
//           </div>

//           {/* Right Side: Invisible Scrollable Container */}
//           <div className="relative w-full lg:w-7/12 h-full">
            
//             {/* Top Fade Mask */}
//             <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#020204] to-transparent z-20 pointer-events-none" />
            
//             {/* Bottom Fade Mask */}
//             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020204] via-[#020204]/90 to-transparent z-20 pointer-events-none" />

//             {/* Scrollable List */}
//             <div 
//               className="flex flex-col gap-6 h-[1000px] overflow-y-auto pr-2 sm:pr-4 pt-8 pb-32"
//               style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(207,169,95,0.3) transparent' }}
//             >
//               {recognitions.map((item, index) => (
//                 <motion.div 
//                   key={item.title}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: index * 0.1, ease: easePremium }}
//                   className="group relative overflow-hidden rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 transition-all duration-500 backdrop-blur-xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:shadow-[#CFA95F]/5 flex-shrink-0"
//                 >
//                   <div className="flex flex-wrap items-center gap-4 mb-6">
//                     <span className="text-[10px] uppercase tracking-[0.2em] text-[#F2D08D] border border-[#CFA95F]/20 rounded-full px-3 py-1.5 bg-[#CFA95F]/10">{item.type}</span>
//                     <span className="text-sm font-mono tracking-widest text-white/40">{item.year}</span>
//                   </div>
//                   <h3 className={`text-2xl md:text-3xl text-white mb-4 group-hover:text-[#F2D08D] transition-colors duration-500 ${cinzel.className}`}>{item.title}</h3>
//                   <p className={`text-base text-white/60 leading-relaxed ${inter.className}`}>{item.description}</p>
//                 </motion.div>
//               ))}
//             </div>

//           </div>

//         </div>

//         {/* Institutional Footprint & Legacy */}
//         <div className="relative rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 p-8 md:p-16 backdrop-blur-3xl overflow-hidden">
          
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#CFA95F]/5 blur-[100px] pointer-events-none" />

//           <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            
//             <div className="flex flex-col gap-10">
//               <div>
//                 <p className="text-[10px] uppercase tracking-[0.4em] text-[#CFA95F] mb-3">Institutional Footprint</p>
//                 <p className={`text-3xl text-white ${cinzel.className}`}>Achievements connected to the institutions he built.</p>
//               </div>
              
//               <div className="grid sm:grid-cols-2 gap-4">
//                 {institutionCards.map((item) => (
//                   <div key={item.name} className="rounded-2xl bg-black/40 border border-white/5 p-6 hover:border-[#CFA95F]/30 transition-colors duration-500">
//                     <div className="flex items-center justify-between gap-2 mb-4">
//                       <p className={`text-xl text-white ${cinzel.className}`}>{item.name}</p>
//                       <span className="text-[9px] uppercase tracking-widest text-[#CFA95F]">{item.year}</span>
//                     </div>
//                     <p className="text-[10px] uppercase tracking-[0.2em] text-[#CFA95F]/70 mb-3">{item.title}</p>
//                     <p className={`text-sm leading-relaxed text-white/60 ${inter.className}`}>{item.text}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-col gap-10">
//               <div className="grid grid-cols-2 gap-4">
//                 {impactRibbon.map((item) => (
//                   <div key={item.label} className="rounded-2xl bg-black/40 border border-white/5 p-6 text-center hover:bg-white/[0.02] transition-colors duration-500">
//                     <p className={`text-3xl lg:text-4xl text-[#F2D08D] mb-2 ${cinzel.className}`}>{item.value}</p>
//                     <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">{item.label}</p>
//                   </div>
//                 ))}
//               </div>

//               <div className="rounded-3xl overflow-hidden border border-white/10 relative group">
//                 <img src={sacredImages.procession} alt="Legacy" className="w-full h-64 object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-60 group-hover:opacity-100" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 flex flex-col justify-end">
//                   <p className="text-[10px] uppercase tracking-[0.3em] text-[#CFA95F] mb-2">Legacy In Practice</p>
//                   <p className={`text-sm text-white/80 leading-relaxed mb-3 ${inter.className}`}>
//                     The institutions did not grow as isolated projects. They formed a connected ecosystem of worship centres, schools, colleges, hospitals, charity channels, women-focused trusts, volunteer service, and annadhanam support.
//                   </p>
//                   <p className={`text-xs text-white/50 leading-relaxed ${inter.className}`}>
//                     That broader ecosystem is what makes the achievements section substantial, because the legacy is visible not only in titles and honours, but in the structures that continued serving devotees and the public.
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { cinzel, inter } from "@/app/fonts";
import { sacredImages } from "@/lib/content";

const recognitions = [
  { year: "2019", type: "National Award", title: "Padma Shri for service to humanity", description: "Bangaru Adigalar received the Padma Shri from the Government of India in 2019. It remains the clearest formally documented national honour associated with his public life." },
  { year: "1978", type: "Institution Building", title: "Founded ACMEC Trust", description: "His work moved beyond spiritual leadership into organized public service through the Adhiparasakthi Charitable, Medical, Educational and Cultural Trust, founded in Melmaruvathur in 1978." },
  { year: "1988", type: "Women Welfare", title: "Launched ASPWCT for medical, educational, and charitable work", description: "The Adhiparasakthi Siddhar Peeda Women's Charitable Trust traces its founding to Bangaru Adigalar in 1988, with work spanning charity, medical care, education, rural development, and women-oriented welfare activity." },
  { year: "1983 onward", type: "Education", title: "Expanded education access", description: "Trust material describes a long-running expansion from pre-primary schooling to higher education, with sponsorship support aimed at poorer communities." },
  { year: "1986 onward", type: "Healthcare", title: "Scaled a free hospital into a major service network", description: "ACMEC states that its free hospital, started in 1986 with three doctors, later grew into a 1000-bed multispecialty institution serving hundreds of nearby villages." },
  { year: "Movement Era", type: "Organization", title: "Built MASM as a wider spiritual and social movement", description: "The Melmaruvathur Adhiparasakthi Spiritual Movement presents itself as a holistic movement under Amma's guidance, combining spirituality with education, healthcare, and social welfare beyond a single temple structure." },
  { year: "Public Legacy", type: "Social Reform", title: "Remembered for breaking ritual barriers", description: "Wikipedia and later press coverage consistently associate him with a more inclusive spiritual culture, including the dignity of women and devotees across caste and community lines." },
  { year: "Global Reach", type: "Movement Scale", title: "A mission spread through 7,200 worship centres", description: "Official trust pages describe a wide devotional network across India and abroad, turning Melmaruvathur into the center of a much larger spiritual and service movement." },
  { year: "Service Ecosystem", type: "Public Welfare", title: "Integrated women welfare, hospital donations, and annadhanam initiatives", description: "Current official donation and service pages show how the movement matured into multiple support channels, including women welfare, hospital donations, volunteer service, and annadhanam-focused giving." },
];

const institutionCards = [
  { year: "1978", name: "ACMEC", title: "Charity, healthcare, education, culture", text: "The main trust became the backbone of hospital, school, college, welfare, rural infrastructure, and employment activity." },
  { year: "1988", name: "ASPWCT", title: "Women's charitable trust", text: "The women's trust expanded the service side of the movement with healthcare, education, CSR-linked support, and welfare initiatives." },
  { year: "Movement", name: "MASM", title: "Spiritual movement with social reach", text: "MASM frames the mission as spirituality joined with equality, selfless service, education, healthcare, and public engagement." },
  { year: "Service", name: "Annadhanam", title: "Feeding and welfare support", text: "Annadhanam and related donation channels show that the movement institutionalized feeding, seva, and practical care alongside worship." },
];

const impactRibbon = [
  { value: "Padma Shri", label: "national honour" },
  { value: "7,200", label: "micro-units / worship centres" },
  { value: "1000", label: "hospital beds cited by trust material" },
  { value: "750", label: "villages cited as served by hospital network" },
];

const easePremium = [0.16, 1, 0.3, 1] as const;

export default function Awards() {
  return (
    <section id="awards" data-section className="relative bg-[#02060C] py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#22D3EE]/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#A78BFA]/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easePremium }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 backdrop-blur-md mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-200">Awards & Achievements</p>
          </div>
          <h2 className={`text-5xl md:text-7xl leading-[1.1] text-white ${cinzel.className}`}>
            More than one award, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7DD3FC] via-[#34D399] to-[#C084FC]">
              a legacy built in public view
            </span>
          </h2>
          <p className={`mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto ${inter.className}`}>
            The documented record shows one major national honour, but a much larger story of achievement: institution building, social reach, inclusive spiritual reform, and a service network that outgrew a single temple town.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-32">
          <div className="w-full lg:w-5/12">
            <div className="sticky top-32 space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: easePremium }}
                className="relative overflow-hidden rounded-[2.5rem] bg-white/5 ring-1 ring-white/10 shadow-2xl p-2"
              >
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] group">
                  <img src={sacredImages?.padmaShri || sacredImages.hero} alt="National Recognition" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02060C]/90 via-[#02060C]/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-200 mb-2 drop-shadow-md">National Recognition</p>
                    <p className={`text-4xl text-white drop-shadow-lg ${cinzel.className}`}>Padma Shri</p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs text-white/80 border border-white/20">2019</span>
                      <span className="px-3 py-1.5 rounded-full bg-cyan-300/20 backdrop-blur-md text-xs text-cyan-200 border border-cyan-300/30">Signature Honour</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: easePremium }}
                className="relative overflow-hidden rounded-[2.5rem] bg-white/5 ring-1 ring-white/10 shadow-2xl p-2 hidden lg:block"
              >
                <div className="relative rounded-[2rem] overflow-hidden aspect-[16/9] group">
                  <img src={sacredImages.nobel} alt="Public Service" className="w-full h-full object-fill  transition-all duration-[1.5s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02060C]/90 via-[#02060C]/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <p className={`text-2xl text-white drop-shadow-lg ${cinzel.className}`}>Nobel Award</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative w-full lg:w-7/12 h-full">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#02060C] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#02060C] via-[#02060C]/90 to-transparent z-20 pointer-events-none" />

            <div
              className="flex flex-col gap-6 h-[1000px] overflow-y-auto pr-2 sm:pr-4 pt-8 pb-32"
              style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(34,211,238,0.3) transparent" }}
            >
              {recognitions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: easePremium }}
                  className="group relative overflow-hidden rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-300/20 transition-all duration-500 backdrop-blur-xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:shadow-cyan-300/5 flex-shrink-0"
                >
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-200 border border-cyan-300/20 rounded-full px-3 py-1.5 bg-cyan-300/10">{item.type}</span>
                    <span className="text-sm font-mono tracking-widest text-white/40">{item.year}</span>
                  </div>
                  <h3 className={`text-2xl md:text-3xl text-white mb-4 group-hover:text-cyan-200 transition-colors duration-500 ${cinzel.className}`}>{item.title}</h3>
                  <p className={`text-base text-white/60 leading-relaxed ${inter.className}`}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative rounded-[3rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 p-8 md:p-16 backdrop-blur-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300/5 blur-[100px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-cyan-200 mb-3">Institutional Footprint</p>
                <p className={`text-3xl text-white ${cinzel.className}`}>Achievements connected to the institutions he built.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {institutionCards.map((item) => (
                  <div key={item.name} className="rounded-2xl bg-black/40 border border-white/5 p-6 hover:border-cyan-300/30 transition-colors duration-500">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <p className={`text-xl text-white ${cinzel.className}`}>{item.name}</p>
                      <span className="text-[9px] uppercase tracking-widest text-cyan-200">{item.year}</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200/70 mb-3">{item.title}</p>
                    <p className={`text-sm leading-relaxed text-white/60 ${inter.className}`}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-2 gap-4">
                {impactRibbon.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-black/40 border border-white/5 p-6 text-center hover:bg-white/[0.02] transition-colors duration-500">
                    <p className={`text-3xl lg:text-4xl text-cyan-200 mb-2 ${cinzel.className}`}>{item.value}</p>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl overflow-hidden border border-white/10 relative group">
                <img src={sacredImages.procession} alt="Legacy" className="w-full h-64 object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 flex flex-col justify-end">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-200 mb-2">Legacy In Practice</p>
                  <p className={`text-sm text-white/80 leading-relaxed mb-3 ${inter.className}`}>
                    The institutions did not grow as isolated projects. They formed a connected ecosystem of worship centres, schools, colleges, hospitals, charity channels, women-focused trusts, volunteer service, and annadhanam support.
                  </p>
                  <p className={`text-xs text-white/50 leading-relaxed ${inter.className}`}>
                    That broader ecosystem is what makes the achievements section substantial, because the legacy is visible not only in titles and honours, but in the structures that continued serving devotees and the public.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
