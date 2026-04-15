import { Category, Product } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "cat-blush",
    name: "Blush Sticks",
    slug: "blush-sticks",
    description: "Swipe-on cream blush for playful watercolor cheeks.",
  },
  {
    id: "cat-lips",
    name: "Lip Tints",
    slug: "lip-tints",
    description: "Soft-stain lip color with a just-bitten finish.",
  },
  {
    id: "cat-gloss",
    name: "Gloss",
    slug: "gloss",
    description: "Juicy shine with cushiony comfort.",
  },
  {
    id: "cat-palette",
    name: "Palettes",
    slug: "palettes",
    description: "Pocket palettes for sketchbook-level color stories.",
  },
  {
    id: "cat-highlight",
    name: "Highlighters",
    slug: "highlighters",
    description: "Soft-beam luminosity with hand-drawn sparkle.",
  },
];

export const products: Product[] = [
  {
    id: "prod-rose-bloom-stick",
    name: "Rose Bloom Stick",
    slug: "rose-bloom-stick",
    categoryId: "cat-blush",
    priceCents: 2400,
    rating: 4.8,
    reviewCount: 132,
    shade: "Dusty Petal",
    summary: "Blendable blush crayon with cloud-soft pigment.",
    details:
      "A creamy cheek tint with watercolor diffusion and a satiny dry-down.",
    colorToken: "var(--dusty-rose)",
    isBestSeller: true,
  },
  {
    id: "prod-cherry-melt-tint",
    name: "Cherry Melt Tint",
    slug: "cherry-melt-tint",
    categoryId: "cat-lips",
    priceCents: 2100,
    rating: 4.7,
    reviewCount: 89,
    shade: "Faded Cherry",
    summary: "Water-gel tint with soft-focus cherry color.",
    details: "Buildable lip tint that layers from sheer wash to vivid stain.",
    colorToken: "var(--faded-cherry)",
    isBestSeller: true,
  },
  {
    id: "prod-peach-jelly-gloss",
    name: "Peach Jelly Gloss",
    slug: "peach-jelly-gloss",
    categoryId: "cat-gloss",
    priceCents: 1900,
    rating: 4.6,
    reviewCount: 73,
    shade: "Apricot Dew",
    summary: "Non-sticky gloss with syrupy shine and peach glow.",
    details: "Cushion gloss with subtle scent and crystal-like reflection.",
    colorToken: "var(--peach)",
    isNew: true,
  },
  {
    id: "prod-petal-mood-palette",
    name: "Petal Mood Palette",
    slug: "petal-mood-palette",
    categoryId: "cat-palette",
    priceCents: 3200,
    rating: 4.9,
    reviewCount: 164,
    shade: "Lavender Orchard",
    summary: "Six-pan blush and shadow story in romantic pastel tones.",
    details: "A curated palette for soft contours, lids, and blush draping.",
    colorToken: "var(--soft-lavender)",
    isBestSeller: true,
  },
  {
    id: "prod-starlight-veil",
    name: "Starlight Veil",
    slug: "starlight-veil",
    categoryId: "cat-highlight",
    priceCents: 2600,
    rating: 4.8,
    reviewCount: 108,
    shade: "Pearl Cream",
    summary: "Velvet highlighter with candlelit shimmer.",
    details: "Cream-to-powder finish for cheekbones, lids, and cupid's bow.",
    colorToken: "var(--cream)",
    isNew: true,
  },
  {
    id: "prod-coral-cloud-stick",
    name: "Coral Cloud Stick",
    slug: "coral-cloud-stick",
    categoryId: "cat-blush",
    priceCents: 2300,
    rating: 4.5,
    reviewCount: 64,
    shade: "Muted Coral",
    summary: "Lifted coral flush with finger-friendly blend.",
    details: "Smooth cream stick for apples, temples, and nose bridge.",
    colorToken: "var(--muted-coral)",
  },
];

export const bestSellers = products.filter((product) => product.isBestSeller);
export const newArrivals = products.filter((product) => product.isNew);

export function formatPrice(priceCents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(priceCents / 100);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
