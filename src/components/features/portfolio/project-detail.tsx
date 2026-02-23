"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Layers,
  Calendar,
  Eye,
  MessageCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PortfolioItem } from "@/types";

interface ProjectDetailProps {
  project: PortfolioItem;
  relatedProjects: PortfolioItem[];
}

export function ProjectDetail({ project, relatedProjects }: ProjectDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const allImages = project.images?.length
    ? [project.image, ...project.images]
    : [project.image];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  return (
    <>
      {/* Hero Section - Fullscreen Dramatic */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
      >
        {/* Background with Parallax */}
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-[#1a1a1a] to-[#0a0a0a]" />

          {/* Large Typography Background */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="text-[30vw] font-heading font-bold text-white/[0.02] select-none whitespace-nowrap">
              {project.title.split(" ")[0]}
            </span>
          </div>

          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,119,52,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,119,52,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

          {/* Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,119,52,0.2),transparent_60%)]" />
        </motion.div>

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[5%] w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-sm border border-primary/10"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-[10%] w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/5"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl"
        />

        {/* Bottom gradient for text contrast */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-[1]" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-5xl mx-auto">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm uppercase tracking-widest">Voltar ao Portfólio</span>
              </Link>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm px-4 py-2">
                <Sparkles className="w-3 h-3 mr-2" />
                {project.category}
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[0.9]"
            >
              {project.title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {i === 0 ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </motion.h1>

            {/* Client & Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-8 text-white/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Cliente</p>
                  <p className="text-white font-semibold">{project.client}</p>
                </div>
              </div>
              {project.date && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/60">Data</p>
                    <p className="text-white font-semibold">{project.date}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-white/30 text-xs uppercase tracking-widest">Explorar</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Image - Overlap Effect */}
      <section className="relative z-10 -mt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <button
              onClick={() => openLightbox(0)}
              className="w-full aspect-[16/9] rounded-3xl bg-gradient-to-br from-primary/20 via-muted to-background overflow-hidden cursor-pointer group relative shadow-2xl shadow-black/10 border border-border"
            >
              {/* Placeholder Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[15vw] font-heading font-bold text-white/5 select-none">
                  {project.title.substring(0, 2).toUpperCase()}
                </span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-white/10 to-transparent" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium text-lg">Ver em tela cheia</span>
                </motion.div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Project Description - Elegant Layout */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Left - Description */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <span className="text-primary text-sm uppercase tracking-widest font-medium mb-4 block">
                  Sobre o Projeto
                </span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                  Construindo percepção de valor através do design estratégico
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>{project.description}</p>
                  <p>
                    Cada elemento foi pensado para comunicar o posicionamento único
                    do empreendimento, criando uma identidade que ressoa com o
                    público-alvo e acelera a velocidade de vendas.
                  </p>
                </div>
              </motion.div>

              {/* Right - Details Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="sticky top-32 bg-muted rounded-3xl p-8 border border-border">
                  <h3 className="font-heading text-xl font-bold mb-8">
                    Detalhes do Projeto
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <span className="text-muted-foreground text-sm uppercase tracking-wider">Cliente</span>
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      <span className="text-muted-foreground text-sm uppercase tracking-wider">Serviço</span>
                      <span className="font-medium">{project.category}</span>
                    </div>
                    {project.date && (
                      <div className="flex items-center justify-between py-4 border-b border-border">
                        <span className="text-muted-foreground text-sm uppercase tracking-wider">Entrega</span>
                        <span className="font-medium">{project.date}</span>
                      </div>
                    )}
                    {project.link && (
                      <div className="flex items-center justify-between py-4 border-b border-border">
                        <span className="text-muted-foreground text-sm uppercase tracking-wider">Link</span>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-2"
                        >
                          Visitar
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-muted-foreground text-sm mb-4">
                      Quer um resultado como este?
                    </p>
                    <Button asChild size="lg" className="w-full rounded-full gap-2">
                      <Link href="/contato">
                        <MessageCircle className="w-4 h-4" />
                        Iniciar Conversa
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery - Modern Grid */}
      {allImages.length > 1 && (
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <div>
                  <span className="text-primary text-sm uppercase tracking-widest font-medium mb-2 block">
                    Galeria
                  </span>
                  <h2 className="font-heading text-3xl font-bold">
                    Explore os detalhes
                  </h2>
                </div>
                <span className="text-muted-foreground text-sm">
                  {allImages.length} imagens
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {allImages.map((image, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => openLightbox(index)}
                    className={`
                      relative overflow-hidden rounded-2xl cursor-pointer group
                      ${index === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/3]"}
                    `}
                  >
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`font-heading font-bold text-foreground/5 ${index === 0 ? "text-8xl" : "text-4xl"}`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Border */}
                    <div className="absolute inset-0 rounded-2xl border border-border group-hover:border-primary/50 transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <div>
                  <span className="text-primary text-sm uppercase tracking-widest font-medium mb-2 block">
                    Continue Explorando
                  </span>
                  <h2 className="font-heading text-3xl font-bold">
                    Projetos Relacionados
                  </h2>
                </div>
                <Button asChild variant="outline" className="rounded-full gap-2">
                  <Link href="/portfolio">
                    Ver Todos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/portfolio/${relatedProject.id}`}
                      className="group block"
                    >
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-muted to-background">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-5xl font-heading font-bold text-white/10">
                              {relatedProject.title.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                        </div>

                        {/* Hover */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <ArrowUpRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>

                      <Badge variant="secondary" className="mb-2">
                        {relatedProject.category}
                      </Badge>
                      <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {relatedProject.client}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#e55a1a]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-white/80 text-sm uppercase tracking-widest font-medium mb-6 block">
              Próximo Passo
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Seu projeto pode ser o próximo
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Vamos construir a percepção de valor que seu empreendimento merece.
              O primeiro passo é uma conversa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-10 gap-2 text-lg bg-white text-primary hover:bg-white/90">
                <Link href="/contato">
                  Vamos Conversar
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-10 bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="/diagnostico">Diagnóstico Gratuito</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center backdrop-blur-xl"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-6 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                >
                  <ChevronLeft className="w-8 h-8" />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-6 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                >
                  <ChevronRight className="w-8 h-8" />
                </motion.button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder */}
              <div className="bg-gradient-to-br from-primary/30 via-[#1a1a1a] to-[#0a0a0a] rounded-2xl w-[900px] h-[600px] flex items-center justify-center relative overflow-hidden">
                <span className="text-[20rem] font-heading font-bold text-white/5 select-none">
                  {String(currentImageIndex + 1).padStart(2, "0")}
                </span>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/20 to-transparent" />
              </div>
            </motion.div>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4"
            >
              <span className="text-white/50 text-sm">
                {String(currentImageIndex + 1).padStart(2, "0")}
              </span>
              <div className="w-24 h-px bg-white/20">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentImageIndex + 1) / allImages.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-white/50 text-sm">
                {String(allImages.length).padStart(2, "0")}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
