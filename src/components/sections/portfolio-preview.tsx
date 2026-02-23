"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  SectionWrapper,
  FadeIn,
  StaggerContainer,
  staggerItem,
} from "@/components/shared/section-wrapper";
import { getFeaturedPortfolioItems } from "@/lib/portfolio-data";

export function PortfolioPreview() {
  const portfolioItems = getFeaturedPortfolioItems().slice(0, 4);

  return (
    <SectionWrapper className="bg-[#111111] py-24" id="portfolio">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Portfólio
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Projetos que{" "}
              <span className="text-gradient">geram resultados</span>
            </h2>
            <p className="text-lg text-white/60">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes
              do mercado imobiliário.
            </p>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full">
            <Link href="/portfolio" className="gap-2">
              Ver Todos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-2 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={staggerItem}
            className={index === 0 ? "md:row-span-2" : ""}
          >
            <Link href={`/portfolio/${item.id}`} className="group block">
              <div
                className={`relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-primary/30 transition-all duration-500 ${
                  index === 0 ? "aspect-[4/5] md:aspect-auto md:h-full" : "aspect-[16/10]"
                }`}
              >
                {/* Background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-[#1a1a1a] to-[#1a1a1a] flex items-center justify-center">
                  <span className="text-7xl font-heading font-bold text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                    {item.title.substring(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Badge
                      variant="secondary"
                      className="w-fit mb-3 bg-white/10 text-white/80 border-0 backdrop-blur-sm"
                    >
                      {item.category}
                    </Badge>
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4">{item.client}</p>

                    <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Ver Projeto
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
