export type Category = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
  alt: string;
};

/**
 * Phase 1 keeps categories in code. In Phase 2 this moves to a Postgres
 * table, and this file becomes a thin data-access function instead.
 */
export const categories: readonly Category[] = [
  {
    slug: "closet",
    name: "Closet",
    blurb: "Organisers and everyday wardrobe fixes.",
    image: "/images/categories/closet.jpg",
    alt: "Trousers and fabrics neatly hung on a wooden multi-tier hanger",
  },
  {
    slug: "self-care",
    name: "Self-care",
    blurb: "Grooming and personal care basics.",
    image: "/images/categories/self-care.jpeg",
    alt: "Toothbrush, razor, deodorant and toiletries laid out on a white wooden table",
  },
  {
    slug: "home",
    name: "Home",
    blurb: "Desk, chair and room upgrades.",
    image: "/images/categories/homes.jpeg",
    alt: "A white desk with a flower vase and a tan chair in a warm wood-panelled room",
  },
  {
    slug: "tech",
    name: "Tech",
    blurb: "Phones, gadgets and accessories.",
    image: "/images/categories/techs.jpeg",
    alt: "A black smartphone with a stylus, shown from the back and front",
  },
  {
    slug: "beauty",
    name: "Beauty",
    blurb: "Makeup picks and brushes.",
    image: "/images/categories/beauty.jpeg",
    alt: "Makeup brushes, lipstick, nail polish and compacts spilling from a pink pouch",
  },
  {
    slug: "pets",
    name: "Pets",
    blurb: "Essentials for dogs, cats and friends.",
    image: "/images/categories/pets.jpeg",
    alt: "A golden retriever and a grey-and-white cat resting together",
  },
  {
    slug: "toys",
    name: "Toys & play",
    blurb: "Small things for small humans.",
    image: "/images/categories/toys.jpeg",
    alt: "A toy plane, red toy car, coloured pencils and building pieces on a yellow background",
  },
  {
    slug: "trending",
    name: "Trending fits",
    blurb: "What everyone is wearing right now.",
    image: "/images/categories/trendings.jpeg",
    alt: "Models wearing a yellow slip dress and a blue pleated set with colourful accessories",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
