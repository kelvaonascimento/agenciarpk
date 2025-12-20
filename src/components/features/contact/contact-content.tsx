"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  CheckCircle,
  Building2,
  Target,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SectionWrapper,
  FadeIn,
} from "@/components/shared/section-wrapper";
import { siteConfig, services, positioning } from "@/lib/constants";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.whatsapp,
    href: siteConfig.links.whatsapp,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Rua dos Coqueiros, 44 - Centro, Ribeirão Pires - SP",
    href: "https://www.google.com/maps/search/?api=1&query=Rua+dos+Coqueiros+44+Centro+Ribeirao+Pires+SP",
  },
];

const situacoes = [
  { id: "primeiro-lancamento", label: "Primeiro grande lançamento vertical" },
  { id: "transicao", label: "Empresa em transição (pequeno → médio porte)" },
  { id: "reposicionamento", label: "Reposicionamento de empreendimento" },
  { id: "novo-projeto", label: "Novo projeto em planejamento" },
  { id: "outro", label: "Outro" },
];

const cargos = [
  // Diretoria
  { id: "ceo-diretor-geral", label: "CEO / Diretor Geral" },
  { id: "diretor-comercial", label: "Diretor Comercial" },
  { id: "diretor-marketing", label: "Diretor de Marketing" },
  { id: "diretor-incorporacao", label: "Diretor de Incorporação" },
  { id: "diretor-operacoes", label: "Diretor de Operações" },
  // Gerência
  { id: "gerente-comercial", label: "Gerente Comercial" },
  { id: "gerente-marketing", label: "Gerente de Marketing" },
  { id: "gerente-vendas", label: "Gerente de Vendas" },
  { id: "gerente-projetos", label: "Gerente de Projetos" },
  { id: "gerente-lancamentos", label: "Gerente de Lançamentos" },
  // Coordenação
  { id: "coordenador-marketing", label: "Coordenador de Marketing" },
  { id: "coordenador-vendas", label: "Coordenador de Vendas" },
  { id: "coordenador-comercial", label: "Coordenador Comercial" },
  // Analistas
  { id: "analista-marketing", label: "Analista de Marketing" },
  { id: "analista-inteligencia", label: "Analista de Inteligência de Mercado" },
  { id: "especialista-midia", label: "Especialista em Mídia" },
  // Imobiliárias
  { id: "corretor-imoveis", label: "Corretor de Imóveis" },
  { id: "proprietario-imobiliaria", label: "Proprietário de Imobiliária" },
  { id: "gerente-imobiliaria", label: "Gerente de Imobiliária" },
  // Outros
  { id: "socio-proprietario", label: "Sócio / Proprietário" },
  { id: "investidor", label: "Investidor" },
  { id: "consultor-imobiliario", label: "Consultor Imobiliário" },
  { id: "outro", label: "Outro" },
];

const funcionarios = [
  { id: "1-10", label: "1-10 funcionários" },
  { id: "11-50", label: "11-50 funcionários" },
  { id: "51-200", label: "51-200 funcionários" },
  { id: "201-500", label: "201-500 funcionários" },
  { id: "500+", label: "Mais de 500 funcionários" },
];

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cargo: "",
    company: "",
    funcionarios: "",
    situacao: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Enviando mensagem...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar");
      }

      // Dismiss loading and show success
      toast.dismiss(loadingToast);
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contato em breve.",
        duration: 5000,
      });

      setIsSubmitted(true);

      // Reset após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          cargo: "",
          company: "",
          funcionarios: "",
          situacao: "",
          message: "",
        });
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.dismiss(loadingToast);
      toast.error("Erro ao enviar mensagem", {
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <SectionWrapper background="gradient">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Vamos Conversar
            </Badge>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Entrando no seu primeiro{" "}
              <span className="text-primary">grande lançamento</span>?
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {positioning.cta}
            </p>
            <p className="text-base text-muted-foreground/80">
              Não é orçamento — é uma conversa para entender se faz sentido
              trabalharmos juntos.
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Contact Form & Info */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn>
              <Card className="border-0 shadow-xl shadow-primary/5">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold mb-2">
                        Mensagem Enviada!
                      </h3>
                      <p className="text-muted-foreground">
                        Obrigado pelo contato. Vamos analisar sua situação e
                        retornaremos em breve para agendar uma conversa.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                          >
                            Seu nome *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nome completo"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium mb-2"
                          >
                            WhatsApp *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(11) 99999-9999"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="cargo"
                            className="block text-sm font-medium mb-2"
                          >
                            Cargo *
                          </label>
                          <Select
                            value={formData.cargo}
                            onValueChange={(value) => handleSelectChange("cargo", value)}
                            required
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Selecione seu cargo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Diretoria</SelectLabel>
                                <SelectItem value="ceo-diretor-geral">CEO / Diretor Geral</SelectItem>
                                <SelectItem value="diretor-comercial">Diretor Comercial</SelectItem>
                                <SelectItem value="diretor-marketing">Diretor de Marketing</SelectItem>
                                <SelectItem value="diretor-incorporacao">Diretor de Incorporação</SelectItem>
                                <SelectItem value="diretor-operacoes">Diretor de Operações</SelectItem>
                              </SelectGroup>
                              <SelectGroup>
                                <SelectLabel>Gerência</SelectLabel>
                                <SelectItem value="gerente-comercial">Gerente Comercial</SelectItem>
                                <SelectItem value="gerente-marketing">Gerente de Marketing</SelectItem>
                                <SelectItem value="gerente-vendas">Gerente de Vendas</SelectItem>
                                <SelectItem value="gerente-projetos">Gerente de Projetos</SelectItem>
                                <SelectItem value="gerente-lancamentos">Gerente de Lançamentos</SelectItem>
                              </SelectGroup>
                              <SelectGroup>
                                <SelectLabel>Coordenação</SelectLabel>
                                <SelectItem value="coordenador-marketing">Coordenador de Marketing</SelectItem>
                                <SelectItem value="coordenador-vendas">Coordenador de Vendas</SelectItem>
                                <SelectItem value="coordenador-comercial">Coordenador Comercial</SelectItem>
                              </SelectGroup>
                              <SelectGroup>
                                <SelectLabel>Analistas</SelectLabel>
                                <SelectItem value="analista-marketing">Analista de Marketing</SelectItem>
                                <SelectItem value="analista-inteligencia">Analista de Inteligência de Mercado</SelectItem>
                                <SelectItem value="especialista-midia">Especialista em Mídia</SelectItem>
                              </SelectGroup>
                              <SelectGroup>
                                <SelectLabel>Imobiliárias</SelectLabel>
                                <SelectItem value="corretor-imoveis">Corretor de Imóveis</SelectItem>
                                <SelectItem value="proprietario-imobiliaria">Proprietário de Imobiliária</SelectItem>
                                <SelectItem value="gerente-imobiliaria">Gerente de Imobiliária</SelectItem>
                              </SelectGroup>
                              <SelectGroup>
                                <SelectLabel>Outros</SelectLabel>
                                <SelectItem value="socio-proprietario">Sócio / Proprietário</SelectItem>
                                <SelectItem value="investidor">Investidor</SelectItem>
                                <SelectItem value="consultor-imobiliario">Consultor Imobiliário</SelectItem>
                                <SelectItem value="outro">Outro</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium mb-2"
                          >
                            Construtora / Incorporadora *
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Nome da empresa"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="funcionarios"
                            className="block text-sm font-medium mb-2"
                          >
                            Número de funcionários *
                          </label>
                          <Select
                            value={formData.funcionarios}
                            onValueChange={(value) => handleSelectChange("funcionarios", value)}
                            required
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                            <SelectContent>
                              {funcionarios.map((func) => (
                                <SelectItem key={func.id} value={func.id}>
                                  {func.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="situacao"
                          className="block text-sm font-medium mb-2"
                        >
                          Qual sua situação atual?
                        </label>
                        <Select
                          value={formData.situacao}
                          onValueChange={(value) => handleSelectChange("situacao", value)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione uma opção" />
                          </SelectTrigger>
                          <SelectContent>
                            {situacoes.map((situacao) => (
                              <SelectItem key={situacao.id} value={situacao.id}>
                                {situacao.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                        >
                          Conte um pouco sobre o projeto *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Qual empreendimento você está preparando? Qual fase do projeto? O que te levou a buscar ajuda estratégica?"
                          rows={5}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Enviando...
                          </>
                        ) : (
                          <>
                            Quero Conversar
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Suas informações são confidenciais e não serão compartilhadas.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-2">
                    Contato Direto
                  </h2>
                  <p className="text-muted-foreground">
                    Se preferir, entre em contato diretamente.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.label}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={
                              info.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="font-medium">{info.value}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Response Time */}
                <Card className="bg-primary/5 border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          Tempo de Resposta
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Respondemos em até 2 horas durante horário comercial
                          (Seg-Sex, 9h-18h).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* For Who */}
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          Para Quem é Esta Conversa
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Donos de construtoras em transição, preparando seu
                          primeiro grande lançamento vertical e que precisam de
                          segurança estratégica.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp CTA */}
                <Card className="bg-[#25D366]/10 border-[#25D366]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          Prefere WhatsApp?
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Conversa rápida e direta.
                        </p>
                        <Button
                          asChild
                          size="sm"
                          className="bg-[#25D366] hover:bg-[#20bd5a]"
                        >
                          <a
                            href={siteConfig.links.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Iniciar Conversa
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      {/* Map Section */}
      <SectionWrapper className="pt-0">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
              Nossa Localização
            </h2>
            <p className="text-muted-foreground">
              Rua dos Coqueiros, 44 - Centro, Ribeirão Pires - SP
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Rua+dos+Coqueiros+44+Centro+Ribeirao+Pires+SP+Brasil&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Agência RPK"
              className="w-full"
            />
          </div>
          <div className="mt-6 text-center">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+dos+Coqueiros+44+Centro+Ribeirao+Pires+SP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </Button>
          </div>
        </FadeIn>
      </SectionWrapper>
    </>
  );
}
