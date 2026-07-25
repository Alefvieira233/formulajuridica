import { FOOTER, NAV_LINKS, WHATSAPP_URL } from "@/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950 py-12">
      <div className="container-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{FOOTER.descricao}</p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 transition hover:text-gold-300"
                >
                  Fale conosco
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6">
          <p className="text-xs leading-relaxed text-slate-500">{FOOTER.aviso}</p>
          <p className="mt-3 text-xs text-slate-500">
            {FOOTER.copyright} · {FOOTER.cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}
