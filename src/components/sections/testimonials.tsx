"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  SectionWrapper,
  FadeIn,
} from "@/components/shared/section-wrapper";

const testimonials = [
  {
    id: "1",
    quote:
      "Antes de conhecer a RPK, nosso lançamento estava indo para o mercado sem diferenciação. O diagnóstico estratégico mudou completamente nossa direção. Vendemos 60% no pré-lançamento.",
    author: "Ricardo Mendes",
    role: "Diretor",
    company: "Construtora em transição para médio porte",
  },
  {
    id: "2",
    quote:
      "Eles não entregaram só uma identidade visual. Entregaram posicionamento, narrativa e materiais que nossos corretores realmente conseguem usar para vender. A conversa com o cliente ficou muito mais fácil.",
    author: "Patrícia Almeida",
    role: "Gerente Comercial",
    company: "Incorporadora regional",
  },
  {
    id: "3",
    quote:
      "O que me impressionou foi o processo. Antes de desenhar qualquer coisa, eles entenderam nosso mercado, nossa concorrência e nosso público. O resultado fez sentido porque tinha estratégia por trás.",
    author: "Fernando Costa",
    role: "Sócio-fundador",
    company: "Construtora em primeiro grande lançamento vertical",
  },
];

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setProgress(0);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (AUTO_PLAY_INTERVAL / 100));
      });
    }, 100);

    const slideInterval = setInterval(() => {
      next();
    }, AUTO_PLAY_INTERVAL);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [isPaused, next, currentIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  return (
    <SectionWrapper background="dark">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-white/10 text-white border-white/20"
          >
            Resultados
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Construtoras em transição{" "}
            <span className="text-primary">que confiaram</span>
          </h2>
          <p className="text-lg text-gray-400">
            O que donos de construtoras dizem sobre trabalhar conosco no momento
            mais importante: o primeiro grande lançamento.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote Icon */}
          <Quote className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-16 h-16 md:w-24 md:h-24 text-primary/20" />

          {/* Testimonial Content */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center px-8 md:px-16"
              >
                <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>

                <div>
                  <p className="font-heading font-semibold text-lg text-white">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role} •{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-md mx-auto mb-6">
            <Progress value={progress} className="h-1 bg-white/10" />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Pause/Play Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsPaused(!isPaused)}
              className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              {isPaused ? (
                <Play className="w-4 h-4" />
              ) : (
                <Pause className="w-4 h-4" />
              )}
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Pause indicator */}
          <AnimatePresence>
            {isPaused && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-white/40 text-xs mt-4"
              >
                Pausado
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
