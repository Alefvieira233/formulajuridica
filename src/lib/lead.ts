import { LEAD_WEBHOOK_URL, WHATSAPP_NUMBER } from "@/content";
import { getUtms } from "./utm";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export interface LeadData {
  nome: string;
  whatsapp: string;
  email: string;
  area: string;
  faturamento: string;
  equipe: string;
  trava: string;
  investimento: string;
}

/**
 * Envia o lead: dispara o evento Lead do Meta Pixel e, se configurado,
 * POST no webhook (CRM/Zapier/Make). Nunca lança — a UX de sucesso não
 * pode quebrar por falha de rede do webhook.
 */
export async function submitLead(data: LeadData): Promise<void> {
  const payload = {
    ...data,
    ...getUtms(),
    pagina: window.location.href,
    enviado_em: new Date().toISOString(),
  };

  try {
    window.fbq?.("track", "Lead");
  } catch {
    // Pixel ausente — segue
  }

  if (LEAD_WEBHOOK_URL) {
    try {
      await fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      });
    } catch {
      // Falha de rede não bloqueia o fluxo do usuário
    }
  }
}

/** Link de WhatsApp com resumo do lead pré-preenchido. */
export function whatsappUrl(data?: Partial<LeadData>): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!data?.nome) {
    return `${base}?text=${encodeURIComponent(
      "Olá! Preenchi o formulário da Fórmula Jurídica e quero acelerar meu escritório."
    )}`;
  }
  const texto = [
    `Olá! Sou ${data.nome} e acabei de preencher o diagnóstico da Fórmula Jurídica.`,
    data.area ? `Área: ${data.area}` : null,
    data.faturamento ? `Faturamento: ${data.faturamento}` : null,
    data.equipe ? `Equipe: ${data.equipe}` : null,
  ]
    .filter(Boolean)
    .join("\n");
  return `${base}?text=${encodeURIComponent(texto)}`;
}
