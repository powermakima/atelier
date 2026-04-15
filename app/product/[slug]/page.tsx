import { notFound } from "next/navigation";

import { ProductCard } from "@/components/site/product-card";
import { SimplePage } from "@/components/site/simple-page";
import { SketchShell } from "@/components/site/sketch-shell";
import { formatPrice, getProductBySlug, products } from "@/lib/data";

type ProductDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.categoryId === product.categoryId && item.id !== product.id)
    .slice(0, 2);

  return (
    <SketchShell>
      <SimplePage title={product.name} note="product detail">
        <section className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <article
            className="sketch-panel min-h-[340px] p-6"
            style={{ backgroundColor: product.colorToken }}
          >
            <p className="sketch-note text-2xl text-[#69454a]">shade: {product.shade}</p>
          </article>
          <article className="sketch-panel space-y-4 p-6">
            <p className="text-sm text-[#65474b]">{product.summary}</p>
            <p className="text-[#66484d]">{product.details}</p>
            <p className="font-heading text-4xl text-[#503135]">
              {formatPrice(product.priceCents)}
            </p>
            <button type="button" className="scribble-button rounded-2xl px-6 py-3 font-semibold">
              Add to Cart
            </button>
          </article>
        </section>

        <section className="mt-8">
          <p className="sketch-note text-xl text-[#734f53]">you might also like</p>
          <div className="mt-3 grid gap-5 sm:grid-cols-2">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </SimplePage>
    </SketchShell>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}
