import TopRatedVehicles from "@/components/car-rental/top-rated-vehicles";
import Hero from "@/components/shared/hero";
import NewsletterSignup from "@/components/stays/news-letter-signup";
import SponsoredFeatures from "@/components/stays/sponsored-feature";

export default function RestaurantsPage() {
    return (<>        
        <Hero
            backgroundImage="/assets/images/restaurants/restaurants-bg.jpg" 
            subtitle="Your African Journey, Your Way"
            activeCategory="Restaurants" // Highlights active page!
            searchPlaceholder="From - To"
            searchDropdowns={[ "Category", "Rating", "Price Range" ]}
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