import { ReactNode } from "react";

type SimplePageProps = {
  title: string;
  note: string;
  children: ReactNode;
};

export function SimplePage({ title, note, children }: SimplePageProps) {
  return (
    <section className="space-y-6">
      <header className="sketch-panel p-6 sm:p-8">
        <p className="sketch-note text-xl text-[#754f54]">{note}</p>
        <h1 className="font-heading text-stroked mt-2 text-5xl text-[#4f2f34] sm:text-6xl">
          {title}
        </h1>
      </header>
      {children}
    </section>
  );
}
