"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";

type NavItem = { href: string; label: string };

/**
 * This is a Client Component ("use client") because it needs state (open or
 * closed) and a browser event listener. Everything else in the header stays
 * a Server Component, so only this small island ships JavaScript.
 */
export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  // Close on Escape. The cleanup function removes the listener so we never
  // stack up duplicates when `open` changes.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="grid h-10 w-10 place-items-center rounded-xl border-2 border-ink bg-white shadow-pop-sm"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav
        id={panelId}
        aria-label="Categories"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b-2 border-ink bg-cream p-4 shadow-pop"
      >
        <ul className="grid grid-cols-2 gap-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg border-2 border-ink bg-white px-3 py-2 font-bold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
