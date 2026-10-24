import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-24 sm:pb-20 sm:pt-32">
      <p className="mono text-xs sm:text-sm mute"><span className="acc">~/portfolio</span> $ whoami<span className="cursor ml-1" aria-hidden="true" /></p>
      <div className="mt-7 grid items-start gap-8 sm:mt-9 sm:grid-cols-[1fr_176px] sm:gap-12">
        <div>
          <p className="section-kicker mb-3">SOFTWARE ENGINEERING · BUILDING THINGS THAT WORK</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">Chinaka Obinna<span className="acc">.</span></h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 sm:text-xl">I like taking an idea, figuring out what it actually needs, and turning it into software people can use.</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 mute sm:text-base">I'm a Software Engineering graduate who enjoys working across applications, APIs and the systems that connect them. Most of what I know has grown through building, getting stuck, researching, and trying again.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="mono inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium" style={{ background: "var(--accent)", borderColor: "var(--accent)", color: "#10140b" }}>See what I've built <span aria-hidden="true">↘</span></Link>
            <a href="https://github.com/DevObiChinaka" target="_blank" rel="noopener noreferrer" className="mono inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm" style={{ borderColor: "var(--line)", background: "var(--panel)" }}>GitHub <span aria-hidden="true">↗</span></a>
            <Link href="/contact" className="mono link text-sm">say hello</Link>
          </div>
          <div className="mono mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs mute">
            <span><span className="acc">●</span> Usually building something</span><span>Based in Nigeria</span><span>Open to opportunities</span>
          </div>
        </div>
        <div className="relative mx-auto w-36 sm:mx-0 sm:w-44">
          <div className="absolute -inset-2 translate-x-2 translate-y-2 rounded-lg border" style={{ borderColor: "var(--accent)", opacity: .5 }} aria-hidden="true" />
          <Image src="/mybrandimage.jpg" alt="Chinaka Obinna" width={256} height={256} priority className="relative aspect-square w-full rounded-lg border object-cover" style={{ borderColor: "var(--line)" }} />
          <p className="mono mt-3 text-center text-[10px] mute">devobi / profile.jpg</p>
        </div>
      </div>
      <div className="panel mt-12 grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0" style={{ borderRadius: "10px" }}>
        <div className="p-4 sm:p-5"><p className="mono text-xs alt">01 / I LIKE</p><p className="mt-2 text-sm">Working out how systems fit together</p></div>
        <div className="p-4 sm:p-5"><p className="mono text-xs alt">02 / MY PROCESS</p><p className="mt-2 text-sm">Look it up, build it, test it</p></div>
        <div className="p-4 sm:p-5"><p className="mono text-xs alt">03 / CURRENT CURIOSITY</p><p className="mt-2 text-sm">How people build with AI tools</p></div>
      </div>
    </section>
  );
}
