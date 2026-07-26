/**
 * Toda a copy e configuração da LP vivem aqui.
 *
 * REGRA DE OURO (definida no briefing): esta página NÃO mostra preço, plano
 * nem tabela de valores. Ela existe para gerar lead qualificado — a conversa
 * comercial acontece com o SDR/Closer depois.
 *
 * Itens marcados com [AJUSTAR] precisam ser revisados antes de publicar.
 */

// ————— Configuração de captura —————

// Webhook que recebe o lead (Zapier/Make/CRM). Vazio = só WhatsApp + Pixel. [AJUSTAR]
export const LEAD_WEBHOOK_URL = "";

// WhatsApp do comercial (formato internacional, só dígitos). [AJUSTAR]
export const WHATSAPP_NUMBER = "5500000000000";

// Promessa de velocidade de atendimento exibida na página. [AJUSTAR]
export const TEMPO_RESPOSTA = "30 minutos";

export const FORM_ANCHOR = "#diagnostico";

// ————— Navegação —————

export const NAV_LINKS = [
  { label: "Método", href: "#metodo" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
];

// ————— Hero —————

export const HERO = {
  badge: "Assessoria de alta performance para escritórios de advocacia",
  // Título fica no componente (destaque em vermelho no meio da frase)
  subtitle:
    "A Fórmula Jurídica constrói o posicionamento digital e os canais de aquisição comercial do seu escritório — tráfego, conteúdo e estrutura trabalhando juntos para gerar contratos fechados com previsibilidade.",
  cta: "Receber diagnóstico gratuito",
  ctaHint: "Sem compromisso · Resposta em até " + TEMPO_RESPOSTA,
  stats: [
    { value: 500, prefix: "+", suffix: "", label: "contratos fechados em 2025" },
    { value: 100, prefix: "+", suffix: "", label: "escritórios acelerados no Brasil" },
    { value: 3, prefix: "", suffix: " frentes", label: "estrutura, conteúdo e tráfego integrados" },
  ],
};

// Fitas cruzadas (padrão validado na referência): números na frente, método atrás
export const TAPES = {
  frente: [
    "+500 contratos fechados em 2025",
    "+100 escritórios acelerados",
    "Visto no Migalhas",
    "Visto na Exame",
    "Método validado no Brasil inteiro",
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

// ————— Imprensa —————

export const IMPRENSA = {
  kicker: "Autoridade reconhecida",
  title: "Quem lidera o assunto aparece na mídia",
  veiculos: [
    {
      nome: "Migalhas",
      descricao: "Referência nacional em conteúdo jurídico",
      materia: "Marketing digital para advogados",
    },
    {
      nome: "Exame",
      descricao: "Um dos maiores veículos de negócios do país",
      materia: "Advogado se torna milionário graças ao marketing digital",
    },
  ],
};

// ————— Formulário de qualificação —————

export const FORM = {
  kicker: "Diagnóstico gratuito",
  title: "Descubra o que está travando o crescimento do seu escritório",
  subtitle:
    "Preencha em menos de 1 minuto. Nosso time analisa suas respostas e liga em até " +
    TEMPO_RESPOSTA +
    " (horário comercial) com um plano inicial para o seu escritório.",
  steps: ["Você", "Escritório", "Momento"],
  campos: {
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
    equipe: ["Atuo sozinho(a)", "2 a 5 pessoas", "6 a 15 pessoas", "Mais de 15 pessoas"],
    trava: [
      "Dependo de indicações para captar",
      "Tenho demanda, mas não converto em contratos",
      "Não tenho posicionamento digital",
      "Quero escalar com previsibilidade",
    ],
    investimento: [
      "Sim, imediatamente",
      "Sim, nos próximos 3 meses",
      "Ainda não",
    ],
  },
  perguntas: {
    trava: "O que mais trava o crescimento do escritório hoje?",
    investimento:
      "Se o diagnóstico fizer sentido, você está pronto(a) para investir no crescimento do escritório?",
  },
  submit: "Solicitar meu diagnóstico",
  aviso: {
    kicker: "Aviso",
    title: "Não saia agora. Faltam poucos segundos para seu escritório mudar.",
  },
  passos: [
    {
      numero: "1",
      title: "Complete o formulário",
      text: "Leva menos de 1 minuto. Garantimos a segurança total dos seus dados — serão usados apenas para esse contato.",
    },
    {
      numero: "2",
      title: "Receba uma ligação personalizada",
      text:
        "Em até " +
        TEMPO_RESPOSTA +
        " (horário comercial), um dos nossos especialistas liga para agendar a reunião mais importante do seu escritório.",
    },
  ],
  sucesso: {
    title: "Recebido! Você está no grid.",
    text:
      "Nosso time vai analisar suas respostas e entrar em contato em até " +
      TEMPO_RESPOSTA +
      " (horário comercial). Se preferir adiantar, chame no WhatsApp:",
    ctaWhats: "Falar agora no WhatsApp",
  },
  lgpd: "Ao enviar, você concorda em receber contato do nosso time por telefone, e-mail ou WhatsApp. Seus dados não serão compartilhados com terceiros.",
};

// ————— Diferencial (posicionamento da empresa) —————

export const DIFERENCIAL = {
  kicker: "Por que a Fórmula Jurídica",
  title: "Marketing que não termina no like — termina no contrato assinado",
  text:
    "A maioria das agências entrega posts e relatórios. A Fórmula Jurídica constrói a máquina inteira: posicionamento digital, geração de demanda todos os dias e direcionamento comercial para transformar lead em contrato fechado. Gestão, marketing e vendas funcionando como um único sistema — documentado, replicável e sem depender de uma pessoa só.",
  pontos: [
    {
      title: "Demanda todos os dias",
      text: "Campanhas de tráfego que colocam seu escritório na frente de quem já procura a solução.",
    },
    {
      title: "Comercial que converte",
      text: "Treinamento e direcionamento do atendimento para os canais de aquisição — lead sem conversão é dinheiro no lixo.",
    },
    {
      title: "Previsibilidade",
      text: "Você começa o mês sabendo quanto vai entrar de demanda — e decide com base em número, não em esperança.",
    },
  ],
};

// ————— Método (3 frentes do deck) —————

export const METODO = {
  kicker: "O Método Fórmula",
  title: "Três frentes. Uma máquina.",
  subtitle:
    "Validado em mais de 100 escritórios de advocacia em todo o Brasil, o método integra as três frentes que uma operação de aquisição precisa para rodar em alta velocidade.",
  frentes: [
    {
      numero: "01",
      title: "Estrutura",
      resumo: "A base digital que sustenta a captação.",
      itens: ["Feed e vitrine profissional", "Website de autoridade", "Landing pages de conversão"],
    },
    {
      numero: "02",
      title: "Conteúdo",
      resumo: "Autoridade construída com consistência.",
      itens: ["Planejamento editorial", "Criatividade e roteiros", "Produção audiovisual"],
    },
    {
      numero: "03",
      title: "Tráfego",
      resumo: "Demanda real chegando todos os dias.",
      itens: ["Demanda real (fundo de funil)", "Demanda potencial (topo de funil)", "Otimização por resultado"],
    },
  ],
};

// ————— Pit lane (a máquina em movimento) —————

export const PITLANE = {
  kicker: "A máquina em movimento",
  title: "Do clique no anúncio ao contrato assinado",
  subtitle:
    "É assim que a demanda percorre a máquina que montamos para o seu escritório — sem depender de indicação e sem lead esquecido no WhatsApp.",
  etapas: [
    {
      title: "Anúncio",
      text: "Criativos e campanhas colocam seu escritório na frente do cliente certo, todos os dias.",
    },
    {
      title: "Lead qualificado",
      text: "A página filtra e entrega ao comercial os dados que importam: área, porte e momento.",
    },
    {
      title: "SDR em ação",
      text: "Ligação em minutos, com inteligência comercial desde o primeiro contato.",
    },
    {
      title: "Fechamento",
      text: "O closer conduz a proposta — e o contrato é assinado.",
    },
    {
      title: "Operação",
      text: "Onboarding, CRM e indicadores. Tudo documentado, tudo replicável.",
    },
  ],
};

// ————— Ecossistema (máquina de vendas do deck) —————

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
};

// ————— Resultados / case + depoimentos —————

export const RESULTADOS = {
  kicker: "Resultados reais",
  title: "Quem entrou no grid, acelerou",
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

// ————— Para quem é —————

export const PARA_QUEM = {
  kicker: "Fit ideal",
  title: "A Fórmula Jurídica é para o seu escritório?",
  sim: {
    title: "É para você, se",
    itens: [
      "Você tem um escritório estruturado ou em crescimento acelerado",
      "Sua entrega jurídica é boa — o gargalo é a captação",
      "Você quer parar de depender só de indicação",
      "Você trata (ou quer tratar) a advocacia como negócio",
    ],
  },
  nao: {
    title: "Não é para você, se",
    itens: [
      "Você procura resultado sem nenhum investimento",
      "Você não pode participar minimamente do posicionamento",
      "Você quer 'só uns posts' para dizer que tem marketing",
      "Você não tem estrutura para atender mais demanda",
    ],
  },
};

// ————— Founder —————

export const FOUNDER = {
  kicker: "Quem está no comando",
  nome: "Higor Vieira",
  cargo: "CEO & Founder · Fórmula Jurídica | BKS 360",
  frase: "Você é o piloto da sua empresa.",
  bio: [
    "À frente da BKS 360, Higor Vieira lidera a operação que já colocou mais de 100 escritórios de advocacia em outro patamar de captação — somando mais de 500 contratos fechados em 2025 — e sobe em palcos pelo país para falar de posicionamento e vendas.",
    "Na Fórmula Jurídica, você pilota. O nosso time é a engenharia e o pit stop: estrutura, estratégia e velocidade para o seu escritório cruzar a linha de chegada na frente.",
  ], // [AJUSTAR] revisar bio com o Higor
  foto: "/images/higor.jpg",
};

// ————— FAQ —————

export const FAQ = {
  kicker: "Dúvidas frequentes",
  title: "Perguntas e respostas",
  itens: [
    {
      pergunta: "Como funciona o diagnóstico gratuito?",
      resposta:
        "Você preenche o formulário com as informações do seu escritório. Nosso time analisa o cenário e entra em contato em até " +
        TEMPO_RESPOSTA +
        " (horário comercial) para apresentar uma leitura inicial e os próximos passos.",
    },
    {
      pergunta: "Quanto custa o serviço?",
      resposta:
        "O investimento depende do momento e da estrutura de cada escritório. Por isso ele é apresentado na conversa com nosso especialista, depois do diagnóstico — assim você recebe uma proposta desenhada para a sua operação, não uma tabela genérica.",
    },
    {
      pergunta: "Funciona para a minha área de atuação?",
      resposta:
        "O método já foi aplicado em mais de 100 escritórios de diferentes nichos — previdenciário, trabalhista, família, empresarial, criminal e outros. As frentes de estrutura, conteúdo e tráfego se adaptam à realidade de cada área.",
    },
    {
      pergunta: "O marketing segue as normas da OAB?",
      resposta:
        "Sim. Toda a estratégia é construída dentro do Provimento 205/2021, que regulamenta o marketing jurídico. Posicionamento forte e ético — sem captação indevida de clientela.",
    },
    {
      pergunta: "Em quanto tempo aparecem os primeiros resultados?",
      resposta:
        "Depende do ponto de partida, mas a operação é montada para gerar demanda desde as primeiras semanas — enquanto as frentes de posicionamento e conteúdo constroem o resultado composto de médio prazo.",
    },
    {
      pergunta: "Meu escritório é pequeno. Faz sentido?",
      resposta:
        "O formulário existe exatamente para isso: entender seu momento. Se ainda não for a hora, nosso time é transparente e indica o melhor caminho para chegar lá.",
    },
  ],
};

// ————— CTA final —————

export const CTA_FINAL = {
  title: "Vamos acelerar seu escritório?",
  subtitle:
    "Preencha o formulário, receba o diagnóstico gratuito e descubra o que a máquina certa de aquisição faz pela sua banca.",
  cta: "Entrar no grid agora",
};

// ————— Footer —————

export const FOOTER = {
  descricao:
    "Fórmula Jurídica é o programa de aceleração da BKS 360 para escritórios de advocacia: posicionamento digital, geração de demanda e direcionamento comercial em um único sistema.",
  aviso:
    "Este site não é vinculado à OAB nem ao Facebook/Meta. As estratégias seguem o Provimento 205/2021 (marketing jurídico). Resultados citados são casos reais de clientes e variam conforme contexto, nicho e dedicação de cada operação.",
  copyright: `© ${new Date().getFullYear()} Fórmula Jurídica · BKS 360. Todos os direitos reservados.`,
  cnpj: "CNPJ 00.000.000/0001-00", // [AJUSTAR]
  instagram: "https://instagram.com/bksmarketingperformance", // [AJUSTAR]
};
