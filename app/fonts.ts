// app/fonts.ts
import { Cinzel, Inter } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});