import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Oxidane / Oxiworld",
    type: "SaaS learning platform",
    description: "A learning-platform project exploring subscription access, account authentication, payment workflows, and connections between a web frontend and backend services.",
    contribution: "Focus: application integration, subscription workflows, and deployment concerns.",
    stack: ["Django", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Celery"],
    github: "https://github.com/DevObiChinaka/oxidane",
    live: "https://oxidane-two.vercel.app/"
  },
  {
    title: "UniApp",
    type: "Attendance management",
    description: "A university attendance-management project with separate backend and frontend components. The concept explores QR attendance, location checks, administrative workflows, and facial-recognition integration.",
    contribution: "Focus: connecting application components and considering verification, access control, and student-data privacy.",
    stack: ["Django", "Python", "Flutter", "Dart", "PostgreSQL", "Firebase"],
    github: "https://github.com/DevObiChinaka/uniapp",
    live: ""
  },
  {
    title: "ScoreCode",
    type: "Final-year project",
    description: "A computer-based programming examination and automated code-evaluation system designed around candidate management, exam controls, code submission, and automated evaluation.",
    contribution: "The final-year project involved system design and development, with scripted end-to-end tests using synthetic accounts and submissions.",
    stack: ["C#", ".NET", "WPF", "ASP.NET Core", "Blazor", "PostgreSQL"],
    github: "",
    live: ""
  },
  {
    title: "ADUN Dinner & Awards Night",
    type: "Event ticketing",
    description: "A lightweight ticketing website created for a university event, with ticket detail pages and QR-code-based verification.",
    contribution: "Focus: a straightforward browser-based flow for presenting and checking event tickets.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DevObiChinaka/dinner",
    live: "https://devobichinaka.github.io/dinner/"
  },
  {
    title: "Darew Ventures",
    type: "Corporate website",
    description: "A company website project presenting business services and company information in a responsive web interface.",
    contribution: "Focus: structuring and presenting information clearly for a business audience.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/DevObiChinaka/darew",
    live: "https://darew.netlify.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">Selected work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white">Projects that show how I approach problems.</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A small selection of projects across backend workflows, application integration, and web development.
            Each project is at a different stage; the descriptions focus on its purpose and the engineering questions it raises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <article key={project.title} className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 sm:p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">{project.type}</span>
                <span className="text-sm text-gray-400">0{index + 1}</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{project.contribution}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">{item}</span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"><Github size={16} /> Source code <ArrowUpRight size={15} /></a>}
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">Live project <ArrowUpRight size={15} /></a>}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 p-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">Want to explore more implementation details?</p>
          <a href="https://github.com/DevObiChinaka" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400 hover:underline">Browse my GitHub <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}
