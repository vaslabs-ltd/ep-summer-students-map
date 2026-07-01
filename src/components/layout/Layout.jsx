import Logo from "../common/Logo.jsx";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cern-grey text-cern-dark">
      {children}

      <footer className="bg-cern-dark text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-8 py-14 md:flex-row md:items-start">
          
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="https://home.cern"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CERN homepage"
            >
              <Logo />
            </a>

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.facebook.com/cern"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#24365A] transition hover:bg-cern-blue"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://x.com/CERN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#24365A] text-sm font-bold transition hover:bg-cern-blue"
                aria-label="X"
              >
                X
              </a>

              <a
                href="https://www.linkedin.com/company/cern/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#24365A] transition hover:bg-cern-blue"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/cern"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#24365A] transition hover:bg-cern-blue"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.youtube.com/user/cerntv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 transition hover:bg-red-700"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-2xl font-bold">CERN</h3>

            <p className="leading-8 text-slate-300">
              Esplanade des Particules 1
              <br />
              P.O. Box
              <br />
              1211 Geneva 23
              <br />
              Switzerland
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
          Copyright © 2026 CERN
        </div>
      </footer>
    </div>
  );
}