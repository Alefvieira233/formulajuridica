import { Mic, Scale } from "lucide-react";
import { ECOSSISTEMA } from "@/content";
import Reveal from "./Reveal";

export default function Ecossistema() {
  const { presenca } = ECOSSISTEMA;

  return (
    <section id="ecossistema" className="border-t border-white/5 bg-carbon pt-20 sm:pt-28">
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

      {/* Presença do time — faixa cinematográfica, sem protagonismo pessoal */}
      <Reveal delay={0.1} className="mt-16">
        <figure className="relative h-[340px] overflow-hidden sm:h-[420px] lg:h-[480px]">
          <img
            src={presenca.imagem}
            alt={presenca.titulo}
            className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
            loading="lazy"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-carbon via-transparent to-track" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-track/70 via-transparent to-transparent" />

          <figcaption className="container-content absolute inset-x-0 bottom-0 pb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-race px-4 py-1.5 font-display text-sm uppercase tracking-widest text-white shadow-race-sm">
              <Mic className="h-4 w-4" aria-hidden />
              {presenca.tag}
            </span>
            <p className="display-title mt-4 max-w-xl text-3xl sm:text-4xl">{presenca.titulo}</p>
            <p className="mt-2 max-w-xl text-zinc-300">{presenca.legenda}</p>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
