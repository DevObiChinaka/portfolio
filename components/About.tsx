"use client";

import { Code2, Smartphone, CreditCard, Zap, Server, Shield } from "lucide-react";

export default function About() {
  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Complete web applications from database architecture to responsive frontends using modern frameworks and best practices",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Server,
      title: "SaaS Platform Development",
      description: "Multi-tenant platforms with subscription management, authentication systems, and scalable cloud infrastructure",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native-quality cross-platform apps with real-time features, offline support, and device integrations",
      color: "from-green-600 to-teal-600"
    },
    {
      icon: CreditCard,
      title: "Payment Systems",
      description: "Secure payment gateway integrations, subscription billing, webhook handling, and financial transaction processing",
      color: "from-orange-600 to-red-600"
    },
    {
      icon: Zap,
      title: "API & Integrations",
      description: "RESTful APIs, third-party service integrations, bot development, and OAuth authentication flows",
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: Shield,
      title: "DevOps & Deployment",
      description: "Server configuration, containerization, CI/CD automation, performance tuning, and production monitoring",
      color: "from-cyan-600 to-blue-600"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
          About Me
        </h2>
        <div className="text-base sm:text-lg text-gray-700 dark:text-gray-300 space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <p>
            I'm driven by a simple passion: <span className="font-semibold text-blue-600 dark:text-blue-400">bringing automation to life</span>. 
            There's something magical about building systems that make life easier and eliminate unnecessary stress. 
            That's what got me into coding, and it's what keeps me obsessed with solving real problems through technology.
          </p>
          <p>
            I'm a full-stack developer and <span className="font-semibold text-blue-600 dark:text-blue-400">President of the Google Developer Student Club</span> at 
            Admiralty University of Nigeria, where I'm studying Software Engineering. I chose full-stack development because it gives me 
            complete control to bring ideas to life from concept to deployment. Most of my projects require end-to-end ownership, 
            and I love having the freedom to architect both the backend logic and the user experience.
          </p>
          <p>
            My approach to problem-solving starts with research and sketches, refining until the solution is solid. 
            Good engineering isn't about diving straight into code—it's about thinking through the problem first. 
            I focus on{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">client satisfaction through optimal quality delivered in the shortest possible time</span>. 
            I take the extra hours, pay attention to details, and ensure every project meets the mark. When you work with me, 
            you're working with someone who treats your project like it's the one that defines them.
          </p>
          <p>
            Beyond coding, I play table tennis and chess, trade the market, and constantly research new technologies. 
            I believe no knowledge is wasted. What excites me most? <span className="font-semibold text-blue-600 dark:text-blue-400">Challenging projects</span>. 
            There's a thrill in solving complex problems and crafting smart solutions that make everything easier. 
            That's where I come alive.
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Technical Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-6 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Work With Me Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Why Work With Me
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-3xl">
            I'm not just another developer, I'm someone who genuinely cares about building things that work and last.
          </p>
          <div className="space-y-4 sm:space-y-6">
            <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 py-2">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                I ship real products, not portfolio demos.
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Oxiworld processes real subscriptions. UniApp tracks actual students with facial recognition. 
                Darew serves a 30-year-old oil & gas company. These aren't proof-of-concepts—they're live systems 
                handling real users, real payments, and real business operations.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-4 sm:pl-6 py-2">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                Client satisfaction through quality and speed.
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I take the extra hours. I pay attention to your details. I handle feedback positively and implement changes 
                immediately. My goal is simple: deliver the best code quality in the shortest possible time. 
                I'm fully available and treat your project with the urgency it deserves.
              </p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-4 sm:pl-6 py-2">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                I thrive on challenging problems.
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                The harder the problem, the more excited I get. There's a genuine thrill in finding smart solutions that 
                make complex things simple. Hitting a roadblock? That's where I dig deeper. I won't stop until I've cracked 
                it and built something that works beautifully.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-600 pl-4 sm:pl-6 py-2">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                Constantly learning, constantly improving.
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                As President of the Google Developer Student Club and a Software Engineering student at Admiralty University, 
                I'm surrounded by innovation. I research constantly, absorb new knowledge daily, and believe no learning is wasted. 
                Two years in, and I'm hungrier than ever to build exceptional work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

