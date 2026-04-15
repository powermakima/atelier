import Link from "next/link";

export function BrandStory() {
  return (
    <section className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <article className="sketch-panel relative overflow-hidden p-6 sm:p-8">
        <p className="sketch-note text-xl text-[#6f4a4e]">our brand story</p>
        <h2 className="mt-2 font-heading text-5xl text-[#512f34] sm:text-6xl">
          From sketchpad to vanity.
        </h2>
        <p className="mt-4 max-w-xl text-[#65464b]">
          Atelier began as beauty notes in the margins of fashion illustrations.
          Every formula is made to feel like drawing with color - expressive,
          blendable, and joyful.
        </p>
        <p className="mt-3 max-w-xl text-[#65464b]">
          We create compact rituals for playful makeup lovers: swipe-on blush,
          watercolor tints, and highlights that look like sunlight on textured
          paper.
        </p>
        <Link
          href="/about"
          className="scribble-button mt-6 inline-flex rounded-2xl px-6 py-3 font-semibold"
        >
          Meet Atelier
        </Link>

        <span className="sketch-note absolute right-4 top-4 rotate-6 text-xl text-[#7b575b]">
          ♥ handmade beauty notes
        </span>
      </article>

      <aside className="sketch-panel grid gap-3 p-5">
        <div className="sketch-outline rounded-2xl bg-[#f6d1d6] p-4">
          <p className="sketch-note text-xl text-[#6a454a]">doodle ingredients</p>
          <p className="text-sm text-[#614045]">vegan waxes, plant oils, soft pigments</p>
        </div>
        <div className="sketch-outline rounded-2xl bg-[#f5ddbf] p-4">
          <p className="sketch-note text-xl text-[#6a454a]">atelier mood</p>
          <p className="text-sm text-[#614045]">cute editorial, playful luxury, artsy charm</p>
        </div>
        <div className="sketch-outline rounded-2xl bg-[#ddd0ec] p-4">
          <p className="sketch-note text-xl text-[#6a454a]">drawn details</p>
          <p className="text-sm text-[#614045]">bows, petals, stars, swirls, lip sketches</p>
        </div>
      </aside>
    </section>
  );
}
