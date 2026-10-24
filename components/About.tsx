const focus = [
  ["backend_systems", "Application logic, APIs, data flows and integrations that support useful products."],
  ["engineering_decisions", "Requirements, system boundaries, trade-offs and maintainability: how the parts work together."],
  ["reliability", "Making software easier to test, secure, observe and reason about."],
  ["human_ai_collaboration", "How AI-assisted tools affect programming practice, code understanding and engineering judgement."],
];

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-kicker">04 / A LITTLE CONTEXT</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">How I approach engineering<span className="acc">.</span></h2>
      <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 sm:text-base">
        <p>
          Engineering starts with understanding the problem. My Software Engineering background and project work keep pulling me toward the parts of development that connect requirements, logic, data and people.
        </p>
        <p>
          I use AI-assisted tools in my workflow, but I treat generated code as something to read, test and understand, not something to accept blindly. That has made me curious about how developers learn and demonstrate competence as these tools become more common.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border" style={{ borderColor: "var(--line)" }}>
        {focus.map(([key, value], index) => (
          <div key={key} className="grid gap-2 p-4 sm:grid-cols-[220px_1fr] sm:gap-6 sm:p-5" style={{ background: index % 2 === 0 ? "var(--panel)" : "transparent", borderBottom: index < focus.length - 1 ? "1px solid var(--line)" : undefined }}>
            <h3 className="mono text-xs alt sm:text-sm">{key}</h3>
            <p className="text-sm leading-6 mute">{value}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-3xl border-l-2 pl-4 text-sm leading-7 mute sm:text-base" style={{ borderColor: "var(--accent)" }}>
        Outside the code, student leadership taught me to coordinate people, communicate across groups and take responsibility for shared work. It keeps me interested in software that works for the people who rely on it.
      </p>
    </section>
  );
}
