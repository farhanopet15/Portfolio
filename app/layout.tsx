import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Ahmad Farhan Walidain — Full Stack Developer | NXONE",
  description:
    "Personal portfolio of Ahmad Farhan Walidain. Full Stack Developer specializing in Next.js, TypeScript, Node.js, Golang, and dark interactive web experiences.",
  icons: {
    icon: "/Logo.png",
  },
  keywords: [
    "Ahmad Farhan Walidain",
    "Farhan Opet",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} bg-eerie-black text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
