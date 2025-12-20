"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, Users, Award, Target, Rocket } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    icon: TrendingUp,
    value: 790,
    prefix: "+R$ ",
    suffix: "M",
    label: "em VGV Lançados",
    description: "Valor geral de vendas movimentado",
  },
  {
    icon: Award,
    value: 5,
    prefix: "+",
    label: "Anos de Experiência",
    description: "Especialistas em marketing imobiliário",
  },
  {
    icon: Building2,
    value: 14,
    prefix: "+",
    label: "Empreendimentos Lançados",
    description: "Projetos de sucesso no mercado",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,119,52,0.08),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Nossos Números
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Resultados que{" "}
            <span className="text-gradient">falam por si</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Números que refletem nossa dedicação em transformar lançamentos
            imobiliários em cases de sucesso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group"
            >
              <div className="relative h-full rounded-2xl border border-white/10 bg-[#111111] p-6 lg:p-8 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Number */}
                  <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2}
                      delay={index * 0.2}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="font-semibold text-white mb-1">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/50">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm">
            Dados atualizados até dezembro de 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
}
