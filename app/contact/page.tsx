import { SimplePage } from "@/components/site/simple-page";
import { SketchShell } from "@/components/site/sketch-shell";

export default function ContactPage() {
  return (
    <SketchShell>
      <SimplePage title="Contact" note="send us a beauty note">
        <section className="sketch-panel grid gap-4 p-6 sm:p-8">
          <p className="text-[#65474b]">
            Questions about shades, orders, or collaborations? Send a note and our
            Atelier team will reply shortly.
          </p>
          <label className="grid gap-1">
            <span className="sketch-note text-lg text-[#744f53]">name</span>
            <input className="sketch-outline rounded-xl bg-[#fff5ea] px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="sketch-note text-lg text-[#744f53]">email</span>
            <input className="sketch-outline rounded-xl bg-[#fff5ea] px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="sketch-note text-lg text-[#744f53]">message</span>
            <textarea className="sketch-outline rounded-xl bg-[#fff5ea] px-3 py-2" rows={5} />
          </label>
          <button type="button" className="scribble-button w-fit rounded-xl px-5 py-3 font-semibold">
            Send Note
          </button>
        </section>
      </SimplePage>
    </SketchShell>
  );
}
