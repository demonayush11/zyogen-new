import Link from "next/link";
import { BadgeCheck, ClipboardList, FlaskConical, Gauge, Shield, Workflow } from "lucide-react";

export default function CliniciansPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-zinc-100 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.18),transparent_38%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.1),transparent_40%),#090909] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">For Clinicians</p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Clinical Precision,
            <br />
            Bioprint Speed
          </h1>
          <p className="mt-5 max-w-3xl text-zinc-300">
            Zyogen gives care teams a fast route from patient context to validated
            tissue design outputs with safety visibility at every stage.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-cyan-200">
              Structured Specs
            </span>
            <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-cyan-200">
              Rejection Risk Tiering
            </span>
            <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-cyan-200">
              Lab-Ready Outputs
            </span>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: ClipboardList,
              title: "Natural Language Intake",
              text: "Describe tissue needs in plain clinical language and receive structured bioprint instructions.",
            },
            {
              icon: Gauge,
              title: "Compatibility Scoring",
              text: "Automated immune-risk and HLA-aware scoring for tissue-target feasibility.",
            },
            {
              icon: Workflow,
              title: "Protocol Sequencing",
              text: "Stage-by-stage expression order with time windows and checkpoint signals.",
            },
            {
              icon: FlaskConical,
              title: "Bio-ink Mapping",
              text: "Recommended hydrogel composition, cell density, and crosslinking method.",
            },
            {
              icon: Shield,
              title: "Safety-first Outputs",
              text: "Warnings, anomaly flags, and interactions surfaced before execution.",
            },
            {
              icon: BadgeCheck,
              title: "Export-ready Reports",
              text: "Download protocol summaries, print parameters, and auditable result snapshots.",
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
          <h2 className="text-2xl font-semibold text-white">Clinician Workflow</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {["Case Input", "Model Processing", "Risk Review", "Lab Dispatch"].map(
              (step, i) => (
                <div key={step} className="rounded-xl border border-white/10 bg-black/40 p-4 text-sm">
                  <p className="text-cyan-300">0{i + 1}</p>
                  <p className="mt-1 text-zinc-200">{step}</p>
                </div>
              ),
            )}
          </div>
          <Link href="/request-demo" className="mt-6 inline-block text-cyan-300">
            Request Clinician Demo
          </Link>
        </section>
      </div>
    </main>
  );
}
