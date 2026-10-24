const groups: Record<string, string[]> = {
  backend: ["Python", "Django", "Django REST Framework", "C#", ".NET", "ASP.NET Core", "REST APIs"],
  web: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  data_and_integrations: ["PostgreSQL", "Firebase", "OAuth", "Payment API integration", "Webhooks"],
  delivery: ["Git", "GitHub", "Linux/VPS deployment", "Nginx", "Docker", "Automated testing"],
};

export default function Skills() {
  const keys = Object.keys(groups);
  return (
    <section id="skills" className="py-16 border-t rule">
      <h2 className="text-2xl font-semibold"># Skills</h2>
      <p className="mt-4 max-w-2xl mute">
        Tools I've used across projects. My depth varies by area, and I'm strengthening fundamentals through
        study and hands-on work.
      </p>
      <pre className="mono mt-8 overflow-x-auto border rule p-4 text-sm leading-7 whitespace-pre-wrap" style={{ background: "var(--panel)" }}>
        {"{\n"}
        {keys.map((k, ki) => (
          <span key={k}>
            {"  "}<span className="alt">"{k}"</span>: [
            {groups[k].map((s, i) => (
              <span key={s}><span className="acc">"{s}"</span>{i < groups[k].length - 1 ? ", " : ""}</span>
            ))}
            ]{ki < keys.length - 1 ? "," : ""}
            {"\n"}
          </span>
        ))}
        {"}"}
      </pre>
    </section>
  );
}