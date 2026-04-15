import { BestSellersAndNewArrivals } from "@/components/site/best-sellers";
import { BrandStory } from "@/components/site/brand-story";
import { FeaturedProducts } from "@/components/site/featured-products";
import { HeroSection } from "@/components/site/hero-section";
import { SketchShell } from "@/components/site/sketch-shell";

export default function HomePage() {
  return (
    <SketchShell>
      <HeroSection />
      <FeaturedProducts />
      <BrandStory />
      <BestSellersAndNewArrivals />
    </SketchShell>
  );
}
