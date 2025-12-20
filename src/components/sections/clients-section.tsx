"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Badge } from "@/components/ui/badge";

const clients = [
  { name: "GPC Empreendimentos", logo: "/clients/gpc-empreendimentos.png", width: 140 },
  { name: "MBigucci", logo: "/clients/mbigucci.png", width: 140 },
  { name: "Concretiza", logo: "/clients/concretiza.png", width: 180 },
  { name: "Grupo CEM", logo: "/clients/grupo-cem.png", width: 180 },
  { name: "Wind Incorporadora", logo: "/clients/wind-incorporadora.png", width: 150 },
  { name: "Grupo RAP", logo: "/clients/grupo-rap.png", width: 130 },
];

export function ClientsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Quem Confia na RPK
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Construtoras que crescem{" "}
            <span className="text-gradient">com a gente</span>
          </h2>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl py-8">
        <InfiniteSlider gap={80} reverse speed={40} speedOnHover={15}>
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center"
              style={{ width: client.width }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={60}
                className="w-full h-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </InfiniteSlider>

        <ProgressiveBlur
          blurIntensity={1}
          className="pointer-events-none absolute top-0 left-0 h-full w-[100px] md:w-[160px]"
          direction="left"
        />
        <ProgressiveBlur
          blurIntensity={1}
          className="pointer-events-none absolute top-0 right-0 h-full w-[100px] md:w-[160px]"
          direction="right"
        />
      </div>
    </section>
  );
}
