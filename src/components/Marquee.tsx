import { MARQUEE_ITEMS } from "@/content";

/** Faixa em movimento contínuo — reforço de posicionamento entre seções. */
export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-race py-3.5" aria-hidden>
      <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 whitespace-nowrap font-display text-sm uppercase tracking-[0.2em] text-white"
          >
            {item}
            <span className="text-white/50">///</span>
          </span>
        ))}
      </div>
    </div>
  );
}
