import { SimplePage } from "@/components/site/simple-page";
import { SketchShell } from "@/components/site/sketch-shell";

export default function AboutPage() {
  return (
    <SketchShell>
      <SimplePage title="About Atelier" note="our philosophy">
        <section className="grid gap-5 md:grid-cols-2">
          <article className="sketch-panel p-6">
            <h2 className="font-heading text-4xl text-[#4e2e33]">A little color studio</h2>
            <p className="mt-3 text-[#65464b]">
              Atelier is a boutique makeup label inspired by sketchbooks,
              backstage notes, and hand-colored beauty editorials.
            </p>
          </article>
          <article className="sketch-panel p-6">
            <h2 className="font-heading text-4xl text-[#4e2e33]">Artful formulas</h2>
            <p className="mt-3 text-[#65464b]">
              We design textures that layer like pencil and watercolor: soft,
              buildable, and playful from day to night.
            </p>
          </article>
        </section>
      </SimplePage>
    </SketchShell>
  );
}
