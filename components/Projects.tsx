import Image from "next/image";

type Shot = { src: string; alt: string; caption: string };
type Project = {
  name: string; kind: string; description: string; focus: string;
  stack: string[]; github: string; live?: string; shots?: Shot[];
  status: string;
};

const projects: Project[] = [
  {
    name: "ScoreCode", kind: "Final-year project", status: "Desktop + web",
    description: "A programming examination and automated code-evaluation system with a Windows exam client, central API and web administration portal for exams, submissions and grading.",
    focus: "Explores controlled code execution, institution-aware access, exam workflows and optional human-supervised AI-assisted grading.",
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
    name: "Oxidane / Oxiworld", kind: "Learning platform", status: "Live preview",
    description: "A learning platform covering subscription access, account authentication, payment workflows and integration between a web frontend and backend services.",
    focus: "Application integration, subscription workflows and deployment concerns.",
    stack: ["Django", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Celery"],
    github: "https://github.com/DevObiChinaka/oxidane",
    live: "https://oxidane-two.vercel.app/",
    shots: [{ src: "/project-screenshots/oxiworld-homepage.jpg", alt: "Oxiworld Forex Academy homepage with market rates and trading resources", caption: "Homepage" }],
  },
  {
    name: "UniApp", kind: "Attendance management", status: "In development",
    description: "A university attendance system with separate frontend and backend parts, exploring QR attendance, location checks, admin workflows and facial-recognition integration.",
    focus: "Connecting components, verification, access control and student-data privacy.",
    stack: ["Django", "Python", "Flutter", "Dart", "PostgreSQL", "Firebase"],
    github: "https://github.com/DevObiChinaka/uniapp",
  },
  {
    name: "ADUN Dinner & Awards Night", kind: "Event ticketing", status: "Live",
    description: "A lightweight ticketing site for a university event, with ticket detail pages and QR-code verification.",
    focus: "A straightforward browser-based flow for presenting and checking tickets.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DevObiChinaka/dinner",
    live: "https://devobichinaka.github.io/dinner/",
    shots: [{ src: "/project-screenshots/adun-dinner-ticketing.jpg", alt: "ADUN Dinner Night ticket page with name and matric-number fields", caption: "Ticket generation" }],
  },
  {
    name: "Darew Ventures", kind: "Corporate website", status: "Live preview",
    description: "A responsive company website presenting a business's services and information.",
    focus: "Structuring information clearly for a business audience.",
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
        A selection of projects at different stages. Each one has taught me something about how features, data, users and infrastructure fit together.
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
            <p className="mt-3 text-sm leading-6 mute">{p.focus}</p>

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
