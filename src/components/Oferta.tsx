import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { CHECKOUT_URL, OFERTA } from "@/content";

export default function Oferta() {
  return (
    <section id="oferta" className="border-t border-white/5 bg-navy-900 py-20 sm:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{OFERTA.kicker}</span>
          <h2 className="section-title">{OFERTA.title}</h2>
          <p className="mt-4 text-lg text-slate-400">{OFERTA.subtitle}</p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-gold-500/30 bg-navy-950">
          <div className="grid md:grid-cols-2">
            {/* O que está incluso */}
            <div className="p-8 sm:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                Está incluso
              </h3>
              <ul className="mt-5 space-y-3.5">
                {OFERTA.inclui.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preço */}
            <div className="flex flex-col justify-center border-t border-white/5 bg-gold-500/5 p-8 text-center sm:p-10 md:border-l md:border-t-0">
              <p className="text-sm text-slate-400 line-through">{OFERTA.precoAncora}</p>
              <p className="mt-1 font-display text-4xl font-extrabold text-white">
                {OFERTA.parcelas}
              </p>
              <p className="mt-1 text-slate-400">{OFERTA.aVista}</p>
              <a href={CHECKOUT_URL} className="btn-primary mt-8 w-full">
                {OFERTA.cta}
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
              <p className="mt-4 text-xs text-slate-500">
                Pagamento seguro · Acesso imediato
              </p>
            </div>
          </div>

          {/* Garantia */}
          <div className="flex items-start gap-4 border-t border-white/5 bg-navy-900/60 p-8 sm:items-center sm:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500/10">
              <ShieldCheck className="h-6 w-6 text-gold-400" aria-hidden />
            </span>
            <div>
              <h3 className="font-semibold text-white">{OFERTA.garantia.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{OFERTA.garantia.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
