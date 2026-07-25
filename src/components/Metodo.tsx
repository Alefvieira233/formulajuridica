import { METODO } from "@/content";

export default function Metodo() {
  return (
    <section id="metodo" className="py-20 sm:py-28">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">{METODO.kicker}</span>
          <h2 className="section-title">{METODO.title}</h2>
          <p className="mt-4 text-lg text-slate-400">{METODO.subtitle}</p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {METODO.pilares.map((pilar) => (
            <li
              key={pilar.numero}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-navy-900 p-8 transition hover:border-gold-500/40"
            >
              <span
                aria-hidden
                className="font-display absolute -right-2 -top-6 text-8xl font-extrabold text-white/5 transition group-hover:text-gold-500/10"
              >
                {pilar.numero}
              </span>
              <span className="text-sm font-bold tracking-widest text-gold-500">
                PILAR {pilar.numero}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">{pilar.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{pilar.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
