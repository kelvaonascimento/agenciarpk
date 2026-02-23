import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { DiagnosticoContent } from "@/components/features/diagnostico/diagnostico-content";

export const metadata: Metadata = {
  title: "Diagnóstico Estratégico",
  description:
    "Antes de decidir qualquer coisa, é preciso entender onde o risco está. O diagnóstico estratégico é uma leitura profunda do empreendimento, mercado e público para construir percepção de valor no lançamento.",
  openGraph: {
    title: "Diagnóstico Estratégico | Agência RPK",
    description:
      "Leitura estratégica completa antes de qualquer execução. Identifique riscos e oportunidades no seu lançamento imobiliário.",
  },
};

export default function DiagnosticoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <DiagnosticoContent />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
