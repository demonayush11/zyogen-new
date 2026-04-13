import Link from "next/link";

export default function RequestDemoPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-zinc-100 lg:px-12">
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-zinc-950 p-6">
        <h1 className="text-2xl font-semibold">Request a Demo</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Tell us about your clinical or research use case and our team will reach out.
        </p>
        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <input className="rounded-lg border border-white/10 bg-black px-3 py-2" placeholder="Full name" />
          <input className="rounded-lg border border-white/10 bg-black px-3 py-2" placeholder="Organization" />
          <input className="rounded-lg border border-white/10 bg-black px-3 py-2 md:col-span-2" placeholder="Work email" />
          <textarea className="min-h-24 rounded-lg border border-white/10 bg-black px-3 py-2 md:col-span-2" placeholder="What do you want to evaluate?" />
          <button type="button" className="rounded-lg bg-cyan-400 px-3 py-2 font-semibold text-black md:col-span-2">Submit Request</button>
        </form>
        <Link href="/" className="mt-5 inline-block text-sm text-cyan-300">Back to Home</Link>
      </div>
    </main>
  );
}
