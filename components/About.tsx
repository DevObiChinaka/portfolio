const focus = [
  ["backend_systems", "Application logic, APIs, data flows and integrations that support useful products."],
  ["engineering_decisions", "Requirements, system boundaries, trade-offs and maintainability: how the parts work together."],
  ["reliability", "Making software easier to test, secure, observe and reason about."],
  ["human_ai_collaboration", "How AI-assisted tools affect programming practice, code understanding and engineering judgement."],
];

export default function About() {
  return (
    <section id="about" className="py-16 border-t rule">
      <h2 className="text-2xl font-semibold"># About</h2>
      <div className="mt-6 max-w-2xl space-y-4">
        <p>
          Engineering starts with understanding the problem. My Software Engineering background and project work
          keep pulling me toward the parts of development that connect requirements, logic, data and people.
        </p>
        <p>
          I use AI-assisted tools in my workflow, but I treat generated code as something to read, test and
          understand, not something to accept blindly. That has made me curious about how developers learn and
          show competence as these tools become normal.
        </p>
      </div>

      <dl className="mt-10 space-y-5">
        {focus.map(([k, v]) => (
          <div key={k} className="grid gap-1 sm:grid-cols-[15rem_1fr] sm:gap-6">
            <dt className="mono text-sm alt">{k}</dt>
            <dd className="mute">{v}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 max-w-2xl border-l-2 pl-4 mute" style={{ borderColor: "var(--acc)" }}>
        Outside the code, student leadership taught me to coordinate people, communicate across groups and take
        responsibility for shared work. It keeps me interested in software that works for the people who rely on it.
      </p>
    </section>
  );
}