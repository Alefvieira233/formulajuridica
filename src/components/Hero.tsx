import { ArrowRight, Sparkles } from "lucide-react";
import { CHECKOUT_URL, HERO } from "@/content";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
      {/* brilho decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[60rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl"
      />

      <div className="container-content relative text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-navy-800/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          {HERO.badge}
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          Transforme sua advocacia em um negócio{" "}
          <span className="text-gold-400">previsível e lucrativo</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          {HERO.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={CHECKOUT_URL} className="btn-primary w-full sm:w-auto">
            {HERO.ctaPrimary}
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
          <a href="#metodo" className="btn-secondary w-full sm:w-auto">
            {HERO.ctaSecondary}
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {HERO.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col rounded-xl border border-white/5 bg-navy-900/60 px-6 py-5"
            >
              <dt className="order-2 text-sm text-slate-400">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold text-gold-400">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
