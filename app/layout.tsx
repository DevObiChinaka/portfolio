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
  title: "DevObi - Full-Stack Developer | Django, Next.js & Flutter Expert in Nigeria",
  description: "Chinaka Obinna (DevObi) - Expert Full-Stack Developer in Nigeria building production-ready SaaS platforms, mobile apps, and scalable systems. 2+ years experience with Django, Python, Next.js, Flutter, payment integrations (Paystack), Google OAuth, and AI-powered applications. Available for hire.",
  keywords: [
    // Primary Skills
    "Full-Stack Developer Nigeria", "Django Developer Nigeria", "Next.js Developer", "Flutter Developer", 
    "Python Developer", "Backend Developer Nigeria", "Frontend Developer",
    // Technologies
    "Django Expert", "Next.js Expert", "React Developer", "TypeScript Developer", 
    "PostgreSQL", "Redis", "REST API Developer",
    // Services
    "SaaS Development", "Mobile App Development", "Payment Integration Paystack", 
    "OAuth Integration", "API Development", "DevOps Engineer",
    // Personal Brand
    "DevObi", "Chinaka Obinna", "Nigerian Developer", "Freelance Developer Nigeria",
    // Specific Skills
    "Facial Recognition App", "Subscription Management", "Telegram Bot Development",
    "Geofencing", "QR Code Systems", "Firebase Integration"
  ],
  authors: [{ name: "Chinaka Obinna (DevObi)", url: "https://github.com/devobichinaka" }],
  creator: "Chinaka Obinna (DevObi)",
  publisher: "DevObi",
  metadataBase: new URL('https://devobichinaka.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://devobichinaka.vercel.app",
    title: "DevObi - Full-Stack Developer | Django, Next.js & Flutter Expert",
    description: "Expert Full-Stack Developer in Nigeria specializing in production-ready SaaS platforms, mobile apps with AI, and scalable backend systems. Django, Python, Next.js, Flutter, payment integrations. Available for hire.",
    siteName: "DevObi - Full-Stack Developer Portfolio",
    images: [
      {
        url: "/mybrandimage.jpg",
        width: 1024,
        height: 1024,
        alt: "DevObi (Chinaka Obinna) - Full-Stack Developer specializing in Django, Next.js, and Flutter",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevObi - Full-Stack Developer | Django, Next.js & Flutter Expert",
    description: "Expert Full-Stack Developer in Nigeria. Building production-ready SaaS platforms with Django, Next.js, Flutter. Payment integrations, OAuth, AI-powered apps. Available for hire.",
    images: ["/mybrandimage.jpg"],
    creator: "@devobichinaka",
    site: "@devobichinaka",
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
    google: "rb7tKfqCWtnYDWA5OZFMFkYx3sCNVj4u7w7imvAcx1w",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced structured data for better SEO and AI Overview
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chinaka Obinna",
    "alternateName": ["DevObi", "DevObiChinaka"],
    "url": "https://devobichinaka.vercel.app",
    "image": "https://devobichinaka.vercel.app/mybrandimage.jpg",
    "sameAs": [
      "https://github.com/devobichinaka",
      "https://twitter.com/devobichinaka"
    ],
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "Django", "Python", "Next.js", "React", "Flutter", "TypeScript",
      "PostgreSQL", "Redis", "REST API", "Payment Integration",
      "OAuth", "SaaS Development", "Mobile App Development",
      "DevOps", "Docker", "Nginx", "Celery", "Machine Learning",
      "Facial Recognition", "Geofencing", "QR Code Systems"
    ],
    "knowsLanguage": ["English"],
    "nationality": "Nigerian",
    "description": "Expert Full-Stack Developer specializing in production-ready SaaS platforms, mobile applications with AI, and scalable backend systems. 2+ years experience building real-world applications with Django, Python, Next.js, and Flutter.",
    "email": "obinnachiderachinaka@gmail.com",
    "telephone": "+234-706-240-1459",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nigeria"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DevObi Portfolio",
    "alternateName": "Chinaka Obinna Portfolio",
    "url": "https://devobichinaka.vercel.app",
    "description": "Professional portfolio of DevObi (Chinaka Obinna), showcasing full-stack development projects, SaaS platforms, and mobile applications.",
    "author": {
      "@type": "Person",
      "name": "Chinaka Obinna"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://devobichinaka.vercel.app/#projects?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DevObi - Full-Stack Development Services",
    "image": "https://devobichinaka.vercel.app/og-image.png",
    "url": "https://devobichinaka.vercel.app",
    "telephone": "+234-706-240-1459",
    "email": "obinnachiderachinaka@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nigeria"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "Nigeria"
    },
    "priceRange": "$$",
    "description": "Professional full-stack development services specializing in SaaS platforms, mobile apps, payment integrations, and scalable backend systems.",
    "serviceType": [
      "Full-Stack Development",
      "SaaS Development",
      "Mobile App Development",
      "Backend Development",
      "API Development",
      "Payment Integration"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What technologies does DevObi specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DevObi specializes in full-stack development with Django, Python, Next.js, React, TypeScript, Flutter, PostgreSQL, Redis, and modern DevOps tools. Expert in building production-ready SaaS platforms with payment integrations (Paystack), OAuth authentication, and AI-powered features like facial recognition."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of projects has DevObi built?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DevObi has built production SaaS platforms like Oxiworld (learning platform with Paystack subscriptions), mobile apps with AI facial recognition (UniApp attendance system), corporate websites for oil & gas companies (Darew Ventures), and event ticketing systems with QR code generation. All projects are live and handling real users."
        }
      },
      {
        "@type": "Question",
        "name": "Is DevObi available for freelance work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, DevObi is available for freelance projects. You can reach out via email at obinnachiderachinaka@gmail.com, WhatsApp at +234 706 240 1459, or through GitHub at @devobichinaka. Response time is usually within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What is DevObi's experience level?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DevObi has 2+ years of professional experience building production-ready applications. Has delivered 10+ projects with 100% client satisfaction, including live SaaS platforms processing real payments, mobile apps with 1000+ users, and enterprise corporate websites."
        }
      },
      {
        "@type": "Question",
        "name": "Can DevObi integrate payment systems like Paystack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, DevObi is experienced in payment gateway integrations, particularly Paystack. Has implemented subscription billing, webhook handling, automated renewals, and multi-layer payment protection in production SaaS platforms like Oxiworld."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://devobichinaka.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://devobichinaka.vercel.app#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "item": "https://devobichinaka.vercel.app#projects"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Skills",
        "item": "https://devobichinaka.vercel.app#skills"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://devobichinaka.vercel.app#contact"
      }
    ]
  };

  // Combine all schemas
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      websiteSchema,
      professionalServiceSchema,
      faqSchema,
      breadcrumbSchema
    ]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
