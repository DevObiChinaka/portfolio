"use client";

import { Github, Mail, ArrowDownRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-5">
            Software Engineering · Backend Systems
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-950 dark:text-white leading-[1.05]">
            I build software systems that solve <span className="text-blue-600 dark:text-blue-400">real problems.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            I'm Chinaka Obinna, a Software Engineering graduate interested in backend development,
            application architecture, and the decisions that make software useful, dependable, and maintainable.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            I enjoy breaking down requirements, connecting services, and understanding how the pieces of an application work together.
            I'm also exploring how AI is changing the way people learn and practise software engineering.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Explore selected work <ArrowDownRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 px-6 py-3 font-semibold text-gray-800 dark:text-gray-100 transition hover:bg-gray-100 dark:hover:bg-gray-800">
              Get in touch
            </a>
          </div>
          <div className="mt-7 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <a href="https://github.com/DevObiChinaka" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400">
              <Github size={18} /> GitHub
            </a>
            <a href="mailto:obinnachiderachinaka@gmail.com" className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400">
              <Mail size={18} /> Email
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72">
            <div className="absolute inset-0 rounded-3xl rotate-6 bg-blue-600/10 border border-blue-500/20" />
            <div className="relative w-full h-full overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl">
              <Image src="/mybrandimage.jpg" alt="DevObi" width={512} height={512} priority className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 shadow-lg">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Current focus</p>
              <p className="font-semibold text-gray-900 dark:text-white">Backend & system design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
