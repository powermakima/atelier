import { SimplePage } from "@/components/site/simple-page";
import { SketchShell } from "@/components/site/sketch-shell";

export default function CheckoutPage() {
  return (
    <SketchShell>
      <SimplePage title="Checkout" note="final touches">
        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="sketch-panel grid gap-4 p-6">
            <label className="grid gap-1">
              <span className="sketch-note text-lg text-[#744f53]">full name</span>
              <input
                className="sketch-outline rounded-xl bg-[#fff5ea] px-3 py-2"
                placeholder="Ari Atelier"
              />
            </label>
            <label className="grid gap-1">
              <span className="sketch-note text-lg text-[#744f53]">email</span>
              <input
                className="sketch-outline rounded-xl bg-[#fff5ea] px-3 py-2"
                placeholder="hello@atelier.com"
              />
            </label>
            <label className="grid gap-1">
              <span className="sketch-note text-lg text-[#744f53]">shipping address</span>
              <textarea
                className="sketch-outline rounded-xl bg-[#fff5ea] px-3 py-2"
                rows={4}
                placeholder="123 Petal Street"
              />
            </label>
            <button type="button" className="scribble-button mt-2 rounded-xl px-5 py-3 font-semibold">
              Place Order
            </button>
          </form>

          <aside className="sketch-panel h-fit p-6">
            <p className="sketch-note text-xl text-[#6d4a4f]">payment note</p>
            <p className="mt-2 text-[#65464b]">
              Connect Stripe, PayPal, or wallet providers in the backend payment
              service.
            </p>
          </aside>
        </section>
      </SimplePage>
    </SketchShell>
  );
}
