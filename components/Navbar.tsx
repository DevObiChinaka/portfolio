"use client";

import { useEffect, useState } from "react";

const tabs = [
  { id: "projects", file: "projects.tsx" },
  { id: "skills", file: "toolkit.json" },
  { id: "about", file: "about.md" },
  { id: "contact", file: "contact.sh" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = tabs.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Main navigation" className="mono fixed inset-x-0 top-0 z-50 border-b text-xs sm:text-sm" style={{ borderColor: "var(--line)", background: "rgba(11,13,16,.92)", backdropFilter: "blur(14px)" }}>
      <div className="mx-auto flex h-14 max-w-[980px] items-stretch px-3 sm:px-0">
        <a href="#top" className="flex shrink-0 items-center gap-2 border-r px-3 font-semibold sm:px-4" style={{ borderColor: "var(--line)", color: "var(--accent)" }}>
          <span aria-hidden="true">{"<>"}</span> devobi
        </a>
        <div className="flex min-w-0 flex-1 overflow-x-auto">
          {tabs.map((t) => (
            <a key={t.id} href={`#${t.id}`} aria-current={active === t.id ? "location" : undefined} className="flex shrink-0 items-center border-b-2 px-3 sm:px-4" style={{ borderBottomColor: active === t.id ? "var(--accent)" : "transparent", color: active === t.id ? "var(--foreground)" : "var(--muted)" }}>
              {t.file}
            </a>
          ))}
        </div>
        <a href="mailto:obinnachiderachinaka@gmail.com" className="hidden items-center pl-4 sm:flex" style={{ color: "var(--accent-2)" }}>contact ↗</a>
      </div>
    </nav>
  );
}
