import Link from "next/link";

export default function PatientsPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-zinc-100 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold">For Patients</h1>
        <p className="mt-4 text-zinc-300">
          Build your Organ Vault profile to preserve biological context and
          accelerate future personalized transplant readiness.
        </p>
        <ul className="mt-8 list-disc space-y-2 pl-5 text-zinc-300">
          <li>Consent-first privacy controls</li>
          <li>Longitudinal biological timeline</li>
          <li>Secure upload and tissue profile tracking</li>
        </ul>
        <Link href="/login" className="mt-8 inline-block text-cyan-300">
          Patient Login
        </Link>
      </div>
    </main>
  );
}
