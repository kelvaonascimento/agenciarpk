"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Brain, Building2, Target, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  SectionWrapper,
  FadeIn,
} from "@/components/shared/section-wrapper";
import { positioning } from "@/lib/constants";

const features = [
  {
    icon: Brain,
    title: "Método Estratégico",
    description: "Diagnóstico antes de qualquer execução visual",
  },
  {
    icon: Building2,
    title: "Experiência Comprovada",
    description: "+R$ 790M em VGV lançados com sucesso",
  },
  {
    icon: Cpu,
    title: "IA Aplicada",
    description: "Análise estratégica com inteligência artificial",
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

export function AboutPreview() {
  return (
    <SectionWrapper id="sobre" background="gradient">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div>
          <FadeIn>
            <Badge variant="secondary" className="mb-4">
              Quem Somos
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Por que construtoras em transição{" "}
              <span className="text-primary">nos escolhem</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {positioning.about}
            </p>
            <p className="text-base text-muted-foreground/80 mb-8 italic border-l-2 border-primary pl-4">
              "{positioning.phrases.hook}"
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
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

          <FadeIn delay={0.2}>
            <Button asChild size="lg" className="gap-2">
              <Link href="/sobre">
                Conhecer Nossa Abordagem
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.1} direction="left">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}

          {/* ICP Callout */}
          <FadeIn delay={0.3} direction="left">
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-primary" />
                <span className="font-heading font-semibold text-sm text-primary">Para Quem é</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Construtoras em transição de pequeno para médio porte, realizando
                seu primeiro grande lançamento residencial vertical e que precisam
                de segurança estratégica.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
