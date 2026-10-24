import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.filter((project) => project.caseStudy).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.caseStudy);
  if (!project) return { title: "Project not found | DevObi" };
  return {
    title: `${project.name} | DevObi`,
    description: project.description,
    openGraph: { title: `${project.name} | DevObi`, description: project.description }
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.caseStudy);
  if (!project?.caseStudy) notFound();
  const study = project.caseStudy;

  return (
    <main className="min-h-screen pt-14">
      <article className="site-shell">
        <header className="pb-10 pt-12 sm:pt-20">
          <Link href="/projects" className="mono link text-xs">← all projects</Link>
          <p className="section-kicker mt-8">{project.kind.toUpperCase()} / A LITTLE CONTEXT</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{project.name}<span className="acc">.</span></h1>
            <span className="mono rounded-full border px-3 py-1 text-xs mute" style={{ borderColor: "var(--line)" }}>{project.status}</span>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-8 sm:text-lg">{project.story}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 mute sm:text-base">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-3 mono text-sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link">source code ↗</a>
            {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="link">try the demo ↗</a>}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((item) => <span key={item} className="mono rounded border px-2 py-1 text-xs mute" style={{ borderColor: "var(--line)", background: "var(--panel)" }}>{item}</span>)}
          </div>
        </header>

        {project.shots && (
          <section className="border-t py-10" style={{ borderColor: "var(--line)" }}>
            <p className="section-kicker">A LOOK AT IT</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.shots.map((shot) => (
                <figure key={shot.src} className="min-w-0">
                  <div className="overflow-hidden rounded-lg border" style={{ borderColor: "var(--line)" }}>
                    <Image src={shot.src} alt={shot.alt} width={1200} height={800} className="h-auto w-full" sizes="(max-width: 640px) 100vw, 460px" />
                  </div>
                  <figcaption className="mono mt-2 text-xs mute">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section className="border-t py-10" style={{ borderColor: "var(--line)" }}>
          <p className="section-kicker">A BIT ABOUT THE PROJECT</p>
          <p className="mt-4 max-w-3xl text-base leading-8 sm:text-lg">{study.overview}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="panel rounded-xl p-5 sm:p-6">
              <p className="mono text-xs alt">WHAT I WANTED TO ADDRESS</p>
              <p className="mt-3 text-sm leading-7 mute">{study.problem}</p>
            </div>
            <div className="panel rounded-xl p-5 sm:p-6">
              <p className="mono text-xs alt">WHAT I WORKED ON</p>
              <ul className="mt-3 space-y-3">
                {study.approach.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 mute"><span className="acc">›</span><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t py-10" style={{ borderColor: "var(--line)" }}>
          <p className="section-kicker">A FEW CHOICES I MADE</p>
          <div className="mt-5 divide-y overflow-hidden rounded-xl border" style={{ borderColor: "var(--line)" }}>
            {study.decisions.map((decision, index) => (
              <div key={decision.title} className="grid gap-2 p-5 sm:grid-cols-[220px_1fr] sm:gap-6 sm:p-6" style={{ borderColor: "var(--line)", background: index % 2 === 0 ? "var(--panel)" : "transparent" }}>
                <h2 className="font-medium">{decision.title}</h2>
                <p className="text-sm leading-7 mute">{decision.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t py-10" style={{ borderColor: "var(--line)" }}>
          <p className="section-kicker">WHAT I LEARNED</p>
          <p className="mt-4 max-w-3xl text-base leading-8 mute">{study.reflection}</p>
        </section>

        <nav aria-label="Project navigation" className="flex flex-wrap items-center justify-between gap-4 border-t py-8" style={{ borderColor: "var(--line)" }}>
          <Link href="/projects" className="mono link text-sm">← all projects</Link>
          <Link href="/contact" className="mono link text-sm">get in touch ↗</Link>
        </nav>
      </article>
    </main>
  );
}
