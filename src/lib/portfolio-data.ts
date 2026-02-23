import type { PortfolioItem } from "@/types";

// Categorias baseadas nos serviços da agência
export const portfolioCategories = [
  "Diagnóstico Estratégico",
  "Identidade Estratégica",
  "Sustentação Comercial",
] as const;

// DADOS DO PORTFÓLIO - Projetos reais da Agência RPK
export const portfolioItems: PortfolioItem[] = [
  {
    id: "quinta-do-lago-lake-victoria",
    title: "Quinta do Lago Lake Victória",
    client: "Lake Victória",
    category: "Identidade Estratégica",
    description: "Projeto completo de posicionamento, narrativa e identidade visual para o empreendimento Quinta do Lago. Desenvolvemos toda a estratégia de percepção de valor e materiais-chave para o lançamento.",
    image: "/portfolio/quinta-do-lago.jpg",
    images: [
      "/portfolio/quinta-do-lago-1.jpg",
      "/portfolio/quinta-do-lago-2.jpg",
      "/portfolio/quinta-do-lago-3.jpg",
    ],
    featured: true,
    date: "17/01/2025",
  },
  {
    id: "le-vert-residence",
    title: "Le Vert Residence",
    client: "Le Vert",
    category: "Sustentação Comercial",
    description: "Materiais de apoio à equipe de vendas e criativos para sustentação da campanha. Desenvolvemos peças para redes sociais, apresentações comerciais e materiais de conversão.",
    image: "/portfolio/le-vert.jpg",
    images: [
      "/portfolio/le-vert-1.jpg",
      "/portfolio/le-vert-2.jpg",
    ],
    featured: true,
    date: "02/02/2024",
  },
  {
    id: "botanic-residence",
    title: "Botanic Residence",
    client: "Botanic",
    category: "Sustentação Comercial",
    description: "Sustentação visual e estratégica durante a fase de comercialização. Criativos para campanhas, materiais para corretores e ajustes pós-feedback do mercado.",
    image: "/portfolio/botanic.jpg",
    images: [
      "/portfolio/botanic-1.jpg",
      "/portfolio/botanic-2.jpg",
    ],
    featured: true,
    date: "22/01/2024",
  },
  {
    id: "complexo-reservas-do-sul",
    title: "Complexo Reservas do Sul",
    client: "Reservas do Sul",
    category: "Sustentação Comercial",
    description: "Campanha integrada de sustentação comercial com foco em conversão. Materiais gráficos, criativos para redes sociais e apoio visual para a equipe de vendas.",
    image: "/portfolio/reservas-do-sul.jpg",
    images: [
      "/portfolio/reservas-do-sul-1.jpg",
      "/portfolio/reservas-do-sul-2.jpg",
    ],
    featured: true,
    date: "21/03/2024",
  },
];

// Funções auxiliares
export function getAllPortfolioItems(): PortfolioItem[] {
  return portfolioItems;
}

export function getPortfolioItemById(id: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.id === id);
}

export function getFeaturedPortfolioItems(): PortfolioItem[] {
  return portfolioItems.filter((item) => item.featured);
}

export function getPortfolioItemsByCategory(category: string): PortfolioItem[] {
  return portfolioItems.filter((item) => item.category === category);
}

export function getAllPortfolioCategories(): string[] {
  // Retorna as categorias fixas baseadas nos serviços
  return ["Todos", ...portfolioCategories];
}
