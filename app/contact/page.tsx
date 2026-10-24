import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | DevObi",
  description: "Get in touch with DevObi about software projects, collaboration or a conversation about engineering."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-14">
      <div className="site-shell">
        <header className="pb-4 pt-14 sm:pt-20">
          <p className="mono text-xs mute"><span className="acc">~/portfolio</span> $ ./send-message.sh</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">Start a conversation<span className="acc">.</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-8 mute sm:text-lg">Have a project in mind, a question about something I built, or want to talk software? Send a message.</p>
        </header>
        <Contact />
      </div>
    </main>
  );
}
