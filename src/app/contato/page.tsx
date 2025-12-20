import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { ContactContent } from "@/components/features/contact/contact-content";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Agência RPK. Solicite um orçamento para seu projeto de marketing imobiliário.",
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ContactContent />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
