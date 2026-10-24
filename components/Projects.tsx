import Image from "next/image";

type Shot = { src: string; alt: string; caption: string };
type Project = {
  name: string; kind: string; description: string; focus: string;
  stack: string[]; github: string; live?: string; shots?: Shot[];
};

const projects: Project[] = [
  {
    name: "ScoreCode", kind: "Final-year project",
    description: "A computer-based programming exam and automated code-evaluation system: a Windows exam client, a central API and a web admin portal for exams, submissions and grading.",
    focus: "Explores controlled local code execution, institution-aware administration, exam workflows and optional human-supervised AI-assisted grading.",
    stack: [".NET 10", "C#", "WPF", "ASP.NET Core", "Blazor Server", "EF Core", "PostgreSQL"],
    github: "https://github.com/DevObiChinaka/ScoreCode",
    shots: [
      { src: "/scorecode/student-dashboard.jpg", alt: "ScoreCode student dashboard", caption: "Student dashboard" },
      { src: "/scorecode/lecturer-dashboard.jpg", alt: "ScoreCode lecturer dashboard", caption: "Lecturer dashboard" },
      { src: "/scorecode/institution-admin-dashboard.jpg", alt: "ScoreCode institution administrator dashboard", caption: "Institution administrator" },
      { src: "/scorecode/platform-admin-dashboard.jpg", alt: "ScoreCode platform administrator dashboard", caption: "Platform administrator" },
    ],
  },
  {
    name: "Oxidane / Oxiworld", kind: "SaaS learning platform",
    description: "A learning platform covering subscription access, account authentication, payment workflows and the connection between a web frontend and backend services.",
    focus: "Application integration, subscription workflows and deployment concerns.",
    stack: ["Django", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Celery"],
    github: "https://github.com/DevObiChinaka/oxidane", live: "https://oxidane-two.vercel.app/",
    shots: [{ src: "/project-screenshots/oxiworld-homepage.jpg", alt: "Oxiworld Forex Academy homepage with market rates and trading resources", caption: "Homepage" }],
  },
  {
    name: "UniApp", kind: "Attendance management",
    description: "A university attendance system with separate backend and frontend parts. It explores QR attendance, location checks, admin workflows and facial-recognition integration.",
    focus: "Connecting components, verification, access control and student-data privacy.",
    stack: ["Django", "Python", "Flutter", "Dart", "PostgreSQL", "Firebase"],
    github: "https://github.com/DevObiChinaka/uniapp",
  },
  {
    name: "ADUN Dinner & Awards Night", kind: "Event ticketing",
    description: "A lightweight ticketing site for a university event, with ticket detail pages and QR-code verification.",
    focus: "A simple browser-based flow for presenting and checking tickets.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DevObiChinaka/dinner", live: "https://devobichinaka.github.io/dinner/",
    shots: [{ src: "/project-screenshots/adun-dinner-ticketing.jpg", alt: "ADUN Dinner Night ticket page with name and matric-number fields", caption: "Ticket generation" }],
  },
  {
    name: "Darew Ventures", kind: "Corporate website",
    description: "A responsive company website presenting a business's services and information.",
    focus: "Structuring information clearly for a business audience.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/DevObiChinaka/darew", live: "https://darew.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t rule">
      <h2 className="text-2xl font-semibold"># Projects</h2>
      <p className="mt-4 max-w-2xl mute">
        Each project is at a different stage. The notes cover what it is for and the engineering questions it raised.
      </p>

      <div className="mt-10 space-y-12">
        {projects.map((p) => (
          <article key={p.name}>
            <header className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <span className="mono text-xs mute">{p.kind}</span>
            </header>
            <p className="mt-3 max-w-2xl">{p.description}</p>
            <p className="mt-2 max-w-2xl text-sm mute">{p.focus}</p>
            <p className="mono mt-4 text-xs leading-relaxed">
              <span className="alt">stack</span> = [
              {p.stack.map((s, i) => (
                <span key={s} className="acc"> "{s}"{i < p.stack.length - 1 ? "," : ""}</span>
              ))}{" "}
              ]
            </p>
            <p className="mono mt-4 text-sm">
              <a className="link" href={p.github} target="_blank" rel="noopener noreferrer">source</a>
              {p.live && (
                <>
                  <span className="mute">  /  </span>
                  <a className="link" href={p.live} target="_blank" rel="noopener noreferrer">live</a>
                </>
              )}
            </p>
            {p.shots && (
              <details className="mt-5 border rule">
                <summary className="mono cursor-pointer px-3 py-2 text-xs mute" style={{ background: "var(--panel)" }}>
                  screenshots ({p.shots.length})
                </summary>
                <div className="grid gap-3 p-3 sm:grid-cols-2">
                  {p.shots.map((s) => (
                    <figure key={s.src}>
                      <Image src={s.src} alt={s.alt} width={1200} height={800} className="h-auto w-full border rule" sizes="(max-width: 640px) 100vw, 360px" />
                      <figcaption className="mono mt-1 text-xs mute">{s.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </details>
            )}
          </article>
        ))}
      </div>

      <p className="mt-12 mono text-sm mute">
        More on{" "}
        <a className="link" href="https://github.com/DevObiChinaka" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </section>
  );
}