import FloatingCategories from "@/components/home/floating-categories";
import GuidedTours from "@/components/home/guide-tours";
import Hero from "@/components/home/hero";
import AppDownload from "@/components/home/app-download";
import EarnWithUs from "@/components/home/earn-with-us";
import PromoMarquee from "@/components/home/promo-marquee";
import RecommendedCars from "@/components/home/recommended-cars";
import { LocalShopsSection } from "@/components/shared/sections";
import TrendingDestinations from "@/components/home/trending-destinations";
import TrendingEvents from "@/components/home/trending-events";
import WhyTravelWithUs from "@/components/home/why-travel-with-us";
import AboutTourmate from "@/components/home/about-tourmate";
import FindAffordable from "@/components/home/find-affordable";

export default function Home() {
  return (
    <>
      <FloatingCategories /> {/* floating navbar */}

      <Hero />

      <PromoMarquee />

      <WhyTravelWithUs />

      <TrendingDestinations />

      <GuidedTours />

      <RecommendedCars />

      <LocalShopsSection />

      <TrendingEvents />

      <AppDownload />

      <WhyTravelWithUs />

      <EarnWithUs />

      <FindAffordable />

      <AboutTourmate />
    </>
  );
}
