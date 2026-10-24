import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects | DevObi",
  description: "Software projects, product experiments and practical tools by DevObi."
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-14">
      <div className="site-shell">
        <header className="pb-8 pt-14 sm:pt-20">
          <p className="mono text-xs mute"><span className="acc">~/portfolio</span> $ ls projects/</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">Work and experiments<span className="acc">.</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-8 mute sm:text-lg">A broader look at what I have built, what is still in progress, and what each project taught me. Start with the short summary, then follow the source, live preview or project notes if you want more.</p>
        </header>
        <Projects />
        <footer className="border-t py-8 mono text-xs mute" style={{ borderColor: "var(--line)" }}>© {new Date().getFullYear()} Chinaka Obinna / DevObi</footer>
      </div>
    </main>
  );
}
