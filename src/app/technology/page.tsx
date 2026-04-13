import Link from "next/link";
import {
  Activity,
  BrainCircuit,
  Cpu,
  Database,
  Microscope,
  ShieldCheck,
} from "lucide-react";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-zinc-100 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.2),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.12),transparent_45%),#090909] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Technology Core</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Where Genomics Meets
            <br />
            AI-Guided Tissue Intelligence
          </h1>
          <p className="mt-5 max-w-3xl text-zinc-300">
            Zyogen combines regenerative science, immunological analytics, and
            bioprint parameter engines into one clinical-grade architecture.
          </p>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: BrainCircuit,
              title: "AI BioCompiler Layer",
              text: "Parses natural language and generates structured, machine-readable print specifications.",
            },
            {
              icon: Activity,
              title: "Compatibility Intelligence",
              text: "Computes risk tiers from HLA signatures, immune markers, and prior rejection context.",
            },
            {
              icon: Microscope,
              title: "Genomic Design Engine",
              text: "Builds curated gene sets and stage-by-stage expression protocols for target tissue growth.",
            },
            {
              icon: Cpu,
              title: "Embedded Hardware Runtime",
              text: "Optimized for dedicated workstations and controlled lab execution environments.",
            },
            {
              icon: Database,
              title: "Structured Clinical Data Fabric",
              text: "Unifies blood panels, genomic files, tissue specifications, and protocol version history.",
            },
            {
              icon: ShieldCheck,
              title: "Safety & Audit Controls",
              text: "Every output includes warning flags, validation notes, and clinician-review checkpoints.",
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
          <h2 className="text-2xl font-semibold text-white">Architecture Flow</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {["Input Normalization", "Compatibility Scoring", "Genomic Restructuring", "Bioprint Output"].map(
              (step, i) => (
                <div key={step} className="rounded-xl border border-white/10 bg-black/40 p-4 text-sm">
                  <p className="text-cyan-300">0{i + 1}</p>
                  <p className="mt-1 text-zinc-200">{step}</p>
                </div>
              ),
            )}
          </div>
          <Link href="/products" className="mt-6 inline-block text-cyan-300">
            See Product Details
          </Link>
        </section>
      </div>
    </main>
  );
}
