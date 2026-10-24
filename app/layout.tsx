import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevObi | Software Engineer — Backend Systems & Application Architecture",
  description: "Portfolio of Chinaka Obinna (DevObi), a Software Engineering graduate interested in backend systems, application architecture, software reliability, and human–AI collaboration.",
  keywords: ["Chinaka Obinna", "DevObi", "Software Engineer", "Backend Development", "Application Architecture", "Django", "Python", "Next.js", "TypeScript", "Software Engineering", "Human-AI Collaboration"],
  authors: [{ name: "Chinaka Obinna (DevObi)", url: "https://github.com/DevObiChinaka" }],
  creator: "Chinaka Obinna (DevObi)",
  metadataBase: new URL("https://devobichinaka.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_NG", url: "https://devobichinaka.vercel.app",
    title: "DevObi | Software Engineering Portfolio",
    description: "Selected software projects and interests in backend systems, application architecture, and human–AI collaboration.",
    siteName: "DevObi Portfolio",
    images: [{ url: "/mybrandimage.jpg", width: 1024, height: 1024, alt: "DevObi — Software Engineering graduate", type: "image/jpeg" }],
  },
  twitter: { card: "summary_large_image", title: "DevObi | Software Engineering Portfolio", description: "Selected software projects and interests in backend systems, application architecture, and human–AI collaboration.", images: ["/mybrandimage.jpg"], creator: "@devobichinaka" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  verification: { google: "rb7tKfqCWtnYDWA5OZFMFkYx3sCNVj4u7w7imvAcx1w" },
  category: "Technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0b0d10" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
