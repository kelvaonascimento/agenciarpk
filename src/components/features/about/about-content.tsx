"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Brain,
  Building2,
  Cpu,
  CheckCircle2,
  Lightbulb,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  SectionWrapper,
  FadeIn,
} from "@/components/shared/section-wrapper";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { positioning, bigStats } from "@/lib/constants";

const values = [
  {
    icon: Brain,
    title: "Estratégia Primeiro",
    description:
      "Antes de desenhar qualquer coisa, entendemos o projeto, o mercado e o público. Design vem depois.",
  },
  {
    icon: Lightbulb,
    title: "Percepção de Valor",
    description:
      "Nosso foco é construir a percepção que acelera vendas — não apenas estética bonita.",
  },
  {
    icon: Shield,
    title: "Segurança Estratégica",
    description:
      "Identificamos riscos antes que se tornem problemas. Seu lançamento entra no mercado do jeito certo.",
  },
  {
    icon: Cpu,
    title: "IA Aplicada",
    description:
      "Método próprio com inteligência artificial para análise estratégica mais precisa e fundamentada.",
  },
];

const differentials = [
  "Tradução estratégica de empreendimentos em identidades de valor",
  "Experiência em grandes construtoras aplicada em projetos de transição",
  "Método próprio com apoio de IA para análise e posicionamento",
  "Foco exclusivo no lançamento — onde o sucesso é definido",
  "Entendimento profundo do comprador moderno",
  "Acompanhamento do diagnóstico à sustentação comercial",
];

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper background="gradient">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">
              Quem Somos
            </Badge>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Estúdio estratégico para{" "}
              <span className="text-primary">lançamentos imobiliários</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {positioning.about}
            </p>
            <p className="text-base text-muted-foreground/80 mb-8 italic border-l-2 border-primary pl-4">
              "{positioning.phrases.authority}"
            </p>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-muted to-accent/10 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-center"
                >
                  <div className="font-heading text-8xl font-bold text-primary mb-2">
                    RPK
                  </div>
                  <div className="text-muted-foreground">
                    Percepção de Valor
                  </div>
                </motion.div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper background="dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* VGV */}
          <FadeIn delay={0}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="font-heading text-5xl md:text-6xl font-bold text-primary mb-2">
                +<AnimatedCounter value={790} duration={2.5} delay={0.2} />M
              </div>
              <div className="text-white font-medium">em VGV</div>
              <div className="text-gray-400 text-sm">lançados</div>
            </motion.div>
          </FadeIn>

          {/* Anos */}
          <FadeIn delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="font-heading text-5xl md:text-6xl font-bold text-primary mb-2">
                +<AnimatedCounter value={5} duration={2} delay={0.3} />
              </div>
              <div className="text-white font-medium">Anos</div>
              <div className="text-gray-400 text-sm">de experiência</div>
            </motion.div>
          </FadeIn>

          {/* Empreendimentos */}
          <FadeIn delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="font-heading text-5xl md:text-6xl font-bold text-primary mb-2">
                +<AnimatedCounter value={14} duration={2} delay={0.4} />
              </div>
              <div className="text-white font-medium">Empreendimentos</div>
              <div className="text-gray-400 text-sm">lançados</div>
            </motion.div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Big Idea */}
      <SectionWrapper>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Nossa Tese
            </Badge>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              {positioning.bigIdea}
            </h2>
            <p className="text-lg text-muted-foreground">
              {positioning.valueProposition}
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Mission, Vision */}
      <SectionWrapper background="muted">
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn>
            <Card className="h-full border-transparent hover:border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground">
                  Garantir que bons empreendimentos entrem no mercado do jeito certo.
                  Construímos a percepção de valor que acelera vendas no lançamento,
                  para construtoras que não podem errar em seu lançamento mais importante.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full border-transparent hover:border-primary/20 hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">
                  Nossa Visão
                </h3>
                <p className="text-muted-foreground">
                  Ser a referência em estruturação estratégica de lançamentos
                  imobiliários no Brasil. Reconhecidos por construtoras em transição
                  como parceiros essenciais para entrar no mercado com segurança.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Como Pensamos
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Princípios que guiam{" "}
              <span className="text-primary">cada projeto</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Não somos uma agência de marketing. Somos um estúdio estratégico
              com método próprio para construir percepção de valor.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.1}>
              <Card className="h-full text-center border-transparent hover:border-primary/20 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* ICP Section */}
      <SectionWrapper background="muted">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <Badge variant="secondary" className="mb-4">
              Para Quem Trabalhamos
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Construtoras em{" "}
              <span className="text-primary">transição</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Nosso foco são empresários do setor de construção civil em transição
              de pequeno para médio porte, realizando seu primeiro grande lançamento
              residencial vertical.
            </p>
            <p className="text-base text-muted-foreground/80 mb-8 p-4 bg-background rounded-xl border border-border italic">
              "Estou colocando o maior projeto da empresa na rua — e se ele parecer
              menor do que realmente é, perco velocidade de venda, margem e confiança
              do mercado."
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {differentials.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                  <h3 className="font-heading text-xl font-bold">
                    Experiência Comprovada
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Com experiência em grandes construtoras e incorporadoras, entendemos
                  as necessidades específicas de quem está fazendo a transição para
                  lançamentos maiores.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm">+R$ 790M em VGV lançados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm">+14 empreendimentos estruturados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-sm">+5 anos de mercado imobiliário</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  );
}
