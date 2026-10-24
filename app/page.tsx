import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="site-shell">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
    </main>
  );
}
