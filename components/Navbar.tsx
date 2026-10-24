"use client";

import { useEffect, useState } from "react";

const tabs = [
  { id: "about", file: "about.md" },
  { id: "projects", file: "projects.tsx" },
  { id: "skills", file: "skills.json" },
  { id: "contact", file: "contact.sh" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = tabs.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="mono fixed inset-x-0 top-0 z-50 flex h-10 items-stretch border-b rule text-sm"
      style={{ background: "var(--panel)" }}
    >
      <a href="#top" className="flex items-center px-4 border-r rule acc font-semibold">
        devobi
      </a>
      <div className="flex overflow-x-auto">
        {tabs.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            aria-current={active === t.id ? "true" : undefined}
            className="flex items-center whitespace-nowrap px-4 border-r rule border-b-2"
            style={{
              background: active === t.id ? "var(--bg)" : "transparent",
              borderBottomColor: active === t.id ? "var(--acc)" : "transparent",
              color: active === t.id ? "var(--fg)" : "var(--mute)",
            }}
          >
            {t.file}
          </a>
        ))}
      </div>
    </nav>
  );
}