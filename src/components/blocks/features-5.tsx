import {
  Activity,
  BrainCircuit,
  DatabaseZap,
  Dna,
  HeartPulse,
  Microscope,
} from "lucide-react";

const products = [
  {
    icon: HeartPulse,
    name: "The Organ Vault\u2122",
    tagline: "Your secure patient biobank portal",
    description:
      "Stores tissues, stem cell signatures, immune response profiles, and genetic markers as a living digital twin.",
  },
  {
    icon: BrainCircuit,
    name: "AI BioCompiler",
    tagline: "From clinical language to print-ready specs",
    description:
      "Transforms clinician instructions into structured and validated bioprinting parameters through a natural language interface.",
  },
  {
    icon: Microscope,
    name: "Genomic Tissue Design Engine",
    tagline: "Lab software for precision tissue synthesis",
    description:
      "Converts raw biological data into customized gene sequence and expression order for regenerative tissue design.",
  },
];

const highlights = [
  { icon: Dna, text: "Genomics-native architecture" },
  { icon: Activity, text: "Clinical-grade data workflows" },
  { icon: DatabaseZap, text: "AI-assisted lab readiness outputs" },
];

export function Features() {
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">
            Products
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            The operating layer for personalized bioprinting
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"
            >
              <product.icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 text-xl font-semibold text-white">{product.name}</h3>
              <p className="mt-2 text-sm text-cyan-200">{product.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {product.description}
              </p>
              <a href="#" className="mt-5 inline-block text-sm text-cyan-300">
                Learn More -&gt;
              </a>
            </article>
          ))}
        </div>
        <ul className="mt-10 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
          {highlights.map((item) => (
            <li key={item.text} className="flex items-center gap-3 text-slate-300">
              <item.icon className="h-4 w-4 text-cyan-300" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
