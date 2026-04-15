import { ProductCard } from "@/components/site/product-card";
import { SectionTitle } from "@/components/site/section-title";
import { products } from "@/lib/data";

export function FeaturedProducts() {
  return (
    <section className="mt-14">
      <SectionTitle
        kicker="editor's sketch picks"
        title="Featured Products"
        description="Little color studies for cheeks, lips, and lids - pinned like swatches in a beauty sketchbook."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
