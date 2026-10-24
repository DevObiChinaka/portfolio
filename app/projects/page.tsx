import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects | DevObi",
  description: "A few things I've worked on, some finished and some still in progress."
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-14">
      <div className="site-shell">
        <header className="pb-8 pt-14 sm:pt-20">
          <p className="mono text-xs mute"><span className="acc">~/portfolio</span> $ ls projects/</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">Projects<span className="acc">.</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-8 mute sm:text-lg">A few things I've worked on, some finished, some still in progress. Each one started a little differently.</p>
        </header>
        <Projects />
        <footer className="border-t py-8 mono text-xs mute" style={{ borderColor: "var(--line)" }}>© {new Date().getFullYear()} Chinaka Obinna / DevObi</footer>
      </div>
    </main>
  );
}
