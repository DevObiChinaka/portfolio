const focus = [
  ["systems", "I like understanding how the parts of an application connect, from the user facing side to the API and the data behind it."],
  ["figuring things out", "A lot of my learning happens while building. I read documentation, test ideas, inspect code and keep working until I understand what is going on."],
  ["working with AI", "I use AI tools as part of my workflow, but I still need to understand what the code does and whether it works. That balance is something I keep thinking about."],
  ["people and software", "I'm interested in the gap between how software is designed and how people actually use it, especially in education and everyday work."]
];

export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-kicker">A LITTLE CONTEXT</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">How I got here<span className="acc">.</span></h2>
      <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 sm:text-base">
        <p>I studied Software Engineering, but the projects I've worked on have probably taught me just as much as the lectures. I tend to learn by trying to make something work, finding the parts I don't understand, and researching until I can move forward.</p>
        <p>I enjoy more than just getting a screen to look right. I want to know what happens behind it, where the data goes, what can go wrong, and how the pieces fit together. I don't know everything yet, and I'm fine with that. There is always another part of the stack to understand.</p>
        <p>I also use AI tools when I build. They can help me move faster, but they don't remove the need to inspect, test and understand the result. I'm curious about how that changes the way people learn software and how developers work.</p>
      </div>
      <div className="mt-8 overflow-hidden rounded-xl border" style={{ borderColor: "var(--line)" }}>
        {focus.map(([key, value], index) => (
          <div key={key} className="grid gap-2 p-4 sm:grid-cols-[220px_1fr] sm:gap-6 sm:p-5" style={{ background: index % 2 === 0 ? "var(--panel)" : "transparent", borderBottom: index < focus.length - 1 ? "1px solid var(--line)" : undefined }}>
            <h3 className="mono text-xs alt sm:text-sm">{key}</h3><p className="text-sm leading-6 mute">{value}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-3xl border-l-2 pl-4 text-sm leading-7 mute sm:text-base" style={{ borderColor: "var(--accent)" }}>Outside project work, student leadership gave me experience coordinating people and getting things moving when different people have different priorities. That part of university shaped me too.</p>
    </section>
  );
}
