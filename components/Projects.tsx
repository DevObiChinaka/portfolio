import Image from "next/image";
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
    description: "A computer-based programming examination and automated code-evaluation system. It brings together a Windows examination client, a central API, and a web administration portal for exam management, code submissions, and grading.",
    contribution: "Designed and developed as an undergraduate final-year project. The system explores controlled local code execution, institution-aware administration, exam workflows, and optional human-supervised AI-assisted grading.",
    stack: [".NET 10", "C#", "WPF", "ASP.NET Core", "Blazor Server", "EF Core", "PostgreSQL"],
    github: "https://github.com/DevObiChinaka/ScoreCode",
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

const scoreCodeScreenshots = [
  { title: "Student dashboard", src: "/scorecode/student-dashboard.jpg", alt: "ScoreCode student dashboard screenshot" },
  { title: "Lecturer dashboard", src: "/scorecode/lecturer-dashboard.jpg", alt: "ScoreCode lecturer dashboard screenshot" },
  { title: "Institution administrator", src: "/scorecode/institution-admin-dashboard.jpg", alt: "ScoreCode institution administrator dashboard screenshot" },
  { title: "Platform administrator", src: "/scorecode/platform-admin-dashboard.jpg", alt: "ScoreCode platform administrator dashboard screenshot" }
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

              {(project.title === "Oxidane / Oxiworld" || project.title === "ADUN Dinner & Awards Night") && (
                <div className="mt-7 border-t border-gray-200 dark:border-gray-800 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Project preview</h4>
                  <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    <Image
                      src={project.title === "Oxidane / Oxiworld" ? "/project-screenshots/oxiworld-homepage.jpg" : "/project-screenshots/adun-dinner-ticketing.jpg"}
                      alt={project.title === "Oxidane / Oxiworld" ? "Oxiworld Forex Academy homepage showing market rates and trading resources" : "ADUN Dinner Night ticket-generation page with name and matric-number fields"}
                      width={1700}
                      height={900}
                      className="h-auto w-full object-contain"
                      sizes="(max-width: 1024px) 100vw, 520px"
                    />
                    <p className="px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-300">
                      {project.title === "Oxidane / Oxiworld" ? "Live homepage preview" : "Ticket-generation interface preview"}
                    </p>
                  </div>
                </div>
              )}

              {project.title === "ScoreCode" && (
                <div className="mt-7 border-t border-gray-200 dark:border-gray-800 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">A look inside ScoreCode</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    The application has separate views for students, lecturers, institution administrators, and platform administrators.
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {scoreCodeScreenshots.map((screenshot) => (
                      <figure key={screenshot.src} className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={1200}
                          height={800}
                          className="h-auto w-full object-contain"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
                        />
                        <figcaption className="px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-300">{screenshot.title}</figcaption>
                      </figure>
                    ))}
                  </div>
                  <a href="https://github.com/DevObiChinaka/ScoreCode" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                    Explore ScoreCode on GitHub <ArrowUpRight size={15} />
                  </a>
                </div>
              )}
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