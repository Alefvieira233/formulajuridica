import { Instagram } from "lucide-react";
import { FOOTER, NAV_LINKS } from "@/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-track py-12">
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">{FOOTER.descricao}</p>
          </div>

          <div className="flex flex-col gap-4">
            <nav aria-label="Rodapé">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <a
              href={FOOTER.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-race"
            >
              <Instagram className="h-4 w-4" aria-hidden />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6">
          <p className="text-xs leading-relaxed text-zinc-600">{FOOTER.aviso}</p>
          <p className="mt-3 text-xs text-zinc-600">
            {FOOTER.copyright} · {FOOTER.cnpj} · {FOOTER.credito}
          </p>
        </div>
      </div>
    </footer>
  );
}
