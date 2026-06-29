import Logo from "../common/Logo.jsx";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <div className="flex items-center gap-4">
          <Logo />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cern-blue">
              CERN EP Department
            </p>
            <h1 className="text-2xl font-black tracking-tight md:text-3xl">
              Summer Students Map
            </h1>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-bold md:flex">
          <a href="#map" className="hover:text-cern-blue">Map</a>
          <a href="#students" className="hover:text-cern-blue">Students</a>
          <a href="#data" className="hover:text-cern-blue">Data</a>
        </nav>
      </div>
    </header>
  );
}
