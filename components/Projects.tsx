import Image from "next/image";

type Shot = { src: string; alt: string; caption: string };
type Project = {
  name: string; kind: string; description: string; story: string;
  stack: string[]; github: string; live?: string; shots?: Shot[];
  status: string;
};

const projects: Project[] = [
  {
    name: "ScoreCode", kind: "Final-year project", status: "Desktop + web",
    description: "A programming examination and automated code-evaluation system with a Windows exam client, central API and web administration portal for exams, submissions and grading.",
    story: "This started with something that bothered me about coding exams in Nigerian universities: students could be tested on remembering syntax and writing code on paper, instead of actually writing and running a program. I wanted to build something closer to how programming works in practice. It began as a single-institution system, then I reworked the architecture around multi-tenancy so other institutions could use it too. I want to keep developing it towards something universities can realistically adopt nationwide.",
    stack: [".NET", "C#", "WPF", "ASP.NET Core", "Blazor Server", "PostgreSQL"],
    github: "https://github.com/DevObiChinaka/ScoreCode",
    shots: [
      { src: "/scorecode/student-dashboard.jpg", alt: "ScoreCode student dashboard", caption: "Student dashboard" },
      { src: "/scorecode/lecturer-dashboard.jpg", alt: "ScoreCode lecturer dashboard", caption: "Lecturer dashboard" },
      { src: "/scorecode/institution-admin-dashboard.jpg", alt: "ScoreCode institution administrator dashboard", caption: "Institution administration" },
      { src: "/scorecode/platform-admin-dashboard.jpg", alt: "ScoreCode platform administrator dashboard", caption: "Platform administration" },
    ],
  },
  {
    name: "Oxiworld Forex Academy", kind: "Product collaboration", status: "Live preview",
    description: "A web platform for a forex academy, bringing the idea into a working online experience.",
    story: "Someone reached out to me with the idea, and we talked through what they wanted to build. I helped sharpen the concept, think through how it could work as a product, and bring it to life. It was a good reminder that building software is not just about implementing a spec — sometimes the first step is helping shape the idea itself.",
    stack: ["Django", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Celery"],
    github: "https://github.com/DevObiChinaka/oxidane",
    live: "https://oxidane-two.vercel.app/",
    shots: [{ src: "/project-screenshots/oxiworld-homepage.jpg", alt: "Oxiworld Forex Academy homepage with market rates and trading resources", caption: "Homepage" }],
  },
  {
    name: "UniApp", kind: "Mobile app · Early project", status: "In development",
    description: "A university attendance app concept exploring QR attendance, location checks, admin workflows and identity verification.",
    story: "This was one of my first mobile app projects. A friend needed something along these lines for their project work, and that gave me the motivation to take it on and learn by building. I'm still working through how the different parts fit together, which is part of why the project has been useful to me.",
    stack: ["Django", "Python", "Flutter", "Dart", "PostgreSQL", "Firebase"],
    github: "https://github.com/DevObiChinaka/uniapp",
  },
  {
    name: "ADUN Dinner & Awards Night", kind: "Event ticketing", status: "Live",
    description: "A QR-based ticketing system built for a school-wide dinner event with custom ticket details.",
    story: "My school was organising a dinner for the whole university, and entry was ticket-based with a few custom requirements. Time was tight, so I built a QR ticket system to help manage the event — from payment handling to ticket verification and checking who was authorised to enter. It was a practical fix for a real event, delivered when it was needed.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DevObiChinaka/dinner",
    live: "https://devobichinaka.github.io/dinner/",
    shots: [{ src: "/project-screenshots/adun-dinner-ticketing.jpg", alt: "ADUN Dinner Night ticket page with name and matric-number fields", caption: "Ticket generation" }],
  },
  {
    name: "Darew Ventures", kind: "Corporate website", status: "Live preview",
    description: "A company website designed to present the business and its services clearly.",
    story: "A more straightforward web project: organise the information, give the business a clear online presence, and make the site easy to navigate across screen sizes.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/DevObiChinaka/darew",
    live: "https://darew.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-kicker">02 / SELECTED WORK</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Projects<span className="acc">.</span></h2>
        </div>
        <a className="mono link text-sm" href="https://github.com/DevObiChinaka" target="_blank" rel="noopener noreferrer">all repositories ↗</a>
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-7 mute sm:text-base">
        Some started with a problem I wanted to fix. Others started with a conversation, a deadline, or a chance to learn something new. Here's a little context behind each one.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((p, index) => (
          <article key={p.name} className="panel flex min-w-0 flex-col rounded-xl p-5 sm:p-6" style={{ background: "var(--panel)" }}>
            <div className="flex items-start justify-between gap-3">
              <span className="mono text-xs alt">0{index + 1} / {p.kind}</span>
              <span className="mono rounded-full border px-2 py-1 text-[10px] mute" style={{ borderColor: "var(--line)" }}>{p.status}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">{p.name}</h3>
            <p className="mt-3 text-sm leading-7">{p.description}</p>
            <div className="mt-4 rounded-lg border p-4" style={{ borderColor: "var(--line)", background: "var(--background)" }}>
              <p className="mono text-[10px] uppercase tracking-wider alt">A little context</p>
              <p className="mt-2 text-sm leading-7 mute">{p.story}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="mono rounded border px-2 py-1 text-[10px] sm:text-xs" style={{ background: "var(--background)", borderColor: "var(--line)", color: "var(--muted)" }}>{s}</span>
              ))}
            </div>

            {p.shots && (
              <details className="mt-5">
                <summary className="mono cursor-pointer text-xs alt">View screenshots ({p.shots.length})</summary>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {p.shots.map((s) => (
                    <figure key={s.src} className="min-w-0">
                      <Image src={s.src} alt={s.alt} width={1200} height={800} className="h-auto w-full rounded-md border" style={{ borderColor: "var(--line)" }} sizes="(max-width: 640px) 100vw, 360px" />
                      <figcaption className="mono mt-1 text-[10px] mute">{s.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </details>
            )}

            <div className="mono mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-6 text-sm">
              <a className="link" href={p.github} target="_blank" rel="noopener noreferrer">source ↗</a>
              {p.live && <a className="link" href={p.live} target="_blank" rel="noopener noreferrer">live preview ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
