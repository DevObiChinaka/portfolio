const groups = [
  {
    title: "Backend & application logic",
    description: "Technologies used to build server-side workflows and connect application components.",
    items: ["Python", "Django", "Django REST Framework", "C#", ".NET", "ASP.NET Core", "REST APIs"]
  },
  {
    title: "Web development",
    description: "Tools used across responsive interfaces and full-stack applications.",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Data & integrations",
    description: "Working with application data and third-party services.",
    items: ["PostgreSQL", "Firebase", "OAuth", "Payment API integration", "Webhooks"]
  },
  {
    title: "Development & delivery",
    description: "Tools and practices used to version, test, deploy, and maintain projects.",
    items: ["Git", "GitHub", "Linux/VPS deployment", "Nginx", "Docker", "Automated testing"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">Tools & practice</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white">A practical, evolving toolkit.</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            These are technologies and practices I've used across projects. My experience is not equally deep in every area;
            I'm strengthening fundamentals through continued study and hands-on implementation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {groups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-sm text-gray-700 dark:text-gray-200">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
