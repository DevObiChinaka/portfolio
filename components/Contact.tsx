"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";
const field = "mono w-full rounded-md border bg-transparent px-3 py-2.5 text-sm outline-none";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mnjadzar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _replyto: form.email }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section pb-16">
      <p className="section-kicker">05 / SAY HELLO</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Have something in mind?<span className="acc">.</span></h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 mute sm:text-base">
        Open to work and conversations about backend systems, practical software and engineering. Email works best, or send a note below.
      </p>
      <div className="mono mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a className="link" href="mailto:obinnachiderachinaka@gmail.com">obinnachiderachinaka@gmail.com ↗</a>
        <a className="link" href="https://github.com/DevObiChinaka" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>

      <form onSubmit={onSubmit} className="panel mt-8 max-w-2xl overflow-hidden rounded-xl">
        <div className="flex items-center gap-2 border-b px-4 py-3 mono text-xs mute" style={{ borderColor: "var(--line)", background: "var(--panel-raised)" }}>
          <span className="h-2 w-2 rounded-full" style={{ background: "#fb7185" }} />
          <span className="h-2 w-2 rounded-full" style={{ background: "#fbbf24" }} />
          <span className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
          <span className="ml-2">send-message.sh</span>
        </div>
        <div className="space-y-5 p-4 sm:p-6">
          <label className="block">
            <span className="mono mb-2 block text-xs alt">--name</span>
            <input className={field} style={{ borderColor: "var(--line)" }} name="name" value={form.name} onChange={onChange} required autoComplete="name" />
          </label>
          <label className="block">
            <span className="mono mb-2 block text-xs alt">--email</span>
            <input className={field} style={{ borderColor: "var(--line)" }} type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" />
          </label>
          <label className="block">
            <span className="mono mb-2 block text-xs alt">--message</span>
            <textarea className={field + " resize-y"} style={{ borderColor: "var(--line)" }} name="message" rows={5} value={form.message} onChange={onChange} required />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status === "sending"} className="mono rounded-md border px-4 py-2.5 text-sm font-medium disabled:opacity-50" style={{ borderColor: "var(--accent)", background: "var(--accent)", color: "#10140b" }}>
              {status === "sending" ? "sending..." : "$ send message"}
            </button>
            <p role="status" className="mono text-xs">
              {status === "sent" && <span className="alt">Message sent. I'll reply by email.</span>}
              {status === "error" && <span style={{ color: "#fda4af" }}>Message not sent. Try again or email me directly.</span>}
            </p>
          </div>
        </div>
      </form>

      <footer className="mt-12 flex flex-col gap-2 border-t pt-5 mono text-xs mute sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "var(--line)" }}>
        <span>© {new Date().getFullYear()} Chinaka Obinna / DevObi</span>
        <span>Built with Next.js · TypeScript · Tailwind CSS</span>
      </footer>
    </section>
  );
}
