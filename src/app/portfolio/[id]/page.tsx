import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { ProjectDetail } from "@/components/features/portfolio/project-detail";
import { getAllPortfolioItems, getPortfolioItemById } from "@/lib/portfolio-data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getPortfolioItemById(id);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: `${project.title} - Portfólio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Agência RPK`,
      description: project.description,
      images: [project.image],
    },
  };
}

export async function generateStaticParams() {
  const projects = getAllPortfolioItems();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getPortfolioItemById(id);

  if (!project) {
    notFound();
  }

  // Pegar projetos relacionados (mesma categoria, excluindo o atual)
  const allProjects = getAllPortfolioItems();
  const relatedProjects = allProjects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <ProjectDetail project={project} relatedProjects={relatedProjects} />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
