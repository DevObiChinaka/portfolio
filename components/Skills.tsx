const groups: { name: string; note: string; items: string[] }[] = [
  { name: "backend", note: "Application logic & APIs", items: ["Python", "Django", "Django REST Framework", "C#", ".NET", "ASP.NET Core", "REST APIs"] },
  { name: "frontend", note: "Interfaces & web apps", items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { name: "data_integrations", note: "Persistence & external services", items: ["PostgreSQL", "Firebase", "OAuth", "Payment integrations", "Webhooks"] },
  { name: "delivery", note: "Development & deployment", items: ["Git", "GitHub", "Linux/VPS", "Nginx", "Docker", "Automated testing"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-kicker">03 / TOOLKIT</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Tools I work with<span className="acc">.</span></h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 mute sm:text-base">
        Technologies I have used across projects. My depth varies by area, and I am continuing to strengthen the fundamentals through study and hands-on work.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {groups.map((group, index) => (
          <div key={group.name} className="panel rounded-xl p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="mono text-sm alt">{group.name}</h3>
              <span className="mono text-xs mute">0{index + 1}</span>
            </div>
            <p className="mt-2 text-sm mute">{group.note}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md border px-2.5 py-1.5 text-sm" style={{ background: "var(--background)", borderColor: "var(--line)" }}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
