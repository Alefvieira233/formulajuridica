import { AlertTriangle } from "lucide-react";
import { PROBLEMA } from "@/content";

export default function Problema() {
  return (
    <section id="problema" className="border-t border-white/5 bg-navy-900 py-20 sm:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{PROBLEMA.kicker}</span>
          <h2 className="section-title">{PROBLEMA.title}</h2>
          <p className="mt-4 text-lg text-slate-400">{PROBLEMA.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PROBLEMA.dores.map((dor) => (
            <div
              key={dor.title}
              className="flex gap-4 rounded-xl border border-white/5 bg-navy-950/60 p-6"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                <AlertTriangle className="h-5 w-5 text-red-400" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{dor.title}</h3>
                <p className="mt-1.5 leading-relaxed text-slate-400">{dor.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
