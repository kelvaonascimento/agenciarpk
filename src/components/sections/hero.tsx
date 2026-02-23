"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { positioning } from "@/lib/constants";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]"
    >
      {/* Shader Animation Background with Parallax */}
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{ y: backgroundY }}
      >
        <ShaderAnimation />
      </motion.div>

      {/* Subtle gradient overlay at top only */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#111111] to-transparent z-[1]" />

      {/* Noise Texture */}
      <div className="absolute inset-0 noise pointer-events-none z-[2]" />

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 pt-32 pb-32 relative z-10"
        style={{ opacity: contentOpacity }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-white/80">Estúdio Estratégico de Lançamentos</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-center text-white mb-6 text-shadow"
          >
            Percepção de valor para{" "}
            <span className="relative inline-block">
              <span className="text-gradient">lançamentos</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary origin-left rounded-full"
              />
            </span>{" "}
            imobiliários
          </motion.h1>

          {/* Big Idea / Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-white/90 text-center mb-4"
          >
            {positioning.bigIdea}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto text-center mb-12"
          >
            Estrutura estratégica para vender melhor antes do stand existir.
            Ajudamos{" "}
            <span className="text-white font-medium">construtoras em transição</span>{" "}
            a lançar empreendimentos verticais com{" "}
            <span className="text-white font-medium">velocidade de venda</span> e{" "}
            <span className="text-white font-medium">segurança estratégica</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="text-base px-8 gap-2 group glow-orange-sm hover:glow-orange transition-shadow rounded-full">
              <Link href="/contato">
                <MessageCircle className="w-4 h-4" />
                Conversar antes de decidir
              </Link>
            </Button>
            <Button asChild size="lg" className="text-base px-8 gap-2 bg-white text-gray-900 hover:bg-white/90 rounded-full group">
              <Link href="/portfolio">
                Ver nosso trabalho
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Big Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {/* Card 1 - VGV (Laranja) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="relative overflow-hidden rounded-3xl bg-primary p-8 min-h-[200px] flex flex-col justify-between"
              >
                {/* Decorative semicircle */}
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/20 rounded-full translate-y-1/2 -translate-x-1/4" />
                <div className="relative z-10">
                  <span className="font-heading text-5xl md:text-6xl font-bold text-white">
                    +<AnimatedCounter value={790} duration={1.2} delay={0.3} />M
                  </span>
                </div>
                <div className="relative z-10 text-right">
                  <p className="text-white/90 font-medium">em VGV</p>
                  <p className="text-white/70 text-sm">lançados</p>
                </div>
              </motion.div>

              {/* Card 2 - Anos (Preto) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="relative overflow-hidden rounded-3xl bg-[#1a1a1a] p-8 min-h-[200px] flex flex-col justify-between"
              >
                {/* Decorative triangle/mountain */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[80px] border-r-[80px] border-b-[120px] border-l-transparent border-r-transparent border-b-white/10" />
                <div className="relative z-10">
                  <span className="font-heading text-5xl md:text-6xl font-bold text-white">
                    +<AnimatedCounter value={5} duration={0.8} delay={0.4} />
                  </span>
                </div>
                <div className="relative z-10 text-right">
                  <p className="text-white/90 font-medium">Anos</p>
                  <p className="text-white/70 text-sm">de experiência</p>
                </div>
              </motion.div>

              {/* Card 3 - Empreendimentos (Branco) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="relative overflow-hidden rounded-3xl bg-white p-8 min-h-[200px] flex flex-col justify-between"
              >
                {/* Decorative arrows */}
                <div className="absolute bottom-4 right-4 flex gap-1 opacity-10">
                  <div className="w-8 h-16 bg-gray-400 clip-arrow" />
                  <div className="w-8 h-20 bg-gray-400 clip-arrow" />
                  <div className="w-8 h-24 bg-gray-400 clip-arrow" />
                </div>
                <div className="relative z-10">
                  <span className="font-heading text-5xl md:text-6xl font-bold text-gray-900">
                    +<AnimatedCounter value={14} duration={1} delay={0.5} />
                  </span>
                </div>
                <div className="relative z-10 text-right">
                  <p className="text-gray-700 font-medium">Empreendimentos</p>
                  <p className="text-gray-500 text-sm">lançados</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
