import Link from "next/link";
import { CartIcon, UserIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { MobileNav } from "@/components/MobileNav";
import { SearchForm } from "@/components/SearchForm";
import { categories } from "@/lib/categories";

const navItems = categories.map((category) => ({
  href: `/shop/${category.slug}`,
  label: category.name,
}));

// Account and cart arrive with auth and checkout, so for now they are
// honest disabled buttons instead of links that lead nowhere.
const actionButton =
  "flex h-10 items-center gap-2 rounded-xl border-2 border-ink bg-white px-3 font-bold shadow-pop-sm disabled:cursor-not-allowed disabled:opacity-60";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-3 px-4 py-3 sm:px-6">
        <Logo />

        {/* Single search bar: `order-last` drops it to its own row on mobile. */}
        <div className="order-last w-full md:order-none md:w-auto md:flex-1">
          <SearchForm />
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <button
            type="button"
            disabled
            title="Accounts are coming soon"
            className={`${actionButton} hidden sm:flex`}
          >
            <UserIcon />
            Sign in
          </button>
          <button
            type="button"
            disabled
            title="Cart is coming soon"
            className={actionButton}
          >
            <CartIcon />
            <span className="sr-only sm:not-sr-only">Cart</span>
            <span className="sr-only">, empty</span>
          </button>
          <MobileNav items={navItems} />
        </div>
      </div>

      <nav
        aria-label="Categories"
        className="hidden border-t-2 border-ink bg-white md:block"
      >
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 sm:px-6">
          {navItems.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                className="block px-3 py-2 text-sm font-bold transition-colors hover:bg-lime"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
