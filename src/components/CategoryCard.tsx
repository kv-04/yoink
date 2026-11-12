import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { Category } from "@/lib/categories";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/shop/${category.slug}`}
      className="group block h-full rounded-2xl"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-pop transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-pop-lg motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink">
          <Image
            src={category.image}
            alt={category.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1 p-4">
          <h3 className="text-lg font-extrabold">{category.name}</h3>
          <p className="text-sm text-ink/70">{category.blurb}</p>
          <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-bold text-violet">
            Shop now
            <ArrowRightIcon width={16} height={16} />
          </span>
        </div>
      </article>
    </Link>
  );
}
