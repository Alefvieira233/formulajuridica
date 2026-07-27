import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lock, MessageCircle } from "lucide-react";
import { FORM } from "@/content";
import { submitLead, whatsappUrl, type LeadData } from "@/lib/lead";
import Reveal from "./Reveal";

const EMPTY: LeadData = {
  nome: "",
  email: "",
  whatsapp: "",
  estrutura: "",
  area: "",
  faturamento: "",
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

/** Select estilizado — mesma linguagem visual dos inputs. */
function Select({
  id,
  label,
  options,
  value,
  onChange,
}: {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <select
        id={id}
        className={`field-input field-select ${value ? "text-white" : "text-zinc-500"}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{FORM.placeholderSelect}</option>
        {options.map((option) => (
          <option key={option} value={option} className="text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function LeadForm() {
  const [data, setData] = useState<LeadData>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  const set = <K extends keyof LeadData>(key: K, value: LeadData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setError(null);
  };

  const validate = (): string | null => {
    if (data.nome.trim().length < 3) return "Informe seu nome completo.";
    if (!isEmail(data.email)) return "Informe um e-mail válido.";
    if (data.whatsapp.replace(/\D/g, "").length < 10)
      return "Informe um telefone válido com DDD.";
    if (!data.estrutura) return "Selecione como o seu escritório é formado hoje.";
    if (!data.area) return "Selecione a sua área de atuação.";
    if (!data.faturamento) return "Selecione a faixa de faturamento do escritório.";
    if (!data.investimento) return "Responda a última pergunta para enviar.";
    return null;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const problem = validate();
    if (problem) {
      setError(problem);
      return;
    }
    setSending(true);
    await submitLead(data);
    setSending(false);
    setDone(true);
  };

  const fade = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -12 },
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
          {/* Urgência + o que acontece depois do envio */}
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

          {/* Formulário — uma única seção contínua */}
          <Reveal delay={0.1} from="right">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-track shadow-2xl">
              <span aria-hidden className="block h-1 w-full bg-race" />
              <div className="px-6 py-8 sm:px-8">
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.div key="done" {...fade} className="py-6 text-center">
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
                  ) : (
                    <motion.form key="form" {...fade} onSubmit={handleSubmit} noValidate>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="fj-nome" className="field-label">
                            {FORM.labels.nome}
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
                          <label htmlFor="fj-email" className="field-label">
                            {FORM.labels.email}
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

                        <div>
                          <label htmlFor="fj-whats" className="field-label">
                            {FORM.labels.whatsapp}
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

                        <Select
                          id="fj-estrutura"
                          label={FORM.labels.estrutura}
                          options={FORM.campos.estrutura}
                          value={data.estrutura}
                          onChange={(v) => set("estrutura", v)}
                        />

                        <Select
                          id="fj-area"
                          label={FORM.labels.area}
                          options={FORM.campos.areas}
                          value={data.area}
                          onChange={(v) => set("area", v)}
                        />

                        <Select
                          id="fj-faturamento"
                          label={FORM.labels.faturamento}
                          options={FORM.campos.faturamento}
                          value={data.faturamento}
                          onChange={(v) => set("faturamento", v)}
                        />

                        <Select
                          id="fj-investimento"
                          label={FORM.labels.investimento}
                          options={FORM.campos.investimento}
                          value={data.investimento}
                          onChange={(v) => set("investimento", v)}
                        />
                      </div>

                      {error && (
                        <p role="alert" className="mt-5 text-sm font-medium text-race">
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={sending}
                        className="btn-race mt-7 w-full disabled:cursor-wait disabled:opacity-70"
                      >
                        {sending ? "Enviando..." : FORM.submit}
                        {!sending && <ArrowRight className="h-5 w-5" aria-hidden />}
                      </button>

                      <p className="mt-5 flex items-start justify-center gap-1.5 text-center text-xs leading-relaxed text-zinc-600">
                        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                        {FORM.lgpd}
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
