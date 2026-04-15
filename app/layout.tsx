import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito, Patrick_Hand } from "next/font/google";
import "./globals.css";

const bodyFont = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sketchFont = Patrick_Hand({
  variable: "--font-sketch",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Atelier | Hand-drawn Makeup Boutique",
  description:
    "Atelier is a whimsical makeup boutique with blush sticks, lip tints, gloss, palettes, and highlighters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${sketchFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
