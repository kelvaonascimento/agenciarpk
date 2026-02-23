export const siteConfig = {
  name: "Agência RPK",
  description: "Percepção de valor para lançamentos imobiliários",
  tagline: "A velocidade de venda é definida no lançamento, não no stand",
  url: "https://www.agenciarpk.com",
  ogImage: "/og-image.jpg",
  cnpj: "44.229.737/0001-56",
  links: {
    instagram: "https://www.instagram.com/agenciarpk",
    facebook: "https://www.facebook.com/agenciarpk",
    whatsapp: "https://wa.me/5511978826684",
  },
  contact: {
    email: "contato@agenciarpk.com",
    whatsapp: "(11) 97882-6684",
  },
};

export const navigation = [
  { name: "Início", href: "/" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Serviços", href: "/servicos" },
  { name: "Sobre", href: "/sobre" },
  { name: "Blog", href: "/blog" },
  { name: "Diagnóstico", href: "/diagnostico" },
  { name: "Contato", href: "/contato" },
];

export const stats = [
  { value: "+5", label: "anos de experiência" },
  { value: ">96%", label: "avaliações positivas" },
  { value: "+30", label: "clientes satisfeitos" },
  { value: "+14", label: "empreendimentos lançados" },
];

export const bigStats = [
  { value: "+790M", label: "em VGV", sublabel: "lançados" },
  { value: "+5", label: "Anos", sublabel: "de experiência" },
  { value: "+14", label: "Empreendimentos", sublabel: "lançados" },
];

// Textos estratégicos do posicionamento
export const positioning = {
  bigIdea: "A velocidade de venda é definida no lançamento, não no stand",
  headline: "Percepção de valor para lançamentos imobiliários",
  subheadline: "Estrutura estratégica para vender melhor antes do stand existir. Ajudamos construtoras em transição a lançar empreendimentos verticais com velocidade de venda e segurança estratégica.",
  valueProposition: "Quem define a velocidade e o sucesso de um lançamento imobiliário hoje é a percepção de valor construída antes do stand de vendas — não durante.",
  about: "Com mais de R$ 790 milhões em VGV lançados e experiência em grandes construtoras, desenvolvemos um método próprio com apoio de IA para análise estratégica. Nosso papel é garantir que um empreendimento entre no mercado do jeito certo — desde o primeiro contato.",
  cta: "Se você está entrando no seu primeiro grande lançamento, vale conversar antes de decidir.",
  differentials: [
    "Tradução estratégica de empreendimentos em identidades que constroem percepção de valor",
    "Experiência em grandes construtoras aplicada em projetos de transição",
    "Método próprio com apoio de IA para análise e posicionamento",
    "Foco exclusivo no lançamento — onde o sucesso é definido",
  ],
  phrases: {
    hook: "Evitamos que um bom empreendimento entre no mercado do jeito errado",
    authority: "Meu trabalho começa onde o erro ainda não é visível",
    promise: "Construímos a percepção que acelera a venda",
  },
};

// ICP - Ideal Customer Profile
export const icp = {
  title: "Donos de construtoras em transição",
  description: "Empresários do setor de construção civil em transição de pequeno para médio porte, realizando seu primeiro grande lançamento residencial vertical.",
  pain: "Estou colocando o maior projeto da empresa na rua — e se ele parecer menor do que realmente é, perco velocidade de venda, margem e confiança do mercado.",
  needs: [
    "Construir percepção de valor no lançamento",
    "Vender com velocidade, margem e autoridade",
    "Competir em regiões mais disputadas",
    "Traduzir um bom empreendimento em identidade que reflete seu valor real",
  ],
};

// Serviços reestruturados como camadas estratégicas
export const services = [
  {
    id: "diagnostico-estrategico",
    title: "Diagnóstico Estratégico",
    layer: 1,
    shortDescription: "Leitura completa antes de qualquer execução",
    description:
      "Antes de desenhar qualquer coisa, é preciso entender onde o risco está. O diagnóstico estratégico é uma leitura profunda do empreendimento, do mercado e do público para identificar direções que constroem percepção de valor.",
    deliveryTime: "5-7 dias",
    features: [
      "Leitura do empreendimento",
      "Análise de mercado e concorrência",
      "Leitura do público comprador",
      "Avaliação de percepção atual",
      "Identificação de riscos no lançamento",
      "Direções estratégicas fundamentadas",
    ],
    icon: "Search",
  },
  {
    id: "identidade-estrategica",
    title: "Identidade Estratégica",
    layer: 2,
    shortDescription: "Posicionamento, narrativa e tradução visual",
    description:
      "Não criamos apenas visual — construímos decisões estratégicas que se traduzem em identidade. Do nome ao conceito, da narrativa aos materiais-chave, tudo é pensado para construir percepção de valor desde o primeiro contato.",
    deliveryTime: "2-3 semanas",
    features: [
      "Posicionamento e narrativa do empreendimento",
      "Nome e conceito estratégico",
      "Tradução visual do posicionamento",
      "Materiais-chave de lançamento",
      "Manual de identidade estratégica",
      "Aplicações para pré-venda",
    ],
    icon: "Palette",
  },
  {
    id: "sustentacao-comercial",
    title: "Sustentação Comercial",
    layer: 3,
    shortDescription: "Apoio estratégico para a equipe de vendas",
    description:
      "A percepção construída no lançamento precisa ser sustentada durante toda a fase comercial. Desenvolvemos materiais e apoio visual que mantêm a coerência estratégica do stand ao fechamento.",
    deliveryTime: "Contínuo",
    features: [
      "Materiais para corretores",
      "Apoio visual de venda",
      "Apresentações comerciais",
      "Ajustes pós-feedback do mercado",
      "Sustentação de campanha",
      "Materiais de conversão",
    ],
    icon: "TrendingUp",
  },
];

// Serviços específicos dentro das camadas (para página detalhada)
export const serviceDetails = {
  diagnostico: {
    title: "Diagnóstico Estratégico",
    subtitle: "O lançamento começa com leitura, não com design",
    description: "Antes de decidir qualquer coisa, é preciso entender onde o risco está. O diagnóstico é uma análise profunda que identifica o que pode comprometer a percepção de valor do seu empreendimento.",
    forWho: "Para construtoras entrando em seu primeiro grande lançamento vertical, que precisam de segurança estratégica antes de investir em identidade e materiais.",
    includes: [
      {
        title: "Leitura do Empreendimento",
        description: "Análise do projeto, localização, diferenciais e potenciais de comunicação.",
      },
      {
        title: "Análise de Mercado",
        description: "Mapeamento da concorrência, posicionamentos e oportunidades de diferenciação.",
      },
      {
        title: "Leitura do Público",
        description: "Entendimento do comprador, suas expectativas e critérios de decisão.",
      },
      {
        title: "Avaliação de Percepção",
        description: "Identificação de gaps entre o valor real e a percepção projetada.",
      },
      {
        title: "Mapa de Riscos",
        description: "Pontos de atenção que podem comprometer velocidade de venda.",
      },
      {
        title: "Direções Estratégicas",
        description: "Caminhos fundamentados para construir percepção de valor.",
      },
    ],
  },
  identidade: {
    title: "Identidade Estratégica",
    subtitle: "Não é estética — é decisão que impacta venda",
    description: "A identidade de um empreendimento não é apenas visual. É a tradução do posicionamento em todos os pontos de contato. Cada elemento é pensado para construir a percepção que acelera a venda.",
    forWho: "Para empreendimentos que precisam entrar no mercado com posicionamento claro, identidade coerente e materiais que comunicam valor real.",
    includes: [
      {
        title: "Posicionamento",
        description: "Definição estratégica de como o empreendimento será percebido.",
      },
      {
        title: "Narrativa",
        description: "História e conceito que conectam o empreendimento ao público.",
      },
      {
        title: "Nome e Conceito",
        description: "Criação de nome estratégico alinhado ao posicionamento.",
      },
      {
        title: "Tradução Visual",
        description: "Logo, cores, tipografia e elementos que materializam a estratégia.",
      },
      {
        title: "Materiais-Chave",
        description: "Peças essenciais para o lançamento com coerência estratégica.",
      },
      {
        title: "Manual de Identidade",
        description: "Documentação completa para manter consistência em todas as aplicações.",
      },
    ],
  },
  sustentacao: {
    title: "Sustentação Comercial",
    subtitle: "Percepção construída precisa ser mantida",
    description: "O trabalho estratégico não termina no lançamento. A sustentação comercial garante que a percepção de valor construída seja mantida durante toda a fase de vendas.",
    forWho: "Para empreendimentos em fase de comercialização que precisam de apoio visual e estratégico contínuo.",
    includes: [
      {
        title: "Materiais para Corretores",
        description: "Ferramentas que ajudam a equipe de vendas a comunicar valor.",
      },
      {
        title: "Apoio Visual de Venda",
        description: "Peças e apresentações para momentos-chave da negociação.",
      },
      {
        title: "Apresentações Comerciais",
        description: "Materiais para reuniões, eventos e apresentações de vendas.",
      },
      {
        title: "Ajustes Pós-Feedback",
        description: "Refinamentos baseados no retorno do mercado e corretores.",
      },
      {
        title: "Sustentação de Campanha",
        description: "Continuidade da comunicação durante a fase comercial.",
      },
      {
        title: "Materiais de Conversão",
        description: "Peças focadas em fechar negócios e superar objeções.",
      },
    ],
  },
};

export const tools = [
  {
    name: "Análise com IA",
    description: "Método próprio com inteligência artificial para análise estratégica.",
    percentage: 90,
  },
  {
    name: "Framer",
    description: "Do posicionamento à web com precisão.",
    percentage: 80,
  },
  {
    name: "Figma",
    description: "Onde a estratégia ganha forma visual.",
    percentage: 70,
  },
  {
    name: "Adobe Photoshop",
    description: "Execução visual com impacto.",
    percentage: 90,
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Diagnóstico",
    subtitle: "Leitura estratégica",
    duration: "5-7 dias",
    items: [
      { title: "Entendemos o empreendimento, mercado e público.", label: "Leitura completa:" },
      { title: "Identificamos riscos e oportunidades de percepção.", label: "Análise de percepção:" },
      { title: "Definimos direções estratégicas fundamentadas.", label: "Direcionamento:" },
    ],
  },
  {
    step: 2,
    title: "Posicionamento",
    subtitle: "Decisão estratégica",
    duration: "1 semana",
    items: [
      { title: "Definimos como o empreendimento será percebido.", label: "Posicionamento:" },
      { title: "Construímos a história que conecta ao público.", label: "Narrativa:" },
      { title: "Validamos a direção antes da execução.", label: "Aprovação estratégica:" },
    ],
  },
  {
    step: 3,
    title: "Tradução",
    subtitle: "Execução visual",
    duration: "1-2 semanas",
    items: [
      { title: "Traduzimos o posicionamento em identidade visual.", label: "Identidade:" },
      { title: "Desenvolvemos materiais-chave do lançamento.", label: "Materiais:" },
      { title: "Refinamos com base no seu feedback.", label: "Ajustes:" },
    ],
  },
  {
    step: 4,
    title: "Entrega",
    subtitle: "Pronto para o mercado",
    duration: "2-3 dias",
    items: [
      { title: "Identidade completa e manual de aplicação.", label: "Identidade estratégica:" },
      { title: "Todos os materiais de lançamento finalizados.", label: "Materiais-chave:" },
      { title: "Suporte para dúvidas e ajustes iniciais.", label: "Acompanhamento:" },
    ],
  },
];

export const faq = [
  {
    question: "Por que investir em percepção de valor antes do stand existir?",
    answer:
      "A velocidade de venda de um lançamento é definida antes do stand, não durante. O comprador moderno pesquisa e decide antes de visitar. Se a percepção construída não refletir o valor real do empreendimento, você perde velocidade de venda, margem e confiança do mercado.",
  },
  {
    question: "Qual a diferença entre design e decisão estratégica?",
    answer:
      "Design é estética — cores, formas, layouts. Decisão estratégica é direção que impacta venda. Antes de desenhar qualquer coisa, definimos posicionamento, narrativa e como o empreendimento será percebido. O visual vem depois, como tradução dessa estratégia.",
  },
  {
    question: "Como funciona o diagnóstico estratégico?",
    answer:
      "O diagnóstico é uma leitura completa antes de qualquer execução. Analisamos o empreendimento, mercado, concorrência e público para identificar riscos e oportunidades. O resultado são direções estratégicas fundamentadas para construir percepção de valor.",
  },
  {
    question: "Vocês trabalham com qualquer construtora?",
    answer:
      "Nosso foco é em construtoras em transição — empresas passando de pequeno para médio porte, realizando seu primeiro grande lançamento residencial vertical. Se você está nessa fase e precisa de segurança estratégica, vale conversar.",
  },
  {
    question: "Qual o prazo médio para um projeto completo?",
    answer:
      "Um projeto completo (diagnóstico + identidade estratégica + materiais de lançamento) leva em média 3-4 semanas. O prazo exato depende da complexidade do empreendimento e do escopo definido após o diagnóstico.",
  },
  {
    question: "Como funciona o investimento?",
    answer:
      "O investimento é definido após entendermos o projeto. Trabalhamos com diferentes modelos: projeto fechado, pacote de lançamento ou acompanhamento contínuo. O primeiro passo é sempre uma conversa para entender sua necessidade.",
  },
];

// Editorias do blog
export const blogCategories = [
  {
    id: "mercado",
    name: "Mercado",
    description: "Análises e interpretações estratégicas do cenário imobiliário",
  },
  {
    id: "cases",
    name: "Cases",
    description: "Histórias reais de transformação através de posicionamento estratégico",
  },
  {
    id: "cultura",
    name: "Cultura",
    description: "Comportamento do comprador e tendências de decisão",
  },
  {
    id: "noticias",
    name: "Notícias",
    description: "Fatos do mercado com análise de impacto no lançamento",
  },
  {
    id: "metodo",
    name: "Método",
    description: "Bastidores do nosso processo e forma de pensar",
  },
];
