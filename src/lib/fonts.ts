import { Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
export const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], weight: ["500"], display: "swap" });
