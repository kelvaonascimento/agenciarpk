"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { navigation, siteConfig, services } from "@/lib/constants";

const socialLinks = [
  {
    name: "Instagram",
    href: siteConfig.links.instagram,
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: siteConfig.links.facebook,
    icon: Facebook,
  },
];

const footerLinks = {
  services: services.map((s) => ({
    name: s.title,
    href: `/servicos#${s.id}`,
  })),
  company: [
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Estúdio estratégico de percepção de valor para pré-lançamentos
              imobiliários. Ajudamos construtoras em transição a lançar com
              velocidade de venda e segurança estratégica.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-3"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                  {siteConfig.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+dos+Coqueiros+44+Centro+Ribeirao+Pires+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-primary transition-colors"
                >
                  Rua dos Coqueiros, 44 - Centro<br />
                  Ribeirão Pires - SP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} Agência RPK. Todos os direitos reservados.
              </p>
              <span className="hidden md:inline text-gray-600">•</span>
              <p className="text-gray-500 text-sm">
                CNPJ: {siteConfig.cnpj}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/privacidade"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
