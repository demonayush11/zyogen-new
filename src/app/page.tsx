 "use client";

import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Database,
  FlaskConical,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { Features } from "@/components/ui/features-5";
import { FeyButton } from "@/components/ui/fey-button";
import { HeroSection } from "@/components/ui/hero-section-5";

const workflowSteps = [
  {
    title: "Profile Created",
    text: "Patients onboard and consent into a secure genomic + tissue record.",
  },
  {
    title: "Biological Data Stored",
    text: "Stem-cell, tissue, and immune metadata is structured inside Organ Vault.",
  },
  {
    title: "Organ Matched",
    text: "Zyogen AI maps compatibility and computes viable tissue synthesis paths.",
  },
  {
    title: "Bioprint Ready",
    text: "Clinicians receive validated, lab-ready specifications for execution.",
  },
];

export default function Home() {
  const [tab, setTab] = useState<"patients" | "clinicians">("patients");

  return (
    <div className="bg-black text-zinc-100">
      <HeroSection />
      <Features />

      <section id="how-it-works" className="border-y border-white/10 bg-black py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-3xl font-semibold md:text-4xl">How It Works</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-zinc-950 p-5"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/15 text-sm text-cyan-300">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-zinc-950 p-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setTab("patients")}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  tab === "patients"
                    ? "bg-cyan-400 text-black"
                    : "bg-transparent text-zinc-300 hover:bg-white/5"
                }`}
              >
                For Patients
              </button>
              <button
                onClick={() => setTab("clinicians")}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  tab === "clinicians"
                    ? "bg-cyan-400 text-black"
                    : "bg-transparent text-zinc-300 hover:bg-white/5"
                }`}
              >
                For Clinicians
              </button>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/10 bg-zinc-950 p-8">
            {tab === "patients" ? (
              <div id="for-patients">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                  For Patients
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Privacy, peace of mind, and personalized care continuity
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-zinc-400">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-cyan-300" />
                    Encrypted vault access with patient-owned consent workflows.
                  </li>
                  <li className="flex items-start gap-3">
                    <Database className="mt-0.5 h-4 w-4 text-cyan-300" />
                    Longitudinal biological profile for future transplant readiness.
                  </li>
                  <li className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-4 w-4 text-cyan-300" />
                    Personalized match pathways for future regenerative care.
                  </li>
                </ul>
              </div>
            ) : (
              <div id="for-clinicians">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                  For Clinicians
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Seamless integration and AI-assisted bioprint precision
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-zinc-400">
                  <li className="flex items-start gap-3">
                    <Stethoscope className="mt-0.5 h-4 w-4 text-cyan-300" />
                    Structured outputs integrate into existing hospital lab workflows.
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-cyan-300" />
                    AI-generated print specs move directly from diagnosis to synthesis.
                  </li>
                  <li className="flex items-start gap-3">
                    <FlaskConical className="mt-0.5 h-4 w-4 text-cyan-300" />
                    Lab-ready genomic expression sequences for tissue design.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-black py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(8,145,178,0.2),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.1),transparent_45%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">CTA</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Your Organ Twin is Waiting to Be Built
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
            Start your secure profile today and enable personalized regenerative care
            pathways for tomorrow.
          </p>
          <div className="mt-8 flex justify-center">
            <FeyButton>Create Your Organ Vault Profile</FeyButton>
          </div>
        </div>
      </section>

      <footer id="about" className="border-t border-white/10 bg-black py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-5 lg:px-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white">Zyogen</h3>
            <p className="mt-3 text-sm text-zinc-400">
              India&apos;s first homegrown bioprinting company at the intersection of
              regenerative medicine, genomics, and AI.
            </p>
            <p className="mt-4 text-xs text-zinc-500">
              Zyogen - India&apos;s First Bioprinting Company. Regenerative Medicine
              Powered by AI &amp; Genomics.
            </p>
          </div>
          {[
            ["Products", "Organ Vault", "AI BioCompiler", "Design Engine"],
            ["Company", "About", "Careers", "Research"],
            ["Legal", "Privacy", "Terms", "Security"],
          ].map((group) => (
            <div key={group[0]}>
              <h4 className="font-medium text-white">{group[0]}</h4>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                {group.slice(1).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-medium text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>hello@zyogen.in</li>
              <li>Bengaluru, India</li>
              <li>LinkedIn / X / YouTube</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
