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
            searchFilters={[
                { label: "Language", type: "select", options: [ "English", "French", "Arabic", "Swahili", "Portuguese", "Spanish" ] },
                { label: "Rating", type: "select", options: [ "4.5* & above", "4* & above", "3.5* & above", "All ratings" ] },
                { label: "Category", type: "select", options: [ "Safari", "City tour", "Cultural", "Adventure", "Wildlife", "Photography" ] },
                { label: "Price", type: "select", options: [ "Under $50", "$50 - $100", "$100 - $250", "$250+" ] },
            ]}
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