"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  ChevronUp,
  MessageCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ReadingProgress } from "./reading-progress";
import { TableOfContents } from "./table-of-contents";
import { AuthorSection } from "./author-section";
import { ShareButtons } from "./share-buttons";
import { MarkdownContent } from "./markdown-content";
import { RelatedPosts } from "./related-posts";
import type { BlogPost as BlogPostType } from "@/types";

interface BlogPostProps {
  post: BlogPostType;
  allPosts: BlogPostType[];
}

// Calculate reading time (average 200 words per minute)
function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

export function BlogPost({ post, allPosts }: BlogPostProps) {
  const readingTime = calculateReadingTime(post.content);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted/50 to-background pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para o Blog
            </Link>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge
                variant="default"
                className="bg-primary/10 text-primary hover:bg-primary/20"
              >
                {post.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {readingTime} min de leitura
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              {post.description}
            </p>

            {/* Author & Share */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary">
                    RPK
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">
                    Estúdio Estratégico
                  </p>
                </div>
              </div>
              <ShareButtons title={post.title} description={post.description} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8 relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="aspect-[21/9] rounded-2xl bg-gradient-to-br from-primary/20 via-muted to-accent/10 flex items-center justify-center overflow-hidden shadow-2xl shadow-black/10">
            <span className="text-7xl font-heading font-bold text-primary/20">
              RPK
            </span>
          </div>
        </motion.div>
      </div>

      {/* Main Content with Sidebar */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Article Content */}
              <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="min-w-0"
              >
                {/* Main Content */}
                <MarkdownContent content={post.content} />

                <Separator className="my-12" />

                {/* Tags */}
                {post.tags.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-12"
                  >
                    <h3 className="font-heading font-semibold mb-4 flex items-center gap-2 text-foreground">
                      <Tag className="w-5 h-5 text-primary" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Author Section */}
                <AuthorSection author={post.author} date={post.date} />

                {/* Share & Navigation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-muted/30 rounded-2xl border border-border"
                >
                  <div className="text-center sm:text-left">
                    <p className="font-medium text-foreground mb-1">
                      Gostou do artigo?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Compartilhe com quem pode se beneficiar
                    </p>
                  </div>
                  <ShareButtons
                    title={post.title}
                    description={post.description}
                  />
                </motion.div>
              </motion.article>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-8">
                  {/* Table of Contents */}
                  <div className="p-6 bg-muted/30 rounded-2xl border border-border">
                    <TableOfContents content={post.content} />
                  </div>

                  {/* Share Vertical */}
                  <div className="p-6 bg-muted/30 rounded-2xl border border-border">
                    <ShareButtons
                      title={post.title}
                      description={post.description}
                      direction="vertical"
                    />
                  </div>

                  {/* CTA Card */}
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <h3 className="font-heading font-semibold mb-2 text-foreground">
                      Precisa de ajuda?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Converse com nossa equipe sobre seu próximo lançamento.
                    </p>
                    <Button asChild size="sm" className="w-full gap-2">
                      <Link href="/contato">
                        <MessageCircle className="w-4 h-4" />
                        Falar Conosco
                      </Link>
                    </Button>
                  </div>

                  {/* Back to top */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <ChevronUp className="w-4 h-4" />
                    Voltar ao topo
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <div className="border-t border-border bg-muted/30">
        <RelatedPosts posts={allPosts} currentSlug={post.slug} />
      </div>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4">
              Próximo Passo
            </Badge>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Pronto para construir percepção de valor?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato e descubra como podemos ajudar seu próximo
              lançamento imobiliário a se destacar no mercado.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contato">
                  <MessageCircle className="w-5 h-5" />
                  Fale Conosco
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/diagnostico">Diagnóstico Gratuito</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
