import Link from "next/link";
import { Dna, Globe2, HeartPulse, Microscope, Sparkles, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-zinc-100 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.18),transparent_38%),radial-gradient(circle_at_80%_75%,rgba(168,85,247,0.12),transparent_42%),#090909] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">About Zyogen</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            India&apos;s First Homegrown
            <br />
            Bioprinting Company
          </h1>
          <p className="mt-5 max-w-3xl text-zinc-300">
            Zyogen operates at the intersection of regenerative medicine, genomics,
            and AI to enable safer, faster, and more personalized tissue synthesis
            pathways.
          </p>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Dna,
              title: "Genomics-Native Foundation",
              text: "We design tissue protocols from patient-specific genetic and immune context.",
            },
            {
              icon: Microscope,
              title: "Lab-Integrated Software",
              text: "Our tools connect diagnostic data to executable bioprint instructions.",
            },
            {
              icon: HeartPulse,
              title: "Patient-Centric Mission",
              text: "We build for long-term readiness, privacy, and personalized outcomes.",
            },
            {
              icon: Users,
              title: "Clinical Collaboration",
              text: "Clinicians, researchers, and engineers co-create safer tissue pathways.",
            },
            {
              icon: Globe2,
              title: "Built in India, Scalable Globally",
              text: "Homegrown innovation with globally relevant regenerative standards.",
            },
            {
              icon: Sparkles,
              title: "AI With Accountability",
              text: "Every generated protocol is explainable, reviewable, and safety-aligned.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
              <item.icon className="h-5 w-5 text-cyan-300" />
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-white/10 bg-zinc-950 p-6">
          <h2 className="text-2xl font-semibold text-white">What We&apos;re Building</h2>
          <p className="mt-3 text-zinc-300">
            A complete software backbone for regenerative medicine: from patient
            profile vaulting to AI-assisted bioprint specifications and embedded
            genomic tissue design engines.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/products" className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-black">
              Explore Products
            </Link>
            <Link href="/technology" className="rounded-lg border border-white/15 px-4 py-2 text-sm text-zinc-200">
              View Technology
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
