import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://devobichinaka.vercel.app";

export const metadata: Metadata = {
  title: "Chinaka Obinna (DevObi) | Software Engineer",
  description: "Chinaka Obinna (DevObi) is a Software Engineering graduate from Nigeria who builds applications and software systems, with experience across web development, backend services, APIs and modern development tools.",
  keywords: [
    "Chinaka Obinna",
    "DevObi",
    "Software Engineer",
    "Software Engineering",
    "Web Development",
    "Backend Development",
    "Software Systems",
    "Application Development",
    "Nigeria"
  ],
  authors: [{ name: "Chinaka Obinna", url: "https://github.com/DevObiChinaka" }],
  creator: "Chinaka Obinna",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    title: "Chinaka Obinna (DevObi) | Software Engineer",
    description: "Portfolio of Chinaka Obinna (DevObi), a Software Engineering graduate building applications and software systems.",
    siteName: "Chinaka Obinna (DevObi)",
    images: [{
      url: "/mybrandimage.jpg",
      width: 1024,
      height: 1024,
      alt: "Chinaka Obinna (DevObi)",
      type: "image/jpeg"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinaka Obinna (DevObi) | Software Engineer",
    description: "Portfolio of Chinaka Obinna (DevObi), a Software Engineering graduate building applications and software systems.",
    images: ["/mybrandimage.jpg"],
    creator: "@devobichinaka"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "HZdclh1sMKS9Izc9RP7tmyeKN8JR4G3Q3noqk7LYB0g"
  },
  category: "Technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chinaka Obinna",
  alternateName: "DevObi",
  url: siteUrl,
  image: `${siteUrl}/mybrandimage.jpg`,
  jobTitle: "Software Engineer",
  description: "Software Engineering graduate from Nigeria interested in building useful software systems and understanding how people work with them.",
  sameAs: [
    "https://github.com/DevObiChinaka",
    "https://x.com/devobichinaka",
    "https://instagram.com/devobichinaka"
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0b0d10" />
        <meta name="google-site-verification" content="HZdclh1sMKS9Izc9RP7tmyeKN8JR4G3Q3noqk7LYB0g" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
