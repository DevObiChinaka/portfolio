"use client";

import { Code, Server, Zap, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: Server,
      title: "Backend Excellence",
      description: "Building robust, scalable server-side applications with Django and Python. Expert in RESTful APIs, database optimization, and system architecture.",
      color: "blue"
    },
    {
      icon: Code,
      title: "Full-Stack Proficiency",
      description: "Seamlessly integrating modern frontends with Next.js and React, creating complete solutions from database to user interface.",
      color: "purple"
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimizing application performance, reducing load times, and implementing efficient caching strategies for better user experience.",
      color: "cyan"
    },
    {
      icon: Award,
      title: "Quality Driven",
      description: "Writing clean, maintainable code with comprehensive testing. Following best practices and modern development standards.",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20" },
      cyan: { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20" },
      green: { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20" }
    };
    return colors[color];
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Chinaka Obinna</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">full-stack developer</span> with a strong focus on backend engineering. 
              With over <span className="font-semibold">2 years of experience</span>, I've mastered the art of building scalable, 
              efficient web applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              My expertise lies in <span className="font-semibold text-purple-600 dark:text-purple-400">Python and Django</span>, 
              where I create robust server-side architectures, design complex database systems, and build RESTful APIs that power 
              modern web platforms. I combine this backend prowess with <span className="font-semibold text-cyan-600 dark:text-cyan-400">Next.js</span> and 
              React to deliver complete, production-ready solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether it's developing authentication systems, integrating payment gateways, optimizing database queries, 
              or crafting beautiful user interfaces—I bring ideas to life with <span className="font-semibold">clean, maintainable code</span> and 
              a relentless focus on quality.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border ${colors.border}`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
