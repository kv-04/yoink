import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { getCategory } from "@/lib/categories";

// Decorative stack of tilted cards, built from our own category data.
const stack = [
  { slug: "closet", style: "-rotate-6 left-0 top-10 z-10" },
  { slug: "tech", style: "rotate-3 left-24 top-0 z-20" },
  { slug: "pets", style: "-rotate-2 left-12 top-44 z-30" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-lime">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div>
          <p className="inline-block -rotate-2 rounded-full border-2 border-ink bg-white px-3 py-1 text-sm font-bold shadow-pop-sm">
            Fresh drops, all the time
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium text-ink/80">
            Fashion, tech, beauty, pets and more, all in one place. Search it,
            save it, yoink it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop/trending"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-ink px-5 py-3 font-bold text-cream shadow-pop transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              Shop trending
              <ArrowRightIcon />
            </Link>
            <a
              href="#categories"
              className="inline-flex items-center rounded-xl border-2 border-ink bg-white px-5 py-3 font-bold shadow-pop transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              Browse categories
            </a>
          </div>
        </div>

        {/* aria-hidden: purely decorative, so screen readers skip it. */}
        <div aria-hidden="true" className="relative hidden h-96 md:block">
          {stack.map(({ slug, style }) => {
            const category = getCategory(slug);
            if (!category) return null;
            return (
              <div
                key={slug}
                className={`absolute h-48 w-64 overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-pop-lg ${style}`}
              >
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="256px"
                  priority
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
