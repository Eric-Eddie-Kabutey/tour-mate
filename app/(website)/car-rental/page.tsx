import TopRatedVehicles from "@/components/car-rental/top-rated-vehicles";
import Hero from "@/components/shared/hero";
import NewsletterSignup from "@/components/stays/news-letter-signup";
import SponsoredFeatures from "@/components/stays/sponsored-feature";

export default function CarRentalPage() {
    return (<>        
        <Hero
            backgroundImage="/assets/images/car-rental/car-rental-bg.avif" 
            subtitle="Your African Journey, Your Way"
            activeCategory="Car Rental" // Highlights active page!
            searchPlaceholder="Where do you want to stay?"
            searchFilters={[
                { label: "Brand", type: "select", options: [ "Toyota", "Mercedes", "BMW", "Land Rover", "Ford", "Hyundai" ] },
                { label: "Model", type: "select", options: [ "SUV", "Sedan", "4x4/Safari", "Minivan", "Pickup", "Luxury" ] },
                { label: "Price", type: "select", options: [ "Under $300/day", "$60-$120/day", "$120+/day" ] },
                { label: "Transmission", type: "select", options: [ "Automatic", "Manual" ] },
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