"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Share2,
  Twitter,
  Linkedin,
  Link2,
  Check,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
  title: string;
  description: string;
  className?: string;
  direction?: "horizontal" | "vertical";
}

export function ShareButtons({
  title,
  description,
  className,
  direction = "horizontal",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [mounted, setMounted] = useState(false);

  // Only access window after component mounts (client-side only)
  useEffect(() => {
    setShareUrl(window.location.href);
    setMounted(true);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const getShareLinks = () => [
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-[#1877F2]",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodeURIComponent(`${title} - ${shareUrl}`)}`,
      color: "hover:text-[#25D366]",
    },
  ];

  // Don't render share links until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div
        className={cn(
          "flex items-center gap-2",
          direction === "vertical" && "flex-col",
          className
        )}
      >
        <span className="text-sm text-muted-foreground flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          <span className={direction === "vertical" ? "sr-only" : ""}>
            Compartilhar
          </span>
        </span>
        <div
          className={cn(
            "flex items-center gap-1",
            direction === "vertical" && "flex-col"
          )}
        >
          {/* Placeholder buttons to prevent layout shift */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-9 w-9 rounded-md bg-muted/50 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  const shareLinks = getShareLinks();

  return (
    <TooltipProvider>
      <div
        className={cn(
          "flex items-center gap-2",
          direction === "vertical" && "flex-col",
          className
        )}
      >
        <span className="text-sm text-muted-foreground flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          <span className={direction === "vertical" ? "sr-only" : ""}>
            Compartilhar
          </span>
        </span>

        <div
          className={cn(
            "flex items-center gap-1",
            direction === "vertical" && "flex-col"
          )}
        >
          {shareLinks.map((link) => (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("h-9 w-9 text-muted-foreground", link.color)}
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="w-4 h-4" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side={direction === "vertical" ? "right" : "bottom"}>
                <p>Compartilhar no {link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-muted-foreground hover:text-primary relative"
                onClick={copyToClipboard}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Check className="w-4 h-4 text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="link"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <Link2 className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </TooltipTrigger>
            <TooltipContent side={direction === "vertical" ? "right" : "bottom"}>
              <p>{copied ? "Copiado!" : "Copiar link"}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
