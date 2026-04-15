import { ReactNode } from "react";

import { AnnouncementBar } from "@/components/site/announcement-bar";
import { SiteHeader } from "@/components/site/site-header";

type SketchShellProps = {
  children: ReactNode;
};

export function SketchShell({ children }: SketchShellProps) {
  return (
    <div className="paper-canvas min-h-screen pb-10">
      <AnnouncementBar />
      <SiteHeader />
      <main className="mx-auto mt-6 w-full max-w-7xl px-3 sm:px-6">{children}</main>
      <footer className="mx-3 mt-12 sm:mx-6">
        <div className="sketch-panel grid gap-6 px-5 py-6 sm:grid-cols-3 sm:px-6">
          <div>
            <p className="font-heading text-2xl text-[#57383d]">Atelier</p>
            <p className="mt-2 text-sm text-[#6f5357]">
              makeup as little works of art .:* sketch, blend, glow
            </p>
          </div>
          <div className="text-sm text-[#65484c]">
            <p className="sketch-note text-lg">studio links</p>
            <p>shop all</p>
            <p>shade finder</p>
            <p>shipping and returns</p>
          </div>
          <div className="text-sm text-[#65484c]">
            <p className="sketch-note text-lg">social doodles</p>
            <p>instagram: @ateliercolor</p>
            <p>tiktok: @atelierbeauty</p>
            <p>newsletter: hello@atelier.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
