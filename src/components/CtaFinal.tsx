import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL, CTA_FINAL } from "@/content";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-navy-900 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl"
      />
      <div className="container-content relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          {CTA_FINAL.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">{CTA_FINAL.subtitle}</p>
        <a href={CHECKOUT_URL} className="btn-primary mt-9">
          {CTA_FINAL.cta}
          <ArrowRight className="h-5 w-5" aria-hidden />
        </a>
      </div>
    </section>
  );
}
