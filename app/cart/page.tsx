import Link from "next/link";

import { SimplePage } from "@/components/site/simple-page";
import { SketchShell } from "@/components/site/sketch-shell";
import { formatPrice, products } from "@/lib/data";

const cartMock = [
  { productId: "prod-rose-bloom-stick", quantity: 1 },
  { productId: "prod-cherry-melt-tint", quantity: 2 },
];

export default function CartPage() {
  const lines = cartMock
    .map((line) => {
      const product = products.find((productItem) => productItem.id === line.productId);
      if (!product) {
        return null;
      }

      return {
        ...line,
        product,
        subtotal: product.priceCents * line.quantity,
      };
    })
    .filter((line): line is NonNullable<typeof line> => Boolean(line));

  const total = lines.reduce((sum, line) => sum + line.subtotal, 0);

  return (
    <SketchShell>
      <SimplePage title="Your Cart" note="ready to checkout">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {lines.map((line) => (
              <article key={line.productId} className="sketch-panel flex items-center justify-between p-4">
                <div>
                  <p className="font-heading text-3xl text-[#4c2e32]">{line.product.name}</p>
                  <p className="text-sm text-[#67484d]">qty {line.quantity}</p>
                </div>
                <p className="text-lg font-semibold text-[#5b383d]">{formatPrice(line.subtotal)}</p>
              </article>
            ))}
          </div>

          <aside className="sketch-panel h-fit p-5">
            <p className="sketch-note text-xl text-[#704e52]">order sketch</p>
            <p className="mt-2 font-heading text-4xl text-[#503237]">{formatPrice(total)}</p>
            <Link href="/checkout" className="scribble-button mt-4 inline-flex rounded-xl px-5 py-3 font-semibold">
              Continue to Checkout
            </Link>
          </aside>
        </section>
      </SimplePage>
    </SketchShell>
  );
}
