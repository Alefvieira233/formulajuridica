import { FORM_ANCHOR, FOUNDER } from "@/content";
import Reveal from "./Reveal";

export default function Founder() {
  return (
    <section className="speed-lines relative overflow-hidden py-20 sm:py-28">
      <div className="container-content">
        <div className="grid items-center gap-12 lg:grid-cols-[2fr_3fr]">
          <Reveal from="left" className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-race/15 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-carbon">
              <img
                src={FOUNDER.foto}
                alt={`Foto de ${FOUNDER.nome}`}
                className="aspect-[4/5] w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-track via-track/70 to-transparent p-5 pt-14">
                <p className="font-display text-2xl uppercase text-white">{FOUNDER.nome}</p>
                <p className="text-sm font-semibold text-race">{FOUNDER.cargo}</p>
              </div>
            </div>
          </Reveal>

          <Reveal from="right">
            <span className="kicker">/// {FOUNDER.kicker}</span>
            <h2 className="display-title text-4xl sm:text-5xl">
              Você é o <span className="text-race">piloto</span> da sua empresa
            </h2>
            {FOUNDER.bio.map((paragrafo) => (
              <p key={paragrafo} className="mt-5 text-lg leading-relaxed text-zinc-400">
                {paragrafo}
              </p>
            ))}
            <a href={FORM_ANCHOR} className="btn-race mt-8">
              Quero esse time na minha operação
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
