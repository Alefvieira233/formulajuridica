import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock, MessageCircle, PhoneCall } from "lucide-react";
import { FORM } from "@/content";
import { submitLead, whatsappUrl, type LeadData } from "@/lib/lead";
import Reveal from "./Reveal";

type FormState = LeadData;

const EMPTY: FormState = {
  nome: "",
  whatsapp: "",
  email: "",
  area: "",
  faturamento: "",
  equipe: "",
  trava: "",
  investimento: "",
};

function maskPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/** Grupo de opções em botões (radio estilizado). */
function OptionGroup({
  options,
  value,
  onChange,
  columns = 1,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  columns?: 1 | 2;
}) {
  return (
    <div className={columns === 2 ? "grid grid-cols-1 gap-2 sm:grid-cols-2" : "grid gap-2"}>
      {options.map((option) => {
        const active = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={active}
            className={`rounded-md border px-4 py-3 text-left text-sm font-medium transition ${
              active
                ? "border-race bg-race/15 text-white shadow-race-sm"
                : "border-zinc-700 bg-carbon text-zinc-300 hover:border-zinc-500"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default function LeadForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setError(null);
  };

  const totalSteps = FORM.steps.length;
  const progress = done ? 1 : (step + 1) / totalSteps;

  const stepValid = useMemo(() => {
    if (step === 0) {
      return (
        data.nome.trim().length >= 3 &&
        data.whatsapp.replace(/\D/g, "").length >= 10 &&
        isEmail(data.email)
      );
    }
    if (step === 1) {
      return data.area !== "" && data.faturamento !== "" && data.equipe !== "";
    }
    return data.trava !== "" && data.investimento !== "";
  }, [step, data]);

  const validationMessage = () => {
    if (step === 0) {
      if (data.nome.trim().length < 3) return "Informe seu nome completo.";
      if (data.whatsapp.replace(/\D/g, "").length < 10) return "Informe um WhatsApp válido com DDD.";
      if (!isEmail(data.email)) return "Informe um e-mail válido.";
    }
    return "Selecione uma opção em cada pergunta para continuar.";
  };

  const next = () => {
    if (!stepValid) {
      setError(validationMessage());
      return;
    }
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  };

  const back = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  };

  const finish = async () => {
    if (!stepValid) {
      setError(validationMessage());
      return;
    }
    setSending(true);
    await submitLead(data);
    setSending(false);
    setDone(true);
  };

  const slide = reduced
    ? {}
    : {
        initial: { opacity: 0, x: 32 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -32 },
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section id="diagnostico" className="relative border-t border-white/5 bg-carbon py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-race/10 blur-3xl"
      />
      <div className="container-content relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="kicker justify-center">/// {FORM.kicker}</span>
            <h2 className="display-title text-4xl sm:text-5xl">{FORM.title}</h2>
            <p className="mt-4 text-lg text-zinc-400">{FORM.subtitle}</p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          {/* Coluna de urgência + passos (padrão validado na referência) */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <Reveal from="left">
              <div className="rounded-2xl border border-race/40 bg-track p-7">
                <span className="kicker !mb-2">/// {FORM.aviso.kicker}</span>
                <p className="display-title text-2xl leading-tight sm:text-3xl">
                  {FORM.aviso.title}
                </p>
              </div>
            </Reveal>
            {FORM.passos.map((passo, i) => (
              <Reveal key={passo.numero} from="left" delay={0.08 + i * 0.08}>
                <div className="flex gap-5 rounded-2xl border border-white/10 bg-track p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-race font-display text-xl text-white shadow-race-sm">
                    {passo.numero}
                  </span>
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-wide text-white">
                      {passo.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{passo.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} from="right">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-track shadow-2xl">
            {/* barra de progresso estilo pit wall */}
            <div className="border-b border-white/5 px-6 py-5 sm:px-8">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span>
                  {done ? "Concluído" : `Etapa ${step + 1} de ${totalSteps} — ${FORM.steps[step]}`}
                </span>
                <span className="text-race">{Math.round(progress * 100)}%</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-steel">
                <motion.div
                  className="h-full rounded-full bg-race"
                  animate={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div key="done" {...slide} className="text-center">
                    <CheckCircle2 className="mx-auto h-14 w-14 text-race" aria-hidden />
                    <h3 className="display-title mt-5 text-3xl">{FORM.sucesso.title}</h3>
                    <p className="mx-auto mt-3 max-w-md text-zinc-400">{FORM.sucesso.text}</p>
                    <a
                      href={whatsappUrl(data)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-race mt-7"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden />
                      {FORM.sucesso.ctaWhats}
                    </a>
                  </motion.div>
                ) : step === 0 ? (
                  <motion.div key="s0" {...slide} className="space-y-5">
                    <div>
                      <label htmlFor="fj-nome" className="field-label">
                        Nome completo
                      </label>
                      <input
                        id="fj-nome"
                        type="text"
                        autoComplete="name"
                        placeholder="Dr(a). Nome Sobrenome"
                        className="field-input"
                        value={data.nome}
                        onChange={(e) => set("nome", e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="fj-whats" className="field-label">
                        WhatsApp (com DDD)
                      </label>
                      <input
                        id="fj-whats"
                        type="tel"
                        autoComplete="tel-national"
                        inputMode="numeric"
                        placeholder="(11) 99999-9999"
                        className="field-input"
                        value={data.whatsapp}
                        onChange={(e) => set("whatsapp", maskPhone(e.target.value))}
                      />
                    </div>
                    <div>
                      <label htmlFor="fj-email" className="field-label">
                        E-mail profissional
                      </label>
                      <input
                        id="fj-email"
                        type="email"
                        autoComplete="email"
                        placeholder="voce@escritorio.adv.br"
                        className="field-input"
                        value={data.email}
                        onChange={(e) => set("email", e.target.value)}
                      />
                    </div>
                  </motion.div>
                ) : step === 1 ? (
                  <motion.div key="s1" {...slide} className="space-y-6">
                    <div>
                      <span className="field-label">Principal área de atuação</span>
                      <OptionGroup
                        columns={2}
                        options={FORM.campos.areas}
                        value={data.area}
                        onChange={(v) => set("area", v)}
                      />
                    </div>
                    <div>
                      <span className="field-label">Faturamento mensal médio do escritório</span>
                      <OptionGroup
                        options={FORM.campos.faturamento}
                        value={data.faturamento}
                        onChange={(v) => set("faturamento", v)}
                      />
                    </div>
                    <div>
                      <span className="field-label">Tamanho da equipe</span>
                      <OptionGroup
                        columns={2}
                        options={FORM.campos.equipe}
                        value={data.equipe}
                        onChange={(v) => set("equipe", v)}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="s2" {...slide} className="space-y-6">
                    <div>
                      <span className="field-label">{FORM.perguntas.trava}</span>
                      <OptionGroup
                        options={FORM.campos.trava}
                        value={data.trava}
                        onChange={(v) => set("trava", v)}
                      />
                    </div>
                    <div>
                      <span className="field-label">{FORM.perguntas.investimento}</span>
                      <OptionGroup
                        options={FORM.campos.investimento}
                        value={data.investimento}
                        onChange={(v) => set("investimento", v)}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!done && (
                <>
                  {error && (
                    <p role="alert" className="mt-5 text-sm font-medium text-race">
                      {error}
                    </p>
                  )}

                  <div className="mt-8 flex items-center gap-3">
                    {step > 0 && (
                      <button type="button" onClick={back} className="btn-ghost !px-5 !text-base">
                        <ArrowLeft className="h-4 w-4" aria-hidden />
                        Voltar
                      </button>
                    )}
                    {step < totalSteps - 1 ? (
                      <button type="button" onClick={next} className="btn-race flex-1 !text-base">
                        Avançar
                        <ArrowRight className="h-5 w-5" aria-hidden />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={finish}
                        disabled={sending}
                        className="btn-race flex-1 !text-base disabled:cursor-wait disabled:opacity-70"
                      >
                        <PhoneCall className="h-5 w-5" aria-hidden />
                        {sending ? "Enviando..." : FORM.submit}
                      </button>
                    )}
                  </div>

                  <p className="mt-5 flex items-center justify-center gap-1.5 text-center text-xs text-zinc-600">
                    <Lock className="h-3.5 w-3.5" aria-hidden />
                    {FORM.lgpd}
                  </p>
                </>
              )}
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
