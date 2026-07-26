import { Mic } from "lucide-react";
import { PALCO } from "@/content";
import Reveal from "./Reveal";

/** Faixa cinematográfica full-width: o founder no palco (prova do ecossistema). */
export default function Palco() {
  return (
    <section className="relative border-t border-white/5 bg-carbon">
      <Reveal>
        <figure className="relative h-[380px] overflow-hidden sm:h-[460px] lg:h-[520px]">
          <img
            src={PALCO.imagem}
            alt={PALCO.titulo}
            className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
            loading="lazy"
          />
          {/* vinhetas para integrar ao tema e segurar a legenda */}
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-carbon via-transparent to-track" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-track/70 via-transparent to-transparent" />

          <figcaption className="container-content absolute inset-x-0 bottom-0 pb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-race px-4 py-1.5 font-display text-sm uppercase tracking-widest text-white shadow-race-sm">
              <Mic className="h-4 w-4" aria-hidden />
              {PALCO.tag}
            </span>
            <p className="display-title mt-4 max-w-xl text-3xl sm:text-4xl">{PALCO.titulo}</p>
            <p className="mt-2 max-w-xl text-zinc-300">{PALCO.legenda}</p>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
