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
        <div className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <p>
            I'm a versatile full-stack developer specializing in building production-grade SaaS platforms, 
            mobile applications, and enterprise solutions. With expertise in{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">Django, Python, Next.js, and Flutter</span>, 
            I create scalable systems that handle real-world complexity.
          </p>
          <p>
            My portfolio includes live SaaS platforms with{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">payment gateway integrations, 
            Google OAuth authentication, Telegram bot APIs</span>, and mobile apps with{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">AI-powered facial recognition and geofencing</span>. 
            I've deployed production systems on VPS with Nginx, Gunicorn, and Celery for background tasks.
          </p>
          <p>
            From architecting RESTful APIs to implementing secure payment flows and building cross-platform 
            mobile experiences, I deliver end-to-end solutions. My code powers ticketing systems, 
            attendance platforms, corporate websites, and subscription-based services used by real users daily.
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
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Why Work With Me
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
            I'm not just another developer, I'm someone who genuinely cares about building things that work and last.
          </p>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                I actually ship. No excuses, no endless "almost done."
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                While others build portfolios with fake projects, I've deployed real systems handling actual users and payments. 
                Oxiworld processes subscriptions. The attendance system tracks real students. These aren't demos, they're live, 
                working products that people depend on.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-600 pl-6 py-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                I obsess over details that most developers ignore.
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Payment webhooks that actually work. Authentication flows that don't break. Error handling that catches edge cases. 
                Database queries optimized for scale. I don't cut corners because I know that's what separates good projects from 
                great ones.
              </p>
            </div>
            
            <div className="border-l-4 border-green-600 pl-6 py-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                I solve problems, not just write code.
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                You need facial recognition for attendance? I'll integrate ML Kit and make it work reliably. Payment gateway acting up? 
                I'll debug the webhook flow and fix it. I don't just implement features, I make sure they actually solve the problem 
                you're facing.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-600 pl-6 py-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                I'm still hungry. Still learning. Still improving.
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Two years in, and I'm not satisfied. Every project teaches me something new. Every challenge makes me better. 
                I'm not here to coast—I'm here to build a career on exceptional work, and that means treating every project like 
                it's the one that defines me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

