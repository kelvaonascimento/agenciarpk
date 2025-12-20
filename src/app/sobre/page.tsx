import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { AboutContent } from "@/components/features/about/about-content";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a Agência RPK: uma agência especializada em marketing imobiliário para construtoras, urbanizadoras e incorporadoras.",
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <AboutContent />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
