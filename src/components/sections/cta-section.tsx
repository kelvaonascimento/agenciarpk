"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/section-wrapper";
import { siteConfig, positioning } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#e55a1a]" />

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#82ff1f] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Entrando no seu primeiro grande lançamento?
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xl text-white/80 mb-4 max-w-2xl mx-auto">
              {positioning.cta}
            </p>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Não é orçamento — é uma conversa para entender se faz sentido trabalharmos juntos.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-base px-8 gap-2 group"
              >
                <Link href="/contato">
                  Agendar Conversa
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-base px-8 gap-2"
              >
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
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-8 text-white/60 text-sm">
              Resposta em até 2 horas • Sem compromisso • Confidencial
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
