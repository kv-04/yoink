import { CategoryCard } from "@/components/CategoryCard";
import { categories } from "@/lib/categories";

/**
 * Replaces the two copy-pasted `.shop-section` rows from the original HTML.
 * One data array + one map() = eight cards, and CSS Grid handles the
 * 1 / 2 / 4 column layout at different screen widths.
 */
export function CategoryGrid() {
  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="mx-auto max-w-7xl scroll-mt-32 px-4 py-14 sm:px-6"
    >
      <h2
        id="categories-heading"
        className="text-3xl font-black tracking-tight sm:text-4xl"
      >
        Shop by vibe
      </h2>
      <p className="mt-2 max-w-xl text-ink/70">
        Pick a lane. Everything is organised so you can find it fast.
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <li key={category.slug}>
            <CategoryCard category={category} />
          </li>
        ))}
      </ul>
    </section>
  );
}
