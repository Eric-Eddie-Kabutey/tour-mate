import TourCard from "./tour-card";

export function GuidedToursSection() {
    return (
        <TourCard
            badge="Guided Tours"
            titlePrefix="Experience Africa"
            titleHighlight="With Expert Guides"
            buttonText="Explore Tours"
            imageSrc="/assets/images/tours/safari.jpg"
            imageAlt="Safari tour in Africa"
            imagePosition="left"
            cardTitle="Discover Ghana's most unforgettable journeys"
            cardDescription="From the ancient slave castles of Cape Coast to the sacred Ashanti shrines of Kumasi and the lively streets of Accra, Tourmate's curated tours put you in the hands of passionate local Ghanaian guides."
            benefits={[
                "Local expert guides fluent in English",
                "Small-group & private tour options",
                "Fully customisable itineraries",
                "24/7 in-trip support from Tourmate",
            ]}
        />
    );
}

export function LocalShopsSection() {
    return (
        <TourCard
            badge="Local Shops"
            titlePrefix="Shop Local."
            titleHighlight="Take Africa Home."
            buttonText="Explore Shops"
            imageSrc="/assets/images/shops/local-shop.avif"
            imageAlt="Local artisan arranging textiles"
            imagePosition="right" // <--- This flips the layout to match your new screenshot
            cardTitle="Handpicked artisan goods from across Ghana"
            cardDescription="Discover Kente cloth, Adinkra prints, Ashanti goldweights, hand-carved stools, and colourful bead jewellery. Every purchase directly supports Ghanaian artisans and local communities."
            benefits={[
                "Kente & Adinkra woven textiles",
                "Ashanti gold jewellery & beadwork",
                "Hand-carved stools & wooden masks",
                "Batik fabrics & hand-painted pottery",
            ]}
        />
    );
}