"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  SectionWrapper,
  FadeIn,
} from "@/components/shared/section-wrapper";
import { faq } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" background="muted">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Dúvidas Estratégicas
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Perguntas de quem está{" "}
            <span className="text-primary">entrando no jogo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Se você está preparando seu primeiro grande lançamento vertical,
            provavelmente já se fez algumas dessas perguntas.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faq.map((item, index) => (
            <FadeIn key={item.question} delay={index * 0.1}>
              <div
                className={cn(
                  "bg-background rounded-2xl border border-border overflow-hidden transition-all",
                  openIndex === index && "border-primary/20 shadow-lg shadow-primary/5"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-heading font-semibold text-lg pr-4">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
