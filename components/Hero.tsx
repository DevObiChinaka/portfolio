import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-20">
      <p className="mono text-sm mute">
        ~/portfolio $ whoami<span className="cursor ml-1" aria-hidden />
      </p>
      <div className="mt-8 flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Chinaka Obinna</h1>
          <p className="mt-2 mono text-sm acc">Software engineer, backend systems</p>
          <p className="mt-6">
            I graduated in Software Engineering and I'm most at home in backend work: requirements, application
            logic, data, and the way services fit together. I like researching a problem, sketching how the
            solution should work, then building and refining it.
          </p>
          <p className="mt-4 mute">
            I also spend time on how AI tools change the way people learn and practise programming.
          </p>
          <p className="mt-6 mono text-sm">
            <a className="link" href="https://github.com/DevObiChinaka" target="_blank" rel="noopener noreferrer">github</a>
            <span className="mute">  /  </span>
            <a className="link" href="mailto:obinnachiderachinaka@gmail.com">email</a>
            <span className="mute">  /  </span>
            <a className="link" href="#projects">projects</a>
          </p>
        </div>
        <Image
          src="/mybrandimage.jpg"
          alt="Chinaka Obinna"
          width={256}
          height={256}
          priority
          className="h-32 w-32 sm:h-40 sm:w-40 shrink-0 border rule object-cover"
        />
      </div>
    </section>
  );
}