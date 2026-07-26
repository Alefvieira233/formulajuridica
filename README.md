# Fórmula Jurídica — Landing Page de Qualificação

LP do **Fórmula Jurídica** (BKS 360): assessoria de marketing, posicionamento
e vendas para escritórios de advocacia.

**Papel da página no funil (Motor 1 — Performance):** ela **não vende e não
mostra preço**. Transforma o clique do anúncio (Meta Ads) em **lead
qualificado** — nome, contato, área, faturamento, equipe e momento — para o
fluxo comercial: `Lead → SDR → Qualificação → Closer → Fechamento`.

## Stack

- React 18 + TypeScript (strict) + Vite 7
- Tailwind CSS 3.4 · Framer Motion (animações) · lucide-react (ícones)
- Fontes self-hosted (Anton + Inter variável) — zero dependência externa em runtime
- Identidade: preto/vermelho, estética racing/F1 (mesma do deck comercial)

## Comandos

```bash
npm install      # instalar dependências
npm run dev      # dev server em http://localhost:8080
npm run build    # build de produção em dist/
npm run preview  # servir o build localmente
```

## Antes de publicar — checklist [AJUSTAR]

Tudo fica em **`src/content.ts`** (copy) e `index.html` (Pixel):

1. `LEAD_WEBHOOK_URL` — endpoint que recebe o lead (Zapier/Make/CRM).
   O payload já vai com **UTMs capturadas** (`utm_source/medium/campaign/content/term`),
   URL da página e timestamp — a "inteligência comercial" desde o primeiro clique.
2. `WHATSAPP_NUMBER` — número real do comercial (`55DDDNÚMERO`).
3. `TEMPO_RESPOSTA` — promessa real de velocidade de atendimento.
4. **Meta Pixel** — cole o snippet oficial no comentário marcado em `index.html`.
   O formulário dispara `fbq('track', 'Lead')` automaticamente no envio.
5. **Foto do Higor** — já incluída (`public/images/higor.jpg`). Revisar a bio
   em `FOUNDER` com o Higor.
6. `RESULTADOS.depoimentos` — substituir os dois depoimentos `[NOME]/[NICHO]`
   por depoimentos reais (o case Jhônata Correa AP→ES já é real, veio do deck).
7. `FOOTER` — CNPJ e link do Instagram reais.

## Regras de negócio embutidas

- **Nunca exibir preço/planos** — modelo TCV; valor só na conversa com o Closer.
- Faixas de faturamento do formulário têm granularidade em torno de
  R$ 50 mil/mês (perfil-alvo) para o SDR priorizar antes de ligar.
- Formulário em 3 etapas (Você → Escritório → Momento) com validação por
  etapa; tela de sucesso reforça a ligação e oferece atalho de WhatsApp com
  resumo do lead pré-preenchido.
- Animações respeitam `prefers-reduced-motion`.

## Estrutura

```
src/
  content.ts            ← toda a copy + configuração de captura
  lib/utm.ts            ← captura/persistência de UTMs da campanha
  lib/lead.ts           ← envio do lead (Pixel + webhook + WhatsApp)
  App.tsx               ← ordem das seções
  components/
    Navbar.tsx            menu fixo + CTA
    Hero.tsx              dobra principal + contadores animados
    Marquee.tsx           faixa em movimento (reforço de posicionamento)
    LeadForm.tsx          ★ formulário de qualificação multi-etapas
    Imprensa.tsx          Migalhas + Exame
    Diferencial.tsx       por que a Fórmula (marketing → contrato)
    Metodo.tsx            3 frentes: Estrutura / Conteúdo / Tráfego
    Ecossistema.tsx       máquina de vendas em volta do advogado
    Resultados.tsx        case AP→ES + depoimentos
    ParaQuem.tsx          fit ideal (filtro visível)
    Founder.tsx           Higor (autoridade)
    Faq.tsx               inclui resposta padrão para "quanto custa"
    CtaFinal.tsx          "Vamos acelerar seu escritório?"
    Footer.tsx            avisos legais (OAB/Meta) + CNPJ
```

## Deploy

**Produção:** https://formulajuridica.vercel.app (Vercel conectado ao branch `main` — todo push entra no ar automaticamente).


`npm run build` gera estáticos em `dist/` — Vercel, Netlify, Cloudflare Pages
ou qualquer host estático. Publique na raiz do domínio e aponte as campanhas
com os parâmetros de UTM (a LP captura e repassa sozinha).
