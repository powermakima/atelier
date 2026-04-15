import Link from "next/link";

const bubbles = [
  {
    title: "Blush Stick",
    note: "tap + blend",
    color: "var(--blush)",
  },
  {
    title: "Lip Tint",
    note: "cherry stain",
    color: "var(--faded-cherry)",
  },
  {
    title: "Gloss",
    note: "peach shine",
    color: "var(--peach)",
  },
  {
    title: "Palette",
    note: "petal tones",
    color: "var(--soft-lavender)",
  },
];

export function HeroSection() {
  return (
    <section className="relative grid gap-8 overflow-hidden rounded-[2rem] px-3 py-4 lg:grid-cols-[1.1fr_1fr]">
      <div className="relative z-10 flex flex-col gap-6 lg:pt-6">
        <span className="sketch-note inline-block w-fit rounded-full border border-[#78595f] bg-[#fff2e7] px-4 py-1 text-lg text-[#754e52]">
          spring color diary 2026
        </span>

        <h1 className="font-heading text-stroked text-5xl leading-[0.9] text-[#512e33] sm:text-7xl">
          made to blush,
          <br />
          sketched to glow
        </h1>

        <p className="max-w-md text-base text-[#68474c] sm:text-lg">
          Atelier turns makeup into a playful sketchbook ritual with blush
          sticks, lip tints, juicy gloss, petal palettes, and dreamy
          highlighters.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/shop" className="scribble-button px-6 py-3 text-lg font-semibold">
            Shop Atelier
          </Link>
          <Link
            href="/about"
            className="wiggle-hover sketch-outline rounded-2xl bg-[#fff4eb] px-5 py-3 font-medium text-[#5b3b40]"
          >
            Read our story
          </Link>
        </div>

        <div className="flex max-w-full items-center gap-4 overflow-x-auto pb-1 pr-1 sm:gap-5">
          {bubbles.map((bubble) => (
            <article
              key={bubble.title}
              className="sketch-circle wiggle-hover flex h-32 w-32 shrink-0 flex-col items-center justify-center gap-1 rounded-full p-3 text-center sm:h-36 sm:w-36"
              style={{ backgroundColor: bubble.color }}
            >
              <p className="font-heading text-base leading-tight text-[#4f3135] sm:text-lg">
                {bubble.title}
              </p>
              <p className="sketch-note text-xs text-[#5d4044] sm:text-sm">{bubble.note}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[560px]">
        <div className="sketch-circle relative h-[88%] w-[86%] overflow-hidden rounded-[45%_55%_50%_50%] bg-[linear-gradient(145deg,#fbf2ea,#f9ece4,#f7e7e0,#f5e4de,#f3e3df,#f1e5e4)] p-6">
          <div className="sketch-panel flex h-full w-full flex-col justify-between bg-[#fff6eb]/75 p-5">
            <p className="sketch-note text-xl text-[#70474c]">atelier muse / look 01</p>
            <div>
              <p className="font-heading text-4xl text-[#5a363b] sm:text-5xl">Cherry Veil</p>
              <p className="mt-2 max-w-xs text-sm text-[#68484c]">
                creamy cheeks, blurred lip tint, and a luminous pearl highlight.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="sketch-outline rounded-full bg-[#f7ced4] px-3 py-1 text-sm text-[#5f4044]">
                🍒 tint
              </span>
              <span className="sketch-outline rounded-full bg-[#f8dfc2] px-3 py-1 text-sm text-[#5f4044]">
                ✨ glow
              </span>
            </div>
          </div>
        </div>

        <span className="sketch-note absolute left-2 top-2 rotate-[-8deg] text-xl text-[#7c565a]">
          ✿ soft petals only
        </span>
        <span className="sketch-note absolute bottom-8 right-3 rotate-[7deg] text-xl text-[#7c565a]">
          ↝ swipe, tap, blend
        </span>
      </div>
    </section>
  );
}
