import TopRatedVehicles from "@/components/car-rental/top-rated-vehicles";
import Hero from "@/components/shared/hero";
import SmartCarousel, { CarouselItem, FilterConfig } from "@/components/shared/smart-carousel";
import NewsletterSignup from "@/components/stays/news-letter-signup";
import SponsoredFeatures from "@/components/stays/sponsored-feature";

const airportPickupFilters: FilterConfig[] = [
    {
        id: 'passengers',
        label: 'Passengers',
        type: 'counter',        
    },    
    {
        id: 'Sort by',
        label: 'Sort by',
        type: 'select',
        options: [
            'Price Low to High',
            'Price High to Low',
            'Top Rated',
            'Most Popular',
        ],
    },
    { id: 'accessible', label: 'Accessible', type: 'button' },
    {
        id: 'specialNeed',
        label: 'Special Need',
        type: 'select',
        options: ['Wheelchair', 'Child seat', 'Extract luggage', 'Meet & Greet',],
    },
    {
        id: 'priceRange',
        label: 'Price Range',
        type: 'select',
        options: ['Under $30', '$30 - $60', '$60 - $200', '$100+'],
    },
    {
        id: 'Rating',
        label: 'Rating',
        type: 'select',
        options: [ '4.9* & above', '4.7* & above', '4.5* & above', 'All ratings' ],
    },
]

const mockAirportPickup: CarouselItem[] = [
    {
        id: '1',
        title: 'Executive Limo',
        subtitle: 'Rolls Royce Phantom',
        location: 'Lagos (LOS)',		
        rating: 5.0,
        tags: 'Up to 3 pax · Champagne Welcome',
        rawPrice: 250,
        popularity: 100,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>From $250</span>    
                <span className='text-tour-green text-sm ml-1'>/ day</span>
            </>
        ),
        image: '/assets/images/events/events-bg.avif',
    },
    {
        id: '2',
        title: 'Premium Sedan',
        subtitle: 'Mercedes E-Class',
        location: 'Cape Town (CPT)',	
        tags: 'Up to 4 pax · Complimentary Water',
        rating: 4.9,
        rawPrice: 65,
        popularity: 85,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$65</span>
                <span className='text-tour-green text-sm ml-1'>/ trip</span>
            </>
        ),
        image: '/assets/images/events/afro-nation.jpg',
    },
    {
        id: '3',
        title: 'Luxury MPV',
        subtitle: 'Toyota Alphard',
        location: 'Accra (ACC)',	
        tags: 'Up to 7 pax · Wi-Fi On Board',
        rating: 4.9,
        rawPrice: 90,
        popularity: 90,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$90</span>
                <span className='text-tour-green text-sm ml-1'>/ trip</span>
            </>
        ),
        image: '/assets/images/events/chale-wote.jpg',
    },
    {
        id: '4',
        title: 'Business Class',
        subtitle: 'BMW 7 Series',
        location: 'Kigali (KGL)',	
        tags: 'Up to 3 pax · Premium Interior',
        rating: 4.9,
        rawPrice: 150,
        popularity: 100,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$150</span>
                <span className='text-tour-green text-sm ml-1'>/ trip</span>               
            </>
        ),
        image: '/assets/images/events/food-fair.jpg',
    },
]

export default function AirportPickupPage() {
    return (<>        
        <Hero
            backgroundImage="/assets/images/airport-pickup/airport-pickup-bg.jpg" 
            subtitle="Your African Journey, Your Way"
            activeCategory="Airport Pickup" // Highlights active page!
            searchPlaceholder="Airport name or code"
            searchFilters={[
                { label: "Language", type: "select", options: [ "English", "French", "Arabic", "Swahili", "Portuguese", "Spanish" ] },
                { label: "Rating", type: "select", options: [ "4.5* & above", "4* & above", "3.5* & above", "All ratings" ] },
                { label: "Category", type: "select", options: [ "Safari", "City tour", "Cultural", "Adventure", "Wildlife", "Photography" ] },
                { label: "Price", type: "select", options: [ "Under $50", "$50 - $100", "$100 - $250", "$250+" ] },
            ]}
        />

        {/* Top Rated Vehicles: Reusable */}
        <SmartCarousel
            title='Top Rated'
            titleHighlight='Transfer'
            subtitle="Africa's most trusted airport transfer services, loved by frequent flyers"
            filters={airportPickupFilters}
            items={mockAirportPickup}
            itemType='airportPickup'
        />

        {/* Sponsored */}
        <SponsoredFeatures />

        {/* Top Rated Vehicles: Reusable  */}
        <SmartCarousel
            title='Recommended'
            titleHighlight='for You'
            subtitle="Transfer options matched to your arrival airport and group size"
            filters={airportPickupFilters}
            items={mockAirportPickup}
            itemType='airportPickup'
        />

        {/* CTA */}
        <NewsletterSignup />

        {/* Top Rated Vehicles: Reusable */}
        <SmartCarousel
            title='More'
            titleHighlight='Transfer Options'
            subtitle="Speciality vehicles and premium services for every kind of arrival"
            filters={airportPickupFilters}
            items={mockAirportPickup}
            itemType='airportPickup'
        />

    </>)
}