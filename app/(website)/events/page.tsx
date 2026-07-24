import Hero from "@/components/shared/hero";
import SmartCarousel, { CarouselItem, FilterConfig } from "@/components/shared/smart-carousel";
import NewsletterSignup from "@/components/stays/news-letter-signup";
import SponsoredFeatures from "@/components/stays/sponsored-feature";

const eventsFilters: FilterConfig[] = [
    {
        id: 'dates',
        label: 'Dates',
        type: 'date-range',
        dateLabels: ['Check-in', 'Check-out'],
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
    {
        id: 'city',
        label: 'City',
        type: 'select',
        options: ['Nairobi', 'Accra', 'Lagos', 'Cape Town', 'Dakar'],
    },
    {
        id: 'Rating',
        label: 'Rating',
        type: 'select',
        options: ['4.9* & above', '4.7* & above', '4.5* & above', 'All ratings'],
    },
]

const mockStays: CarouselItem[] = [
    {
        id: '1',
        title: 'Afro Jazz Night',
        subtitle: 'Music',
        location: 'Nairobi, Kenya',		
        rating: 4.9,
        rawPrice: 95,
        popularity: 100,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>From $25</span>                
            </>
        ),
        image: '/assets/images/events/events-bg.avif',
    },
    {
        id: '2',
        title: 'Nairobi to Cape Town',
        subtitle: 'Off-Road 4x4',
        location: 'Nairobi → Lagos',		
        rating: 4.9,
        rawPrice: 95,
        popularity: 85,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$140</span>
                <span className='text-tour-green text-sm ml-1'>/ day</span>
            </>
        ),
        image: '/assets/images/events/afro-nation.jpg',
    },
    {
        id: '3',
        title: 'Zanzibar Beach Villa',
        subtitle: 'Private Villa',
        location: 'Zanzibar, Tanzania',		
        rating: 4.9,
        rawPrice: 95,
        popularity: 90,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$155</span>
                <span className='text-tour-green text-sm ml-1'>/ day</span>
            </>
        ),
        image: '/assets/images/events/chale-wote.jpg',
    },
    {
        id: '4',
        title: 'Kigali Marathon 2026',
        subtitle: 'Luxury Sedan',
        location: 'Kigali, Rwanda',		
        rating: 4.9,
        rawPrice: 450,
        popularity: 100,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>Free</span>                
            </>
        ),
        image: '/assets/images/events/food-fair.jpg',
    },
]

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
        <SmartCarousel
            title='Top Rated'
            titleHighlight='Events'
            subtitle="The hottest events captivating travellers across the continent right now"
            filters={eventsFilters}
            items={mockStays}
            itemType='events'
        />

        {/* Sponsored */}
        <SponsoredFeatures />

        {/* Top Rated Vehicles: Reusable */}
        <SmartCarousel
            title='Recommended'
            titleHighlight='for You'
            subtitle="Events matching your interests and travel dates"
            filters={eventsFilters}
            items={mockStays}
            itemType='events'
        />


        {/* CTA */}
        <NewsletterSignup />

        {/* Top Rated Vehicles: Reusable */}
        <SmartCarousel
            title='Events'
            titleHighlight='You Might Like'
            subtitle="More experiences worth adding to your Africa itinerary"
            filters={eventsFilters}
            items={mockStays}
            itemType='events'
        />

    </>)
}