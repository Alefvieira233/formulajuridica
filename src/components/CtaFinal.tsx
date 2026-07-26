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

      <div className="container-content relative text-center">
        <Reveal>
          <StartLights />
          <h2 className="display-title mx-auto max-w-3xl text-5xl sm:text-6xl">
            {CTA_FINAL.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">{CTA_FINAL.subtitle}</p>
          <a href={FORM_ANCHOR} className="btn-race mt-9">
            {CTA_FINAL.cta}
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
