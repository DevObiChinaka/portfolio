import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

type ProjectsProps = { featuredOnly?: boolean };

export default function Projects({ featuredOnly = false }: ProjectsProps) {
  const visibleProjects = featuredOnly ? projects.filter((project) => project.featured).slice(0, 3) : projects;
  return (
    <section className="section" id="projects">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-kicker">{featuredOnly ? "A FEW RECENT FAVOURITES" : "THINGS I'VE WORKED ON"}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{featuredOnly ? "A few things I've built" : "Projects"}<span className="acc">.</span></h2>
        </div>
        {featuredOnly ? <Link className="mono link text-sm" href="/projects">See all projects ↗</Link> : <a className="mono link text-sm" href="https://github.com/DevObiChinaka" target="_blank" rel="noopener noreferrer">more on GitHub ↗</a>}
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-7 mute sm:text-base">
        {featuredOnly
          ? "Some things I built for school, some for other people, and some because I wanted to see if I could make them work."
          : "Not everything here is a finished product. This is a mix of school work, things built for real needs, experiments, and projects I used to learn something new."}
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <article key={project.slug} className="panel flex min-w-0 flex-col rounded-xl p-5 sm:p-6" style={{ background: "var(--panel)" }}>
            <div className="flex items-start justify-between gap-3">
              <span className="mono text-xs alt">0{index + 1} / {project.kind}</span>
              <span className="mono rounded-full border px-2 py-1 text-[10px] mute" style={{ borderColor: "var(--line)" }}>{project.status}</span>
            </div>
            {project.shots?.[0] && <div className="mt-5 overflow-hidden rounded-lg border" style={{ borderColor: "var(--line)", background: "var(--background)" }}><Image src={project.shots[0].src} alt={project.shots[0].alt} width={1200} height={800} className="aspect-[16/9] w-full object-cover object-top" sizes="(max-width: 768px) 100vw, 460px" /></div>}
            <h3 className="mt-5 text-xl font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-3 text-sm leading-7">{project.story}</p>
            <p className="mt-3 text-xs leading-6 mute">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 5).map((item) => <span key={item} className="mono rounded border px-2 py-1 text-[10px] sm:text-xs" style={{ background: "var(--background)", borderColor: "var(--line)", color: "var(--muted)" }}>{item}</span>)}
              {project.stack.length > 5 && <span className="mono px-1 py-1 text-[10px] mute">+{project.stack.length - 5}</span>}
            </div>
            <div className="mono mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-6 text-sm">
              {project.caseStudy && <Link className="link" href={`/projects/${project.slug}`}>a little more about it ↗</Link>}
              <a className="link" href={project.github} target="_blank" rel="noopener noreferrer">source ↗</a>
              {project.live && <a className="link" href={project.live} target="_blank" rel="noopener noreferrer">try the demo ↗</a>}
            </div>
          </article>
        ))}
      </div>
      {!featuredOnly && <p className="mt-6 text-xs leading-6 mute">Some projects have more to say than fits here. I've added a little more context to a few of them, and you can always check out the code or demo.</p>}
    </section>
  );
}
