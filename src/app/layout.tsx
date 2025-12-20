import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agenciarpk.com"),
  title: {
    default: "Agência RPK | Percepção de Valor para Pré-lançamentos Imobiliários",
    template: "%s | Agência RPK",
  },
  description:
    "Estúdio estratégico especializado em construir percepção de valor para pré-lançamentos imobiliários. Ajudamos construtoras em transição a lançar empreendimentos com velocidade de venda e segurança estratégica. +R$ 790M em VGV lançados.",
  keywords: [
    "pré-lançamento imobiliário",
    "percepção de valor imobiliário",
    "posicionamento de empreendimentos",
    "identidade estratégica imobiliária",
    "lançamento imobiliário",
    "construtoras em transição",
    "marketing estratégico imobiliário",
    "diagnóstico estratégico imobiliário",
    "branding imobiliário",
    "identidade visual empreendimentos",
  ],
  authors: [{ name: "Agência RPK" }],
  creator: "Agência RPK",
  publisher: "Agência RPK",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.agenciarpk.com",
    siteName: "Agência RPK",
    title: "Agência RPK | Percepção de Valor para Pré-lançamentos Imobiliários",
    description:
      "A velocidade de venda é definida no pré-lançamento, não no stand. Estrutura estratégica para construtoras em transição lançarem empreendimentos com segurança.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agência RPK - Percepção de Valor para Pré-lançamentos Imobiliários",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência RPK | Pré-lançamentos Imobiliários",
    description:
      "Estúdio estratégico para construtoras em transição. +R$ 790M em VGV lançados.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
