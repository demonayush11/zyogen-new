import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-zinc-100 lg:px-12">
      <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-6">
        <h1 className="text-2xl font-semibold">Clinician Login</h1>
        <p className="mt-2 text-sm text-zinc-400">Secure access to Zyogen clinical tools.</p>
        <form className="mt-6 space-y-4">
          <input className="w-full rounded-lg border border-white/10 bg-black px-3 py-2" placeholder="Email" />
          <input type="password" className="w-full rounded-lg border border-white/10 bg-black px-3 py-2" placeholder="Password" />
          <button type="button" className="w-full rounded-lg bg-cyan-400 px-3 py-2 font-semibold text-black">Sign In</button>
        </form>
        <Link href="/" className="mt-5 inline-block text-sm text-cyan-300">Back to Home</Link>
      </div>
    </main>
  );
}
