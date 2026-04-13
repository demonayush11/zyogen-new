import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black px-6 pb-16 pt-28 text-zinc-100 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.12),transparent_42%),#090909] p-8 md:p-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold md:text-5xl">Zyogen Product Stack</h1>
            <Link href="/" className="text-sm text-cyan-300">
              Back to Home
            </Link>
          </div>
          <p className="mt-4 max-w-3xl text-zinc-300">
            Three products power Zyogen&apos;s regenerative platform: The Organ
            Vault, AI BioCompiler, and the Genomic Tissue Design Engine.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-cyan-200">
              Patient Digital Twin
            </span>
            <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-cyan-200">
              Clinical NLP Compiler
            </span>
            <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-cyan-200">
              Embedded Genomic Engine
            </span>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["The Organ Vault™", "Secure patient-facing digital biobank portal."],
            ["AI BioCompiler", "Natural language to structured bioprint specs."],
            [
              "Genomic Tissue Design Engine",
              "Embedded lab software for tissue synthesis blueprints.",
            ],
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm text-zinc-400">{text}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-cyan-300/25 bg-zinc-950 p-6">
          <h2 className="text-2xl font-semibold text-white">
            Product 3: Genomic Tissue Design Engine
          </h2>
          <p className="mt-3 text-zinc-300">
            A standalone software system running on dedicated lab hardware that
            accepts full patient biological inputs and outputs a customized genetic
            blueprint for tissue synthesis.
          </p>

          <div className="mt-6 space-y-5 text-sm text-zinc-300">
            <div>
              <h3 className="font-semibold text-cyan-300">Core Concept</h3>
              <p className="mt-1">
                Input: blood reports, genetic markers, tissue goals, clinical history.
                Processing: AI-driven genomic restructuring and gene expression
                mapping. Output: patient-specific gene sequence and ordered expression
                protocol for rejection-resistant tissue printing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-cyan-300">Input Layer</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>CBC from PDF/manual entry</li>
                <li>Metabolic and biochemical panels</li>
                <li>DNA sequence input (FASTA/VCF), SNPs, HLA typing, mutations</li>
                <li>Immune profile and rejection history</li>
                <li>Tissue target type, dimensions, load requirements, urgency</li>
                <li>Free-text clinical notes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-cyan-300">Processing Layer</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Data validation and anomaly detection</li>
                <li>Immunological compatibility scoring (low/moderate/high risk)</li>
                <li>AI genomic restructuring with gene-level justification</li>
                <li>Ordered expression protocol with stage timing checkpoints</li>
                <li>Bio-ink and bioprinter parameter mapping</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-cyan-300">Output Layer</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Genomic Tissue Design Report (screen + PDF)</li>
                <li>Curated genes, expression levels, and protocol sequence</li>
                <li>Bio-ink formula, print parameters, and viability predictions</li>
                <li>Warnings for anomalous markers and risky interactions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Input -> Process -> Output",
              body: "Raw biological data is transformed into a stage-wise gene and print protocol through an auditable AI + bioinformatics pipeline.",
            },
            {
              title: "Safety-First by Design",
              body: "Every generated output must carry validation disclaimers, risk tiers, and gene interaction flags before print initiation.",
            },
            {
              title: "Hardware-Embedded Workflow",
              body: "Built for dedicated workstation/single-board setups with local structured data entry, protocol export, and controlled operator access.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-xl border border-white/10 bg-zinc-950 p-5">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-zinc-950 p-6">
          <h3 className="text-xl font-semibold text-white">Creative Next Step</h3>
          <p className="mt-2 text-sm text-zinc-400">
            This page now avoids dumping screenshots and instead presents a clean
            product story. Next we can add an interactive simulator: enter sample
            patient values and preview the generated tissue design protocol.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/request-demo" className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-black">
              Request Product Demo
            </Link>
            <Link href="/technology" className="rounded-lg border border-white/15 px-4 py-2 text-sm text-zinc-200">
              Explore Technology
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
