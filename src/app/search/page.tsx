import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = { title: "Search" };

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

/**
 * The page shell is static and prerendered. Only the part that reads the URL
 * query (runtime data) is wrapped in <Suspense>, so the shell appears instantly
 * and the results stream in. The fallback doubles as our loading state.
 */
export default function SearchPage({ searchParams }: PageProps<"/search">) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
      <Suspense fallback={<SearchSkeleton />}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
      <Link
        href="/#categories"
        className="mt-8 inline-block rounded-xl border-2 border-ink bg-lime px-5 py-3 font-bold shadow-pop"
      >
        Browse categories
      </Link>
    </div>
  );
}

async function SearchResults({ searchParams }: { searchParams: SearchParams }) {
  // searchParams is user input: it can be missing, a string, or an array
  // (?q=a&q=b). Normalise it, trim it, and cap the length.
  const { q } = await searchParams;
  const raw = Array.isArray(q) ? q[0] : q;
  const query = (raw ?? "").trim().slice(0, 100);

  return (
    <>
      <h1 className="text-4xl font-black tracking-tight">
        {query ? "No results yet" : "Search Yoink"}
      </h1>
      {/* React escapes {query} automatically, which blocks script injection (XSS). */}
      <p className="mt-3 text-lg text-ink/70">
        {query
          ? `We don't have anything for “${query}” yet. Product search goes live once the catalogue does.`
          : "Type something into the search bar above."}
      </p>
    </>
  );
}

function SearchSkeleton() {
  return (
    <div aria-busy="true" aria-live="polite" className="animate-pulse">
      <span className="sr-only">Loading search</span>
      <div className="mx-auto h-10 w-2/3 rounded-lg bg-ink/10" />
      <div className="mx-auto mt-4 h-5 w-1/2 rounded-lg bg-ink/10" />
    </div>
  );
}
