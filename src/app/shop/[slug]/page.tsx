import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { categories, getCategory } from "@/lib/categories";

type Params = PageProps<"/shop/[slug]">["params"];

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/shop/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return { title: category?.name ?? "Not found" };
}

// The shell: not async, so it can render immediately.
export default function CategoryPage({ params }: PageProps<"/shop/[slug]">) {
  return (
    <Suspense fallback={<CategorySkeleton />}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

// The content: this is where we await the URL data.
async function CategoryContent({ params }: { params: Params }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-sm font-medium text-ink/70">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page" className="text-ink">
          {category.name}
        </span>
      </nav>

      <div className="mt-6 grid items-center gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-ink shadow-pop">
          <Image
            src={category.image}
            alt={category.alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            priority
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-3 text-lg text-ink/70">{category.blurb}</p>
        </div>
      </div>

      <section
        aria-labelledby="empty-heading"
        className="mt-12 rounded-2xl border-2 border-dashed border-ink bg-white p-10 text-center"
      >
        <h2 id="empty-heading" className="text-2xl font-extrabold">
          Nothing here yet
        </h2>
        <p className="mx-auto mt-2 max-w-md text-ink/70">
          We&apos;re still stocking this aisle. Check back soon, or look
          around other categories.
        </p>
        <Link
          href="/#categories"
          className="mt-6 inline-block rounded-xl border-2 border-ink bg-lime px-5 py-3 font-bold shadow-pop"
        >
          Browse all categories
        </Link>
      </section>
    </div>
  );
}

// Loading state: grey blocks shaped like the real content.
function CategorySkeleton() {
  return (
    <div
      aria-busy="true"
      className="mx-auto max-w-7xl animate-pulse px-4 py-10 sm:px-6"
    >
      <span className="sr-only">Loading category</span>
      <div className="h-4 w-40 rounded bg-ink/10" />
      <div className="mt-6 grid items-center gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="aspect-[4/3] rounded-2xl bg-ink/10" />
        <div>
          <div className="h-12 w-2/3 rounded-lg bg-ink/10" />
          <div className="mt-4 h-5 w-1/2 rounded-lg bg-ink/10" />
        </div>
      </div>
    </div>
  );
}