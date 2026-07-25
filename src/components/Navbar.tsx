import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CHECKOUT_URL, NAV_LINKS } from "@/content";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-navy-950/90 backdrop-blur">
      <nav className="container-content flex h-20 items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-gold-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href={CHECKOUT_URL} className="btn-primary !px-5 !py-2.5 text-sm">
            Garantir minha vaga
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-200 hover:text-gold-300 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-navy-950 lg:hidden">
          <ul className="container-content flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-navy-800 hover:text-gold-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={CHECKOUT_URL}
                className="btn-primary w-full text-sm"
                onClick={() => setOpen(false)}
              >
                Garantir minha vaga
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
