# Fórmula Jurídica — Landing Page

Landing page do projeto **Fórmula Jurídica**: método para advogados atraírem
clientes qualificados, precificarem com segurança e escalarem o escritório.

## Stack

- React 18 + TypeScript (strict)
- Vite 7
- Tailwind CSS 3.4
- lucide-react (ícones)

## Comandos

```bash
npm install      # instalar dependências
npm run dev      # dev server em http://localhost:8080
npm run build    # build de produção em dist/
npm run preview  # servir o build localmente
```

## Onde editar o conteúdo

Toda a copy (textos, preços, links, FAQ, depoimentos) está centralizada em
**`src/content.ts`**. Os componentes em `src/components/` só cuidam do layout.

Antes de publicar, ajuste em `src/content.ts`:

- `CHECKOUT_URL` — link real do checkout (Hotmart, Kiwify, Stripe, etc.).
  Hoje aponta para a seção de oferta (`#oferta`).
- `WHATSAPP_URL` — número real do WhatsApp.
- `HERO.stats` — números de prova social (placeholders).
- `DEPOIMENTOS` — depoimentos reais (os atuais são fictícios).
- `OFERTA` — preço e condições reais.
- `FOOTER.cnpj` — CNPJ real.

A headline do hero fica em `src/components/Hero.tsx` (por causa do destaque
dourado no meio da frase).

## Estrutura

```
src/
  content.ts          ← toda a copy da página
  App.tsx             ← ordem das seções
  components/
    Navbar.tsx        ← menu fixo + menu mobile
    Hero.tsx          ← dobra principal
    Problema.tsx      ← dores do público
    Metodo.tsx        ← os 4 pilares
    Beneficios.tsx    ← o que está incluso
    Depoimentos.tsx   ← prova social
    Oferta.tsx        ← preço + garantia
    Faq.tsx           ← perguntas frequentes
    CtaFinal.tsx      ← chamada final
    Footer.tsx        ← rodapé + avisos legais
```

## Deploy

O build gera arquivos estáticos em `dist/` — funciona em qualquer host
estático (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
