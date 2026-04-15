import { ProductCard } from "@/components/site/product-card";
import { SectionTitle } from "@/components/site/section-title";
import { bestSellers, newArrivals } from "@/lib/data";

export function BestSellersAndNewArrivals() {
  return (
    <section className="mt-14 grid gap-8 lg:grid-cols-2">
      <div>
        <SectionTitle
          kicker="fan favorites"
          title="Best Sellers"
          description="The makeup sketches customers keep coming back to."
        />
        <div className="grid gap-5">
          {bestSellers.slice(0, 2).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div>
        <SectionTitle
          kicker="fresh from the atelier"
          title="New Arrivals"
          description="New shades and textures to layer into your daily lookbook."
        />
        <div className="grid gap-5">
          {newArrivals.slice(0, 2).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
