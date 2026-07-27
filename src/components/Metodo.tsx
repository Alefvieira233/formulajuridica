import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { FORM_ANCHOR, METODO } from "@/content";
import Reveal from "./Reveal";

export default function Metodo() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Parallax de profundidade no título de fundo (guia o olho, não distrai)
  const parallaxY = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section ref={sectionRef} id="metodo" className="relative overflow-hidden py-20 sm:py-28">
      <motion.span
        aria-hidden
        style={reduced ? undefined : { y: parallaxY }}
        className="display-title text-stroke pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9rem] opacity-60 sm:text-[13rem]"
      >
        MÉTODO
      </motion.span>

      <div className="container-content relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center">/// {METODO.kicker}</span>
          <h2 className="display-title text-4xl sm:text-5xl">{METODO.title}</h2>
          <p className="mt-4 text-lg text-zinc-400">{METODO.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {METODO.frentes.map((frente, i) => (
            <Reveal key={frente.title} delay={i * 0.12}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-carbon p-8 transition hover:border-race/60 hover:shadow-race-sm">
                <span
                  aria-hidden
                  className="display-title pointer-events-none absolute -right-2 -top-10 text-[9rem] text-white/5 transition group-hover:text-race/10"
                >
                  {frente.title.charAt(0)}
                </span>
                <span className="font-display text-sm uppercase tracking-[0.25em] text-race">
                  /// Frente {i + 1}
                </span>
                <h3 className="display-title mt-3 text-4xl">{frente.title}</h3>
                <p className="mt-2 text-zinc-400">{frente.resumo}</p>
                <ul className="mt-6 space-y-3 border-t border-white/5 pt-6">
                  {frente.itens.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-race" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <a href={FORM_ANCHOR} className="btn-race">
            Receber diagnóstico gratuito
          </a>
        </Reveal>
      </div>
    </section>
  );
}
