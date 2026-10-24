export type Project = {
  slug: string;
  name: string;
  kind: string;
  status: string;
  description: string;
  story: string;
  stack: string[];
  github: string;
  live?: string;
  shots?: { src: string; alt: string; caption: string }[];
  featured: boolean;
  caseStudy?: {
    overview: string;
    problem: string;
    approach: string[];
    decisions: { title: string; detail: string }[];
    reflection: string;
  };
};

export const projects: Project[] = [
  {
    slug: "scorecode",
    name: "ScoreCode",
    kind: "Final-year project",
    status: "Desktop + web",
    description: "A programming examination and automated code-evaluation system with a Windows exam client, central API and web administration portal for exams, submissions and grading.",
    story: "This started with something that bothered me about coding exams in Nigerian universities: students could be tested on remembering syntax and writing code on paper, instead of actually writing and running a program. I wanted to build something closer to how programming works in practice. It began as a single-institution system, then I reworked the architecture around multi-tenancy so other institutions could use it too.",
    stack: [".NET", "C#", "WPF", "ASP.NET Core", "Blazor Server", "PostgreSQL"],
    github: "https://github.com/DevObiChinaka/ScoreCode",
    shots: [
      { src: "/scorecode/student-dashboard.jpg", alt: "ScoreCode student dashboard", caption: "Student dashboard" },
      { src: "/scorecode/lecturer-dashboard.jpg", alt: "ScoreCode lecturer dashboard", caption: "Lecturer dashboard" },
      { src: "/scorecode/institution-admin-dashboard.jpg", alt: "ScoreCode institution administrator dashboard", caption: "Institution administration" },
      { src: "/scorecode/platform-admin-dashboard.jpg", alt: "ScoreCode platform administrator dashboard", caption: "Platform administration" }
    ],
    featured: true,
    caseStudy: {
      overview: "ScoreCode explores how programming assessments can move beyond handwritten code and closer to the way students actually develop software: by writing, running and submitting programs in a controlled environment.",
      problem: "In many learning environments, coding assessments can reward remembering syntax and reproducing code on paper without checking whether a program executes. I wanted to explore a workflow where students could submit executable code and lecturers could manage assessments through a dedicated system.",
      approach: [
        "Built a Windows client for the student examination experience, alongside a central API and web administration areas.",
        "Separated responsibilities across the client, API and administration experience rather than putting all work into one application.",
        "Reworked the original single-institution design around institution-aware records and access checks as the scope expanded.",
        "Considered resource limits for code execution so submitted programs could be handled within defined boundaries."
      ],
      decisions: [
        { title: "Institution-aware data access", detail: "Institution identifiers are used with lecturer and student records, and server-side checks help prevent users from accessing records belonging to another institution." },
        { title: "Separate application responsibilities", detail: "The desktop exam experience, central API and web administration portal have distinct responsibilities, making the overall system easier to reason about than a single all-in-one client." },
        { title: "Design beyond the first institution", detail: "The project started with one institution in mind. Multi-tenancy became an architectural direction so the system could potentially support more than one institution." }
      ],
      reflection: "ScoreCode taught me that a working feature is only one part of a system. Access boundaries, execution limits and the way separate components communicate matter just as much. I want to keep improving the project and investigate what would be required for realistic adoption by universities."
    }
  },
  {
    slug: "oxiworld",
    name: "Oxiworld Forex Academy",
    kind: "Product collaboration",
    status: "Live preview",
    description: "A web platform for a forex academy, bringing an initial idea into a working online experience.",
    story: "Someone reached out with the idea, and we talked through what they wanted to build. I helped sharpen the concept, think through how it could work as a product, and bring it to life. It was a reminder that building software is not just about implementing a spec. Sometimes the first step is helping shape the idea itself.",
    stack: ["Django", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Celery"],
    github: "https://github.com/DevObiChinaka/oxidane",
    live: "https://oxidane-two.vercel.app/",
    shots: [{ src: "/project-screenshots/oxiworld-homepage.jpg", alt: "Oxiworld Forex Academy homepage with market rates and trading resources", caption: "Homepage" }],
    featured: true,
    caseStudy: {
      overview: "Oxiworld is a web experience for a forex academy, developed from an early concept into a working product preview.",
      problem: "The initial request was an idea rather than a fully specified software brief. Before implementation, the concept needed to be clarified into an experience that users could navigate.",
      approach: [
        "Discussed the original idea and helped shape the product direction.",
        "Translated the concept into a web experience rather than treating the work as implementation alone.",
        "Worked across a Next.js and TypeScript frontend and a Django backend."
      ],
      decisions: [
        { title: "Clarify the product first", detail: "The work began with conversations about what the product should do, helping establish direction before focusing on implementation." },
        { title: "Separate frontend and backend concerns", detail: "The project uses a Next.js frontend and Django backend, with the intent of keeping the user-facing experience distinct from server-side application logic." }
      ],
      reflection: "This project helped me see product thinking as part of software development. Understanding the problem and shaping requirements can be as important as writing the code that follows."
    }
  },
  {
    slug: "uniapp",
    name: "UniApp",
    kind: "Mobile app · Early project",
    status: "In development",
    description: "A university attendance app concept exploring QR attendance, location checks, admin workflows and identity verification.",
    story: "This was one of my first mobile app projects. A friend needed something along these lines for their project work, and that gave me the motivation to take it on and learn by building. I'm still working through how the different parts fit together, which is part of why the project has been useful to me.",
    stack: ["Django", "Python", "Flutter", "Dart", "PostgreSQL", "Firebase"],
    github: "https://github.com/DevObiChinaka/uniapp",
    featured: false
  },
  {
    slug: "adun-dinner",
    name: "ADUN Dinner & Awards Night",
    kind: "Event ticketing",
    status: "Live",
    description: "A QR-based ticketing system built for a school-wide dinner event with custom ticket details.",
    story: "My school was organising a dinner for the whole university, and entry was ticket-based with a few custom requirements. Time was tight, so I built a QR ticket system to help manage the event, including payment handling, ticket verification and checking who was authorised to enter.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DevObiChinaka/dinner",
    live: "https://devobichinaka.github.io/dinner/",
    shots: [{ src: "/project-screenshots/adun-dinner-ticketing.jpg", alt: "ADUN Dinner Night ticket page with name and matric-number fields", caption: "Ticket generation" }],
    featured: true,
    caseStudy: {
      overview: "A small ticketing experience created for a university-wide dinner and awards event with a short delivery timeline and specific ticket requirements.",
      problem: "The event needed a way to issue tickets and verify attendees at entry. The process also needed to accommodate custom ticket information and payment-related checks.",
      approach: [
        "Built a browser-based ticket experience around the event's requirements.",
        "Used QR codes to support ticket verification at entry.",
        "Kept the workflow focused on issuing tickets and checking whether a ticket holder was authorised to enter."
      ],
      decisions: [
        { title: "Prioritise the event workflow", detail: "With a short timeline, the implementation focused on the practical path from ticket details to verification at the venue." },
        { title: "Use QR-based verification", detail: "A QR code provided a quick way to connect a ticket to the verification process rather than relying only on a visual ticket." }
      ],
      reflection: "This was a practical lesson in delivering a focused solution under a deadline. It also reinforced the value of understanding the real workflow before deciding what the software needs to do."
    }
  },
  {
    slug: "darew-ventures",
    name: "Darew Ventures",
    kind: "Website demo",
    status: "Live preview",
    description: "A demo website based on an existing oil company in Nigeria, built to present its services and business information online.",
    story: "This was a practical demo based on an existing Nigerian oil company. I used it to explore how a business in that industry could present its services and information online.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/DevObiChinaka/darew",
    live: "https://darew.netlify.app/",
    featured: false
  }
];
