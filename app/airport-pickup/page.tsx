import TopRatedVehicles from "@/components/car-rental/top-rated-vehicles";
import Hero from "@/components/shared/hero";
import NewsletterSignup from "@/components/stay/news-letter-signup";
import SponsoredFeatures from "@/components/stay/sponsored-feature";

export default function AirportPickupPage() {
    return (<>        
        <Hero
            backgroundImage="/assets/images/airport-pickup/airport-pickup-bg.jpg" 
            subtitle="Your African Journey, Your Way"
            activeCategory="Airport Pickup" // Highlights active page!
            searchPlaceholder="Airport name or code"
            searchDropdowns={[ "Flight Nature", "Service Type", "Car Type" ]}
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