"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className = "", variant = "light" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center"
      >
        <Image
          src="/logo-rpk.svg"
          alt="Agência RPK"
          width={165}
          height={39}
          className="h-10 w-auto"
          priority
        />
      </motion.div>
    </Link>
  );
}
