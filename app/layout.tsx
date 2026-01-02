import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import { ReactLenis, useLenis } from "lenis/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ujjwal Prakash",
  description: "Go developer and system programmer.",
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mono.variable} antialiased overflow-x-hidden`}
      >
        {/* Lenis MUST wrap scroll content */}
        <ReactLenis root>
          <MainNav />
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
