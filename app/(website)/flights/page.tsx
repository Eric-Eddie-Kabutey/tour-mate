import TopRatedVehicles from "@/components/car-rental/top-rated-vehicles";
import Hero from "@/components/shared/hero";
import NewsletterSignup from "@/components/stays/news-letter-signup";
import SponsoredFeatures from "@/components/stays/sponsored-feature";

export default function FlightsPage() {
    return (<>        
        <Hero
            backgroundImage="/assets/images/flights/flights-bg.jpg" 
            subtitle="Your African Journey, Your Way"
            activeCategory="Flights" // Highlights active page!
            searchPlaceholder="From - To"
            searchFilters={[
                { label: "Departure date", type: "date" }, // Renders the beautiful Date Picker
                { label: "Cabin Class", type: "select", options: [ "Economy", "Business", "First Class", "Premium Economy" ] },
                { label: "Trip type", type: "select", options: [ "Round Trip", "One Way" ] },
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