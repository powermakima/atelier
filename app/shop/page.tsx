import { ProductCard } from "@/components/site/product-card";
import { SimplePage } from "@/components/site/simple-page";
import { SketchShell } from "@/components/site/sketch-shell";
import { products } from "@/lib/data";

export default function ShopPage() {
  return (
    <SketchShell>
      <SimplePage title="Shop Atelier" note="all products">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </SimplePage>
    </SketchShell>
  );
}
