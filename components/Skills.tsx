"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      { name: "Python", level: 95 },
      { name: "Django", level: 92 },
      { name: "Django REST Framework", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "Redis", level: 85 },
      { name: "Celery", level: 82 },
      { name: "Gunicorn", level: 85 },
      { name: "REST APIs", level: 95 },
    ],
    color: "blue"
  },
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "Next.js", level: 88 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Flutter", level: 80 },
      { name: "Dart", level: 78 },
    ],
    color: "purple"
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Nginx", level: 88 },
      { name: "Linux/VPS Management", level: 82 },
      { name: "Git/GitHub", level: 90 },
      { name: "CI/CD", level: 75 },
      { name: "Firebase", level: 80 },
    ],
    color: "cyan"
  },
  {
    title: "Integrations & Advanced",
    skills: [
      { name: "Payment APIs (Paystack)", level: 88 },
      { name: "Google OAuth 2.0", level: 85 },
      { name: "Telegram Bot API", level: 82 },
      { name: "ML Kit / Facial Recognition", level: 75 },
      { name: "Geolocation/Geofencing", level: 80 },
      { name: "QR Code Systems", level: 90 },
    ],
    color: "green"
  }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>(() => {
    // Initialize with all skill levels to prevent 0% display
    const initialLevels: Record<string, number> = {};
    skillCategories.forEach(category => {
      category.skills.forEach(skill => {
        initialLevels[skill.name] = 0;
      });
    });
    return initialLevels;
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          skillCategories.forEach(category => {
            category.skills.forEach(skill => {
              setTimeout(() => {
                setAnimatedLevels(prev => ({
                  ...prev,
                  [skill.name]: skill.level
                }));
              }, 300);
            });
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { gradient: string; text: string; bg: string }> = {
      blue: {
        gradient: "from-blue-600 to-cyan-600",
        text: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-500/10"
      },
      purple: {
        gradient: "from-purple-600 to-pink-600",
        text: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-500/10"
      },
      cyan: {
        gradient: "from-cyan-600 to-teal-600",
        text: "text-cyan-600 dark:text-cyan-400",
        bg: "bg-cyan-500/10"
      },
      green: {
        gradient: "from-green-600 to-emerald-600",
        text: "text-green-600 dark:text-green-400",
        bg: "bg-green-500/10"
      }
    };
    return colors[color];
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 px-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Tools and technologies I use to bring projects to life
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={catIndex}
                className={`bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + catIndex * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br ${colors.gradient} rounded-lg`}></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-bold ${colors.text}`}>
                          {animatedLevels[skill.name] || 0}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${animatedLevels[skill.name] || 0}%`,
                            transitionDelay: `${400 + skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack with Logos */}
        <div className={`mt-12 sm:mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-6 sm:mb-8 px-4">
            Technologies I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work With</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
            {/* Python */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Python</span>
            </div>
            {/* Django */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-sm">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" className="w-10 h-10 sm:w-14 sm:h-14 dark:invert" />
              </div>
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Django</span>
            </div>
            {/* PostgreSQL */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">PostgreSQL</span>
            </div>
            {/* Redis */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Redis</span>
            </div>
            {/* Next.js */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-12 h-12 sm:w-16 sm:h-16 invert dark:invert-0" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Next.js</span>
            </div>
            {/* React */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">React</span>
            </div>
            {/* TypeScript */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">TypeScript</span>
            </div>
            {/* JavaScript */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">JavaScript</span>
            </div>
            {/* Tailwind CSS */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Tailwind CSS</span>
            </div>
            {/* Flutter */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Flutter</span>
            </div>
            {/* Docker */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Docker</span>
            </div>
            {/* Nginx */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="Nginx" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Nginx</span>
            </div>
            {/* Git */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Git</span>
            </div>
            {/* GitHub */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12 sm:w-16 sm:h-16 invert dark:invert-0" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
            </div>
            {/* Firebase */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Firebase</span>
            </div>
            {/* Linux */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Linux</span>
            </div>
            {/* Postman */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Postman</span>
            </div>
            {/* Material UI */}
            <div className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="Material UI" className="w-12 h-12 sm:w-16 sm:h-16" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Material UI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
