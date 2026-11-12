import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="text-7xl font-black">404</p>
      <h1 className="mt-4 text-3xl font-black tracking-tight">
        Yoinked by someone else
      </h1>
      <p className="mt-3 text-lg text-ink/70">
        That page doesn&apos;t exist. Let&apos;s get you back to the good stuff.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-xl border-2 border-ink bg-lime px-5 py-3 font-bold shadow-pop"
      >
        Back home
      </Link>
    </div>
  );
}
