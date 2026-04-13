"use client";

import Image from "next/image";
import React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const products = [
  {
    title: "The Organ Vault™",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&auto=format&fit=crop",
    text: "Secure patient digital twin and biological timeline.",
  },
  {
    title: "AI BioCompiler",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&auto=format&fit=crop",
    text: "Clinical language converted into bioprint specifications.",
  },
  {
    title: "Genomic Tissue Engine",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?w=900&auto=format&fit=crop",
    text: "Raw genomic inputs transformed into lab-ready outputs.",
  },
  {
    title: "Immune Match Layer",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=900&auto=format&fit=crop",
    text: "Compatibility mapping for safer bioprint planning.",
  },
];

export default function HeroScrollAnimation() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f14_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f14_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-cyan-300/80">
            Regenerative Intelligence
          </p>
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            Product Ecosystem
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
            Three integrated platforms powering patient trust, clinician speed,
            and lab precision.
          </p>
        </div>

        <div className="mt-10">
          <InfiniteSlider duration={36} durationOnHover={55} gap={16}>
            {products.map((item) => (
              <div
                key={item.title}
                className="group relative w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 md:w-[360px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{item.text}</p>
                </div>
              </div>
            ))}
          </InfiniteSlider>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex w-full max-w-4xl flex-col items-center rounded-[2rem] border border-white/10 bg-zinc-950/60 px-8 py-10">
            <Image
              src="/zyogen-mark.svg"
              alt="Zyogen"
              width={500}
              height={116}
              className="h-auto w-[320px] object-contain md:w-[460px]"
            />
            <p className="mt-4 text-center text-sm text-zinc-400">
              India&apos;s First Bioprinting Company
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
