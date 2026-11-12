/**
 * Single source of truth for brand-level settings.
 * Renaming the product later = change `name` here, nothing else.
 */
export const siteConfig = {
  name: "Yoink",
  tagline: "Grab it before it's gone.",
  description:
    "Yoink is a demo storefront built as a full-stack portfolio project: browse, search, and (soon) check out.",
  // NEXT_PUBLIC_ vars are inlined into the browser bundle at build time.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  promo: "Demo store: browse all you want, nothing here is actually for sale (yet).",
} as const;
