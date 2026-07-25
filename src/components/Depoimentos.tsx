import { Quote, Star } from "lucide-react";
import { DEPOIMENTOS } from "@/content";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{DEPOIMENTOS.kicker}</span>
          <h2 className="section-title">{DEPOIMENTOS.title}</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {DEPOIMENTOS.lista.map((dep) => (
            <figure
              key={dep.nome}
              className="flex flex-col rounded-xl border border-white/5 bg-navy-900 p-7"
            >
              <Quote className="h-8 w-8 text-gold-500/60" aria-hidden />
              <blockquote className="mt-4 flex-1 leading-relaxed text-slate-300">
                “{dep.texto}”
              </blockquote>
              <figcaption className="mt-6 border-t border-white/5 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{dep.nome}</p>
                    <p className="text-sm text-slate-400">{dep.area}</p>
                  </div>
                  <div className="flex gap-0.5" aria-label="5 de 5 estrelas">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" aria-hidden />
                    ))}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
