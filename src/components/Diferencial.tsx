import { Gauge, Target, TrendingUp } from "lucide-react";
import { DIFERENCIAL } from "@/content";
import Reveal from "./Reveal";

const ICONS = [Gauge, Target, TrendingUp];

export default function Diferencial() {
  return (
    <section className="speed-lines relative border-t border-white/5 bg-carbon py-20 sm:py-28">
      <div className="container-content">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="left">
            <span className="kicker">/// {DIFERENCIAL.kicker}</span>
            <h2 className="display-title text-4xl sm:text-5xl">{DIFERENCIAL.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">{DIFERENCIAL.text}</p>
          </Reveal>

          <div className="space-y-4">
            {DIFERENCIAL.pontos.map((ponto, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal key={ponto.title} from="right" delay={i * 0.1}>
                  <div className="flex gap-5 rounded-xl border border-white/10 bg-track p-6 transition hover:border-race/50">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-race/10">
                      <Icon className="h-6 w-6 text-race" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-xl uppercase tracking-wide text-white">
                        {ponto.title}
                      </h3>
                      <p className="mt-1.5 leading-relaxed text-zinc-400">{ponto.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
