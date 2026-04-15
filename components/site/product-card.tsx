import Link from "next/link";

import { formatPrice } from "@/lib/data";
import { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="sketch-panel wiggle-hover flex h-full flex-col p-4">
      <div
        className="sketch-outline relative mb-4 h-40 rounded-3xl"
        style={{ backgroundColor: product.colorToken }}
      >
        <span className="sketch-note absolute left-3 top-2 text-base text-[#653f43]">
          {product.shade}
        </span>
      </div>
      <p className="sketch-note text-base text-[#745357]">{product.summary}</p>
      <h3 className="mt-1 font-heading text-3xl leading-tight text-[#4e2f33]">
        {product.name}
      </h3>
      <p className="mt-2 text-sm text-[#6d4c50]">{product.details}</p>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-lg font-semibold text-[#58363a]">
          {formatPrice(product.priceCents)}
        </p>
        <Link
          href={`/product/${product.slug}`}
          className="scribble-button rounded-xl px-4 py-2 text-sm font-semibold"
        >
          view
        </Link>
      </div>
    </article>
  );
}
