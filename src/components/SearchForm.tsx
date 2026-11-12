import { SearchIcon } from "@/components/icons";

/**
 * A plain HTML GET form, so it works with zero client-side JavaScript:
 * submitting navigates to /search?q=... and the server renders the results.
 * No useState, no onChange handler needed.
 */
export function SearchForm() {
  return (
    <form
      role="search"
      action="/search"
      method="get"
      className="flex w-full overflow-hidden rounded-xl border-2 border-ink bg-white shadow-pop-sm focus-within:ring-4 focus-within:ring-violet/40"
    >
      <label htmlFor="site-search" className="sr-only">
        Search products
      </label>
      <input
        id="site-search"
        name="q"
        type="search"
        placeholder="Search for anything"
        autoComplete="off"
        maxLength={100}
        className="min-w-0 flex-1 bg-transparent px-4 py-2.5 outline-none placeholder:text-ink/50"
      />
      <button
        type="submit"
        aria-label="Submit search"
        className="grid w-12 place-items-center border-l-2 border-ink bg-lime transition-colors hover:bg-violet hover:text-white"
      >
        <SearchIcon />
      </button>
    </form>
  );
}
