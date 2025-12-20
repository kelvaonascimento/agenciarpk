"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Eye, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import {
  getAllPortfolioItems,
  getAllPortfolioCategories,
} from "@/lib/portfolio-data";

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const portfolioItems = getAllPortfolioItems();
  const categories = getAllPortfolioCategories();

  const filteredItems =
    activeCategory === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero Section - Impactante */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,119,52,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,119,52,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,119,52,0.15),transparent_70%)]" />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/10"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[15%] w-32 h-32 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/5"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[25%] w-16 h-16 rounded-full bg-primary/10 blur-xl"
        />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-white/80">Projetos Selecionados</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6"
            >
              Trabalhos que{" "}
              <span className="relative">
                <span className="text-gradient">transformam</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-primary origin-left rounded-full"
                />
              </span>
              <br />
              percepção em venda
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/50 max-w-2xl mx-auto mb-12"
            >
              Cada projeto é uma história de transformação. Veja como ajudamos
              construtoras a lançar empreendimentos com a percepção de valor certa.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-12 mb-12"
            >
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-white">
                  +<AnimatedCounter value={14} duration={2} delay={0.5} />
                </div>
                <p className="text-white/40 text-sm mt-1">Projetos entregues</p>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary">
                  +<AnimatedCounter value={790} duration={2.5} delay={0.6} />M
                </div>
                <p className="text-white/40 text-sm mt-1">em VGV lançados</p>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-white">
                  <AnimatedCounter value={100} duration={2} delay={0.7} />%
                </div>
                <p className="text-white/40 text-sm mt-1">Clientes satisfeitos</p>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-white/30 text-xs uppercase tracking-widest">
                Role para explorar
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
              >
                <motion.div className="w-1 h-2 bg-primary rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background sticky top-20 z-30 border-b border-border/50 backdrop-blur-xl bg-background/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`
                  relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeCategory === category
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {activeCategory === category && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid - Bento Style */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {filteredItems.map((item, index) => {
              // Determine size based on position for visual interest
              const isLarge = index === 0;
              const isTall = index === 2 || index === 5;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`
                    group relative overflow-hidden rounded-3xl cursor-pointer
                    ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                    ${isTall ? "md:row-span-2" : ""}
                  `}
                >
                  <Link href={`/portfolio/${item.id}`} className="block h-full">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-[#1a1a1a] to-[#0a0a0a]">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-white/5 to-transparent" />

                      {/* Large initials */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className={`font-heading font-bold text-white/5 select-none ${
                            isLarge ? "text-[20rem]" : isTall ? "text-[12rem]" : "text-[8rem]"
                          }`}
                        >
                          {item.title.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                      {/* Top - Category */}
                      <div className="flex items-start justify-between">
                        <Badge
                          variant="secondary"
                          className="bg-white/10 text-white border-0 backdrop-blur-sm"
                        >
                          {item.category}
                        </Badge>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{ rotate: 45 }}
                          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>

                      {/* Bottom - Info */}
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white/60 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                          {item.client}
                        </p>
                        <h3
                          className={`font-heading font-bold text-white mb-3 ${
                            isLarge ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                          {item.description}
                        </p>

                        {/* View Project Link */}
                        <div className="flex items-center gap-2 mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm font-medium">Ver projeto completo</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,119,52,0.15),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para ser o próximo{" "}
              <span className="text-primary">case de sucesso</span>?
            </h2>
            <p className="text-xl text-white/50 mb-10">
              Vamos conversar sobre como transformar seu empreendimento em um
              projeto que vende com velocidade e margem.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full px-8">
                <Link href="/contato">
                  Iniciar conversa
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-white/20 text-white hover:bg-white/10"
              >
                <Link href="/diagnostico">Diagnóstico gratuito</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
