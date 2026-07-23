import GuidedTours from "@/components/home/guide-tours";
import Hero from "@/components/shared/hero";
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
      <Hero
        backgroundImage="/assets/images/hero-bg.jpg" 
        subtitle="Luxury hotels, card rent, tours, flights,  and local experience seamlessly connected."
        activeCategory="home" // Highlights the Stays icon!
        searchPlaceholder="Where do you want to stay?"
        searchFilters={[
          { label: "Category", type: "select", options: [ "Stays", "Car Rental", "Events", "Airport Pickup", "Tours", "Shops" ] },
          { label: "When?", type: "select", options: [ "Today", "This weekend", "This week", "This month", "Pick dates" ] },
        ]}
      />

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
