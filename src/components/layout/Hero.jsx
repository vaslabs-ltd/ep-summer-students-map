import Logo from "../common/Logo.jsx";

export default function Hero() {
  return (
    <section className="bg-cern-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          
          <a
            href="https://home.cern"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Logo />
          </a>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-slate-300">
              CERN EP Department
            </p>

            <h1 className="mt-3 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
              Summer Students Map
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-slate-300">
              Discover the global EP Summer Student community. Explore where
              students come from, learn about their universities, and see the
              worldwide reach of the CERN EP Department.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}