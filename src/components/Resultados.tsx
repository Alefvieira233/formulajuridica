import { MapPin, Quote } from "lucide-react";
import { RESULTADOS } from "@/content";
import Reveal from "./Reveal";

export default function Resultados() {
  return (
    <section id="resultados" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-race/10 blur-3xl"
      />
      <div className="container-content relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center">/// {RESULTADOS.kicker}</span>
          <h2 className="display-title text-4xl sm:text-5xl">{RESULTADOS.title}</h2>
        </Reveal>

        {/* Case destaque */}
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-race/40 bg-gradient-to-br from-carbon to-track p-8 shadow-race-sm sm:p-10">
            <span
              aria-hidden
              className="checkered pointer-events-none absolute right-0 top-0 h-full w-16 opacity-25"
            />
            <span className="inline-flex items-center gap-2 rounded-full bg-race px-4 py-1.5 font-display text-sm uppercase tracking-widest text-white">
              <MapPin className="h-4 w-4" aria-hidden />
              {RESULTADOS.caseDestaque.tag}
            </span>
            <h3 className="display-title mt-5 max-w-2xl text-3xl sm:text-4xl">
              {RESULTADOS.caseDestaque.resultado}
            </h3>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
              {RESULTADOS.caseDestaque.texto}
            </p>
            <p className="mt-6 font-display text-lg uppercase tracking-wide text-zinc-300">
              — {RESULTADOS.caseDestaque.nome}
            </p>
          </div>
        </Reveal>

        {/* Depoimentos */}
        <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
          {RESULTADOS.depoimentos.map((dep, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-carbon p-7">
                <Quote className="h-7 w-7 text-race/70" aria-hidden />
                <blockquote className="mt-4 flex-1 leading-relaxed text-zinc-300">
                  “{dep.texto}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/5 pt-5">
                  <p className="font-semibold text-white">{dep.nome}</p>
                  <p className="text-sm text-zinc-500">{dep.area}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Prints de depoimentos — prova social crua */}
        {RESULTADOS.prints.length > 0 && (
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESULTADOS.prints.map((print, i) => (
              <Reveal key={print.src} delay={Math.min(i * 0.06, 0.24)}>
                <figure className="overflow-hidden rounded-xl border border-white/10 bg-carbon transition hover:border-race/50">
                  <img
                    src={print.src}
                    alt={print.alt}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
