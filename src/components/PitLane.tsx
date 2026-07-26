import { motion, useReducedMotion } from "framer-motion";
import { PITLANE } from "@/content";
import Reveal from "./Reveal";

const CYCLE = 9; // segundos por volta completa da demanda

/**
 * O pit lane: a demanda percorrendo a máquina, do anúncio ao contrato.
 * A linha preenche da esquerda para a direita e cada estação acende
 * quando a demanda passa por ela. Com reduced motion, tudo fica aceso.
 */
export default function PitLane() {
  const reduced = useReducedMotion();
  const total = PITLANE.etapas.length;

  // Momento (0-1 do ciclo) em que a demanda alcança a estação i
  const center = (i: number) => 0.04 + (i / (total - 1)) * 0.84;

  return (
    <section id="maquina" className="border-t border-white/5 bg-carbon py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center">/// {PITLANE.kicker}</span>
          <h2 className="display-title text-4xl sm:text-5xl">{PITLANE.title}</h2>
          <p className="mt-4 text-lg text-zinc-400">{PITLANE.subtitle}</p>
        </Reveal>

        {/* Desktop: pista horizontal animada */}
        <Reveal delay={0.15} className="mt-16 hidden lg:block">
          <div className="relative px-4">
            {/* pista */}
            <div className="absolute left-4 right-4 top-[13px] h-1.5 overflow-hidden rounded-full bg-steel">
              {reduced ? (
                <div className="h-full w-full bg-race" />
              ) : (
                <motion.div
                  className="h-full origin-left rounded-full bg-gradient-to-r from-race-700 via-race to-[#FF6B35]"
                  animate={{ scaleX: [0, 0, 1, 1] }}
                  transition={{
                    duration: CYCLE,
                    times: [0, 0.04, 0.88, 1],
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
            </div>
            {/* demanda percorrendo */}
            {!reduced && (
              <motion.div
                aria-hidden
                className="absolute top-[5px] z-10 h-[22px] w-[22px] rounded-full border-2 border-white bg-race shadow-race"
                animate={{ left: ["1rem", "1rem", "calc(100% - 2.4rem)", "calc(100% - 2.4rem)"] }}
                transition={{
                  duration: CYCLE,
                  times: [0, 0.04, 0.88, 1],
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}

            <ol className="relative grid grid-cols-5 gap-6">
              {PITLANE.etapas.map((etapa, i) => {
                const c = center(i);
                return (
                  <li key={etapa.title} className="flex flex-col items-start">
                    {/* estação */}
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center">
                      <span className="absolute inset-1 rounded-full bg-steel ring-4 ring-carbon" />
                      {reduced ? (
                        <span className="absolute inset-1 rounded-full bg-race" />
                      ) : (
                        <motion.span
                          className="absolute inset-1 rounded-full bg-race shadow-race-sm"
                          animate={{ opacity: [0, 0, 1, 1, 0] }}
                          transition={{
                            duration: CYCLE,
                            times: [0, Math.max(0.001, c - 0.015), Math.min(0.999, c), 0.94, 1],
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      )}
                    </span>
                    <span className="mt-4 font-display text-sm uppercase tracking-[0.2em] text-race">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-xl uppercase tracking-wide text-white">
                      {etapa.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{etapa.text}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        {/* Mobile: pista vertical simples */}
        <div className="mt-12 space-y-0 lg:hidden">
          {PITLANE.etapas.map((etapa, i) => (
            <Reveal key={etapa.title} delay={i * 0.06}>
              <div className="relative flex gap-5 pb-8">
                {i < PITLANE.etapas.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-[15px] top-9 w-0.5 bg-gradient-to-b from-race to-steel"
                  />
                )}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-race font-display text-sm text-white shadow-race-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-white">
                    {etapa.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{etapa.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
