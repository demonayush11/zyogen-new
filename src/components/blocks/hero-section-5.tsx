"use client";

import Link from "next/link";
import * as React from "react";
import { ChevronRight, Dna, Menu, X } from "lucide-react";
import { motion, useScroll } from "motion/react";

import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Products", href: "#products" },
  { name: "Technology", href: "#technology" },
  { name: "For Clinicians", href: "#for-clinicians" },
  { name: "For Patients", href: "#for-patients" },
  { name: "About", href: "#about" },
];

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <section className="relative overflow-hidden px-6 pb-20 pt-28 lg:px-12 lg:pt-44">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="z-10">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">
              Regenerative Medicine + AI + Genomics
            </p>
            <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Your Biology. Preserved. Ready When You Need It.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Zyogen builds personalized organ readiness through bioprinting
              intelligence powered by your unique genetic profile, tissue data,
              and immune signatures.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link href="#products">
                  Explore the Organ Vault <ChevronRight className="ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-7"
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-cyan-200/20 bg-slate-900/60 p-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.35),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.25),transparent_45%)]" />
            <img
              className="h-full w-full rounded-2xl object-cover opacity-70"
              src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1400&q=80"
              alt="Digital organ twin visualization"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        </div>
      </section>
      <section className="border-y border-white/10 bg-slate-950/60 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 md:flex-row lg:px-12">
          <p className="text-sm text-slate-300 md:w-80 md:text-right">
            Partnering with India&apos;s leading medical institutions
          </p>
          <div className="relative w-full">
            <InfiniteSlider duration={36} durationOnHover={60} gap={72}>
              {["Apollo", "AIIMS", "Narayana", "MedGenome", "IIT-B", "CCMB"].map(
                (partner) => (
                  <div
                    key={partner}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-400 grayscale"
                  >
                    {partner}
                  </div>
                ),
              )}
            </InfiniteSlider>
            <ProgressiveBlur
              direction="left"
              className="pointer-events-none absolute left-0 top-0 h-full w-10"
            />
            <ProgressiveBlur
              direction="right"
              className="pointer-events-none absolute right-0 top-0 h-full w-10"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function HeroHeader() {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.03);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav data-state={menuState && "active"} className="fixed z-50 w-full px-4 pt-3">
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-2xl border border-white/10 px-5 transition-all lg:px-8",
            scrolled && "bg-slate-950/70 backdrop-blur-xl",
          )}
        >
          <motion.div
            className={cn(
              "flex flex-wrap items-center justify-between gap-4 py-3 lg:py-4",
              scrolled && "lg:py-3",
            )}
          >
            <div className="flex w-full items-center justify-between gap-8 lg:w-auto">
              <Link href="/" className="flex items-center gap-2 text-white">
                <Dna className="h-5 w-5 text-cyan-300" />
                <span className="font-semibold tracking-wide">ZYOGEN</span>
              </Link>
              <button
                onClick={() => setMenuState((prev) => !prev)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="block p-2 lg:hidden"
              >
                {menuState ? (
                  <X className="h-5 w-5 text-white" />
                ) : (
                  <Menu className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
            <ul className="hidden gap-7 text-sm text-slate-200 lg:flex">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="transition hover:text-cyan-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden items-center gap-3 lg:flex">
              <Button variant="outline" asChild className="rounded-full">
                <Link href="#">Clinician Login</Link>
              </Button>
              <Button asChild className="rounded-full">
                <Link href="#">Request a Demo</Link>
              </Button>
            </div>
            {menuState && (
              <div className="w-full rounded-2xl border border-white/10 bg-slate-900/95 p-5 lg:hidden">
                <ul className="space-y-4 text-sm text-slate-200">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-col gap-3">
                  <Button variant="outline">Clinician Login</Button>
                  <Button>Request a Demo</Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </nav>
    </header>
  );
}
