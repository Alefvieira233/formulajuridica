import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { FORM_ANCHOR, NAV_LINKS } from "@/content";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-track/85 backdrop-blur-md">
      {/* progresso da corrida (posição do scroll) */}
      <motion.span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-race"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className="container-content flex h-[4.5rem] items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-zinc-400 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href={FORM_ANCHOR} className="btn-race !px-5 !py-2.5 !text-base">
            <Zap className="h-4 w-4" aria-hidden />
            Diagnóstico gratuito
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-zinc-200 hover:text-race lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-track lg:hidden">
          <ul className="container-content flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:bg-carbon hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={FORM_ANCHOR}
                className="btn-race w-full !text-base"
                onClick={() => setOpen(false)}
              >
                Diagnóstico gratuito
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
