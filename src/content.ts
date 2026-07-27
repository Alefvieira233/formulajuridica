/**
 * Toda a copy e configuração da LP vivem aqui.
 *
 * REGRA DE OURO: esta página NÃO mostra preço, plano nem tabela de valores.
 * Ela existe para gerar lead qualificado — a conversa comercial acontece
 * com o time depois.
 *
 * Itens marcados com [AJUSTAR] / [DEFINIR] precisam ser revisados antes de publicar.
 */

// ————— Configuração de captura —————

// Webhook que recebe o lead (Zapier/Make/CRM). Vazio = só WhatsApp + Pixel. [AJUSTAR]
export const LEAD_WEBHOOK_URL = "";

// WhatsApp do comercial (formato internacional, só dígitos). [AJUSTAR]
export const WHATSAPP_NUMBER = "5500000000000";

// Promessa de velocidade de atendimento exibida na página. [AJUSTAR]
export const TEMPO_RESPOSTA = "30 minutos";

/**
 * [DEFINIR] Honorários faturados pelos clientes em 2025, em milhões de reais.
 * Use um número redondo e defensável (ex.: 40 vira "+R$ 40 mi").
 * Enquanto estiver 0, o dado não aparece na página — nada de número inventado.
 */
export const HONORARIOS_MILHOES_2025 = 0;

export const FORM_ANCHOR = "#diagnostico";

// ————— Navegação —————

export const NAV_LINKS = [
  { label: "Método", href: "#metodo" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
];

// ————— Hero —————

const STATS_BASE = [
  { value: 200, prefix: "+", suffix: "", label: "escritórios atendidos no Brasil" },
  { value: 1600, prefix: "+", suffix: "", label: "contratos fechados para um único cliente" },
];

export const HERO = {
  badge: "Marketing de alta performance para escritórios de advocacia",
  // Título fica no componente (destaque em vermelho na última palavra)
  subtitle:
    "A Fórmula Jurídica constrói o posicionamento digital e os canais de aquisição do seu escritório — tráfego, conteúdo e estrutura trabalhando juntos para gerar contratos fechados de forma constante.",
  cta: "Receber diagnóstico gratuito",
  ctaHint: "Sem compromisso · Resposta em até " + TEMPO_RESPOSTA,
  stats:
    HONORARIOS_MILHOES_2025 > 0
      ? [
          {
            value: HONORARIOS_MILHOES_2025,
            prefix: "+R$ ",
            suffix: " mi",
            label: "em honorários faturados pelos nossos clientes em 2025",
          },
          ...STATS_BASE,
        ]
      : STATS_BASE,
};

// Fitas cruzadas: números na frente, frentes do método atrás
export const TAPES = {
  frente: [
    ...(HONORARIOS_MILHOES_2025 > 0
      ? [`+R$ ${HONORARIOS_MILHOES_2025} milhões em honorários faturados em 2025`]
      : []),
    "+200 escritórios atendidos",
    "+1.600 contratos para um único cliente",
    "Método validado em todo o Brasil",
  ],
  fundo: [
    "Estrutura",
    "Conteúdo",
    "Tráfego",
    "Posicionamento digital",
    "Direcionamento comercial",
    "Previsibilidade",
  ],
};

// ————— Formulário de qualificação —————

export const FORM = {
  kicker: "Diagnóstico gratuito",
  title: "Descubra o que está travando o crescimento do seu escritório",
  subtitle:
    "Preencha em menos de 1 minuto. Nosso time analisa suas respostas e liga em até " +
    TEMPO_RESPOSTA +
    " (horário comercial) com um direcionamento inicial para o seu escritório.",
  campos: {
    estrutura: [
      "Atuo sozinho(a)",
      "Com sócio(s)",
      "Com equipe",
      "Sócio(s) + equipe",
    ],
    areas: [
      "Previdenciário",
      "Trabalhista",
      "Família e Sucessões",
      "Criminal",
      "Cível",
      "Empresarial",
      "Tributário",
      "Consumidor",
      "Outra",
    ],
    faturamento: [
      "Até R$ 20 mil/mês",
      "R$ 20 a 50 mil/mês",
      "R$ 50 a 100 mil/mês",
      "R$ 100 a 300 mil/mês",
      "Acima de R$ 300 mil/mês",
    ],
    investimento: ["Sim", "Não neste momento"],
  },
  labels: {
    nome: "Nome completo",
    email: "E-mail",
    whatsapp: "Telefone / WhatsApp",
    estrutura: "Seu escritório hoje é formado por",
    area: "Sua área de atuação",
    faturamento: "Faixa de faturamento mensal do escritório",
    investimento: "Você consegue investir em estruturar a captação do seu escritório?",
  },
  placeholderSelect: "Selecione",
  submit: "Receber diagnóstico gratuito",
  aviso: {
    kicker: "Aviso",
    title: "Não saia agora. Faltam poucos segundos para o seu escritório mudar.",
  },
  passos: [
    {
      numero: "1",
      title: "Complete o formulário",
      text: "Leva menos de 1 minuto. Garantimos a segurança total dos seus dados — usados apenas para esse contato.",
    },
    {
      numero: "2",
      title: "Receba uma ligação personalizada",
      text:
        "Em até " +
        TEMPO_RESPOSTA +
        " (horário comercial), um dos nossos especialistas liga para agendar a conversa mais importante do seu escritório.",
    },
  ],
  sucesso: {
    title: "Recebido!",
    text:
      "Nosso time vai analisar suas respostas e entrar em contato em até " +
      TEMPO_RESPOSTA +
      " (horário comercial). Se preferir adiantar:",
    ctaWhats: "Falar agora no WhatsApp",
  },
  lgpd: "Ao enviar, você concorda em receber contato do nosso time por telefone, e-mail ou WhatsApp. Seus dados não serão compartilhados com terceiros.",
};

// ————— Método (3 frentes) —————

export const METODO = {
  kicker: "Método",
  title: "Três frentes. Uma máquina.",
  subtitle:
    "Validado em mais de 200 escritórios atendidos em todo o Brasil, o método integra as três frentes que uma operação de aquisição precisa para funcionar com previsibilidade.",
  frentes: [
    {
      title: "Estrutura",
      resumo: "A base digital que sustenta a captação.",
      itens: ["Feed e vitrine profissional", "Website de autoridade", "Landing pages de conversão"],
    },
    {
      title: "Conteúdo",
      resumo: "Autoridade construída com consistência.",
      itens: ["Planejamento editorial", "Criatividade e roteiros", "Produção audiovisual"],
    },
    {
      title: "Tráfego",
      resumo: "Demanda chegando todos os dias.",
      itens: [
        "Demanda real (fundo de funil)",
        "Demanda potencial (topo de funil)",
        "Otimização por resultado",
      ],
    },
  ],
};

// ————— Ecossistema —————

export const ECOSSISTEMA = {
  kicker: "Ecossistema",
  title: "Uma máquina de vendas construída em volta do advogado",
  subtitle:
    "Mais do que anúncios: um ecossistema completo de posicionamento que transforma o advogado em referência na sua área.",
  itens: [
    "Instagram",
    "Influencers",
    "Embaixadores",
    "Parceiros",
    "Eventos",
    "Podcasts",
    "Treinamentos",
    "Rosto & marca pessoal",
  ],
  // Presença institucional do time (sem protagonismo pessoal)
  presenca: {
    tag: "Presença nacional",
    titulo: "O time Fórmula Jurídica nos palcos do Brasil",
    legenda:
      "Palestras, eventos e treinamentos pelo país — o posicionamento que a Fórmula constrói para o cliente é o mesmo que ela pratica.",
    imagem: "/images/higor-palco.jpg",
  },
};

// ————— Resultados —————

export const RESULTADOS = {
  kicker: "Resultados reais",
  title: "Quem entrou para a Fórmula, acelerou os resultados",
  caseDestaque: {
    nome: "Jhônata Correa Advocacia",
    resultado: "Expandiu a operação do Amapá para o Espírito Santo",
    texto:
      "Com posicionamento digital e canais de aquisição estruturados, o escritório ganhou previsibilidade de contratos e abriu operação em um novo estado.",
    tag: "AP → ES",
  },
  depoimentos: [
    {
      nome: "Dr. [NOME]", // [AJUSTAR] depoimento real
      area: "Direito [NICHO]",
      texto:
        "Antes, a gente vivia de indicação e não tinha previsibilidade nenhuma. Com a Fórmula, isso virou processo: hoje eu sei, no início do mês, quanto vai entrar de demanda.",
    },
    {
      nome: "Dra. [NOME]", // [AJUSTAR] depoimento real
      area: "Direito [NICHO]",
      texto:
        "O que mais me passa segurança é o comprometimento do time. Tudo que a gente precisa mudar ou melhorar, eles são muito parceiros — tratam o escritório como se fosse deles.",
    },
  ],
};

// ————— FAQ —————

export const FAQ = {
  kicker: "Dúvidas frequentes",
  title: "Perguntas e respostas",
  itens: [
    {
      pergunta: "Como funciona o diagnóstico gratuito?",
      resposta:
        "Você preenche o formulário com as informações do seu escritório. Nosso time analisa o cenário e liga em até " +
        TEMPO_RESPOSTA +
        " (horário comercial) para apresentar uma leitura inicial e os próximos passos. Sem compromisso.",
    },
    {
      pergunta: "Quanto custa o serviço?",
      resposta:
        "O investimento é definido de acordo com o momento e as necessidades específicas do seu escritório. Isso é detalhado na conversa com o nosso time durante o diagnóstico.",
    },
    {
      pergunta: "Funciona para a minha área de atuação?",
      resposta:
        "O método já foi aplicado em mais de 200 escritórios de diferentes nichos — previdenciário, trabalhista, família, empresarial, criminal, tributário e outros. As frentes de estrutura, conteúdo e tráfego se adaptam à realidade de cada área.",
    },
    {
      pergunta: "O marketing segue as normas da OAB?",
      resposta:
        "Sim. Toda a estratégia é construída dentro do Provimento 205/2021, que regulamenta o marketing jurídico. Posicionamento forte e ético — sem captação indevida de clientela.",
    },
    {
      pergunta: "Em quanto tempo aparecem os primeiros resultados?",
      resposta:
        "Depende do ponto de partida do escritório. A operação é montada para gerar demanda desde as primeiras semanas, enquanto as frentes de posicionamento e conteúdo constroem o resultado composto ao longo dos meses.",
    },
    {
      pergunta: "Meu escritório é pequeno. Faz sentido?",
      resposta:
        "Faz. Atendemos desde advogados que estão estruturando a operação até bancas consolidadas. O diagnóstico existe justamente para entender o seu momento e indicar o caminho certo para ele.",
    },
  ],
};

// ————— CTA final —————

export const CTA_FINAL = {
  title: "Vamos acelerar o crescimento do seu escritório?",
  subtitle:
    "Preencha o formulário, receba o diagnóstico gratuito e descubra o que uma máquina de aquisição estruturada faz pela sua banca.",
  cta: "Receber diagnóstico gratuito",
};

// ————— Footer —————

export const FOOTER = {
  descricao:
    "Fórmula Jurídica — programa de aceleração para escritórios de advocacia: posicionamento digital, geração de demanda e direcionamento comercial em um único sistema.",
  aviso:
    "Este site não é vinculado à OAB nem ao Facebook/Meta. As estratégias seguem o Provimento 205/2021 (marketing jurídico). Resultados citados são casos reais de clientes e variam conforme contexto, nicho e dedicação de cada operação.",
  copyright: `© ${new Date().getFullYear()} Fórmula Jurídica. Todos os direitos reservados.`,
  cnpj: "CNPJ 00.000.000/0001-00", // [AJUSTAR]
  credito: "Liderado por Higor Vieira",
  instagram: "https://instagram.com/bksmarketingperformance", // [AJUSTAR]
};
