import { Scale } from "lucide-react";
import { ECOSSISTEMA } from "@/content";
import Reveal from "./Reveal";

export default function Ecossistema() {
  return (
    <section id="ecossistema" className="border-t border-white/5 bg-carbon py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center">/// {ECOSSISTEMA.kicker}</span>
          <h2 className="display-title text-4xl sm:text-5xl">{ECOSSISTEMA.title}</h2>
          <p className="mt-4 text-lg text-zinc-400">{ECOSSISTEMA.subtitle}</p>
        </Reveal>

        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          <Reveal delay={0.05}>
            <span className="flex items-center gap-2.5 rounded-full bg-race px-6 py-3 font-display text-lg uppercase tracking-wide text-white shadow-race-sm">
              <Scale className="h-5 w-5" aria-hidden />
              Advogado no centro
            </span>
          </Reveal>
          {ECOSSISTEMA.itens.map((item, i) => (
            <Reveal key={item} delay={0.08 + i * 0.05}>
              <span className="rounded-full border border-zinc-700 bg-track px-5 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-race hover:text-white">
                {item}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
