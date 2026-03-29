"use client";

import { cinzel, inter } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B1E] text-white overflow-hidden pt-28 pb-10">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[300px] bg-[#CFA95F]/10 blur-[120px] -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* 🔥 TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className={`text-2xl mb-4 ${cinzel.className}`}>
              Bangaru Adigalar
            </h2>
            <p className={`text-white/60 text-sm ${inter.className}`}>
              A spiritual path of devotion, service, and inner awakening,
              guiding millions toward peace and harmony.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#CFA95F] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>About</li>
              <li>Programs</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-[#CFA95F] mb-4">Programs</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Daily Worship</li>
              <li>Annadhanam</li>
              <li>Community Service</li>
              <li>Gatherings</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#CFA95F] mb-4">Contact</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>Email: info@amma.org</li>
              <li>Phone: +91 9876543210</li>
              <li>Location: Tamil Nadu, India</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 h-[1px] bg-gradient-to-r from-transparent via-[#CFA95F]/40 to-transparent" />

        {/* Bottom */}
        <div className="mt-6 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Bangaru Adigalar. All rights reserved.
        </div>

      </div>
    </footer>
  );
}