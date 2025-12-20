import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { ServicesDetail } from "@/components/features/services/services-detail";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços de marketing imobiliário da Agência RPK: identidades visuais, websites, landing pages e criativos para construtoras e incorporadoras.",
};

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ServicesDetail />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
