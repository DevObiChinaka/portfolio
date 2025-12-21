"use client";

import { Github, Mail, Code2, Database, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 sm:pt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Brand Image */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <Image
                src="/mybrandimage.jpg"
                alt="DevObi"
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">Available for Projects</span>
        </div>

        {/* Main Heading with Gradient */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-6 px-2">
          <span className="text-gray-900 dark:text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
            DevObi
          </span>
        </h1>

        {/* Tagline with Icon */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-6 px-4">
          <Code2 className="w-5 h-5 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
          <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 text-center leading-snug">
            Building Production-Ready & Scalable Systems
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-2 sm:mb-4 font-medium px-4">
          Full-Stack Developer <span className="text-blue-600 dark:text-blue-400">|</span> Backend Specialist
        </p>

        {/* Description with Tech Stack */}
        <p className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Building production-ready SaaS platforms and mobile solutions with{' '}
          <span className="font-semibold text-blue-600 dark:text-blue-400 hover:underline decoration-2 decoration-blue-600/50 transition-all">Django</span>,{' '}
          <span className="font-semibold text-purple-600 dark:text-purple-400 hover:underline decoration-2 decoration-purple-600/50 transition-all">Next.js</span>, and{' '}
          <span className="font-semibold text-cyan-600 dark:text-cyan-400 hover:underline decoration-2 decoration-cyan-600/50 transition-all">Flutter</span>.
          <br className="hidden sm:block" />
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 mb-6 sm:mb-12 px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">2+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">10+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">100%</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
          <a
            href="#contact"
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              Hire Me
            </span>
          </a>
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:scale-105 transform duration-300"
          >
            View My Work
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 sm:gap-6 justify-center mb-16 sm:mb-20">
          <a
            href="https://github.com/devobichinaka"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 transform duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="mailto:obinnachiderachinaka@gmail.com"
            className="group p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 transform duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
          </a>
          <a
            href="#skills"
            className="group p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 transform duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="Skills"
          >
            <Database className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
