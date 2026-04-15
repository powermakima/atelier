type SectionTitleProps = {
  kicker: string;
  title: string;
  description: string;
};

export function SectionTitle({ kicker, title, description }: SectionTitleProps) {
  return (
    <header className="mb-5">
      <p className="sketch-note text-lg text-[#745257]">{kicker}</p>
      <h2 className="font-heading text-stroked text-4xl text-[#4f2f33] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-[#66474b]">{description}</p>
    </header>
  );
}
