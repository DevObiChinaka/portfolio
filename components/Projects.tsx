"use client";

import { ExternalLink, Github, GraduationCap, Building2, Smartphone, Ticket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Add as more projects are done
const projects = [
  {
    title: "Oxiworld - SaaS Learning Platform",
    description: "Full-stack SaaS platform for online learning with subscription management, payment integration (Paystack), Google OAuth, Telegram bot integration, and course management. Features multi-layer subscription protection, automated renewals, and production deployment on VPS.",
    tech: ["Next.js", "TypeScript", "Django", "Python", "PostgreSQL", "Celery", "Redis", "Gunicorn", "Nginx"],
    github: "https://github.com/DevObiChinaka/oxidane",
    live: "https://oxidane-two.vercel.app/",
    category: "Full-Stack",
    icon: GraduationCap,
    gradient: "from-blue-600 to-cyan-600",
    highlight: "Production SaaS with payments"
  },
  {
    title: "Darew Ventures - Oil & Gas Services Platform",
    description: "Comprehensive corporate website for Nigeria's leading indigenous oilfield service company. Features service showcases, client portal, and business information for a company with 30+ years in the oil & gas industry.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/DevObiChinaka/darew",
    live: "https://darew.netlify.app/",
    category: "Frontend",
    icon: Building2,
    gradient: "from-purple-600 to-pink-600",
    highlight: "30+ years of excellence"
  },
  {
    title: "Smart Attendance System (UniApp)",
    description: "Advanced full-stack attendance management platform with Flutter mobile app featuring geolocation fencing, QR code scanning, and facial recognition. Django backend with admin dashboard, security monitoring, user management, and automated exit system with facial verification.",
    tech: ["Django", "Python", "Flutter", "Dart", "PostgreSQL", "Firebase", "ML Kit", "REST API"],
    github: "https://github.com/DevObiChinaka/uniapp",
    live: "",
    category: "Full-Stack",
    icon: Smartphone,
    gradient: "from-green-600 to-teal-600",
    highlight: "AI-powered facial recognition"
  },
  {
    title: "ADUN Dinner & Awards Night Ticketing",
    description: "QR code-based ticketing system for university annual dinner and awards event. Generates unique QR tickets for attendees with real-time validation and attendance tracking.",
    tech: ["HTML", "CSS", "JavaScript", "QR Code API"],
    github: "https://github.com/DevObiChinaka/dinner",
    live: "https://devobichinaka.github.io/dinner/",
    category: "Frontend",
    icon: Ticket,
    gradient: "from-orange-600 to-red-600",
    highlight: "Real-time QR generation"
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-8 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            A showcase of my work building scalable backends, robust APIs, and complete full-stack applications
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                
                <div className="p-4 sm:p-8 relative z-10">
                  {/* Header with icon */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <span className="px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <div className="mb-5 inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">{project.highlight}</span>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:scale-105 transition-all duration-300 font-medium shadow-lg text-sm sm:text-base"
                      >
                        <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:scale-105 transition-all duration-300 font-medium shadow-lg text-sm sm:text-base`}
                      >
                        <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {!project.github && !project.live && (
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">Private/NDA Project</span>
                    )}
                  </div>
                </div>

                {/* Animated border effect */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20 blur-xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 px-4">
              Want to see more of my work?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              These are just a few highlights. I have more projects showcasing different technologies and problem-solving approaches.
            </p>
            <a
              href="https://github.com/devobichinaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all font-semibold text-base sm:text-lg shadow-lg hover:scale-105 transform duration-300"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
              <span>Visit My GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
