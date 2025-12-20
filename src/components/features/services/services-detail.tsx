"use client";

import { motion } from "framer-motion";
import { Check, Clock, Search, Palette, TrendingUp, ArrowRight, Target } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  SectionWrapper,
  FadeIn,
} from "@/components/shared/section-wrapper";
import { services, serviceDetails, processSteps, positioning } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Palette,
  TrendingUp,
};

export function ServicesDetail() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper background="gradient">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Camadas Estratégicas
            </Badge>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Estrutura para construir{" "}
              <span className="text-primary">percepção de valor</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {positioning.valueProposition}
            </p>
            <p className="text-base text-muted-foreground/80 italic">
              "{positioning.phrases.hook}"
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Services Detail */}
      <SectionWrapper>
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Palette;
            const isEven = index % 2 === 0;
            const detailKey = service.id === "diagnostico-estrategico" ? "diagnostico" :
                             service.id === "identidade-estrategica" ? "identidade" : "sustentacao";
            const detail = serviceDetails[detailKey as keyof typeof serviceDetails];

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <FadeIn direction={isEven ? "right" : "left"}>
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                          Camada {service.layer}
                        </span>
                      </div>

                      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                        {detail.title}
                      </h2>

                      <p className="text-lg text-primary font-medium mb-4">
                        {detail.subtitle}
                      </p>

                      <p className="text-muted-foreground mb-6">
                        {detail.description}
                      </p>

                      <div className="flex items-center gap-2 text-primary font-medium mb-6">
                        <Clock className="w-5 h-5" />
                        <span>{service.deliveryTime}</span>
                      </div>

                      {/* For Who */}
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mb-8">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-sm">Para quem é</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {detail.forWho}
                        </p>
                      </div>

                      <Button asChild className="gap-2">
                        <Link href="/contato">
                          Conversar sobre este serviço
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </FadeIn>

                  {/* Includes List */}
                  <FadeIn
                    direction={isEven ? "left" : "right"}
                    delay={0.2}
                  >
                    <div className={isEven ? "lg:order-2" : ""}>
                      <Card className="border-0 shadow-xl shadow-primary/5">
                        <CardContent className="p-6 md:p-8">
                          <h3 className="font-heading font-semibold text-lg mb-6">
                            O que inclui
                          </h3>
                          <div className="space-y-4">
                            {detail.includes.map((item, idx) => (
                              <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                              >
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                  <h4 className="font-medium mb-1">{item.title}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper background="muted">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="secondary" className="mb-4">
              Nosso Processo
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Como <span className="text-primary">trabalhamos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Um processo estratégico que começa com leitura e termina com seu
              empreendimento pronto para o mercado.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.1}>
              <Card className="relative h-full border-transparent hover:border-primary/20 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-heading font-bold text-xl flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-primary text-sm mb-3">{step.subtitle}</p>
                  <div className="space-y-2">
                    {step.items.map((item, idx) => (
                      <div key={idx} className="text-sm">
                        <span className="text-foreground font-medium">{item.label}</span>{" "}
                        <span className="text-muted-foreground">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-primary/20" />
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Primeiro grande lançamento?
            </h2>
            <p className="text-muted-foreground mb-8">
              {positioning.cta}
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href="/contato">
                Agendar Conversa
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </SectionWrapper>
    </>
  );
}
