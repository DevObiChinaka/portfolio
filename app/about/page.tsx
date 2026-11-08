import type { Metadata } from "next";
import About from "@/components/About";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "About | Chinaka Obinna (DevObi)",
  description: "About Chinaka Obinna (DevObi), a Software Engineering graduate from Nigeria interested in software systems, application development, architecture and human–AI collaboration."
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-14">
      <div className="site-shell">
        <header className="pb-8 pt-14 sm:pt-20">
          <p className="mono text-xs mute"><span className="acc">~/portfolio</span> $ cat about.md</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">A little context<span className="acc">.</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-8 mute sm:text-lg">My background, the questions I keep coming back to, and the tools I have been learning through project work.</p>
        </header>
        <About />
        <Skills />
        <footer className="border-t py-8 mono text-xs mute" style={{ borderColor: "var(--line)" }}>© {new Date().getFullYear()} Chinaka Obinna / DevObi</footer>
      </div>
    </main>
  );
}
