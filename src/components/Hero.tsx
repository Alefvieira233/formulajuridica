import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Flag } from "lucide-react";
import { FORM_ANCHOR, HERO } from "@/content";
import Counter from "./Counter";
import SparkField from "./SparkField";

export default function Hero() {
  const reduced = useReducedMotion();

  const enter = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="inicio" className="speed-lines relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      {/* farol vermelho ao fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-56 left-1/2 h-[36rem] w-[70rem] -translate-x-1/2 rounded-full bg-race/15 blur-3xl"
      />
      {/* Higor no palco, fundido ao fundo (foto ancorada à direita no desktop) */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[56%]">
        <motion.img
          src="/images/higor-hero.jpg"
          alt=""
          className="h-full w-full object-cover object-[68%_18%] opacity-[0.16] saturate-[1.05] lg:opacity-80"
          initial={reduced ? undefined : { scale: 1.06 }}
          animate={reduced ? undefined : { scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* máscaras: funde a foto no preto por todos os lados */}
        <div className="absolute inset-0 bg-gradient-to-r from-track via-track/55 to-transparent lg:via-track/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-track via-transparent to-track/80" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-track to-transparent" />
        {/* leve véu vermelho para casar com a identidade */}
        <div className="absolute inset-0 bg-race/10 mix-blend-multiply" />
      </div>

      {/* fagulhas (estética do deck) — na frente da foto */}
      <SparkField className="pointer-events-none absolute inset-0 h-full w-full" />

      {/* faixa quadriculada no rodapé do hero */}
      <div aria-hidden className="checkered pointer-events-none absolute bottom-0 left-0 h-6 w-full opacity-40" />

      <div className="container-content relative">
        <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <motion.span
            {...enter(0)}
            className="inline-flex items-center gap-2 rounded-full border border-race/40 bg-carbon/80 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-zinc-200"
          >
            <Flag className="h-3.5 w-3.5 text-race" aria-hidden />
            {HERO.badge}
          </motion.span>

          <motion.h1
            {...enter(0.08)}
            className="display-title mt-7 text-5xl sm:text-6xl lg:text-[4.6rem]"
          >
            Seu escritório na{" "}
            <br className="hidden lg:block" />
            <span className="text-race drop-shadow-[0_0_25px_rgba(225,6,0,0.45)]">
              pole position
            </span>{" "}
            da captação
          </motion.h1>

          <motion.p
            {...enter(0.16)}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 lg:mx-0 lg:max-w-xl"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            {...enter(0.24)}
            className="mt-10 flex flex-col items-center gap-3 lg:items-start"
          >
            <a href={FORM_ANCHOR} className="btn-race w-full sm:w-auto">
              {HERO.cta}
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
            <span className="text-sm text-zinc-400">{HERO.ctaHint}</span>
          </motion.div>

          {/* Mobile: a foto do hero em card visível (no desktop ela vive ao fundo) */}
          <motion.div
            {...enter(0.3)}
            className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 lg:hidden"
          >
            <img
              src="/images/higor-hero.jpg"
              alt="Higor Vieira apresentando a Máquina de Vendas no palco"
              className="aspect-[4/3] w-full object-cover object-[68%_12%]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-track/70 via-transparent to-transparent"
            />
          </motion.div>
        </div>

        <motion.dl
          {...enter(0.34)}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 lg:mx-0"
        >
          {HERO.stats.map((stat) => (
            <div key={stat.label} className="plate bg-white/10 p-px transition hover:bg-race/60">
              <div className="plate carbon-texture relative flex h-full flex-col bg-carbon px-6 py-6">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-race to-transparent opacity-60"
                />
                <dd className="font-display text-4xl text-white">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
                <dt className="order-2 mt-1.5 text-sm text-zinc-500">{stat.label}</dt>
              </div>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
