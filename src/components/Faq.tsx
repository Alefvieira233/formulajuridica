import { ChevronDown } from "lucide-react";
import { FAQ } from "@/content";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section id="faq" className="border-t border-white/5 py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center">/// {FAQ.kicker}</span>
          <h2 className="display-title text-4xl sm:text-5xl">{FAQ.title}</h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQ.itens.map((item, i) => (
            <Reveal key={item.pergunta} delay={Math.min(i * 0.05, 0.25)}>
              <details className="group rounded-xl border border-white/10 bg-carbon open:border-race/50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {item.pergunta}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-race transition group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="px-5 pb-5 leading-relaxed text-zinc-400">{item.resposta}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
