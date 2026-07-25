/**
 * Toda a copy da landing page vive aqui.
 * Ajuste textos, preços e links sem tocar nos componentes.
 *
 * ATENÇÃO: números, depoimentos e preço são PLACEHOLDERS — troque pelos reais
 * antes de publicar.
 */

// Link do checkout / inscrição (troque pelo link real: Hotmart, Kiwify, etc.)
export const CHECKOUT_URL = "#oferta";

// WhatsApp para dúvidas (formato: https://wa.me/55DDDNUMERO)
export const WHATSAPP_URL = "https://wa.me/5500000000000";

export const NAV_LINKS = [
  { label: "O Método", href: "#metodo" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Investimento", href: "#oferta" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  badge: "Método para advogados e escritórios",
  title: "Transforme sua advocacia em um negócio previsível e lucrativo",
  subtitle:
    "A Fórmula Jurídica é o passo a passo para atrair clientes qualificados, precificar com segurança e escalar seu escritório — sem depender de indicações e dentro das normas da OAB.",
  ctaPrimary: "Quero conhecer a Fórmula",
  ctaSecondary: "Ver como funciona",
  stats: [
    { value: "+500", label: "advogados formados" },
    { value: "4,9/5", label: "avaliação média" },
    { value: "7 dias", label: "de garantia total" },
  ],
};

export const PROBLEMA = {
  kicker: "Você se identifica?",
  title: "Você estudou para advogar. Não para caçar clientes.",
  subtitle:
    "A faculdade ensina Direito, mas não ensina a construir um escritório sustentável. O resultado é sempre o mesmo:",
  dores: [
    {
      title: "Agenda imprevisível",
      text: "Meses bons e meses vazios, sem saber de onde virá o próximo cliente.",
    },
    {
      title: "Honorários por baixo",
      text: "Cobrança no 'achismo', desconto por medo de perder o cliente e margem espremida.",
    },
    {
      title: "Refém de indicações",
      text: "O crescimento depende da sorte e da boa vontade dos outros, não de um sistema seu.",
    },
    {
      title: "Sem tempo para advogar",
      text: "Você vira secretário, financeiro e marketing do próprio escritório — e o processo técnico sofre.",
    },
  ],
};

export const METODO = {
  kicker: "O Método",
  title: "Os 4 pilares da Fórmula Jurídica",
  subtitle:
    "Um caminho claro, na ordem certa, para sair do improviso e construir uma máquina de clientes ética e previsível.",
  pilares: [
    {
      numero: "01",
      title: "Posicionamento",
      text: "Defina seu nicho, sua tese e sua promessa. Pare de ser 'mais um advogado' e vire a referência que o cliente procura.",
    },
    {
      numero: "02",
      title: "Atração",
      text: "Marketing jurídico ético e aprovado pelo Provimento 205/2021 da OAB: conteúdo, autoridade e canais que trazem clientes todos os dias.",
    },
    {
      numero: "03",
      title: "Conversão",
      text: "Scripts de atendimento, proposta e precificação que transformam consultas em contratos assinados — sem dar descontos por insegurança.",
    },
    {
      numero: "04",
      title: "Escala",
      text: "Processos, delegação e gestão para o escritório crescer sem depender 100% de você. Advocacia como negócio, de verdade.",
    },
  ],
};

export const BENEFICIOS = {
  kicker: "O que você recebe",
  title: "Tudo o que você precisa para aplicar a Fórmula",
  itens: [
    {
      title: "Aulas passo a passo",
      text: "Trilha completa e direta ao ponto, do posicionamento à escala, com plano de ação por módulo.",
    },
    {
      title: "Modelos prontos",
      text: "Templates de proposta de honorários, contratos de prestação de serviços e scripts de atendimento.",
    },
    {
      title: "Encontros ao vivo",
      text: "Sessões de tira-dúvidas e análise de casos reais para destravar a sua situação específica.",
    },
    {
      title: "Comunidade exclusiva",
      text: "Rede de advogados aplicando o método, trocando indicações e experiências.",
    },
    {
      title: "Calculadora de honorários",
      text: "Planilha para precificar com margem e segurança, sem chutar valores.",
    },
    {
      title: "Certificado de conclusão",
      text: "Certificado ao final da trilha para fortalecer sua autoridade profissional.",
    },
  ],
};

export const DEPOIMENTOS = {
  kicker: "Resultados reais",
  title: "Quem aplicou, aprovou",
  lista: [
    {
      nome: "Dra. Mariana S.",
      area: "Direito de Família",
      texto:
        "Em 4 meses saí de 2 para 11 contratos por mês. O pilar de precificação sozinho já pagou o investimento no primeiro cliente.",
    },
    {
      nome: "Dr. Rafael A.",
      area: "Direito Trabalhista",
      texto:
        "Eu vivia de indicação e não tinha controle nenhum. Hoje tenho um funil rodando e sei exatamente quantos clientes entram por semana.",
    },
    {
      nome: "Dra. Camila R.",
      area: "Direito Previdenciário",
      texto:
        "O método é organizado e ético. Apliquei o posicionamento, dobrei os honorários médios e os clientes pararam de pedir desconto.",
    },
  ],
};

export const OFERTA = {
  kicker: "Investimento",
  title: "Comece a aplicar a Fórmula Jurídica hoje",
  subtitle:
    "Acesso imediato a todo o método, atualizações e comunidade. Menos que o valor de um único honorário bem cobrado.",
  precoAncora: "de R$ 2.997",
  parcelas: "12x de R$ 197",
  aVista: "ou R$ 1.997 à vista",
  cta: "Garantir minha vaga",
  inclui: [
    "Trilha completa com os 4 pilares",
    "Modelos de proposta, contrato e scripts",
    "Encontros ao vivo mensais",
    "Comunidade exclusiva de advogados",
    "Calculadora de honorários",
    "Acesso por 12 meses + atualizações",
  ],
  garantia: {
    title: "Garantia incondicional de 7 dias",
    text: "Entre, assista às aulas e aplique. Se não fizer sentido para você, devolvemos 100% do valor. Sem perguntas, sem burocracia.",
  },
};

export const FAQ = {
  kicker: "Dúvidas frequentes",
  title: "Perguntas e respostas",
  itens: [
    {
      pergunta: "A Fórmula Jurídica funciona para qualquer área do Direito?",
      resposta:
        "Sim. O método é estrutural — posicionamento, atração, conversão e escala — e se adapta a qualquer nicho: família, trabalhista, previdenciário, empresarial, criminal e outros.",
    },
    {
      pergunta: "Sou recém-formado(a). Serve para mim?",
      resposta:
        "Serve, e é o melhor momento: você constrói o escritório do jeito certo desde o início, sem precisar 'desaprender' vícios depois.",
    },
    {
      pergunta: "O marketing ensinado respeita o Código de Ética da OAB?",
      resposta:
        "Totalmente. Todas as estratégias seguem o Provimento 205/2021, que regulamenta o marketing jurídico. Nada de mercantilização ou captação indevida de clientela.",
    },
    {
      pergunta: "Por quanto tempo tenho acesso?",
      resposta:
        "O acesso é de 12 meses, incluindo todas as atualizações do período e os encontros ao vivo.",
    },
    {
      pergunta: "Quanto tempo preciso dedicar por semana?",
      resposta:
        "Com 2 a 3 horas por semana você consegue avançar na trilha e aplicar o plano de ação de cada módulo.",
    },
    {
      pergunta: "E se eu não gostar?",
      resposta:
        "Você tem 7 dias de garantia incondicional. Basta pedir o reembolso dentro do prazo e devolvemos 100% do valor.",
    },
  ],
};

export const CTA_FINAL = {
  title: "Sua advocacia pode continuar no improviso. Ou pode ter um método.",
  subtitle:
    "Entre para a Fórmula Jurídica e construa um escritório que atrai, converte e cresce de forma previsível.",
  cta: "Quero entrar agora",
};

export const FOOTER = {
  descricao:
    "O método passo a passo para transformar sua advocacia em um negócio previsível e lucrativo.",
  aviso:
    "Este site não é vinculado à OAB. As estratégias ensinadas seguem o Provimento 205/2021. Resultados variam conforme dedicação e contexto de cada profissional.",
  copyright: `© ${new Date().getFullYear()} Fórmula Jurídica. Todos os direitos reservados.`,
  cnpj: "CNPJ 00.000.000/0001-00",
};
