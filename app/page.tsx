import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="site-shell">
        <Hero />
        <Projects featuredOnly />
        <section className="section pb-16">
          <div className="panel rounded-xl p-6 sm:p-8">
            <p className="section-kicker">NEXT / ABOUT</p>
            <div className="mt-3 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Interested in how the pieces fit together?</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 mute">Read more about my approach to engineering, the systems I am interested in, and how I work with AI-assisted tools.</p>
              </div>
              <a href="/about" className="mono shrink-0 rounded-md border px-4 py-2.5 text-sm" style={{ borderColor: "var(--line)", background: "var(--background)" }}>A little about me ↗</a>
            </div>
          </div>
          <footer className="mt-10 border-t pt-6" style={{ borderColor: "var(--line)" }}>
            <div className="flex flex-col gap-2 mono text-xs mute sm:flex-row sm:items-center sm:justify-between">
              <span>© {new Date().getFullYear()} Chinaka Obinna / DevObi</span>
              <span>Built around problems, not buzzwords.</span>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
