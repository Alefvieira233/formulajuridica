import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ChevronDown, Flag } from "lucide-react";
import { PITLANE } from "@/content";
import Reveal from "./Reveal";

// Janela do trajeto dentro do progresso de scroll da seção
const START = 0.08;
const END = 0.9;

/** Fração da pista onde fica a estação i (alinhada ao grid de 5 colunas). */
function stationFraction(i: number) {
  return i * 0.2 + 0.015;
}

function Station({
  title,
  text,
  index,
  progress,
}: {
  title: string;
  text: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const c = START + stationFraction(index) * (END - START);
  const glow = useTransform(progress, [c - 0.035, c], [0, 1]);
  const titleColor = useTransform(progress, [c - 0.035, c], ["#52525B", "#FFFFFF"]);
  const numberColor = useTransform(progress, [c - 0.035, c], ["#52525B", "#E10600"]);

  return (
    <li className="flex flex-col items-start">
      <span className="relative z-10 flex h-8 w-8 items-center justify-center">
        <span className="absolute inset-1 rounded-full bg-steel ring-4 ring-carbon" />
        <motion.span
          style={{ opacity: glow }}
          className="absolute inset-1 rounded-full bg-race shadow-race-sm"
        />
      </span>
      <motion.span
        style={{ color: numberColor }}
        className="mt-4 font-display text-sm uppercase tracking-[0.2em]"
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>
      <motion.h3
        style={{ color: titleColor }}
        className="mt-1 font-display text-xl uppercase tracking-wide"
      >
        {title}
      </motion.h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{text}</p>
    </li>
  );
}

/**
 * A máquina dirigida pelo scroll (analogia dos sites com vídeo scrollável):
 * a seção trava na tela e é o scroll do visitante que leva a demanda do
 * anúncio até o contrato — cada estação acende quando a demanda passa.
 * No mobile, versão vertical estática (leve e direta).
 */
export default function PitLane() {
  const scrubRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrubRef,
    offset: ["start start", "end end"],
  });

  const fill = useTransform(scrollYProgress, [START, END], [0, 1]);
  const dotLeft = useTransform(scrollYProgress, [START, END], ["0%", "100%"]);
  const hintOpacity = useTransform(scrollYProgress, [0.02, 0.14], [1, 0]);
  const flagOpacity = useTransform(scrollYProgress, [END, END + 0.05], [0, 1]);
  const flagY = useTransform(scrollYProgress, [END, END + 0.05], [8, 0]);

  return (
    <section id="maquina" className="border-t border-white/5 bg-carbon">
      {/* Desktop: experiência presa na tela, dirigida pelo scroll */}
      <div ref={scrubRef} className="relative hidden lg:block lg:h-[260vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center">
          <div className="container-content">
            <div className="mx-auto max-w-2xl text-center">
              <span className="kicker justify-center">/// {PITLANE.kicker}</span>
              <h2 className="display-title text-4xl sm:text-5xl">{PITLANE.title}</h2>
              <p className="mt-4 text-lg text-zinc-400">{PITLANE.subtitle}</p>
            </div>

            <div className="relative mt-16 px-4">
              {/* pista */}
              <div className="absolute left-4 right-4 top-[13px] h-1.5 overflow-hidden rounded-full bg-steel">
                <motion.div
                  style={{ scaleX: fill }}
                  className="h-full origin-left rounded-full bg-gradient-to-r from-race-700 via-race to-[#FF6B35]"
                />
              </div>
              {/* demanda (dirigida pelo scroll) */}
              <div aria-hidden className="absolute left-4 right-4 top-0 h-8">
                <motion.div
                  style={{ left: dotLeft }}
                  className="absolute top-[5px] z-10 h-[22px] w-[22px] -translate-x-1/2 rounded-full border-2 border-white bg-race shadow-race"
                />
              </div>

              <ol className="relative grid grid-cols-5 gap-6">
                {PITLANE.etapas.map((etapa, i) => (
                  <Station
                    key={etapa.title}
                    title={etapa.title}
                    text={etapa.text}
                    index={i}
                    progress={scrollYProgress}
                  />
                ))}
              </ol>
            </div>

            {/* dica de scroll ↔ bandeirada de chegada */}
            <div className="relative mt-12 h-8">
              <motion.p
                style={{ opacity: hintOpacity }}
                className="absolute inset-0 flex items-center justify-center gap-2 text-sm text-zinc-500"
              >
                <ChevronDown className="h-4 w-4 animate-bounce text-race" aria-hidden />
                Role para acionar a máquina — é o seu scroll que move a demanda
              </motion.p>
              <motion.p
                style={{ opacity: flagOpacity, y: flagY }}
                className="absolute inset-0 flex items-center justify-center gap-2 font-display text-lg uppercase tracking-widest text-white"
              >
                <Flag className="h-5 w-5 text-race" aria-hidden />
                Contrato assinado. Próxima volta.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: pista vertical simples */}
      <div className="container-content py-20 lg:hidden">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center">/// {PITLANE.kicker}</span>
          <h2 className="display-title text-4xl">{PITLANE.title}</h2>
          <p className="mt-4 text-lg text-zinc-400">{PITLANE.subtitle}</p>
        </Reveal>
        <div className="mt-12">
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
