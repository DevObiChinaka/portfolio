"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, MessageSquare, User, Send, CheckCircle, Github, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Using Formspree - Form submissions sent to obinnachiderachinaka@gmail.com
      const formspreeEndpoint = "https://formspree.io/f/mnjadzar";
      
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setIsSubmitting(false);
      setError("Failed to send message. Please try emailing me directly.");
      console.error("Form submission error:", err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`text-center mb-8 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
            Let's Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Available for freelance projects. Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {/* Contact Info Cards */}
          <div className={`lg:col-span-1 space-y-3 sm:space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-2 sm:mb-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Email Me</h3>
              <a
                href="mailto:obinnachiderachinaka@gmail.com"
                className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline break-all"
              >
                obinnachiderachinaka@gmail.com
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-2 sm:mb-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Call Me</h3>
              <a
                href="tel:+2347062401459"
                className="text-sm sm:text-base text-green-600 dark:text-green-400 hover:underline"
              >
                +234 706 240 1459
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#25D366] rounded-xl flex items-center justify-center mb-2 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/2347062401459"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-green-600 dark:text-green-400 hover:underline"
              >
                +234 706 240 1459
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-2 sm:mb-4">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">GitHub</h3>
              <a
                href="https://github.com/devobichinaka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-purple-600 dark:text-purple-400 hover:underline"
              >
                @devobichinaka
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-6 shadow-xl text-white">
              <h3 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">Response Time</h3>
              <p className="text-xs sm:text-base text-blue-100">Usually within 24 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl">
                      {error}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2 font-semibold"
                    >
                      <User size={20} />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2 font-semibold"
                    >
                      <Mail size={20} />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="message"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-2 font-semibold"
                    >
                      <MessageSquare size={20} />
                      <span>Your Message</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              © {new Date().getFullYear()} <span className="font-semibold text-gray-900 dark:text-white">Chinaka Obinna (DevObi)</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Built with <span className="text-red-500">♥</span> using Next.js, TypeScript & Tailwind CSS
            </p><br /><p className="text-sm text-gray-500 dark:text-gray-500">Let's work together and achieve greatness</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
