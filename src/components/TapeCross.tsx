import { TAPES } from "@/content";

function Tape({ items, reverse }: { items: string[]; reverse?: boolean }) {
  // 4 cópias: o keyframe desloca -50% (2 cópias), então o loop é perfeito
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div
      className={`flex w-max items-center py-3 motion-reduce:animate-none ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {loop.map((item, i) => (
        <span
          key={i}
          className="mx-5 flex items-center gap-5 whitespace-nowrap font-display text-sm uppercase tracking-[0.18em]"
        >
          {item}
          <span className="opacity-50">///</span>
        </span>
      ))}
    </div>
  );
}

/** Fitas cruzadas de prova social (padrão da referência, em vermelho racing). */
export default function TapeCross() {
  return (
    <div className="relative -mt-2 h-36 overflow-hidden sm:h-40" aria-hidden>
      {/* fita de fundo (escura, sentido contrário) */}
      <div className="absolute left-[-4%] right-[-4%] top-1/2 -translate-y-1/2 rotate-[2.2deg] overflow-hidden border-y border-race/40 bg-carbon text-zinc-500">
        <Tape items={TAPES.fundo} reverse />
      </div>
      {/* fita da frente (vermelha, com os números) */}
      <div className="absolute left-[-4%] right-[-4%] top-1/2 -translate-y-1/2 rotate-[-2.2deg] overflow-hidden bg-race text-white shadow-race-sm">
        <Tape items={TAPES.frente} />
      </div>
    </div>
  );
}
