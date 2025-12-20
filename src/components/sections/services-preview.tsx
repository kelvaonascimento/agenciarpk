"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Palette, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  SectionWrapper,
  FadeIn,
} from "@/components/shared/section-wrapper";
import { services } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Palette,
  TrendingUp,
};

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  layer: number;
  description: string;
  deliveryTime: string;
  href: string;
}

const GridItem = ({ area, icon, title, layer, description, deliveryTime, href }: GridItemProps) => {
  return (
    <li className={cn("min-h-[16rem] list-none", area)}>
      <Link href={href} className="block h-full group">
        <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3 bg-[#111111]">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
            variant="orange"
          />
          <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] border-white/5 bg-[#1a1a1a] p-6 shadow-sm md:p-6 group-hover:border-primary/20 transition-colors duration-300">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              {/* Header with Icon and Layer */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl border-[0.75px] border-white/10 bg-[#111111] p-2.5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  {icon}
                </div>
                <span className="text-xs font-medium text-primary/70 bg-primary/10 px-3 py-1 rounded-full">
                  Camada {layer}
                </span>
              </div>

              <div className="space-y-3">
                {/* Delivery Time */}
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <Clock className="w-3 h-3 text-primary" />
                  <span>{deliveryTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl leading-[1.375rem] font-bold font-heading tracking-[-0.02em] md:text-2xl md:leading-[1.875rem] text-balance text-white group-hover:text-primary transition-colors">
                  {title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-white/50 line-clamp-3">
                  {description}
                </p>
              </div>
            </div>

            {/* Arrow indicator */}
            <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
              Saiba mais
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export function ServicesPreview() {
  // Map services to grid areas for 3 items
  const gridAreas = [
    "md:[grid-area:1/1/2/5]",
    "md:[grid-area:1/5/2/9]",
    "md:[grid-area:1/9/2/13]",
  ];

  return (
    <SectionWrapper id="servicos" className="bg-[#0a0a0a] py-24">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Camadas Estratégicas
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Estrutura para construir{" "}
            <span className="text-gradient">percepção de valor</span>
          </h2>
          <p className="text-lg text-white/50">
            Do diagnóstico à sustentação comercial. Cada camada é pensada para
            garantir que seu empreendimento entre no mercado do jeito certo.
          </p>
        </div>
      </FadeIn>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 gap-4 md:grid-cols-12 lg:gap-6"
      >
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Palette;
          return (
            <GridItem
              key={service.id}
              area={gridAreas[index] || gridAreas[0]}
              icon={<Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />}
              title={service.title}
              layer={service.layer}
              description={service.shortDescription}
              deliveryTime={service.deliveryTime}
              href={`/servicos#${service.id}`}
            />
          );
        })}
      </motion.ul>

      {/* Value Proposition */}
      <FadeIn delay={0.3}>
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-[#1a1a1a] border border-white/5 text-center">
          <p className="text-lg md:text-xl text-white/70 italic">
            "Meu trabalho começa onde o erro ainda não é visível."
          </p>
          <p className="text-sm text-white/40 mt-2">
            — Evitamos que um bom empreendimento entre no mercado do jeito errado
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full glow-orange-sm hover:glow-orange transition-all">
            <Link href="/servicos" className="gap-2">
              Entender o Processo Completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
