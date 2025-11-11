import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Ahmad Farhan Walidain",
  description:
    "Portfolio of a full stack developer crafting eerie, high-performance experiences for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} bg-eerie-black text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
