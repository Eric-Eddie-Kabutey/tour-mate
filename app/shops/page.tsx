import TopRatedVehicles from "@/components/car-rental/top-rated-vehicles";
import Hero from "@/components/shared/hero";
import NewsletterSignup from "@/components/stay/news-letter-signup";
import SponsoredFeatures from "@/components/stay/sponsored-feature";

export default function ShopsPage() {
    return (<>        
        <Hero
            backgroundImage="/assets/images/shops/shops-bg.avif" 
            subtitle="Your African Journey, Your Way"
            activeCategory="Shops" // Highlights active page!
            searchPlaceholder="City or neighborhood"
            searchDropdowns={[ "Category", "Rating", "Price" ]}
        />

        {/* Top Rated Vehicles: Reusable */}
        <TopRatedVehicles />

        {/* Sponsored */}
        <SponsoredFeatures />

        {/* Top Rated Vehicles: Reusable */}
        <TopRatedVehicles />

        {/* CTA */}
        <NewsletterSignup />

        {/* Top Rated Vehicles: Reusable */}
        <TopRatedVehicles />

    </>)
}