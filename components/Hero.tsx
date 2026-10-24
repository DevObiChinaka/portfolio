import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-24 sm:pb-20 sm:pt-32">
      <p className="mono text-xs sm:text-sm mute">
        <span className="acc">~/portfolio</span> $ whoami<span className="cursor ml-1" aria-hidden="true" />
      </p>

      <div className="mt-7 grid items-start gap-8 sm:mt-9 sm:grid-cols-[1fr_176px] sm:gap-12">
        <div>
          <p className="section-kicker mb-3">SOFTWARE ENGINEERING · BACKEND SYSTEMS</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
            Chinaka Obinna<span className="acc">.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 sm:text-xl">
            I build practical software and work through the systems behind it, from application logic and APIs to data, integrations and deployment.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 mute sm:text-base">
            Software Engineering graduate interested in backend systems, thoughtful engineering decisions, and how people work with AI-assisted development tools.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="mono inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium" style={{ background: "var(--accent)", borderColor: "var(--accent)", color: "#10140b" }}>
              Explore projects <span aria-hidden="true">↘</span>
            </Link>
            <a href="https://github.com/DevObiChinaka" target="_blank" rel="noopener noreferrer" className="mono inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm" style={{ borderColor: "var(--line)", background: "var(--panel)" }}>
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <Link href="/contact" className="mono link text-sm">get in touch</Link>
          </div>
          <div className="mono mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs mute">
            <span><span className="acc">●</span> Building & learning</span>
            <span>Based in Nigeria</span>
            <span>Open to opportunities</span>
          </div>
        </div>

        <div className="relative mx-auto w-36 sm:mx-0 sm:w-44">
          <div className="absolute -inset-2 translate-x-2 translate-y-2 rounded-lg border" style={{ borderColor: "var(--accent)", opacity: .5 }} aria-hidden="true" />
          <Image src="/mybrandimage.jpg" alt="Chinaka Obinna" width={256} height={256} priority className="relative aspect-square w-full rounded-lg border object-cover" style={{ borderColor: "var(--line)" }} />
          <p className="mono mt-3 text-center text-[10px] mute">devobi / profile.jpg</p>
        </div>
      </div>

      <div className="panel mt-12 grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0" style={{ borderRadius: "10px" }}>
        <div className="p-4 sm:p-5"><p className="mono text-xs alt">01 / FOCUS</p><p className="mt-2 text-sm">Backend & application systems</p></div>
        <div className="p-4 sm:p-5"><p className="mono text-xs alt">02 / APPROACH</p><p className="mt-2 text-sm">Research, build, test, refine</p></div>
        <div className="p-4 sm:p-5"><p className="mono text-xs alt">03 / INTEREST</p><p className="mt-2 text-sm">Reliable software, human + AI</p></div>
      </div>
    </section>
  );
}
