import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevObi | Full-Stack Developer - Django, Next.js & Flutter",
  description: "Chinaka Obinna (DevObi) - Full-Stack Developer building production-ready SaaS platforms, mobile apps, and scalable systems with Django, Python, Next.js, and Flutter. 2+ years experience in payment integrations, OAuth, and AI-powered applications.",
  keywords: ["Full-Stack Developer", "Django Developer", "Next.js Developer", "Flutter Developer", "Python Developer", "Backend Developer", "SaaS Development", "Payment Integration", "OAuth", "REST API", "DevObi", "Chinaka Obinna", "Nigeria Developer"],
  authors: [{ name: "Chinaka Obinna", url: "https://github.com/devobichinaka" }],
  creator: "Chinaka Obinna (DevObi)",
  publisher: "DevObi",
  metadataBase: new URL('https://devobichinaka.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devobichinaka.vercel.app",
    title: "DevObi | Full-Stack Developer - Django, Next.js & Flutter",
    description: "Building production-ready SaaS platforms and scalable systems. Expertise in Django, Python, Next.js, Flutter, payment integrations, and AI-powered applications.",
    siteName: "DevObi Portfolio",
    images: [
      {
        url: "/mybrandimage.jpg",
        width: 1200,
        height: 630,
        alt: "DevObi - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevObi | Full-Stack Developer - Django, Next.js & Flutter",
    description: "Building production-ready SaaS platforms with Django, Next.js, and Flutter. Payment integrations, OAuth, and scalable systems.",
    images: ["/mybrandimage.jpg"],
    creator: "@devobichinaka",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "7ZD_cVmUgBfQJRmR1dAZvC60f9wbK0zCPjNssvy7_1g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chinaka Obinna",
    "alternateName": "DevObi",
    "url": "https://devobichinaka.vercel.app",
    "image": "https://devobichinaka.vercel.app/mybrandimage.jpg",
    "sameAs": [
      "https://github.com/devobichinaka"
    ],
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "Django",
      "Python",
      "Next.js",
      "React",
      "Flutter",
      "TypeScript",
      "PostgreSQL",
      "REST API",
      "Payment Integration",
      "OAuth",
      "SaaS Development"
    ],
    "description": "Full-Stack Developer building production-ready SaaS platforms, mobile apps, and scalable systems with Django, Python, Next.js, and Flutter.",
    "email": "obinnachiderachinaka@gmail.com"
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
