import { CheckCircle2, XCircle } from "lucide-react";
import { PARA_QUEM } from "@/content";
import Reveal from "./Reveal";

export default function ParaQuem() {
  return (
    <section className="border-t border-white/5 bg-carbon py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center">/// {PARA_QUEM.kicker}</span>
          <h2 className="display-title text-4xl sm:text-5xl">{PARA_QUEM.title}</h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal from="left">
            <div className="h-full rounded-2xl border border-race/40 bg-track p-8">
              <h3 className="display-title text-2xl text-race">{PARA_QUEM.sim.title}</h3>
              <ul className="mt-6 space-y-4">
                {PARA_QUEM.sim.itens.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-race" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal from="right">
            <div className="h-full rounded-2xl border border-white/10 bg-track p-8 opacity-90">
              <h3 className="display-title text-2xl text-zinc-500">{PARA_QUEM.nao.title}</h3>
              <ul className="mt-6 space-y-4">
                {PARA_QUEM.nao.itens.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-zinc-500">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-zinc-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
