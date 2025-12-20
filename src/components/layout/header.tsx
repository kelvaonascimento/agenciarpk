"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { navigation, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Páginas com fundo escuro (hero escuro) - todas as outras terão header escuro por padrão
const darkBackgroundPages = ["/"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Verifica se é uma página com fundo escuro (inverte a lógica - padrão é claro)
  const isDarkBackground = darkBackgroundPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#111111]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10"
            : isDarkBackground
            ? "bg-transparent"
            : "bg-white/80 backdrop-blur-xl border-b border-black/5"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Logo variant={!isDarkBackground && !isScrolled ? "dark" : "light"} />

            {/* Desktop Navigation */}
            <nav className={cn(
              "hidden md:flex items-center gap-1 rounded-full px-2 py-1",
              !isDarkBackground && !isScrolled
                ? "bg-black/5"
                : "glass"
            )}>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    pathname === item.href
                      ? "text-white bg-primary shadow-lg shadow-primary/20"
                      : !isDarkBackground && !isScrolled
                      ? "text-gray-700 hover:text-gray-900 hover:bg-black/5"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button asChild className="rounded-full glow-orange-sm hover:glow-orange transition-all">
                <Link href="/contato" className="gap-2">
                  Conversar
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-full",
                !isDarkBackground && !isScrolled
                  ? "text-gray-700 bg-black/5"
                  : "text-white glass"
              )}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#111111]/98 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute top-20 left-4 right-4 glass rounded-2xl p-6"
            >
              <div className="flex flex-col gap-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-lg font-medium rounded-xl transition-all",
                        pathname === item.href
                          ? "text-white bg-primary"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigation.length * 0.05 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <Button asChild className="w-full rounded-xl" size="lg">
                    <Link
                      href="/contato"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="gap-2"
                    >
                      Conversar
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (navigation.length + 1) * 0.05 }}
                  className="mt-6 text-center text-sm text-white/50"
                >
                  <p>{siteConfig.contact.email}</p>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
