"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CircularGallery from "@/components/ui/circular-flip-card-gallery";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <main className="overflow-x-hidden bg-black">
      <section>
        <div className="pb-20 pt-28 md:pb-24 md:pt-32 lg:pb-28 lg:pt-40">
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl text-white md:text-6xl lg:mt-16 xl:text-7xl">
                The Future of Organ Transplants Starts With You
              </h1>
              <p className="mt-8 max-w-2xl text-balance text-lg text-zinc-300">
                Personalized bioprinting powered by your unique genetic
                profile, immune markers, and living tissue intelligence.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-cyan-400 pl-5 pr-3 text-base text-black hover:bg-cyan-300"
                >
                  <Link href="/products">
                    <span className="text-nowrap">Explore the Organ Vault™</span>
                    <ChevronRight className="ml-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full border border-white/20 px-5 text-base text-white hover:bg-white/10"
                >
                  <Link href="/technology">
                    <span className="text-nowrap">See How It Works</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <CircularGallery />
            </div>
          </div>
          <div className="absolute inset-1 aspect-[2/3] overflow-hidden rounded-3xl border border-white/10 sm:aspect-video lg:rounded-[3rem]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover opacity-35"
              src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>
        </div>
      </section>
      <section className="bg-black pb-2">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-80 md:border-r md:border-white/10 md:pr-6">
              <p className="text-end text-sm text-zinc-400">
                Partnering with India&apos;s leading medical institutions
              </p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-20rem)]">
              <InfiniteSlider durationOnHover={45} duration={30} gap={80}>
                {["Apollo", "AIIMS", "Narayana", "MedGenome", "CCMB", "IIT-B"].map(
                  (name) => (
                    <div className="flex" key={name}>
                      <div className="mx-auto w-fit rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-400">
                        {name}
                      </div>
                    </div>
                  ),
                )}
              </InfiniteSlider>

              <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-black" />
              <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-black" />
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
