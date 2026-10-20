import { Blocks, GitBranch, ShieldCheck, BrainCircuit } from "lucide-react";

const focusAreas = [
  {
    icon: Blocks,
    title: "Backend systems",
    description: "Building application logic, APIs, data flows, and integrations that support useful product experiences."
  },
  {
    icon: GitBranch,
    title: "Engineering decisions",
    description: "Thinking through requirements, system boundaries, trade-offs, maintainability, and how components work together."
  },
  {
    icon: ShieldCheck,
    title: "Reliability and trust",
    description: "Learning to make software more testable, secure, observable, and easier to reason about."
  },
  {
    icon: BrainCircuit,
    title: "Human–AI collaboration",
    description: "Exploring how AI-assisted tools affect programming practice, code understanding, learning, and engineering judgement."
  }
];

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white">Engineering starts with understanding the problem.</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            My Software Engineering background and project work have drawn me toward the parts of development
            that connect requirements, application logic, data, and people. I like researching a problem,
            mapping out how a solution should work, and then building and refining the system.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            I use AI assisted development tools as part of my workflow, but I see generated code as something to inspect,
            test, and understand—not something to accept blindly. That has also sparked a broader interest in how developers
            learn, collaborate, and demonstrate competence as these tools become more common.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {focusAreas.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/70 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-blue-600/10 p-3 text-blue-600 dark:text-blue-400">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-300">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 border-l-4 border-blue-600 pl-5 py-1">
          <p className="font-semibold text-gray-900 dark:text-white">Outside the code</p>
          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            Student leadership has given me experience coordinating people, communicating across groups, and taking responsibility for shared work.
            It reinforces my interest in software that works well for the people who depend on it.
          </p>
        </div>
      </div>
    </section>
  );
}
