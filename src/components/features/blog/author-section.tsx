"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface AuthorSectionProps {
  author: string;
  date: string;
}

export function AuthorSection({ author, date }: AuthorSectionProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="border border-border rounded-2xl p-6 md:p-8 bg-muted/30"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <Avatar className="w-20 h-20 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary text-2xl font-heading font-bold">
            RPK
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
            <h3 className="font-heading text-lg font-semibold">{author}</h3>
            <span className="text-sm text-muted-foreground">
              {formatDate(date)}
            </span>
          </div>

          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
            Estúdio estratégico especializado em estruturação de lançamentos
            imobiliários. Ajudamos construtoras em transição a lançar empreendimentos
            com percepção de valor e velocidade de vendas.
          </p>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link href="https://instagram.com/agenciarpk" target="_blank">
                <Instagram className="w-4 h-4" />
                <span className="hidden sm:inline">Instagram</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link href="https://linkedin.com/company/agenciarpk" target="_blank">
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link href="/contato">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Contato</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
