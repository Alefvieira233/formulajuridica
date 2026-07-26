import { ArrowRight } from "lucide-react";
import { CTA_FINAL, FORM_ANCHOR } from "@/content";
import Reveal from "./Reveal";
import StartLights from "./StartLights";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-carbon py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-race/15 blur-3xl"
      />
      <div aria-hidden className="checkered pointer-events-none absolute left-0 top-0 h-5 w-full opacity-30" />

      {/* Higor fechando contrato em evento — o fechamento do deck na página */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[46%]">
        <img
          src="/images/higor-contrato.jpg"
          alt=""
          className="h-full w-full object-cover object-[35%_20%] opacity-[0.12] lg:opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/60 to-carbon/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/70" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-carbon to-transparent" />
        <div className="absolute inset-0 bg-race/10 mix-blend-multiply" />
      </div>

      <div className="container-content relative">
        <Reveal className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <div className="lg:[&>div]:justify-start">
            <StartLights />
          </div>
          <h2 className="display-title text-5xl sm:text-6xl">{CTA_FINAL.title}</h2>
          <p className="mt-5 text-lg text-zinc-400">{CTA_FINAL.subtitle}</p>

          {/* Mobile: a foto da assinatura em card visível (no desktop ela vive ao fundo) */}
          <div className="relative mx-auto mt-8 max-w-md overflow-hidden rounded-2xl border border-white/10 lg:hidden">
            <img
              src="/images/higor-contrato.jpg"
              alt="Higor Vieira assinando contrato em evento"
              className="aspect-[4/3] w-full object-cover object-[35%_15%]"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent"
            />
          </div>

          <a href={FORM_ANCHOR} className="btn-race mt-9">
            {CTA_FINAL.cta}
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
