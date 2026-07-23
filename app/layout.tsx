import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";
import CursorGrid from "@/components/CursorGrid";

const Reguler = localFont({
  src: "./Real-Text-Regular.otf",
  variable: "--font-Reguler",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Excellio Theobald | Frontend Developer",
  description: "Frontend Developer Portfolio",
  openGraph: {
    title: "Excellio Theobald | Frontend Developer",
    description: "Frontend Developer Portfolio",
    images: ["/banner1.png"], // atau og-image.png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${Reguler.variable} h-full antialiased`}
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>
        
        {/* Background Global */}
        <div className="fixed inset-0 -z-10">
          <CursorGrid
            cellSize={70}
            color="#000"
            radius={200}
            falloff="smooth"
            holdTime={400}
            fadeDuration={800}
            lineWidth={1.2}
            maxOpacity={1}
            fillOpacity={0}
            gridOpacity={0.1}
            cellRadius={0}
            clickPulse
            pulseSpeed={600}
          />
        </div>

        <Navbar />

        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}