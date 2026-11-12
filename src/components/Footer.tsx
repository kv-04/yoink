import { cacheLife } from "next/cache";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { categories } from "@/lib/categories";

const half = Math.ceil(categories.length / 2);
const columns = [
  { title: "Shop", items: categories.slice(0, half) },
  { title: "More", items: categories.slice(half) },
];

/**
 * `new Date()` changes on every call, which Next.js refuses to bake into a
 * prerendered page by accident. "use cache" says "compute this once, reuse
 * it", and cacheLife controls how long before it is recomputed.
 */
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="mt-8 border-t-2 border-ink bg-ink text-cream">
      <a
        href="#top"
        className="block border-b border-cream/20 py-3 text-center text-sm font-bold hover:bg-cream/10"
      >
        Back to top
      </a>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-3xl font-black lowercase tracking-tight">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm text-cream/70">{siteConfig.description}</p>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="font-bold text-lime">{column.title}</p>
            <ul className="mt-3 space-y-2">
              {column.items.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/shop/${category.slug}`}
                    className="text-cream/80 hover:text-white hover:underline"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <p className="border-t border-cream/20 px-4 py-5 text-center text-xs text-cream/60">
        © <CurrentYear /> {siteConfig.name}. Portfolio project, not a real store. 
        Built by Karanveer Singh.
        
      </p>
    </footer>
  );
}
