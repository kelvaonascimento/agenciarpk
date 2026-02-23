"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  BarChart3,
  Users,
  AlertTriangle,
  Compass,
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  SectionWrapper,
  FadeIn,
} from "@/components/shared/section-wrapper";
import { positioning, siteConfig } from "@/lib/constants";

const diagnosticoIncludes = [
  {
    icon: Search,
    title: "Leitura do Empreendimento",
    description:
      "Análise profunda do projeto, localização, diferenciais e potenciais de comunicação que ainda não foram explorados.",
  },
  {
    icon: BarChart3,
    title: "Análise de Mercado",
    description:
      "Mapeamento da concorrência direta e indireta, posicionamentos existentes e oportunidades de diferenciação real.",
  },
  {
    icon: Users,
    title: "Leitura do Público",
    description:
      "Entendimento do comprador ideal, suas expectativas, critérios de decisão e jornada de compra.",
  },
  {
    icon: Target,
    title: "Avaliação de Percepção",
    description:
      "Identificação de gaps entre o valor real do empreendimento e a percepção que ele está projetando.",
  },
  {
    icon: AlertTriangle,
    title: "Mapa de Riscos",
    description:
      "Pontos de atenção que podem comprometer velocidade de venda, margem ou confiança do mercado.",
  },
  {
    icon: Compass,
    title: "Direções Estratégicas",
    description:
      "Caminhos fundamentados para construir percepção de valor desde o primeiro contato com o mercado.",
  },
];

const forWhoPoints = [
  "Está preparando seu primeiro grande lançamento residencial vertical",
  "Sente que o projeto é bom, mas não sabe como comunicar o valor real",
  "Quer evitar entrar no mercado 'do jeito errado'",
  "Precisa de segurança estratégica antes de investir em identidade e materiais",
  "Está em transição de pequeno para médio porte",
  "Não quer competir apenas por preço",
];

const notForWhoPoints = [
  "Já tem posicionamento definido e só precisa de execução visual",
  "Está buscando apenas design ou materiais gráficos",
  "Quer resultados em poucos dias",
  "Não está disposto a repensar direções se necessário",
];

export function DiagnosticoContent() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper background="gradient">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Camada 1
            </Badge>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Antes de decidir qualquer coisa, é preciso{" "}
              <span className="text-primary">entender onde o risco está</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              O diagnóstico estratégico é uma leitura profunda do empreendimento,
              do mercado e do público para identificar direções que constroem
              percepção de valor — antes de desenhar qualquer coisa.
            </p>
            <p className="text-base text-muted-foreground/80 italic">
              "{positioning.phrases.authority}"
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* What is Included */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              O Que Inclui
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Uma leitura completa{" "}
              <span className="text-primary">antes de qualquer execução</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              O lançamento começa com leitura estratégica, não com design.
              Cada etapa do diagnóstico é pensada para reduzir riscos e criar
              fundamentos sólidos.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diagnosticoIncludes.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <Card className="h-full border-transparent hover:border-primary/20 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* For Who / Not For Who */}
      <SectionWrapper background="muted">
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <Card className="h-full border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">
                    O Diagnóstico é Para Você Se...
                  </h3>
                </div>
                <ul className="space-y-4">
                  {forWhoPoints.map((point, index) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold">
                    Talvez Não Seja o Momento Se...
                  </h3>
                </div>
                <ul className="space-y-4">
                  {notForWhoPoints.map((point, index) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </motion.li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground/80 italic">
                  Nesses casos, talvez faça mais sentido ir direto para a
                  Identidade Estratégica ou Sustentação Comercial.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* How it Works */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Como Funciona
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Entender o{" "}
              <span className="text-primary">processo completo</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Um processo estruturado que começa com conversa e termina com
              direções estratégicas fundamentadas para o seu empreendimento.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: 1,
              title: "Conversa Inicial",
              subtitle: "Entendimento",
              duration: "30-45 min",
              items: [
                { label: "Situação:", title: "Entendemos seu momento e desafios." },
                { label: "Empreendimento:", title: "Conhecemos o projeto em detalhes." },
                { label: "Avaliação:", title: "Validamos se o diagnóstico faz sentido." },
              ],
            },
            {
              step: 2,
              title: "Coleta de Informações",
              subtitle: "Briefing estratégico",
              duration: "2-3 dias",
              items: [
                { label: "Briefing:", title: "Enviamos questionário estratégico." },
                { label: "Materiais:", title: "Coletamos dados do projeto." },
                { label: "Mercado:", title: "Reunimos informações locais." },
              ],
            },
            {
              step: 3,
              title: "Análise Estratégica",
              subtitle: "Método com IA",
              duration: "3-4 dias",
              items: [
                { label: "Empreendimento:", title: "Análise profunda do projeto." },
                { label: "Concorrência:", title: "Mapeamento do mercado local." },
                { label: "Percepção:", title: "Identificação de gaps e riscos." },
              ],
            },
            {
              step: 4,
              title: "Entrega do Diagnóstico",
              subtitle: "Direções estratégicas",
              duration: "1 reunião",
              items: [
                { label: "Relatório:", title: "Documento completo com análises." },
                { label: "Riscos:", title: "Mapa de pontos de atenção." },
                { label: "Direções:", title: "Caminhos estratégicos fundamentados." },
              ],
            },
          ].map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.1}>
              <Card className="relative h-full border-transparent hover:border-primary/20 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-heading font-bold text-xl flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary text-sm mb-3">{item.subtitle}</p>
                  <div className="space-y-2">
                    {item.items.map((subItem, idx) => (
                      <div key={idx} className="text-sm">
                        <span className="text-foreground font-medium">{subItem.label}</span>{" "}
                        <span className="text-muted-foreground">{subItem.title}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                </CardContent>

                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-primary/20" />
                )}
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-primary font-medium bg-primary/10 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5" />
              <span>Prazo total: 5-7 dias</span>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="gradient">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Primeiro grande lançamento?
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {positioning.cta}
            </p>
            <p className="text-base text-muted-foreground/80 mb-8">
              Não é orçamento — é uma conversa para entender se o diagnóstico
              faz sentido para sua situação.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contato">
                  Agendar Conversa
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent border-primary text-primary hover:bg-primary/10">
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Direto
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground/80">
              Resposta em até 2 horas • Sem compromisso • Confidencial
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>
    </>
  );
}
