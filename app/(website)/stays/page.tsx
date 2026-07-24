import Hero from "@/components/shared/hero";
import { FilterConfig } from "@/components/shared/smart-carousel";
import StayFeatures from "@/components/shared/stay-features";
import NewsletterSignup from "@/components/stays/news-letter-signup";
import SponsoredFeatures from "@/components/stays/sponsored-feature";

const staysFilters: FilterConfig[] = [
    { id: "dates", label: "Dates", type: "date-range", dateLabels: [ "Check-in", "Check-out" ] },
    { id: "Guests", label: "Guest", type: "counter" },
    { id: "Sort by", label: "Sort by", type: "select", options: [ "Price Low to High", "Price High to Low", "Top Rated", "Most Popular" ] },
    { id: "freeCancellation", label: "Free Cancellation", type: "button" },
    { id: "starRating", label: "Star Rating", type: "select", options: [ "5 Stars", "4 Stars", "3 Stars" ] },
    { id: "Rating", label: "Rating", type: "select", options: [ "4.9* & above", "4.7* & above", "4.5* & above", "All ratings" ] },
];


export default function StayPage() {
    return (<>        
        <Hero
            backgroundImage="/assets/images/stay/stays-bg.avif" 
            subtitle="Luxury hotels, apartments and villas across 20+ African countries."
            activeCategory="Stays" // Highlights the Stays icon!
            searchPlaceholder="Where do you want to stay?"
            searchFilters={[
                { label: "Property type", type: "select", options: [ "Hotel", "Apartment", "Villa", "Guesthouse", "Resort", "Hostel" ] },
                { label: "Price", type: "select", options: [ "Under $20", "$50 - $100", "$100 - $200", "$200 - $500", "$500+" ] },
                { label: "Amenities", type: "select", options: [ "Pool", "WiFi", "Gym", "Spa", "Restaurant", "Parking" ] },
            ]}
        />

        {/* Top Rated Stays */}
        <StayFeatures />

        {/* Sponsored */}
        <SponsoredFeatures />

        {/* Recommended stays */}
        <StayFeatures />

        {/* CTA */}
        <NewsletterSignup />

        {/* Stays You Might Liked */}
        <StayFeatures />

    </>)
}