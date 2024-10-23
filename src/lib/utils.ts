import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Sora, Noto_Sans, Noto_Sans_Mono } from "next/font/google";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-mono",
});
