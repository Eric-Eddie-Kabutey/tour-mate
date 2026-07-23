import Hero from "@/components/shared/hero";
import StayFeatures from "@/components/shared/stay-features";
import NewsletterSignup from "@/components/stays/news-letter-signup";
import SponsoredFeatures from "@/components/stays/sponsored-feature";

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