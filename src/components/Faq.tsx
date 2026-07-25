import { ChevronDown } from "lucide-react";
import { FAQ } from "@/content";

export default function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{FAQ.kicker}</span>
          <h2 className="section-title">{FAQ.title}</h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQ.itens.map((item) => (
            <details
              key={item.pergunta}
              className="group rounded-xl border border-white/5 bg-navy-900 open:border-gold-500/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-medium text-white [&::-webkit-details-marker]:hidden">
                {item.pergunta}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-gold-400 transition group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-slate-400">{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
