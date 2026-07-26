import { Newspaper } from "lucide-react";
import { IMPRENSA } from "@/content";
import Reveal from "./Reveal";

export default function Imprensa() {
  return (
    <section className="border-t border-white/5 py-16 sm:py-20">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="kicker justify-center">/// {IMPRENSA.kicker}</span>
          <h2 className="display-title text-3xl sm:text-4xl">{IMPRENSA.title}</h2>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {IMPRENSA.veiculos.map((veiculo, i) => (
            <Reveal key={veiculo.nome} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-xl border border-white/10 bg-carbon p-7 transition hover:border-race/50">
                <Newspaper className="h-6 w-6 text-race" aria-hidden />
                <span className="mt-4 font-display text-3xl uppercase text-white">
                  {veiculo.nome}
                </span>
                <p className="mt-1 text-sm text-zinc-500">{veiculo.descricao}</p>
                <p className="mt-4 border-l-2 border-race pl-3 text-sm italic text-zinc-300">
                  “{veiculo.materia}”
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
