import TopRatedVehicles from "@/components/car-rental/top-rated-vehicles";
import Hero from "@/components/shared/hero";
import NewsletterSignup from "@/components/stays/news-letter-signup";
import SponsoredFeatures from "@/components/stays/sponsored-feature";

export default function EventsPage() {
    return (<>        
        <Hero
            backgroundImage="/assets/images/events/events-bg.avif" 
            subtitle="Your African Journey, Your Way"
            activeCategory="Events" // Highlights active page!
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