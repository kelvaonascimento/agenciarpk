"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  SectionWrapper,
  FadeIn,
  StaggerContainer,
  staggerItem,
} from "@/components/shared/section-wrapper";
import type { BlogPost } from "@/types";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper background="gradient">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Blog
            </Badge>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Insights sobre{" "}
              <span className="text-primary">Marketing Imobiliário</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Artigos, dicas e tendências para ajudar construtoras e
              incorporadoras a venderem mais.
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Posts Grid */}
      <SectionWrapper>
        {posts.length > 0 ? (
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <motion.div key={post.slug} variants={staggerItem}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all border-transparent hover:border-primary/20">
                    {/* Image */}
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/20 via-muted to-accent/10">
                      {/* Placeholder - substituir por Image quando tiver as imagens */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-heading font-bold text-primary/20">
                          RPK
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* Category & Date */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <Badge variant="secondary" className="font-normal">
                          {post.category}
                        </Badge>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.date)}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>

                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-muted-foreground flex items-center gap-1"
                            >
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Read More */}
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                        Ler artigo
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        ) : (
          <FadeIn>
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <Tag className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-2">
                Em breve novos artigos
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Estamos preparando conteúdos incríveis sobre marketing
                imobiliário. Volte em breve!
              </p>
            </div>
          </FadeIn>
        )}
      </SectionWrapper>
    </>
  );
}
