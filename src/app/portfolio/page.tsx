import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { PortfolioGrid } from "@/components/features/portfolio/portfolio-grid";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Conheça os projetos de marketing imobiliário desenvolvidos pela Agência RPK para construtoras, urbanizadoras e incorporadoras.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PortfolioGrid />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
