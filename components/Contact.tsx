"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";
const field = "mono w-full border-b rule bg-transparent py-2 text-sm outline-none focus:border-[var(--acc)]";

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
    <section id="contact" className="py-16 pb-24 border-t rule">
      <h2 className="text-2xl font-semibold"># Contact</h2>
      <p className="mt-4 max-w-2xl mute">
        Open to work and to conversations about backend systems. Email works best, or use the form.
      </p>
      <p className="mono mt-4 text-sm">
        <a className="link" href="mailto:obinnachiderachinaka@gmail.com">obinnachiderachinaka@gmail.com</a>
        <span className="mute">  /  </span>
        <a className="link" href="https://github.com/DevObiChinaka" target="_blank" rel="noopener noreferrer">github.com/DevObiChinaka</a>
      </p>

      <form onSubmit={onSubmit} className="mt-8 max-w-xl border rule" style={{ background: "var(--panel)" }}>
        <div className="mono border-b rule px-4 py-2 text-xs mute">send-message.sh</div>
        <div className="space-y-5 p-4">
          <label className="block">
            <span className="mono text-xs alt">--name</span>
            <input className={field} name="name" value={form.name} onChange={onChange} required autoComplete="name" />
          </label>
          <label className="block">
            <span className="mono text-xs alt">--email</span>
            <input className={field} type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" />
          </label>
          <label className="block">
            <span className="mono text-xs alt">--message</span>
            <textarea className={field + " resize-none"} name="message" rows={5} value={form.message} onChange={onChange} required />
          </label>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="mono border px-4 py-2 text-sm disabled:opacity-50"
              style={{ borderColor: "var(--acc)", color: "var(--acc)" }}
            >
              {status === "sending" ? "sending..." : "$ send"}
            </button>
            <p role="status" className="mono text-xs">
              {status === "sent" && <span className="alt">Message sent. I'll reply by email.</span>}
              {status === "error" && (
                <span className="acc">
                  Message not sent. Try again, or email me directly.
                </span>
              )}
            </p>
          </div>
        </div>
      </form>

      <footer className="mono mt-16 text-xs mute">
        © {new Date().getFullYear()} Chinaka Obinna (DevObi). Built with Next.js, TypeScript and Tailwind CSS.
      </footer>
    </section>
  );
}