import TopRatedVehicles from "@/components/car-rental/top-rated-vehicles";
import Hero from "@/components/shared/hero";
import StayFeatures from "@/components/shared/stay-features";
import NewsletterSignup from "@/components/stay/news-letter-signup";
import SponsoredFeatures from "@/components/stay/sponsored-feature";

export default function StayPage() {
    return (<>        
        <Hero
            backgroundImage="/assets/images/car-rental/car-rental-bg.avif" 
            subtitle="Your African Journey, Your Way"
            activeCategory="Car Rental" // Highlights the Stays icon!
            searchPlaceholder="Where do you want to stay?"
            searchDropdowns={[ "Brand", "Model", "Price", "Transmission" ]}
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