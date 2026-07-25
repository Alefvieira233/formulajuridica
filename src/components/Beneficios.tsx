import { CheckCircle2 } from "lucide-react";
import { BENEFICIOS } from "@/content";

export default function Beneficios() {
  return (
    <section id="beneficios" className="border-t border-white/5 bg-navy-900 py-20 sm:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{BENEFICIOS.kicker}</span>
          <h2 className="section-title">{BENEFICIOS.title}</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFICIOS.itens.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/5 bg-navy-950/60 p-6 transition hover:border-gold-500/40"
            >
              <CheckCircle2 className="h-7 w-7 text-gold-400" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
