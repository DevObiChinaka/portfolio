"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home.tsx" },
  { href: "/projects", label: "projects/" },
  { href: "/about", label: "about.md" },
  { href: "/contact", label: "contact.sh" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="mono fixed inset-x-0 top-0 z-50 border-b text-xs sm:text-sm" style={{ borderColor: "var(--line)", background: "rgba(11,13,16,.92)", backdropFilter: "blur(14px)" }}>
      <div className="mx-auto flex h-14 max-w-[980px] items-stretch px-3 sm:px-0">
        <Link href="/" className="flex shrink-0 items-center gap-2 border-r px-3 font-semibold sm:px-4" style={{ borderColor: "var(--line)", color: "var(--accent)" }}>
          <span aria-hidden="true">{"<>"}</span> devobi
        </Link>
        <div className="flex min-w-0 flex-1 overflow-x-auto">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className="flex shrink-0 items-center border-b-2 px-3 sm:px-4" style={{ borderBottomColor: active ? "var(--accent)" : "transparent", color: active ? "var(--foreground)" : "var(--muted)" }}>
                {link.label}
              </Link>
            );
          })}
        </div>
        <a href="mailto:obinnachiderachinaka@gmail.com" className="hidden items-center pl-4 sm:flex" style={{ color: "var(--accent-2)" }}>say hello ↗</a>
      </div>
    </nav>
  );
}
